<template>
  <AppSection
    id="projects"
    hide-divider
  >
    <template #title>
      Projects
    </template>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <nuxt-link
        v-for="(project, index) in projects"
        :key="index"
        :to="project.path"
      >
        <AppImageCard
          :title="project.title"
          :subtitle="project.subtitle"
          :img="project.img"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="experience.body" />
        </AppImageCard>
      </nuxt-link>
    </div>
  </AppSection>
</template>

<script setup>
const projects = [{
  title: 'Scrollbinder',
  subtitle: 'AngularJS Project',
  img: '/img/projects/scrollbinder.jpg',
  path: '/projects/scrollbinder'
}, {
  title: 'The Sandwich',
  subtitle: '3D Animated Short',
  img: '/img/projects/sandwich.jpg',
  path: '/projects/the-sandwich'
}, {
  title: 'Dice Roller',
  subtitle: 'ThreeJS Mobile Web App',
  img: '/img/projects/dice-roller.jpg',
  path: '/projects/dice-roller'
}, {
  title: 'UFOria',
  subtitle: 'Immersive Unity Game',
  img: '/img/projects/uforia.jpg',
  path: '/projects/uforia'
}, {
  title: 'Harvey The Hamster',
  subtitle: 'Green Screen Video Project',
  img: '/img/projects/harvey.jpg',
  path: '/projects/harvey'
}, {
  title: 'Kinect Remote',
  subtitle: 'Gesture Video Control App',
  img: '/img/projects/kinect.jpg',
  path: '/projects/kinect-remote'
}]
</script>
