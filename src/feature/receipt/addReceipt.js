import React from 'react'
import { FastField, Form, Formik } from 'formik';
import {Col, Button}  from 'antd'
import * as Yup from 'yup';
import CustomerTable2 from '../../customerField/customerTable2';
import CustomerTextArea from '../../customerField/customerTextArea';
import CustomerInput from '../../customerField/customerInput';
import {addNewReceipt} from './receiptSlide'
import {useDispatch} from 'react-redux'
import {increaseProdAmount} from '../product/productSlide'
function AddReceipt() {
    const dispatch=useDispatch();
    const randomId=()=>{
        return Math.trunc(Math.random()*10000);
      }
      const schema = Yup.object().shape({
        source: Yup.string() //name product
          .required('This field is Required'),
      });
    return (
        <Formik
        initialValues={{
            products:[],
            description: '',
            source:'',
        }    }
        validationSchema={schema}
        onSubmit={(values,{resetForm}, e)=>{
            if(values.products.length===0)
            {
                alert('Need add atleast one product')
                return;    
            }
                
            const id=randomId();
            const action= addNewReceipt({...values, id});
            dispatch(action)
            // increase amount fro each products
            values.products.forEach(product=>{
                const action= increaseProdAmount({id: product.id, amount: product.number})
                dispatch(action)
            })
            resetForm({values:''})
            e.preventDefault();
        }}
        >
            {formikProps=>{
                    const {values} =formikProps
                    console.log(values)
                return <Col>
                        <Form>
                            <FastField
                                name='description'
                                component={CustomerTextArea}

                                type='text'
                                placeholder='Pls add description'
                                title='Description'
                            >
                            </FastField> 
                            <FastField
                                name='source'
                                component={CustomerInput}

                                type='text'
                                placeholder='Pls the source'
                                title='Source'
                            >   
                            </FastField>
                            <FastField
                            name='products'
                            component={CustomerTable2}

                            placeholder='Pls choose product'
                            data={values.products}
                            >   
                            </FastField>
                            <Button type="primary" htmlType="submit">
                                    Add
                            </Button>
                        </Form>
                </Col>
            }}
        </Formik>
    )
}

export default AddReceipt
