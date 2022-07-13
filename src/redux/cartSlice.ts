import { createSlice} from "@reduxjs/toolkit";
import { ProductProps } from "../components/ProductCard";

const initialState = {
    items:[

    ],
    total: 0
}

interface StateProps {
    items: any;
    total: number
}

interface ActionProps {
    payload: any;
    
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItemToCart : (state:StateProps, action:ActionProps) => {

            const inArray =  state.items.find((item:any) => item.id == action.payload.id)

            if (inArray) {
                return
            }
            if(!inArray){
                state.items = [...state.items, action.payload]
                state.total = state.total + Number(action.payload.price)

            }

            
        },
        removeItem: (state: StateProps, action:any) => {
            const id = action.payload

            const index = state.items.findIndex((item:any) => item.id == id)
            const item = state.items.find((item:any) => item.id == id)

            const priceAmount = item.price * item.quantity

            state.items.splice(index, 1)
            state.total = state.total - priceAmount
        },
        increase: (state: StateProps, action:any) => {
            let itemIndex = state.items.findIndex((item:any) => item.id == action.payload)
            let item = state.items.find((item:any) => item.id == action.payload)

            const newTotal = state.total + Number(item.price)

            state.items[itemIndex].quantity = state.items[itemIndex].quantity + 1
            state.total =  newTotal
        },
        decrease: ( state:StateProps, action:any ) => { 
            let itemIndex = state.items.findIndex((item:any) => item.id == action.payload)
            let item = state.items.find((item:any) => item.id == action.payload)
        
            const newTotal = state.total - Number(item.price)

            state.items[itemIndex].quantity = state.items[itemIndex].quantity -1
            state.total = newTotal
        }
     
    }
})

export const { addItemToCart, removeItem, increase, decrease} = cartSlice.actions

export const selectItems = (state:any) => state.cart.items
export const selectTotal = (state:any) => state.cart.total

export default cartSlice.reducer