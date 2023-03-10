<template>
  <AppProject
    title="Fitlight"
    subtitle="Agility Training Products"
    date="October 2014"
    anchor="websites"
    breadcrumb="Websites"
    :technology="['HTML', 'CSS', 'PHP', 'Javascript', 'Joomla', 'Custom Theme']"
    :roles="['Web Developer']"
    website="https://www.fitlighttraining.com/"
    summary="
      A website project for Website On Demand. When I worked on this website, many of the pages,
      images, and content were completed, but there were still a number of pages to be added.
      I was tasked with making the website responsive, as well as adding a section for members
      and distributors; prodiving them with more information about the product.
    "
    img="/img/websites/fitlight/fitlight-screenshot.jpg"
    img-right
  />
</template>

<script>
import AppProject from '@/components/layout/AppProject'

export default {
  // Name
  name: 'Fitlight',

  // Components
  // components: {
  //   AppProject
  // }
}
</script>
