<template>
  <div class="app-hero-text relative flex flex-col md:flex-row h-full py-10 items-center px-4">
    <div class="devin relative mb-4 flex-shrink-0">
      <NuxtImg
        src="/img/devin.png"
        format="webp"
        width="334"
        height="334"
        alt="Devin"
        class="devin__img z-10 relative md:mr-10 h-auto block flex-grow-1 flex-shrink-0 self-center border-4 border-tory-blue-200 shadow-md"
      />
    </div>

    <div class="flex flex-col items-center md:items-start">
      <h2 class="border-4 border-tory-blue-200 bg-tory-blue-400/70 backdrop-blur inline-block p-4 rounded-md shadow-md font-display text-center md:text-left text-white text-3xl sm:text-4xl md:text-5xl">
        The Web Dev(in)
      </h2>

      <blockquote class="max-w-[660px] bg-golden-bell-500/60 py-4 px-4 rounded-md border-4 border-golden-bell-400 font-body mt-4 text-white text-md shadow-md">
        <p>
          I'm a software developer with 7+ years of experience specializing in frontend technology and delivering quality user-experiences.
          I have a strong background in JavaScript, CSS, and leadership roles. I focus on building performant, accessible, and responsive web applications
          that follow modern standards.
        </p>
      </blockquote>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.devin {
  &__img, &:after {
    @apply w-[175px] sm:w-[225px] h-auto rounded-full;
  }

  &:after {
    content: '';
    height: 175px;
    @apply absolute bg-tory-blue-400/50 shadow-lg block left-0 top-0 z-0;
    backdrop-filter: blur(5px);

    @screen sm {
      height: 225px;
    }
  }
}
</style>
