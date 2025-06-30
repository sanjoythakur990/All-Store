import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebaseConfig";
import { addDoc, deleteField, doc, getDoc, updateDoc } from "firebase/firestore";

export const fetchCartItems = createAsyncThunk('cart/fetchItems', async (_, thunkAPI) => {
    const userId = auth.currentUser?.uid;
    try {
        const docRef = doc(db, "carts", userId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            return thunkAPI.fulfillWithValue(docSnap.data().items);
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateCartItems = createAsyncThunk('cart/updtate', async ({itemId}, thunkAPI) => {
    const userId = auth.currentUser?.uid;
    try {
        const docRef = doc(db, "carts", userId);
        await addDoc(docRef, {
            [`items.${itemId}`]: 1
        })
        return thunkAPI.fulfillWithValue({ itemId, quantity: 1 });
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const removeCartItems = createAsyncThunk('cart/remove', async ({itemId}, thunkAPI) => {
    const userId = auth.currentUser?.uid;
    try {
        const docRef = doc(db, "carts", userId);
        await updateDoc(docRef, {
            [`items.${itemId}`]: deleteField()
        })
        return thunkAPI.fulfillWithValue({itemId});
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})