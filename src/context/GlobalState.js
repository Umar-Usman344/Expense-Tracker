import React, { createContext, useReducer} from "react";
import appReducer from './AppReducer'
const initialState = {  transactions:[]
}

    export const GlobalContext = createContext(initialState)
    export const GlobalProvider = ({ children}) => {
const [state, dispatch] = useReducer(appReducer, initialState)
function deleteTransaction(id){
    dispatch({
        type: 'Delete_TRANSACTION',
        payload: id
    });
}
function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

function editTransaction (obj) {
    dispatch ({
        type : 'EDIT_TRANSACTION',
        payload: obj
    })
    
}

return (
<GlobalContext.Provider value={{transactions: state.transactions,
deleteTransaction,
addTransaction,
editTransaction
}}>
    { children}
</GlobalContext.Provider>

)
}