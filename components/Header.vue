<template>  
  <client-only>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="/"><span class="uk-margin-small-right"></span> Главная</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/fields"><span class="uk-margin-small-right"></span> Все Поля</a></li>
            <li><a href="/trades"><span class="uk-margin-small-right"></span> Торговые зоны</a></li>
            <li><a href="/buildings"><span class="uk-margin-small-right"></span> Строения</a></li>
            <li><a href="/ponds"><span class="uk-margin-small-right"></span> Пруды</a></li>
            <li><a href="/flowerbeds"><span class="uk-margin-small-right"></span> Клумбы</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#tech-card" uk-toggle><span class="uk-margin-small-right"></span> Обновления</a></li>
            <li><a href="#chat" uk-toggle><span class="uk-margin-small-right"></span> WhatsApp</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/about"><span class="uk-margin-small-right"></span> О сервисе</a></li>
        </ul>
    </div>
</div>
<ul class="uk-navbar-nav">
    <a class="uk-button uk-button-default uk-margin-small-right button-menu" type="button" uk-toggle="target: #offcanvas-nav-primary"><span class="uk-margin-small-left uk-margin-small-right">Меню</span></a>
  <li class="uk-active site-name">
    <a class="navbar-brand" href="/" exact>Веб сервис "Geo Garden" v0.4.0</a>
    </li>
</ul>
</div>
<div class="weather-widget" id="ml_d752456a">
    <div style="padding:0; margin: 0px 0px 0px 100px;" id="ml_d752456a_i" v='1.1' a='{"t":"g7bs","lang":"ru","ids":["959"],"a_br_c":"rgba(232,233,232,1)","a_bg":"rgba(232,233,232,1)","a_c":"#000000","a_c_c":"black","p_cr":2,"a_t_mr_lf":10,"a_h":80,"a_ic_sz":20,"a_ic_mr_lf":10,"a_b_w":180}'>
</div>
    <div id="ml_d752456a_c" style="padding:0; margin: 0px 0px 0px 100px;padding:7px 5px;">
        <img src="https://meteolabs.ru/assets/img/logo_z_b.svg" style="width:15px;opacity:0.7;margin-right:5px;position:relative;top:50%;transform:translateY(-6px);vertical-align:top;display:inline-block;">
        <a href="https://meteolabs.ru/" style=";padding:0;margin: 0px 0px 0px 100px;color:inherit;text-decoration:none;display:inline-block;box-sizing: border-box;padding:0 5px;font-size:14px;line-height:14px;position:relative;top:50%;transform:translateY(-7px);vertical-align:top;" target="_blank" id="ml_d752456a_u">
        Погода в Томске
        </a>
    </div>
</div>
<script async src="https://app.meteolabs.ru/js/?id=ml_d752456a"></script>
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
.weather-widget {
    display: grid;
}
.button-menu{
    padding: 16px 25px;
}

.site-name{
    flex-shrink: 0;
    padding-right: 150px;
}
</style>