import * as Yup from 'yup';
const numbersOnlyRegex = /^[0 - 9]*$/;
const numberRegex = /^[0-9]*$/;
const mobileNumberRegex = /^[1-9][0-9]{9}$/;
const alphabetsOnlyRegex = /^[A-Za-z]+$/;

export const LoginValidation = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
});

export const SignupValidation = Yup.object().shape({
    name: Yup.string()
        .required('Name Field is required'),
    email: Yup.string()
        .required('Email Field is required')
        .email('Please enter valid Email'),
    mobile: Yup.string()
        .required('Mobile Field is required')
        .matches(mobileNumberRegex, "Invalid Number")
        .test('len', 'Must be exactly 10 characters', val => val && val.length === 10),
    address: Yup.string()
        .required('Address Field is required'),
    city: Yup.string()
        .required('City Field is required'),
    zip_code: Yup.string()
        .required('Zip Code Field is required')
        .matches(numberRegex, 'Zip Code should be Digits Only'),
    password: Yup.string()
        .required('Password Field is required'),
    confirm_password: Yup.string()
        .required('Confirm Password Field is required')
        .test('passwords-match', 'Passwords must match', function(value) {
            return this.parent.password === value
        }),
    accept_terms: Yup.boolean()
        .required('Please Accept Tems And Conditions to proceed')




})