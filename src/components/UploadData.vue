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
        <b-form-group horizontal
                      breakpoint="lg"
                      label="Data-preprocessing"
                      label-size="lg"
                      label-class="font-weight-bold pt-0"
                      class="mb-0">
          <b-form-group horizontal
                        label="Upload own dataset/existing:"
                        label-class="text-sm-right"
                        label-for="nestedDataType">
            <b-form-s