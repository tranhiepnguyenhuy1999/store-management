import{configureStore} from '@reduxjs/toolkit'
import category from '../feature/product_category/productCatSlide'
const rootReducers={
    category: category 
};
const store= configureStore({
    reducer: rootReducers
}
);

export default store;