import {createSlice} from '@reduxjs/toolkit';

const product= createSlice(
    {
        name: 'product',
        initialState: [
            {
                nameProd:"Sting",
                category:999,
                barCode:"1500584ACD",
                priceImport:"5000",
                priceExport:"12000",
                id: 1999,
            },
            {
                nameProd:"Mì ăn liền Hảo Hảo",
                category:109,
                barCode:"8121OPD",
                priceImport:"1000",
                priceExport:"4000",
                id: 22057,
            },
            {
                nameProd:"Hoa tulip",
                category: 10,
                barCode:"21669A91",
                priceImport:"9000",
                priceExport:"24000",
                id:3847,
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