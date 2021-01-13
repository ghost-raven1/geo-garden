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
            <p>Сюда скоро будет добавлена актуальная информация</p>
            <a href="/trades/8">подробнее</a>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Зона продажи камней №9</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Сюда скоро будет добавлена актуальная информация</p>
            <a href="/trades/9">подробнее</a>
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