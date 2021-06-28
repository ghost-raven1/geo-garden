<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-if="searchType === 1"
          v-model="queryName"
          class="uk-search-input"
          type="search"
          placeholder="Название растения..."
        >
        <input
          v-if="searchType === 2"
          v-model="queryType"
          class="uk-search-input"
          type="search"
          placeholder="Тип растения..."
        >
      </form>
      <div class="search-panel__btns">
        <span class="search__title">Поиск:</span>
        <button
          class="tab__search"
          :class="{tab__search_active: searchType === 1}"
          @click="searchType = 1">
          По названию
        </button>
        <button
          class="tab__search"
          :class="{tab__search_active: searchType === 2}"
          @click="searchType = 2">
          По типу
        </button>
      </div>
    </div>
    <div v-if="queryName" class="adaptive_container">
      <div uk-grid>
        <!-- Карточка растения -->
        <div
          v-for="(plant, i) in filteredListName_plants"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'plants-id', params: { id: plant.id }}"
            tag="a">
            <div class="">
              <img
                v-if="plant.image.url"
                class="card-plant__image"
                :src="plant.image.url"
                :alt="plant.name"
              >
              <!--              TODO: Добавить заглушку-->
            </div>
            <div class="">
              <h3 class="plant__title">
                <span v-if="plant.name">{{ plant.name }}</span>
                <span v-if="plant.type">[{{ plant.type }}]</span>
              </h3>
              <div>
                <div
                  class="badge badge_green"
                >
                  <span v-if="plant.price">Цена:{{ plant.price }}руб.</span>
                  <span v-if="plant.amount">Кол-во:{{ plant.amount }}шт.</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!filteredListName_plants.length"
          class="adaptive_container"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Растения не найдены</p>
        </div>
        <div
          v-if="!filteredListType_plants.length"
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
    <div v-if="queryType" class="adaptive_container">
      <div uk-grid>
        <!-- Карточка растения -->
        <div
          v-for="(plant, i) in filteredListType_plants"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'plants-id', params: { id: plant.id }}"
            tag="a">
            <div class="">
              <img
                v-if="plant.image.url"
                class="card-plant__image"
                :src="plant.image.url"
                :alt="plant.name"
              >
            </div>
            <div class="">
              <h3 class="plant__title">
                <span v-if="plant.name">{{ plant.name }}</span>
                <span v-if="plant.type">[{{ plant.type }}]</span>
              </h3>
              <div>
                <div
                  class="badge badge_green"
                >
                  <span v-if="plant.price">Цена:{{ plant.price }}руб.</span>
                  <span v-if="plant.amount">Кол-во:{{ plant.amount }}шт.</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!filteredListName_plants.length"
          class="adaptive_container"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Растения не найдены</p>
        </div>
        <div
          v-if="!filteredListType_plants.length"
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
    <div v-if="plants" class="adaptive_container">
      <div uk-grid>
        <!-- Карточка растения -->
        <div
          v-for="(plant, i) in filteredListName_plants"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'plants-id', params: { id: plant.id }}"
            tag="a">
            <div class="">
              <img
                v-if="plant.image.url"
                class="card-plant__image"
                :src="plant.image.url"
                :alt="plant.name"
              >
            </div>
            <div class="">
              <h3 class="plant__title">
                <span v-if="plant.name">{{ plant.name }}</span>
                <span v-if="plant.type">[{{ plant.type }}]</span>
              </h3>
              <div>
                <div
                  class="badge badge_green"
                >
                  <span v-if="plant.price">Цена:{{ plant.price }}руб.</span>
                  <span v-if="plant.amount">Кол-во:{{ plant.amount }}шт.</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div v-if="!loading">
          <div
            v-if="!filteredListName_plants.length"
            class="adaptive_container"
          >
            <img
              src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
              height="800"
              width="800"
            >
            <p>Растения не найдены</p>
          </div>
          <div
            v-if="!filteredListType_plants.length"
            class="adaptive_container"
          >
            <img
              src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
              height="800"
              width="800"
            >
            <p>Растения не найдены</p>
          </div>
        </div>
        <div v-if="loading">Получение данных с сервера...</div>
        <!-- Конец карточки растений -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index.vue',
  data() {
    return {
      searchType: '',
      plants: [],
      queryName: '',
      queryType: '',
      error: null,
      loading: false,
    };
  },
  computed: {
    filteredListName_plants() {
      return this.plants.filter((plant) => plant.name.toLowerCase().includes(this.queryName.toLowerCase()));
    },
    filteredListType_plants() {
      return this.plants.filter((plant) => plant.type.toLowerCase().includes(this.queryType.toLowerCase()));
    },
  },
  async mounted() {
    try {
      this.loading = true;
      this.plants = await this.$strapi.$plants.find();
      // eslint-disable-next-line no-console
      console.log(this.plants);
      this.loading = false;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
<style lang="scss" scoped>
.search {
  &-panel {
    &__btns {
      background: #f4f5f4;
      padding: 10px;
      border: none;
      border-radius: 6px;
    }
  }
  &__title {
    font-size: 18px;
    margin: 0 10px 0 0;
    font-weight: 500;
  }
}

.tab {
  &__search {
    transition: .5s;
    background: #07864a;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 5px;
    margin: 0 5px 0 0;
    font-size: 18px;
    &:hover {
      @extend .tab__search_active;
    }
    &_active {
      @extend .tab__search;
      transform: scale(1.1);
      background: #00AA5B;
      margin: 0 10px 0 0;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    }
  }
}
.plant {
  &__title {
    text-align: center;
  }
}
</style>
