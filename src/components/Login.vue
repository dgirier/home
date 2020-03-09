<template>
    <div id="login-component">
        <!-- une icone "person" et une fenetre de login -->
        <div id="login-icon" class="h2 mb-0">
            <b-icon-person-fill v-if="user" variant="light"></b-icon-person-fill>
            <b-icon-person v-else variant="light"></b-icon-person>
        </div>
        <b-popover target="login-icon" triggers="hover" placement="bottom" title="Utilisateur">
            <div v-if="user">{{user.name}}</div>
            <b-btn v-else v-b-modal.login-modal>Connectez-vous</b-btn>
        </b-popover>
        <b-modal id="login-modal" title="Login" @ok="handleOk">
            <b-form ref="form" @submit="handleSubmit" >
                <b-input
                    id="login-name"
                    v-model="name"
                    placeholder="Adresse email"
                    required
                    autocomplete
                    autofocus
                    invalid-feedback="Adresse requise"
                ></b-input>
                <b-input
                    id="login-pwd"
                    v-model="pwd"
                    placeholder="Mot de passe"
                    required
                    autocomplete
                    type="password"
                    autofocus
                ></b-input>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { BIconPerson, BIconPersonFill } from "bootstrap-vue";

export default {
    name: "LoginComponent",
    components: {
        BIconPerson,
        BIconPersonFill
    },
    props: {
        user: {}
    },
    data() {
        return {
            name: '',
            pwd: ''
        };
    },
    methods: {
        validate() {
            return this.$refs.form.checkValidity();
        },
        // Bouton ok : ne pas fermer et laisser submit faire
        handleOk(modalEvt) {
            modalEvt.preventDefault();
            this.handleSubmit();
        },
        // Valide le login
        handleSubmit() {
            if (!this.validate()) {
                return;
            }
            this.$emit("log-in", { name: this.name, pwd: this.pwd });
            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide("login-modal");
            });
        }
    }
};
</script>