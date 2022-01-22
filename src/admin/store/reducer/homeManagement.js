import { produce } from "immer"
import { parseJsonByString } from "@/common/utils";

const initialSchema = parseJsonByString(localStorage.schema, {})


const defaultState = {
    schema: initialSchema
}


const reducer = (state = defaultState, action) => produce(state, (draft) => {
    switch(action.type){
        case 'CHANGE_SCHEMA':
            draft.schema = action.value
            break;
    }
})



export default reducer