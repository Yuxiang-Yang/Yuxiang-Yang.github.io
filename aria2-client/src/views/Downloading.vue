<style lang="less" scoped>
  // ul {
  //   list-style: none;
  //   padding: 0;
  //   margin: 30px 0 0 0;
  // }
  // li {
  //   cursor: pointer;
  //   &.selected {
  //     background-color: #ddd;
  //   }
  //   &:hover {
  //     background-color: #eee;
  //   }
  // }
  .toolsbar {
    margin-bottom: 20px;

    .el-input {
      float: right;
      margin-right:20px;
    }
  }
  /deep/.toolsbar .el-button{
    font-size:1em;
  }
  /deep/.toolsbar .el-input{
    width: 30%;
    font-size:1em;
    margin-left: 20px;
    height: 34px;
  }
  /deep/.toolsbar .el-input__inner{
    height: 37px;
  }
  .tasks {
    span{
      margin-right: 30px;
    }
  }
  .more {
    &::before {
      color:#606266;
      font-size: 18px;
      transition: 0.3s;
    }
    &:hover::before{
      color: #409eff;
    }
  }
  
</style>
<template>
  <div class="downloading">
    <div class="toolsbar">
      <el-button type="primary" plain icon="el-icon-video-play" size="small" @click="execSelected('unpause')">开始</el-button>
      <el-button type="primary" plain icon="el-icon-video-pause" size="small" @click="execSelected('pause')">暂停</el-button>
      <el-button type="primary" plain icon="el-icon-delete" size="small" @click="execSelected('remove')">删除</el-button>
      <el-input prefix-icon="el-icon-search" placeholder="请输入任务名称" size="small" type="text" v-model="searchText"/>
    </div>
    <!-- <ul class="tasks">
      <li v-for="task of visibleTasks" :class="{selected: selected.includes(task.gid)}" :key="task.gid" @click="toggleSelect(task)">
        <input type="checkbox" :checked="selected.includes(task.gid)" >
        <span>{{ getFilename(task) }}</span>
        <el-progress :percentage="getPercent(task)"></el-progress>
        <span>{{ getSpeed(task.downloadSpeed) }}k/s</span>
        <span>{{ task.status }}</span>
        <button @click.stop="goDetail(task)">详情</button>
        <router-link @click.native.stop :to="{name: 'TaskDetail', params: {gid: task.gid}}">详情</router-link>
      </li>
    </ul> -->

    <!-- <div>当前排序列：{{ sortColumn.label }} - {{ sortColumn.order }}</div> -->
    <el-table
      ref="taskTable"
      @row-click="clickRow"
      :data="visibleTasks"
      style="width: 100%"
      :row-key="getRowKeys"
      empty-text="暂无进行中任务"
      stripe>
      <el-table-column  width="50px" type="selection" :reserve-selection="true">
        <!-- <template slot-scope="scope">
          <el-checkbox type="checkbox" :checked="selected.includes(scope.row.gid)"></el-checkbox>
        </template> -->
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="80px"
        sortable>
      </el-table-column>
      <el-table-column
        label="名称"
        sortable>
        <template slot-scope="scope">
          <el-popover
            placement="bottom-start"
            title=""
            width="200"
            trigger="hover"
            :content="getFilename(scope.row)">
            <div  slot="reference">{{ getFilename(scope.row) }}</div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="进度"
        width="180px">
        <template slot-scope="scope">
          <el-progress :percentage="getPercent(scope.row)"></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        label="速度"
        width="120px">
        <template slot-scope="scope">
          {{ getSpeed(scope.row.downloadSpeed) }}
        </template>
      </el-table-column>
      <el-table-column label="详情">
        <template slot-scope="scope">
          <router-link @click.native.stop :to="{name: 'TaskDetail', params: {gid: scope.row.gid}}"><i class="more el-icon-more"></i></router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Downloading",
  props: ['aria2'],
  data() {
    return {
      tasks: [],
      // selected: [],
      searchText: '',
      sortColumn: '',
    }
  },
  computed: {
    visibleTasks() {
      if (this.searchText == '') {
        return this.tasks
      } else {
        return this.tasks.filter(it => {
          return it.files[0].path.toLowerCase().includes(this.searchText.toLowerCase())
        })
      }
    },
  },
  watch: {
    aria2() {
      this.tasks = []
      this.updateList()
    }
  },
  created() {
    this.updateList()
    this.aria2.on('DownloadStart', () => {
      this.updateList()
    })
    this.aria2.on('DownloadComplete', () => {
      this.updateList()
    })

    this.intervalId = setInterval(() => {
      try {
        this.updateList()
      } catch(e) {
        if (e == 'WS_CONNECTION_ERROR') {
          clearInterval(this.intervalId)
        } else {
          throw e
        }
      }
    }, 1000)
  },
  methods: {
    // sortChange({ column, prop, order }) {
    //   this.sortColumn = column
    // },
    // goDetail(task) {
    //   this.$router.push('/task/' + task.gid)
    // },
    getRowKeys(row){
      return row.index
    },
    async updateList() {
      try {
        this.tasks = [
          ...await this.aria2.tellActive(),
          ...await this.aria2.tellWaiting(0, 100)
        ]
      } catch(e) {
        this.tasks = []
        throw e
      }
    },
    // 对选中的任务执行某种操作：开始，暂停，删除
    async execSelected(action) {
      if (action == 'remove') {
        try {
          await this.$confirm('确定删除吗?')
        } catch(e) {
          return
        }
      }

      // var selectedTask = this.tasks.filter(task => {
      //   return this.selected.includes(task.gid)
      // })

      let selectedTask = this.$refs.taskTable.selection
      // console.log(selectedTask)

      for (let task of selectedTask) {
        try {
          if (action == 'pause' && task.status == 'paused') {
            continue
          }
          if (action == 'unpause' && task.status == 'active') {
            continue
          }
          await this.aria2[action](task.gid)
        } catch(e) {
          throw e
        }
      }
      this.updateList()
    },
    // selectAll() {
    //   if (this.selected.length == this.tasks.length) {
    //     this.selected = []
    //   } else {
    //     this.selected = this.tasks.map(it => it.gid)
    //   }
    // },
    // toggleSelect(task) {
    //   var idx = this.selected.indexOf(task.gid)

    //   if (idx == -1) {
    //     this.selected.push(task.gid)
    //   } else {
    //     this.selected.splice(idx, 1)
    //   }
    // },
    getFilename(task) {
      if (task.files?.[0].path) {
        return task.files[0].path.split('/').at(-1)
      } else {
        return task.files?.uris?.[0]?.uri.split('/').at(-1) ?? '未知'
      }
    },
    getPercent(task) {
      if (task.completedLength == 0) {
        return 0
      } else {
        return Math.trunc(task.completedLength / task.totalLength * 100)
      }
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
    clickRow(row){
      this.$refs.taskTable.toggleRowSelection(row)
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  components: {

  },
};
</script>
