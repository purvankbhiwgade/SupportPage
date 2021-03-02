import React from 'react'
import { Grid } from '@material-ui/core'
import { UseForm, Form } from '../../Components/UseForm'
import Input from '../../Components/controls/Input'
import Button from '../../Components/Button'


const initialFValues = {
    mobile: '',
    whatsapp: '',
    email: '',
    query: ''
}



const ProductEnquiry = () => {
    const validate = () => {
        let temp = {}
        temp.mobile = values.mobile.length>9?"":"Enter a valid number"
        temp.whatsapp = values.whatsapp?"":"This field is required"
        temp.email = (/$|.*@.*..*/).test(values.email)?"":"Email is not valid"
        temp.query = values.query?"":"This field is required"
        setError=({
            ...temp // What is this?
        })
        
        return Object.values(temp).every(x => x == "")
    }
    
    const { 
        values, 
        setValues, 
        handleInputChange,
        error,
        setError } = UseForm(initialFValues);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate())
            window.alert('testing...')
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        {/* <Input 
                            label="Moble NO."
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            error={error.mobile}
                        />
                        <Input
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Leave your message"
                            name="query"
                            value={values.query}
                            onChange={handleInputChange}
                        /> */}
                    </Grid>
                    <div>
                        <Button 
                            variant="contained"
                            color="primary"
                            size="large"
                            text="submit" />
                    </div>
                </Grid>
            </Form>
    )
}

export default ProductEnquiry;