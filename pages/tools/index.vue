<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-model="query"
          class="uk-search-input"
          type="search"
          placeholder="Поиск инструментов..."
        >
      </form>
    </div>
    <div class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(tool, i) in filteredList_tools"
          :key="i"
          class="card-plant"
        >
          <div class="">
            <img
              class="card-plant__image"
              :src="tool.image.url"
              :alt="tool.name"
            >
          </div>
          <div class="">
            <h3 class="card-plant__title">
              {{ tool.name }} [{{ tool.type }}]
            </h3>
            <div>
              <div
                class="badge badge_green"
              >
                Кол-во: {{ tool.amount }}шт.
              </div>
              <div class="card-plant__area" />
              <!-- TODO: Проверить работоспособность -->
              <div
                v-if="!filteredList_tools"
              >
                <img
                  src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
                  height="800"
                  width="800"
                >
                <p>Инструменты не найдены!</p>
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
      tools: [],
      query: '',
      error: null,
    };
  },
  computed: {
    filteredList_tools() {
      // TODO: Переписать скрипт фильтрации
      return this.tools.filter((tool) => tool.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
  async mounted() {
    try {
      this.tools = await this.$strapi.$tools.find();
      // eslint-disable-next-line no-console
      console.log(this.tools);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
