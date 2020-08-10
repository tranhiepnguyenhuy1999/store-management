import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment'
const customer= createSlice(
    {
        name: 'customer',
        initialState: [
            {
                name:"Thanh",
                phoneNumber:"0915330370",
                birth:moment("1997-05-22T03:06:45.380Z"),
                id:5548
            },
            {
                name:"Huy",
                phoneNumber:"0949891099",
                birth:moment("1999-05-12T03:16:33.240Z"),
                id:2514,
            },
            {
                name:"Trần Thị Thắm",
                phoneNumber:"0819663454",
                birth:moment("1968-04-04T02:16:53.701Z"),
                id:2017,
            }
        ],
        reducers:{
            addNewCus: (state, action)=>{
                state.push(action.payload);
            },
            removeCus: (state, action)=>{
                return state.filter(cus => cus.id !== action.payload)
            },
            editCus: (state, action)=>{
                const index= state.findIndex(cus => cus.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
        }
    }
);
const {actions, reducer}= customer;
export const {
    addNewCus,
    removeCus, 
    editCus,}=actions;
export default reducer;