<template>
  <footer class="container py-6 px-4 2xl:px-0 dark:text-gray-200 text-gray-800 transition-colors duration-500">
    <AppDivider margin="mt-4 mb-6" />
    © {{ year }}<br>
    Created by Devin Cook. Built with Nuxt 3 and Tailwind CSS.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
