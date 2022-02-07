import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Formik, Field, Form} from 'formik'
import * as userActions from '../actions/userActions'


const UserForm = (props) => {
const dispatch = useDispatch()
const postUserReq = ({values}) => dispatch(userActions.postUserRequest({values}))

const onSubmit = (values, formikBag) => {
    postUserReq({values})
    formikBag.resetForm()
}

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
        }} onSubmit={onSubmit}>
            <Form>
            <Field name='firstName' placeholder='firstName' />
            <Field name='lastName' placeholder='lastName' />
            <Field name='email' placeholder='email' />
            <Field name='password' placeholder='password' />
            <Field name='birthday' placeholder='birthday' />
            <button type='submit'>Add User</button>
            </Form>
        </Formik>
    );
}

export default UserForm;
