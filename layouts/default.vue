<template>  
  <div>
    <Header />
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>  
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'  
export default {  
  components: {
    Header,
    Footer,
  }
}
</script>
