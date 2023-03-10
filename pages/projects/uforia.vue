<template>
  <AppProject
    title="UFOria"
    subtitle="Immersive 3D Game World"
    date="Spring 2013"
    anchor="projects"
    breadcrumb="Projects"
    :technology="['Autodesk Maya', 'Blender', 'Adobe Premiere Pro']"
    :roles="['Level Designer', 'Programmer', '3D Modeling']"
    summary="
      Using the 3D development platform Unity, my group set out to create an interactive immersive experience.
      Our unique world let players explore a UFO abduction using Wii motion controls.
    "
    process="
      After brainstorming our idea, we began by sketching out our framework. Once we were satisfied, we began
      modelling and gathering assets for our project. As we were constructing our game world, we did multiple
      user tests to make sure the experience was fun and bug-free.
    "
    result="
      Our project was featured in a class showcase at SFU's Surrey Campus and received a mark of 24/25.!!!
    "
    :img-gallery="imgGallery"
    youtube-id="iZy9xFdDFSE"
  />
</template>

<script>
export default {
  // Name
  name: 'UFOria',

  // Setup
  setup () {
    const imgGallery = [
      {
        img: '/img/projects/uforia/screenshot1.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot1.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      },
      {
        img: '/img/projects/uforia/screenshot2.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot2.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      },
      {
        img: '/img/projects/uforia/screenshot3.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot3.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      },
      {
        img: '/img/projects/uforia/screenshot4.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot4.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      },
      {
        img: '/img/projects/uforia/screenshot5.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot5.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      },
      {
        img: '/img/projects/uforia/screenshot6.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/uforia/screenshot6.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Uforia screenshot'
      }
    ]

    return {
      imgGallery
    }
  }
}
</script>
