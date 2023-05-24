import { 
    CONTACTS_FETCH_PENDING, 
    CONTACTS_FETCH_SUCCESS, 
    CONTACTS_FETCH_REJECT,
    CONTACTS_DETAIL_FETCH_PENDING,
    CONTACTS_DETAIL_FETCH_SUCCESS,
    CONTACTS_DETAIL_FETCH_REJECT,
    CONTACTS_DELETE_PENDING,
    CONTACTS_DELETE_SUCCESS,
    CONTACTS_DELETE_REJECT,
    CONTACTS_POST_ADD_PENDING,
    CONTACTS_POST_ADD_SUCCESS,
    CONTACTS_POST_ADD_REJECT,
    CONTACTS_POST_EDIT_PENDING,
    CONTACTS_POST_EDIT_SUCCESS,
    CONTACTS_POST_EDIT_REJECT,
} from "../actions/actionType";

const initialState = {
    isLoading: true,
    contacts: [],
    errorMsg: "",
    contactDetail: {}
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_FETCH_PENDING:
            return {
                ...initialState
            }
        case CONTACTS_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                contacts: action.payload
            }
        case CONTACTS_FETCH_REJECT:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }

        case CONTACTS_DETAIL_FETCH_PENDING:
            return {
                ...initialState
            }
        case CONTACTS_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                contactDetail: action.payload
            }
        case CONTACTS_DETAIL_FETCH_REJECT:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }

        case CONTACTS_DELETE_PENDING:
            return {
                ...initialState
            }
        case CONTACTS_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case CONTACTS_DELETE_REJECT:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
            
        case CONTACTS_POST_ADD_PENDING:
            return {
                ...initialState
            }
        case CONTACTS_POST_ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case CONTACTS_POST_ADD_REJECT:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
        
        case CONTACTS_POST_EDIT_PENDING:
            return {
                ...initialState
            }
        case CONTACTS_POST_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case CONTACTS_POST_EDIT_REJECT:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
        
        default:
            return state;
    }
}

export default mainReducer