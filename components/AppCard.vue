<template>
  <div
    class="bg-white dark:bg-gray-800 shadow w-full overflow-hidden transition-all duration-500"
    :class="[padding, rounded]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  padding: {
    type: String,
    default: 'p4'
  },
  rounded: {
    type: String,
    default: 'rounded-md'
  }
})
</script>
