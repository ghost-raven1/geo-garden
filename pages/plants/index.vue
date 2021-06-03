<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-model="query"
          class="uk-search-input"
          type="search"
          placeholder="Поиск растения..."
        >
      </form>
    </div>
    <div class="adaptive_container">
      <div uk-grid>
        <!-- Карточка растения -->
        <div
          v-for="(plant, i) in filteredList_plants"
          :key="i"
          class="card-plant"
        >
          <div class="">
            <img
              class="card-plant__image"
              :src="plant.image.url"
              :alt="plant.name"
            >
          </div>
          <div class="">
            <h3 class="">
              {{ plant.name }} {{ plant.type }}
            </h3>
            <div>
              <div
                class="badge badge_green"
              >
                Цена:{{ plant.price }}руб.
                Кол-во:{{ plant.amount }}шт.
              </div>
              <router-link
                :to="{ name: 'plants-id', params: { id: plant.id }}"
                tag="a"
                class="uk-button uk-button-primary"
              >
                Подробнее
              </router-link>
            </div>
          </div>
        </div>
        <div
          v-if="!filteredList_plants.length"
          class="adaptive_container"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Растения не найдены</p>
        </div>
        <!-- Конец карточки растений -->
      </div>
    </div>
  </div>
</template>

<script>
import plantsQuery from '~/apollo/queries/plant/plants.gql';

export default {
  name: 'index.vue',
  data() {
    return {
      plants: [],
      query: '',
    };
  },
  apollo: {
    plants: {
      prefetch: true,
      query: plantsQuery,
    },
  },
  computed: {
    filteredList_plants() {
      // TODO: Переписать скрипт фильтрации
      return this.plants.filter((plant) => plant.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
};
</script>
