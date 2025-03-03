<!-- src/.vuepress/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h1>{{ 1111 }}</h1>
    <p>{{ 11 }}</p>
  </div>
</template>
 
<script>
export default {
  name: 'demo',
  props: {
    title: {
      type: String,
      default: 'Hello VuePress'
    },
    description: {
      type: String,
      default: 'This is a custom component.'
    }
  }
}
</script>
 
<style scoped>
.my-component {
  border: 1px solid #eaecef;
  padding: 20px;
  margin: 20px 0;
}
</style>
