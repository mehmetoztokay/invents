<template>
  <div class="header">
    <div class="container">
      <router-link class="logo-container" to="/">
        <Logo />
      </router-link>
      <div class="nav-container">
        <ul class="nav">
          <li class="nav-link">
            <router-link to="/">Taze</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/">Yakında</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/">Enler</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/">Festİstanbul</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
  import Logo from '../layout/logo.vue'
</script>
<style lang="scss">
  @import '@/assets/scss/_var.scss';

  .header {
    position: absolute;
    width: 100%;
    padding: rem(10) 0;

    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo-container {
      }

      .nav-container {
        .nav {
          display: flex;
          list-style: none;
          gap: rem(70);
          font-weight: $weight-600;
          .nav-link {
            a {
              font-size: rem(18);
              color: $color-white;
              transition: $transition;

              &:hover {
                color: $color-primary;
              }
            }
          }
        }
      }
    }
  }
</style>
