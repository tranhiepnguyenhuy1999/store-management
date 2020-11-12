import { Button, Col, Input, Row, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {removeCus} from './customerSlide'
const { Search } = Input;
function Customer() {
    const customer = useSelector(state => state.customer);
        useEffect(()=>{
            setData(customer)
        },[customer])
    const dispatch=useDispatch();
    const history=useHistory();
    const [data, setData]=useState([])
    // Remove Customer
    const onDeleteCustomer=(id)=>{
        const action=removeCus(id);
        dispatch(action);
    }
    // Fix Customer
    const onFixCustomer=(id)=>{
        history.push(`/customer/${id}`)
    }
    // Search by Customer Name
    const onSearchByName=(value)=>{
      if(value==='')
      setData(customer)
      else{
      getData(value)
      }
    }
    const getData=(value)=>{
      let newData=[...customer]
      if(isNaN(value))
      newData=customer.filter(cus=>cus.name.toLowerCase().search(value.toLowerCase())!==-1)
      else
      newData=customer.filter(cus=>cus.phoneNumber.search(value) !==-1)
      setData(newData)
    }

    // Table head of antd
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type='primary' icon={<DeleteOutlined/>} onClick={()=>onDeleteCustomer(record.id)}></Button>
                <Button icon={<EditOutlined/>} onClick={()=>onFixCustomer(record.id)}></Button>
              </Space>
            ),
          },
          {
            title: 'Birthday',
            dataIndex: 'birth',
            key: 'birth',
            render: (text, record)=>{
                return record.birth.format('DD/MM/YYYY')
            }
          },
      ];    
    return (
        <div>
        <Col style={{marginBottom: '1em'}}>
        <Row>
            <Link to='/customer/add' style={{margin:'0 1em 0 0'}}>
                    <Button type='none'>Add new customer</Button>
            </Link>
            <Search
              placeholder="Name Search"
              onSearch={onSearchByName}
              style={{ width: 200, margin:'0 1em 0 0' }}
              allowClear
            />
        </Row>
        </Col>
         <Table dataSource={data} columns={columns} rowKey='id'></Table>
        </div>
    )
}

export default Customer
