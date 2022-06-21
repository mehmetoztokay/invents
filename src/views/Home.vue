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
    <div style="height: 7000px"></div>
  </div>
</template>
<script setup>
  import FilterMain from '../components/FilterMain.vue'
  import { provide } from 'vue'

  const items = [
    {
      title: 'Mehmet',
      value: '1'
    },
    {
      title: 'Ahmet',
      value: '2'
    },
    {
      title: 'Selam',
      value: '3'
    },
    {
      title: 'Reis',
      value: '4'
    }
  ]

  provide('items', items)
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .banner {
    background-image: url('@/assets/img/home/banner-home.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center bottom;
    position: relative;
    z-index: 0;

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

        @media screen and (max-width: $screen-md) {
          margin-top: rem(80);
        }

        @media screen and (max-width: $screen-xxl) {
          margin-top: rem(50);
        }
      }
    }
  }
</style>
