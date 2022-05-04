<template>
  <div class="comapany-links-card" v-if="companyLinks.length > 0">
    <va-card>
      <va-card-title>
        {{ $t("forms.inputs.companyDropDownsCardTitle") }}
      </va-card-title>
      <va-card-content>
        <div class="row">
          <div class="flex xs12">
            <va-tabs v-model="value" color="info">
              <template #tabs>
                <va-tab
                  v-for="tab in companyLinks"
                  :key="tab.name"
                  :name="tab.name"
                  :icon="tab.icon"
                  :label="tab.name"
                  @click="setSelectedLink(tab)"
                >
                </va-tab>
              </template>
            </va-tabs>
          </div>
          <div class="row">
            <div class="flex md12 xs12">
              <va-input v-model="link" placeholder="New sub link">
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
          <div class="row">
            <div
              class="flex md12 xs12"
              v-if="
                selectedLink &&
                selectedLink.dropDowns &&
                selectedLink.dropDowns.length > 0
              "
            >
              <va-chip
                v-for="drop in selectedLink.dropDowns"
                :key="drop.name"
                closeable
                :icon="drop.icon"
                color="info"
                size="small"
                class="chips"
                @click="removeDrop(drop.index, drop.parentIndex)"
              >
                {{ drop.name }}
              </va-chip>
            </div>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  name: "company-links-card",
  setup() {
    const store = useStore();
    const link = ref("");
    const value = ref(0);
    const loading = ref(false);
    const selectedLink = ref({});
    const dropLinksIndex = ref(0);

    const companyLinks = computed({
      get: () => store.state.companyData.companyLinks,
    });

    function setSelectedLink(link) {
      selectedLink.value = link;
    }

    function addLink() {
      store.commit("setDropLink", {
        link: link.value,
        index: dropLinksIndex.value,
        parentIndex: selectedLink.value.index,
      });
      link.value = "";
      dropLinksIndex.value = dropLinksIndex.value + 1;
      loading.value = true;
    }

    function removeDrop(index, pIdx) {
      console.log(index, pIdx);
      store.commit("removeDrop", { index: index, parentIndex: pIdx });
    }

    return {
      companyLinks,
      link,
      value,
      setSelectedLink,
      selectedLink,
      addLink,
      loading,
      removeDrop,
    };
  },
};
</script>

<style lang="scss" scoped>
.chips {
  margin-right: 5px;
}
</style>
