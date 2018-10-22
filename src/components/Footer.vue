<template>
  <div class="footer">
      <p><a href="mailto:chen09869@gmail.com">Email</a> | <a href="https://www.zhihu.com/people/chen-jun-kun/activities">Blog</a> | <a href="https://github.com/no1harm/blog-client">GitHub</a></p>
  </div>
</template>

<script>
export default {
    name:'Footer',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
@import "../assets/base.less";  
.footer {
  align-self: end;
  background-color: #d7d7d7;
  color: #666;
  font-size: 13px;
  padding: 10px;
  text-align: center;
}
a {
  text-decoration: none;
  color: #666;
}
a:hover{
  color:@bgColor;
}
@media (max-width: 768px){
  .footer{height: 80px;}
}
</style>
