<template>
  <AppProject
    title="Fresh Start"
    subtitle="Online Personal Loans"
    date="Spring 2017"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'PHP', 'Laravel', 'Blade', 'SCSS']"
    :roles="['Developer']"
    website="https://freshstartfinance.ca"
    summary="
      A website I helped work on as a Jr. Software developer at Canada Drives. The focus was re-branding the website, as well as improving performance and conversion rate."
    process="
      With a team of 5 developers, we updated the look and feel of an existing Laravel website following mockups provided by the design team. Used Laravel, PHP, Blade templates, and Javascript to develop a mobile-first responsive experience. Project also included creating a brand new Vue.js SPA to replace our legacy lead generation flow. Worked closely with our QA team to resolve issues found during testing.
    "
    result="
      Successfully implemented a design and UX overhaul to the Freshstart website, which improved performance and boosted organic traffic, which in turn improved conversion rate. Following this rebranding, our consumer lending team saw considerable growth as the product matured.
    "
    :img-gallery="imgGallery"
    featured-image
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-landing.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-1.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-2.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-3.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-4.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-5.png',
    alt: 'Fresh Start screenshot'
  },
  {
    img: '/img/websites/canada-drives/freshstart/freshstart-screenshot-6.png',
    alt: 'Fresh Start screenshot'
  }
]
</script>
