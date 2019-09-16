<template>
  <div class="content">
    <el-form size="small" :label-position="labelPosition" label-width="100px" :model="baseInfo">
      <div class="module-base">
        <div class="base-title">
          <el-row>
            <div>
              基本设置:
            </div>
          </el-row>
        </div>
        <div class="base-main">
          <el-row type="flex" justify="space-around">
            <el-col :span="6">
              <el-form-item label="返点规则名称:">
                <el-input v-model="baseInfo.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="返点平台:">
                <el-input v-model="baseInfo.region"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex" justify="space-around">
            <el-col :span="6">
              <el-form-item label="pcc:">
                <el-input v-model="baseInfo.type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="gds:">
                <el-select v-model="baseInfo.gds" placeholder="请选择gds">
                  <el-option label="区域一" value="shanghai"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>



      <div class="rebate-rule">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="返点规则价格区间" name="first">
            <el-row type="flex" justify="start">
              <el-button type="primary" @click="addRuleRebate">新增</el-button>
            </el-row>

            <el-row class="cus-tabel-title">
              <el-col :span="3">开始价格</el-col>
              <el-col :span="3">结束价格</el-col>
              <el-col :span="3">返点</el-col>
              <el-col :span="3">加减钱</el-col>
              <el-col :span="3">平台店铺代码</el-col>
              <el-col :span="3">开始时间</el-col>
              <el-col :span="3">结束时间</el-col>
              <el-col :span="3">操作</el-col>
            </el-row>

            <el-row class="cus-tabel-content" v-for="(item,index) in baseInfo.rebateRuleData">
              <el-col :span="3">
                <el-input v-model="item.beginPrice"></el-input>
              </el-col>
              <el-col :span="3">
                <el-input v-model="item.endPrice"></el-input>
              </el-col>
              <el-col :span="3">
                <el-input v-model="item.rebate"></el-input>
              </el-col>
              <el-col :span="3">
                <el-input v-model="item.asPrice"></el-input>
              </el-col>
              <el-col :span="3">
                <el-input v-model="item.platformCode" @focus="showPopup(index)"></el-input>
                <i icon="el-icon-plus"></i>
              </el-col>
              <el-col :span="3">
                <el-date-picker
                  v-model="item.startDate" style="width: 100%"
                  type="date"
                  placeholder="请选择日期">
                </el-date-picker>
              </el-col>
              <el-col :span="3">
                <el-date-picker
                  v-model="item.endDate" style="width: 100%"
                  type="date"
                  placeholder="请选择日期">
                </el-date-picker>
              </el-col>
              <el-col :span="3">
                <el-button type="danger" @click="removeRuleRebate(index)">删除</el-button>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-form>


    <!-- 遮罩层-->
    <MaskLayer v-if="$store.getters.showMaskLayer"/>


    <!-- 弹出层-->
    <div class="po-pup" v-show="showPopupLayer">
      <div class="po-pup-main">
        <div class="po-pup-title">
          <div>
            <i class="el-icon-tickets"></i>
            <span>查找带回</span>
          </div>
          <i class="el-icon-error" @click="closePopup"></i>
        </div>

        <div class="po-pup-search">
          <el-row type="flex" justify="space-around">
            <el-col>
              <el-input v-model="platformDatas.code" placeholder="平台代码"></el-input>
            </el-col>
            <el-col>
              <el-button type="primary">查询</el-button>
            </el-col>
          </el-row>
        </div>

        <div class="po-pup-tabel">
          <div>
            <button style="float: left">重置</button>
          </div>
          <div>
            <el-table
              ref="multipleTable"
              :data="platformList"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
<!--              <el-table-column-->
<!--                width="55">-->
<!--                <template slot-scope="scope">-->
<!--                  &lt;!&ndash; label可以使用tableData中的某个字段，注意该字段的值不要重复 &ndash;&gt;-->
<!--                  <el-radio v-model="radioVal"-->
<!--                            :label="scope.row.id">&thinsp;-->
<!--                  </el-radio>-->
<!--                </template>-->
<!--              </el-table-column>-->
              <el-table-column
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
              </el-table-column>

              <el-table-column
                label="操作"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button type="success">选择</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </div>


      </div>
    </div>


  </div>
</template>

<script src="@viewsJs/third">
</script>

<style src="@viewsCs/third.css">
</style>
