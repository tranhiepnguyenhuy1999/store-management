import { Button, Col, Input, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeCat } from './categorySlide';
const { Search } = Input;
function Category() {
    const catogory = useSelector(state => state.category);
        useEffect(()=>{
            setData(catogory)
        },[catogory])
    
   
    const dispatch=useDispatch();
    const history=useHistory();
    const [data, setData]=useState([])
    // Remove category
    const onDeleteCat=(id)=>{
        const action=removeCat(id);
        dispatch(action);
    }
    // Fix category
    const onFixCat=(id)=>{
        history.push(`/product/category/${id}`)
    }
    // Search by Category Name
    const onSearchCategory=(value)=>{
      if(value==='')
      setData(catogory)
      else{
        getData(value)
      }
    }

    const getData=(value)=>{
      const newData=catogory.filter(cat=>cat.nameCat.toLowerCase().search(value)!==-1)
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
          dataIndex: 'nameCat',
          key: 'nameCat',
        },
        {
          title: 'CatID',
          dataIndex: 'idCat',
          key: 'idCat',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type='primary' onClick={()=>onDeleteCat(record.id)}>Delete</Button>
                <Button onClick={()=>onFixCat(record.id)}>Fix</Button>
              </Space>
            ),
          },
      ];    
    return (
        <div>
        <Col style={{marginBottom: '1em'}}>
        <Row>
            <Link to='/product/category/add' style={{margin:'0 1em 0 0'}}>
                    <Button type='none'>Add new category</Button>
            </Link>
            <Search
              placeholder="Name Search"
              onSearch={onSearchCategory}
              style={{ width: 200 }}
              allowClear
            />
        </Row>
        </Col>
         <Table dataSource={data} columns={columns}></Table>
        </div>
    )
}

export default Category
