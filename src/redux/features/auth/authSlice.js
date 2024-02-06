import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        user: null,
        isAuth: false,
    },
    reducers: {
        setUserInfo: (state, action) => {
            console.log('setUserInfo payload', action.payload);
            console.log('setUserInfo access_token', action.payload.access_token);
            state = {
                ...state,
                user: action.payload.user,
                accessToken: action.payload.access_token,
                isAuth: true,
            }

            localStorage.setItem('accessToken', JSON.stringify(action.payload.access_token)); // Store user in localStorage
        },
        removeUserInfo: (state, action) => {
            state = {
                ...state,
                user: null,
                accessToken: null,
                isAuth: false,
            }

            localStorage.removeItem('accessToken'); // Remove user from localStorage
        }
    }
});

export const { setUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;

