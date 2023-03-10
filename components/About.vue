<template>
  <AppSection>
    <template #title>
      A Site About Me
    </template>

    <div class="flex items-start">
      <!-- <div class="devin relative">
        test
      </div> -->
      <div class="devin">
        <NuxtImg
          src="/img/devin.png"
          format="webp"
          class="devin__img mr-10 h-auto block flex-grow-1 flex-shrink-0 self-center"
        />
      </div>
      <AppCard>
        <p class="mb-3 text-base">
          I'm a software developer with 5+ years of experience delivering professional quality web apps and websites.
          I have a strong background in JavaScript, CSS, and UI/UX design principles. From creating prototypes from
          scratch to building large-scale web apps with a team, I have a lot of passion for my work.
        </p>

        <p>
          During my professional and academic experiences, I’ve honed my problem solving, mentoring, and leadership skills.
          I enjoy learning new techniques, approaches, and skills that improve the design process. I push myself and my
          team-mates to explore new ideas and succeed as a group.
        </p>
      </AppCard>
    </div>
  </AppSection>
</template>

<script>
// import AppSection from '@/components/layout/AppSection'
// import AppCard from '@/components/AppCard'

export default {
  // Name
  name: 'About',

  // Components
  // components: {
  //   AppSection,
  //   AppCard
  // },

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
  setup (props, context) {}
}
</script>

<style lang="postcss" scoped>
.devin {
  position: relative;
  @apply mr-10;
  &__img {
    position: relative;
    width: 240px;
    z-index: 5;
  }

  &:after {
    position: absolute;
    top: 0px;
    right: 10px;
    content: '';
    width: 200px;
    height: 200px;
    border-radius: 50%;
    @apply bg-tory-blue-500 shadow-lg;
    display: block;
    z-index: 0;
  }
}
</style>
