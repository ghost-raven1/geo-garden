<template>
  <div class="container">
    <div class="uk-accordion-content map_adaptive_container">
      <h2>Добро пожаловать, {{ loggedInUser.username }}!</h2>

      <!-- Интерактивные карты -->
      <h2 class="">
        <span>Интерактивные карты</span>
      </h2>
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

      <div class="uk-accordion-content adaptive_container">
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
      <div class="adaptive_container">
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
      </div>
      <div class="adaptive_container">
        <h2 class="uk-heading-small uk-heading-line uk-text-center">
          <span>Табель полевых работ</span>
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
        <Tabel />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonMap2021 from '~/components/maps/2021/CommonMap2021-ac.vue';
import FilterFields2021 from '~/components/filters/2021/FilterFields2021.vue';
import Techcard from '~/components/techcard/Tech-ac.vue';
import Tabel from '~/components/tabel/Tabel.vue';

export default {
  components: {
    Tabel,
    CommonMap2021,
    FilterFields2021,
    Techcard,
  },
  data() {
    return {
      loggedInUser: {
        username: 'Alex',
      },
      query: '',
      fields: {
      },
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
};
</script>
