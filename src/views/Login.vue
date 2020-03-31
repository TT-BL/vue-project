<template>
  <div class="login">
    <div>
      <div class="username">
        <input type="text" placeholder="请输入用户名" v-model='username'/>
      </div>
      <div class="password">
        <input type="text" placeholder="请输入密码" v-model='password'/>
      </div>
      <div :class="{completed:true,current:username&&password}" @click='login'>登录</div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import {login, location} from '../api/index'
export default {
  data(){
    return{
      username:null,
      password:null
    }
  },
  methods:{
    login(){
      if(!this.username){
       Toast('用户名不能为空')
         return 
      }
      if(!this.password)
      {
        Toast('密码不能为空');
        return
      }
      login({username:this.username,password:this.password}).then(response=>{
        if(response.data.status===200){
          localStorage.setItem('mt-username',this.username)
         Toast('登录成功');
          this.$router.back()
        }
        else{
          this.$message.error(response.data.message);
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: #fff;
  display: flex;
  .div_style {
    height: 49px;
    border-bottom: 1px solid #e5e5e5;
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      text-indent: 5px;
      &::placeholder{
          color:#c5c5c5;
      }
    }
  }
  & > div {
    margin-top:-30px;
    align-self: center;
    flex: 1 0 auto;
    padding: 10px;
    .username {
      .div_style();
    }
    .password {
      .div_style();
    }
    .completed{
        height:40px;
        border-radius: 10px;
        background: #e5e5e5;
        color:#999;
        text-align: center;
        line-height:40px;
        margin-top:30px;
    }
    .current{
      background: orange;
      color:#fff;
    }
  }
}
</style>