import {createSlice} from '@reduxjs/toolkit';

const customer= createSlice(
    {
        name: 'customer',
        initialState: [
            {
                nameCus:"Huy",
                phoneNumber:"0915330370",
                birth:'12/05/1999',
                id:4248,
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