<template>
  <div class="content">
    <h2 class="is-size-4 has-text-weight-bold">{{ headline }}</h2>
    <div class="content" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    headline: String,
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
