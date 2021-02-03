<template>
  <div class="container">
    <section>
<div class="uk-accordion-content map_adaptive_container">
<h2 class="uk-heading-small uk-heading-line uk-text-center"><span>Интерактивные карты</span></h2>
    <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Выберите год, карту и объект...</p>
    </div>
<!-- Интерактивная карта -->

<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control=".tag-2021"><a href="#">2021</a></li>
        <li uk-filter-control=".tag-2022"><a href="#">2022</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-1 uk-child-width-1-1@m uk-text-center" uk-grid>
        <li class="tag-2021">
            <div class="uk-card uk-card-default uk-card-body">
                <ul uk-accordion="collapsible: true">
                    <CommonMap2021 />
                </ul>
            </div>
        </li>
        <li class="tag-2022">
            <div class="uk-card uk-card-default uk-card-body">Этот год еще не наступил!</div>
        </li>
    </ul>

</div>


</div>
<div class="uk-accordion-content map_adaptive_container">
<h2 class="uk-heading-small uk-heading-line uk-text-center"><span>Фильтры</span></h2>
    <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Выберите фильтр во вкладке, а затем тип объекта.</p>
    </div>            
<!-- Фильтр по полям -->
 <FilterFields2021 />
</div>
    </section>
  </div>
</template>

<script>  
import CommonMap2021 from '~/components/maps/2021/CommonMap2021.vue';
import FilterFields2021 from '~/components/filters/2021/FilterFields2021.vue'
export default {  
  components: {
      CommonMap2021,
      FilterFields2021,
  }
}
</script>

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
    padding-bottom: 5%;
    padding-top: 1%;
}
div .map{
    position: relative;
    text-align: center;
}
svg {
    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 100%;
}
.part {
    opacity: .3;
}
.part:hover {
    transition: opacity .2s ease;
    opacity: .7;
    cursor: pointer;
}
div .filter{
    padding-top: 40px;
}
.uk-card-primary{
    background:rgb(44, 106, 240)
}
</style>