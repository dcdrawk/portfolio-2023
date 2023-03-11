<template>
  <hr
    class="app-divider block w-full relative border-none bg-gray-400"
    :class="[ margin ]"
  >
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
.app-divider {
  height: 1px;
}
</style>
