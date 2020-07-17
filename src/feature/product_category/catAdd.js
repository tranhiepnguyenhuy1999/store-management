import React, {useEffect} from 'react';
import { Formik, FastField, Form } from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import CustomInput from '../../customerField/customerInput';
import {addNewCat} from './productCatSlide'
function CatAdd() {
    useEffect(()=>{
            // Get data from Restful API...
    },[])

    const catogory = useSelector(state => state.category);
    const dispatch=useDispatch();

    const ramdomId=()=>{
        return Math.trunc(Math.random()*10000);
    }
    return (
        <div>
        {catogory.length>0&&<div>{catogory.map(cat=> <div id={cat.id}>{cat.nameCat}</div>)}</div>}
        <Formik
        initialValues={{
            nameCat : '',
            idCat: 0,
        }   
        }
        onSubmit={(values,{resetForm},e,)=>{
            const newId=ramdomId();
            const action= addNewCat({...values, id: newId});
            console.log(action)
            dispatch(action);
            resetForm({values:''})
            e.preventDefault();
        }}
        >
            {formikProps =>{
                
            return <Form>
                {/* Input Category */}
                    <FastField
                    name='nameCat'
                    component={CustomInput}
                    type='text'
                    placeholder='Pls enter catogory...'
                    >
                    </FastField>
                {/* Input Id Category */}
                    <FastField
                    name='idCat'
                    component={CustomInput}
                    type='text'
                    placeholder='Pls enter catogory...'
                    >
                    </FastField>
                <button type="submit" >Add </button>
            </Form>
            }
            }
        </Formik>
        </div>
    )
}

export default CatAdd;
