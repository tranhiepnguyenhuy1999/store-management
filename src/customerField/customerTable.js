import { Button, Col, InputNumber, Select, Space, Table } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
const { Option } = Select;
function CustomerTable({field, form, data}) {
    const product=useSelector(state=>state.product)
    const handleChange=(value)=>{   
        if(data.findIndex(item => item.id ===value)===-1)
        {
            const choose=product.find(product =>product.id === value);
            form.setFieldValue(field.name, [...data, {...choose, number: 1}])
        }
        
    }
    function onChangeNumber(value, id) {
        const index= data.findIndex(item=> item.id===id)
        const newData=[...data]
        newData[index].number=value
        form.setFieldValue(field.name, newData)
      }
    const onDeleteProduct=(id)=>{
        form.setFieldValue(field.name, data.filter(item => item.id !== id))
    }
    // Column key
    const columns = [
        {
          title: 'Barcode',
          dataIndex: 'barCode',
          key: 'barCode',
        },
        {
          title: 'Product',
          dataIndex: 'nameProd',
          key: 'nameProd',
        },
        {
          title: 'Number',
          dataIndex: 'number',
          key: 'number',
          render: (text,record)=>{
            return <InputNumber min={1} max={100000} value={record.number} onChange={(value)=>onChangeNumber(value, record.id)} />
          }
        },
        {
            title: 'Price',
            dataIndex: 'priceExport',
            key: 'priceExport',
        },
        {
            title: 'Total',
            key: 'total',
            render: (text, record) =>{
                return (record.priceExport * record.number)
            }
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button icon={<DeleteOutlined/>} onClick={()=>onDeleteProduct(record.id)}></Button>
              </Space>
            ),
          },
      ];
    return (
        <Col>
            <Select
                showSearch  
                style={{ width: `100%`, margin: `0 0 1em 0` }}
                placeholder="Select product..."
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                option.nameProd.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
        
            >
                {product.map(product=><Option value={product.id} nameprod={product.nameProd} key={product.id}>{product.barCode} - {product.nameProd}</Option>)}
                {/* value of Option is the value that you want get in onChange select */}
            </Select>
            <Table dataSource={data} columns={columns} rowKey='id'/>
        </Col>        
    )
}

export default CustomerTable