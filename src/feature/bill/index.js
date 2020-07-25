import React from 'react';
import {useSelector} from 'react-redux';
import { Button, Col, Space, Table } from 'antd';
import { EyeOutlined,  } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
function Bill() {

    const bill= useSelector(state=> state.bill)
    const history=useHistory();
    const onDetial=(id)=>{
        history.push(`bill/${id}`)
    }
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Total',
          dataIndex: 'products',
          key: 'products',
          render: (text, record)=>{
              return (record.products.reduce((acc, cur)=> acc+ cur.number*cur.priceExport, 0))
          }
        },
        {
          title: 'Money',
          dataIndex: 'money',
          key: 'money',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type='primary' icon={<EyeOutlined />} onClick={()=>onDetial(record.id)}></Button>
              </Space>
            ),
          },
      ];    
    return (
        <div>
        <Col style={{marginBottom: '1em'}}>
        </Col>
         <Table dataSource={bill} columns={columns}></Table>
        </div>
    )
}

export default Bill
