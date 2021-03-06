import React from 'react';
import {Col, Button, Breadcrumb, Typography}  from 'antd'
import {useSelector, useDispatch} from 'react-redux';
import { FastField, Form, Formik } from 'formik';
import {useHistory, useParams} from 'react-router-dom'
import * as Yup from 'yup';
import CustomerSelect from '../../../customerField/customerSelect';
import CustomInput from '../../../customerField/customerInput';
import {addNewProd, editProd} from '../productSlide';
const {Title} =Typography;
function AddProduct() {

    const categoryStore = useSelector(state => state.category);
    const dispatch=useDispatch();
    const history=useHistory();

    const {idProd}=useParams();console.log(idProd)
    const product = useSelector(state => state.product)
    const eProd= product.find(product=>product.id === +idProd)
    
    const initialValues=
    idProd?{
      nameProd: eProd.nameProd,
      category:eProd.category,
      barCode:eProd.barCode,
      priceImport:eProd.priceImport,
      priceExport:eProd.priceExport,
    }: {
      nameProd: '',
      category:'',
      barCode:'',
      priceImport:0,
      priceExport:0,
    };
    const randomId=()=>{
      return Math.trunc(Math.random()*10000);
    }
    // Validation values
    const schema = Yup.object().shape({
      nameProd: Yup.string() //name product
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is Required'),
      barCode: Yup.string()
        .max(50, 'Too Long!')
        .required('This field is Required'),
      category: Yup.number()
      .required('You must choos a category'),
      priceImport: Yup.number()
        .required('This field is Required'),
      priceExport: Yup.number()
        .required('This field is Required'),
    });
    return (
   <div>
          <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values,{resetForm},e,)=>{   
            if(idProd)
            {   
                // eđit product
                const action=editProd({...values,id: +idProd, amount: eProd.amount})
                dispatch(action)               
            }
            else{
                const id=randomId();
                const action= addNewProd({...values, id, amount: 0});
                dispatch(action);
              }
          resetForm({values:''});
            e.preventDefault();
        }
      } 
          >
            {formikProps =>{
              return<Col span={8}>
                <Col>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Title level={4}>Product/ {idProd?`#${idProd}`:'Add'}</Title></Breadcrumb.Item>
                </Breadcrumb>
                <Button onClick={()=>{history.push('/product')}}>Return</Button></Col>
                <Form>
                  <FastField
                    name='barCode'
                    component={CustomInput}
                    
                    type='text'
                    placeholder='Pls enter name product...'
                    title='Barcode (*)'
                  >
                  </FastField>

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
                  placeholder='=Pls choose category'
                  option={categoryStore}
                  title='Category (*)'
                  >
                  </FastField>

                  <FastField
                    name='priceImport'
                    component={CustomInput}
                    
                    type='text'
                    placeholder='Pls enter price import...'
                    title='Import price (*)'
                    >
                  </FastField>

                  <FastField
                    name='priceExport'
                    component={CustomInput}
                    
                    type='text'
                    placeholder='Pls enter price export...'
                    title='Export price (*)'
                    >
                  </FastField>
                  <Button type="primary" htmlType="submit">
                        {idProd?'Edit':'Add'}
                  </Button>
                </Form>
              </Col>
            }
            }
          </Formik>
           
        </div>
    )
}

export default AddProduct
