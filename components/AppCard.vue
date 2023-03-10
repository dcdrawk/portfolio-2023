<template>
  <div
    class="bg-white dark:bg-gray-800 shadow w-full overflow-hidden transition-colors duration-500"
    :class="[padding, rounded]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  // Name
  name: 'AppCard',

  props: {
    padding: {
      type: String,
      default: 'p-4'
    },
    rounded: {
      type: String,
      default: 'rounded-md'
    }
  },

  setup () {}
}
</script>
