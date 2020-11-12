<template>
    <div class="home">
        <HelloWorld msg="Bienvenue sur mon site" />
        <BookList />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BookList from "@/components/BookList.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        BookList
    }
};
</script>
