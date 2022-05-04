<template>
  <div v-if="loading" id="preloader">
    <atom-spinner
      :animation-duration="1000"
      :size="300"
      class="atom-spinner"
      :color="computedSpinnersColor"
    />
  </div>
  <form @submit.prevent="onsubmit" v-else>
    <va-input
      class="mb-3"
      v-model="email"
      type="email"
      :label="$t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-input
      class="mb-3"
      v-model="password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div
      class="auth-layout__options d-flex align--center justify--space-between"
    >
      <va-checkbox
        v-model="keepLoggedIn"
        class="mb-0"
        :label="$t('auth.keep_logged_in')"
      />
      <router-link class="ml-1 link" :to="{ name: 'recover-password' }">{{
        $t("auth.recover_password")
      }}</router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button @click="onsubmit" class="my-0">{{
        $t("auth.login")
      }}</va-button>
    </div>
  </form>
</template>

<script>
//import AtomSpinner from "@/components/spinners/AtomSpinner";
import { useGlobalConfig, getColor } from "vuestic-ui";
import { AtomSpinner } from "epic-spinners";
export default {
  components: { AtomSpinner },
  name: "log-in",
  data() {
    return {
      email: "",
      password: "",
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
      spinnersColor: "primary",
    };
  },
  computed: {
    colors() {
      return useGlobalConfig().getGlobalConfig().colors;
    },
    computedSpinnersColor() {
      return getColor(this.spinnersColor);
    },
    formReady() {
      return !this.emailErrors.length && !this.passwordErrors.length;
    },
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    onsubmit() {
      this.emailErrors = this.email ? [] : ["Email is required"];
      this.passwordErrors = this.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
  watch: {
    user() {
      if (this.user !== null) {
        this.$router.push({ name: "dash-board" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

.atom-spinner {
  position: fixed;
  top: 30%;
  left: 40%;
}
</style>
