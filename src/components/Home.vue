<template>
<el-row>
<el-col :span="24" v-for="item in postList" :key="item.id">

<router-link :to="'/post/'+item.id" >

    <el-card>
      <span>{{item.title}}</span>
    </el-card>
</router-link>

</el-col>


</el-row>


</template>

<script>
export default {
  name: 'Home',
  computed:{
    postList:function(){
      return this.$store.state.post.all
    }
  },
  created:function(){
    // this.$store.dispatch({type:'loadPost'})
  }
}
</script>
<style scoped>
.home {
  flex-grow: 1;
  text-align: center;
}
.el-col {
  margin-bottom:20px;
}
</style>
