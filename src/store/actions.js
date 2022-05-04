import { auth } from "../firebase/firebaseinit.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// USERS
export const createNewUser = ({ commit }, payload) => {
  commit("setLoading", true);
  createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      commit("changeUserName", user.email);
      commit("setUser", user);
      commit("setLoading", false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      commit("setAlert", { code: errorCode, message: errorMessage });
      commit("setLoading", false);
      // ..
    });
};
export const signUserIn = ({ commit }, payload) => {
  commit("setLoading", true);

  signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      commit("changeUserName", user.email);
      commit("setUser", user);
      commit("setLoading", false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      commit("setAlert", { code: errorCode, message: errorMessage });
      commit("setLoading", false);
    });
};

//  END OF USER ACTIONS

// NEW COMPANY FORM ACTIONS
export const submitNewCompanyForm = ({ commit }) => {
  commit("submitNewCompanyForm");
};
// END OF NEW COMPANY FORM ACTIONS

// CLEAR ERROR ACTIONS
export const removeError = ({ commit }, payload) => {
  commit("clearError", payload);
};

// FOTO GALLERY ACTIONS
export const pushFotoToHeroGallery = ({ commit }, payload) => {
  commit("pushFotoToHeroGallery", payload);
};
export const pushFotoToHeroGalleryNames = ({ commit }, payload) => {
  commit("pushFotoToHeroGalleryNames", payload);
};
// END OF FOTO GALLERY ACTIONS

// COMPANY LINKS CARD ACTIONS
export const addLink = ({ commit }, payload) => {
  commit("setLink", payload);
};

// END OF COMPANY LINKS CARD ACTIONS
