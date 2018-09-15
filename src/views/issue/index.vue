<template>
  <el-row>
    <el-form label-width="50px" class="form">
      <el-row>
        <el-col :span="5">
          <el-form-item label="分数">
            <el-select v-model="searchData.group">
              <el-option
                v-for="(value, key, index) in student"
                :label="key"
                :value="key"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="编号">
            <el-input v-model="searchData.number"></el-input>
          </el-form-item>
        </el-col>
        <el-button type="primary" class="btn" @click="search">查询</el-button>
        <!--<el-button type="success" class="btn" @click="showSet = true">设置</el-button>-->
        <el-button type="success" class="btn" @click="addIssue = true">添加题目</el-button>
      </el-row>
    </el-form>
    <el-table :data="tableData">
      <el-table-column
        type="index"
        label="编号"
        :span="6"
      ></el-table-column>
      <el-table-column
        prop="issue"
        label="题目"
        :span="6"
      ></el-table-column>
      <el-table-column
        label="选项"
        :span="6"
      >
        <template slot-scope="scope">
          <el-row v-for="item in scorp.row.option"> </el-row>
        </template>
      </el-table-column>
      <el-table-column
        prop="key"
        label="答案"
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
                <el-input v-model="subject.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" offset="2">
              <el-button type="primary" @click="addOption">添加选项</el-button>
            </el-col>
          </el-row>
        </el-form>
        <div v-for="(item, index) in test">
          {{4646}}
        </div>
        <el-form-item   >
          <!--<el-input v-model="item.name"-->
                    <!--:key="item">-->
          <!--</el-input>-->
        </el-form-item>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button @click="showEdit = false">取 消</el-button>
          <el-button type="primary" @click="editStudent">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
  export default {
    name: 'issue',
    data() {
      return {
        das: '',
        searchData: {
          group: 0,
          number: 0
        },
        test: [161,1456,161,6165,165,6],

        tableData: [],
        addIssue: false,
        subject: {
          title: '',
          opt: [
            {
              name: 'A',
              definite: 'dasd'
            },
            {
              name: 'A',
              definite: 'dasd'
            }
          ]
        },
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

      }
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
