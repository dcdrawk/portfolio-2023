<template>
  <div class="app-hero-text flex flex-col md:flex-row h-full py-10 items-center px-4">
    <div class="devin mb-4 flex-shrink-0">
      <NuxtImg
        src="/img/devin.png"
        format="webp"
        class="devin__img md:mr-10 h-auto block flex-grow-1 flex-shrink-0 self-center"
      />
    </div>

    <div class="flex flex-col items-center md:items-start">
      <h2 class="app-hero-text__header font-display text-center md:text-left text-white text-3xl sm:text-4xl md:text-5xl">
        The Web Dev(in)
      </h2>

      <blockquote class="app-hero-text__quote font-body mt-4 text-white text-md">
        <p>
          I'm a software developer with 5+ years of experience specializing in frontend technology and delivering seamless user-experiences.
          I have a strong background in JavaScript, CSS, and Leadership roles. From creating prototypes from
          scratch to building large-scale web apps with a team, I have a lot of passion for my work.
        </p>
      </blockquote>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.app-hero-text {
  position: relative;

  &__header {
    @apply bg-tory-blue-400 bg-opacity-70 inline-block p-4 rounded-md shadow-md;
    backdrop-filter: blur(5px);
  }

  &__item {
    position: relative;
  }

  &__quote {
    max-width: 660px;
    @apply bg-yellow-500 bg-opacity-70 py-4 px-4 rounded-md shadow-md;
    backdrop-filter: blur(5px);
  }
}

.devin {
  position: relative;

  &__img {
    position: relative;
    z-index: 5;
    @apply shadow-lg;
  }

  &__img, &:after {
    width: 175px;
    height: auto;
    border-radius: 50%;

    @screen sm {
      width: 225px;
      height: auto;
    }
  }

  &:after {
    content: '';
    height: 175px;
    @apply absolute bg-tory-blue-400 shadow-lg block left-0 top-0 z-0;

    @screen sm {
      height: 225px;
    }
  }
}
</style>
