<template>
  <AppProject
    title="The Sandwich"
    subtitle="3D Animated Short"
    date="Fall 2012"
    anchor="projects"
    breadcrumb="Projects"
    :technology="['Autodesk Maya', 'Blender', 'Adobe Premiere Pro']"
    :roles="['Animator', 'Lighting', '3D Modeling', 'Rigging']"
    summary="
      With a small group, I assisted with the production of a 3D animated short film. Working with Autodesk Maya,
      we crafted everything from scratch to make a comical and memorable animation.
    "
    process="
      Our animated short began with a series of simple sketches as we finalized our narrative. After we collaborated
      together to model, texture, light, and animate our scene. After rendering each frame, we put on the final touches
      before presenting it to the class. Every model had to me made from scratch, and we put our knowledge of modeling and rigging to the test.
    "
    result="
      The Sandwich was screened in front of the class and received an A. It was applauded for it's use of lighting, animation, and character rigging.
    "
    :img-gallery="imgGallery"
    youtube-id="MLEdSgTkL8Y"
  />
</template>

<script setup>
const imgGallery = [
  {
    img: '/img/projects/sandwich/bender-grab.jpg',
    alt: 'The Sandwich'
  },
  {
    img: '/img/projects/sandwich/kitchen-table.jpg',
    alt: 'The Sandwich'
  },
  {
    img: '/img/projects/sandwich/lighting-setup.jpg',
    alt: 'The Sandwich'
  },
  {
    img: '/img/projects/sandwich/test-footage.jpg',
    alt: 'The Sandwich'
  },
  {
    img: '/img/projects/sandwich/tomato-grab.jpg',
    alt: 'The Sandwich'
  },
  {
    img: '/img/projects/sandwich/tomato-slice.jpg',
    alt: 'The Sandwich'
  }
]
</script>
