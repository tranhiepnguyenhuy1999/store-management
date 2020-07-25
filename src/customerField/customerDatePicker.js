import React from 'react';
import { DatePicker, Col } from 'antd';
import moment from 'moment'
function CustomerDatePicker({field, form, placeholder, title}) {
    const onChange=(value, dateString)=> {
        form.setFieldValue(field.name,{momnet:moment(value), dateString})
    }
    const {value}=field;
    const initialValue=value?value:{moment:moment('01/01/2000','DD/MM/YYYY')}
    return (
        <Col style={{margin: '1em 0'}}>
            <label for={field.name}>{title}</label>
            <DatePicker {...field} value={initialValue.moment} onChange={onChange} placeholder={placeholder} allowClear={false} format='DD/MM/YYYY'/>
        </Col>
    )
}

export default CustomerDatePicker
