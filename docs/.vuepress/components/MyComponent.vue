<!-- src/.vuepress/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
 
<script>
export default {
  name: 'MyComponent',
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
