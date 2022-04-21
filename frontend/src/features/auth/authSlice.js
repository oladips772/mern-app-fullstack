import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initailState = {
    user:null,
    isError: false,
    isLoading:false,
    isSuccess:false,
    message:""
}