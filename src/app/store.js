import{configureStore} from '@reduxjs/toolkit';
import category from '../feature/product_category/categorySlide';
import product from '../feature/product/productSlide';
import bill from '../feature/bill/billSlide';
import customer from '../feature/customer/customerSlide';
import receipt from '../feature/receipt/receiptSlide';
const rootReducers={
    category,
    product,
    bill,
    customer,
    receipt
};
const store= configureStore({
    reducer: rootReducers
}
);

export default store;