<template>
  <div class="footer">
      <p>Email: <a href="mailto:chen09869@gmail.com">chen09869@gmail.com</a> | Wechat: ListenIN1900</p>
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
@media (max-width: 768px){
  .footer{height: 80px;}
}
</style>
