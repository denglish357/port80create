<template>
  <div class="comapany-links-card">
    <va-card>
      <va-card-title>
        {{ $t("forms.inputs.companyLinksCardTitle") }}
      </va-card-title>
      <va-card-content>
        <div class="row">
          <div class="flex md8 xs12">
            <va-input v-model="link" placeholder="New link">
              <template #prependInner>
                <va-icon color="gray" name="link" />
              </template>
            </va-input>
          </div>
          <div class="flex md4 xs12">
            <va-button
              @click="addLink()"
              class="my-0"
              :loading="loading.value"
              >{{ $t("forms.buttons.add") }}</va-button
            >
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
export default {
  name: "company-links-card",
  setup() {
    const store = useStore();
    const loading = ref(false);
    const link = ref("");
    const mainLinksIndex = ref(0);

    const companyLinks = computed({
      get: () => store.state.companyData.companyLinks,
    });

    function addLink() {
      store.commit("setLink", {
        link: link.value,
        index: mainLinksIndex.value,
      });
      link.value = "";
      mainLinksIndex.value = mainLinksIndex.value + 1;
      loading.value = true;
    }

    watch(companyLinks, () => {
      console.log("companyLinks changed");
      loading.value = false;
    });

    return {
      companyLinks,
      link,
      mainLinksIndex,
      loading,
      addLink,
    };
  },
};
</script>
