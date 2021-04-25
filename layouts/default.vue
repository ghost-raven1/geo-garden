<template>
  <div>
    <Header />
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <Alert />
        <nuxt />
      </div>
    </div>
    <client-only>
      <offline-alert />
    </client-only>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Alert from '~/components/Alert.vue';

export default {
  components: {
    Header,
    Alert,
  },
};
</script>
