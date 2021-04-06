<template>
  <div class="container">
    <section>
      <ul uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Поле №33</a>
        <div class="uk-accordion-content map_adaptive_container">
          <div uk-filter="target: .field-info-filter">
    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control=".tag-common"><a href="#">Информация по полю</a></li>
        <li uk-filter-control=".tag-map"><a href="#">Техническая карта</a></li>
        <li uk-filter-control=".tag-events"><a href="#">Интерактивная карта</a></li>
    </ul>
    <ul class="field-info-filter uk-child-width-1-1 uk-child-width-1-1@m uk-text-center" uk-grid>
        <li class="tag-common">
            <div class="uk-card uk-card-default uk-card-body">Информация по полю</div>
        </li>
        <li class="tag-map">
            <div class="uk-card uk-card-default uk-card-body"><Techcard /></div>
        </li>
        <li class="tag-events">
            <div class="uk-card uk-card-default uk-card-body"><CommonMap2021 /></div>
        </li>
    </ul>
</div>
            <p>Картофель</p>
        </div>
    </li>
</ul>
    </section>
  </div>
</template>

<script>  
import Techcard from '~/components/techcard/Tech.vue';
import CommonMap2021 from '~/components/maps/2021/CommonMap2021.vue';
export default {
  middleware: 'auth',   
  components: {
      Techcard,
      CommonMap2021
  }
}
</script>