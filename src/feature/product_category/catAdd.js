import { Button, Col } from 'antd';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import CustomInput from '../../customerField/customerInput';
import { addNewCat, editCat } from './productCatSlide';
import { useHistory, useParams } from "react-router-dom";
function CatAdd() { 
    const dispatch=useDispatch();
    const history= useHistory();
    const {idCat}=useParams();
    const category = useSelector(state => state.category)
    const eCat= category.find(cat=>cat.id===+idCat)
    const initialValues=
    idCat?{
        nameCat: eCat.nameCat,
        idCat: eCat.idCat,
    }:{
        nameCat : '',
        idCat: '',
    };
    const ramdomId=()=>{
        return Math.trunc(Math.random()*10000);
    }
 
    // Validation the values 
    const schema = Yup.object().shape({
        nameCat: Yup.string()
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
                const catU= {...values, id:+idCat}
                const action=editCat(catU)
                console.log(action)
                dispatch(action)               
            }
            else{
                const newId=ramdomId();
                const action= addNewCat({...values, id: newId});
                dispatch(action);
            }
            resetForm({values:''})
            history.push('/product/category')
            e.preventDefault();
        }}
        >
            {formikProps =>{
                
            return<Col span={8}>
                     <Form>
                        {/* Input Category */}
                            <FastField
                            name='nameCat'
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
