import { createSlice } from "@reduxjs/toolkit";
import CartProduct from "../../components/shared/CartProduct";


const initialState = [
   
]

export const cpSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addProduct: (state,action)=>{
      state.push(action.payload);
    },
    deleteProduct: (state,action)=>{
      console.log(action.payload);
      const id = action.payload;
      const foundProduct = state.find(state=>state.id === id);
      if(foundProduct){
        console.log("encontrado");
        state.splice(state.indexOf(foundProduct),1);
      }
    }
    
  },
});


export const { addProduct, deleteProduct } = cpSlice.actions

export default cpSlice.reducer;
