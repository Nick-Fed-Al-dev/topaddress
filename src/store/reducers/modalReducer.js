
export const modalActions = {
    MENU: "MENU"
}

const initialState = {
    menu: false
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case modalActions.MENU:
            console.log(!state.menu)
            return {...state, menu: !state.menu}
        default:
            return state
    }
}