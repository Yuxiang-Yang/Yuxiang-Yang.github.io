<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    position: relative;
    // z-index: 2;
    height: 100%;
    width: 150px;
    border-right: 1px solid #ebeef5;
    box-shadow: 1px -10px 15px 3px rgba(0, 0, 0, 0.05);
    padding: 10px 0 0 25px;

    a {
      display: block;
      margin-bottom: 24px;
      font-weight: bold;
      color: #b3d8ff;
      text-decoration: none;
      letter-spacing: 1px;
      transition: 0.2s;

      &.router-link-exact-active {
        color: #409eff;
        border-right: 3px solid #409eff;
      }
      &:hover{
        color: #409eff;
      }
    }
    span.status{
      color: #606266;
    }
  }

  .content {
    position: relative;
    z-index: 0;
    width: 100%;
    flex: 1;
    overflow: auto;
    padding: 20px 0 0 30px;
    
    .global-stat { 
      z-index: 0;
      position: fixed;
      bottom: 0px;
      right: 0px;
      height:30px;
      padding: 0 30px 0 0;
      text-align: right;

      i::before{
        color: #409eff;
      }

      span:first-child {
        margin-right: 15px;
      }
    }
  }

  .el-select{
    margin: 10px 0 10px 0;
  }
  .status{
    display: flex;
    align-items: center;
    color:#606266;
    font-size: 14px;
    margin: 0 0 26px 2px;

    i {
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;

      &.success {
      background-color: #52c41a;
      }
      &.fail{
      background-color: #f5222d;
      }
    }
  }
  #nav i {
    margin-right: 5px;
  }
  
</style>
<template>
  <div id="app">
    <div id="nav">
      <el-select size="mini" style="width: 83%" v-model="selectedServer" @change="switchServer" value-key="name">
        <el-option  v-for="(server, idx) of servers" :value="server" :label="server.name || (server.host + ':' + server.port)" :key="idx"></el-option>
      </el-select>
      <div class="status">
        <i class="success" v-if="connectionStatus === '已连接'"></i>
        <i class="fail" v-else></i>
        <span style="margin-left: 5px;">{{ connectionStatus }}</span>
      </div>
      <router-link to="/new"><i class="el-icon-plus"></i>新建下载</router-link>
      <router-link to="/"><i class="el-icon-caret-right"></i>正在下载({{ Number(globalStat.numWaiting) + Number(globalStat.numActive) }})</router-link>
      <router-link to="/completed"><i class="el-icon-check"></i>已完成({{ globalStat.numStopped }})</router-link>
      <router-link to="/settings"><i class="el-icon-s-tools"></i>设置</router-link>
      <router-link to="/servers"><i class="el-icon-s-grid"></i>服务器列表</router-link>
    </div>
    <div class="content">
      <keep-alive>
        <router-view :aria2="aria2" @servers-changed="servers = $event"/>
      </keep-alive>
      <div class="global-stat">
        <span><i class="el-icon-sort-up"></i>{{  getSpeed(globalStat.uploadSpeed)  }}</span>
        <span><i class="el-icon-sort-down"></i>{{  getSpeed(globalStat.downloadSpeed)  }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Aria2Client from './aria2-client.js'

export default {
  data() {
    var servers = JSON.parse(localStorage.getItem('aria2Servers')) || []
    return {
      globalStat: {},
      servers: servers,
      selectedServer: null,
      connectionStatus: '连接中...',
      aria2: null,
    }
  },
  methods: {
    async switchServer() {
      console.log('switch server')
      console.log('关闭现有服务器...')
      this.aria2?.close()

      this.globalStat = {}

      console.log('连接新的服务器...')
      this.connectionStatus = '连接中...'
      var aria2 = new Aria2Client(this.selectedServer)

      this.aria2 = aria2

      try {
        await aria2.ready()
        this.connectionStatus = '已连接'
      } catch(e) {
        this.connectionStatus = '连接失败'
      }
    },
    startIntervalUpdate() {
      this.intervalId = setInterval(async () => {
        try {
          // console.log('-111111')
          this.globalStat = await this.aria2.getGlobalStat()
          // console.log('-22222')
        } catch(e) {
          // console.log('-33333')
          if (e == 'WS_CONNECTION_ERROR') {
            this.$alert('连接失败')
            console.log(this.intervalId)
            clearInterval(this.intervalId)
          } else {
            throw e
          }
        }
      }, 3000)
      console.log('app interval id', this.intervalId)
    },
    getSpeed(speed){
      if(speed < 1024){
        return speed + 'B/s'
      }
      if(speed > 1024 && speed < 1024 ** 2){
        return Math.ceil(speed / 1024) + 'KB/s'
      }
      if(speed > 1024 ** 2 && speed < 1024 ** 3){
        return Math.ceil(speed / 1024 ** 2) + 'MB/s'
      }
      if(speed > 1024 ** 3){
        return Math.ceil(speed / 1024 ** 3) + 'GB/s'
      }
    },
  },
  created() {
    console.log('app created')
    this.selectedServer = this.servers[0]
    this.switchServer()
  },
  async mounted() {

    this.aria2.on('DownloadStart', async task => {
      console.log('有任务开始了', task.gid)
      this.globalStat = await this.aria2.getGlobalStat()
    })
    this.aria2.on('DownloadComplete', async task => {
      console.log('有任务完成了', task.gid)
      this.globalStat = await this.aria2.getGlobalStat()
    })


    try {
      this.globalStat = await this.aria2.getGlobalStat()
      this.startIntervalUpdate()

    } catch(e) {
      if (e == 'WS_CONNECTION_ERROR') {
        this.$alert('连接失败')
      } else {
        throw e
      }
    }
  },
  watch: {
    async aria2() {
      clearInterval(this.intervalId)
      this.globalStat = await this.aria2.getGlobalStat()
      this.startIntervalUpdate()
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>
