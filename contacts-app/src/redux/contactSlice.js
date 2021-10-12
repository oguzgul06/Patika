import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactAdaptor.getInitialState(),
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
  },
  extraReducers: {},
});

export const { addContact, addContacts } = contactSlice.actions;
export default contactSlice.reducer;
