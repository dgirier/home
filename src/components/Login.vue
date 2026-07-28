<template>
    <div id="login-component">
        <div id="login-icon" class="h2 mb-0">
            <i v-if="user" class="bi bi-person-fill text-light"></i>
            <i v-else class="bi bi-person text-light"></i>
        </div>
        <b-popover target="login-icon" triggers="hover" placement="bottom" title="Utilisateur">
            <div class="h5 mb-0" v-if="user">
                {{user.name}}
                <b-button variant="outline-danger" pill class="mb-0" size="sm" @click="handleLogout">
                    <i class="bi bi-power"></i>
                </b-button>
            </div>
            <b-button v-else @click="showModal = true">Connectez-vous</b-button>
        </b-popover>
        <b-modal v-model="showModal" id="login-modal" title="Login" @ok="handleOk">
            <b-form ref="form" @submit="handleSubmit">
                <b-form-input
                    id="login-name"
                    v-model="name"
                    placeholder="Adresse email"
                    required
                    autocomplete
                    autofocus
                    invalid-feedback="Adresse requise"
                ></b-form-input>
                <b-form-input
                    id="login-pwd"
                    v-model="pwd"
                    placeholder="Mot de passe"
                    required
                    autocomplete
                    type="password"
                    autofocus
                ></b-form-input>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    props: {
        user: {}
    },
    data() {
        return {
            showModal: false,
            name: "",
            pwd: ""
        };
    },
    methods: {
        validate() {
            return this.$refs.form.$el.checkValidity();
        },
        handleOk(modalEvt) {
            modalEvt.preventDefault();
            this.handleSubmit();
        },
        handleSubmit() {
            if (!this.validate()) {
                return;
            }
            this.$emit("log-in", { name: this.name, pwd: this.pwd });
            this.$nextTick(() => {
                this.showModal = false;
            });
        },
        handleLogout() {
            this.$emit("log-out");
        }
    }
};
</script>
