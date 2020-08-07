import { Button, Col, Table, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
function BillDetail() {
    const {idBill}=useParams();
    const history=useHistory();
    const bill = useSelector(state => state.bill)
    const data= bill.find(bill=> bill.id=== +idBill)

    const total=data.products.reduce((arr, cur)=> arr + cur.number*cur.priceExport, 0)
    const columns = [
        {
          title: 'Barcode',
          dataIndex: 'barCode',
          key: 'barCode',
        },
        {
          title: 'Product',
          dataIndex: 'nameProd',
          key: 'nameProd',
        },
        {
          title: 'Number',
          dataIndex: 'number',
          key: 'number',       
        },
        {
            title: 'Price',
            dataIndex: 'priceExport',
            key: 'priceExport',
        },
        {
            title: 'Total',
            key: 'total',
            render: (text, record) =>{
                return (record.priceExport * record.number)
            }
        },
        
      ];

    return (
        <Col span={24}>
            <Col>
            <Button type='primary' onClick={()=>history.push('/bill')} style={{margin: `0 0 1em  0`}}>
                Return 
            </Button>
            </Col>
            <Col style={{margin: `0 0 1em 0`}}>
                <Col>
                    Time: {data.date.format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </Col>
                <Col>
                    Customer: None
                </Col>
            </Col>
            <Col span={24}>
                <Table dataSource={data.products} columns={columns}></Table>
            </Col>
            <Col>
            <Row>
                <Col span ={8} style={{margin: `0 0 1em 0`}}>
                    Price: {total}
                </Col>
                <Col span ={8} style={{margin: `0 0 1em 0`}}>
                    Sale Off: 0
                </Col>
                <Col span ={8} style={{margin: `0 0 1em 0`}}>
                    Total: {total}
                </Col>
                <Col span ={8} style={{margin: `0 0 1em 0`}}>
                    Input: {data.money}
                </Col>
                <Col span ={8} style={{margin: `0 0 1em 0`}}>
                    Excess Cash: {data.money-total}
                </Col>
            </Row>
            </Col>
        </Col>
    )
}

export default BillDetail
