<template>
    <div class="text--primary">
        <img :src="this.blog.image">
        <div v-html="sanitizedBody"></div>
    </div>
</template>
<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
export default {
  data: function() {
    return {
       blog: {}
    }
  },
  computed: {
    sanitizedBody() {
      return sanitizeHtml(this.blog.content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
  },
  async mounted() {
    const response = await axios.get(
      process.env.VUE_APP_MICROCMS_ENDPOINT + "blogs/" + this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.blog = response.data;
    // YYYY-MM-DD形式に加工
    this.blog.createdAt = this.blog.createdAt.substr(0, 10);
    this.blog.updatedAt = this.blog.updatedAt.substr(0, 10);
    this.blog.image=this.blog.image.url
  }
};
</script>
<style scoped>
.text--primary{
    margin:10%;
    
}
.text--primary img{
    margin-bottom:10%;
    
}
</style>