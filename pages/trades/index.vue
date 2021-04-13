<template>
  <div class="container">
    <section>
      <div class="uk-alert-primary" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Выберите объект из списка...</p>
</div>
      <ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Зона продажи №8</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь зоны: 245м2</p>
            <a class="uk-button uk-button-default" href="/trades/8">подробнее</a>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Зона продажи камней №9</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь зоны: 247м2</p>
            <a class="uk-button uk-button-default" href="/trades/9">подробнее</a>
        </div>
    </li>
</ul>
    </section>
  </div>
</template>

<script>  
export default {
  middleware: 'auth',  
  components: {
  }
}
</script>