import { call, put, takeEvery} from 'redux-saga/effects'
import { getProducts } from './productsSlice'
import axios from 'axios'


function* workGetProducts() { 
    //@ts-ignore
    const products = yield call(() => axios.get(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"))

    yield put(getProducts(products.data))
}

function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProducts)
}

export default productSaga