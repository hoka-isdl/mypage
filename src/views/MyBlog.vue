<template>
  <div>
    <section id="myprofile">
      <div class="myprofile-img fixed-bg">
        <h2 class="sec-title">Blog</h2>
      </div>
    </section>
    <section class="blog">
      <div v-for="(blog, index) in blogs" v-bind:key="index" class="blogdetail">
        <img :src="blog.image.url" class="blogimage">
        <h1>{{blog.title}}</h1>
        <p>{{blog.subtitle}}</p>
        <router-link :to="{name: 'blogdetail',params: {id:blog.id}}" class="btn btn--red btn--radius btn--cubic">Detail<i class="fas fa-angle-right fa-position-right"></i></router-link>
        <img src="../assets/images/github-icon.png" class="github">
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
// const blogs = [
//   {
//     title: "ISDL-MAP",
//     description: "研究室内部屋予約状況管理システム",
//     image:"https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0247/9784839960247.jpg?_ex=200x200"
//   },
//   {
//     title: "ISDL-MAP",
//     description: "研究室内部屋予約状況管理システム",
//     image:"https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0247/9784839960247.jpg?_ex=200x200"
//   },
//   {
//     title: "ISDL-MAP",
//     description: "研究室内部屋予約状況管理システム",
//     image:"https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0247/9784839960247.jpg?_ex=200x200"
//   },
//   {
//     title: "ISDL-MAP",
//     description: "研究室内部屋予約状況管理システム",
//     image:"https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0247/9784839960247.jpg?_ex=200x200"
//   },
  
// ];
export default {
  data: function () {
    return {
    //   blogs: blogs,
      blogs:[],
    };
  },
//   methods: {
//     Blog:function(blog){
//       this.$router.push({
//               name: 'blogdetail',
//               params: {id:blog.id}
//           })
//     },
//   },
  async mounted() {
    // MicroCMSから記事情報を取得
    const response = await axios.get(
      process.env.VUE_APP_MICROCMS_ENDPOINT+"blogs",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY}
      }
    );
    this.blogs = response.data.contents;
  }
};
</script>
<style scoped>
.btn,
a.btn,
button.btn {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  position: relative;
  margin-left:20px;
  display: inline-block;
  padding: 1rem 3rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
a.btn--red {
  color: #fff;
  background-color: #eb6100;
  border-bottom: 5px solid #b84c00;
}
a.btn--red:hover {
  margin-top: -17px;
  color: #fff;
  background: #f56500;
  border-bottom: 2px solid #b84c00;
}
a.btn--red.btn--cubic {
  border-bottom: 5px solid #9f000c;
}

a.btn--red.btn--cubic:hover {
  margin-top: -17px;
  border-bottom: 2px solid #9f000c;
}

a.btn--radius {
  border-radius: 100vh;
}

.fa-position-right {
  position: absolute;
  top: calc(50% - .5em);
  right: 1rem;
}
.blog {
  text-align: center;
}

.blogdetail {
  /* position: absolute; */
  height: 380px;
  width: 400px;
  background-color: rgb(254, 252, 252);
  margin-top: 120px; 
  margin-left: 2%; 
  display: inline-block;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
}
.blogdetail .blogimage{
  margin: 1% 1% 1% 1%;
  height: 60%;
  width: 98%;

}
.blogdetail .github{
    margin-right: 1rem;
    margin-top:-30px;
    height: 30px;
    width: 30px;
}
.blogdetail h1{
    font-family: Helvetica, Arial, sans-serif;
    font-size:20px;
    margin-left:1rem;

}
.blogdetail p{
    margin-left:2rem;
    margin-top:-0.5rem;
    font-family: Helvetica, Arial, sans-serif;
    font-size:16px;
    color:#807d7d;
}
.sec-title {
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 4.5rem;
  filter: drop-shadow(1px 1px 10px #c0c0c0);
  position: absolute;
  top: 35%;
}
#myprofile .myprofile-img {
  /* background-image: url(../assets/images/ISDL.jpg); */
  position: relative;
  background-color: rgb(156, 22, 22);
  height: 100%;
   width: 100%;
}
</style>
