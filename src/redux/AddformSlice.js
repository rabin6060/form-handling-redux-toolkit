import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'data/fetch',
  async (formData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return data;
  }
);



const addFormData = createSlice({
  name: 'form',
  initialState: {
    data:{
        name: '',
        age: '',
        email: '',
    },
    returnedData:{},

    
  },
  reducers: {
    addData(state, action) {
      state.data.name = action.payload.name;
      state.data.age = action.payload.age;
      state.data.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending,(state)=>{
        state.loading = true
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      // Handle the successful response here if needed
      state.returnedData = action.payload
      state.loading = false
      
    });

  },
});

export const { addData } = addFormData.actions;
export default addFormData.reducer;
