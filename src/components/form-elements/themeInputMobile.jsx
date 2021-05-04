import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';


const InputField = ({ register, errors }) => {

    return (
        <>
            <TextField style={{ width: '3rem', borderRight: '1 px solid red' }} autoComplete="new-password" InputProps={{
                autoComplete: 'none',
                maxLength: 3,
                disableUnderline: true, underline: {
                    "&&&:before": {
                        borderBottom: "none"
                    },
                    "&&:after": {
                        borderBottom: "none"
                    },
                    '&&:focus': {
                        border: 'none'
                    }
                },


            }}
                inputProps={{ maxLength: 3 }}
                defaultValue='+91'
                name='country_code'
                inputRef={register}
            />
            <div style={{ height: '2.5rem', width: '1px', marginRight: '10px', backgroundColor: '#e1e1e1' }} />



        </>


    )
}



const ThemeInputMobile = ({
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
                InputProps={{

                    startAdornment: (
                        <InputAdornment position="start">
                            <InputField register={register} errors={errors} />
                        </InputAdornment>
                    ),
                }}

                {...rest}

            />
            <div style={{ display: 'flex', justify: 'flex-start', color: 'tomato', marginTop: '.5rem', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>

            </div>
        </>
    )
}

export default ThemeInputMobile;