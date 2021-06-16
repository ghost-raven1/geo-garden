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
          placeholder="Название полей..."
        >
        <input
          v-if="searchType === 2"
          v-model="queryType"
          class="uk-search-input"
          type="search"
          placeholder="Тип полей..."
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
        <!-- Карточка поля -->
        <div
          v-for="(field, i) in filteredListName_fields"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'fields-id', params: { id: field.id }}"
            tag="a">
            <div class="">
              <img
                class="card-plant__image"
                :src="field.image.url"
                :alt="field.name"
              >
            </div>
            <div class="">
              <h3 class="card-plant__title">
                {{ field.name }} [{{ field.type }}]
              </h3>
              <div>
                <div
                  v-for="(seedbed, n) in field.seedbeds"
                  :key="n"
                  class="badge badge_green"
                >
                  {{ seedbed.name }} №{{ seedbed.number }},
                  {{ seedbed.type }},
                  Ширина:{{ seedbed.width }}м,
                  Длина:{{ seedbed.height }}м
                </div>
                <div class="card-plant__area">
                  Площадь: {{ field.area }} м2.
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!filteredListName_fields.length"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Поля не найдены!</p>
        </div>
        <!-- Конец карточки поля -->
      </div>
    </div>
    <div v-if="queryType" class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(field, i) in filteredListType_fields"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'fields-id', params: { id: field.id }}"
            tag="a">
            <div class="">
              <img
                class="card-plant__image"
                :src="field.image.url"
                :alt="field.name"
              >
            </div>
            <div class="">
              <h3 class="card-plant__title">
                {{ field.name }} [{{ field.type }}]
              </h3>
              <div>
                <div
                  v-for="(seedbed, n) in field.seedbeds"
                  :key="n"
                  class="badge badge_green"
                >
                  {{ seedbed.name }} №{{ seedbed.number }},
                  {{ seedbed.type }},
                  Ширина:{{ seedbed.width }}м,
                  Длина:{{ seedbed.height }}м
                </div>
                <div class="card-plant__area">
                  Площадь: {{ field.area }} м2.
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!filteredListType_fields.length"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Поля не найдены!</p>
        </div>
        <!-- Конец карточки поля -->
      </div>
    </div>
    <div v-if="fields" class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(field, i) in filteredListName_fields"
          :key="i"
          class="card-plant"
        >
          <router-link
            :to="{ name: 'fields-id', params: { id: field.id }}"
            tag="a">
            <div class="">
              <img
                class="card-plant__image"
                :src="field.image.url"
                :alt="field.name"
              >
            </div>
            <div class="">
              <h3 class="card-plant__title">
                {{ field.name }} [{{ field.type }}]
              </h3>
              <div>
                <div
                  v-for="(seedbed, n) in field.seedbeds"
                  :key="n"
                  class="badge badge_green"
                >
                  {{ seedbed.name }} №{{ seedbed.number }},
                  {{ seedbed.type }},
                  Ширина:{{ seedbed.width }}м,
                  Длина:{{ seedbed.height }}м
                </div>
                <div class="card-plant__area">
                  Площадь: {{ field.area }} м2.
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!filteredListName_fields.length"
        >
          <img
            src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
            height="800"
            width="800"
          >
          <p>Поля не найдены!</p>
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
      searchType: '',
      fields: [],
      queryName: '',
      queryType: '',
      error: null,
    };
  },
  computed: {
    filteredListName_fields() {
      return this.fields.filter((field) => field.name.toLowerCase().includes(this.queryName.toLowerCase()));
    },
    filteredListType_fields() {
      return this.fields.filter((field) => field.type.toLowerCase().includes(this.queryType.toLowerCase()));
    },
  },
  async mounted() {
    try {
      this.fields = await this.$strapi.$fields.find();
      // eslint-disable-next-line no-console
      console.log(this.fields);
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
