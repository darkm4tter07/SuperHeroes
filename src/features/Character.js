import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "character",
    initialState: {value: {
        name: "Batman",
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    }},
    reducers: {
        cardClickHandler: (state, action) => {
            state.value = action.payload
        },
    },

});
export const { cardClickHandler } = userSlice.actions;
export default userSlice.reducer;