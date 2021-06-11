<template>
    <div class="menuAncre" id="menuAncre">
        <div id="overFlow">
            <div
                class="lienAncre"
                v-for="(info, index) in infos" 
                :key="info.sys.id"
            >
                <div class="titleLienAncre">
                    <div>
                        <span v-on:click.prevent="scrollTo(info.sys.id)">{{index + 1}}</span>
                        <p 
                            v-on:click.prevent="scrollTo(info.sys.id)" 
                            class="nameCity">: {{info.name}}
                        </p>
                        <cite>(Maj {{info.dt}})</cite>
                    </div>
                    <i v-on:click="deleteData(info.sys.id)" class="fas fa-times-circle delete"></i>
                </div>
            </div>
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
        },

        deleteData(id){
            let infos = this.infos
            for(let info of infos){
                if(info.sys.id === id){
                    infos.splice(infos.indexOf(info), 1)
                }
            }
        }
    }
}
</script>

<style scoped>
    .menuAncre{
        position: fixed;
        bottom: 0;
        left: 1%;
        padding-top: 1rem;
        background: linear-gradient(rgb(201, 235, 245), white);
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
        border: solid 2px grey;
        box-shadow: 0px -5px 13px -7px #000000;
        z-index: 1;
    }

    .menuAncre > div{
        display: flex;
        flex-direction: column;
        min-width: 18rem;
        min-height: 1rem;
        max-height: 800px;
    }

    .lienAncre{
        position: relative;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        margin: 0 10px 0 10px;
    }

    .lienAncre::after{
        position: absolute;
        top: 5px;
        content: '';
        width: 100%;
        height: 80%;
        background: linear-gradient( to right, rgb(80, 212, 252), rgb(201, 235, 245) );
        border: solid 2px grey;
        box-shadow: 0px 5px 13px -7px #000000;
        border-radius: 50px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .lienAncre:hover.lienAncre::after{
        opacity: 1;
    }

    .titleLienAncre{
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }

    .titleLienAncre > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 10px 0 10px;
    }

    .titleLienAncre > div > cite{
        font-size: 12px;
    }

    .nameCity{
        max-width: 110px;
        margin: 10px 0 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
    }

    .overFlow{
        overflow: auto;
    }

    .delete{
        margin: 1rem;
        cursor: pointer;
        color: rgb(255, 87, 87);
        z-index: 1;
    }

    @media (max-width: 1440px) {

        .menuAncre{
            min-width: 11rem;
            width: 20%;
            left: 0;
        }

        .menuAncre > div{
            min-width: 11rem;
        }

        .delete{
            margin: 10px;
        }
    }

    @media (max-width: 1200px) {
        .lienAncre{
            margin: unset;
        }

        .menuAncre{
            min-width: 9rem;
            width: 15%;
        }

        .menuAncre > div{
            min-width: 9rem;
            width: 95%;
        }

        .titleLienAncre > div > cite{
            display: none;
        }

        .nameCity[data-v-df4ac92c] {
            max-width: 90px;
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
            overflow: hidden;
        }

        .lienAncre{
            margin: 10px 0 10px 0;
        }

        .lienAncre::after{
            display: none;
        }

        .titleLienAncre{
            width: auto;
            display: flex;
            flex-direction: column;
        }

        .titleLienAncre > div > cite{
            display: none;
        }

        .nameCity{
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