<template>
  <AppProject
    title="Harvey The Hamster"
    subtitle="Green Screen Video Project"
    date="Fall 2012"
    anchor="projects"
    breadcrumb="Projects"
    :technology="['Adobe Afte Effects', 'Adobe Premiere Pro', 'Photoshop']"
    :roles="['Storeboarder', 'Lighting', 'Director', 'Editor']"
    summary="
      This individual assignment challenged my abilities as a media artist. Using the
      song Harvey the Wonder Hamster by Weird Al Yankovic as the base concept, I brainstormed,
      storyboarded, and edited until I was happy with the final outcome.
    "
    process="
      This assignment began with brainstorming and storyboarding the rough concept. This concept
      was submitted for feedback, which I included in the final video. I had to book rooms, rent
      equiment/instruments, and edit the film. Once I had all my footage, I used Primiere Pro and
      Adobe After Effects to add a funky visualizer effect and key out the green screen.
    "
    result="
      When it was finished, Harvey The Wonder Hamster was shown to the class and received a mark of 23/25.
    "
    :img-gallery="imgGallery"
    youtube-id="yQRFre6s7oc"
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/projects/harvey/greenscreen1.jpg',
    alt: 'Harvey the Hamster - Green screen 1'
  },
  {
    img: '/img/projects/harvey/greenscreen2.jpg',
    alt: 'Harvey the Hamster - Green screen 2'
  },
  {
    img: '/img/projects/harvey/greenscreen3.jpg',
    alt: 'Harvey the Hamster - Green screen 3'
  },
  {
    img: '/img/projects/harvey/greenscreen4.jpg',
    alt: 'Harvey the Hamster - Green screen 4'
  },
  {
    img: '/img/projects/harvey/harvey3.jpg',
    alt: 'Harvey!'
  },
  {
    img: '/img/projects/harvey/harvey4.jpg',
    alt: 'Harvey again!'
  }
]
</script>
