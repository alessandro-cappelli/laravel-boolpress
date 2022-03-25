<template>
    <div>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                {{post.title}}
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: "Main",
    data() {
        return{
            posts: [

            ]
        }
    },
    created(){
        axios
        .get("/app/posts")
        .then((apirisp)=>{
            this.posts = apirisp.data;
        })
    }

}
</script>

<style scoped>
    
</style>