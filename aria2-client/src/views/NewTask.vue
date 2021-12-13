<style scoped>
  .el-button {
    font-size: 1em;
    margin-right: 10px;
  }
  .toolsbar {
    margin-bottom: 10px;
  }
  
</style>
<template>
  <div>
    <div class="toolsbar">
      <input type="file" accept=".torrent" hidden multiple @change="parseBtFile" id="bt-file-select">
      <el-button size="small" type="primary" plain><label for="bt-file-select">BT种子</label></el-button>
      <input type="file" hidden id="meta-file-select">
      <el-button size="small" type="primary" plain><label for="meta-file-select">Metalink</label></el-button>
    </div>
    <div class="files">
      <div v-if="type == 'bt'">
        <div>请选择要下载的文件（Ctrl键多选）：</div>
        <select multiple v-model="selectedBtFile">
          <option v-for="(file, idx) of btInfo.files" :value="idx + 1" :key="idx">{{file.name}}</option>
        </select>
        <el-button @click="startBtDownload">开始下载</el-button>
      </div>

      <div v-if="type == 'url'">
        <div style="margin-bottom:10px;">
          <el-input style="width:600px" resize="none" type="textarea" v-model="uris" cols="50" rows="8"></el-input>
        </div>
        <el-button size="small" @click="start">确定</el-button>
      </div>

      <div v-if="type == 'meta'"></div>
    </div>
</div>

    
</template>

<script>
import parseTorrent from 'parse-torrent'

function getFileContent(file) {
  return new Promise((resolve, reject) => {
    var fr = new FileReader()
    fr.onload = function() {
      var commaPos = fr.result.indexOf(',')
      resolve(fr.result.slice(commaPos + 1))
    }
    fr.onerror = reject
    fr.readAsDataURL(file)
  })
}

export default {
  name: 'NewTask',
  props: ['aria2'],
  data() {
    return {
      type: 'url',
      btBase64: null,
      btInfo: null,
      selectedBtFile: [],
      uris: ''
    }
  },
  methods: {
    async parseBtFile(e) {
      var file = e.target.files[0]
      var btFileBase64 = await getFileContent(file)
      var btFileBuffer = Buffer.from(btFileBase64, 'base64')
      var parsedTorrent = parseTorrent(btFileBuffer)

      // console.log(parsedTorrent)

      this.btBase64 = btFileBase64
      this.btInfo = parsedTorrent
      this.type = 'bt'
    },
    async startBtDownload() {
      await this.aria2.addTorrent(this.btBase64, [], {
        selectFile: this.selectedBtFile.join(','),
      })
      this.$router.push('/')
    },
    async start() {
      var uris = this.uris.split('\n').map(it => it.trim())
      var taskIds = await this.aria2.addUri(uris)
      console.log(taskIds)
      this.$router.push('/')
    }
  }
}
</script>
