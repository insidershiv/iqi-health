import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react'


// const InputField = () => {
//     return (
//         <TextField style={{ width: '4rem', borderRight: '1 px solid red' }} autoComplete="new-password" InputProps={{
//             autoComplete: 'none',
//             maxLength: 3,
//             disableUnderline: true, underline: {
//                 "&&&:before": {
//                     borderBottom: "none"
//                 },
//                 "&&:after": {
//                     borderBottom: "none"
//                 },
//                 '&&:focus': {
//                     border: 'none'
//                 }
//             },


//         }}
//             inputProps={{ maxLength: 3 }}
//             defaultValue='+91'
//         />


//     )
// }



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
            <div style={{ display: 'flex', justify: 'flex-start', color: 'tomato', marginTop: '.5rem', textTransform: 'capitalize' }}>
                <small>{errors[name]?.message}</small>

            </div>
        </>
    )
}

export default ThemeInput;