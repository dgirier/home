<template>
    <b-container id="spa" fluid>
        <b-navbar data-bs-theme="dark" fixed="fixed" variant="dark">
            <b-navbar-brand>dgirier.github.io</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/" exact exact-active-class="active">Accueil</b-nav-item>|
                    <b-nav-item to="/vuejs" exact exact-active-class="active">Vue JS</b-nav-item>|
                    <b-nav-item to="/about" exact exact-active-class="active">à propos</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ms-auto">
                    <LoginBtn :user="user" @log-in="login" @log-out="logout" />
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view />
    </b-container>
</template>

<script>
import LoginBtn from "./components/Login.vue";

export default {
    components: {
        LoginBtn
    },
    data() {
        return {
            user: null
        };
    },
    methods: {
        login(user) {
            this.user = user;
        },
        logout() {
            this.user = null;
        }
    }
};
</script>
