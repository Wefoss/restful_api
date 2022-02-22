import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as taskActions from "../actions/taskActions";

const TaskUpdate = ({ taskId, closedForm }) => {
  const dispatch = useDispatch();
  const updateTask = ({ values, taskId }) =>
    dispatch(taskActions.updateTaskRequest({ values, taskId }));
  
    const onSubmit = (values, formikBag) => {
    updateTask({ values, taskId });
    closedForm(false)
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: "",
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="body" placeholder="Update Task" />
        <button type="submit">Update</button>
      </Form>
    </Formik>
  );
};

export default TaskUpdate;
