import {
    ExampleState,
    FETCH_EXAMPLE_REQUEST,
    FETCH_EXAMPLE_SUCCESS,
    FETCH_EXAMPLE_FAILURE,
    ExampleActionTypes
} from "./types";

const initialState: ExampleState = {
    isFetching: false,
    count: 0,
    error: undefined
};

export function exampleReducer(
    state = initialState,
    action: ExampleActionTypes
): ExampleState {
    switch(action.type) {
        case FETCH_EXAMPLE_REQUEST:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error
            };
        case FETCH_EXAMPLE_SUCCESS:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                count: action.payload.count
            }
        case FETCH_EXAMPLE_FAILURE:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }
        default:
            return state;
    }
}