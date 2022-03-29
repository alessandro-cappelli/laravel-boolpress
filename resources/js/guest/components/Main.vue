<template>
    <div>
        <!-- <div v-for="(post, index) in posts" :key="index">
            <h1>{{post.title}}</h1>
            <p>{{post.content}}</p>
        </div> -->

        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: "Main",
    data() {
        return{
            posts: []
        }
    },
    created(){
        axios
        .get("/api/posts")
        .then((apirisp)=>{
            this.posts = apirisp.data;
        })
    }

}
</script>

<style scoped>
    
</style>