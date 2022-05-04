export const user = (state) => {
  return state.user;
};
export const loading = (state) => {
  return state.loading;
};
export const companyData = (state) => {
  return state.companyData;
};

// ERROR GETTERS
export const generalEmailErrors = (state) => {
  return state.generalEmailErrors;
};
export const companyNameErrors = (state) => {
  return state.companyNameErrors;
};
export const emailLinkErrors = (state) => {
  return state.emailLinkErrors;
};
export const generalPhoneErrors = (state) => {
  return state.generalPhoneErrors;
};
export const templateErrors = (state) => {
  return state.templateErrors;
};
export const heroBackgroundErrors = (state) => {
  return state.heroBackgroundErrors;
};
export const heroCompanyLogoErrors = (state) => {
  return state.heroCompanyLogoErrors;
};
