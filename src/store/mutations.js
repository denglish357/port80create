export const updateSidebarCollapsedState = (state, isSidebarMinimized) => {
  state.isSidebarMinimized = isSidebarMinimized;
};

export const setLoading = (state, payload) => {
  state.loading = payload;
};

// ALERT AND ERROR MUTATIONS
export const setError = (state, payload) => {
  state.error = payload;
};
export const setAlert = (state, payload) => {
  state.alert = payload;
};

// END OF ALERT AND ERROR MUTATIONS

// USER MUTATIONS
export const setUser = (state, payload) => {
  state.user = payload;
};
export const changeUserName = (state, newUserName) => {
  state.userName = newUserName;
};
// END OF USER MUTATIONS

// SET NEW COMPANY FORM MUTATIONS
export const submitNewCompanyForm = (state) => {
  state.generalEmailErrors = state.companyData.companyEmail.email
    ? []
    : ["Email is required"];
  state.companyNameErrors = state.companyData.companyName
    ? []
    : ["Company name is required"];
  state.emailLinkErrors = state.companyData.companyEmail.link
    ? []
    : ["Company email link is required"];
  state.generalPhoneErrors = state.companyData.companyPhone.phone
    ? []
    : ["Company phone number is required"];
  state.templateErrors = state.companyData.template
    ? []
    : ["Please choose a company template"];
  state.heroBackgroundErrors = state.companyData.companyHero.heroBackground
    ? []
    : ["Please choose a background image for the hero section"];
  state.heroCompanyLogoErrors = state.companyData.companyHero.companyLogo
    ? []
    : ["Please choose a company logo"];
  const formReady = () => {
    !state.generalEmailErrors.length &&
      !state.companyNameErrors.length &&
      !state.emailLinkErrors.length &&
      !state.generalPhoneErrors.length &&
      !state.templateErrors.length &&
      !state.heroBackgroundErrors.length;
  };
  if (!formReady) {
    state.newCompanyForReady = false;
    return;
  } else {
    state.newCompanyFormReady = true;
  }
};

// CLEAR NEW COMPANY FORM ERRORS
export const clearError = (state, payload) => {
  state[payload] = [];
};
// END OF CLEAR NEW COMPANY FORM ERRORS

// END OF NEW COMPANY FORM MUTATIONS

// SET STORE NEW STORE GENEREAL INFO
export const setCompanyName = (state, payload) => {
  state.companyData.companyName = payload;
};
export const setCompanyEmail = (state, payload) => {
  state.companyData.companyEmail.email = payload;
};
export const setCompanyTemplate = (state, payload) => {
  state.companyData.companyTemplate = payload;
};
export const setCompanyPhone = (state, payload) => {
  state.companyData.companyPhone.phone = payload;
};
export const setCompanyEmailLink = (state, payload) => {
  state.companyData.companyEmail.link = payload;
};

// END OF STORE NEW STORE GENEREAL INFO

// COMPANY HERO GALLERY SECTION
export const pushFotoToHeroGallery = (state, payload) => {
  console.log(payload);
  state.companyData.companyHero.gallery = payload;
};
export const pushFotoToHeroGalleryNames = (state, payload) => {
  console.log(payload);
  state.companyData.companyHero.galleryNames = payload;
};
export const setCompanyHeroBackground = (state, payload) => {
  console.log(payload);
  state.companyData.companyHero.heroBackground = payload;
};
export const setCompanyHeroLogo = (state, payload) => {
  console.log(payload);
  state.companyData.companyHero.companyLogo = payload;
};

// END OF SET NEW STORE GENERAL INFO

// SET COMPANY LINKS CARD INFO
export const setLink = (state, payload) => {
  state.companyData.companyLinks.push({
    name: payload.link,
    index: payload.index,
    dropdown: false,
    deepDropDown: false,
    link: "#",
    drops: false,
    scrollTo: false,
    active: false,
    dropDowns: [],
    icon: "face",
  });
};

// END OF SET COMAPANY LINKS CARD INFO

// SET COMPANY DROPDOWN LINKS CARD INFO
export const setDropLink = (state, payload) => {
  state.companyData.companyLinks[payload.parentIndex].dropDowns.push({
    name: payload.link,
    index: payload.index,
    dropdown: true,
    deepDropDown: false,
    link: "#",
    drops: false,
    scrollTo: false,
    active: false,
    dropDowns: [],
    icon: "face",
  });
  state.companyData.companyLinks[payload.parentIndex].drops = true;
};

export const removeDrop = (state, payload) => {
  var idx = 0;
  console.log(state.companyData.companyLinks[payload.parentIndex].drops);
  state.companyData.companyLinks[payload.parentIndex].drops.splice(
    payload.index,
    1
  );
  console.log(state.companyData.companyLinks[payload.parentIndex].drops);
  state.companyData.companyLinks[payload.parentIndex].drops.forEach((drop) => {
    drop.index = idx;
    idx = idx + 1;
  });
  console.log(state.companyData.companyLinks[payload.parentIndex].drops);
};
// END OF SET COMAPANY DROP DOWN LINKS CARD INFO
