
const initState = {
  themes: "some"
};

export type InitialStateType = typeof initState
type ActionsType = ReturnType<typeof setDarkThemeAC> | ReturnType<typeof setRedThemeAC> | ReturnType<typeof setSomeThemeAC>

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "THEME-REDUCER/SET-DARK-THEME":
            return {
                ...state,
                themes: 'dark'
            }
        case "THEME-REDUCER/SET-RED-THEME":
            return {
                ...state,
                themes: 'red'
            }
        case "THEME-REDUCER/SET-SOME-THEME":
            return {
                ...state,
                themes: 'some'
            }
        default: return state;
    }
};

export const setDarkThemeAC = (themes: string) => ({type: "THEME-REDUCER/SET-DARK-THEME", themes}as const)

export const setRedThemeAC = (themes: string) => ({ type: "THEME-REDUCER/SET-RED-THEME", themes}as const)

export const setSomeThemeAC = (themes: string) => ({ type: "THEME-REDUCER/SET-SOME-THEME", themes}as const)