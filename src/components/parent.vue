<template>
  <div>
    <h2>parent父组件部分</h2>
    <child :message="parentMsg" :user="name" @listenToChildEvent="showMsgFromChild" keyCode="tmc">
    </child>
    <slot-test>
      <template slot-scope="a">
        <p>姓名：{{ a.item1.name }}年龄：{{ a.item1.age }}</p>
      </template>
    </slot-test>

    <div class="ttt">sss</div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      @row-click="rowChange"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
 
<script>
  import child from './child01';
  import slotTest from './slot';
 
export default {
  data () {
    return {
      parentMsg:'北京',
      name:'李磊',

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentRow: null,
      dialogFormVisible: false,
      form: {
          date:'',
          name: '',
          address:''
      },
      formLabelWidth:'120px'
    }
  },
  components : {
    child,
    slotTest
  },
  methods:{
    tableWidth(){
      var tt = document.getElementsByClassName('ttt');
      tt[0].innerHTML+='MMM';
      tt[0].style.width=200+'px';
    },
    showMsgFromChild:function (data) {
      this.parentMsg = data.cityname;
      this.name = data.name;
    },      
    setCurrent(row) {
        //console.log(row);
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        //console.log(val);
        this.currentRow = val;
      },
      rowChange(row){
        //console.log(row);
      },
      handleEdit(index,row){
        console.log(arguments);
        this.dialogFormVisible = true;
        this.form = Object.assign({}, row);
      }
  },
  mounted(){
    this.tableWidth();
  }
}
</script>
