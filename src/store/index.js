import { createStore } from "vuex";
import state from "./state.js";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default createStore({
  strict: true, // process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
});
