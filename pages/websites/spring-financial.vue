<template>
  <AppProject
    title="Spring Financial"
    subtitle="Online Personal Loans & Mortgages"
    date="January 2020"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Developer']"
    website="https://springfinancial.ca/"
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
    img: '/img/websites/canada-drives/spring/spring-landing.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-loan.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-mortgage.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-blog.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-reviews.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-help-centre.png',
    alt: 'Freedom Car Credit screenshot'
  },
  {
    img: '/img/websites/canada-drives/spring/spring-apply.png',
    alt: 'Freedom Car Credit screenshot'
  }
]
</script>
