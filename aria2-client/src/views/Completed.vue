<template>
  <div class="completed">
    <el-table
      :data="tasks"
      style="width: 100%"
      empty-text="暂无已完成任务"
      stripe>
      <el-table-column
        label="名称"
        sortable>
        <template slot-scope="scope">
          {{getFilename(scope.row.files[0].path)}}
        </template>
      </el-table-column>
      <el-table-column
        label="进度"
        sortable>
        <template slot-scope="scope">
          <el-progress :percentage="getPercent(scope.row)"></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Completed',
  props: ['aria2'],
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    getFilename(path) {
      return path.split('/').at(-1)
    },
    getPercent(task) {
      if (task.completedLength == 0) {
        return 0
      } else {
        return Number((task.completedLength / task.totalLength * 100).toFixed(2))
      }
    },
  },
  async created() {
    this.tasks = await this.aria2.tellStopped(0, 1000)
    this.intervalId = setInterval(async () => {
      this.tasks = await this.aria2.tellStopped(0, 1000)
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
}
</script>
