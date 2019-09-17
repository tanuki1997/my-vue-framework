export default {
  data () {
    return {
      radioVal: 1,
      showPopupLayer: false,//是否显示弹出层
      labelPosition: 'right',
      baseInfo: {
        name: '',
        region: '',
        type: '',
        gds: [],
        rebateRuleData: [],
      },
      platformDatas: {
        code: null
      },
      platformList: [
        { id: 1, date: '2019-11-11', name: 'test1', address: '广东' },
        { id: 2, date: '2019-11-11', name: 'test2', address: '广东' }
      ],
      rebateRuleTem: {
        beginPrice: null,
        endPrice: null,
        rebate: null,
        asPrice: null,
        platformCode: null,
        startDate: null,
        endDate: null
      },
      activeName2: 'first',
      rebateRules: [],
      rebateIndex: 0

    }
  },

  methods: {

    handleClick (tab, event) {
      console.log(tab, event)
    },
    addRuleRebate () {
      let rebateRule = Object.assign({}, this.rebateRuleTem)
      rebateRule.index = this.rebateIndex
      this.rebateIndex = ++this.rebateIndex
      this.baseInfo.rebateRuleData.push(rebateRule)
    },
    removeRuleRebate (selectIndex) {
      var rebateRuleData = this.formLabelAlign.rebateRuleData
      for (var i = 0; i < this.formLabelAlign.rebateRuleData.length; i++) {
        if (i == selectIndex) {
          this.formLabelAlign.rebateRuleData.splice(i, 1)
        }
      }
      // this.formLabelAlign.rebateRuleData=rebateRuleData;
    },
    closePopup () {
      this.showPopupLayer = false
      this.$store.dispatch('setMaskValue', false)
    },
    showPopup (index) {
      console.log(index)
      this.showPopupLayer = true
      this.$store.dispatch('setMaskValue', true)
    },

    handleSelectionChange () {

    }
  }
}
