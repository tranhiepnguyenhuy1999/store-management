import React from 'react';
import { Input, Col } from 'antd';

const { TextArea } = Input;

function CustomerTextArea({field, form, type, placeholder, title, disabled}) {
    const {errors, touched}= form;
    const {name}= field;
    return (
        <Col style={{margin: '1em 0'}}>
            <label htmlFor={field.name}>{title}</label>
            <TextArea
            {...field}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            >
            </TextArea>
            {/* Validation Errors  */}
            {errors[name]&&touched[name]?<span style={{color: 'red'}}>{errors[name]}</span>: null}
        </Col>
    )
}

export default CustomerTextArea
