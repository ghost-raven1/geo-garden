<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-model="query"
          class="uk-search-input"
          type="search"
          placeholder="Название грядки..."
        >
      </form>
    </div>
    <div class="adaptive_container">
      <!--      TODO: Подумать над дизайном страницы-->
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(seedbed, i) in filteredList_seedbeds"
          :key="i"
          class="card-plant"
        >
          <div class="">
            <img
              v-if="seedbed.image.url"
              class="card-plant__image"
              :src="seedbed.image.url"
              :alt="seedbed.name"
            >
          </div>
          <div class="">
            <h3 class="card-plant__title">
              <span v-if="seedbed.name">{{ seedbed.name }}</span>
              <span v-if="seedbed.type">[{{ seedbed.type }}]</span>
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
                  <span v-if="plant.name">{{ plant.name }},</span>
                  <span v-if="plant.type">{{ plant.type }}</span>
                  <span v-if="plant.price">Цена:{{ plant.price }}руб.</span>
                  <span v-if="plant.new">{{ plant.new }}</span>
                  <span v-if="plant.amount">Кол-во:{{ plant.amount }}шт.</span>
                </div>
              </span>
              <div class="card-plant__area" />
              <!-- TODO: Проверить работоспособность -->
              <div v-if="!loading">
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
              <div v-if="loading">Получение данных с сервера...</div>
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
      loading: false,
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
      this.loading = true;
      this.seedbeds = await this.$strapi.$seedbeds.find();
      // eslint-disable-next-line no-console
      console.log(this.seedbeds);
      this.loading = false;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
