import { EyeOutlined } from '@ant-design/icons';
import { Button, Col, Space, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Bill() {

    const bill= useSelector(state=> state.bill)
    const cus= useSelector(state=> state.customer)
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
          title: 'Customer',
          dataIndex: 'customer',
          key: 'customer',
          render: (text, record)=>{
            if(record.customer){
              return cus.find(item=> item.id===record.customer).name
            }
            return 'Stranger'
          }
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
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: (text, record) =>{
            return record.date.format('DD/MM/YYYY')
          }
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
