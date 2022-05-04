<template>
  <atom-spinner :animation-duration="1000" :size="60" color="va--primary" />
</template>

<script>
import { AtomSpinner } from "epic-spinners";
export default {
  name: "atom-spinner",
  components: { AtomSpinner },
};
</script>
