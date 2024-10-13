// src/features/counter/counterSlice.ts

import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        state.value += 1;
        },
        decrement: (state) => {
        state.value -= 1;
        },
        reset: (state) => {
        state.value = 0;
        },
    },
});

// Exportar las acciones para poder utilizarlas en los componentes
export const { increment, decrement, reset } = counterSlice.actions;

// Exportar el reducer para incluirlo en el store
export default counterSlice.reducer;