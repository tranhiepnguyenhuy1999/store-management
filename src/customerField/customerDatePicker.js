import React from 'react';
import { DatePicker, Col } from 'antd';
import moment from 'moment'
function CustomerDatePicker({field, form, placeholder, title}) {
    const onChange=(value)=> {
        console.log(value.format('DD/MM/YYYY'))
        form.setFieldValue(field.name,value)
    }
    const {value}=field;
    const initialValue=value?value:moment()
    return (
        <Col style={{margin: '1em 0'}}>
            <label for={field.name}>{title}</label>
            <DatePicker {...field} value={initialValue} onChange={onChange} placeholder={placeholder} allowClear={false} format='DD/MM/YYYY'/>
        </Col>
    )
}

export default CustomerDatePicker
