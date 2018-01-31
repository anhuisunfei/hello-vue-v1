<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="logo">
          <router-link to="/">
               Vue & Vuex
          </router-link>

        </div>
      </el-header>
      <el-main>
      <router-view/>
      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function() {
    this.$store.dispatch({ type: 'loadPost' })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration-line: none;
  color: #fff;
}
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.el-main {
  display: flex;
  flex-direction: column;
}
.el-header {
  background-color: #242f42;
  display: flex;
  line-height: 60px;
  font-size: 22px;
  position: relative;
  box-sizing: border-box;
  height: 60px;
}
.el-header .logo {
  width: 200px;
  text-align: center;
  color: #fff;
  justify-content: center;
}
</style>
