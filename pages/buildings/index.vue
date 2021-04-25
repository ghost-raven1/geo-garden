<template>
  <div class="container">
    <section>
      <div
        class="uk-alert-primary"
        uk-alert
      >
        <a
          class="uk-alert-close"
          uk-close
        />
        <p>Выберите объект из списка...</p>
      </div>
      <ul uk-accordion>
        <li>
          <a
            class="uk-accordion-title"
            href="#"
          >Строение №5 - Бытовка</a>
          <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь объекта: 48м2</p>
            <a
              class="uk-button uk-button-default"
              href="/buildings/5"
            >подробнее</a>
          </div>
        </li>
        <li>
          <a
            class="uk-accordion-title"
            href="#"
          >Строение №6 - Свинарник</a>
          <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь объекта: 109м2</p>
            <a
              class="uk-button uk-button-default"
              href="/buildings/6"
            >подробнее</a>
          </div>
        </li>
        <li>
          <a
            class="uk-accordion-title"
            href="#"
          >Строение №7 - Теплица</a>
          <div class="uk-accordion-content map_adaptive_container">
            <p>Площадь объекта: 37м2</p>
            <a
              class="uk-button uk-button-default"
              href="/buildings/7"
            >подробнее</a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  middleware: 'auth',
};
</script>
