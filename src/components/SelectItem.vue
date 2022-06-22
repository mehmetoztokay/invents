<template>
  <div @click="handleClickSelect" class="select">
    <!-- <div class="select-header">{{ selectedValue.name }}</div> -->
    <input v-model="selectedValue.name" class="select-header line-height-1" @click="toggleSelect" type="text" @keyup="filterItems" />
    <Transition enterActiveClass="select-enter" leaveActiveClass="select-leave">
      <div v-if="isActive" class="select-body">
        <div v-if="filteredItemList.length">
          <div @click="selectedOption(item)" v-for="item in filteredItemList" :key="item" class="option line-height-1">{{ item.name }}</div>
        </div>
        <p v-else class="error-result color-black line-height-1">Bulunamadı...</p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { onBeforeMount, onMounted, ref, provide, inject, computed, watch } from 'vue'
  import slugify from './helpers/Slugify'

  // Select Dropdown Function
  const isActive = ref(false)

  const toggleSelect = () => {
    isActive.value = !isActive.value
  }

  const handleClickSelect = (e) => {
    e.stopPropagation()
  }

  const clickOutside = () => {
    isActive.value = false
  }

  onMounted(() => {
    window.addEventListener('click', clickOutside)
  })

  onBeforeMount(() => {
    window.removeEventListener('click', clickOutside)
  })

  // Click Select Option
  let selectedValue = ref({
    name: props.itemList[0].name,
    value: '0'
  })

  const props = defineProps({
    itemList: Array
  })

  const selectedOption = (item) => {
    emit('selectedOption', item)
    if (isActive.value) isActive.value = false
    Object.keys(selectedValue.value).forEach((key) => {
      selectedValue.value[key] = item[key]
    })
  }

  const emit = defineEmits(['selectedOption'])

  let filteredItemList = ref([...props.itemList])

  // Filter Items On Input
  const filterItems = (e) => {
    if (!isActive.value) isActive.value = true
    const value = slugify(e.target.value)
    filteredItemList.value = props.itemList.filter((item) => slugify(item.name).includes(value))
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .select {
    border-radius: 10px;
    display: inline-block;
    position: relative;
    max-width: 100%;
    .select-header {
      user-select: none;
      padding: 7px 10px;
      border: none;
      background-color: transparent;
      color: $color-white;
      border-radius: 7px;
      max-width: 100%;
      display: block;
      cursor: pointer;
      &:focus {
        outline: none;
        background-color: $color-black-off;
      }
    }
    .select-body {
      position: absolute;
      background-color: $color-white;
      padding: 2px;
      max-width: 100%;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      top: calc(100% + 5px);
      border-radius: 7px;
      width: 100%;
      z-index: 1;
      max-height: rem(200);
      overflow-y: auto;
      scrollbar-width: 0;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media screen and (max-width: $screen-xs) {
      width: 100%;
      .select-header {
        background-color: $color-black-off;
        width: 100%;
      }
    }
  }
  .select-enter {
    animation: opacityAnim 0.25s;
    transform-origin: 50% 0%;
  }
  .select-leave {
    animation: opacityAnim 0.25s reverse;
    transform-origin: 50% 0%;
  }
  @keyframes opacityAnim {
    0% {
      opacity: 0%;
      transform: translateX(-50%) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  .option,
  .error-result {
    color: $color-black-off;
    padding: 10px 10px;
    font-size: 14px;
    margin: 2px 0px;
    white-space: nowrap;
    border-radius: 7px;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background-color: rgba($color-black-off, 0.1);
    }
  }
</style>
