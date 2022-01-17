export const parseJsonByString = (str, defaultValue) => {
    let returnValue = defaultValue;
    try {
        return returnValue = JSON.parse(str)
    }catch(e){
        return returnValue
    }
}