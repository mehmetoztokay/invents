<template>
  <div class="header" :class="{ 'is-active': menuBtn }">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="logo-container" to="/">
          <Logo />
        </router-link>
        <div
          class="menu-btn"
          @click="
            () => {
              menuBtn = !menuBtn
            }
          "
          :class="{ 'is-active': menuBtn }"
        >
          <div class="burger"></div>
        </div>
      </div>
      <div class="nav-container" :class="{ 'is-active': menuBtn }">
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
  import { ref } from '@vue/reactivity'
  import Logo from '../layout/logo.vue'

  const menuBtn = ref(false)
</script>
<style lang="scss">
  @import '@/assets/scss/_var.scss';

  .header {
    position: absolute;
    width: 100%;
    padding: rem(20) 0;
    z-index: 2;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: $screen-md) {
        flex-direction: column;
      }

      .navbar-brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;

        .logo-container {
          svg {
            width: rem(190);
            transition: $transition;
            @media screen and (max-width: $screen-md) {
              width: rem(150);
            }

            @media screen and (max-width: $screen-sm) {
              width: rem(120);
            }
          }
        }

        .menu-btn {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 24px;
          cursor: pointer;

          .burger {
            width: 100%;
            height: 2px;
            background-color: $color-primary;
            border-radius: 5px;
            transition: 0.3s all ease-in-out;

            &::before,
            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 2px;
              background-color: $color-primary;
              transition: 0.7s all ease-in-out;
              border-radius: 5px;
            }

            &::after {
              transform: translateY(-11px);
            }

            &::before {
              transform: translateY(11px);
            }
          }

          &.is-active {
            .burger {
              transform: translateX(-50px);
              background-color: transparent;

              &::before {
                transform: rotate(45deg) translate(35px, -35px);
              }

              &::after {
                transform: rotate(-45deg) translate(35px, 35px);
              }
            }
          }

          @media screen and (min-width: 769px) {
            display: none;
          }
        }
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

        @media screen and (max-width: $screen-md) {
          display: none;
          background-color: $color-black-off;
          width: calc(100% - rem(40));
          position: absolute;
          top: rem(70);

          &.is-active {
            display: flex;
            flex-direction: column;
            padding: rem(40);
            border-radius: 10px;
            animation: opacityAnim 0.3s ease-in-out;
            overflow: hidden;

            .nav {
              flex-direction: column;
              gap: 0;
              animation: opacityAnim 0.7s ease-in-out;

              .nav-link {
                padding: rem(15) 0;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: $screen-md) {
      &.is-active {
        height: 100%;
        left: 0%;
        right: 0;
        bottom: 0;
        top: 0;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          background-color: rgba($color-black-off, 0.3);
          z-index: -1;
        }
      }
    }
  }

  @keyframes opacityAnim {
    0% {
      opacity: 0%;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>
