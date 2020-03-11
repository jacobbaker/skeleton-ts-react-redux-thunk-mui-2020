export interface ExampleState {
    isFetching: boolean;
    count: number;
    error?: {
        message: string
    }
}

export const FETCH_EXAMPLE_REQUEST = "example/FETCH_EXAMPLE_REQUEST";
export const FETCH_EXAMPLE_SUCCESS = "example/FETCH_EXAMPLE_SUCCESS";
export const FETCH_EXAMPLE_FAILURE = "example/FETCH_EXAMPLE_FAILURE";

interface FetchExampleRequestAction {
    type: typeof FETCH_EXAMPLE_REQUEST,
    payload: {
        isFetching: boolean
        error: {
            message: string
        }
    }
}

interface FetchExampleSuccessAction {
    type: typeof FETCH_EXAMPLE_SUCCESS,
    payload: {
        isFetching: boolean
        count: number
    }
}

interface FetchExampleFailureAction {
    type: typeof FETCH_EXAMPLE_FAILURE,
    payload: {
        isFetching: boolean,
        error: {
            message: string
        }
    }
}

export type ExampleActionTypes = FetchExampleRequestAction | FetchExampleSuccessAction | FetchExampleFailureAction;