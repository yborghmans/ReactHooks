export const sessionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SESSION':
           console.log(action);
            return [...state,action.session];
        case 'DELETE_SESSION':
            return state;

    }
}