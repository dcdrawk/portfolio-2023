<template>
  <AppProject
    title="USA Drives"
    subtitle="USA Car Loans"
    date="Spring 2017"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Developer']"
    website="https://usadrives.com/"
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
