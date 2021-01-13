<template>  
  <client-only>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <a class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary"><span class="uk-margin-small-left">Меню</span></a>
          <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="/">Главная</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/fields"><span class="uk-margin-small-right"></span> Все Поля</a></li>
            <li><a href="/trades"><span class="uk-margin-small-right"></span> Торговые зоны</a></li>
            <li><a href="/buildings"><span class="uk-margin-small-right"></span> Строения</a></li>
            <li><a href="/ponds"><span class="uk-margin-small-right"></span> Пруды</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/about"><span class="uk-margin-small-right"></span> О сервисе</a></li>
        </ul>
    </div>
</div>
<ul class="uk-navbar-nav">
  <li class="uk-active">
    <router-link tag="a" class="navbar-brand" to="/" exact>Веб сервис "Geo Garden" v0.3</router-link>
    </li>
    </ul>
    </div>
    </nav>
  </div>
  </client-only>
</template>

<style>
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #e8e9e8;
}
</style>