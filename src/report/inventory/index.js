import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Col, Table, Input, Select, Row, Checkbox } from 'antd';
const {Search} = Input;
const {Option} =Select;
function Inventory() { 
    const product=useSelector(state=>state.product)
    const category=useSelector(state=>state.category)
    const [data, setData] = useState(product)
    const [off, setOff] = useState(false) // Check the prodduct is sold out
    const search={
        name: '',
        category: undefined
      }

    // Get data filter
    const getData=(params)=>{
    if(product.length===0) return;
    let newData=[...product];
    if(params.name!=='')
        newData=product.filter(product=>product.nameProd.toLowerCase().search(params.name.toLowerCase())!==-1)
    if(params.category)
        newData=newData.filter(product=>product.category===params.category)
    if(off)
        newData=newData.filter(product=>product.amount<1)                             
    setData(newData)
    }
    useEffect(() => {
        getData(search)
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [off])
     // Search by name
     const onSearchProductByName=(value)=>{

        const params={...search, name:value}
        getData(params)
    }
    const onSearchProductByCategory=(value)=>{
        const params={...search, category: value}
        getData(params)
    }
    const onChangeOff= ()=>{
         setOff(!off)
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
                    style={{ width: 200, margin: '0 1em 0 0' }}
                    placeholder="Find by category"
                    optionFilterProp="children"
                    onChange={onSearchProductByCategory}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    
                    allowClear
                    >
                    {category.map(cat=><Option value={cat.id} key={cat.id}>{cat.nameCat}</Option>)}
                    </Select>
                    <Checkbox onChange={onChangeOff}>Sold out</Checkbox>
                </Row>
            </Col>
            <Table dataSource={data} columns={columns} rowKey='id'></Table>
        </Col>
    )
}

export default Inventory
