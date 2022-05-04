<template>
  <div class="general-info-card">
    <va-card>
      <va-card-title>{{
        $t("forms.inputs.generalInfoCardTitle")
      }}</va-card-title>
      <va-card-content>
        <div class="row">
          <div class="flex md4 sm6 xs12">
            <va-input
              v-model="companyName"
              @input="companyName.set(value)"
              placeholder="Company Name"
              :error="!!companyNameErrors.length"
              :error-messages="companyNameErrors"
              @change="removeError('companyNameErrors')"
            />
          </div>
          <div class="flex md4 sm6 xs12">
            <va-input
              v-model="companyEmail"
              @input="companyEmail.set(value)"
              placeholder="Company Email"
              :error="!!generalEmailErrors.length"
              :error-messages="generalEmailErrors"
              @change="removeError('generalEmailErrors')"
            >
              <template #prependInner>
                <va-icon color="gray" name="envelope" />
              </template>
            </va-input>
          </div>
          <div class="flex md4 sm6 xs12">
            <va-input
              v-model="companyEmailLink"
              @input="companyEmailLink.set(value)"
              placeholder="Email Link"
              :error="!!emailLinkErrors.length"
              :error-messages="emailLinkErrors"
              @change="removeError('emailLinkErrors')"
            >
              <template #prependInner>
                <va-icon color="gray" name="link" />
              </template>
            </va-input>
          </div>

          <div class="flex md6 xs12">
            <va-select
              label="Company Template"
              v-model="companyTemplate"
              @input="companyTemplate.set(value)"
              textBy="description"
              :options="templatesList"
              :error="!!templateErrors.length"
              :error-messages="templateErrors"
              @change="removeError('templateErrors')"
            />
          </div>
          <div class="flex md6 xs12">
            <va-input
              v-model="companyPhone"
              @input="companyPhone.set(value)"
              placeholder="Company Phone"
              :error="!!generalPhoneErrors.length"
              :error-messages="generalPhoneErrors"
              @change="removeError('generalPhoneErrors')"
            >
              <template #prependInner>
                <va-icon color="gray" name="phone" />
              </template>
            </va-input>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import TemplatesList from "../../../data/TemplatesList";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "general-info-card",
  methods: {
    // CLEAR ERRORS
    removeError(error) {
      this.$store.dispatch("removeError", error);
    },
  },
  setup() {
    const store = useStore();
    const companyName = computed({
      get: () => store.state.companyData.companyName,
      set: (value) => store.commit("setCompanyName", value),
    });
    const companyEmail = computed({
      get: () => store.state.companyData.companyEmail.email,
      set: (value) => store.commit("setCompanyEmail", value),
    });
    const companyEmailLink = computed({
      get: () => store.state.companyData.companyEmail.link,
      set: (value) => store.commit("setCompanyEmailLink", value),
    });
    const companyTemplate = computed({
      get: () => store.state.companyData.companyTemplate,
      set: (value) => store.commit("setCompanyTemplate", value),
    });
    const companyPhone = computed({
      get: () => store.state.companyData.companyPhone.phone,
      set: (value) => store.commit("setCompanyPhone", value),
    });
    const generalEmailErrors = computed({
      get: () => store.state.generalEmailErrors,
    });
    const emailLinkErrors = computed({
      get: () => store.state.emailLinkErrors,
    });
    const companyNameErrors = computed({
      get: () => store.state.companyNameErrors,
    });

    const templateErrors = computed({
      get: () => store.state.templateErrors,
    });

    const generalPhoneErrors = computed({
      get: () => store.state.generalPhoneErrors,
    });

    return {
      companyName,
      companyEmail,
      companyEmailLink,
      companyTemplate,
      companyPhone,
      templatesList: TemplatesList,
      generalEmailErrors,
      emailLinkErrors,
      companyNameErrors,
      templateErrors,
      generalPhoneErrors,
    };
  },
};
</script>
