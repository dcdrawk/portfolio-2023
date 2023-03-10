<template>
  <section
    id="app-hero"
    class="app-hero bg-gray-900"
  >
    <div class="app-hero__container container mx-auto h-full flex items-center justify-center shadow-md">
      <AppHeroText />
    </div>
  </section>
</template>

<script>

export default {
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
    const imgSrc = '/img/desktop.jpg'

    return {
      imgSrc
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-hero {
  position: relative;

  @screen md {
    height: 500px;
  }

  &:before {
    @apply absolute h-full w-full top-0 left-0 bg-fixed bg-cover bg-center bg-no-repeat;
    content: '';
    background-image: url('/img/desktop.jpg');
    filter: grayscale(100%) brightness(30%);
  }

  &:after {
    @apply absolute h-full w-full top-0 left-0 bg-fixed bg-cover bg-center bg-no-repeat;
    content: '';
    /* background-image: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.4),
      rgba(59, 130, 246, 0.5)
    ); */
  }

  &__container {
    z-index: 1;
    position: relative;
  }
}
</style>
