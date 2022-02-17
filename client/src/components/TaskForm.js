import React from 'react';
import { useDispatch } from 'react-redux'
import {Formik, Field, Form} from 'formik'
import * as taskActions from '../actions/taskActions'

const Taskform = ({formIsClosed, currentId}) => {
 const dispatch = useDispatch()
 const postTask = ({values, currentId}) => dispatch(taskActions.postUserTaskRequest({values, currentId}))

    const onSubmit = (values, formikBag) => {
        formikBag.resetForm()
        postTask({values, currentId})
        formIsClosed(false)
    }

    return (
        <Formik initialValues={{
            body: '',
            isDone: false
        }} onSubmit={onSubmit}>
            <Form>
                <Field name='body' placeholder='Add some task'/>
                <Field name='isDone' type='checkbox'/>
                 <button style={{"border": "solid 2px green"}} type="submit">Plus one Task</button>  
                </Form>
        </Formik>
    );
}



export default Taskform;
