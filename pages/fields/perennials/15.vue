<template>
  <div class="container">
    <section>
      <ul uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Поле №15</a>
        <div class="uk-accordion-content map_adaptive_container">
            <p>Сюда скоро будет добавлена актуальная информация</p>
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