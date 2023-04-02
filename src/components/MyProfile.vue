<template>
  <div>
    <section id="myprofile">
      <div class="myprofile-img fixed-bg">
        <h2 class="sec-title">Basic Infomation</h2>
      </div>
    </section>

  <section class="ui-section-feature">
    <div class="ui-layout-container">
      <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
        <!-- IMAGE -->
        <img
          src="../assets/images/myimage.jpg"
          alt="#"
          class="ui-image-half-left"
        />
        <!-- FEATURE -->
        <div>
          <h2>Profile</h2>
          <p class="ui-text-intro">
            所属：同志社大学理工学部<br />
            研究テーマ：脳波を用いた感情推定<br />
            趣味：アニメ鑑賞，柔道，Webアプリ開発<br />
            資格：基本情報技術者試験，AWS CCP<br />
          </p>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.ui-image-half-left {
    padding-right: 1.5rem;
  }
.body {
  font-family: "Helvetica Neue", "Arial", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
li {
  list-style: none;
}
.td1 {
  background-color: red;
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
.canvas1 {
  text-align: center;
  position: absolute;
  top: 500px;
}
.fixed-bg {
  height: 300px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  /* background: rgb(170, 34, 34); */
}
.header {
  background: white;

  background-position: center top;
  background-repeat: no-repeat;
  padding: 20px 40px;
  position: relative;
}
.header h1 {
  width: 100%;
  color: rgb(27, 148, 235);
  filter: drop-shadow(1px 1px 10px #c0c0c0);
  position: absolute;
  top: 10%;
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
#myprofile .myprofile-img {
  background-image: url(../assets/images/ISDL.jpg);
  position: relative;
}
#LA .LA-img {
  /* background-image: url(../img/kiritori2.png); */
  position: relative;
  top: 1000px;
}
#conference .conference-img {
  /* background-image: url(../img/kiritori2.png); */
  position: relative;
  top: 2000px;
}
</style>
