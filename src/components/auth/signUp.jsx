import {
  Box,
  Checkbox,
  Container,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as yup from "yup";

import colors from "../../theme/colors";
import ThemeInput from "../form-elements/themeInput";
import ThemePassword from "../form-elements/themePassword";
import ThemeCheckBox from "../form-elements/themeCheckbox";

const SignUp = ({}) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        spacing={3}
        xs={12}
        style={{ minHeight: "100vh", margin: 0 }}
      >
        <Grid
          container
          item
          md={12}
          alignItems="flex-start"
          direction="column"
          alignContent="center"
        >
          <Grid container item md={6} sm={8} spacing={3} direction="column">
            <Grid container item alignItems="flex-start">
              <Typography variant="h1">SignUp</Typography>
            </Grid>
            <Grid container item alignItems="flex-start">
              <Typography variant="subtitle1">
                Already have an account?
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Login
              </Typography>
            </Grid>

            <Grid item>
              <ThemeInput
                name="name"
                label="Full Name"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item>
              <ThemeInput
                name="email"
                label="Email"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item>
              <ThemeInput
                name="mobile"
                label="Mobile Number"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            {/* <ThemeInput fullWidth /> */}
            <Grid item>
              <ThemeInput
                name="address"
                label="Address"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item>
              <ThemeInput
                name="city"
                label="City"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item>
              <ThemeInput
                name="zip_code"
                label="Zip Code"
                register={register}
                errors={errors}
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item>
              <ThemePassword
                values={values}
                handleChange={handleChange}
                handleMouseDownPassword={handleMouseDownPassword}
                handleClickShowPassword={handleClickShowPassword}
                isRequired
                name="password"
              />
            </Grid>
            <Grid item>
              <ThemePassword
                values={values}
                handleChange={handleChange}
                handleMouseDownPassword={handleMouseDownPassword}
                handleClickShowPassword={handleClickShowPassword}
                isRequired
                name="confirm_password"
              />
            </Grid>

            <Grid item>
              <ThemeCheckBox
                isChecked={isChecked}
                onChange={handleCheckChange}
                name="accept_terms"
                isRequired
                label="Agreee to terms and Conditions"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default SignUp;
