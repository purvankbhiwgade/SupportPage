import React from 'react';
import { Grid } from '@material-ui/core';
import { UseForm, Form } from '../../Components/UseForm';
import Input from '../../Components/controls/Input'
import Button from '../../Components/Button'
import { DatePicker, AppointedTime } from '../../Components/controls/DatePicker';

const getTime = () => {
    var today = new Date();

    return today.getHours() + ":" + today.getMinutes();
}
    

const initialFValues = {
    pickedDate: new Date(),
    pickedTime: getTime()
}



const PersonalDiscussion = () => {
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
                        <DatePicker
                            name="pickedDate"
                            label="Appointment Date"
                            value={values.pickedDate}
                            onChange={handleInputChange}
                            
                        />
                        <AppointedTime
                            name="pickedTime"
                            label="Appointment Time"
                            value={values.pickedTime}
                            onChange={handleInputChange}
                            
                        />
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

export default PersonalDiscussion;