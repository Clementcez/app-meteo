<template>
    <div>
        <h1>Application Météo</h1>
        <h2>Quel temps fait-il aujourd'hui <span v-if="name">à {{name}}</span> ?</h2>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: ['name']
}
</script>