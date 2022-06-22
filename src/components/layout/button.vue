<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<style lang="scss">
  @import '@/assets/scss/_var.scss';
  .button {
    display: inline-block;
    padding: rem(10) rem(25);
    border: 0;
    box-shadow: none;
    cursor: pointer;
    border-radius: 25px;
    background-color: $color-primary;
    color: $color-white;
    transition: $transition;
    &:focus {
      outline: 0;
    }
    &:hover {
      background-color: $color-primary-dark;
    }

    @media screen and (max-width: $screen-md) {
      padding: rem(7) rem(13);
      font-size: rem(12);
    }
  }
</style>
