import React from 'react'
import { Button as MuiButton } from '@material-ui/core'

const Button = (props) => {
    const { text, size, color, variant, onClick } = props;

    return (
        <MuiButton 
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}>
        {text}
        </MuiButton>
    )
}

export default Button;