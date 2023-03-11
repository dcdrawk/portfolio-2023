<template>
  <AppProject
    title="Canada Drives"
    subtitle="Canadian Car Loans"
    date="October 2020"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Developer']"
    website="https://canadadrives.ca/"
    summary="
      A website project for Website On Demand. When I worked on this website, many of the pages,
      images, and content were completed, but there were still a number of pages to be added.
      I was tasked with making the website responsive, as well as adding a section for members
      and distributors; prodiving them with more information about the product.
    "
    :img-gallery="imgGallery"
    featured-image
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/websites/canada-drives/cd/cd-landing.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-inventory.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-blog.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-newsroom.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-calculator.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-help-centre.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/cd/cd-apply.png',
    alt: 'Freedom Car Credit screenshot'
  }
]
</script>
