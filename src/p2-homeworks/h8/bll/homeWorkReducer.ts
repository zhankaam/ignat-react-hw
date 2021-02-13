import {initialPeople} from "../HW8";

type ActionsType = SortUpType | SortDownType | CheckType

export type SortUpType = {
    type: "SORT_UP_STATE"
    payload: "up"
}

export type SortDownType = {
    type: "SORT_DOWN_STATE"
    payload: "down"
}

export type CheckType = {
    type: "CHECK_STATE"
}


export type InitialStateType = {
    _id: number
    name: string
    age: number
}
export const homeWorkReducer = (state:InitialStateType[] = initialPeople, action: ActionsType): InitialStateType[] => {
    switch (action.type) {
        case "SORT_UP_STATE": {
            let copyState = [...state]
            copyState.sort((a,b) => {
                if(action.payload === "up") {
                    return a.name > b.name ? 1 : -1;
                } else return 0
            })
            return copyState
        }
        case "SORT_DOWN_STATE": {
            let copyState = [...state]
            copyState.sort((a,b) => {
                if(action.payload === "down"){
                    return a.name < b.name ? 1 : -1
                } else return 0
            })
            return copyState
        }
        case "CHECK_STATE": {
            return [...state.filter(p => p.age >= 18)]
        }
        default:
            return state
    }
};