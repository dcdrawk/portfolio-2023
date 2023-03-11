<template>
  <AppCard
    class="app-img-card h-52 relative bg-white max-h-[208px] flex border border-gray-300 dark:border-gray-700 items-center justify-center shadow transition-shadow hover:shadow-md"
    padding="p-0"
  >
    <NuxtImg
      :src="img"
      class="app-img-card__img w-full relative min-w-[350px]"
      format="webp"
      width="480"
      height="480"
      loading="lazy"
    />

    <div class="app-img-card__text bg-black bg-opacity-60 absolute right-0 bottom-0 text-white w-full px-4 py-3">
      <h3 class="text-xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden">
        {{ title }}
      </h3>

      <h4 class="whitespace-nowrap overflow-ellipsis overflow-hidden">
        {{ subtitle }}
      </h4>
    </div>
  </AppCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  img: {
    type: [String],
    default: ''
  }
})
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
    @apply transition-transform ease-out duration-300;
  }

  &__text {
    bottom: 0;
  }
}
</style>
