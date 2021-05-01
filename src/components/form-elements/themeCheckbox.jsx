import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import React from 'react';

const ThemeCheckBox = ({
    isChecked,
    handleChange,
    name,
    isRequired,
    label,
    ...rest
}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    onChange={handleChange}
                    name={name}
                    color="primary"

                />
            }


            label={<Typography style={{ color: '#2979ff', fontSize: '1rem' }}>{label}</Typography>}
        />
    )
}
export default ThemeCheckBox