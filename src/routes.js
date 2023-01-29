import AllBlogs from './components/AllBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'

export default[
    { path:'/',component: AllBlogs },
    { path:'/add', component: AddBlog },
    { path:'/blog/:id', component: SingleBlog }
]