<template>
  <div class="container">
    <section>
            <div class="uk-alert-primary" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Выберите объект из списка...</p>
</div>
      <ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Малый пруд №3</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь поля: 6.7м2</p>
            <a class="uk-button uk-button-default" href="/ponds/3">подробнее</a>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Большой пруд №4</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь поля: 142м2</p>
            <a class="uk-button uk-button-default" href="/ponds/4">подробнее</a>
        </div>
    </li>
</ul>
    </section>
  </div>
</template>

<script>  
export default {
  //middleware: 'guest',  
  components: {
  }
}
</script>