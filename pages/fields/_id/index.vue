<template>
  <div class="main">
    <div class="adaptive_container">
      <div uk-grid>
        <!-- Карточка поля -->
        <div
          v-for="(field) in fields"
          class="card-plant"
        >
          <div class="">
            <img
              class="card-plant__image"
              :src="field.image"
              alt=""
            >
          </div>
          <div class="">
            <h3 class="">
              {{ field.name }} {{ field.type }}
            </h3>
            <div>
              <span
                v-for="(field, i) in field.plants"
                :key="i"
              >
                <span class="badge badge_green">{{ field.name }}</span>
              </span>
              <span>Площадь: {{ field.area }} м2.</span>
              <!-- TODO: Проверить работоспособность -->
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
  components: {},
  data() {
    return {
      query: '',
      fields: [
        {
          id: '1',
          type: 'Клумбы',
          name: 'На въезде 1',
          area: '164',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '2',
          type: 'Клумбы',
          name: 'Беседка 2',
          area: '512',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [
            {
              name: 'Сосна',
            },
          ],
        },
        {
          id: '3',
          type: 'Пруды',
          name: 'Малый пруд 3',
          area: '6.7',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '4',
          type: 'Пруды',
          name: 'Большой пруд 4',
          area: '142',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '5',
          type: 'Строения',
          name: 'Бытовка 5',
          area: '48',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '6',
          type: 'Строения',
          name: 'Свинарник 6',
          area: '109',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '7',
          type: 'Строения',
          name: 'Теплица 7',
          area: '37',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '8',
          type: 'Продажи',
          name: 'Растения 8',
          area: '245',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '9',
          type: 'Продажи',
          name: 'Камни 9',
          area: '247',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '10',
          type: 'Поля',
          name: 'Поле 10',
          area: '101',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '11',
          type: 'Поля',
          name: 'Поле 11',
          area: '484',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '12',
          type: 'Поля',
          name: 'Поле 12',
          area: '1254',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '13',
          type: 'Поля',
          name: 'Поле 13',
          area: '444',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '14',
          type: 'Поля',
          name: 'Поле 14',
          area: '487',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '15',
          type: 'Поля',
          name: 'Поле 15',
          area: '886',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '16',
          type: 'Поля',
          name: 'Поле 16',
          area: '627',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '17',
          type: 'Поля',
          name: 'Поле 17',
          area: '161',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '18',
          type: 'Поля',
          name: 'Поле 18',
          area: '149',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '19',
          type: 'Поля',
          name: 'Поле 19',
          area: '126',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '20',
          type: 'Поля',
          name: 'Поле 20',
          area: '309',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '21',
          type: 'Поля',
          name: 'Поле 21',
          area: '217',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '22',
          type: 'Поля',
          name: 'Поле 22',
          area: '184',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '23',
          type: 'Поля',
          name: 'Поле 23',
          area: '256',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '24',
          type: 'Поля',
          name: 'Поле 24',
          area: '151',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '25',
          type: 'Поля',
          name: 'Поле 25',
          area: '161',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '26',
          type: 'Поля',
          name: 'Поле 26',
          area: '152',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '27',
          type: 'Поля',
          name: 'Поле 27',
          area: '337',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '28',
          type: 'Поля',
          name: 'Поле 28',
          area: '487',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '29',
          type: 'Поля',
          name: 'Поле 29',
          area: '146',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '30',
          type: 'Поля',
          name: 'Поле 30',
          area: '195',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '31',
          type: 'Поля',
          name: 'Поле 31',
          area: '93',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '32',
          type: 'Поля',
          name: 'Поле 32',
          area: '132',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '33',
          type: 'Поля',
          name: 'Поле 33',
          area: '360',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '34',
          type: 'Поля',
          name: 'Поле 34',
          area: '182',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '35',
          type: 'Поля',
          name: 'Свободное 35',
          area: '770',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
        {
          id: '36',
          type: 'Поля',
          name: 'Свободное 36',
          area: '4569',
          image: 'https://www.macdonaldlaurier.ca/wp-content/uploads/2011/10/farmer-in-field.jpg',
          plants: [],
        },
      ],
    };
  },
  computed: {},
};
</script>
