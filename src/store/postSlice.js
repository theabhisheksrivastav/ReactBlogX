import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    title: "",
    content: "",
    featuredImage: "",
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.featuredImage = action.payload.featuredImage;
            state.user = action.payload.userData;
        },
        updatePost: (state, action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.featuredImage = action.payload.featuredImage;
        },
        deletePost: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const { addPost, updatePost, deletePost } = postSlice.actions;


export default postSlice.reducer;