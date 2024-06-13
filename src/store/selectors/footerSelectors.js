export const footerSelector = (state) => state.footer;

export const isCookiesSelector = (state) => footerSelector(state).isCookies;
export const isNotificationsSelector = (state) =>
  footerSelector(state).isNotifications;
export const isGeneralPoliciesSelector = (state) =>
  footerSelector(state).isGeneralPolicies;
