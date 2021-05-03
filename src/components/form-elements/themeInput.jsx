import { TextField } from '@material-ui/core';
import React from 'react'







const ThemeInput = ({
    name, register, errors, isRequired, label, ...rest
}) => {
    return (
        <>
            <TextField

                label={label}
                required={isRequired}
                name={name}
                inputRef={register}
                variant="outlined"

                {...rest}
            />
            <div style={{ display: 'flex', justify: 'flex-start', color: 'tomato', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>

            </div>
        </>
    )
}

export default ThemeInput;