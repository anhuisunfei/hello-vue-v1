
<template>
  <el-row>
    <el-col :span="24">
      <PostBody :postId="postId"/>
    </el-col>
    <el-col :span="24">
      <CommentBox :postId="postId"/>
    </el-col>
  </el-row>
</template>



<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
export default {
  name: 'Post',
  components: {
    PostBody: PostBody,
    CommentBox: CommentBox
  },
  computed: {
    postId: function() {
      return this.$route.params.id
    }
  },
  created: function() {
    const postId = this.postId
    this.$store.dispatch({ type: 'loadComments', postId })
  }
}
</script>
<style scoped>
.el-col {
  margin-bottom: 10px;
}
</style>
