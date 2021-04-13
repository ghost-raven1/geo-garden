<template>
 <section class="section">
 <div class="container">
 <h2 class="title">Мой профиль</h2>
 <div class="content">
 <p>
 <strong>Имя пользователя:</strong>
 {{ loggedInUser.username }}
 </p>
 <p>
 <strong>Email:</strong>
 {{ loggedInUser.email }}
 </p>
 </div>
 </div>
 </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 middleware: "auth",
 computed: {
 ...mapGetters(["loggedInUser"]),
 },
};
</script>