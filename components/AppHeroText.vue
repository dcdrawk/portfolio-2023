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

      <blockquote class="max-w-[665px] bg-golden-bell-500/60 py-4 px-4 rounded-md border-4 border-golden-bell-400 font-body mt-4 text-white text-md shadow-md">
        <p class="mb-2">
          I'm a software developer with 8 years of experience building accessible, performant, and responsive web applications. I have a strong technical background in JavaScript, Vue.js, and Nuxt, as well as mentorship experience leading teams of developers.
        </p>
        <p>
          I enjoy using modern web frameworks and implementing best-practices that enable myself and my team to deliver quality user-experiences.
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
