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
            class="uk-search-input"
            type="search"
            placeholder="Поиск..."
          >
        </form>
      </div>

      <div class="uk-accordion-content map_adaptive_container">
        <div
          v-for="field in fields"
          :key="field"
          class="uk-card uk-card-default uk-card-body uk-child-width-expand@ uk-text-center uk-margin"
          uk-grid
        >
          <div>
            <div class="uk-cover-container">
              <div class="uk-card-badge uk-label">
                {{ field.type }}
              </div>
              <!-- <img :src="plant.plant_image.url" alt="" uk-cover /> -->
              <canvas
                width="100%"
                height="400"
              />
            </div>
            <div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  Название поля: {{ field.name }}
                </h3>
                <p>Тип поля: {{ field.type }}</p>
                <p>
                  Поле:
                  <nuxt-link to="/">
                    {{ field.name }}
                  </nuxt-link>
                </p>
                <p>Растения на поле: {{ field.crops.name }}</p>
                <p>Площадь поля: {{ field.area }} м2</p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="fields.length == 0"
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
</template>

<script>

export default {
  components: {},
  data() {
    return {
      fields: [
        {
          id: '1',
          number: '1',
          type: 'Клумбы',
          name: 'Клумба на въезде',
          area: '164',
          crops: [],
        },
        {
          id: '2',
          number: '2',
          type: 'Клумбы',
          name: 'Газон и беседка',
          area: '512',
          crops: [
            {
              name: 'Сосна',
            },
          ],
        },
        {
          id: '3',
          number: '3',
          type: 'Пруды',
          name: 'Малый пруд',
          area: '6.7',
          crops: [],
        },
        {
          id: '4',
          number: '4',
          type: 'Пруды',
          name: 'Большой пруд',
          area: '142',
          crops: [],
        },
        {
          id: '5',
          number: '5',
          type: 'Строения',
          name: 'Бытовка',
          area: '48',
          crops: [],
        },
        {
          id: '6',
          number: '6',
          type: 'Строения',
          name: 'Свинарник',
          area: '109',
          crops: [],
        },
        {
          id: '7',
          number: '7',
          type: 'Строения',
          name: 'Теплица',
          area: '37',
          crops: [],
        },
        {
          id: '8',
          number: '8',
          type: 'Зоны продажи',
          name: 'Зона продажи',
          area: '245',
          crops: [],
        },
        {
          id: '9',
          number: '9',
          type: 'Зоны продажи',
          name: 'Продажа камней',
          area: '247',
          crops: [],
        },
        {
          id: '10',
          number: '10',
          type: 'Поля',
          name: 'Поле',
          area: '101',
          crops: [],
        },
        {
          id: '11',
          number: '11',
          type: 'Поля',
          name: 'Поле',
          area: '484',
          crops: [],
        },
        {
          id: '12',
          number: '12',
          type: 'Поля',
          name: 'Поле',
          area: '1254',
          crops: [],
        },
        {
          id: '13',
          number: '13',
          type: 'Поля',
          name: 'Поле',
          area: '444',
          crops: [],
        },
        {
          id: '14',
          number: '14',
          type: 'Поля',
          name: 'Поле',
          area: '487',
          crops: [],
        },
        {
          id: '15',
          number: '15',
          type: 'Поля',
          name: 'Поле',
          area: '886',
          crops: [],
        },
        {
          id: '16',
          number: '16',
          type: 'Поля',
          name: 'Поле',
          area: '627',
          crops: [],
        },
        {
          id: '17',
          number: '17',
          type: 'Поля',
          name: 'Поле',
          area: '161',
          crops: [],
        },
        {
          id: '18',
          number: '18',
          type: 'Поля',
          name: 'Поле',
          area: '149',
          crops: [],
        },
        {
          id: '19',
          number: '19',
          type: 'Поля',
          name: 'Поле',
          area: '126',
          crops: [],
        },
        {
          id: '20',
          number: '20',
          type: 'Поля',
          name: 'Поле',
          area: '309',
          crops: [],
        },
        {
          id: '21',
          number: '21',
          type: 'Поля',
          name: 'Поле',
          area: '217',
          crops: [],
        },
        {
          id: '22',
          number: '22',
          type: 'Поля',
          name: 'Поле',
          area: '184',
          crops: [],
        },
        {
          id: '23',
          number: '23',
          type: 'Поля',
          name: 'Поле',
          area: '256',
          crops: [],
        },
        {
          id: '24',
          number: '24',
          type: 'Поля',
          name: 'Поле',
          area: '151',
          crops: [],
        },
        {
          id: '25',
          number: '25',
          type: 'Поля',
          name: 'Поле',
          area: '161',
          crops: [],
        },
        {
          id: '26',
          number: '26',
          type: 'Поля',
          name: 'Поле',
          area: '152',
          crops: [],
        },
        {
          id: '27',
          number: '27',
          type: 'Поля',
          name: 'Поле',
          area: '337',
          crops: [],
        },
        {
          id: '28',
          number: '28',
          type: 'Поля',
          name: 'Поле',
          area: '487',
          crops: [],
        },
        {
          id: '29',
          number: '29',
          type: 'Поля',
          name: 'Поле',
          area: '146',
          crops: [],
        },
        {
          id: '30',
          number: '30',
          type: 'Поля',
          name: 'Поле',
          area: '195',
          crops: [],
        },
        {
          id: '31',
          number: '31',
          type: 'Поля',
          name: 'Поле',
          area: '93',
          crops: [],
        },
        {
          id: '32',
          number: '32',
          type: 'Поля',
          name: 'Поле',
          area: '132',
          crops: [],
        },
        {
          id: '33',
          number: '33',
          type: 'Поля',
          name: 'Поле',
          area: '360',
          crops: [],
        },
        {
          id: '34',
          number: '34',
          type: 'Поля',
          name: 'Поле',
          area: '182',
          crops: [],
        },
        {
          id: '35',
          number: '35',
          type: 'Поля',
          name: 'Свободное поле',
          area: '770',
          crops: [],
        },
        {
          id: '36',
          number: '36',
          type: 'Поля',
          name: 'Свободное поле',
          area: '4569',
          crops: [],
        },
      ],
    };
  },
  // TODO: Написать скрипт фильтрации
  computed: {},
};
</script>
