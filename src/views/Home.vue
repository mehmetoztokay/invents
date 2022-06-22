<template>
  <div class="main">
    <div class="banner absolute-header">
      <div class="container">
        <div class="slogan">
          <p class="line-height-1 text-center">her anın <span class="color-primary">iventsle</span></p>
        </div>
        <div class="filter-container">
          <FilterMain />
        </div>
      </div>
    </div>
    <div class="new-ivents">
      <div class="container">
        <div class="left-area">
          <p class="title line-height-1">yeni <span class="color-primary">ivents</span> keşfet</p>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod euismod odio nec neque placerat. Adipiscing sagittis neque, blandit lobortis sit augue. In morbi eget
            tellus cursus.
            <br />
            <br />
            Commodo justo est enim sed quam quam viverra. Sapien sit quis eget at volutpat molestie.
          </p>
          <div class="btn">
            <Button>Daha Fazla</Button>
          </div>
        </div>
        <div class="right-area">
          <swiper :slides-per-view="3" :space-between="15" @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="swiperOptions.breakpoints">
            <swiper-slide> <IventCard /> </swiper-slide>
            <swiper-slide> <IventCard /> </swiper-slide>
            <swiper-slide> <IventCard /> </swiper-slide>
            <swiper-slide> <IventCard /> </swiper-slide>
            <swiper-slide> <IventCard /> </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="video">
      <div class="top">
        <div class="wrapper">
          <iframe
            src="https://www.youtube.com/embed/_RgV1bxzOnU?vq=hd1080&autoplay=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&controls=0&disablekb=1&loop=1&muted=1&playlist=_RgV1bxzOnU"
            width="560"
            height="315"
            title="test"
            frameborder="0"
            loop
          ></iframe>
        </div>
      </div>
      <div class="content">
        <p class="text">her anın <span class="color-primary">iventsle</span></p>
        <div class="btn">
          <Button>Ivents Keşfet</Button>
        </div>
      </div>
    </div>
    <appFooter />
  </div>
</template>
<script setup>
  import FilterMain from '../components/FilterMain.vue'
  import { provide, ref } from 'vue'
  import Button from '../components/layout/button.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  import IventCard from '../components/IventCard.vue'
  import appFooter from '../components/shared/appFooter.vue'

  const iventImage = 'https://images.pexels.com/photos/4607716/pexels-photo-4607716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  provide('iventImage', iventImage)

  const swiperOptions = {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .banner {
    background-image: url('@/assets/img/home/banner-home.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center bottom;
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
    }

    .container {
      min-height: rem(700);
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 1;
      padding-bottom: rem(80);

      @media screen and (max-width: $screen-lg) {
        min-height: rem(500);
      }

      .slogan {
        margin-top: 20vh;
        p {
          font-size: rem(80);
          font-weight: bold;
          color: #fff;
          margin-bottom: rem(1);
        }

        @media screen and (max-width: $screen-lg) {
          margin-top: 15vh;
          p {
            font-size: rem(60);
          }
        }

        @media screen and (max-width: $screen-md) {
          margin-top: 10vh;
          p {
            font-size: rem(50);
          }
        }

        @media screen and (max-width: $screen-xs) {
          margin-top: 7vh;
          p {
            font-size: rem(40);
          }
        }
      }

      .filter-container {
        width: 100%;
        margin-top: rem(120);

        @media screen and (max-width: $screen-lg) {
          margin-top: rem(100);
        }

        @media screen and (max-width: $screen-md) {
          margin-top: rem(80);
        }

        @media screen and (max-width: $screen-xs) {
          margin-top: rem(50);
        }
      }
    }
  }

  .new-ivents {
    background-color: $color-black;
    padding: rem(200) 0;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    min-height: rem(700);

    @media screen and (max-width: $screen-sm) {
      padding: rem(120) 0;
      min-height: rem(600);
    }

    .container {
      display: flex;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      .left-area {
        width: 40%;
        padding-right: 5%;
        .title {
          color: $color-white;
          font-size: rem(65);
          font-weight: $weight-700;
        }
        .description {
          color: $color-white-off;
          font-weight: $weight-200;
          margin-top: rem(20);
        }
        .btn {
          margin-top: rem(20);
        }

        @media screen and (max-width: $screen-lg) {
          width: 50%;
        }

        @media screen and (max-width: $screen-md) {
          width: 45%;
          padding-left: 3%;
          .title {
            font-size: rem(45);
          }
          .description {
            font-size: rem(13);
          }
        }

        @media screen and (max-width: $screen-sm) {
          width: 100%;
          padding-left: 3%;
          margin-bottom: rem(50);
          .title {
            font-size: rem(45);
          }
          .description {
            font-size: rem(13);
          }
        }
      }

      .right-area {
        width: 100%;
        left: 40%;
        position: absolute;

        @media screen and (max-width: $screen-lg) {
          left: 50%;
        }

        @media screen and (max-width: $screen-md) {
          left: 45%;
          width: 50%;
        }

        @media screen and (max-width: $screen-sm) {
          width: 100%;
          position: static;
        }
      }
    }
  }

  .video {
    position: relative;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 95%);
      z-index: 1;
      pointer-events: none;
    }
    .top {
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      position: relative;
      object-fit: cover;

      .wrapper {
        position: relative;
        padding-bottom: 200%;
        transform: translateY(-35.95%);

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .content {
      position: absolute;
      bottom: 30%;
      z-index: 2;
      color: $color-white;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .text {
        text-align: center;
        font-weight: $weight-700;
        font-size: rem(80);
        line-height: 1.3;
        pointer-events: none;
      }

      .btn {
        margin: 0 auto;
        margin-top: rem(20);
      }

      @media screen and (max-width: $screen-lg) {
        bottom: 20%;

        .text {
          font-size: rem(60);
        }

        .btn {
          margin-top: rem(5);
        }
      }

      @media screen and (max-width: $screen-md) {
        .text {
          font-size: rem(50);
        }

        .btn {
          margin-top: rem(7);
        }
      }

      @media screen and (max-width: $screen-sm) {
        .text {
          font-size: rem(40);
        }

        .btn {
          margin-top: rem(3);
        }
      }

      @media screen and (max-width: $screen-xs) {
        bottom: 15%;

        .text {
          font-size: rem(25);
        }

        .btn {
          margin-top: rem(3);
        }
      }
    }
  }
</style>
