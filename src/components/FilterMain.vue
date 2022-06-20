<template>
  <div class="filter color-white">
    <div class="filter-item">
      <div class="filter-item-title">
        <p class="line-height-1 color-primary">Tür</p>
        <div class="filter-select">
          <SelectItem @selectedOption="selectedOption" :itemList="itemList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SelectItem from './SelectItem.vue'
  const itemList = [
    {
      name: 'Malatya',
      value: 'Adana'
    },
    {
      name: 'Istanbul',
      value: 'Karpuz'
    }
  ]

  const selectedOption = (item) => {
    console.log(item)
  }

  const props = defineProps({
    selectedValue: Object,
    filterItems: String
  })
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .filter {
    min-height: rem(100);
    margin: 0 auto;
    background-color: $color-black;
    max-width: calc(100% - rem(140));
    border-radius: rem(50);
    padding: rem(22) rem(80);

    .filter-item {
      .filter-item-title {
        font-size: rem(18);
        p {
          padding-left: 7px;
        }
      }

      .filter-select {
        margin-top: rem(5);
      }
    }
  }
</style>
