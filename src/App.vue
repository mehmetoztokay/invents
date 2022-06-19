<script setup>
  import AppHeader from './components/shared/appHeader.vue'
</script>
<template>
  <AppHeader />
  <router-view></router-view>
</template>
<style lang="scss">
  // Font Nunito
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('Nunito'), url('./assets/fonts/nunito/nunito-light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Nunito'), url('./assets/fonts/nunito/nunito-regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Nunito'), url('./assets/fonts/nunito/nunito-semibold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Nunito'), url('./assets/fonts/nunito/nunito-bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Nunito'), url('./assets/fonts/nunito/nunito-extrabold.ttf') format('truetype');
  }
</style>
