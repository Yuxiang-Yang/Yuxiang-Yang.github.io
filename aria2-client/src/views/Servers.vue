<style scoped>
  li{
    list-style-type: none;
  }
  .el-button {
    font-size:1em;
  }
  i::before{
    margin-right: 6px;
    margin-left:-3px;
  }
</style>
<template>
  <div>
    <el-button type="primary" plain size="small" @click="dialogFormVisible = true; editIndex = -1"><i class="el-icon-plus"></i>添加</el-button>

    <el-dialog title="添加服务器" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>

      <el-form :model="newServer">
        <el-form-item label="Name" label-width="80px">
          <el-input v-model="newServer.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Host" label-width="80px">
          <el-input v-model="newServer.host" :min="1" :max="65535"></el-input>
        </el-form-item>
        <el-form-item label="Port" label-width="80px">
          <el-input-number v-model="newServer.port" auto-complete="off"></el-input-number>
        </el-form-item>
        <el-form-item label="Secret" label-width="80px">
          <el-input type="password" show-password v-model="newServer.secret" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false; addServer()">确 定</el-button>
      </div>
    </el-dialog>

    <el-table stripe :data="servers" empty-text="暂无服务器">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="host" label="IP"></el-table-column>
      <el-table-column prop="port" label="端口"></el-table-column>
      <!-- Name: {{ server.name }}
        Host: {{ server.host }}
        Port: {{ server.port}}
        Secret: <el-input style="width:25%;margin-right:10px;" size="small" type="password" :value="server.secret"></el-input> -->
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="small" @click="removeServer(scope.$index)">删除</el-button>
          <el-button size="small" @click="editServer(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    var servers = JSON.parse(localStorage.getItem('aria2Servers')) || []
    return {
      servers: servers,
      dialogFormVisible: false,
      editIndex: -1, // 当前正在编辑的服务器下标，如果是-1表示添加
      newServer: {
        name: '',
        host: '127.0.0.1',
        port: 6800,
        secret: '',
      }
    }
  },
  watch: {
    servers(servers) {
      console.log(servers)
      console.log('servers changed....')
      localStorage.setItem('aria2Servers', JSON.stringify(servers))
      this.$emit('servers-changed', this.servers)
    },
  },
  methods: {
    async removeServer(idx) {
      try {
        await this.$confirm('确定要删除吗？')
        this.servers.splice(idx, 1)
      } catch(e) {
        if (e == 'cancel') {

        } else {
          throw e
        }
      }
    },
    editServer(idx) {
      this.editIndex = idx
      var targetServer = this.servers[idx]

      Object.assign(this.newServer, targetServer)

      this.dialogFormVisible = true
    },
    addServer() {
      if (this.editIndex == -1) { // 添加服务器
        this.servers.push(this.newServer)
        this.newServer = {
          host: '127.0.0.1',
          port: 6800,
          secret: '',
        }
      } else { // 修改现存的服务器
        console.log('changed server')
        // this.servers[this.editIndex] = this.newServer

        this.servers.splice(this.editIndex, 1, this.newServer)
        // Vue.set(this.servers, this.editIndex, this.newServer)


        this.newServer = {
          host: '127.0.0.1',
          port: 6800,
          secret: '',
        }
      }
    }
  },
}
</script>
