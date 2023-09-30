<template>
  <div class="body header">
    <!-- <h1 class="text">ISDL</h1> -->
    <img src="../assets/images/myicon.jpg">
    <div class="balloon">
      <p>{{pagename}}</p>
</div>
    <nav>
      <ul>
        <li v-on:click="Profile"><router-link to="/">Profile</router-link></li>
        <li v-on:click="Works"><router-link to="/works">Works</router-link></li>
        <li v-on:click="Blog"><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      pagename:"ようこそ"
    }
  },
  methods: {
    Profile:function(){
      this.pagename="プロフィールページです"
    },
    Works:function(){
      this.pagename="制作物を公開してます"
    },
    Blog:function(){
      this.pagename="ブログページです"
    },
  },
}
</script>

<style scoped>
/* 吹き出し本体 */
.balloon{
  float: left;
  position: relative;
  padding: 20px;
  margin-left:60px;
  background-color: #ade0ff;
  border-radius: 300px;
  width: 320px;
  height: 60px;
}
.balloon p{
  margin-top:-25px;
  font-size:25px;
}
/* 大きい丸 */
.balloon::before{
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
  background-color: #ade0ff;
  left: -35px;
  bottom: 15px;
  width: 30px;
  height: 30px;
}
/* 小さい丸 */
.balloon::after{
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
  background-color: #ade0ff;
  left: -55px;
  bottom: 10px;
  width: 15px;
  height: 15px;
}
.body {
  font-family: "Helvetica Neue", "Arial", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
  font-size: 1.5rem;
  line-height: 3;
}
a {
  text-decoration: none;
}
.header img {
  float: left;
  max-width: 5%;
  text-align: left;
}
li {
  list-style: none;
}
.header {
  /* float: left; */
  background: white;

  background-position: center top;
  background-repeat: no-repeat;
  height: 100%;
  padding: 20px 40px;
  position: relative;
}
.header h1 {
  width: 100%;
  color: rgb(27, 148, 235);
  filter: drop-shadow(1px 1px 10px #c0c0c0);
  position: absolute;
  top: 50%;
  text-align: left;
}
nav ul {
  display: flex;
  
  justify-content: flex-end;
}
nav li {
  margin-left: 30px;
}
nav li a {
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  filter: drop-shadow(1px 1px 2px #121212);
}
nav li a:hover {
  color: #e03131;
}

@media screen and (max-width: 650px){
.balloon{
  display:none
}
.header img {
  float: left;
  max-width: 13%;
  text-align: left;
}
}
@media screen and (max-width: 760px){
  .balloon{
  float: left;
  position: relative;
  padding: 20px;
  margin-left:60px;
  background-color: #ade0ff;
  border-radius: 300px;
  width: 220px;
  height: 60px;
}
.balloon p{
  margin-top:-12px;
  font-size:15px;
}
/* 大きい丸 */
.balloon::before{
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
  background-color: #ade0ff;
  left: -35px;
  bottom: 15px;
  width: 30px;
  height: 30px;
}
/* 小さい丸 */
.balloon::after{
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
  background-color: #ade0ff;
  left: -55px;
  bottom: 10px;
  width: 15px;
  height: 15px;
}
}
</style>
