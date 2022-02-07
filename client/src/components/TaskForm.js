import React from 'react';
import {Formik, Field, Form} from 'formik'

const Taskform = () => {

    const onSubmit = (formikBag, value) => {
        formikBag.resetForm()
    }

    return (
        <Formik initialValues={{
            body: '',
            idDone: null
        }} onSubmit={onSubmit}>
            <Form>
                <Field name='body' plaseholder='Add some task'/>
                <Field name='idDone' type='checkbox'/>
                 <button type="submit">Add task</button>
            </Form>
        </Formik>
    );
}



export default Taskform;
