<template>
    <form v-on:submit.prevent="onSubmit">
        <div v-if="state.recherche">
            <label for="recherche">Choisir une autre ville</label>
            <input id='recherche' type="text" placeholder="Ville">
            <p class="error" v-if="state.error">{{state.error}}</p>
        </div>
        <div v-else>
            <label for="recherche">Choisir une ville</label>
            <input id='recherche' type="text" placeholder="Ville">
            <p class="error" v-if="state.error">{{state.error}}</p>
        </div>
        <button>Rechercher</button>
    </form>
</template>

<script>
export default {
    name: 'Search',
    props: {
        state: Object
    },

    methods: {
        onSubmit(){
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
    cursor: pointer;
    width: 8rem;
    height: 2rem;
    border-radius: 1rem;
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
</style>