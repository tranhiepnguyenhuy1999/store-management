import React from 'react'
import { FastField, Form, Formik } from 'formik';
import {Col, Button, Row}  from 'antd'
import * as Yup from 'yup';
import CustomerTable from '../../customerField/customerTable';
import CustomerInputNumber from '../../customerField/customerInputNumber';
import {addNewBill} from '../bill/billSlide';
import {useDispatch} from 'react-redux';
function Sale() {

    const dispatch= useDispatch();

    // Create fake ID
    const randomId=()=>{
        return Math.trunc(Math.random()*10000);
      }
    
    const schema = Yup.object().shape({
        money: Yup.number() //name product
          .min(500, 'Too Short!')
          .max(10000000, 'Too Long!')
          .required('This field is Required'),
        products: Yup.array().required('Atleast 1 product in cart')
      });
    return (
        <Col span={24}>
            <Formik
            initialValues={
                {
                    products: [],
                    money: 0,
                }
            }
            validationSchema={schema}

            onSubmit={(values,{resetForm}, e)=>{
                const id=randomId();
                const action= addNewBill({...values, id});
                dispatch(action)
                resetForm({values:''})
                e.preventDefault();
            }}
            >
                    {formikProps=>
                    {
                        const {values}= formikProps;
                        const total= values.products.reduce((acc, cur)=> acc+ cur.number*cur.priceExport, 0);
                        const saleOff=10000;
                        const excessCash= values.money- (total-saleOff);
                        return <Form>
                            <Row>
                                <Col span={16}>
                                <FastField
                                    name='products'
                                    component={CustomerTable}
                                    
                                    placeholder='This is product chose'
                                    title='Product choose'
                                    data={values.products}
                                    >

                                </FastField>
                                </Col>                           
                                <Col span={8}>
                                    <Col>
                                    <FastField
                                        name='money'
                                        component={CustomerInputNumber}

                                        title='Input money'
                                        min={0}
                                        maxx={10000000}
                                    >
                                    </FastField> 
                                    </Col>
                                    <Col>
                                    <div>ToTal</div>
                                    <div>{total}</div>
                                    </Col>
                                    <Col>
                                    <div>Sale Off</div>
                                    <div>{saleOff}</div>
                                    </Col>
                                    <Col>
                                    <div>Total amount</div>
                                    <div>{total-saleOff}</div>
                                    </Col>
                                    <Col>
                                    <div>excess cash</div>
                                    <div>{excessCash}</div>
                                    </Col>
                                </Col>
                          
                            <Button type="primary" htmlType="submit">
                                    Add
                            </Button>
                            </Row>
                            </Form>
                    }
                    }
            </Formik>
   
        </Col>
    )
}

export default Sale
