<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="22">
        <div>
          <span>魚</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>           //処理
import axios from 'axios'
  export default {
    name: 'Sakana',
    data () {                                               //ここから
      return {
    requestForm: {
      fieldId: null
    },
    sakana: [],
    fields: []
  }
},
created: async function () {                                //ここから
  await this.refresh()
},
refresh: async function () {
  const res = await axios.get('http://linkdata.org/api/1/rdf1s3598i/Sustainable_Sushi_rdf.json')
  this.dictionaries = res.data.responseForm.wordList
  this.fields = res.data.responseForm.fieldList
  console.info(this.dictionaries)
  console.info(this.Fields)
}
}                                                       //ここまで追記
  }
</script>

<style scoped>

</style>
