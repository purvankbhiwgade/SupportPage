import { TextField } from '@material-ui/core'
import React from 'react';

const Input = (props) => {

    const { label, name, value, error=null, onChange } = props
    return (
        <TextField 
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error & {error:true,helperText:error})} // What is this?
        />
    )
}
export default Input