import React, {useEffect} from 'react';
import {removeCat} from './categorySlide';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Table, Space , Col, Row, Input}from 'antd';
import {Link, useHistory} from 'react-router-dom';
const { Search } = Input;
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
    // Search by Category Name
    const onSearchCategory=(value)=>{
      console.log(value)
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
         <Table dataSource={catogory} columns={columns}></Table>
        </div>
    )
}

export default Category
