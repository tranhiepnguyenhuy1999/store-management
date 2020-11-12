import React from 'react';
import { Input, Col } from 'antd';


function CustomerInput({field, form, type, placeholder, title, disabled}) {
    const {errors, touched}= form;
    const {name}= field;
    return (
        <Col style={{margin: '1em 0'}}>
            <label htmlFor={field.name}>{title}</label>
            <Input
            {...field}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            >
            </Input>
            {/* Validation Errors  */}
            {errors[name]&&touched[name]?<span style={{color: 'red'}}>{errors[name]}</span>: null}
        </Col>
    )
}

export default CustomerInput
