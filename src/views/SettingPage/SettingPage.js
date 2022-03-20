import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import { updateUser } from "../../redux/apiRequest/userRequest";
import DefaultAvatar from "../../components/user/DefaultAvatar/DefaultAvatar";
import FileBase64 from "react-file-base64";
import "./SettingPage.scss";

const SettingPage = () => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState({
    status: false,
    field: "",
  });
  const { user } = useSelector((state) => state.user);
  const [image, setImage] = useState(user.avatar);

  const [userForm, setUserForm] = useState({
    name: user.displayName,
    email: user.email,
  });
  const [showToast, setShowToast] = useState({
    type: "",
    message: "",
    isShow: false,
  });

  useEffect(() => {
    const inputs = document.querySelectorAll(`.setting__field-input`);
    inputs.forEach((input) => {
      if (input.name === isEdit.field) {
        input.removeAttribute("disabled");
        input.focus();
      } else {
        input.setAttribute("disabled", true);
      }
    });
  }, [isEdit]);

  const handleChangeInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleOnEditMode = (field) => {
    setEdit({ status: true, field });
    setUserForm({ name: user.displayName, email: user.email });
  };

  const handleOffEditMode = () => {
    setEdit({ status: false, field: "" });
    setUserForm({ name: user.displayName, email: user.email });
  };

  const handleSubmitUpdateUser = async (field) => {
    let data;
    switch (field) {
      case "displayName":
        data = userForm.name;
        break;
      case "email":
        data = userForm.email;
        break;
      case "avatar":
        data = image;
        break;
    }
    await updateUser(dispatch, field, data);
    setEdit({ status: false, field: "" });
    setShowToast({
      message: "Updated successfully",
      type: "success",
      isShow: true,
    });

    setTimeout(() => {
      setShowToast({
        message: "",
        type: "",
        isShow: false,
      });
    }, 2000);
  };

  return (
    <>
      <div className="setting-container">
        <h1 className="setting__title">Setting</h1>
        <div className="setting__group">
          <h3 className="setting__group-title">Personal Information</h3>
          <div className="setting__field-wrapper">
            <div className="setting__field-content">
              <h4 className="setting__field-title">Your name</h4>
              <input
                type={"text"}
                className="setting__field-input"
                placeholder="Your name"
                value={userForm.name}
                onChange={handleChangeInput}
                name="name"
                disabled
              />
              <p className="setting__field-desc">
                Your name will be displayed on personal page.
              </p>
            </div>
            <div className="setting__field-btn">
              {isEdit.status && isEdit.field === "name" ? (
                <div className="setting__field-btns">
                  <button
                    className="setting__field-btn-save"
                    onClick={() => handleSubmitUpdateUser("displayName")}
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
              ) : (
                <button
                  className="setting__field-btn-edit"
                  onClick={() => handleOnEditMode("name")}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="setting__field-wrapper">
            <div className="setting__field-content d-flex">
              <div className="setting__field-content-wrap">
                <h4 className="setting__field-title">Avatar</h4>
                {isEdit.status && isEdit.field === "avatar" && (
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setImage(base64)}
                  />
                )}
                <p className="setting__field-desc">Your avatar.</p>
              </div>
              <div className="setting__field-avatar-display">
                {image ? <img src={image} /> : <DefaultAvatar />}
              </div>
            </div>
            <div className="setting__field-btn">
              {isEdit.status && isEdit.field === "avatar" ? (
                <div className="setting__field-btns">
                  <button
                    className="setting__field-btn-save"
                    onClick={() => handleSubmitUpdateUser("avatar")}
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
              ) : (
                <button
                  className="setting__field-btn-edit"
                  onClick={() => handleOnEditMode("avatar")}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="setting__field-wrapper">
            <div className="setting__field-content">
              <h4 className="setting__field-title">Email</h4>
              <input
                type={"email"}
                className="setting__field-input"
                placeholder="Your email"
                value={userForm.email}
                onChange={handleChangeInput}
                name="email"
                disabled
              />
              <p className="setting__field-desc">Your email.</p>
            </div>
            <div className="setting__field-btn">
              {isEdit.status && isEdit.field === "email" ? (
                <div className="setting__field-btns">
                  <button
                    className="setting__field-btn-save"
                    onClick={() => handleSubmitUpdateUser("email")}
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
              ) : (
                <button
                  className="setting__field-btn-edit"
                  onClick={() => handleOnEditMode("email")}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showToast.isShow && <ToastNotification showToast={showToast} />}
    </>
  );
};

export default SettingPage;
