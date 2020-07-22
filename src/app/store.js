import{configureStore} from '@reduxjs/toolkit'
import category from '../feature/product_category/categorySlide'
import product from '../feature/product/productSlide'
const rootReducers={
    category,
    product
};
const store= configureStore({
    reducer: rootReducers
}
);

export default store;