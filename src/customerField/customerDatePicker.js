import React from 'react';
import { DatePicker, Col } from 'antd';
import moment from 'moment'
function CustomerDatePicker({field, form, placeholder, title}) {
    const onChange=(value, dateString)=> {
        console.log(value._i)
        form.setFieldValue(field.name,moment(value) )
    }

    return (
        <Col style={{margin: '1em 0'}}>
            <label for={field.name}>{title}</label>
            <DatePicker {...field} onChange={onChange} placeholder={placeholder} allowClear={false} format='DD/MM/YYYY'/>
        </Col>
    )
}

export default CustomerDatePicker
