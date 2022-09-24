<template>
  <div id="investigate-model">
    <b-container class="text-center">
    <b-button variant="primary" @click="investigate_model">Investigate Model</b-button>
    </b-container>
    <br>
    <br>
    <b-container  class="rounded text-center" >
      <img :src="original_image">
      <img :src="construct