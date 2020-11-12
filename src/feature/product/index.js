import { Button, Col, Row, Space, Table, Input, Select, Tag, Breadcrumb, Typography} from 'antd';
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeProd } from './productSlide';
const {Search} = Input;
const {Option} =Select;
const { Title } = Typography;
function Product() {
    const product = useSelector(state => state.product);
    useEffect(()=>{
      setData(product)
    },[product])
    const category=useSelector(state => state.category);
    const dispatch=useDispatch();
    const history=useHistory();
    const [data, setData]= useState('')
    
    const [search]=useState({
      name: '',
      category: undefined
    })
    // Remove product
    const onDeleteProduct=(id)=>{
        const action=removeProd(id);
        dispatch(action);
    }
    // Fix product
    const onFixProduct=(idProduct)=>{
        history.push(`/product/${idProduct}`)
    }
    // Search by name
    const onSearchProductByName=(value)=>{

        const params={...search, name:value}
        getData(params)
    }
    const onSearchProductByCategory=(value)=>{
        const params={...search, category: value}
        getData(params)
    }
    // Get data filter
    const getData=(params)=>{
      let newData=[...product];
      if(params.name!=='')
          newData=product.filter(product=>product.nameProd.toLowerCase().search(params.name.toLowerCase())!==-1)
      if(params.category)
          newData=newData.filter(product=>product.category===params.category)
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
        title: 'Barcode',
        dataIndex: 'barCode',
        key: 'barCode',
      },
      {
        title: 'Name',
        dataIndex: 'nameProd',
        key: 'nameProd',
      },  
      { 
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, record)=>{
            const item= category.find(cat=>cat.id===record.category)
            return<div>{item.name}</div>
        }
      },
      {
        title: 'Price',
        dataIndex: 'priceExport',
        key: 'priceExport',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text, record)=>{
          return (record.amount>0?record.amount:<Tag color="magenta">Sold out</Tag>)
        }
      },
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type='primary' icon={<DeleteOutlined/>} onClick={()=>onDeleteProduct(record.id)}></Button>
              <Button icon={<EditOutlined/>} onClick={()=>onFixProduct(record.id)}></Button>
            </Space>
          ),
        },
      ];    
    return (
        <Col span={24}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Title level={4}>Product</Title></Breadcrumb.Item>
          </Breadcrumb>
        <Col style={{marginBottom: '1em'}}>
        <Row>
            <Link to='/product/add' style={{margin: '0 1em 0 0'}}>
                <Button type='none'>Add new product</Button>
            </Link>
            <Search
              placeholder="Name Search"
              onSearch={onSearchProductByName}
              style={{ width: 200, margin: '0 1em 0 0' }}

              allowClear
            />

                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Find by category"
                  optionFilterProp="children"
                  onChange={onSearchProductByCategory}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  allowClear
                >
                  {category.map(cat=><Option value={cat.id} key={cat.id}>{cat.name}</Option>)}
                </Select>
        </Row>
        </Col>
         <Table dataSource={data} columns={columns} rowKey='id'></Table>
        </Col>
    )
}

    export default Product
