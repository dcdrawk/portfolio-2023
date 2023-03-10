<template>
  <AppProject
    title="Scrollbinder"
    subtitle="AngularJS Project"
    anchor="projects"
    date="Spring 2015"
    breadcrumb="Projects"
    website="http://dcdrawk.github.io/381a1/app/#/"
    github="https://github.com/dcdrawk/381a1/"
    :technology="['HTML', 'CSS', 'Javascript', 'ES6', 'Angular']"
    :roles="['Programmer', 'UX Designer', 'Wireframing']"
    summary="
      ScrollBinder is a character planner app for the popular table-top game, Dungeons and Dragons.
      Created as part of a mobile design course, we were given the task of creating a web app that also
      utilized web services. ScrollBinder uses Google's Realtime API to enable collaboration between players.
    "
    process="
      Initially, I had to decide which framwork to use. I settled upon Angular JS, and decided to make an app which
      followed Google's Material Design Specs. The first phase of development consisted of creating a working app
      that could track player stats and traits. The second phase included adding Google's Realtime API to allow groups
      of players to keep track of important adventure details.
    "
    result="
      ScrollBinder successfully reimagined the DnD experience by bringing. The responsive design
      allows it to work on any device, which greatly improves accessibility. I shared this app
      with my personal DnD group, and they continue to give me positive reviews and constructive feedback.
    "
    img="/img/projects/scrollbinder-main.jpg"
    img-right
  />
</template>

<script>
export default {
  // Name
  name: 'Scrollbinder'
}
</script>
