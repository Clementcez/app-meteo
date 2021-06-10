<template>
    <form v-on:submit.prevent="onSubmit">
        <div v-if="state.recherche">
            <label for="recherche">Choisir une autre ville</label>
            <input v-model="name" id='recherche' type="text" placeholder="Ville">
            <p class="error" v-if="state.error">{{state.error}}</p>
        </div>
        <div v-else>
            <label for="recherche">Choisir une ville</label>
            <input v-model="name" id='recherche' type="text" placeholder="Ville">
            <p class="error" v-if="state.error">{{state.error}}</p>
        </div>
        <button>Rechercher</button>
    </form>
</template>

<script>
export default {
    name: 'Search',

    data(){
        return{
            name: ''
        }
    },

    props: {
        state: Object
    },

    methods: {
        onSubmit(){
            this.name = ""
            this.$emit('myevent')
        }
    }
}
</script>

<style scoped>

form{
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: auto;
    margin-bottom: 2rem;
}

input{
    height: 2rem;
    border-radius: 10px;
    margin-left: 1rem;
}

button{
    font-family: 'Lemonada', cursive, Arial, sans-serif;
    cursor: pointer;
    width: 8rem;
    border-radius: 1rem;
    transition: transform 0.3s ease-in-out;
}

button:hover{
    transform: scale(1.1);
}

.error{
    color: red;
    animation: wiggle 0.3s linear;
}

@keyframes wiggle {
    0%{
        transform: translateX(0);
    }

    10%{
        transform: translateX(30px);
    }

    20%{
        transform: translateX(-30px);
    }

    40%{
        transform: translateX(10px);
    }

    60%{
        transform: translateX(-10px);
    }

    80%{
        transform: translateX(5px);
    }

    90%{
        transform: translateX(-5px);
    }

    100%{
        transform: translateX(0);
    }
}

@media (max-width: 1440px) {
    form{
      width: 90%;
    }
}

@media (max-width: 425px) {
    input{
        margin: unset;
    }
}
</style>