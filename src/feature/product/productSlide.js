import {createSlice} from '@reduxjs/toolkit';

const product= createSlice(
    {
        name: 'product',
        initialState: [{
            nameProd:"Sting",
            category:"999",
            barCode:"1500584ACD",
            priceImport:"5000",
            priceExport:"12000",
            id:3388,},
            {
                nameProd:"Mì ăn liền Hảo Hảo",
                category:"109",
                barCode:"8121OPD",
                priceImport:"1000",
                priceExport:"4000",
                id:8173,
            }
    ],
        reducers:{
            addNewProd: (state, action)=>{
                state.push(action.payload);
            },
            removeProd: (state, action)=>{
                return state.filter(product => product.id !== action.payload)
            },
            editProd: (state, action)=>{
                const index= state.findIndex(product => product.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
        }
    }
);
const {actions, reducer}= product;
export const {
    addNewProd,
    removeProd, 
    editProd,}=actions;
export default reducer;