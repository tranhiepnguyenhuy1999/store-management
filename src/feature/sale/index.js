import { Button, Col, Row } from 'antd';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import CustomerInputNumber from '../../customerField/customerInputNumber';
import CustomerTable from '../../customerField/customerTable';
import { addNewBill } from '../bill/billSlide';
import { descreaseProdAmount } from '../product/productSlide';
import moment from 'moment'
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
                if(values.products.reduce((acc, cur)=> acc+ cur.number*cur.priceExport, 0)>values.money)
                    alert('Need more money')
                else{
                const id=randomId();
                const action= addNewBill({...values, id, date: moment()});
                dispatch(action)
                //descrease amount of each product
                values.products.forEach(product=>{
                    const action = descreaseProdAmount({id: product.id, amount: product.number})
                    dispatch(action)
                })
                resetForm({values:''})
                e.preventDefault();
                }
            }}
            >
                    {formikProps=>
                    {
                        const {values}= formikProps;
                        const total= values.products.reduce((acc, cur)=> acc+ cur.number*cur.priceExport, 0);
                        const saleOff=0;
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
                                <Col span={7} style={{margin:`0 0 0 1em`}}>
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
                                    <div>Total Amount</div>
                                    <div>{total-saleOff}</div>
                                    </Col>
                                    <Col style={{margin : `0 0 1em 0`}}>
                                    <div>Excess Cash</div>
                                    <div>{excessCash}</div>
                                    </Col>
                                    <Button type="primary" htmlType="submit">
                                    Add
                                    </Button>
                                </Col>
                          
                          
                            </Row>
                            </Form>
                    }
                    }
            </Formik>
   
        </Col>
    )
}

export default Sale
