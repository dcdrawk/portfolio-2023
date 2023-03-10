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

<script>
export default {
  // Name
  name: 'SpringFinancial',

  // Setup
  setup () {
    const imgGallery = [
      {
        img: '/img/websites/canada-drives/spring/spring-landing.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-landing.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-loan.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-loan.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-mortgage.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-mortgage.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-blog.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-blog.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-reviews.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-reviews.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-help-centre.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-help-centre.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/spring/spring-apply.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/spring/spring-apply.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      }
    ]

    return {
      imgGallery
    }
  }
}
</script>
