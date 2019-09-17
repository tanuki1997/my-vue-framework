import MenuTree from '@components/MenuTree'
import de from 'element-ui/src/locale/lang/de'
import { getUserInfSession } from '@/utils/common'

export default {
  data () {
    return {
      userInfo: getUserInfSession(),
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
  watch: {
    '$store.getters.editableTabsValue' (val) {
      let router
      this.$store.getters.tabPanes.forEach(item => {
        if (val == item.id) {
          router = item
        }
      })
      this.$router.push({ path: router.fullPath })
    },

    '$store.getters.tabPanes' (val) {
      if (val.length == 0) {
        this.$router.push('/manage')
      }
    }
  },

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
      this.$store.commit('set_editableTabsValue', tab.name)
    },

    removeTab (targetName) {
      this.$store.commit('remove_tabPane', targetName)
      console.log(targetName)
    },

  },
  components: {
    MenuTree
  }

}
