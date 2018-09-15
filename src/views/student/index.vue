<template>
  <div>
    <el-form label-width="50px" class="form">
      <el-row>
        <el-col :span="5">
          <el-form-item label="班级">
            <el-select v-model="searchData.class">
              <el-option
                v-for="(value, key, index) in student"
                :label="key"
                :value="key"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="小组">
            <el-select v-model="searchData.group">
              <el-option
                v-for="(value, key, index) in group"
                :label="key"
                :value="key"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-button type="primary" class="btn" @click="search">查询</el-button>
        <el-button type="success" class="btn" @click="showSet = true">设置</el-button>
        <el-button type="success" class="btn" @click="addStudent = true">添加学生</el-button>
      </el-row>
    </el-form>
    <el-row>
      <el-table
        :data="tableData"
      >
        <el-table-column
          type="index"
          label="编号"
          :span="6"
        ></el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          :span="6"
        ></el-table-column>
        <el-table-column
          prop="class"
          label="班级"
          :span="6"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="名字"
          :span="6"
        ></el-table-column>
        <el-table-column
            prop="score"
            label="得分"
            :span="6"
          ></el-table-column>
        <el-table-column
          prop="group"
          label="小组"
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
    </el-row>
    <el-dialog
      title="设置"
      :visible.sync="showSet"
      width="30%"
    >
      <div>
        <el-row>当前班级</el-row>
        <el-row>
          <div :span="4" v-for="(value, key, index) in student" class="item">
            {{key}}
          </div>
        </el-row>
      </div>
      <div>
        <el-row>当前小组</el-row>
        <el-row>
          <div :span="4" v-for="(value, key, index) in group"  class="item">
            {{key}}
          </div>
        </el-row>
      </div>
     <el-form label-width="100px">
        <el-form-item label="班级名称">
          <el-input placeholder="请输入班级名称" v-model="className"></el-input>
        </el-form-item>
     </el-form>
      <el-form label-width="100px">
        <el-form-item label="小组名称">
          <el-input placeholder="请输入小组名称" v-model="gradeName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="showSet === false">取 消</el-button>
          <el-button type="primary" @click="subClass">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="添加学生"
      :visible.sync="addStudent"
      width="30%">
      <el-form
        label-width="100px">
        <el-form-item label="学生姓名">
          <el-input placeholder="请输入学生姓名" v-model="personage.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="personage.class">
            <el-option
              v-for="(value, key, index) in student"
              :label="key"
              :value="key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小组">
          <el-select v-model="personage.group">
            <el-option
              v-for="(value, key, index) in group"
              :label="key"
              :value="key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="personage.sex">
            <el-option
              label='男'
              value="男">
            </el-option>
            <el-option
              label='女'
              value="女">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary" @click="subPersonage">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="showEdit"
      width="30%"
    >
      <el-form label-width="100px">
        <el-form-item label="名字">
          <el-input v-model="edit.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="edit.class">
            <el-option
              v-for="(value, key, index) in student"
              :label="key"
              :value="key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小组名称">
          <el-select v-model="personage.group">
            <el-option
              v-for="(value, key, index) in group"
              :label="key"
              :value="key">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
       <span slot="footer" class="dialog-footer">
          <el-button @click="showEdit = false">取 消</el-button>
          <el-button type="primary" @click="editStudent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'student',
    data() {
      return {
        showSet: false,
        addStudent: false,
        className: '',
        gradeName: '',
        personage: {
          name: '',
          class: '',
          group: '',
          score: 0,
          sex: ''
        },
        searchData: {
          class: '',
          group: ''
        },
        tableData: [],
        showEdit: false,
        edit: {
          name: '',
          class: '',
          group: '',
          score: 0,
          sex: ''
        },
        cloneStudent: {}
      }
    },
    computed: {
      student: function() {
        return this.$store.getters.student
      },
      group: function() {
        return this.$store.getters.group
      }
    },
    watch: {
      showEdit: function(newvalue, old) {
        console.log(old)
        if (old) {
          this.cloneStudent = {}
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        this.cloneStudent = row
        this.showEdit = true
        this.edit.name = row.name
        this.edit.group = row.group
        this.edit.class = row.class
      },
      handleDelete(index, row) {
        this.cloneStudent = row
        this.delStudent()
      },
      editStudent() {
        this.delStudent()
        this.student[this.edit.class].push(this.edit)
        this.showEdit = false
      },
      delStudent() {
        this.student[this.cloneStudent.class].forEach((item, index) => {
          if (item.name === this.cloneStudent.name) {
            this.student[this.cloneStudent.class].splice(index, 1)
          }
        })
        this.$store.dispatch('setStudent', this.student)
        this.getTableData()
      },
      getTableData() {
        let arr = []
        const obj = this.$store.getters.student
        console.log(obj)
        for (let item in obj) {
          arr =  arr.concat(obj[item])
        }
        this.tableData = arr
        console.log(this.tableData)
      },
      subClass() {
        if (this.className) {
          this.student[this.className] = []
          this.$store.dispatch('setStudent', this.student)
          this.className = ''
        }
        if (this.gradeName) {
          this.group[this.gradeName] = []
          this.$store.dispatch('setGroup', this.group)
          this.gradeName = ''
        }
      },
      subPersonage() {
        if (this.personage.class) {
          for (let item in this.student) {
            if (item === this.personage.class) {
              let obj = JSON.parse(JSON.stringify(this.personage))
              this.student[item].push(obj)
              this.$store.dispatch('setStudent', this.student)
            }
          }
        }
        if (this.personage.group) {
          for (let item in this.group) {
            if (item === this.personage.group) {
              let obj = JSON.parse(JSON.stringify(this.personage))
              this.group[item].push(obj)
              this.$store.dispatch('setGroup', this.group)
            }
          }
        }
        this.getTableData()
      },
      search() {
        console.log(this.student)
        let tableData = []
        for (let item in this.student) {
          let person = []
          if (this.searchData.class) {
            if (this.searchData.class === item) {
              if (this.searchData.group) {
                for (let index in this.student[item]) {
                  if (this.student[item][index].group === this.searchData.group) {
                    person = this.student[item][index]
                  }
                }
              } else {
                person = [...this.student[item]]
              }
            }
          } else {
            if (this.searchData.group) {
              for (let index in this.student[item]) {
                console.log(index)
                console.log(this.student[item][index])
                if (this.student[item][index].group === this.searchData.group) {
                  person.push(this.student[item][index])
                  console.log(person)
                }
              }
            } else {
              person = [...this.student[item]]
            }
          }
          tableData = tableData.concat(person)
        }
        this.tableData = tableData
      }
    },
    created() {
      this.getTableData()
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
  .item{
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 10px;
    border-radius: 4px;
    display: inline-block;
  }
</style>
