<template>  
  <client-only>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <a class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="menu"> Меню</span></a>
          <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="/"><span class="uk-margin-small-right" uk-icon="home"></span> Главная</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/fields"><span class="uk-margin-small-right" uk-icon="album"></span> Все Поля</a></li>
            <li><a href="/trades"><span class="uk-margin-small-right" uk-icon="album"></span> Торговые зоны</a></li>
            <li><a href="/buildings"><span class="uk-margin-small-right" uk-icon="album"></span> Строения</a></li>
            <li><a href="/ponds"><span class="uk-margin-small-right" uk-icon="album"></span> Пруды</a></li>
            <li><a href="/flowerbeds"><span class="uk-margin-small-right" uk-icon="album"></span> Клумбы</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#tech-card" uk-toggle><span class="uk-margin-small-right" uk-icon="calendar"></span> Обновления</a></li>
            <li><a href="#chat" uk-toggle><span class="uk-margin-small-right" uk-icon="whatsapp"></span> WhatsApp</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/about"><span class="uk-margin-small-right" uk-icon="info"></span> О сервисе</a></li>
        </ul>
    </div>
</div>
<ul class="uk-navbar-nav">
  <li class="uk-active">
    <router-link tag="a" class="navbar-brand" to="/" exact>Веб сервис "Geo Garden" v0.3.5</router-link>
    </li>
</ul>
</div>
  </nav>

  <div id="tech-card" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Подписаться на обновления технической карты</h2>
        </div>
        <div class="uk-modal-body">
            <p>Мы можете подписаться на срочные обновления технической карты в Google календаре, для этого, нажмите на кнопку "Подписаться на обновления".</p>
        </div>
        <div class="uk-modal-footer uk-text-right">
            <form action="https://calendar.google.com/calendar/embed?src=1fmuo6j167ob0l54t5k4hamr9c%40group.calendar.google.com&ctz=Asia%2FKrasnoyarsk">
            <button class="uk-button uk-button-primary" type="submit">Подписаться на обновления</button>
            </form>
        </div>
    </div>
</div>

  <div id="chat" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Присоединиться к чату "Полевой чат"</h2>
        </div>
        <div class="uk-modal-body">
            <p>Мы можете присоединиться к чату "Полевой чат" для обсуждения тем, связанных с полевыми работами, для этого, нажмите на кнопку "Присоединиться к чату".</p>
        </div>
        <div class="uk-modal-footer uk-text-right">
            <form action="https://chat.whatsapp.com/D0YjZMzeySkLbnB6hQW4q3">
            <button class="uk-button uk-button-primary" type="submit">Присоединиться к чату</button>
            </form>
        </div>
    </div>
</div>

  </div>
  </client-only>
</template>

<style>
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #e8e9e8;
}
</style>