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
                <div class="adaptive_container">
                  <script
                    type="text/javascript"
                    charset="utf-8"
                    async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aae9dee25d884301e3f64fb47cd3b6321ca975b30ca190fcfe228916e37a80517&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true;apikey=e7c1c5fc-21d7-49a3-93ec-069e3e1c8d44"
                  />
                </div>
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
                    src="http://chihuashki.ru/sites/default/files/images/u6/podsolnuh.jpg"
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
                    src="https://www.touchofart.eu/photos/Katarzyna_Gorowska/big/Pole_rzepakowe_kgo8.jpg"
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
import Techcard from '~/components/techcard/Tech-ac.vue';
import Tabel from '~/components/tabel/Tabel.vue';

export default {
  components: {
    Tabel,
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
