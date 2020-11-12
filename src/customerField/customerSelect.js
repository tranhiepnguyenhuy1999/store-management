import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
function CustomerSelect({option, field, form, placeholder, title}) {
    const onChange=(value, props)=>{
        console.log(props.id)
    form.setFieldValue(field.name, props.id);
    }
    const valueSelected=option.find( item=> item.id===field.value)?option.find( item=> item.id===field.value):{name:''};
    return (
        <div>
            {title&&<label htmlFor={field.name}>{title}</label>}
            <Select
                showSearch
                style={{ width: `100%` }}
                placeholder={placeholder}
                optionFilterProp="children"
                {...field}
                value={valueSelected.name}
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {option.map(item=><Option value={item.name} id={item.id} key={item.id}>{item.name}</Option>)}
            </Select>
        </div>
    )
}

export default CustomerSelect
