import {createSlice} from '@reduxjs/toolkit';

const category= createSlice(
    {
        name: 'category',
        initialState: [{
            id:'999', nameCat: 'Nước tăng lực', idCat:'18A'
        },
        {
            id:'109', nameCat: 'Mỳ ăn liền', idCat:'249XN'
        }
    ],
        reducers:{
            addNewCat: (state, action)=>{
                state.push(action.payload);
            },
            removeCat: (state, action)=>{
                return state.filter(cat => cat.id !== action.payload)
            },
            editCat: (state, action)=>{
                const index= state.findIndex(cat => cat.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
        }
    }
);
const {actions, reducer}= category;
export const {
    addNewCat,
    removeCat, 
    editCat,}=actions;
export default reducer;