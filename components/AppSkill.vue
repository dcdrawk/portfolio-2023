<template>
  <AppCard>
    <h4 class="text-lg font-semibold mb-3">
      {{ title }}
    </h4>

    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </AppCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  }
})
</script>
