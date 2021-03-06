import { Button, Col } from 'antd';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import CustomInput from '../../customerField/customerInput';
import { addNewCat, editCat } from './categorySlide';
import { useHistory, useParams } from "react-router-dom";
function CatAdd() { 
    const dispatch=useDispatch();
    const history= useHistory();
    const {idCat}=useParams();
    const category = useSelector(state => state.category)
    const eCat= category.find(cat=>cat.id===+idCat)
    const initialValues=
    idCat?{
        name: eCat.name,
        idCat: eCat.idCat,
    }:{
        name: '',
        idCat: '',
    };
    const ramdomId=()=>{
        return Math.trunc(Math.random()*10000);
    }
 
    // Validation the values 
    const schema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('This field is Required'),
        idCat: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('This field is Required'),
      });
  
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values,{resetForm},e,)=>{   
            if(idCat)
            {   
                // eđit category
                const catU= {...values, id:+idCat}
                const action=editCat(catU)
                dispatch(action)               
            }
            else{
                //add new category
                const newId=ramdomId();
                const action= addNewCat({...values, id: newId});
                dispatch(action);
            }
            resetForm({values:''})
            e.preventDefault();
        }}
        >
            {formikProps =>{
                
            return<Col span={8}>
                    <Col>
                    <Button onClick={()=>{history.push('/product/category')}}>Return</Button>
                    </Col>
                     <Form>
                        {/* Input Category */}
                            <FastField
                            name='name'
                            component={CustomInput}
                            
                            type='text'
                            placeholder='Pls enter catogory...'
                            title='Category Name (*)'
                            >
                            </FastField>
                        {/* Input Id Category */}
                            <FastField
                            name='idCat'
                            component={CustomInput}

                            title='ID Category (*)'
                            type='text'
                            placeholder='Pls enter catogory...'
                            >
                            </FastField>
                            <Button type="primary" htmlType="submit">
                                {idCat?'Edit':'Add'}
                            </Button>
                    </Form>
            </Col> 
            }
            }
        </Formik>
        </div>
    )
}

export default CatAdd;
