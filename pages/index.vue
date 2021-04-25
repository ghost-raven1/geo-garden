<template>
  <div class="container">
    <section>
      <div class="uk-accordion-content map_adaptive_container">
        <h2>Добро пожаловать, {{ loggedInUser.username }}!</h2>

        <div class="uk-accordion-content map_adaptive_container">
          <h2 class="uk-heading-small uk-heading-line uk-text-center">
            <span>Поиск растений</span>
          </h2>
          <form class="uk-search uk-search-large uk-align-center uk-margin">
            <span uk-search-icon />
            <input
              v-model="query"
              class="uk-search-input"
              type="search"
              placeholder="Поиск..."
            >
          </form>
        </div>

        <ul uk-accordion>
          <li>
            <a
              class="uk-accordion-title"
              href="#"
            >Результат поиска</a>
            <div class="uk-accordion-content map_adaptive_container">
              <div
                v-for="plant in filteredList_plants"
                :key="plant.id"
                class="uk-card uk-card-default uk-card-body uk-child-width-expand@ uk-text-center uk-margin"
                uk-grid
              >
                <div class="uk-cover-container">
                  <div class="uk-card-badge uk-label">
                    {{ plant.type }}
                  </div>
                  <img
                    :src="plant.img.url"
                    alt=""
                    uk-cover
                  >
                  <canvas
                    width="100%"
                    height="400"
                  />
                </div>
                <div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title">
                      Название растения: {{ plant.name }}
                    </h3>
                    <p>Описание поля: {{ plant.desc }}</p>
                    Поле:
                    <nuxt-link to="/">
                      {{ fields.name }}
                    </nuxt-link>
                    </p>
                    <p>Тип поля: </p><p v-for="field in fields">
                      {{ field.type }}
                    </p>
                    <p>Описание поля: </p><p>{{ fields.description }}</p>
                    <p>Площадь поля: </p><p>{{ fields.area }} м2</p>
                    <p />
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="filteredList_plants.length == 0"
              class="uk-container uk-container-center uk-text-center"
            >
              <img
                src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
                height="800"
                width="800"
              >
              <p>Растения не найдены</p>
            </div>
          </li>
        </ul>

        <h2 class="uk-heading-small uk-heading-line uk-text-center">
          <span>Интерактивные карты</span>
        </h2>
        <div
          class="uk-alert-primary"
          uk-alert
        >
          <a
            class="uk-alert-close"
            uk-close
          />
          <p>Выберите год, карту и объект...</p>
        </div>
        <!-- Интерактивная карта -->

        <div uk-filter="target: .map-filter">
          <ul class="uk-subnav uk-subnav-pill">
            <li
              class="uk-active"
              uk-filter-control=".tag-2021"
            >
              <a href="#">2021</a>
            </li>
            <li uk-filter-control=".tag-2022">
              <a href="#">2022</a>
            </li>
          </ul>

          <ul
            class="map-filter uk-child-width-1-1 uk-child-width-1-1@m uk-text-center"
            uk-grid
          >
            <li class="tag-2021">
              <div class="uk-card uk-card-default uk-card-body">
                <ul uk-accordion="collapsible: true">
                  <CommonMap2021 />
                </ul>
              </div>
            </li>
            <li class="tag-2022">
              <div class="uk-card uk-card-default uk-card-body">
                Этот год еще не наступил!
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="uk-accordion-content map_adaptive_container">
        <h2 class="uk-heading-small uk-heading-line uk-text-center">
          <span>Фильтры</span>
        </h2>
        <div
          class="uk-alert-primary"
          uk-alert
        >
          <a
            class="uk-alert-close"
            uk-close
          />
          <p>Выберите фильтр во вкладке, а затем тип объекта.</p>
        </div>
        <!-- Фильтр по полям -->
        <FilterFields2021 />
      </div>
      <!-- Техническая карта -->
      <h2 class="uk-heading-small uk-heading-line uk-text-center">
        <span>Техническая карта</span>
      </h2>
      <div
        class="uk-alert-primary"
        uk-alert
      >
        <a
          class="uk-alert-close"
          uk-close
        />
        <p>Выберите мероприятие...</p>
      </div>
      <Techcard />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonMap2021 from '~/components/maps/2021/CommonMap2021-ac.vue';
import FilterFields2021 from '~/components/filters/2021/FilterFields2021.vue';
import Techcard from '~/components/techcard/Tech-ac.vue';
import plantsQuery from '~/apollo/queries/plant/plants.gql';

export default {
  components: {
    CommonMap2021,
    FilterFields2021,
    Techcard,
  },
  middleware: 'auth',
  apollo: {
    plants: {
      prefetch: true,
      query: plantsQuery,
    },
  },
  data() {
    return {
      plants: [],
      fieldsList: {},
      fields: {},
      query: '',
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    filteredList_plants() {
      return this.plants.filter((plant) => plant.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
};
</script>
