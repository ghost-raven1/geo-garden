<template>  
  <div>
    <Header />
    <Navbar />
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <Alert />
        <nuxt />
      </div>
    </div>
    <client-only>
    <offline-alert/>
</client-only>
  </div>
</template>

<script>  
import Navbar from "~/components/Navbar";
import Header from '~/components/Header.vue'
import Alert from '~/components/Alert.vue' 
export default {  
  components: {
    Navbar,
    Header,
    Alert
  }
}
</script>
