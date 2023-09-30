<template>
  <div>
    <section id="Skill">
      <div class="LA-img fixed-bg">
        <h2 class="sec-title">Skill</h2>
      </div>
    </section>
    <section class="ui-section-feature">
      <div class="ui-layout-container">
        <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
          <!-- IMAGE -->
          <img
            src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
            alt="#"
            class="ui-image-half-left"
          />
          <!-- FEATURE -->
          <div>
            <h2>Skill</h2>
            <p class="ui-text-intro">
              言語：Python,Go,Java,JavaScript,C++<br />
              フレームワーク：Vue,React,Flask,Gin<br />
              コンテナ：Docker<br />
              研究室内開発プロジェクト：部屋予約状況把握システム，書籍管理システム，感情評価システム<br />
              その他：Git，linux，AWS，C1FSS，Open API Generator
            </p>
            <!-- <ul
              class="ui-component-list ui-component-list-feature ui-layout-grid"
            >
              <li class="ui-component-list--item ui-component-list--item-check">
                Unlimited domain names.
              </li>
              <li class="ui-component-list--item ui-component-list--item-check">
                150&plus; components.
              </li>
              <li class="ui-component-list--item ui-component-list--item-check">
                Lifetime updates.
              </li>
              <li class="ui-component-list--item ui-component-list--item-check">
                24/7 technical support.
              </li>
            </ul> -->
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
  
  position: relative;
}
#Skill .LA-img {
  background-image: url(../assets/images/ISDL.jpg);
  position: relative;
  top: 80px;
}
#conference .conference-img {
  /* background-image: url(../img/kiritori2.png); */
  position: relative;
  top: 2000px;
}

@media screen and (max-width: 460px){
  .sec-title {
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 3rem;
  filter: drop-shadow(1px 1px 10px #c0c0c0);
  position: absolute;
  top: 35%;
}
}
</style>
