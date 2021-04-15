<template>
 <section class="section">
 <div class="container">
 <div class="columns">
 <div class="column">
 <h2 class="title has-text-centered">Регистрация в Geo Garden</h2>

 <Notification v-if="success" type="success" :message="success" />
 <Notification v-if="error" type="danger" :message="error" />

 <form v-if="!success" method="post" @submit.prevent="register">
 <div class="field">
 <label class="label">Имя пользователя</label>
 <div class="control">
 <input
 v-model="username"
 type="text"
 class="input"
 name="username"
 required
 />
 </div>
 </div>
 <div class="field">
 <label class="label">Email</label>
 <div class="control">
 <input
 v-model="email"
 type="email"
 class="input"
 name="email"
 required
 />
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
 required
 />
 </div>
 </div>
 <div class="control">
 <button type="submit" class="button is-dark is-fullwidth">
 Зарегистрироваться
 </button>
 </div>
 </form>

 <div class="has-text-centered" style="margin-top: 20px">
 Уже есть аккаунт? <nuxt-link to="/login">Войти</nuxt-link>
 </div>
 </div>
 </div>
 </div>
 </section>
</template>

<script>
import Notification from "~/components/Notification";

export default {
    middleware: "guest",
 components: {
 Notification,
 },
 data() {
 return {
 username: "",
 email: "",
 password: "",
 success: null,
 error: null,
 };
 },
 methods: {
 async register() {
 this.error = null;
 try {
 this.$axios.setToken(false);
 await this.$axios.post("auth/local/register", {
 username: this.username,
 email: this.email,
 password: this.password,
 });
 this.success = `A confirmation link has been sent to your email account. \
 Please click on the link to complete the registration process.`;
 } catch (e) {
 this.error = e.response.data.message[0].messages[0].message;
 }
 },
 },
};
</script>