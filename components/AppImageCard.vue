<template>
  <AppCard
    class="app-img-card h-52 relative bg-white"
    padding="p-0"
  >
    <picture>
      <source
        :srcSet="img.srcSet"
        type="image/webp"
      >
      <img
        :src="imgSrc"
        :style="{ top: imgTop }"
        class="app-img-card__img w-full relative"
        >
        <!-- :srcSet="img.srcSet"
          loading="lazy"
          loading="lazy"
        :width="img.width"
        :height="img.height"
        sizes="(min-width: 1280px) 416px, (min-width: 1040px) 320px, (min-width: 780px) calc(50vw - 24px), calc(100vw - 32px)" -->
    </picture>

    <div class="app-img-card__text bg-black bg-opacity-60 absolute right-0 bottom-0 text-white w-full px-4 py-3">
      <h3 class="text-xl font-semibold">
        {{ title }}
      </h3>
      <h4>{{ subtitle }}</h4>
    </div>
  </AppCard>
</template>

<script>
export default {
  // Name
  name: 'AppImageCard',

  // Props
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    img: {
      type: [String, Object],
      default: ''
    },
    imgTop: {
      type: String,
      default: '-100px'
    }
  },

  computed: {
    imgSrc () {
      return this.img.src || this.img
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-img-card {
  cursor: pointer;
  &:hover {
    .app-img-card__img {
      transform: scale(1.05);
    }
  }
  &__img {
    /* top: -100px; */
    @apply transition-transform ease-out duration-300;
  }
  &__text {
    bottom: 0;
  }
}
</style>
