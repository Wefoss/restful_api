import React from 'react';
import {Formik, Field, Form} from 'formik'

const Taskform = ({formIsClosed}) => {

    const onSubmit = (values, formikBag) => {
        formikBag.resetForm()
        formIsClosed(false)
    }

    return (
        <Formik initialValues={{
            body: '',
            idDone: ''
        }} onSubmit={onSubmit}>
            <Form>
                <Field name='body' placeholder='Add some task'/>
                <Field name='idDone' type='checkbox'/>
                 <button type="submit">Add task</button>
            </Form>
        </Formik>
    );
}



export default Taskform;
