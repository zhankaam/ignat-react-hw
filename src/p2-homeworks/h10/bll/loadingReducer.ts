export type InitialStateType = {
    loading: boolean
}

const initState:InitialStateType = {
    loading: false
};
export const loadingAC = (loading: boolean) => ({ type: "LOADING", loading }as const)

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): InitialStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.loading};
        }
        default: return state;

    }
};

