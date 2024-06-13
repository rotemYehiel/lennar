export const headerStateSelector = (state) => state.header;

export const userDetailsSelector = (state) =>
  headerStateSelector(state).userDetails;

export const feedbackSelector = (state) => headerStateSelector(state).feedback;
