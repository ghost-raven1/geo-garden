<template>
  <client-only>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav
        class="uk-navbar-container"
        uk-navbar
        style="position: relative; z-index: 980;"
      >
        <div class="uk-navbar-left">
          <div
            id="offcanvas-nav-primary"
            uk-offcanvas="overlay: true"
          >
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
              <ul
                class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"
              >
                <li class="uk-active">
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/"
                  >
                    Главная
                  </nuxt-link>
                </li>
                <li class="uk-nav-divider" />
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/fields"
                  >
                    <span class="material-icons md-36">place</span> Все Поля
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/trades"
                  >
                    <span class="material-icons md-36">place</span> Торговые зоны
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/buildings"
                  >
                    <span class="material-icons md-36">place</span> Строения
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/ponds"
                  >
                    <span class="material-icons md-36">place</span> Пруды
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/fields/flowerbeds"
                  >
                    <span class="material-icons md-36">place</span> Клумбы
                  </nuxt-link>
                </li>
                <li class="uk-nav-divider" />
                <li>
                  <a
                    class="uk-margin-small-right"
                    href="#tech-card"
                    uk-toggle
                  ><span class="material-icons md-36">event</span> Обновления</a>
                </li>
                <li>
                  <a
                    class="uk-margin-small-right"
                    href="#chat"
                    uk-toggle
                  ><span class="material-icons md-36">group_add</span> WhatsApp</a>
                </li>
                <li to="uk-nav-divider" />
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/about"
                  >
                    <span class="material-icons md-36">info</span> О сервисе
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/help"
                  >
                    <span class="material-icons md-36">help_outline</span> Помощь
                  </nuxt-link>
                </li>
                <li class="uk-nav-divider" />
                <li>
                  <a
                    class="uk-margin-small-right"
                    href="https://geo-garden-backend.herokuapp.com/admin"
                  ><span class="material-icons md-36">dashboard</span> Админпанель</a>
                </li>
                <li>
                  <a
                    class="uk-margin-small-right"
                    href="http://garden-group.pro/internet-magazine"
                  ><span class="material-icons md-36">nature_people</span> Магазин</a>
                </li>
                <li>
                  <a
                    class="uk-margin-small-right"
                    href="http://garden-group.pro/tomsk"
                  ><span class="material-icons md-36">nature_people</span> Garden Group</a>
                </li>
                <li class="uk-nav-divider" />
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/profile"
                  >
                    <span class="material-icons md-36">account_circle</span> Мой профиль
                  </nuxt-link>
                </li>
                <li>
                  <a
                    class="uk-margin-small-right"
                    @click="logout"
                  > Выйти</a>
                </li>
              </ul>
            <!-- <ul
                v-if="!isAuthenticated"
                class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"
              >
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/register"
                  >
                    <span class="material-icons md-36">flash_on</span> Регистрация
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="uk-margin-small-right"
                    to="/login"
                  >
                    <span class="material-icons md-36">email</span> Вход
                  </nuxt-link>
                </li>
              </ul> -->
            </div>
          </div>
          <ul class="uk-navbar-nav">
            <a
              class="uk-button uk-button-default"
              type="button"
              uk-toggle="target: #offcanvas-nav-primary"
            >
              <div
                class="container_burger"
                onclick="burgerMenu(this)"
              >
                <div class="b1" />
                <div class="b2" />
                <div class="b3" />
              </div>
            </a>
            <li class="uk-active site-name">
              <a
                class="navbar-brand"
                href="/"
                exact
              >Geo Garden v0.4.6</a>
            </li>
          </ul>
        </div>
        <div
          id="ml_d752456a"
          class="weather-widget"
        >
          <div
            id="ml_d752456a_i"
            style="padding:0; margin: 0px 0px 0px 100px;"
            v="1.1"
            a="{&quot;t&quot;:&quot;g7bs&quot;,&quot;lang&quot;:&quot;ru&quot;,&quot;ids&quot;:[&quot;959&quot;],&quot;a_br_c&quot;:&quot;rgba(232,233,232,1)&quot;,&quot;a_bg&quot;:&quot;rgba(232,233,232,1)&quot;,&quot;a_c&quot;:&quot;#000000&quot;,&quot;a_c_c&quot;:&quot;black&quot;,&quot;p_cr&quot;:2,&quot;a_t_mr_lf&quot;:10,&quot;a_h&quot;:80,&quot;a_ic_sz&quot;:20,&quot;a_ic_mr_lf&quot;:10,&quot;a_b_w&quot;:180}"
          />
          <div
            id="ml_d752456a_c"
            style="padding:0; margin: 0px 0px 0px 100px;padding:7px 5px;"
          >
            <img
              src="https://meteolabs.ru/assets/img/logo_z_b.svg"
              style="width:15px;opacity:0.7;margin-right:5px;position:relative;top:50%;transform:translateY(-6px);vertical-align:top;display:inline-block;"
            >
            <a
              id="ml_d752456a_u"
              href="https://meteolabs.ru/"
              style=";padding:0;margin: 0px 0px 0px 100px;color:inherit;text-decoration:none;display:inline-block;box-sizing: border-box;padding:0 5px;font-size:14px;line-height:14px;position:relative;top:50%;transform:translateY(-7px);vertical-align:top;"
              target="_blank"
            >
              Погода в Томске
            </a>
          </div>
        </div>
        <script
          async
          src="https://app.meteolabs.ru/js/?id=ml_d752456a"
        />
      </nav>

      <div
        id="tech-card"
        uk-modal
      >
        <div class="uk-modal-dialog">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          />
          <div class="uk-modal-header">
            <h2 class="uk-modal-title">
              Подписаться на обновления технической карты
            </h2>
          </div>
          <div class="uk-modal-body">
            <p>Мы можете подписаться на срочные обновления технической карты в Google календаре, для этого, нажмите на кнопку "Подписаться на обновления".</p>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <form action="https://calendar.google.com/calendar/embed?src=1fmuo6j167ob0l54t5k4hamr9c%40group.calendar.google.com&ctz=Asia%2FKrasnoyarsk">
              <button
                class="uk-button uk-button-primary"
                type="submit"
              >
                Подписаться на обновления
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        id="chat"
        uk-modal
      >
        <div class="uk-modal-dialog">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          />
          <div class="uk-modal-header">
            <h2 class="uk-modal-title">
              Присоединиться к чату "Полевой чат"
            </h2>
          </div>
          <div class="uk-modal-body">
            <p>Мы можете присоединиться к чату "Полевой чат" для обсуждения тем, связанных с полевыми работами, для этого, нажмите на кнопку "Присоединиться к чату".</p>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <form action="https://chat.whatsapp.com/D0YjZMzeySkLbnB6hQW4q3">
              <button
                class="uk-button uk-button-primary"
                type="submit"
              >
                Присоединиться к чату
              </button>
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

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    username() {
      return this.$store.getters['auth/username'];
    },
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: 'auth/logout',
    }),
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
