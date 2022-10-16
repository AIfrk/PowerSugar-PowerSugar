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
            <b-form-select  id="nestedDataType" v-model="uploadedFileType" :options="UploadedFileOptions" class="mb-3" />
          </b-form-group>
        </b-form-group>

        <!--Rendering content for pre-defined datasets-->
        <div v-if="uploadedFileType=='pre-defined'">
       
       <b-form-group horizontal
                        breakpoint="lg"
                        label=""
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0">

           <b-form-group horizontal
                          label="Select options:"
                          label-class="text-sm-right"
                          label-for="pre-proc-options">
              <b-form-select :options="preDefinedOptions" id="pre-def-options" v-model="predefinedSelected" :select-size="1"></b-form-select>
            </b-form-group>
            
          </b-form-group>

          </b-form-group>
          <br>
          <br>
      