<template>
  <v-container>
    <input
      style="display: none"
      type="file"
      @change="onFileSelected"
      ref="fileInput"
    />
    <button @click="$refs.fileInput.click()">Pick File</button>
    <button @click="$onUpload.click()">Upload</button>
  
  </v-container> 
</template>

<script>
import axios from "axios";

export default {
  name: "Upload",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post(' ',fd,{
          onUploadProgress: uploadEvent => {
              console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100 + '%'))
          }
      })
      .then(res => {
          console.log(res)
      })
    },
  },
};
</script>