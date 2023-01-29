<template>
    <div id="add-blog">
        <h2>Add New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog title:</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <br>
            <div id="category">
                <strong>Choose Category</strong>
                <br>
                <label>New Fashion</label>
                <input type="checkbox" value="fashion" v-model="blog.categories">
                <label>Life Style</label>
                <input type="checkbox" value="life" v-model="blog.categories">
                <label>Fun News</label>
                <input type="checkbox" value="fun" v-model="blog.categories">
                <label>Tech Report</label>
                <input type="checkbox" value="tech" v-model="blog.categories">
            </div>
            <div id="availability">
                <strong>
                    <label>Choose availability</label>
                </strong>
                <select v-model="blog.chosen_avail">
                    <option v-bind:key="avail" v-for="avail in avails">{{ avail }}</option>
                </select>
            </div>
            <br>
            <button class="btn btn-primary" v-on:click.prevent="addblog">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Successfully added your blog!</h3>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <ul>
                <li v-bind:key="category" v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Availibility: {{ blog.chosen_avail }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blog:{
                title:"",
                content:"",
                categories:[],
                chosen_avail:""
            },
            avails:['Public', 'Only Friends'],
            submitted:false
        }
    },
    methods:{
        addblog: function(){
            this.$http.post('https://laravue-stack-default-rtdb.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            })
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#category input{
    display: inline-block;
    margin: 10px;
}
#category label{
    display: inline-block;
}
</style>