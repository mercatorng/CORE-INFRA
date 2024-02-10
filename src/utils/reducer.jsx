export const appReducer = (state, action) => {
    if (action.type === "CHANGE_ACTIVE_PAGE") {
        return { ...state, activePage: action.payload };
      }

    return state
};
