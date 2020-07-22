import React from 'react';
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
function MainPage() {
    const category = useSelector(state => state.category)
    const product = useSelector(state => state.product)
    return (
        
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={6}>
                <Card title="Staff" bordered={false}  style={{cursor: 'pointer'}}>
                Staff of the store:
                </Card>
            </Col>
            <Col span={6}>
                <Link to='/product'>
                <Card title="Product" bordered={false}  style={{cursor: 'pointer'}}>
                Product : {product.length}
                </Card>
                </Link>
            </Col>
            <Col span={6}>
                <Link to='/product/category'>
                <Card title="Product Category" style={{cursor: 'pointer'}} bordered={false}>
                Category : {category.length}
                </Card>
                </Link>
            </Col>
            </Row>
         </div>
    )
}

export default MainPage
