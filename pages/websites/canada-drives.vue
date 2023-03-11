<template>
  <AppProject
    title="Canada Drives"
    subtitle="Canadian Car Loans"
    date="October 2020"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Lead Frontend Developer']"
    website="https://canadadrives.ca/"
    summary="The primary website for Canada Drives. Includes information about the company, and a dynamic blog."
    :img-gallery="imgGallery"
    featured-image
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/websites/canada-drives/cd/cd-landing.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-inventory.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-blog.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-newsroom.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-calculator.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-help-centre.png',
    alt: 'Canada Drives screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-apply.png',
    alt: 'Canada Drives screenshot'
  }
]
</script>
