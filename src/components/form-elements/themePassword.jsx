import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
const ThemePassword = ({
    values,
    handleChange, handleClickShowPassword, handleMouseDownPassword,
    isRequired,
    errors,
    register,
    name,
    ...rest


}) => {
    return (
        <>
            <FormControl variant="outlined" fullWidth required={isRequired} >
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <OutlinedInput

                    type={values.showPassword ? 'text' : 'password'}
                    name={name}
                    inputRef={register}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}

                />
            </FormControl>
            <div style={{ display: 'flex', justify: 'flex-start', color: 'tomato', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>

            </div>
        </>

    )
}
export default ThemePassword