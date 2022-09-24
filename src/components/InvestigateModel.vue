<template>
  <div id="investigate-model">
    <b-container class="text-center">
    <b-button variant="primary" @click="investigate_model">Investigate Model</b-button>
    </b-container>
    <br>
    <br>
    <b-container  class="rounded text-center" >
      <img :src="original_image">
      <img :src="constructed_image">
      <b-embed type="iframe" id="explanation_embed" aspect="16by9" allowfullscreen :src="explanation_embed"></b-embed>
    </b-container>

  </div>
</template>
<script>
export default {
  mounted() {
    feather.replace()
    this.loadNotebook()
  },
  data: function() {
      return {
        original_image: null,
        constructed_image: null,
        explanation_embed: null
      }
  },
  methods: {
      // Called on body load
      // Checks if notebook exists and populates UI if noteb