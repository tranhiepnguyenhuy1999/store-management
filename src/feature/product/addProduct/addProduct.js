import React from 'react';
import {Col}  from 'antd'
import {useSelector} from 'react-redux';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomerSelect from '../../../customerField/customerSelect';
import CustomInput from '../../../customerField/customerInput'
function AddProduct() {

    const categoryStore = useSelector(state => state.category)

    // Validation values
    const schema = Yup.object().shape({
      nameProd: Yup.string() //name product
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is Required'),
      idProd: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is Required'),
    });
    return (

      
        <div>
          <Formik
          initialValues={
            {category:'',
              nameProd: '',

          }
          }>
            {formikProps =>{
                const {values} = formikProps;
                console.log(values);
              return<Form>
                <Col span={8}>
                <FastField
                            name='nameProd'
                            component={CustomInput}
                            
                            type='text'
                            placeholder='Pls enter name product...'
                            title='Product Name (*)'
                            >
                            </FastField>
                <FastField
                name='category'
                component={CustomerSelect}

                type='selected'
                placeholder='yeah'
                option={categoryStore}
                >
                </FastField>
                </Col>
                
              </Form>
            }
            }
          </Formik>
           
        </div>
    )
}

export default AddProduct
