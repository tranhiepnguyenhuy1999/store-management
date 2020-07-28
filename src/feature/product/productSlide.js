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
                amount: -10,
            },
            {
                nameProd:"Mì ăn liền Hảo Hảo",
                category:109,
                barCode:"8121OPD",
                priceImport:"1000",
                priceExport:"4000",
                id: 22057,
                amount: 0,
            },
            {
                nameProd:"Hoa tulip",
                category: 10,
                barCode:"21669A91",
                priceImport:"9000",
                priceExport:"24000",
                id:3847,
                amount: 15,
            },
            {
                nameProd:"Bánh Snack khoai tây Lays Vị mực Thái Lan",
                category:1999,
                barCode:"202161461",
                priceImport:"5000",
                priceExport:"10.500",
                id:1717,
                amount:100,
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
            increaseProdAmount: (state, action)=>{
                const index= state.findIndex(product => product.id === action.payload.id)
                if(index>-1)
                state[index].amount=state[index].amount + action.payload.amount
                },
            descreaseProdAmount: (state, action)=>{
                const index= state.findIndex(product => product.id === action.payload.id)
                if(index>-1)
                state[index].amount=state[index].amount - action.payload.amount
                },
        }
    }
);
const {actions, reducer}= product;
export const {
    addNewProd,
    removeProd, 
    editProd,
    increaseProdAmount, descreaseProdAmount}=actions;
export default reducer;