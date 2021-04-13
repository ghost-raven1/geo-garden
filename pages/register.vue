<template>
<div>

Регистрация

<UserAuthForm buttonText="Регистрация" :submitForm="registerUser" hasName="true"/>

</div>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm"
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    registerUser(registrationinfo) {
      alert('Вы нажали на кнопку')
    }
  }

}
</script>