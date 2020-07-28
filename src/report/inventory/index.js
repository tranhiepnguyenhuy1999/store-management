import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Button, Col, Table, Input, Select,Row } from 'antd';
const {Search} = Input;
const {Option} =Select;
function Inventory() { 
    const product=useSelector(state=>state.product)
    const category=useSelector(state=>state.category)
    const [data, setData] = useState(product)
    const [search]=useState({
        name: '',
        category: undefined
      })

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
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          render: (text, record)=>{
              const item= category.find(cat=>cat.id===record.category)
              return<div>{item.nameCat}</div>
        }
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        ];
    return (
        <Col span={24}>
            <h1>Báo cáo kiểm kho</h1>
            <h3>Total product: {product.length}</h3>
            <Col style={{marginBottom: '1em'}}>
                <Row>
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
                        {category.map(cat=><Option value={cat.id}>{cat.nameCat}</Option>)}
                        </Select>
                </Row>
            </Col>
            <Table dataSource={data} columns={columns}></Table>
        </Col>
    )
}

export default Inventory
