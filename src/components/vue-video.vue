<template>

</template>
<style lang="scss">
.wrap {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  background: #000 center center;
  background-size: cover;
}

.wrap.started {
  background-image: none !important;
}

.is-bilibili .wrap {
  padding-top: 62.5%;
}

.is-bilibili .wrap::after {
  content: "";
  display: block;
  width: 12%;
  height: 15%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
}

video,
iframe,
.error-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}

iframe {
  height: 150%;
  margin-top: -10.66666666667%;
}

.error-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  color: #fff;
}

[data-dpr="1"] .error-info {
  font-size: 14px;
}

[data-dpr="2"] .error-info {
  font-size: 28px;
}

[data-dpr="3"] .error-info {
  font-size: 42px;
}

.btn-open-link {
  color: #03a9f4;
  text-decoration: none;
}

.btn-open-app {
  margin-top: 0.533333rem;
  padding: 0.266667rem 0.4rem;
  border-radius: 2.666667rem;
  background: #ffe411;
  color: #000;
}

.btn-open-link[touched],
.btn-open-link:hover,
.btn-open-app[touched],
.btn-open-app:hover {
  opacity: 0.9;
}

.cover {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: transparent center center;
  background-size: cover;
}

.cover::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.1);
}

.btn-play {
  display: block;
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 50%;
  overflow: hidden;
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.1), transparent);
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}

.btn-play img {
  display: block;
  width: 100%;
  height: 100%;
}

[touched] .btn-play {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}

.btn-play.loading {
  border: 0.106667rem solid #ffe411;
  border-top-color: transparent;
  border-bottom-color: transparent;
  -webkit-animation: rotating 0.6s linear infinite;
          animation: rotating 0.6s linear infinite;
}

.btn-play.loading img {
  display: none;
}

.duration {
  position: absolute;
  bottom: 0.133333rem;
  right: 0.133333rem;
  color: #eee;
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes rotating {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}
</style>
