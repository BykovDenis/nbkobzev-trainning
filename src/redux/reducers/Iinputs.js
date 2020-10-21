
import { ADD_SUM, INPUT_VALUE } from "../constants";
import initialState from "../data/inputs";



const inputsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_VALUE:
            let inputsCopy = state.inputs.map(input => {
                if (input.id === action.uinputId) {
                    return { ...input, value: action.numberValue }
                }
                return input
            });
            let activeButton = inputsCopy.map(el=>el.value).includes('');
            return {
                ...state,
                activeButton: activeButton,
                inputs: inputsCopy
            };
        case ADD_SUM:
            return {
                ...state,
                arraySum: [...state.arraySum, state.i + state.inputs.reduce((a, b) => a + b.value, 0)],
                i: state.i + 1,
                inputs: state.inputs.map(input => {return {...input, value: ''}}),
                activeButton: true
            };
        default:
            return state;
    }
}

export const addValueAC = (uinputId, numberValue) => ({ type: INPUT_VALUE, numberValue: numberValue, uinputId: uinputId });
export const addSumAC = () => ({ type: ADD_SUM });

export default inputsReducer;