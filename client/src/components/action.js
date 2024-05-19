import {
    CREATE_PersonList,
    RETRIEVE_PersonList,
    UPDATE_PersonList,
    DELETE_PersonList,
} from "./actionTypes";
import PersonListService from "./PersonListService";

export const createPet =
    (id,name,email_id,Mobile_no,DateOfBirth ) => async (dispatch) => {
        try {
            const res = await PersonListService.create({
                id,
                name,
                email_id,
                Mobile_no,
                DateOfBirth,
            });
            
            dispatch({
                type: CREATE_PersonList,
                payload: res.data.data,                
            });
            return Promise.resolve(res.data.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const retrievePets = () => async (dispatch) => {
    try {
        const res = await PersonListService.getAll();        
        dispatch({
            type: RETRIEVEPerson_List,
            payload: res.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updatePet = (id, data) => async (dispatch) => {
    try {
        const res = await PersonListService.update(id, data);
        dispatch({
            type: UPDATEPerson_List,
            payload: data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePet = (id) => async (dispatch) => {
    try {
        await PersonListService.delete(id);
        dispatch({
            type: DELETE_PersonList,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};