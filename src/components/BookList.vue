<template>
    <b-list-group>
        <b-list-group-item v-for="book in books" :key="book.id">
            <b-img thumbnail fluid width="100px" :src="book.src"></b-img>
            {{ book.title }}
        </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
    name: "BookList",
    data: function() {
        return {
            books: [
                {
                    id: 1,
                    src: "assets/l-etoile-noire.jpg",
                    title: "L'étoile Noire"
                },
                {
                    id: 2,
                    src: "assets/Le-quatrieme-pouvoir.jpg",
                    title: "Le quatrième pouvoir"
                },
                {
                    id: 3,
                    src: "assets/mutante.jpg",
                    title: "Mutante"
                }
            ]
        };
    }
};
</script>

<style></style>
