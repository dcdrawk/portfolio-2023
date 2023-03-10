<template>
  <AppProject
    title="Freedom Car Credit"
    subtitle="UK Car Loans"
    date="Spring 2017"
    anchor="websites"
    breadcrumb="Websites"
    :technology="[ 'Javascript', 'Vue.js', 'PHP', 'Laravel', 'Blade', 'SCSS']"
    :roles="['Developer']"
    website="https://www.freedomcarcredit.com/"
    summary="
      A website I helped build for one of Canada Drives' partner companies in the UK. Was responsible for building several static pages
      as well as developing the single page lead generation flow.
    "
    process="
      With a team of 5 developers, we developed a website using PHP, Javascript and SCSS. With Laravel as the primary framework,
      the Frontend components were created using Blade templates and our custom Compass SCSS for styles. Mockups and wireframes were
      provided by the design team who provided feedback and guidance throughout the project. Also helped create the lead generation flow, which was
      a stand-alone application built with PHP and jQuery. Eventually, this lead generation flow was migrated to Vue.js to match our other refactoring efforts.
    "
    result="
      The website was completed ahead of schedule and received good feedback from the client. Through multiple iterations and A/B tests, we refined our flows
      to improve conversion rate and optimize the user experience.
    "
    :img-gallery="imgGallery"
    featured-image
  />
</template>

<script>
export default {
  // Name
  name: 'FreedomCarCredit',

  // Setup
  setup () {
    const imgGallery = [
      {
        img: '/img/websites/canada-drives/freedom/freedom-app.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-app.png?sizes[]=420,sizes[]=600,sizes[]=750,sizes[]=1200&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-home-1.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-home-1.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-home-2.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-home-2.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-how-it-works.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-how-it-works.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-products.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-products.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-contact.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-contact.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      },
      {
        img: '/img/websites/canada-drives/freedom/freedom-apply.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/websites/canada-drives/freedom/freedom-apply.png?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Freedom Car Credit screenshot'
      }
    ]

    return {
      imgGallery
    }
  }
}
</script>
