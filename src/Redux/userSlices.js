import { createSlice } from "@reduxjs/toolkit"

const saveUserData = JSON.parse(localStorage.getItem('userLogged'));
const initialState = {
    Users: saveUserData || []
}


const userSlices = createSlice({
    name:'Users',
    initialState,
    reducers: {
        getUser(state,action){
            state.Users = action.payload
            localStorage.setItem('userLogged', JSON.stringify(state));
        },

       removeUser(state,action){
         state.Users = [] ;
       }
    }
})

export const {getUser,removeUser} = userSlices.actions;
export default userSlices.reducer;