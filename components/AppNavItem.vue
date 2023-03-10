<template>
  <li class="w-full md:w-40 border-b md:border-b-0 md:border-0 border-tory-blue-400 py-3 md:py-2 text-center hover:bg-tory-blue-700 cursor-pointer transition-colors border-radius">
    <span
      class="text-base select-none"
    >
      <slot />
    </span>
  </li>
</template>

<script>
export default {
  // Name
  name: 'AppNavItem',

  // Mixins
  mixins: [],

  // Props
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    return {}
  }
}
</script>

<style scoped>
</style>
