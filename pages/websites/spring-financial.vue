<template>
  <AppProject
    title="Spring Financial"
    subtitle="Online Personal Loans & Mortgages"
    date="January 2020"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt', 'SSR', 'Node', 'Tailwind CSS', 'SCSS']"
    :roles="['Lead Frontend Developer']"
    website="https://springfinancial.ca/"
    summary="The main website for Spring Financial, a sister-brand to Canada Drives that specializes in personal loans for Canadians with any credit."
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
