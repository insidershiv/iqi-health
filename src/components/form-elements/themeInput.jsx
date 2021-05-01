import { TextField } from '@material-ui/core';
import React from 'react'







const ThemeInput = ({
    name, register, errors, isRequired, label, ...rest
}) => {
    return (
        <>
            <TextField
                id="outlined-number"
                label={label}
                required={isRequired}
                name={name}
                ref={register}
                variant="outlined"

                {...rest}
            />
            <small>{errors[name]?.message}</small>
        </>
    )
}

export default ThemeInput;