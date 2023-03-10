<template>
  <AppProject
    title="Canada Drives (Ecommerce)"
    subtitle="Purchase or finance a vehicle from any device"
    date="October 2020"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'Nuxt.js', 'SSR', 'Node', 'Vuetify', 'SCSS']"
    :roles="['Developer']"
    website="https://shop.canadadrives.ca/"
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

<script>
export default {
  // Name
  name: 'SpringFinancial',

  // Setup
  setup () {
    const imgGallery = [
      {
        img: '/img/websites/canada-drives/d2c/d2c-landing.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-landing.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-catalog.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-catalog.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-vehicle.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-vehicle.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-browse.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-browse.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-finance.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-finance.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-help-centre.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-help-centre.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/d2c/d2c-how-it-works.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/d2c/d2c-how-it-works.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      }
    ]

    return {
      imgGallery
    }
  }
}
</script>
