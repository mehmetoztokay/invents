<template>
  <div class="card">
    <div class="card-img">
      <img :src="iventImage" alt="" />
    </div>
    <div class="content">
      <div class="title">Michelangelo’yu Bugün Anlamak</div>
      <div class="info">
        <div class="info-con">
          <div class="icon">
            <Calendar />
          </div>
          <div class="text">27 / 06 / 2022</div>
        </div>
        <div class="info-con">
          <div class="icon">
            <Location />
          </div>
          <div class="text">İstanbul Atatürk Kültür M.</div>
        </div>
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et arcu eleifend amet, vitae ornare tempor. Quisque donec eget lectus eu vitae, viverra sodales vel.
      </p>
      <div class="btn-con">
        <router-link class="btn" to="/">Daha Fazla</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { inject } from 'vue'
  import Calendar from './icons/Calendar.vue'
  import Location from './icons/Location.vue'

  const iventImage = inject('iventImage')

  console.log(iventImage)
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .card {
    border-radius: rem(10);
    overflow: hidden;
    color: $color-white;
    font-weight: $weight-200;
    width: 100%;
    max-width: 100%;
    height: rem(570);

    @media screen and (max-width: $screen-md) {
      height: rem(600);
    }

    @media screen and (max-width: $screen-md) {
      height: rem(550);
    }

    .card-img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-size: cover;
      background-color: $color-black;
      border-radius: rem(8);
      overflow: hidden;
      z-index: 2;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &::before {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
      }

      &::after {
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
        z-index: 1;
      }
    }

    .content {
      position: relative;
      z-index: 3;
      padding: rem(30) rem(40);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      .title {
        background-color: red($color: #000000);
        font-size: rem(23);
        font-weight: $weight-500;
        line-height: 1.3;
        user-select: none;
        margin-bottom: rem(10);
      }

      .info {
        margin-bottom: rem(15);
        display: flex;

        .info-con {
          display: flex;
          align-items: center;
          &:not(:last-child) {
            margin-right: rem(30);
          }

          .text {
            margin-top: rem(-4);
            margin-left: rem(7);
            font-size: rem(15);
          }
        }
      }

      .description {
        color: $color-white-off;
        font-weight: $weight-200;
        font-size: rem(14);
      }

      .btn-con {
        text-align: right;
        margin-top: rem(10);
        .btn {
          color: $color-primary;
          display: inline-block;
          position: relative;
          font-weight: $weight-400;
          font-size: rem(14);

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: $color-primary;
            bottom: 0;
            left: 0;
            transform-origin: left;
            transform: scaleX(0);
            transition: $transition;
          }

          &:hover {
            &::after {
              transform-origin: right;
              transform: scaleX(1);
            }
          }
        }
      }

      @media screen and (max-width: $screen-md) {
        padding: rem(40) rem(20);

        .title {
          font-size: rem(20);
        }

        .info {
          flex-direction: column;
          margin-bottom: rem(5);
          .info-con {
          }
        }
      }
    }
  }
</style>
