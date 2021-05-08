import React from 'react';
import NumberFormat from 'react-number-format';

const AmountFormat = ({ value, ...rest }) => {
    return (

        <NumberFormat value={value} displayType={'text'} thousandSeparator={true} suffix={'₫'} {...rest} />
    )
}
export default AmountFormat