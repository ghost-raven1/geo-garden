<template>
  <div class="main">
    <div class="adaptive_container" />
    <div class="card">
      <div>
        <span>{{ field.title }}</span>
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
      field: {
        id: '1',
        title: 'Клумба 1',
      },
      fields: [
        {
          id: '1',
          title: 'Клумба 2',
        },
        {
          id: '1',
          title: 'Клумба 3',
        },
        {
          id: '1',
          title: 'Клумба 1',
        },
      ],
    };
  },
  computed: {},
};
</script>
