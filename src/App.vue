<template>
  <div id="app" class>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/vuejs">Vue JS</router-link>|
      <router-link to="/about">About me</router-link>
    </div>
    <router-view />
  </div>
</template>