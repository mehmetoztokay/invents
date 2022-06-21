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
    <div class="filter-item">
      <div class="filter-item-title">
        <p class="line-height-1 color-primary">Lokasyon</p>
        <div class="filter-select">
          <SelectItem @selectedOption="selectedOption" :itemList="itemList" />
        </div>
      </div>
    </div>
    <div class="filter-item">
      <div class="filter-item-title">
        <p class="line-height-1 color-primary">Tarih</p>
        <div class="filter-select date">
          <v-date-picker v-model="dateRange" is-range color="red">
            <template v-slot="{ inputValue, inputEvents }">
              <div class="input-date start">
                <input
                  @focusin="
                    () => {
                      focusedInput = true
                    }
                  "
                  @focusout="
                    () => {
                      focusedInput = false
                    }
                  "
                  type="text"
                  id="start"
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                />
              </div>
              <div class="input-date end">
                <input v-if="!focusedInput" type="text" id="end" :value="inputValue.end" readonly />
              </div>
            </template>
          </v-date-picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { range } from 'lodash'
  import { reactive, ref } from 'vue'
  import SelectItem from './SelectItem.vue'

  // For Value of End Date
  const date = ref(new Date())
  const dateRange = reactive({
    start: new Date(),
    end: date.value
  })

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

  const focusedInput = ref(false)
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_var.scss';
  .filter {
    min-height: rem(100);
    margin: 0 auto;
    background-color: $color-black;
    max-width: calc(100% - rem(140));
    border-radius: rem(50);
    padding: rem(22) rem(80) rem(10) rem(80);
    display: flex;
    gap: rem(40);

    .filter-item {
      max-width: 210px;
      .filter-item-title {
        font-size: rem(18);
        p {
          padding-left: 7px;
        }
      }

      .filter-select {
        margin-top: rem(5);

        &.date {
          display: flex;
          flex-direction: column;
          .input-date {
            input {
              background-color: transparent;
              box-shadow: none;
              border: 0;
              color: $color-white;
              padding: 7px 10px;
              border-radius: 0;
              color: $color-white;
              border-radius: 7px;
              cursor: pointer;
              font-size: rem(16);

              &:focus {
                outline: none;
              }
            }

            &.start {
              input {
                &:focus {
                  background-color: $color-black-off;
                }
              }
            }

            &.end {
              margin-top: rem(-15);
              min-height: rem(30);
              input {
                font-size: rem(13);
                padding-top: 0;
                padding-bottom: 0;
                color: $color-white-off;
                cursor: default;
              }
            }
          }
        }
      }
    }
  }
</style>
