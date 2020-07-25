import {createSlice} from '@reduxjs/toolkit';

const bill= createSlice(
    {
        name: 'bill',
        initialState:[{
            products:[{
                nameProd:"Hoa tulip",
                category:10,
                barCode:"21669A91",
                priceImport:"9000",
                priceExport:"24000",
                id:3847,
                number:1,
            }, {
                nameProd:"Mì ăn liền Hảo Hảo",
                category:109,
                barCode:"8121OPD",
                priceImport:"1000",
                priceExport:"4000",
                id:22057,
                number:1,
            }, {
                nameProd:"Sting",
                category:999,
                barCode:"1500584ACD",
                priceImport:"5000",
                priceExport:"12000",
                id:1999,
                number:1,
            }],
            money:210000,
            id:7120,
        }],
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