<template>
    <header>
        <nav>
            <!-- Link fra le pagine -->
            <router-link :to="{ name: 'home' }">HOME</router-link>
            <router-link :to="{ name: 'about' }">ABOUT</router-link>
        </nav>
    </header>
</template>

<script>
// import Header from '../../components/Header.vue'


export default {
  components: { Header },
    name: "Header",

}
</script>

<style scoped>
    
</style>