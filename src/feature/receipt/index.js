import React from 'react';
import {Col, Button}  from 'antd';
import {Link} from 'react-router-dom'
function Receipt() {
    return (
        <Col span={24}>
            <Col>
                <Link to='/receipt/add'>
                    <Button>Add new receipt</Button>
                </Link>
            </Col>

        </Col>
            
    )
}

export default Receipt
