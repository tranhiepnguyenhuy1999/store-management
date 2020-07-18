import React, {useEffect} from 'react';
import {removeCat} from './productCatSlide';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Table, Space , Col, Row}from 'antd';
import {Link, useHistory} from 'react-router-dom'
function Category() {

        useEffect(()=>{
                // Get data from Restful API...
        },[])
    
    const catogory = useSelector(state => state.category);
    const dispatch=useDispatch();
    const history=useHistory();

    // Remove category
    const onDeleteCat=(id)=>{
        const action=removeCat(id);
        dispatch(action);
    }
    // Fix category
    const onFixCat=(id)=>{
        history.push(`/product/category/${id}`)
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
            <Link to='/product/category/add'>
                    <Button type='none'>Add new category</Button>
            </Link>
        </Row>
        </Col>
         <Table dataSource={catogory} columns={columns}></Table>
        </div>
    )
}

export default Category
