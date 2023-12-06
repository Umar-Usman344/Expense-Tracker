export default (state, action) => {
    switch (action.type) {
        case 'Delete_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'EDIT_TRANSACTION':
            let index = state.transactions.findIndex((transaction) => {
                return transaction.id === action.payload.id;
            })
            state.transactions[index] = action.payload;
            return {
                ...state,
                transactions: [...state.transactions]
            }
        default:
            return state;
    }
}