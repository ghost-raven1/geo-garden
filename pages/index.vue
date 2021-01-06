<template>
  <div class="container">
    <section>
            <div class="uk-alert-primary" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Выберите категорию объектов из списка...</p>
</div>
      <ul uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Все объекты</a>
        <div class="uk-accordion-content">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aae9dee25d884301e3f64fb47cd3b6321ca975b30ca190fcfe228916e37a80517&amp;width=600&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Свободные поля</a>
        <div class="uk-accordion-content">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A502aa65da0f13382721b2436105dfcaafb752df0ad91fc997d9b39138fa28145&amp;width=665&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Item 3</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
    </section>
  </div>
</template>

<style>
.container {
  min-height: 53.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
