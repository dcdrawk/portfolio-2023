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

<script setup>
const experiences = reactive([{
  title: 'Lead Frontend Engineer',
  company: 'Canada Drives',
  startDate: 'November 2017',
  open: false,
  body: `
    <p class="mb-2">
      Responsible for scoping and implementing new features with JavaScript, TypeScript, Vue.js, and Nuxt. Assisted with improvements to our Continuous Integration pipeline, maintaining unit test coverage with Jest, and upgrading the codebase from Vue 2 to Vue 3.
    </p>

    <p>
      Involved with creating tasks, sprint planning, code reviews, and delegating work between team members. Facilitated on-boarding of new team members, provided mentorship to Junior Developers through 1-on-1 meetings and lunch-and-learn presentations. Coordinated requirements between Agile teams. Received multiple accolades, including the Innovator Award in 2018, and the Mentor Award in 2020.
    </p>`
}, {
  title: 'Lead Frontend Engineer',
  company: 'Spring Financial',
  startDate: 'December 2021',
  endDate: 'November 2022',
  open: false,
  body: `
    <p class="mb-2">
      Led the Frontend team at <a href="//springfinancial.ca" target="_blank" class="text-tory-blue-500 dark:text-tory-blue-100">Spring Financial</a>, a Canada Drives' sister-company. Responsible for scoping and developing new features, performing code reviews, and mentoring junior engineers. Documented coding standards and best practices for the team to follow. Contributed to our release management process by leading weekly meetings to coordinate between Agile teams, review in-progress features, and plan deployments. Received recognition with the Mentor Award in 2021.
    </p>

    <p>
      Assisted the team with a re-branding of our company website and loan application flow using Vue.js and Nuxt. The re-brand was successful, reducing user bounce rate, and increasing conversion rate by 15%. Changes to the application flow improved the rate that users submitted necessary documents from 20% to 70%.
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
      Led frontend development on a rewrite of an internal application. The previous app was built with
      Laravel and jQuery, while the rewrite was built with Vue.js, ES6, SCSS, and Webpack. The code and
      project structure was easier to maintain than the previous iteration. The new version reduced the
      time needed to add new features, while improving development time, user experience, and client-side
      performance.
    </p>`
}, {
  title: 'Jr. Frontend Developer',
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
</script>
