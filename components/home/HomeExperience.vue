<template>
  <AppSection id="experience">
    <template #title>
      Experience
    </template>

    <div class="grid grid-cols-1 gap-4">
      <AppExperience
        v-for="(experience, index) in experiences"
        :key="index"
        :title="experience.title"
        :company="experience.company"
        :start-date="experience.startDate"
        :end-date="experience.endDate"
        :is-open="experience.open"
        @toggle="experience.open = !experience.open"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="experience.body" />
      </AppExperience>
    </div>
  </AppSection>
</template>

<script>
// import AppSection from '@/components/layout/AppSection'
// import AppExperience from '@/components/AppExperience'
import { reactive } from 'vue'

export default {
  // Name
  name: 'Experience',

  // Components
  // components: {
  //   AppSection,
  //   AppExperience
  // },

  // Props
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    const experiences = reactive([{
      title: 'Lead Front End Developer',
      company: 'Canada Drives',
      startDate: 'December 2017',
      open: false,
      body: `
        <p class="mb-2">
          Currently leading the front-end team working on our consumer lending brand <a href="//springfinancial.ca" target="_blank" class="text-tory-blue-500 dark:text-tory-blue-100">springfinancial.ca.</a> Responsible for scoping new features and providing hands-on support to the team. Improvements to our app flow increased the number of users who submit all required documents from 20% to 70%.
        </p>

        <p>
          Our car shopping platform  <a href="//shop.canadadrives.ca" target="_blank" class="text-tory-blue-500 dark:text-tory-blue-100">shop.canadadrives.ca</a> was built from the ground-up using Vue.js, Nuxt.js,  Shopify storefront API, and our custom backend. I helped architect and develop the application structure while providing mentorship to co-workers. In recent months we have seen exponential growth in customer acquisition as we continue to improve and expand to more provinces.
        </p>`
    }, {
      title: 'Jr. Software Developer',
      company: 'Canada Drives',
      startDate: 'August 2016',
      endDate: 'November 2017',
      open: false,
      body: `
        <p class="mb-2">
          Helped build and maintain new and existing websites using PHP, HTML, JavaScript, and SCSS.
          Worked from mock-ups provided by the design team to develop a/b test variations for our websites.
          These tests ranged from small text changes to full-scale redesigns.
        </p>

        <p>
          Led front end development on a rewrite of an internal application. The previous app was built with
          Laravel and jQuery, while the rewrite was built with Vue.js, ES6, SCSS, and Webpack. The code and
          project structure was easier to maintain than the previous iteration. The new version reduced the
          time needed to add new features, while improving development time, user experience, and client-side
          performance.
        </p>`
    }, {
      title: 'Jr. Front End Developer',
      company: 'Phoenix Restorations',
      startDate: 'September 2015',
      endDate: 'July 2016',
      open: false,
      body: `
        <p class="mb-2">
          Assisted with building an enterprise-level single-page application. Worked directly with the Team Lead
          / Software Architect to design and implement a wide variety of features. These features included
          multi-language support, invoices, inventory management, and other business-related features.
        </p>

        <p>
          Responsible for implementing API routes to communicate with a database using Symfony, a PHP framework.
          Designed views and web components with HTML, PHP, and SASS. Used AngularJS to create controllers,
          services, factories, and custom directives to implement front end functionality.
        </p>`
    }, {
      title: 'Jr. Web Developer',
      company: 'Website-On-Demand',
      startDate: 'October 2014',
      endDate: 'September 2015',
      open: false,
      body: `
        <p class="mb-2">
          Responsible for developing and building websites with a wide variety of clients, including the Canadian
          Lymphedema Framework, Public Interest (Toronto), and many others. Tasks ranged from complete site builds,
          to small updates and style tweaks. Primarily used HTML, CSS, JavaScript, PHP, and WordPress.
        </p>

        <p>
          Consulted with clients to communicate website updates and specifications. Followed a tight schedule to
          ensure updates are delivered on time and clients were happy with our work. Clients often commented on
          our attention to detail and quick response times.
        </p>`
    }])

    return {
      experiences
    }
  }
}
</script>

<style scoped>
</style>
