import {createSlice} from '@reduxjs/toolkit';

const receipt= createSlice(
    {
        name: 'receipt',
        initialState: [],
        reducers:{
            addNewReceipt: (state, action)=>{
                state.push(action.payload);
            },
        }
    }
);
const {actions, reducer}= receipt;
export const {
    addNewReceipt,
}=actions;
export default reducer;