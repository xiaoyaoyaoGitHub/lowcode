import { produce } from "immer"
import { parseJsonByString } from "@/common/utils";
import { CHANGE_SCHEMA, ADD_PAGE_CHILDREN, GET_CHANGE_CHILD, DELETE_CHILD } from "./constant"

const initialSchema = parseJsonByString(localStorage.schema, {})


const defaultState = {
    schema: initialSchema
}


const reducer = (state = defaultState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CHANGE_SCHEMA:
            draft.schema = action.value
            break;
        case ADD_PAGE_CHILDREN:
            draft.schema.children.push(action.value)
            break;
        case GET_CHANGE_CHILD:
            draft.schema.children.splice(action.index, 1, action.value)
            console.log(draft.schema.children);
            break;
        case DELETE_CHILD:
            draft.schema.children.splice(action.index, 1)
            break;
    }
})



export default reducer