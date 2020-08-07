import { Button, Col } from 'antd';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import CustomInput from '../../customerField/customerInput';
import { useHistory, useParams } from "react-router-dom";
import CustomerDatePicker from '../../customerField/customerDatePicker';
import {addNewCus, editCus} from './customerSlide'
function AddCustomer() { 
    const dispatch=useDispatch();
    const history= useHistory();    
    const {idCus}=useParams();
    
    const customer = useSelector(state => state.customer)
    const eCus= customer.find(cus=>cus.id===+idCus)
    const initialValues=
    idCus?{
        nameCus: eCus.nameCus,
        phoneNumber: eCus.phoneNumber,
        birth: eCus.birth,
    }:{
        nameCus : '',
        phoneNumber: '',
        birth:null,
    };
    const ramdomId=()=>{
        return Math.trunc(Math.random()*10000);
    }
 
    // Validation the values 
    const schema = Yup.object().shape({
        nameCus: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('This field is Required'),
        phoneNumber: Yup.number()
          .required('This field is Required'),
      });
  
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values,{resetForm},e,)=>{
            const phoneCheck_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if(idCus)
            {   
                // edit customer
                if(phoneCheck_regex.test(values.phoneNumber)){
                const cusU= {...values, id:+idCus}
                const action=editCus(cusU)
                dispatch(action)
                resetForm({values:''});}
                else{
                    alert('The phone is not real')
                }          
            }
            else{
                //add new customer
                if(phoneCheck_regex.test(values.phoneNumber))
                {
                const newId=ramdomId();
                const action= addNewCus({...values, id: newId});
                dispatch(action);
                resetForm({values:''});
                }
                else{
                    alert('The phone is not real')
                }
            }
            e.preventDefault();
        }}
        >
            {formikProps =>{
                const {values}= formikProps;
                console.log(values)
            return<Col span={8}>
                    <Col>
                    <Button onClick={()=>{history.push('/customer')}}>Return</Button>
                    </Col>
                     <Form>
                        {/* Input name customer */}
                            <FastField
                            name='nameCus'
                            component={CustomInput}
                            
                            type='text'
                            placeholder='Pls enter Customer name...'
                            title='Customer Name (*)'
                            >
                            </FastField>
                        {/* Input phone number of customer */}
                            <FastField
                            name='phoneNumber'
                            component={CustomInput}

                            title='Phone Number (*)'
                            type='text'
                            placeholder='Pls enter your phone...'
                            >
                            </FastField>
                            <FastField
                            name='birth'
                            component={CustomerDatePicker}

                            placeholder='Choose date...'
                            title='Date of birth'
                            >
                            </FastField>
                            <Button type="primary" htmlType="submit">
                                {idCus?'Edit':'Add'}
                            </Button>
                    </Form>
            </Col> 
            }
            }
        </Formik>
        </div>
    )
}

export default AddCustomer;
