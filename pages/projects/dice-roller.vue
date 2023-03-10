<template>
  <AppProject
    title="Diceroller"
    subtitle="ThreeJS Mobile Web App"
    anchor="projects"
    date="Spring 2015"
    breadcrumb="Projects"
    website="http://dcdrawk.github.io/381a2/#/"
    github="https://github.com/dcdrawk/381a2/"
    :technology="['HTML', 'CSS', 'Javascript', 'ES6', 'AngularJS', 'ThreeJS', 'PhysiJS']"
    :roles="['UX Designer', 'Developer']"
    summary="
      DiceRoller was a small web app prototype I worked on for my mobile design class. The goal was to take an app
      idea and create something completely unique and experimental. I decided to create an app that allowed users
      to roll 3D dice using unique gestures and movements. It requires a mobile phone with multi-touch or an
      accelerometer to use.
    "
    process="
      We were given two weeks to reinvent an app with unique gestures. I decided to use threeJS and physiJS libraries,
      which allowed me to create 3D objects complete with physics. My source of inspiration was the dice effect
      from the classic board game Trouble.
    "
    result="
      This assignment was a true test of my JavaScript skills. After two weeks I had a working prototype that was able
      to use two different kinds of dice (d4 and d6). The dice can be rolled via a pinch gesture, or by moving the
      device up and down.
    "
    img="/img/projects/diceroller-screen.jpg"
    img-right
  />
</template>
