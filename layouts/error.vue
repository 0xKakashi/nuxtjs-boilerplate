<template>
  <section id="error">
    <h1 v-text="error.statusCode" />
    <h2 v-if="error.statusCode === 404">Page Not Found</h2>
    <h2 v-else>Something Went Wrong.</h2>
    <p v-text="error.message" />
    <nuxt-link to="/">Back to Home</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped></style>
