// custom-tab-bar/index.ts
Component({
  properties: {

  },
  data: {
    active: 0,
    lists: [
      {
        pagePath: "/pages/index/index",
        icon: "home-o",
        text: "首页"
      },
      {
        pagePath: "/pages/index/index",
        icon: "search",
        text: "搜索"
      },
      {
        pagePath: "/pages/index2/index",
        icon: "friends-o",
        text: "联系人"
      },
      {
        pagePath: "/pages/index2/index",
        icon: "setting-o",
        text: "设置"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTabBarChange(e: any) {
      const tabIndex = e.detail
      if(tabIndex !== this.data.active) {
        this.setData({
          active: tabIndex
        })
        const url = this.data.lists[tabIndex].pagePath
        wx.switchTab({url})
      }
    }
  }
})
