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
    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox

                        inputRef={register}

                        name={name}
                        color="primary"
                        required={isRequired}
                        register={register}
                        defaultValue={isChecked}
                        onChange={handleChange}
                        {...rest}
                    />

                }


                label={<Typography style={{ color: '#2979ff', fontSize: '1rem' }}>{label}</Typography>}

            />
            <div style={{ marginTop: '0.2rem', display: 'flex', marginLeft: '0', justifyContent: 'flex-start', color: 'tomato', width: '100%', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>


            </div>
        </>
    )
}
export default ThemeCheckBox