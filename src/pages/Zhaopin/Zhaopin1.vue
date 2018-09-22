<template>
  <div class="zhaopinContent container-fluid">
    <div class="zhaopin_banner container-fluid">
      <img src="../../assets/zhaopinxinxi.png" class="img-responsive">
    </div>
    <div class="content container">
      <div class="jobsearch">职位搜索</div>
      <!--<div class="row">-->
        <!--<div class="col-lg-2 col-md-3 col-sm-4 input">-->
          <!--<select class="form-control">-->
            <!--<option>职业类别</option>-->
            <!--<option>职业规划</option>-->
          <!--</select>-->
        <!--</div>-->
        <!--<div class="col-lg-10 col-sm-8 search">-->
          <!--<div class="input-group">-->
            <!--<input type="text" class="form-control" placeholder="Search for...">-->
            <!--<span class="input-group-btn">-->
          <!--<button class="btn btn-default" type="button">搜索</button>-->
        <!--</span>-->
          <!--</div>&lt;!&ndash; /input-group &ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
      <div class="arrow" style="margin-top: 26px">
        <el-input placeholder="职位名称" v-model="input" class="input-with-select" clearable>
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="职位名称" value="1" ></el-option>
          </el-select>
          <el-button slot="append" @click="search">搜索</el-button>
        </el-input>
      </div>
      <el-card class="box-card" >
        <div slot="header" class="clearfix row" >
          <span class="col-lg-3 col-md-3 col-xs-3">职位名称</span>
          <span class="col-lg-3 col-md-3 col-xs-3">职位类别</span>
          <span class="col-lg-3 col-md-3 col-xs-3">工作地点</span>
          <span class="col-lg-2 col-md-2 col-xs-2">更新时间</span>
          <span class="col-lg-1 col-md-1 col-xs-1" style="text-align: right">详情</span>
        </div>
        <el-collapse v-model="activeName" accordion v-for="(navigation,index) in navigationbarpage" :key="index">
          <el-collapse-item>
            <template slot="title">
              <div class="row">
                <span class="col-lg-3 col-md-3 col-xs-3">{{navigation.jobName}}</span>
                <span class="col-lg-3 col-md-3 col-xs-3">{{navigation.jobType}}</span>
                <span class="col-lg-3 col-md-3 col-xs-3">{{navigation.jobAddress}}</span>
                <span class="col-lg-2 col-md-2 col-xs-2">{{navigation.createTime.split('T')[0]}}</span>
              </div>
            </template>
            <div style="padding-top: 20px">职业详情描述</div>
            <div>{{navigation.jobDescription}}</div>
            <el-button type="warning" @click="dialogFormVisible = true" style="margin-top: 24px;background-color: #ea5504">我要报名</el-button>
            <el-dialog title="请填写报名信息" :visible.sync="dialogFormVisible" :modal-append-to-body='false' @close="closeDialog" >
              <el-form :model="form" status-icon ref="form" :rules="rules">
                <el-form-item label="姓名" prop="name" :label-width="formLabelWidth" clearable>
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="telephone" :label-width="formLabelWidth" clearable>
                  <el-input v-model.number="form.telephone" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="closeFrom">取 消</el-button>
                <el-button :plain="true" type="primary" @click="submitForm">确 定</el-button>
              </div>
            </el-dialog>
          </el-collapse-item>
        </el-collapse>
        <el-pagination class="content_more" style="text-align: center;margin-top: 20px"
                       @size-change="handleSizeChange"in
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[3,5,6,10]"
                       :page-size="pagesize"
                       layout="total, sizes, prev, pager, next, jumper"
                       prev-text="上一页"
                       next-text="下一页"
                       :total="this.navigationbar.navigationbar.length">
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {reqNewRecruitment} from '../../api'
  import {mapState} from 'vuex'
  export default {
    data() {
      const checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }else {
          const reg =/(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\.·。]{0,8}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,8}[a-zA-Z]{1}$)/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的姓名'));
            this.from.name = ""
          }
        }
      };
      const checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      return {
        rules: {
          name:[
            {validator: checkName, trigger: 'blur'}
          ],
          telephone: [
            {validator: checkPhone, trigger: 'blur'}
          ]

        },
        activeName: '1',
        dialogFormVisible: false,
        select:'',
        input:'',
        jobName:'',
        form: {
          name: '',
          telephone:'',
          type:'recruitment',
          typeId:12,
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          resource: '',
          desc: '',
        },
        formLabelWidth: '60px',

        fullscreenLoading: false,
        currentPage: 1,
        pagesize: 10,
        tabdata:[],//分页的数据
      };
    },
    methods: {
      // 对话框取消事件
      closeFrom(){
        this.dialogFormVisible = false;
        this.$message('报名取消');
        // 点击取消 数据重置
        // this.$refs[fromName].resetFields();
      },
      // 对话框关闭事件
      closeDialog(){
        // 点击关闭 数据重置
        this.$refs['name'].resetFields();
        this.from.name = ''
        this.from.telephone = ''
      },
      async submitForm(){
        this.dialogFormVisible = false;
        const {name,telephone,type,typeId} = this.form
        const regName = /(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\.·。]{0,8}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,8}[a-zA-Z]{1}$)/
        const regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/
        console.log(regName.test(this.form.name))
        if(regName.test(this.form.name) && regPhone.test(this.form.telephone)){
          this.$message({
            message: '报名成功',
            type: 'success',
          });
          // // 发送ajax请求登陆
          await reqNewRecruitment(name,telephone,type,typeId)
        }else{
          this.$message.error('报名失败,信息格式错误');
        }
      },

      search(){
        this.$store.dispatch('getNavigationBar',this.input)
        const _this = this;
        //逻辑-->根据input的value值筛选goodsList中的数据
        const arrByZM = [];//声明一个空数组来存放数据

        for (let i=0;i<_this.navigationbar.navigationbar.length;i++){
          //for循环数据中的每一项（根据name值）

          if(_this.navigationbar.navigationbar[i].jobName.search(_this.input) != -1){
            //判断输入框中的值是否可以匹配到数据，如果匹配成功
            arrByZM.push(_this.navigationbar.navigationbar[i]);
            //向空数组中添加数据
          }
        }
        this.navigationbar.navigationbar = arrByZM;

        this.$store.dispatch('getNavigationBarpage',{jobName:this.input,page:this.currentPage,limit:this.pagesize*this.currentPage})
        // console.log("JSON.stringify(this.navigationbar.navigationbar)",JSON.stringify(this.navigationbar.navigationbar))
        return arrByZM;
        /*alert(this.$data.input)
        console.log(this.navigationbar.jobName)*/
      },
      backout(){
        window.location.reload()
      },
      handleSizeChange: function (pagesize) {
        this.pagesize = pagesize;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange: function (currentPage) {
        window.scrollTo(0,0)
        this.search()
        this.currentPage++
        this.currentPage = currentPage;
        this.$store.dispatch('getNavigationBarpage',{page:this.currentPage,limit:this.pagesize,jobName:this.jobName})
      },
    },
    computed:{
      ...mapState(['navigationbar']),
      ...mapState(['newrecruitment']),
      ...mapState(['navigationbarpage'])
    },
    mounted(){
      this.$store.dispatch('getNavigationBar',this.input)
      this.$store.dispatch('getNavigationBarpage',{jobName:this.input,page:this.currentPage,limit:this.pagesize})
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .zhaopinContent{
    min-width 1200px
    padding-bottom 47px
    margin-top 72px
    .zhaopin_banner{
      max-width 1500px
      height 373px
      img{
        width 100%
        height 100%
      }
    }
    .content{
      .col-md-12{
        padding-left 0
      }
      .jobsearch{
        margin-top 26px
        font-size 16px
        margin-left 0
        font-weight bold
        color #333
        .arrow{
          .el-select{
            .el-input {
              width: 130px;
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .el-input-group__append{
                width: 40px;
              }
            }
          }
          .input-with-select{
            .el-input-group__prepend {
              background-color: #fff;
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .el-input-group__prepend{
                width: 60px;
              }
            }
          }
        }

      }
      .input{
        margin-top 26px
        height 50px
        padding-left 0
        padding-right 0
        .form-control{
          height 50px
          color #333
          border 1px solid #ddd
          border-radius 3px
          option{
            font-size 14px
            color #333
          }
        }
      }
      .search{
        margin-top 26px
        padding-left 16px
        padding-right 0
        .input-group{
          input{
            height 50px
            border 1px solid #ea5504
            border-radius 3px
          }
          button{
            width 140px
            height 50px
            background-color #ea5504
            color #fff
            opacity 0.7
          }
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content{
        img{
          width 100%
          height 200px
        }
      }
    }
    .box-card{
      margin-top 40px
      .row{
        span{
          font-size 12px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        }
      }
      .el-card__header{
        background-color #f5f5f5
      }
      .el-collapse{

      }
    }

    @media screen and (min-width: 320px) and (max-width: 420px) {
      .box-card{
        .row{
          span{
            font-size 12px
          }
        }
      }
    }

  }
</style>