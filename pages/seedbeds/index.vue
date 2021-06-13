<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-model="query"
          class="uk-search-input"
          type="search"
          placeholder="Поиск грядок по названию..."
        >
      </form>
    </div>
    <div class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(seedbed, i) in filteredList_seedbeds"
          :key="i"
          class="card-plant"
        >
          <div class="">
            <img
              class="card-plant__image"
              :src="seedbed.image.url"
              :alt="seedbed.name"
            >
          </div>
          <div class="">
            <h3 class="card-plant__title">
              {{ seedbed.name }} [{{ seedbed.type }}]
            </h3>
            <div>
              <span
                v-for="(plant, n) in seedbed.plants"
                :key="n"
              >
                <div
                  v-if="plant.available === true"
                  class="badge badge_green"
                >
                  {{ plant.name }},
                  {{ plant.type }}
                  Цена:{{ plant.price }}руб.
                  {{ plant.new }}
                  Кол-во:{{ plant.amount }}шт.
                </div>
              </span>
              <div class="card-plant__area" />
              <!-- TODO: Проверить работоспособность -->
              <div
                v-if="filteredList_seedbeds.length == 0"
              >
                <img
                  src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
                  height="800"
                  width="800"
                >
                <p>Грядки не найдены!</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Конец карточки поля -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  data() {
    return {
      seedbeds: [],
      query: '',
      error: null,
    };
  },
  computed: {
    filteredList_seedbeds() {
      // TODO: Переписать скрипт фильтрации
      return this.seedbeds.filter((seedbed) => seedbed.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
  async mounted() {
    try {
      this.seedbeds = await this.$strapi.$seedbeds.find();
      // eslint-disable-next-line no-console
      console.log(this.seedbeds);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
