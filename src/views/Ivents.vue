<template>
  <div class="main">
    <div class="banner absolute-header" style="background-image: url('/src/assets/img/ivents/banner-ivents.jpg')">
      <div class="container">
        <div class="slogan">
          <p class="line-height-1 text-center">her anın <span class="color-primary">iventsle</span></p>
        </div>
        <div class="filter-container">
          <FilterMain />
        </div>
      </div>
    </div>
    <div class="ivents-list">
      <div class="container">
        <p class="slogan">
          aradığın <br />
          <span class="color-primary">ivents</span> tam burada!
        </p>
        <div class="ivents">
          <div class="ivent-item">
            <div class="ivent-item-con">
              <IventCard />
            </div>
          </div>
          <div class="ivent-item">
            <div class="ivent-item-con">
              <IventCard />
            </div>
          </div>
          <div class="ivent-item">
            <div class="ivent-item-con">
              <IventCard />
            </div>
          </div>
          <div class="ivent-item">
            <div class="ivent-item-con">
              <IventCard />
            </div>
          </div>
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

  import IventCard from '../components/IventCard.vue'
  import appFooter from '../components/shared/appFooter.vue'

  const iventImage = 'main.jpg'

  provide('iventImage', iventImage)
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .ivents-list {
    background-color: $color-black;
    padding: rem(80) 0 rem(150) 0;

    .slogan {
      color: $color-white;
      font-size: rem(50);
      font-weight: $weight-700;
      line-height: 1.1;
    }

    @media screen and (max-width: $screen-sm) {
      padding: rem(50) 0 rem(100) 0;

      .slogan {
        font-size: rem(35);
      }
    }

    .ivents {
      margin-top: rem(50);
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .ivent-item {
        width: 33.333%;
        padding: rem(15) rem(8);
        .ivent-item-con {
          position: relative;
        }
      }

      @media screen and (max-width: $screen-lg) {
        .ivent-item {
          width: 50%;
        }
      }

      @media screen and (max-width: $screen-sm) {
        margin-top: rem(30);
        .ivent-item {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          padding: rem(10) rem(0);
        }
      }
    }
  }
</style>
