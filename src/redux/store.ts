import {  configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productsSlice'
import createSagaMiddleware from 'redux-saga'
import productSaga from './productSaga'

const saga =  createSagaMiddleware()

const rootReducer = combineReducers({
     cart: cartReducer,
     products: productReducer
})


export default configureStore<any>({
    reducer: rootReducer,
    middleware:[saga]
    })

saga.run(productSaga)
