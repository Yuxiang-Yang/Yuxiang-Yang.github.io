<style lang="less" scoped>
  dl {
    color: #606266;

    dt{
      margin-bottom: 10px;
    }
    dd{
      margin: 0 0 20px 20px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin: 0;
    }
  }
  .piece {
    width: 16px;
    height: 16px;
    margin: 4px;
    background-color: #b3d8ff;
    display: inline-block;
    &.complete {
      background-color: #409eff;
    }
  }
</style>

<template>
<div>
  <el-page-header @back="goBack" content="任务详情"></el-page-header>
  <dl v-if="task">
    <dt>任务名称</dt>
    <dd>{{ getFilename(task) }}</dd>
    <dt>任务大小</dt>
    <dd>{{ getFileSize(task) }}</dd>
    <dt>进度</dt>
    <dd>{{ getPercent(task) + '%'}}</dd>
    <dt>下载地址</dt>
    <dd>{{ getURI(task) }}</dd>
    <dt>文件列表</dt>
    <dd>
      <ul>
        <li v-for="file of task.files" :title="file.path" :key="file.path">{{ file.path }}</li>
      </ul>
    </dd>
    <dt>区块信息</dt>
    <dd>
      <span v-for="i of Number(task.numPieces)" :key="i" class="piece" :class="{complete: bitfield[i - 1] == '1'}"></span>
    </dd>
  </dl>
</div>

</template>
<script>
export default {
  name: 'TaskDetail',
  props: ['aria2'],
  data() {
    return {
      task: null,
      bitfield: [],
    }
  },
  created() {
    this.intervalId = setInterval(async () =>{
      try{
        this.updateDetail()
      }catch(e){
        throw e
      }
    }, 1000)
  },
  methods: {
    getFilename(task) {
      if (task.files?.[0].path) {
        return task.files[0].path.split('/').at(-1)
      } else {
        return task.files?.uris?.[0]?.uri.split('/').at(-1) ?? '未知'
      }
    },
    getFileSize(task){
      let size = task.totalLength

      if(size < 1024){
        return size + 'B'
      }
      if(size > 1024 && size < 1024 ** 2){
        return Math.ceil(size / 1024) + 'KB'
      }
      if(size > 1024 ** 2 && size < 1024 ** 3){
        return Math.ceil(size / 1024 ** 2) + 'MB'
      }
      if(size > 1024 ** 3){
        return Math.ceil(size / 1024 ** 3) + 'GB'
      }
    },
    getPercent(task) {
      if (task.completedLength == 0) {
        return 0
      } else {
        return Number((task.completedLength / task.totalLength * 100).toFixed(2))
      }
    },
    getURI(task) {
      return task.files[0].uris[0].uri
    },
    goBack(){
      // window.history.back()
      this.$router.go(-1)
    },
    async updateDetail(){
      try{
        this.task = await this.aria2.tellStatus(this.$route.params.gid)
        this.bitfield = this.task.bitfield.split('').map(it => parseInt(it, 16).toString(2).padStart(4, '0')).join('').split('')
      }catch(e){
        throw e
      }
    },
  }
}
</script>
