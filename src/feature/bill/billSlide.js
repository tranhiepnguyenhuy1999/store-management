import {createSlice} from '@reduxjs/toolkit';

const bill= createSlice(
    {
        name: 'bill',
        initialState:[],
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