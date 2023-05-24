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
} from "./actionType";
import MySwal from 'sweetalert2'

const baseUrl = 'https://contact.herokuapp.com/contact';

const contactsFetchPending = () => ({
    type: CONTACTS_FETCH_PENDING
})
const contactsFetchSuccess = (responseJson) => {
    return {
        type: CONTACTS_FETCH_SUCCESS,
        payload: responseJson
    }
}
const contactsFetchReject = (errorMessage) => {
    return {
        type: CONTACTS_FETCH_REJECT,
        payload: errorMessage
    }
}

export const fetchContacts = () => {
    // console.log('masukkkkkk');
    return async (dispatch, getState) => {
        try {
            dispatch(contactsFetchPending())
            const response = await fetch(baseUrl, {
                method: "GET"
            })
            const listContact = await response.json()
            console.log(listContact.data, "ini data dari action");
            dispatch(contactsFetchSuccess(listContact.data))
        } catch (error) {
            console.log(error);
            dispatch(contactsFetchReject(error))
        }
    }
}

const contactDetailFetchPending = () => ({
    type: CONTACTS_DETAIL_FETCH_PENDING
})
const contactDeatailFetchSuccess = (responseJson) => {
    return {
        type: CONTACTS_DETAIL_FETCH_SUCCESS,
        payload: responseJson
    }
}
const contactDetailFetchReject = (errorMessage) => {
    return {
        type: CONTACTS_DETAIL_FETCH_REJECT,
        payload: errorMessage
    }
}

export const fetchContactDetail = (id) => {
    console.log('masukkkkkk');
    return async (dispatch) => {
        try {
            dispatch(contactDetailFetchPending())
            const response = await fetch(`${baseUrl}/${id}`, {
                method: "GET"
            })
            const contactDetail = await response.json()
            console.log(contactDetail.data, "ini contactdetail");
            dispatch(contactDeatailFetchSuccess(contactDetail.data))
        } catch (error) {
            console.log(error);
            dispatch(contactDetailFetchReject(error))
        }
    }
}

const contactsEditPending = () => ({
    type: CONTACTS_POST_EDIT_PENDING
})
const contactsEditSuccess = (responseJson) => {
    return {
        type: CONTACTS_POST_EDIT_SUCCESS,
        payload: responseJson
    }
}
const contactsEditReject = (errorMessage) => {
    return {
        type: CONTACTS_POST_EDIT_REJECT,
        payload: errorMessage
    }
}

export const contactPostEdit = (dataContact) => {
    const formData = {
        firstName: dataContact?.firstName,
        lastName: dataContact?.lastName,
        age: dataContact?.age,
        photo: dataContact?.photo
    }
    return async (dispatch) => {
        dispatch(contactsEditPending())
        try {
            let response = await fetch ( baseUrl + dataContact.id, {
                method : 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    id: dataContact.id
                },
                body: JSON.stringify(formData)
            })
            const responseJson = await response.json()
            dispatch(contactsEditSuccess())
        } catch (error) {
            console.log(error);
            dispatch(contactsEditReject())
        }
    }
}

const contactsPostPending = () => ({
    type: CONTACTS_POST_ADD_PENDING
})
const contactsAddSuccess = (responseJson) => {
    return {
        type: CONTACTS_POST_ADD_SUCCESS,
        payload: responseJson
    }
}
const contactsAddReject = (errorMessage) => {
    return {
        type: CONTACTS_POST_ADD_REJECT,
        payload: errorMessage
    }
}

export const contactPostAdd = (dataContact) => {
    const formData = {
        firstName: dataContact?.firstName,
        lastName: dataContact?.lastName,
        age: dataContact?.age,
        photo: dataContact?.photo
    }
    return async (dispatch) => {
        dispatch(contactsPostPending())
        try {
            let response = await fetch ( baseUrl + dataContact.id, {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const responseJson = await response.json()
            console.log(responseJson, 'hasil dari add');
            dispatch(contactsAddSuccess())
        } catch (error) {
            console.log(error);
            dispatch(contactsAddReject())
        }
    }
}

const contactDeletePending = () => ({
    type: CONTACTS_DELETE_PENDING
})
const contactsDeleteSuccess = (responseJson) => {
    return {
        type: CONTACTS_DELETE_SUCCESS,
        payload: responseJson
    }
}
const contactsDeleteReject = (errorMessage) => {
    return {
        type: CONTACTS_DELETE_REJECT,
        payload: errorMessage
    }
}

export const deleteContact = (id) => {
    return async (dispatch, getState) => {
        dispatch(contactDeletePending())
        console.log(id, "Masuk Delete users");

        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: "DELETE"
            })
            
            dispatch(contactsDeleteSuccess())
            MySwal.fire({
                html: "Delete contact successfull",
                icon: 'success'
            })
            dispatch(fetchContacts())
        } catch (error) {
            console.log(error);
            dispatch(contactsDeleteReject(error))
        }
    }
}