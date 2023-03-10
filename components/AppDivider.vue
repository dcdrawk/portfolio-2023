<template>
  <div
    class="app-divider flex items-center justify-center md:px-0"
    :class="[ margin ]"
  >
    <hr class="block w-full relative bg-gray-400 dark:bg-gray-300">
  </div>
</template>

<script setup>
defineProps({
  margin: {
    type: String,
    default: 'my-6 lg:my-10'
  }
})
</script>

<style lang="postcss" scoped>
.app-divider hr {
  height: 2px;
}
</style>
