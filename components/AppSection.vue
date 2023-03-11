<template>
  <section
    class="container mx-auto mt-4 md:mt-10 px-4 xl:px-0"
  >
    <h3 class="font-display text-3xl mb-4 dark:text-white transition-colors duration-500">
      <slot name="title" />
    </h3>

    <slot />

    <AppDivider
      v-if="!hideDivider"
      :margin="dividerMargin"
    />
  </section>
</template>

<script setup>
defineProps({
  hideDivider: {
    type: Boolean,
    default: false
  },
  dividerMargin: {
    type: String,
    default: undefined
  }
})
</script>
