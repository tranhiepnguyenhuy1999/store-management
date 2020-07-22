import React from 'react'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'
function MainPage() {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={6}>
                <Card title="Staff" bordered={false}  style={{cursor: 'pointer'}}>
                Staff of the store:
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Product" bordered={false}  style={{cursor: 'pointer'}}>
                Product
                </Card>
            </Col>
            <Col span={6}>
                <Link to='/product/category'>
                <Card title="Product Category" style={{cursor: 'pointer'}} bordered={false}>
                Category
                </Card>
                </Link>
            </Col>
            </Row>
         </div>
    )
}

export default MainPage
