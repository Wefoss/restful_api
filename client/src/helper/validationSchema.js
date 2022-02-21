import * as Yup from 'yup'
import { parse, isDate } from "date-fns";

function parsedateString(value, originalValue) {
    const validDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date())
    return validDate
}

export const userValidationSchema = Yup.object({
    firstName: Yup.string().min(5, "should be more 5 symbols").required('firstName is required'),
    lastName: Yup.string().min(5, "should be more 5 symbols").required('lastName is required'),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(7).required(),
    birthday: Yup.date().transform(parsedateString).max(new Date())
})

export const taskValidationSchema = Yup.object({
    body: Yup.string().min(5, "should be more 5 symbols").required('body is required'),
    isDone: Yup.boolean().required()
})