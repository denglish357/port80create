<template>
  <div class="image-card-image-picker">
    <va-card v-if="companyHeroGalleryNames.length > 0">
      <va-card-title>{{ $t("forms.inputs.heroCardTitle") }}</va-card-title>
      <va-card-content>
        <div class="row">
          <div class="flex md6 xs12">
            <va-select
              v-if="companyHeroGalleryNames.length > 0"
              label="Hero background image"
              v-model="companyHeroBackground"
              text-by="text"
              value-by="value"
              :options="companyHeroGalleryNames"
              :error="!!heroBackgroundErrors.length"
              :error-messages="heroBackgroundErrors"
              @change="removeError('heroBackgroundErrors')"
            />
          </div>
          <div class="flex md6 xs12">
            <va-select
              v-if="companyHeroGalleryNames.length > 0"
              label="Company logo image"
              v-model="companyHeroLogo"
              text-by="text"
              value-by="value"
              :options="companyHeroGalleryNames"
              :error="!!heroCompanyLogoErrors.length"
              :error-messages="heroCompanyLogoErrors"
              @change="removeError('heroCompanyLogoErrors')"
            />
          </div>
          <div class="flex md6 xs12">
            <va-image
              contain
              style="min-height: 300px"
              :src="companyHeroBackground"
            >
              <template #loader>
                <va-progress-circle indeterminate />
              </template>
            </va-image>
          </div>
          <div class="flex md6 xs12">
            <va-image contain style="min-height: 300px" :src="companyHeroLogo">
              <template #loader>
                <va-progress-circle indeterminate />
              </template>
            </va-image>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "hero-card-image-picker",
  methods: {
    // CLEAR ERRORS
    removeError(error) {
      this.$store.dispatch("removeError", error);
    },
  },
  setup() {
    const store = useStore();

    const companyHeroGalleryNames = computed({
      get: () => store.state.companyData.companyHero.galleryNames,
      set: (value) => store.commit("setCompanyHeroGalleryNames", value),
    });

    const companyHeroBackground = computed({
      get: () => store.state.companyData.companyHero.heroBackground,
      set: (value) => store.commit("setCompanyHeroBackground", value),
    });

    const companyHeroLogo = computed({
      get: () => store.state.companyData.companyHero.companyLogo,
      set: (value) => store.commit("setCompanyHeroLogo", value),
    });
    const heroBackgroundErrors = computed({
      get: () => store.state.heroBackgroundErrors,
    });
    const heroCompanyLogoErrors = computed({
      get: () => store.state.heroCompanyLogoErrors,
    });

    return {
      companyHeroGalleryNames,
      companyHeroBackground,
      companyHeroLogo,
      heroBackgroundErrors,
      heroCompanyLogoErrors,
    };
  },
};
</script>
