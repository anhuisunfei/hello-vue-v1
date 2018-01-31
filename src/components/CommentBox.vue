<template>
  <el-row>
  <el-card class="box-card">
<div slot="header" class="clearfix">
<el-form :inline="true" ref="commentForm" :model="comment" class="demo-form-inline">
<el-form-item label="评论" prop="body" :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }">


    <el-input v-model="comment.body" placeholder="请输入评论"></el-input>
  </el-form-item>

  <el-form-item>
<el-button type="primary" @click="addComment">添加</el-button>

  </el-form-item>
</el-form>

</div>
<div class="text item" v-for="item in commentList" :key="item.id">


  {{item.body}}
</div>

    </el-card>

  </el-row>
</template>

<script>
export default {
  name: 'CommentBox',
  props: ['postId'],

  data: () => ({
    comment: {
      body: ''
    }
  }),
  computed: {
    commentList: function() {
      return this.$store.state.comment.all.slice().reverse()
    }
  },
  methods: {
    addComment: function() {
      this.$refs['commentForm'].validate(valid => {
        if (!valid) return false
        else {
          this.comment.id = this.$store.state.comment.all.length + 1
          let comment = {
            body: this.comment.body,
            postId: this.postId
          }
          // this.comments.push(this.comment)
          // this.$store.commit('addComment', this.comment)
          this.$store.dispatch({
            type: 'addComment',
            comment
          })
          this.comment = { body: '' }
          this.$refs['commentForm'].resetFields()
        }
      })
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-bottom: 10px;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 10px;
  margin: 0 0 10px 0;
  /* border-bottom: 1px solid #ebeef5; */
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
