<template>
  <el-row>
    <el-form label-width="50px" class="form">
      <el-row>
        <el-col :span="5">
          <el-form-item label="分数">
            <el-select v-model="searchData.group">
              <el-option
                v-for="(value, key, index) in group"
                :label="key"
                :value="key"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="题目">
            <el-input v-model="searchData.text"></el-input>
          </el-form-item>
        </el-col>
        <el-button type="primary" class="btn" @click="search">查询</el-button>
        <!--<el-button type="success" class="btn" @click="showSet = true">设置</el-button>-->
        <el-button type="success" class="btn" @click="addIssue = true">添加题目</el-button>
      </el-row>
    </el-form>
    <el-table
      :data="tableData">
      <el-table-column
        type="index"
        label="编号"
        :span="6"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="题目"
        :span="6"
      ></el-table-column>
      <el-table-column
        label="选项"
        :span="6"
      >
        <template slot-scope="scope">
          <!--<div @click="show(scope)">{{scope.row}}</div>-->
          <el-row v-for="item in scope.row.opt">{{item.name}}:{{item.definite}}</el-row>
        </template>
      </el-table-column>
      <el-table-column
        prop="correct"
        label="答案"
        :span="6"
      ></el-table-column>
      <el-table-column
        prop="group"
        label="得分"
        :span="6"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="题目"
      :visible.sync="addIssue"
      width="30%">
      <el-row>
        <el-form label-width="100px">
          <el-row>
            <el-col :span="18">
              <el-form-item label="题目">
                <el-input v-model="subject.title" type="textarea"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" :offset=2>
              <el-button type="primary" @click="addOption">添加选项</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="得分">
                <el-select  v-model="subject.group">
                  <el-option
                    v-for="item in group"
                    :key="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="正确答案">
                <el-select  v-model="subject.correct">
                  <el-option
                    v-for="item in subject.opt"
                    :key="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <template v-for="item in subject.opt">
            <el-form-item :label="'选项 ' + item.name">
              <el-input v-model="item.definite">
              </el-input>
            </el-form-item>
          </template>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button @click="showEdit = false">取 消</el-button>
          <el-button type="primary" @click="editStudent">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      width="30%"
      :visible.sync="showIssue"
      title="编辑题目">
      <el-form label-width="100px">
        <el-row>
          <el-col :span="18">
            <el-form-item label="题目">
              <el-input v-model="edit.title" type="textarea"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset=2>
            <el-button type="primary" @click="addEditOption">添加选项</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="得分">
              <el-select  v-model="edit.group">
                <el-option
                  v-for="item in group"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="正确答案">
              <el-select  v-model="edit.correct">
                <el-option
                  v-for="item in edit.opt"
                  :key="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <template v-for="item in edit.opt">
          <el-form-item :label="'选项 ' + item.name">
            <el-input v-model="item.definite">
            </el-input>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="showEdit = false">取 消</el-button>
          <el-button type="primary" @click="editIssue">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
  const loadsh = require('lodash')
  export default {
    name: 'issue',
    data() {
      return {
        showIssue: false,
        das: '',
        searchData: {
          group: 0,
          text: ''
        },
        group: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tableData: [],
        addIssue: false,
        subject: {
          title: '',
          group: 0,
          correct: '',
          opt: []
        },
        edit: {
          title: '',
          group: 0,
          correct: '',
          opt: []
        },
        index: -1,
        optioneNmae: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'H', 'M', 'N']
      }
    },
    computed: {
      issue: function() {
        return this.$store.getters.issue
      }
    },
    methods: {
      addOption() {
        const obj = {}
        const index = this.subject.opt.length
        obj.name = this.optioneNmae[index]
        obj.definite = ''
        this.subject.opt.push(obj)
      },
      search() {
        this.tableData = JSON.parse(JSON.stringify(this.issue))
        if (this.searchData.group) {
          loadsh.remove(this.tableData, item => {
            return item.group !== this.searchData.group
          })
          if (this.searchData.text) {
            loadsh.remove(this.tableData, item => {
              // return item.group !== this.searchData.group
              return item.title.indexOf(this.searchData.text) === -1
            })
          }
        } else {
          if (this.searchData.text) {
            loadsh.remove(this.tableData, item => {
              // return item.group !== this.searchData.group
              return item.title.indexOf(this.searchData.text) === -1
            })
          } else {
            this.tableData = JSON.parse(JSON.stringify(this.issue))
          }
        }
        loadsh.remove(this.tableData, item => {
          return item.group !== this.searchData.group
        })
      },
      editStudent() {
        const obj = JSON.parse(JSON.stringify(this.subject))
        this.issue.push(obj)
        this.$store.dispatch('setIssue', this.issue)
        this.tableData = JSON.parse(JSON.stringify(this.issue))
      },
      handleEdit(index, data) {
        this.showIssue = true
        this.index = index
        this.edit = data
      },
      editIssue() {
        this.issue.splice(this.index, 1)
        this.issue.push(this.edit)
        this.$store.dispatch('setIssue', this.issue)
        this.tableData = JSON.parse(JSON.stringify(this.issue))
      },
      addEditOption() {
        const obj = {}
        const index = this.edit.opt.length
        obj.name = this.optioneNmae[index]
        obj.definite = ''
        this.edit.opt.push(obj)
      },
      handleDelete(index, data) {
        this.issue.splice(index, 1)
        this.$store.dispatch('setIssue', this.issue)
        this.tableData = JSON.parse(JSON.stringify(this.issue))
      }
    },
    created() {
      this.tableData = JSON.parse(JSON.stringify(this.issue))
      console.log(loadsh)
    }
  }
</script>
<style lang="scss" scoped>
  .form{
    margin-top: 20px;
  }
  .btn{
    margin-left: 20px;
  }
</style>
