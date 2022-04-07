import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../../../../redux/apiRequest/courseRequest";
import { setOpenAddCourseModal } from "../../../../../../redux/slices/pageSlice";

const AddCourseModal = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [courseForm, setCourseForm] = useState({
    name: "",
    description: "",
    status: "disabled",
  });
  const { isFetching, error } = useSelector((state) => state.course);

  const handleChangeInput = (e) => {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  const handleSubmitAddCourse = async (e) => {
    e.preventDefault();
    const success = await createCourse(dispatch, {
      ...courseForm,
      thumb: image,
    });

    if (success) {
      setCourseForm({
        name: "",
        description: "",
        status: "disabled",
      });
      dispatch(setOpenAddCourseModal(false));
    }
  };
  return (
    <div className="form-container" onClick={(e) => e.stopPropagation()}>
      <h2 className="form__title">Add Course</h2>
      <form className="form">
        <div className="form__group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Course's name"
            onChange={handleChangeInput}
            value={courseForm.name}
          />
        </div>

        <div className="form__group">
          <label htmlFor="password">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Course's description"
            onChange={handleChangeInput}
            value={courseForm.description}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Thumb</label>
          <span>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
            />
            {image && (
              <div className="course-thumb-preview">
                <img src={image} alt="course-thumb" />
              </div>
            )}
          </span>
        </div>
        <div className="form__group">
          <label htmlFor="password">Status</label>
          <select
            name="status"
            onChange={handleChangeInput}
            value={courseForm.status}
          >
            <option value={"active"}>Active</option>
            <option value={"disabled"}>Disabled</option>
          </select>
        </div>
        {error && (
          <h3 className="message" style={{ marginTop: 10 }}>
            Missing course's name
          </h3>
        )}
        <button
          className="form__button form__button-login"
          onClick={handleSubmitAddCourse}
        >
          {isFetching ? "..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddCourseModal;
