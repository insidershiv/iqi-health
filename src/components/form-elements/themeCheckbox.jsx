import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import React from 'react';

const ThemeCheckBox = ({
    isChecked,
    handleChange,
    name,
    isRequired,
    errors,
    register,
    label,
    ...rest
}) => {
    console.log(isChecked);
    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox

                        inputRef={register}

                        name={name}
                        color="primary"
                        required={isRequired}
                        defaultValue={false}
                    />
                }


                label={<Typography style={{ color: '#2979ff', fontSize: '1rem' }}>{label}</Typography>}

            />
            <div style={{ display: 'flex', justify: 'flex-start', color: 'tomato', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>

            </div>
        </>
    )
}
export default ThemeCheckBox