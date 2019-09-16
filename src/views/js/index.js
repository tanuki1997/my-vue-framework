import MenuTree from '@components/MenuTree'
import de from 'element-ui/src/locale/lang/de'

export default {
  data () {
    return {
      editableTabsValue: 'second',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      // nodes: this.$store.getters.RouterList
    }
  },
  // created () {
  //   this.activeIndex = this.$store.getters.editableTabsValue
  // },
  // watch: {
  //   '$store.getters.editableTabsValue' (val) {
  //     this.activeIndex = val
  //   }
  // },

  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleopen () {
      //console.log('handleopen');
    },
    handleclose () {
      //console.log('handleclose');
    },
    handleselect: function (a, b) {
    },
    logout: function () {
      debugger
      this.$common.removeUserInfSession()
      this.$router.push('/login')
    },

    clickTab (tab, event) {

      let router
      this.$store.getters.tabPanes.forEach(item => {
        if (tab.name == item.id) {
          router = item
        }
      })
      this.$router.push(router.fullPath)
    },

    removeTab (targetName) {
      console.log(targetName)
    },

  },
  components: {
    MenuTree
  }

}
