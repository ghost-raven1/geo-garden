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
              <span class="text__line">Название растения:</span> {{ plant.name }}
            </div>
            <div class="plant-info__type">
              <span class="text__line">Тип растения:</span> {{ plant.type }}
            </div>
            <div class="plant-info__available">
              <span class="text__line">Есть ли на складе:</span>
              <span v-if="plant.available">Есть</span>
              <span v-if="!plant.available">Нет</span>
            </div>
            <div class="plant-info__amount">
            <span v-if="plant.available">
              <span class="text__line">Количество растений:</span> {{ plant.amount }} шт.</span>
            </div>
            <div class="plant-info__price">
              <span class="text__line">Цена растения:</span> {{ plant.price }} руб.
            </div>
            <div
              v-if="plant.new"
              class="plant-info__new"
            >
              <span>Новое растение</span>
            </div>
          </div>
        </div>
        <h2 class="plant-info__title">
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
              <span class="text__line">Название грядки:</span> {{ seedbeds.name }}
            </div>
            <div class="seedbeds-info__description">
              <span class="text__line">Описание грядки:</span> {{ seedbeds.description }}
            </div>
            <div class="seedbeds-info__width">
              <span class="text__line">Ширина грядки:</span> {{ seedbeds.width }} м.
            </div>
            <div class="seedbeds-info__height">
              <span class="text__line">Длина грядки:</span> {{ seedbeds.height }} м.
            </div>
            <div class="seedbeds-info__type">
              <span class="text__line">Тип грядки:</span> {{ seedbeds.type }}
            </div>
            <div class="seedbeds-info__number">
              <span class="text__line">Номер грядки:</span> {{ seedbeds.number }}
            </div>
          </div>
        </div>
        <h2 class="winters-info__title">
          Время зимовки растений
        </h2>
        <div
          v-for="(winter, l) in plant.winters"
          :key="l"
          class="winters-info"
        >
          <div class="text__container">
            <div class="winters-info__date">
              <span class="text__line">Планируемая дата зимовки:</span> {{ winter.date }}
            </div>
            <div class="winters-info__description">
              <span class="text__line">Описание зимовки:</span> {{ winter.description }}
            </div>
          </div>
        </div>
        <h2 class="hotbeds-info__title">
          Растения на складе
        </h2>
        <div
          v-for="(hotbeds, j) in plant.hotbeds"
          :key="j"
          class="hotbeds-info"
        >
          <div class="text__container">
            <div class="hotbeds-info__name">
              <span class="text__line">Название на складе:</span> {{ hotbeds.name }}
            </div>
            <div class="hotbeds-info__number">
              <span class="text__line">Номер на складе:</span> {{ hotbeds.number }}
            </div>
            <div class="hotbeds-info__width">
              <span class="text__line">Ширина контейнера:</span> {{ hotbeds.width }} м.
            </div>
            <div class="hotbeds-info__height">
              <span class="text__line">Длина контейнера:</span> {{ hotbeds.heigth }} м.
            </div>
          </div>
        </div>
        <h2 class="cancellations-info__title">
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
              <span class="text__line">Дата списания:</span> {{ cancellation.date }}
            </div>
            <div class="cancellations-info__cause">
              <span class="text__line">Причина списания:</span> {{ cancellation.cause }}
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import plantQuery from '~/apollo/queries/plant/plant.gql';

export default {
  name: 'Index',
  data() {
    return {
      plant: Object,
    };
  },
  apollo: {
    plant: {
      prefetch: true,
      query: plantQuery,
      variables() {
        return { id: this.$route.params.id };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  &__container {}
}
.text {
  &__line {
    font-size: 16px;
    font-weight: 500;
  }
  &__container {
    display: grid;
    align-items: center;
    justify-content: flex-start;
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
