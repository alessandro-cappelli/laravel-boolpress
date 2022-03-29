<template>
    <header>
        <nav>
            <!-- Link fra le pagine -->
            <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
            <li><router-link :to="{ name: 'about' }">ABOUT</router-link></li>
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