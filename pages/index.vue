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

/* line 3, ../sass/_offline-theme-base-indicator.sass */
.offline-ui, .offline-ui *, .offline-ui:before, .offline-ui:after, .offline-ui *:before, .offline-ui *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* line 6, ../sass/_offline-theme-base-indicator.sass */
.offline-ui {
  display: none;
  position: fixed;
  background: white;
  z-index: 2000;
  display: inline-block;
}
/* line 13, ../sass/_offline-theme-base-indicator.sass */
.offline-ui .offline-ui-retry {
  display: none;
}
/* line 16, ../sass/_offline-theme-base-indicator.sass */
.offline-ui.offline-ui-up {
  display: block;
}
/* line 19, ../sass/_offline-theme-base-indicator.sass */
.offline-ui.offline-ui-down {
  display: block;
}

/* line 11, ../sass/offline-theme-slide-indicator.sass */
.offline-ui {
  -webkit-border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  -ms-border-radius: 4px 4px 0 0;
  -o-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
  font-family: "Helvetica Neue", sans-serif;
  padding: 1em;
  max-width: 100%;
  bottom: 0;
  left: 1em;
}
/* line 19, ../sass/offline-theme-slide-indicator.sass */
.offline-ui.offline-ui-up {
  background: #d6e9c6;
  color: #468847;
}
/* line 23, ../sass/offline-theme-slide-indicator.sass */
.offline-ui.offline-ui-down {
  background: #ec8787;
  color: #551313;
}
</style>
