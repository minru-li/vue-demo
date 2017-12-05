<template>
<div class="container">

  <div class="home">
    <router-view transition = 'display' transition-mode = 'out-in'></router-view>
  </div>

</div>
</template>
<style>
  .display-transition{
  transition: all 0.5s;
  }
  .display-leave{
  opacity: 0;
  transform: translateX(50px);
  }
  .display-enter{
    opacity: 1;
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  @media screen and (max-width: 1100px){
    .home{
      width: calc(100% - 80px);
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1300px){
    .home{
      width: calc(100% - 240px);
      margin-left: 40px;
    }
    .nav-user li{
        width: 40px;
        height: 30px;
        overflow: hidden;
    }

  }
</style>
<script>
import store from './vuex/store'
import { changeLogin } from './vuex/actions'

export default {
  store,
  data() {
    return {
      show: 'home'
    }
  },
}
</script>
