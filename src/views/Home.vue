<template>
  <div class="main">
    <div class="banner absolute-header">selam</div>
    <div style="height: 7000px"></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .banner {
    background-image: url('@/assets/img/home/banner-home.jpg');
    background-attachment: fixed;
    min-height: rem(650);
    background-size: cover;
    background-position: center bottom;
    position: relative;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
