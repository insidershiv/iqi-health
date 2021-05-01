import { Box, Button, Checkbox, Container, FilledInput, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SignupValidation } from '../../utils/validation'
import * as yup from "yup";

import colors from '../../theme/colors'
import ThemeInput from '../form-elements/themeInput'
import ThemePassword from '../form-elements/themePassword';
import ThemeCheckBox from '../form-elements/themeCheckbox';

const SignUp = ({

}) => {

    const schema = yup.object().shape({
        name: yup.string().required("First Name should be required please"),
        // lastName: yup.string().required(),
        email: yup.string().email('incoorect MEail').required('Required'),
        // age: yup.number().positive().integer().required(),
        // password: yup.string().min(4).max(15).required('Required'),
        // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    });
    const [values, setValues] = useState({
        showPassword: false
    })
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckChange = (event) => {

        setIsChecked(event.target.checked);
    };

    const onSubmit = data => console.log(data);
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(SignupValidation),
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (

        // <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container direction="column" align="center" justify="center" spacing={3} xs={12} style={{ minHeight: '100vh', margin: 0 }} >





            <Grid container item md={12} alignItems="flex-start" direction="column" alignContent="center" spacing={2} >
                <Grid container item md={6} sm={8} spacing={3} direction="column">

                    <Grid container item alignItems="flex-start">
                        <Typography variant="h1">
                            SignUp
                    </Typography>
                    </Grid>
                    <Grid container item alignItems="flex-start">
                        <Typography variant="subtitle1">
                            Already have an account?
                    </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Login
                    </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container md={6} sm={12} item spacing={3} direction="column">

                    <Grid item>

                        <ThemeInput name='name' label="Full Name" register={register} errors={errors} isRequired fullWidth />

                    </Grid>
                    <Grid item>

                        <ThemeInput name='email' label="Email" register={register} errors={errors} isRequired fullWidth />
                    </Grid>
                    <Grid item>

                        <ThemeInput name='mobile' label="Mobile Number" register={register} errors={errors} isRequired fullWidth />
                    </Grid>
                    {/* <ThemeInput fullWidth /> */}
                    <Grid item>

                        <ThemeInput name='address' label="Address" register={register} errors={errors} isRequired fullWidth />
                    </Grid>
                    <Grid item>

                        <ThemeInput name='city' label="City" register={register} errors={errors} isRequired fullWidth />
                    </Grid>
                    <Grid item>

                        <ThemeInput name='zip_code' label="Zip Code" register={register} errors={errors} isRequired fullWidth />
                    </Grid>
                    <Grid item>
                        <ThemePassword values={values} handleChange={handleChange} handleMouseDownPassword={handleMouseDownPassword} handleClickShowPassword={handleClickShowPassword} isRequired name="password" errors={errors} register={register} />
                    </Grid>
                    <Grid item>
                        <ThemePassword values={values} handleChange={handleChange} handleMouseDownPassword={handleMouseDownPassword} handleClickShowPassword={handleClickShowPassword} isRequired
                            name="confirm_password" errors={errors} register={register} />
                    </Grid>

                    <Grid container item alignItems="flex-start">
                        <ThemeCheckBox
                            isChecked={isChecked}
                            handleChange={handleCheckChange}
                            name="accept_terms"
                            isRequired
                            label="Agreee to terms and Conditions"
                            errors={errors}
                            register={register}


                        />
                    </Grid>
                    <Grid item md={12} sm={6}>
                        <Grid item md={8}>

                            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: '999px', color: 'white', padding: '1rem 2rem' }} fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            {/* </Grid> */}




            {/* </Grid> */}










        </Grid>


    )
}
export default SignUp