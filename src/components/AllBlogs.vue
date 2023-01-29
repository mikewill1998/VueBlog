<template>
    <div v-theme:column="'narrow'" id="all-blogs">
        <h1>All Blog Artical</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-bind:key="blog" v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h3 v-rainbow>{{ blog.title | goUppercase }}</h3>
            </router-link>
            <article>{{ blog.content }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blogs:[],
            search:''
        }
    },
    methods:{

    },
    created(){
        this.$http.get('https://laravue-stack-default-rtdb.firebaseio.com/posts.json').then(function(data){
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
        })
    },
    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);  
            });
        }
    },
    filters:{
        goUppercase(value){
            return value.toUpperCase();
        }
    },
    directives:{
        'rainbow':{
            bind(el){
                el.style.color = "green"
            }
        }
    }
}
</script>

<style scoped>
#all-blogs{
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
input[type="text"]{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>