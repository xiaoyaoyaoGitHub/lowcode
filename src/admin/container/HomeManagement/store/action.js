import { CHANGE_SCHEMA, ADD_PAGE_CHILDREN, GET_CHANGE_CHILD, DELETE_CHILD, SORTABLE_PAGE_CHILDREN } from "./constant"

/**
 * 更改schema
 * @param {object} schema 
 * @returns 
 */
export const getChangeSchemaAction = (schema) => {
    return {
        type: CHANGE_SCHEMA,
        value: schema
    }
}

/**
 * 添加子组件
 * @param {object} child 
 * @returns 
 */
export const addPageChildrenAction = (child) => {
    return {
        type: ADD_PAGE_CHILDREN,
        value: child
    }
}

export const getChangeChildAction = (index, child) => {
    return {
        type: GET_CHANGE_CHILD,
        index,
        value: child
    }
}

export const getPageDeleteChildAction = (index) => {
    return {
        type: DELETE_CHILD,
        value: index
    }
}

export const pageSortableChildrenAction = (children) => {
    return {
        type: SORTABLE_PAGE_CHILDREN,
        value: children
    }
}