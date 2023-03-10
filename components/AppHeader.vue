<template>
  <header class="bg-tory-blue-500 shadow-md sticky top-0 z-20">
    <div class="container mx-auto py-0 md:py-3 md:px-4 xl:px-0 flex items-center">
      <div
        class="h-12 w-12 flex items-center justify-center md:hidden cursor-pointer mr-2"
        @click="toggleNav"
      >
        <FontAwesomeIcon
          :key="toggleIcon"
          :icon="toggleIcon"
          class="text-white"
        />
      </div>
      <div>
        <h1 class="font-display text-2xl md:text-3xl text-white">
          Devin Cook
        </h1>
        <h3 class="font-display text-xs md:text-md text-white opacity-75 hidden md:block">
          Front End Software Developer
        </h3>
      </div>
    </div>

    <AppNav
      :is-open="navIsOpen"
      @close="navIsOpen = false"
    />
  </header>
  <transition name="fade">
    <div
      v-if="navIsOpen"
      class="backdrop h-screen w-screen fixed top-0 left-0 z-10 opacity-75 bg-black md:hidden"
      @click="navIsOpen = false"
    />
  </transition>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  // Name
  name: 'AppHeader',

  // Props
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    const navIsOpen = ref(false)
    function toggleNav () {
      navIsOpen.value = !navIsOpen.value
    }
    const toggleIcon = computed(() => navIsOpen.value ? 'times' : 'bars')
    return {
      toggleNav,
      toggleIcon,
      navIsOpen
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
