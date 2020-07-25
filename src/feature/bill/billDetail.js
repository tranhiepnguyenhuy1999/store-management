import { Button, Col, Table, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
function BillDetail() {
    const {idBill}=useParams();
    const history=useHistory();
    const bill = useSelector(state => state.bill)
    const data= bill.find(bill=> bill.id=== +idBill)

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
                return (record.priceExport * record.number *2)
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
            <Col span={24}>
                <Table dataSource={data.products} columns={columns}></Table>
            </Col>
            <Col>
            <Row>

            </Row>
            </Col>
        </Col>
    )
}

export default BillDetail
