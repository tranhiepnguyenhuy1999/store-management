import React, {useEffect} from 'react';
import {removeProd} from './productSlide';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Table, Space , Col, Row}from 'antd';
import {Link, useHistory} from 'react-router-dom'
function Product() {

        useEffect(()=>{
                // Get data from Restful API...
        },[])
    
    const product = useSelector(state => state.product);
    const dispatch=useDispatch();
    const history=useHistory();

    // Remove product
    const onDeleteProduct=(id)=>{
        const action=removeProd(id);
        dispatch(action);
    }
    // Fix product
    const onFixProduct=(id)=>{
        history.push(`/product/${id}`)
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
          dataIndex: 'nameProd',
          key: 'nameProd',
        },
        {
          title: 'Barcode',
          dataIndex: 'barCode',
          key: 'barCode',
        },
        { 
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type='primary' onClick={()=>onDeleteProduct(record.id)}>Delete</Button>
                <Button onClick={()=>onFixProduct(record.id)}>Fix</Button>
              </Space>
            ),
          },
      ];    
    return (
        <div>
        <Col style={{marginBottom: '1em'}}>
        <Row>
            <Link to='/product/add'>
                <Button type='none'>Add new product</Button>
            </Link>
        </Row>
        </Col>
         <Table dataSource={product} columns={columns}></Table>
        </div>
    )
}

    export default Product
