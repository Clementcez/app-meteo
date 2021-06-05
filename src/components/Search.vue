<template>
    <form v-on:submit.prevent="onSubmit">
        <div>
            <label for="recherche">Choisir une ville</label>
            <input id='recherche' type="text" placeholder="Ville">
        </div>
        <button>Rechercher</button>
    </form>
</template>

<script>
export default {
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

</style>