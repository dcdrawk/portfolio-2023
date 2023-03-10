<template>
  <AppSection>
    <template #title>
      Skills
    </template>

    <div class="grid grid-cols-4 gap-4">
      <AppSkill
        v-for="(skill, index) in skills"
        :key="index"
        :title="skill.title"
        :items="skill.items"
      />
    </div>
  </AppSection>
</template>

<script>
// import AppSection from '@/components/layout/AppSection'
// import AppSkill from '@/components/AppSkill'

export default {
  // Name
  name: 'Skills',

  // Components
  // components: {
  //   AppSection,
  //   AppSkill
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
    const skills = [{
      title: 'Frontend',
      items: [
        'JavaScript',
        'HTML / CSS',
        'SASS / SCSS',
        'Vue.js',
        'Nuxt.js',
        'React'
      ]
    }, {
      title: 'Backend',
      items: [
        'PHP / MySQL',
        'Laravel',
        'Symfony',
        'Node',
        'GraphQL',
        'Firebase'
      ]
    }, {
      title: 'Development Tools',
      items: [
        'Unit Testing (Jest)',
        'Webpack',
        'Docker',
        'Linux',
        'Github / Bitbucket',
        'Agile Development'
      ]
    }, {
      title: 'Design Theory',
      items: [
        'Interface Design',
        'Visual Analytics',
        'Rapid Prototyping',
        'UX Design Evaluation',
        'User Testing'
      ]
    }]

    return {
      skills
    }
  }
}
</script>
