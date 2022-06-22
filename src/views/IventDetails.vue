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

    <div class="ivent-details">
      <div class="container">
        <div class="text-area">
          <p class="title">İçerik</p>
          <p class="text">
            Kısaca özetlemek gerekirse bu oyun bir "yanlışlıklar komedisi"dir. İlliria Krallığı'nda geçer.Shakespeare'in bu krallığı İtalya'nın Dalmaçya kıyısında hayal ettiği
            düşünülür. İnsanların kılık değiştirdiği, kadınların erkek, erkeklerin kadın kılığına girdiği, birbirlerine aşık olan insanların bu karmaşayı anlamaya çalıştığı ve
            elbette sonunda her şeyin tatlıya bağlandığı bir eserdir. Tarz olarak Bir Yaz Gecesi Rüyası'na benzer. Soytarılar, sarhoşlar, çıkarcılar, mevki düşkünleri, müzisyenler,
            deliler ve soyluların iç içe; burun buruna olduğu tabiri caizse oyun içinde oyundur.
            <br />
            <br />

            Kısaca özetlemek gerekirse bu oyun bir "yanlışlıklar komedisi"dir. İlliria Krallığı'nda geçer.Shakespeare'in bu krallığı İtalya'nın Dalmaçya kıyısında hayal ettiği
            düşünülür. İnsanların kılık değiştirdiği, kadınların erkek, erkeklerin kadın kılığına girdiği, birbirlerine aşık olan insanların bu karmaşayı anlamaya çalıştığı ve
            elbette sonunda her şeyin tatlıya bağlandığı bir eserdir. Tarz olarak Bir Yaz Gecesi Rüyası'na benzer. Soytarılar, sarhoşlar, çıkarcılar, mevki düşkünleri, müzisyenler,
            deliler ve soyluların iç içe; burun buruna olduğu tabiri caizse oyun içinde oyundur.
          </p>
        </div>

        <div class="pic-area">
          <div class="pic-item">
            <img src="/src/assets/img/ivents/ivents-list/on-ikinci-gece/main.jpg" alt="" />
          </div>
          <div class="pic-item">
            <img src="/src/assets/img/ivents/ivents-list/on-ikinci-gece/main.jpg" alt="" />
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

  .ivent-details {
    padding: rem(100) 0;

    @media screen and (max-width: $screen-md) {
      padding: rem(50) 0;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      .text-area {
        width: 50%;
        padding-right: rem(30);
        .title {
          font-size: rem(40);
          font-weight: $weight-700;
          color: $color-black;
        }
        .text {
          margin-top: rem(20);
          color: $color-black-off;
        }
      }

      .pic-area {
        width: 50%;
        position: relative;
        padding-top: rem(50);

        .pic-item {
          overflow: hidden;

          height: rem(500);
          width: 75%;
          margin-bottom: 20%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: rem(10);
          }

          &:nth-child(2) {
            width: 70%;
            position: absolute;
            top: 20%;
            left: 20%;
          }
        }
      }

      @media screen and (max-width: $screen-lg) {
        .text-area {
          width: 50%;
          padding-right: 4%;
          .title {
            font-size: rem(30);
          }
          .text {
            margin-top: rem(15);
          }
        }

        .pic-area {
          width: 50%;
          position: relative;

          .pic-item {
            overflow: hidden;
            height: rem(350);

            &:nth-child(2) {
              height: rem(300);
            }
          }
        }
      }

      @media screen and (max-width: $screen-md) {
        .text-area {
          width: 100%;
          padding-right: 0;
          .title {
            font-size: rem(35);
          }
          .text {
            margin-top: rem(10);
          }
        }

        .pic-area {
          width: 100%;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin-top: rem(30);

          .pic-item {
            overflow: hidden;
            border-radius: rem(10);
            height: rem(350);
            width: 50%;
            margin-bottom: rem(30);
            padding: rem(5);

            &:nth-child(2) {
              width: 50%;
              position: static;
              height: rem(350);
            }
          }
        }
      }

      @media screen and (max-width: $screen-md) {
        .text-area {
          order: 1;
          width: 100%;
          padding-right: 0;
          margin-top: rem(30);
          .title {
            font-size: rem(35);
          }
          .text {
            margin-top: rem(10);
          }
        }

        .pic-area {
          order: 0;
          width: 100%;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin-top: rem(0);
          padding-top: 0;

          .pic-item {
            overflow: hidden;
            border-radius: rem(10);
            height: rem(350);
            width: 100%;
            margin-bottom: rem(15);
            padding: rem(2);

            &:nth-child(2) {
              width: 100%;
              position: static;
              height: rem(350);
            }
          }
        }
      }
    }
  }
</style>
