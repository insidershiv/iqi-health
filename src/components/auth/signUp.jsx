import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupValidation } from '../../utils/validation'
import ThemeInput from '../form-elements/themeInput'
import ThemePassword from '../form-elements/themePassword';
import ThemeCheckBox from '../form-elements/themeCheckbox';
import Link from '@material-ui/core/Link';
import ThemeInputMobile from '../form-elements/themeInputMobile';
const SignUp = ({
}) => {
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
  const { register, handleSubmit, errors, setValue } = useForm({
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
    <Grid container direction="column" spacing={3} xs={12} style={{ minHeight: '100vh', margin: 0, padding: 0 }} >
      <Grid item >
        <Typography variant="h1">
          SignUp
                    </Typography>
      </Grid>
      <Grid item style={{ display: 'flex' }}>
        <Typography variant="subtitle1">
          Already have an account?
                    </Typography>
        <Typography variant="subtitle1" color="primary" style={{ marginLeft: '.5rem' }}>
          <Link href="#" >
            Login
      </Link>
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
          <Grid container md={12} sm={12} item spacing={3} direction="column" xs={12} justify="center">
            <Grid item>
              <ThemeInput name='name' label="Full Name" register={register} errors={errors} isRequired fullWidth
              />
            </Grid>
            <Grid item>
              <ThemeInput name='email' label="Email" register={register} errors={errors} isRequired fullWidth />
            </Grid>
            <Grid item>
              <ThemeInputMobile name='mobile' label="Mobile Number" register={register} errors={errors} isRequired fullWidth />
            </Grid>
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
                register={register}
                name="accept_terms"
                isRequired
                label="Agreee to terms and Conditions"
                errors={errors}
              />

            </Grid>
            <Grid container item justify="center">
              <Grid item md={8} sm={8} xs={8}>
                <Button type="submit" variant="contained" color="primary" style={{ borderRadius: '999px', color: 'white', padding: '1rem 2rem' }} fullWidth >
                  Submit
             </Button>
              </Grid>

            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid >
  )
}
export default SignUp