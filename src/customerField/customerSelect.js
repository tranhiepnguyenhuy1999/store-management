import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
function CustomerSelect({option, field, form, placeholder, title}) {
    const onChange=(value, props)=>{
    form.setFieldValue(field.name, props.id);
    }
    const valueSelected=option.find( item=> item.id===field.value)?option.find( item=> item.id===field.value):{nameCat:''};
    return (
        <div>
            {title&&<label for={field.name}>{title}</label>}
            <Select
                showSearch
                style={{ width: `100%` }}
                placeholder={placeholder}
                optionFilterProp="children"
                {...field}
                value={valueSelected.nameCat}
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {option.map(cat=><Option value={cat.nameCat} id={cat.id}>{cat.nameCat}</Option>)}
            </Select>
        </div>
    )
}

export default CustomerSelect
