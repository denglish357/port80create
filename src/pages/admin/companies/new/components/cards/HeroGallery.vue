<template>
  <div class="hero-gallery">
    <va-card>
      <va-card-title>{{ $t("fileUpload.companyMediaGallery") }}</va-card-title>
      <va-card-content>
        <va-file-upload
          type="gallery"
          file-types=".png, .jpg, .jpeg, .gif, .svg"
          dropzone
          v-model="gallery"
          @change="uploadFile()"
        />
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
export default {
  name: "hero-foto-gallery",
  data() {
    return {
      gallery: [],
      galleryNames: [],
    };
  },
  methods: {
    uploadFile() {
      const File = this.gallery[this.gallery.length - 1];
      console.log(this.gallery.length);
      console.log(File);
      const files = File;
      let filename = files.name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      var src = URL.createObjectURL(files);
      console.log(src);
      this.galleryNames.push({
        text: filename,
        value: src,
      });
      this.$store.dispatch("pushFotoToHeroGallery", this.gallery);
      this.$store.dispatch("pushFotoToHeroGalleryNames", this.galleryNames);
    },
  },
};
</script>
