import React from 'react'

const ThemeInput = ({
    name, value, register, errors, isRequired, ...rest
}) => {
    return <div style={{ margin: 10 }}>
        <div><label>{name}{isRequired && ' *'}</label></div>
        <input name={name} ref={register} {...rest} />
        <div>
            {errors[name]?.message}
        </div>
    </div>
}

export default ThemeInput;