<template>
  <AppProject
    title="USA Drives"
    subtitle="USA Car Loans"
    date="Spring 2017"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Lead Frontend Developer']"
    website="https://usadrives.com/"
    summary="The website for USA Drives, a sister-brand to Canada Drives for US-based customers"
    :img-gallery="imgGallery"
    featured-image
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-landing.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-inventory.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-how-it-works.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-about.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-contact-1.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-contact-2.png',
    alt: 'USA Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/usadrives/usadrives-apply.png',
    alt: 'USA Drives screenshot'
  }
]
</script>
