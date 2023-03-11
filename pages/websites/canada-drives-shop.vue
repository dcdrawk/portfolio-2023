<template>
  <div>
    <AppProject
      title="Canada Drives (Ecommerce)"
      subtitle="Purchase or finance a vehicle from any device"
      date="October 2020"
      anchor="websites"
      breadcrumb="Websites"
      :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Vuetify', 'SCSS']"
      :roles="['Lead Frontend Developer']"
      website="https://shop.canadadrives.ca/"
      summary="Canada Drives vehicle ecommerce platform. Enables users to purchase, finance, or trade-in a vehicle without the hassle of a dealership."
      :img-gallery="imgGallery"
      featured-image
    />
  </div>
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/websites/canada-drives/d2c/d2c-landing.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-catalog.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-vehicle.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-browse.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-finance.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-help-centre.png',
    alt: 'Canada Drives Shop screenshot'
  },
  {
    img: '/img/websites/canada-drives/d2c/d2c-how-it-works.png',
    alt: 'Canada Drives Shop screenshot'
  }
]
</script>
