<template>
  <div class="container">
    <section class="container_form">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered">
            Вход в Geo Garden
          </h2>

          <Notification
            v-if="error"
            type="danger"
            :message="error"
          />

          <form
            method="post"
            @submit.prevent="login"
          >
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input"
                  name="email"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Пароль</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  name="password"
                >
              </div>
            </div>
            <div class="control">
              <button
                type="submit"
                class="button is-dark"
              >
                Войти
              </button>
            </div>
          </form>
          <div style="margin-top: 20px">
            <p>
              Нет аккаунта?
              <nuxt-link to="/register">
                Регистрация
              </nuxt-link>
            </p>
            <!-- <p>
 <nuxt-link to="/forgot-password">Забыли пароль?</nuxt-link>
 </p> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Notification from '~/components/Notification.vue';

export default {
  components: {
    Notification,
  },
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>
