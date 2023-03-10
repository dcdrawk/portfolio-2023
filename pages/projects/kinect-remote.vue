<template>
  <AppProject
    title="Kinect Remote"
    subtitle="Hand Gesture Control App"
    date="Spring 2013"
    anchor="projects"
    breadcrumb="Projects"
    :technology="['Kinect Dev Kit', 'Processing 2.0', 'Adobe Premiere Pro']"
    :roles="['Programmer', 'Interface Designer']"
    summary="
      For this project, we were put into teams of two. Our goal was to take an existing electronic
      device and minimize it to the extreme. We chose a video remote, and we decided to replace
      the complex controller with simple hand gestures.
    "
    process="
      We began by drawing out our ideas and then picking the ones we felt most confident with.
      We thought about using colour tracking, but we decided that the Kinect was the best way
      to achieve our desired functionality.
    "
    result="
      The video remote was featured in a class showcase where students and faculty could try it themselves.
      Our project received an A grade.
    "
    :img-gallery="imgGallery"
    youtube-id="rB7E_XL_UZU"
  />
</template>

<script>
export default {
  // Name
  name: 'KinectRemote',

  // Setup
  setup () {
    const imgGallery = [
      {
        img: '/img/projects/kinect/kinect-process1.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/kinect/kinect-process1.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Kinect project process 1'
      },
      {
        img: '/img/projects/kinect/kinect-process2.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/kinect/kinect-process2.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Kinect project process 2'
      },
      {
        img: '/img/projects/kinect/kinect-process3.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/kinect/kinect-process3.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Kinect project process 3'
      },
      {
        img: '/img/projects/kinect/kinect-process4.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/kinect/kinect-process4.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Kinect project process 4'
      },
      {
        img: '/img/projects/kinect/kinect-process5.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=jpg',
        imgWebp: '/img/projects/kinect/kinect-process5.jpg?sizes[]=150,sizes[]=300,sizes[]=600,sizes[]=900&format=webp',
        alt: 'Kinect project process 5'
      }
    ]

    return {
      imgGallery
    }
  }
}
</script>
