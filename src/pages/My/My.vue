<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key='blog.id' >
        <div class="date">
          <span class="day">{{ blog.createdAt | getDay }}</span>
          <span class="month">{{ blog.createdAt | getMouth }}月</span>
          <span class="year">{{ blog.createdAt | getYear }}</span>
        </div>
        <h3><router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link></h3>
        <p><router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link></p>
        <div class="actions">
          <router-link :to='`/edit/${blog.id}`'>编辑</router-link>
          <a href="#" @click.prevent="onDetele(blog.id)">删除</a>
        </div>
      </div>
    </section>
    <section class="pagination">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      @current-change='ChangePage'>
      </el-pagination>
    </section>
  </div>
</template>

<script>
import blog from '@/api/blog'
import {mapGetters} from 'vuex'

export default {
    name:'My',
  data() {
    return {
      blogs:[],
      page:1,
      total:0,
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  filters:{
    getDay(str){
      if (!str) return ''
      var date = new Date(str)
      return `${date.getDate()}`
    },
    getMouth(str){
      if (!str) return ''
      var date = new Date(str)
      return `${date.getMonth()+1}`
    },
    getYear(str){
      if (!str) return ''
      var date = new Date(str)
      return `${date.getFullYear()}`
    },
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id,{page:this.page})
      .then(res => {
        this.page = res.page
        this.blogs = res.data
        this.total = res.total
      })
  },
  methods:{
    ChangePage(newVal){
      blog.getBlogsByUserId(this.user.id,{page:newVal}).then(res =>{
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path:"/my",query:{page:newVal}})
      })
    },
    async onDetele(blogId){
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      await blog.deleteBlog({blogId})
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id !== blogId)
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
@import "../../assets/base.less";

#my,#user {
  .pagination{
    display: grid;
    justify-items: center;
    margin-bottom: 30px;
  }
  .user-info {
    display: grid;
    grid: auto auto / 80px 1fr;
    
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin-top: 10px;
    }
  }
  a{
    text-decoration: none;
    color: #333;
  }
  .item {
    display: grid;
    grid: auto  auto auto / 80px 1fr;
    margin: 20px 0;

    .date {
      grid-column: 1;
      grid-row: 1 / span 3;
      justify-self: center;
      text-align: center;

      span {
        display: block;
        color: @textLighterColor;
      }

      .day {
        font-size: 40px;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
    }

    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }

    .actions {
      grid-column: 2;
      grid-row: 3;
      font-size: 12px;

      a {
        color: @themeLighterColor;
      }
      
    }

  }

}
</style>
