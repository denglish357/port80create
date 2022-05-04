<template>
  <div class="form-elements">
    <form ref="form">
      <div class="row">
        <div class="flex xs12">
          <general-info-card></general-info-card>
        </div>
        <div class="flex xs12">
          <hero-gallery></hero-gallery>
        </div>
        <div class="flex xs12">
          <hero-card-image-picker></hero-card-image-picker>
        </div>
        <div class="flex md6 xs12">
          <company-links-card></company-links-card>
        </div>
        <div class="flex md6 xs12">
          <drop-down-card></drop-down-card>
        </div>
      </div>
      <div class="d-flex justify--center mt-3">
        <va-button @click="onsubmit" class="my-0">{{
          $t("forms.buttons.uploadCompany")
        }}</va-button>
      </div>
    </form>
  </div>
</template>

<script>
import GeneralInfoCard from "./components/cards/GeneralInfoCard";
import HeroGallery from "./components/cards/HeroGallery";
import HeroCardImagePicker from "./components/cards/HeroCardImagePicker";
import CompanyLinksCard from "./components/cards/CompanyLinksCard";
import DropDownCard from "./components/cards/DropDownCard";
export default {
  name: "new-companies",
  components: {
    GeneralInfoCard,
    HeroGallery,
    HeroCardImagePicker,
    CompanyLinksCard,
    DropDownCard,
  },
  data() {
    return {
      gallery: [],
      heroBackgroundErrors: [],
      heroCompanyLogoErrors: [],
    };
  },
  methods: {
    onsubmit() {
      // this.generalEmailErrors = this.companyData.companyEmail.email
      //   ? []
      //   : ["Email is required"];
      // this.companyNameErrors = this.companyData.companyName
      //   ? []
      //   : ["Company name is required"];
      // this.emailLinkErrors = this.companyData.companyEmail.link
      //   ? []
      //   : ["Company email link is required"];
      // this.generalPhoneErrors = this.companyData.companyPhone.phone
      //   ? []
      //   : ["Company phone number is required"];
      // this.templateErrors = this.companyData.template
      //   ? []
      //   : ["Please choose a company template"];
      // this.heroBackgroundErrors = this.companyData.companyHero.heroBackground
      //   ? []
      //   : ["Please choose a background image for the hero section"];
      // this.heroCompanyLogoErrors = this.companyData.companyHero.companyLogo
      //   ? []
      //   : ["Please choose a company logo"];
      // if (!this.formReady) {
      //   return;
      // }
      this.$store.dispatch("submitNewCompanyForm");
    },
  },
  computed: {
    formReady() {
      return this.$store.getters.formReady;
    },
  },
  watch: {
    formReady() {
      if (this.formReady) {
        alert("the form is ready");
      } else {
        alert("the form isnt ready");
      }
    },
  },
};
</script>

<style>
.row.row-inside {
  max-width: none;
}

.va-input-wrapper,
fieldset {
  margin-bottom: 0.5rem;
}
</style>
