<template>
  <div class="container">
    <div>
      <div class="uk-accordion-content map_adaptive_container">
        <h2 class="uk-heading-small uk-heading-line uk-text-center">
          <span>Поиск полей</span>
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

      <div class="uk-accordion-content map_adaptive_container">
        <div
          v-for="field in filteredList_fields"
          :key="field"
          class="uk-card uk-card-default uk-card-body uk-child-width-expand@ uk-text-center uk-margin"
          uk-grid
        >
          <div>
            <div class="uk-cover-container">
              <!-- <div class="uk-card-badge uk-label">
                      {{ plant.plant_type }}
                    </div>
                    <img :src="plant.plant_image.url" alt="" uk-cover />
                    <canvas width="100%" height="400"></canvas>
                  </div> -->
              <div>
                <div class="uk-card-body">
                  <!-- <h3 class="uk-card-title">
                        Название растения: {{ plant.name }}
                      </h3> -->
                  <!-- <p>Описание поля: {{ plant.plant_description }}</p>  -->
                  <p>
                    Поле:
                    <nuxt-link
                      :to="field.link"
                    >
                      {{ field.name }}
                    </nuxt-link>
                  </p>
                  <p>Тип поля: {{ field.field_type }}</p>
                  <p>Описание поля: {{ field.description }}</p>
                  <p>Площадь поля: {{ field.area }} м2</p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="filteredList_fields.length == 0"
            class="uk-container uk-container-center uk-text-center"
          >
            <img
              src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
              height="800"
              width="800"
            >
            <p>Поля не найдены</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <section>
      <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Выберите группу растений из списка...</p>
      </div>
      <ul uk-accordion>
        <li>
          <a class="uk-accordion-title" href="#">Многолетники</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <ul uk-accordion>
              <li>
                <a class="uk-accordion-title" href="#">Поле №10</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 101м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/10"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №11</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 484м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/11"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №12</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 1254м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/12"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №13</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 444м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/13"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №14</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 487м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/14"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №15</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 886м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/15"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №16</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 627м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/16"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №17</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 161м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/17"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №18</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 149м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/perennials/18"
                    >подробнее</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Cвободные поля</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <ul uk-accordion>
              <li>
                <a class="uk-accordion-title" href="#">Поле №35</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 770м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/free_fields/35"
                    >подробнее</a
                  >
                </div>
              </li>
              <li>
                <a class="uk-accordion-title" href="#">Поле №36</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 4569м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/free_fields/36"
                    >подробнее</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a class="uk-accordion-title" href="#">Кустарники</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <li>
              <a class="uk-accordion-title" href="#">Поле №21</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 217м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/21"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №22</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 184м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/22"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №23</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 256м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/23"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №24</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 151м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/24"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №25</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 161м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/25"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №26</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 152м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/26"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №27</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 337м2</p>
                <a class="uk-button uk-button-default" href="/fields/bushes/27"
                  >подробнее</a
                >
              </div>
            </li>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Деревья</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <li>
              <a class="uk-accordion-title" href="#">Поле №28</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 487м2</p>
                <a class="uk-button uk-button-default" href="/fields/trees/28"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №29</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 146м2</p>
                <a class="uk-button uk-button-default" href="/fields/trees/29"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №30</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 195м2</p>
                <a class="uk-button uk-button-default" href="/fields/trees/30"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №32</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 132м2</p>
                <a class="uk-button uk-button-default" href="/fields/trees/32"
                  >подробнее</a
                >
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">Поле №34</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 182м2</p>
                <a class="uk-button uk-button-default" href="/fields/trees/34"
                  >подробнее</a
                >
              </div>
            </li>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Плодовые</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <li>
              <a class="uk-accordion-title" href="#">Поле №31</a>
              <div class="uk-accordion-content map_adaptive_container">
                <p>Площадь поля: 93м2</p>
                <a class="uk-button uk-button-default" href="/fields/fruits/31"
                  >подробнее</a
                >
              </div>
            </li>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Корнеплоды</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <ul uk-accordion>
              <li>
                <a class="uk-accordion-title" href="#">Поле №33</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 360м2</p>
                  <a class="uk-button uk-button-default" href="/fields/roots/33"
                    >подробнее</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Злаковые</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <ul uk-accordion>
              <li>
                <a class="uk-accordion-title" href="#">Поле №19</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 126м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/cereals/19"
                    >подробнее</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">Ягоды</a>
          <div class="uk-accordion-content map_adaptive_container">
            <div class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>Выберите поле из списка...</p>
            </div>
            <ul uk-accordion>
              <li>
                <a class="uk-accordion-title" href="#">Поле №20</a>
                <div class="uk-accordion-content map_adaptive_container">
                  <p>Площадь поля: 309м2</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/fields/berries/20"
                    >подробнее</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>-->
  </div>
</template>

<script>
import fieldsQuery from '~/apollo/queries/field/fields';

export default {
  components: {},
  middleware: 'auth',
  apollo: {
    fields: {
      prefetch: true,
      query: fieldsQuery,
    },
  },
  data() {
    return {
      fields: [],
      query: '',
    };
  },
  computed: {
    filteredList_fields() {
      return this.fields.filter((field) => field.name.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
};
</script>
