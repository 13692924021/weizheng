import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 *  lang: ""  切換語言的字段
 * }
 */

export default [
    {
        path: "/",
        redirect: "/login",
        meta: {
            hideInMenu: true
        }
    },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登錄',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },

  {
    path: '/index',
    name: 'index',       // 單層菜單title
    component: Main,
    meta: {
        access: ['superadmin', 'admin'],
        icon: 'ios-leaf',
        name: "index",
        title: "index",  //菜單使用這個名字,
        lang: "Dashboard"
    },
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          hideInMenu: true,
          title: 'home',
          name: 'home',
          icon: 'ios-leaf',
          lang: "Dashboard"
        },
        component: () => import('@/view/single-page/home/home.vue')
      }
    ]
  },


//   {
//     path: '/company',
//     name: '公司管理',       // 單層菜單title
//     component: Main,
//     meta: {
//         access: ['superadmin', 'admin'],
//         icon: 'md-home',
//         name: "公司管理",
//         title: "公司管理",  //菜單使用這個名字,
//         lang: "cAdmin"
//     },
//     children: [
//       {
//         path: '/company',
//         name: '公司管理',
//         meta: {
//           hideInMenu: true,
//           title: 'home',
//           name: 'home',
//           icon: 'md-home',
//           lang: "cAdmin"
//         },
//         component: () => import('@/view/index/index.vue')
//       }
//     ]
//   },

//   {
//     path: '/account',
//     name: 'account',       // 單層菜單title
//     component: Main,
//     meta: {
//         access: ['superadmin', 'admin'],
//         icon: 'md-albums',
//         name: "account",
//         title: "account",  //菜單使用這個名字,
//         lang: "acc1"
//     },
//     children: [
//       {
//         path: '/account',
//         name: 'account',
//         meta: {
//           hideInMenu: true,
//           icon: 'md-home',
//           lang: "acc1"
//         },
//         component: () => import('@/view/account/account.vue')
//       }
//     ]
//   },


//   {
//     path: '/admin',
//     name: '管理員賬戶',       // 單層菜單title
//     component: Main,
//     meta: {
//         access: ['superadmin', 'admin'],
//         icon: 'md-home',
//         name: "管理員賬戶",
//         title: "管理員賬戶",  //菜單使用這個名字,
//         lang: "adminAcc"
//     },
//     children: [
//       {
//         path: '/admin',
//         name: '管理員賬戶',
//         meta: {
//           hideInMenu: true,
//           icon: 'md-person',
//           lang: "adminAcc"
//         },
//         component: () => import('@/view/admin/admin.vue')
//       }
//     ]
//   },

//   {
//     path: '/dataManagement',
//     name: 'dataManagement',       // 單層菜單title
//     component: Main,
//     meta: {
//         access: ['superadmin', 'admin'],
//         icon: 'ios-apps',
//         name: "dataManagement",
//         title: "dataManagement",  //菜單使用這個名字,
//         lang: "dataManagement"
//     },
//     children: [
//       {
//         path: '/dataManagement/CIGS',
//         name: 'CIGS',
//         meta: {
//             icon: "ios-appstore",
//             lang: "CIGS"
//         },
//         component: () => import('@/view/dataManagement/CIGS/CIGS.vue')
//       },
//       {
//         path: '/dataManagement/refrigerant',
//         name: 'refrigerant',
//         meta: {
//             icon: "ios-thermometer",
//             lang: "refrigerant"
//         },
//         component: () => import('@/view/dataManagement/refrigerant/refrigerant.vue')
//       },
//       {
//         path: '/dataManagement/renewable',
//         name: 'renewable',
//         meta: {
//             icon: "md-aperture",
//           lang: "renewable"
//         },
//         component: () => import('@/view/dataManagement/renewable/renewable.vue')
//       },
//       {
//         path: '/dataManagement/elcGrid',
//         name: 'elcGrid',
//         meta: {
//             icon: "md-outlet",
//           lang: "elcGrid"
//         },
//         component: () => import('@/view/dataManagement/elcGrid/elcGrid.vue')
//       }
//     ]
//   },
  {
    path: '/groupProfile',
    name: 'groupProfile',       // 單層菜單title
    component: Main,
    meta: {
        icon: 'ios-leaf',
        name: "groupProfile",
        title: "groupProfile",  //菜單使用這個名字,
        lang: "groupProfile"
    },
    children: [
      {
        path: '/groupProfile',
        name: 'groupProfile',
        meta: {
          hideInMenu: true,
          icon: 'ios-leaf',
          lang: "groupProfile"
        },
        component: () => import('@/view/groupProfile/groupProfile.vue')
      }
    ]
  },
  {
    path: '/companyProfile',
    name: 'companyProfile',       // 單層菜單title
    component: Main,
    meta: {
        icon: 'ios-leaf',
        name: "companyProfile",
        title: "companyProfile",  //菜單使用這個名字,
        lang: "companyProfile"
    },
    children: [
      {
        path: '/companyProfile',
        name: 'companyProfile',
        meta: {
            icon: "ios-leaf",
            title: "companyProfile",
            lang: "companyProfile"
        },
        component: () => import('@/view/companyProfile/companyProfile.vue')
      }
    ]
  },
  {
    path: '/accountMangement',
    name: 'accountMangement',       // 單層菜單title
    component: Main,
    meta: {
        icon: 'ios-leaf',
        name: "accountMangement",
        title: "accountMangement",  //菜單使用這個名字,
        lang: "accountMangement"
    },
    children: [
      {
        path: '/dataManagement',
        name: 'accountMangement',
        meta: {
            icon: "ios-leaf",
            title: "accountMangement",
            lang: "accountMangement"
        },
        component: () => import('@/view/accountMangement/accountMangement.vue')
      }
    ]
  },
  {
    path: '/operationpoint',
    name: 'operationpoint',       // 單層菜單title
    component: Main,
    meta: {
        icon: 'ios-leaf',
        name: "operationpoint",
        title: "operationpoint",  //菜單使用這個名字,
        lang: "operationpoint",
        hideInMenu:true 
    },
    children: [
      {
        path: '/operationpoint',
        name: 'operationpoint',
        meta: {
            icon: "ios-leaf",
            title: "operationpoint",
            lang: "operationpoint"
        },
        component: () => import('@/view/operationpoint/operationpoint.vue')
      }
    ]
  },
//   {
//     path: '/orgTree',
//     name: 'orgTree',       // 單層菜單title
//     component: Main,
//     meta: {
//         icon: 'ios-apps',
//         name: "orgTree",
//         title: "accounorgTreetMangement",  //菜單使用這個名字,
//         lang: "orgTree"
//     },
//     children: [
//       {
//         path: '/orgTree',
//         name: 'orgTree',
//         meta: {
//             icon: "ios-appstore",
//             title: "orgTree",
//             lang: "orgTree"
//         },
//         component: () => import('@/view/orgTree/orgTree.vue')
//       }
//     ]
//   },

//   {
//     path: '/service_page',
//     name: '用戶/門店', //only ACAREPRO admin can use
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       icon: 'logo-markdown',
//       title: '用戶管理'
//     },
//     children: [
//       {
//         path: '/admin_page',
//         name: '管理員',
//         meta: {
//           icon: 'md-person',//MAYBE we can use font awesome?
//           title: '管理員'
//         },
//         component: () => import('@/view/user/admin.vue')
//       },
//       {
//         path: '/service_page',
//         name: '普通用戶',
//         meta: {
//           icon: 'md-person',//MAYBE we can use font awesome?
//           title: '普通用戶'
//         },
//         component: () => import('@/view/user/user_page.vue')
//       },
//       {
//         path: '/service_CXJ',
//         name: '門店',
//         meta: {
//           icon: 'ios-calendar',//MAYBE we can use font awesome?
//           title: '門店'
//         },
//         component: () => import('@/view/manageStore/service_CXJ/index.vue')
//       },
//     ]
//   },


//   {
//     path: "/gift",
//     name: "禮品",      //name
//     meta: {
//       access: ['superadmin', 'admin'],
//       hideInBread: true,
//       title: "禮品",
//       icon: 'md-list',
//     },
//     component: Main,
//     children: [
//       {
//         path: 'giftCategory_page',
//         name: '禮品分類',
//         meta: {
//           icon: 'md-list',
//           title: '禮品分類'
//         },
//         component: () => import('@/view/giftCategory/giftCategory.vue')
//       },
      
//       {
//         path: 'gift_page',
//         name: '禮品列表',
//         meta: {
//           icon: 'md-browsers',
//           title: '禮品列表'
//         },
//         component: () => import('@/view/gift/gift.vue')
//       },
//       {
//         path: 'recode_page',
//         name: '禮品兌換記錄',
//         meta: {
//           icon: 'ios-list-box-outline',
//           title: '禮品兌換記錄'
//         },
//         component: () => import('@/view/recode/recode.vue')
//       }
//     ]
//   },
  // {
  //   path: "/giftCategory",
  //   name: "禮品分類",      //name
  //   meta: {
  //     access: ['superadmin', 'admin'],
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'giftCategory_page',
  //       name: '禮品分類',
  //       meta: {
  //         icon: 'md-list',
  //         title: '禮品分類'
  //       },
  //       component: () => import('@/view/giftCategory/giftCategory.vue')
  //     }
  //   ]
  // },
  // {
  //   path: "/recode",
  //   name: "禮品兌換記錄",      //name
  //   meta: {
  //     hideInBread: true,
  //     access: ['superadmin', 'admin'],
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'recode_page',
  //       name: '禮品兌換記錄',
  //       meta: {
  //         icon: 'ios-list-box-outline',
  //         title: '禮品兌換記錄'
  //       },
  //       component: () => import('@/view/recode/recode.vue')
  //     }
  //   ]
  // },
  
  
//   {
//     path: '/news',
//     name: '新資訊', //only ACAREPRO admin can use
//     // redirect: '/service',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       notCache: true,
//       icon: 'ios-sunny',//MAYBE we can use font awesome?
//         title: '新資訊發佈',
//     },
//     children: [
//       {
//         path: 'newsCategory_page',
//         name: '新資訊分類',
//         meta: {
//           icon: 'md-list',//MAYBE we can use font awesome?
//           title: '新資訊分類',
//         },
//         component: () => import('@/view/newsCategory/newsCategory.vue')
//       },
//       {
//         path: 'news_page',
//         name: '新資訊發佈',
//         meta: {
//           icon: 'ios-sunny',//MAYBE we can use font awesome?
//           title: '新資訊發佈',
//         },
//         component: () => import('@/view/news/news.vue')
//       }
//     ]
//   },
  // {
  //   path: '/newsCategory',
  //   name: '新資訊分類', //only ACAREPRO admin can use
  //   // redirect: '/service',
  //   component: Main,
  //   meta: {
  //     hideInBread: true,
  //     notCache: true
  //   },
  //   children: [
  //     {
  //       path: 'newsCategory_page',
  //       name: '新資訊分類',
  //       meta: {
  //         icon: 'md-list',//MAYBE we can use font awesome?
  //         title: '新資訊分類',
  //       },
  //       component: () => import('@/view/newsCategory/newsCategory.vue')
  //     }
  //   ]
  // },
  
  
//   {
//     path: "/discount",
//     name: "優惠券",      //name
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       icon: 'ios-barcode',
//       title: '優惠券'
//     },
//     component: Main,
//     children: [
//       {
//         path: 'discountCate_page',
//         name: '優惠券分類',
//         meta: {
//           icon: 'md-list',
//           title: '優惠券分類'
//         },
//         component: () => import('@/view/discountCategory/discountCategory.vue')
//       },
//       {
//         path: 'discount_page',
//         name: '優惠券列表',
//         meta: {
//           icon: 'ios-barcode',
//           title: '優惠券列表'
//         },
//         component: () => import('@/view/discount/discount.vue')
//       },
//       {
//         path: 'ticketRecode_page',
//         name: '優惠券兌換記錄',
//         meta: {
//           icon: 'ios-list-box-outline',
//           title: '優惠券兌換記錄'
//         },
//         component: () => import('@/view/ticketRecode/ticketRecode.vue')
//       }
//     ]
//   },
  // {
  //   path: "/discountCate",
  //   name: "優惠券分類",      //name
  //   meta: {
  //     hideInBread: true,
  //     access: ['superadmin', 'admin'],
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'discountCate_page',
  //       name: '優惠券分類',
  //       meta: {
  //         icon: 'md-list',
  //         title: '優惠券分類'
  //       },
  //       component: () => import('@/view/discountCategory/discountCategory.vue')
  //     }
  //   ]
  // },

  // {
  //   path: "/ticketRecode",
  //   name: "優惠券兌換記錄",      //name
  //   meta: {
  //     hideInBread: true,
  //     access: ['superadmin', 'admin'],
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'ticketRecode_page',
  //       name: '優惠券兌換記錄',
  //       meta: {
  //         icon: 'ios-list-box-outline',
  //         title: '優惠券兌換記錄'
  //       },
  //       component: () => import('@/view/ticketRecode/ticketRecode.vue')
  //     }
  //   ]
  // },

  // {
  //   path: "/ticket",
  //   name: "三方票券管理",      //name
  //   meta: {
  //     hideInBread: true,
  //     access: ['superadmin', 'admin'],
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'ticket_page',
  //       name: '三方票券管理',
  //       meta: {
  //         icon: 'ios-barcode',
  //         title: '三方票券管理'
  //       },
  //       component: () => import('@/view/ticket/ticket_page.vue')
  //     }
  //   ]
  // },
//   {
//     path: '/poster',
//     name: '首頁輪播圖',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       //hideInMenu: true
//     },
//     children: [
//       {
//         path: 'poster_page',
//         name: '首頁輪播圖',
//         meta: {
//           icon: 'ios-hammer',
//           title: '首頁輪播圖'
//         },
//         component: () => import('@/view/poster/poster_page.vue')
//       }
//     ]
//   },

//   {
//     path: '/poster',
//     name: '禮品頁BANNER',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       //hideInMenu: true
//     },
//     children: [
//       {
//         path: 'poster2_page',
//         name: '禮品頁BANNER',
//         meta: {
//           icon: 'ios-hammer',
//           title: '禮品頁BANNER'
//         },
//         component: () => import('@/view/poster/poster2_page.vue')
//       }
//     ]
//   },

//   {
//     path: '/sign',
//     name: '簽到',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       //hideInMenu: true
//     },
//     children: [
//       {
//         path: 'poster2_page',
//         name: '簽到',
//         meta: {
//           icon: 'md-log-in',
//           title: '簽到'
//         },
//         component: () => import('@/view/sign/sign.vue')
//       }
//     ]
//   },
//   {
//     path: '/message',
//     name: '消息',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       //hideInMenu: true
//     },
//     children: [
//       {
//         path: 'message_list',
//         name: '消息',
//         meta: {
//           icon: 'ios-alert',
//           title: '消息'
//         },
//         component: () => import('@/view/message/message.vue')
//       }
//     ]
//   },
//   {
//     path: '/oldMember',
//     name: '舊會員轉移資料',
//     component: Main,
//     meta: {
//       hideInBread: true,
//       access: ['superadmin', 'admin'],
//       //hideInMenu: true
//     },
//     children: [
//       {
//         path: 'oldMember',
//         name: '舊會員轉移資料',
//         meta: {
//           icon: 'ios-alert',
//           title: '舊會員轉移資料'
//         },
//         component: () => import('@/view/oldMember/list.vue')
//       }
//     ]
//   },



//   {
//     path: '/excel',
//     name: 'error_401',
//     meta: {
//       hideInMenu: true
//     },
//     component: () => import('@/view/error-page/export.vue')
//   },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    // redirect:'/login'
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
