<template>
    <div class="menuAncre" id="menuAncre">
        <div id="overFlow">
            <a
                class="lienAncre"
                v-for="(info, index) in infos" 
                :key="info.sys.id"
                v-on:click.prevent="scrollTo(info.sys.id)"
            >
                <p class="titleLienAncre">
                    <span>{{index + 1}}</span>
                    <cite>: {{info.name}} (Maj {{info.dt}})</cite>
                </p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuAncre',

    props: {
        infos: Array
    },

    methods:{
        scrollTo(id){
            const elem = document.getElementById(id)

            window.scroll({
                top: elem.offsetTop + 80,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
    .menuAncre{
        position: fixed;
        bottom: 0;
        left: 3%;
        padding-top: 1rem;
        background: linear-gradient(rgb(201, 235, 245), white);
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
        border: solid 2px grey;
        box-shadow: 0px -5px 13px -7px #000000;
    }

    .menuAncre > div{
        display: flex;
        flex-direction: column;
        min-width: 14rem;
        min-height: 1rem;
        max-height: 800px;
    }

    .lienAncre{
        cursor: pointer;
        margin: 0 1rem 0 1rem;
    }

    .overFlow{
        overflow: auto;
    }

    @media (max-width: 1440px) {
        .menuAncre{
            left: 0;
        }
    }

    @media (max-width: 1200px) {
        .menuAncre{
            min-width: 9rem;
            width: 15%;
        }

        .menuAncre > div{
            min-width: 9rem;
            width: 15%;
        }
    }

    @media (max-width: 1024px) {
        .menuAncre{
            min-width: 9rem;
            width: 9rem;
        }
    }

    @media (max-width: 768px) {
        .menuAncre{
            min-width: 2rem;
            width: 2rem;
            z-index: 1;
            overflow: hidden;
        }

        .lienAncre{
            margin: 10px;
        }

        .titleLienAncre > cite{
            display: none;
        }
    }

    @media (max-width: 768px) {
        .menuAncre > div{
            max-height: 14rem;
            overflow: auto;
        }
    }

</style>