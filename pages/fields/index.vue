<template>
  <div class="main">
    <div class="adaptive_container">
      <form class="uk-search uk-search-large uk-align-center uk-margin">
        <span uk-search-icon />
        <input
          v-model="query"
          class="uk-search-input"
          type="search"
          placeholder="Поиск полей по названию..."
        >
      </form>
    </div>
    <div class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(field, i) in filteredList_fields"
          :key="i"
          class="card-plant"
        >
          <div class="">
            <img
              class="card-plant__image"
              :src="field.image.url"
              :alt="field.name"
            >
          </div>
          <div class="">
            <h3 class="card-plant__title">
              {{ field.name }} {{ field.type }}
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
              <router-link
                :to="{ name: 'fields-id', params: { id: field.id }}"
                tag="a"
                class="uk-button uk-button-primary"
              >
                Подробнее
              </router-link>
            </div>
          </div>
        </div>
        <div
          v-if="!filteredList_fields.length"
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
import fieldsQuery from '~/apollo/queries/field/fields.gql';

export default {
  name: 'index.vue',
  components: {},
  data() {
    return {
      query: '',
      fields: [],
    };
  },
  apollo: {
    fields: {
      prefetch: true,
      query: fieldsQuery,
    },
  },
  computed: {
    filteredList_fields() {
      // TODO: Переписать скрипт фильтрации
      return this.fields.filter((field) => field.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
};
</script>
