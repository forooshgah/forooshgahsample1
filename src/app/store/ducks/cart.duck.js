import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


export const actionTypes = {
    addToCart: "[Cart] ADD",
    removeFromCart: "[Cart] REMOVE",
    changeNumber: "[Cart] CHANGE",
    emptyCart: "[Cart] EMPTY",
};

const initialCartState = {
    products: [],
};


export const reducer = persistReducer(
    { storage, key: "cart", whitelist: ["products"] },(state = initialCartState, action) => {
        switch (action.type) {
            case actionTypes.addToCart: {

                let alreadyExists = false;
                state.products.forEach(el => {
                    if(el.id == action.payload.product.id){
                        alreadyExists = true;
                    }
                });

                if(alreadyExists){
                    let newProds = state.products.map(el => {
                        if(el.id == action.payload.product.id){
                            return {...el, count : el.count+1 }
                        }else{
                            return {...el}
                        }
                    });
                    return { products: newProds}
                }else{
                    action.payload.product.count = 1;
                    return {products : [...state.products, action.payload.product]};
                }
            }
            case actionTypes.removeFromCart: {
                let newProds = state.products.map(p => {
                    if(p.id == action.payload.productId){
                        return {...p, count : p.count - 1};
                    }else{
                        return {...p};
                    }
                });
                return {products : newProds.filter(p => p.count>0)};
            }
            case actionTypes.emptyCart: {
                state.products = [];
                return state;
            }
            default:
                return state;
        }
    }
);



export const cartActions = {
    addToCart: product => ({ type: actionTypes.addToCart, payload: { product } }),
    removeFromCart: productId => ({ type: actionTypes.removeFromCart, payload: { productId } }),
    emptyCart: () => ({ type: actionTypes.emptyCart }),
  };
  


