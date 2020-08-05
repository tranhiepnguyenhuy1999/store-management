import React from 'react';
import {Col, Button, Table}  from 'antd';
import {Link} from 'react-router-dom'
function Receipt() {
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
                return (record.priceExport * record.number *2)
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
        <Col span={24}>
            <Col>
                <Link to='/receipt/add'>
                    <Button>Add new receipt</Button>
                </Link>
            </Col>

        </Col>
            
    )
}

export default Receipt
