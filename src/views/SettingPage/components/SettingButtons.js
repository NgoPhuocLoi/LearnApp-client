import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const SettingButtons = ({
  field,
  isEdit,
  handleOffEditMode,
  handleOnEditMode,
  handleSubmitUpdateUser,
}) => {
  const { isFetching } = useSelector((state) => state.user);
  return (
    <div className="setting__field-btn">
      {isEdit.status && isEdit.field === field ? (
        isFetching ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          <div className="setting__field-btns">
            <button
              className="setting__field-btn-save"
              onClick={() =>
                handleSubmitUpdateUser(field === "name" ? "displayName" : field)
              }
            >
              Save
            </button>
            <button
              className="setting__field-btn-cancel"
              onClick={handleOffEditMode}
            >
              Cancel
            </button>
          </div>
        )
      ) : (
        <button
          className="setting__field-btn-edit"
          onClick={() => handleOnEditMode(field)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default SettingButtons;
