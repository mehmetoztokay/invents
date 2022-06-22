<template>
  <div class="main">
    <div class="banner is-detail absolute-header" style="background-image: url('/src/assets/img/ivents/ivents-list/on-ikinci-gece/main.jpg')">
      <div class="container">
        <div class="detail-content">
          <p class="title">
            On ikinci Gece: <br />
            Shakspeare Tiyatrosu
          </p>
          <div class="info">
            <div class="info-item">
              <div class="icon">
                <Type />
              </div>
              <p class="text">Tiyatro</p>
            </div>

            <div class="info-item">
              <div class="icon">
                <Calendar />
              </div>
              <p class="text">27 / 06 / 2022</p>
            </div>

            <div class="info-item">
              <div class="icon">
                <Clock />
              </div>
              <p class="text">16:00 - 18:00</p>
            </div>

            <div class="info-item">
              <div class="icon">
                <Location />
              </div>
              <p class="text">İstanbul</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <appFooter />
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  import Button from '../components/layout/button.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  import appFooter from '../components/shared/appFooter.vue'
  import Type from '../components/icons/Type.vue'
  import Calendar from '../components/icons/Calendar.vue'
  import Clock from '../components/icons/Clock.vue'
  import Location from '../components/icons/Location.vue'

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

  .banner.is-detail {
    .container {
      justify-content: center;
      margin-top: rem(-50);
      align-items: flex-start;
      .detail-content {
        .title {
          font-size: rem(60);
          color: $color-white;
          font-weight: $weight-700;
          line-height: 1.2;
        }

        .info {
          display: flex;
          flex-wrap: wrap;
          // max-width: rem(400);
          margin-top: rem(15);
          .info-item {
            display: flex;
            align-items: center;
            margin-right: rem(25);
            padding: rem(5) 0;
            .icon {
              margin-right: rem(10);
            }

            .text {
              color: $color-white;
              margin-top: rem(-2);
            }
          }
        }
      }
    }

    @media screen and (max-width: $screen-lg) {
      .container {
        margin-top: rem(-30);
        .detail-content {
          .title {
            font-size: rem(40);
          }
          .info {
            margin-top: rem(10);
            .info-item {
              margin-right: rem(20);
              .icon {
                margin-right: rem(7);
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: $screen-md) {
      .container {
        margin-top: rem(0);
        .detail-content {
          .title {
            font-size: rem(35);
          }
          .info {
            margin-top: rem(10);
            flex-wrap: wrap;
            .info-item {
              margin-right: rem(20);
              .icon {
                margin-right: rem(7);
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: $screen-sm) {
      .container {
        .detail-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            font-size: rem(30);
            text-align: center;
          }
          .info {
            margin-top: rem(7);
            justify-content: center;
            .info-item {
              margin-right: rem(10);
              .icon {
                margin-right: rem(7);
              }
            }
          }
        }
      }
    }
  }
</style>
