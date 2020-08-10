import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment'
const bill= createSlice(
    {
        name: 'bill',
        initialState:[
            {
                money:5000,
                customer:5548,
                id:41,
                date:moment("2020-08-10T03:21:53.045Z"),
                products :[
                    {nameProd:"Mì ăn liền Hảo Hảo",
                    category:109,
                    barCode:"8121OPD",
                    priceImport:"1000",
                    priceExport:"4000",
                    id:22057,
                    amount:0,
                    number:1}
                ]
            }
        ],
        reducers:{
            addNewBill: (state, action)=>{
                state.push(action.payload);
            },
            removeBill: (state, action)=>{
            return state.filter(bill => bill.id !== action.payload)
            }
        }
    }
);
const {actions, reducer}= bill;
export const {
    addNewBill,
    removeBill, }=actions;
export default reducer;