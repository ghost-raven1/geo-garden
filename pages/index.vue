<template>
  <div class="container">
    <div class="uk-accordion-content map_adaptive_container">
      <h2>Добро пожаловать!</h2>

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
                <Map />
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
          <span>Я ищу...</span>
        </h2>
        <div class="adaptive_container">
          <div uk-grid>
            <nuxt-link
              type="button"
              to="/plants"
            >
              <div
                class="card-plant"
              >
                <div class="">
                  <img
                    class="card-plant__image"
                    src="~/assets/media/plants.jpg"
                    alt="Поиск растений"
                  >
                </div>
                <div class="">
                  <h3 class="">
                    Растения
                  </h3>
                </div>
              </div>
              <!-- Конец карточки растений -->
            </nuxt-link>
            <nuxt-link
              type="button"
              to="/fields"
            >
              <div
                class="card-plant"
              >
                <div class="">
                  <img
                    class="card-plant__image"
                    src="~/assets/media/fields.jpg"
                    alt="Поиск полей"
                  >
                </div>
                <div class="">
                  <h3 class="">
                    Поля
                  </h3>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <!-- Фильтр по полям -->
      </div>
      <!-- Техническая карта -->

     <!-- <div class="adaptive_container">
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
      </div> -->

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
            <div class="adaptive_container">
        <h2 class="uk-heading-small uk-heading-line uk-text-center">
          <span>План работ</span>
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
        <Workplan />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Map from '~/components/maps/2021/Map.vue';
import Techcard from '~/components/techcard/Tech-ac.vue';
import Tabel from '~/components/tabel/Tabel.vue';
import Workplan from '~/components/workplan/workplan.vue';

export default {
  components: {
    Tabel,
    Techcard,
    Map,
    Workplan
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
