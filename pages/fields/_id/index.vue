<template>
  <div class="main">
    <div class="adaptive_container">
      <h2 class="field-info__title">
        Общая информация о поле
      </h2>
      <div class="field-info">
        <div class="image__container">
          <img
            class="field-info__image"
            :alt="field.name"
            :src="field.image.url"
          >
        </div>
        <div class="text__container">
          <div class="field-info__name">
            <span class="text__line">Название поля:</span> {{ field.name }}
          </div>
          <div class="field-info__type">
            <span class="text__line">Тип поля:</span> {{ field.type }}
          </div>
          <div class="field-info__status">
            <span class="text__line">Статус поля:</span> {{ field.status }}
          </div>
        </div>
      </div>
      <h2 class="seedbeds-info__title">
        Грядки на поле
      </h2>
      <div
        v-for="(seedbeds, i) in field.seedbeds"
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
    </div>
  </div>
</template>

<script>
import fieldQuery from '~/apollo/queries/field/field.gql';

export default {
  name: 'index.vue',
  data() {
    return {
      field: Object,
    };
  },
  apollo: {
    field: {
      prefetch: true,
      query: fieldQuery,
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
.field-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 6px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  &__title {}
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
</style>
