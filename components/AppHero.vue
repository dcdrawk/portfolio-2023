<template>
  <section
    id="about"
    class="app-hero bg-gray-900 relative overflow-hidden md:max-h-[500px] translate-x-0 shadow-md"
  >
    <div class="app-hero__container container mx-auto h-full flex items-center justify-center shadow-md">
      <AppHeroText />
    </div>

    <NuxtImg
      src="/img/desktop.jpg"
      alt="background image of a computer monitor and keyboard"
      width="1350"
      height="900"
      quality="50"
      class="min-w-[900px] md:w-full z-0 absolute top-0 left-0 blur-sm brightness-50 origin-center"
      :modifiers="imgModifiers"
      format="webp"
    />
  </section>
</template>

<script setup>
const imgModifiers = {
  grayscale: true
}
</script>

<style lang="postcss" scoped>
.app-hero {
  @screen md {
    height: 500px;
  }

  &__container {
    z-index: 1;
    position: relative;
  }
}
</style>
