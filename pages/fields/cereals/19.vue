<template>
  <div class="container">
    <section>
      <ul uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Поле №19</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Сюда скоро будет добавлена актуальная информация</p>
            <div uk-filter="target: .field-info-filter">
    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control=".tag-common"><a href="#">Информация по полю</a></li>
        <li uk-filter-control=".tag-map"><a href="#">Карта</a></li>
        <li uk-filter-control=".tag-events"><a href="#">Мероприятия</a></li>
    </ul>
    <ul class="field-info-filter uk-child-width-1-1 uk-child-width-1-1@m uk-text-center" uk-grid>
        <li class="tag-common">
            <div class="uk-card uk-card-default uk-card-body">Информация по полю</div>
        </li>
        <li class="tag-map">
            <div class="uk-card uk-card-default uk-card-body">Карта</div>
        </li>
        <li class="tag-events">
            <div class="uk-card uk-card-default uk-card-body">Мероприятия</div>
        </li>
    </ul>
</div>
        </div>
    </li>
</ul>
    </section>
  </div>
</template>

<style>
.container {
  max-height: 90%;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5%;
}
section {
  width: 100%;
}
div .map_adaptive_container{
    height: 100%;
    max-width: 100%;
}
div .map{
    position: relative;
    text-align: center;
}
</style>