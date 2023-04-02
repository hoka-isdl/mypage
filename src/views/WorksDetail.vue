<template>

    <div class="text--primary">
        <img :src="this.work.image">
        <div v-html="sanitizedBody"></div>
    </div>

</template>
<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
export default {
  data: function() {
    return {
       work: {}
    }
  },
  computed: {
    sanitizedBody() {
      return sanitizeHtml(this.work.content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
  },
  async mounted() {
    const response = await axios.get(
      process.env.VUE_APP_MICROCMS_ENDPOINT + "works/" + this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.work = response.data;
    // YYYY-MM-DD形式に加工
    this.work.createdAt = this.work.createdAt.substr(0, 10);
    this.work.updatedAt = this.work.updatedAt.substr(0, 10);
    this.work.image=this.work.image.url
  }
};
</script>

<style scoped>
.text--primary{
    margin:50px 200px;
    
}
.text--primary img{
    margin-bottom:50px;
    
}
</style>