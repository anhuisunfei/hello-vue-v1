<template>
<el-row >



<el-card v-if="post">

    <h1>{{post.title}}</h1>
      <div class="item">
        <el-badge :value="commentCount" >
            <el-button size="small">评论</el-button>
        </el-badge>
      </div>

    </el-card>

  </el-row>


</template>

<script>
export default {
  name: 'PostBody',
  props: ['postId'],
  computed: {
    loading() {
      return this.post
    },

    commentCount() {
      return this.$store.state.comment.all.length
    },
    post() {
 console.log(this.$store.state.post.all)

      return this.$store.state.post.all.find(t => t.id === this.postId)
    }
  }
}
</script>
<style scoped>
.el-card {
  position: relative;
  padding: 20px;
}
.item {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.el-badge__content.is-fixed {
  top: 11px;
}
.loading {
  width: 100%;
  height: 100%;
}
</style>
