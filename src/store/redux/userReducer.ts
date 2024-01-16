import { UserAction, UserActionType, UserState } from "../../types/user";

const initialState: UserState = {
    user: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return { loading: true, error: null, user: [] };
        case UserActionType.FETCH_USERS_SUCCESS:
            return { loading: true, error: null, user: action.payload };
        case UserActionType.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, user: [] };
        default:
            return state;
    }
}
