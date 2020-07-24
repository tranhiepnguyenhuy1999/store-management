import React from 'react';
import { InputNumber , Col} from 'antd';



function CustomerInputNumber({field, form, title, min, max}) {
    const {errors, touched}= form;
    const {name}= field;
    const onChange=(value)=>{
            form.setFieldValue(name, value)
    }
    return (
        <Col style={{margin: '1em 0'}}>
            <label for={field.name}>{title}</label>
            <InputNumber min={min} max={max} {...field}
            onChange={onChange}
            />
            {/* Validation Errors  */}
            {errors[name]&&touched[name]?<span style={{color: 'red'}}>{errors[name]}</span>: null}
            
        </Col>
    )
}

export default CustomerInputNumber