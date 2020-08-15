import React from 'react';
import {Col, Button, Space}  from 'antd';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Receipt() {
  const receipt = useSelector(state => state.receipt)
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
                <Button onClick={()=>console.log(record.id)}></Button>
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
