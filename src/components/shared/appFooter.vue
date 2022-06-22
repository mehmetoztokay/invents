<template>
  <div class="footer">
    <router-link class="logo-container" to="/">
      <Logo />
    </router-link>
    <p class="text">Copyright 2022 | ivents</p>
  </div>
</template>
<script setup>
  import { ref } from '@vue/reactivity'
  import Logo from '../layout/logo.vue'

  const menuBtn = ref(false)
</script>
<style lang="scss">
  @import '@/assets/scss/_var.scss';

  .footer {
    background-color: $color-black;
    padding: rem(80) rem(15);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $color-white-off;
    .logo-container {
      margin: 0 auto;
      svg {
        width: rem(150);
      }
    }

    .text {
      font-size: rem(14);
      margin-top: rem(5);
    }
  }
</style>
