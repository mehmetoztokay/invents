<template>
  <div class="filter color-white">
    <div class="filter-item">
      <div class="filter-item-title">
        <p class="line-height-1 color-primary">Tür</p>
        <div class="filter-select">
          <SelectItem @selectedOption="selectedOption" :itemList="typeList" />
        </div>
      </div>
    </div>
    <div class="filter-item">
      <div class="filter-item-title">
        <p class="line-height-1 color-primary">Lokasyon</p>
        <div class="filter-select">
          <SelectItem @selectedOption="selectedOption" :itemList="locationList" />
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
    <div class="btn-filter">
      <Button>Ara</Button>
    </div>
  </div>
</template>
<script setup>
  import { range } from 'lodash'
  import { reactive, ref } from 'vue'
  import SelectItem from './SelectItem.vue'
  import Button from './layout/button.vue'

  // For Value of End Date
  const date = ref(new Date())
  const dateRange = reactive({
    start: new Date(),
    end: date.value
  })

  const typeList = [
    {
      name: 'Tiyatro'
    },
    {
      name: 'Konser'
    },
    {
      name: 'Mezuniyet'
    },
    {
      name: 'Pilavlı'
    }
  ]

  const locationList = [
    {
      name: 'Malatya'
    },
    {
      name: 'İstanbul'
    },
    {
      name: 'Kırklareli'
    },
    {
      name: 'Ankara'
    },
    {
      name: 'Muş'
    }
  ]

  const eventList = [
    {
      name: "Michelango'yu Anlamak"
    },
    {
      name: 'Pena Büyük Gün Konseri'
    },
    {
      name: "İstanbul'un Fethi"
    },
    {
      name: 'On İkinci Gece: Shakespeare'
    },
    {
      name: 'Neden: Doğan Cüceloğlu'
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
    background-color: rgba($color-black, 0.7);
    max-width: calc(100% - rem(180));
    border-radius: rem(80);
    padding: rem(10) rem(80) rem(3) rem(80);
    display: flex;
    flex-wrap: wrap;

    .filter-item {
      max-width: rem(260);
      padding: rem(15) rem(25);

      @media screen and (max-width: $screen-xs) {
        padding: rem(15) rem(10);
      }
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

                @media screen and (max-width: $screen-xs) {
                  width: 100%;
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

              @media screen and (max-width: $screen-xs) {
                margin-top: 0;
              }
            }
          }
        }
      }
    }

    .btn-filter {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: end;
    }

    @media screen and (max-width: $screen-xl) {
      padding: rem(10) rem(30) rem(3) rem(30);
      max-width: calc(100% - rem(120));

      .filter-item {
        max-width: rem(220);
      }
    }

    @media screen and (max-width: $screen-lg) {
      max-width: 100%;
      .filter-item {
        max-width: rem(190);
      }
    }

    @media screen and (max-width: $screen-md) {
      padding: rem(20) rem(30) rem(10) rem(30);
      max-width: 100%;
      border-radius: rem(20);
      .filter-item {
        max-width: 50%;
        width: 50%;
      }

      .btn-filter {
        justify-content: flex-start;
        padding-left: rem(37);
      }
    }

    @media screen and (max-width: $screen-sm) {
      .filter-item {
        max-width: rem(180);
      }
    }

    @media screen and (max-width: $screen-xs) {
      padding: rem(28) rem(14);
      .filter-item {
        width: 100%;
        max-width: 100%;
      }
    }
  }
</style>
