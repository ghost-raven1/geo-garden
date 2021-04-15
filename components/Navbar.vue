<template>

 <div id="navbarBasicExample" class="navbar-menu" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar; offset: 85" >
    <div v-if="isAuthenticated" class="navbar-end">
        <div class="navbar-item">

        <div class="buttons">
            <nuxt-link class="button is-primary" to="/profile">Мой профиль, {{ loggedInUser.username }}</nuxt-link>
            <hr class="navbar-divider" />
            <button class="button is-light" @click="logout">Выйти</button>
        </div>

        </div>
    </div>

 <div v-if="!isAuthenticated" class="navbar-end">
    <div class="navbar-item">
        <div class="buttons">
            <nuxt-link class="button is-primary" to="/register">Регистрация</nuxt-link>
            <nuxt-link class="button is-light" to="/login">Вход</nuxt-link>
        </div>
    </div>
 </div>
 </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
 computed: {
 ...mapGetters(["isAuthenticated", "loggedInUser"]),
 },
 mounted() {
 // Get all "navbar-burger" elements
 const $navbarBurgers = Array.prototype.slice.call(
 document.querySelectorAll(".navbar-burger"),
 0
 );
 // Check if there are any navbar burgers
 if ($navbarBurgers.length > 0) {
 // Add a click event on each of them
 $navbarBurgers.forEach((el) => {
 el.addEventListener("click", () => {
 // Get the target from the "data-target" attribute
 const target = el.dataset.target;
 const $target = document.getElementById(target);
 // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
 el.classList.toggle("is-active");
 $target.classList.toggle("is-active");
 });
 });
 }
 },
 methods: {
 async logout() {
 await this.$auth.logout()
 }
 }
};
</script>