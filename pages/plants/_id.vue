<template>
  <div class="main">
    <client-only>
      <div class="adaptive_container">
        <h2 class="plant-info__title">
          Общая информация о растении
        </h2>
        <div class="plant-info">
          <div class="image__container">
            <img
              class="plant-info__image"
              :alt="plant.name"
              :src="plant.image.url"
            >
          </div>
          <div class="text__container">
            <div class="plant-info__name">
              <span class="text__line">Название растения:</span>
              <span class="text__line"> {{ plant.name }}</span>
            </div>
            <div class="plant-info__type">
              <span class="text__line">Тип растения:</span>
              <span class="text__line"> {{ plant.type }}</span>
            </div>
            <div class="plant-info__available">
              <span class="text__line">Есть ли на складе:</span>
              <span v-if="plant.available" class="text__line_green">Есть</span>
              <span v-if="!plant.available" class="text__line_red">Нет</span>
            </div>
            <div class="plant-info__amount">
              <span v-if="plant.available">
                <span class="text__line">Количество растений:</span>
                <span class="text__line">{{ plant.amount }} шт.</span>
              </span>
            </div>
            <div class="plant-info__price">
              <span class="text__line">Цена растения:</span>
              <span class="text__line">{{ plant.price }} руб.</span>
            </div>
            <div
              v-if="plant.new"
              class="plant-info__new"
            >
              <span>Новое растение</span>
            </div>
          </div>
        </div>
        <h2 v-if="plant.seedbeds.length !== 0" class="plant-info__title">
          Грядки с растением
        </h2>
        <div
          v-for="(seedbeds, i) in plant.seedbeds"
          :key="i"
          class="seedbeds-info"
        >
          <div class="image__container">
            <img
              class="seedbeds-info__image"
              :alt="seedbeds.name"
              :src="seedbeds.image.url"
            >
          </div>
          <div class="text__container">
            <div class="seedbeds-info__name">
              <span class="text__line">Название грядки:</span>
              <span class="text__line">{{ seedbeds.name }}</span>
            </div>
            <div class="seedbeds-info__description">
              <span class="text__line">Описание грядки:</span>
              <span class="text__line">{{ seedbeds.description }}</span>
            </div>
            <div class="seedbeds-info__width">
              <span class="text__line">Ширина грядки:</span>
              <span class="text__line">{{ seedbeds.width }} м.</span>
            </div>
            <div class="seedbeds-info__height">
              <span class="text__line">Длина грядки:</span>
              <span class="text__line">{{ seedbeds.height }} м.</span>
            </div>
            <div class="seedbeds-info__type">
              <span class="text__line">Тип грядки:</span>
              <span class="text__line">{{ seedbeds.type }}</span>
            </div>
            <div class="seedbeds-info__number">
              <span class="text__line">Номер грядки:</span>
              <span class="text__line">{{ seedbeds.number }}</span>
            </div>
          </div>
        </div>
        <h2 v-if="plant.winters.length !== 0" class="winters-info__title">
          Время зимовки растений
        </h2>
        <div
          v-for="(winter, l) in plant.winters"
          :key="l"
          class="winters-info"
        >
          <div class="text__container">
            <div class="winters-info__date">
              <span class="text__line">Планируемая дата зимовки:</span>
              <span class="text__line">{{ $moment( winter.date ).format('llll') }}</span>
            </div>
            <div class="winters-info__description">
              <span class="text__line">Описание зимовки:</span>
              <span class="text__line">{{ winter.description }}</span>
            </div>
          </div>
        </div>
        <h2 v-if="plant.hotbeds.length !== 0" class="hotbeds-info__title">
          Растения на складе
        </h2>
        <div
          v-for="(hotbeds, j) in plant.hotbeds"
          :key="j"
          class="hotbeds-info"
        >
          <div class="text__container">
            <div class="hotbeds-info__name">
              <span class="text__line">Название на складе:</span>
              <span class="text__line">{{ hotbeds.name }}</span>
            </div>
            <div class="hotbeds-info__number">
              <span class="text__line">Номер на складе:</span>
              <span class="text__line">{{ hotbeds.number }}</span>
            </div>
            <div class="hotbeds-info__width">
              <span class="text__line">Ширина контейнера:</span>
              <span class="text__line">{{ hotbeds.width }} м.</span>
            </div>
            <div class="hotbeds-info__height">
              <span class="text__line">Длина контейнера:</span>
              <span class="text__line">{{ hotbeds.heigth }} м.</span>
            </div>
          </div>
        </div>
        <h2 v-if="plant.cancellations.length !== 0" class="cancellations-info__title">
          Списания
        </h2>
        <div
          v-for="(cancellation, k) in plant.cancellations"
          :key="k"
          class="cancellations-info"
        >
          <div class="image__container">
            <img
              class="cancellations-info__image"
              alt=""
              :src="cancellation.image.url"
            >
          </div>
          <div class="text__container">
            <div class="cancellations-info__date">
              <span class="text__line">Дата списания:</span>
              <span class="text__line">{{ $moment( cancellation.date ).format('llll') }}</span>
            </div>
            <div class="cancellations-info__cause">
              <span class="text__line">Причина списания:</span>
              <span class="text__line">{{ cancellation.cause }}</span>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $strapi, route }) {
    const { id } = route.params;
    const plant = await $strapi.$plants.findOne(id);
    return { plant };
  },
};
</script>

<style lang="scss" scoped>
.image {
  &__container {}
}
.text {
  &__line {
    font-weight: 500;
    font-size: 1.5em;
    background: linear-gradient(135deg, #808080 20%, #808080 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    &_red {
      @extend .text__line;
      background: linear-gradient(135deg, #DC143C 20%, #8B0000 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &_green {
      @extend .text__line;
      background: linear-gradient(135deg, #228B22 20%, #008000 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__container {
    display: grid;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 20px;
  }
}
.plant-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  &__title {}
  &__name {}
  &__type {}
  &__available {}
  &__new {}
  &__amount {}
  &__price {}
  &__image {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
}
.seedbeds-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  &__name {}
  &__description {}
  &__width {}
  &__height {}
  &__type {}
  &__number {}
  &__image {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
}
.hotbeds-info {
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding: 10px 0 10px 20px;
  &__title {}
  &__number {}
  &__width {}
  &__height {}
}
.cancellations-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  &__date {}
  &__cause {}
  &__image {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
}
.winters-info {
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding: 10px 0 10px 20px;
  &__date {}
  &__description {}
}
</style>
