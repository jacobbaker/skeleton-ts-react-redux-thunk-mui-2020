import { FETCH_EXAMPLE_REQUEST, FETCH_EXAMPLE_SUCCESS, FETCH_EXAMPLE_FAILURE } from "./types";

export function fetchExampleRequest() {
    return {
        type: FETCH_EXAMPLE_REQUEST,
        payload: {
            isFetching: true,
            error: undefined
        }
    }
}

export function fetchExampleSuccess(count: number) {
    return {
        type: FETCH_EXAMPLE_SUCCESS,
        payload: {
            isFetching: false,
            count
        }
    }
}

export function fetchExampleFailure(message: string) {
    return {
        type: FETCH_EXAMPLE_FAILURE,
        payload: {
            isFetching: false,
            error: {
                message
            }
        }
    }
}