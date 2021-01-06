<template>  
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <router-link tag="a" class="navbar-brand" to="/" exact>Веб сервис "Geo Garden" Demo v0.1</router-link>
              </li>
              <li>
                <router-link tag="a" class="navbar-brand" to="/about" exact>О сервисе</router-link>
              </li>
            </ul>
        </div>
    </nav>
  </client-only>
</template>