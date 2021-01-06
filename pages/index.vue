<template>
  <div class="container">
    <section>
            <div class="uk-alert-primary" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Выберите категорию объектов из списка...</p>
</div>
      <ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Все объекты</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aae9dee25d884301e3f64fb47cd3b6321ca975b30ca190fcfe228916e37a80517&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Свободные поля</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A502aa65da0f13382721b2436105dfcaafb752df0ad91fc997d9b39138fa28145&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Строения</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8f7ab6be615d23557f3e573e645d161fc0dc48a468044e6ac80b7d9bc5e70664&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Пруды</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A10c7d7cef47c4d582df9f5225b59c8b1606a626d14cc252f8385378f92856683&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Торговые зоны</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae67c914a54abdf72cf9ef9ba38a9d42b16c2372071b4c9e2ea38094287ccd28b&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Поля</a>
        <div class="uk-accordion-content map_adaptive_container">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39d1d97bf248f025495cfa96a9ebb77576d5cf5de82844079794bc7f254d4cad&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
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
</style>
