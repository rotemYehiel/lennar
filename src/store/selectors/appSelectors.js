export const appSelector = (state) => state.app;

export const languageSelector = (state) => appSelector(state).language;
