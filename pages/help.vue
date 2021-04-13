<template>
  <div class="container">

        <ul uk-accordion="collapsible: false">

    <li>
        <a class="uk-accordion-title" href="#">Видеоинструкция по использованию сервиса Geo Garden</a>
        <div class="uk-accordion-content map_adaptive_container">
            <div><iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/jnodFh7JzPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

        </div>
    </li>
            </ul>
        </div>
</template>

<script>
export default {
middleware: 'auth',
  components: { 
  }
}
</script>
