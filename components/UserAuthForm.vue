<template>
  <v-form v-model="valid">
      <v-text-field v-model="userInfo.name"
      label="Имя"
      :rules="[required('name')]"
      v-if="hasName"
    />

    <v-text-field v-model="userInfo.identifier"
        label="Email"
        :rules="[required('identifier'), emailFormat()]"
    />

    <v-text-field v-model="userInfo.password"
        label="Пароль"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        counter=true
        :rules="[required('password'), minLength('password', 8)]"
    />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }} </v-btn>

  </v-form>
</template>

<script>
import validations from "@/utils/validations";
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            userInfo: {
                identifier: '',
                password: ''
            },
            ...validations
        }
    },
    props: ['submitForm', 'buttonText', 'hasName']
}
</script>

<style>

</style>