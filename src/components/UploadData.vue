<template>
  <div id="uploadData">
    <br>
    <br>
    <b-container  class="rounded text-center" >
      <b-card bg-variant="light">
        <div v-if="uploadedFileType=='csv'">
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/> Uploaded file:   {{this.uploadedFile}}
        </div>
        <br>
        <br>
        <br>
        <br>
        <b-form-g