<template>
 <div class="container">
      <section class="container_form">
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
  </section>
 </div>
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