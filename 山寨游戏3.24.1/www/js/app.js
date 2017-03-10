var app = angular.module("starter",["ionic","controllers"]);
app.value('MainData',{
  shuju:{
    name:""
  },
  xiangxi:{
    name:""
  },
  zhuanti:{
    name:""
  },
  isLoading:false
});
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
//    配置默认情况下显示的界面
  $urlRouterProvider.otherwise("/tab/shouye");

//    配置其他界面的路由状态
  $stateProvider.state("tab",{
    url:"/tab",
    abstract:true,
    templateUrl:"templates/tabs.html"

  });
  $stateProvider.state("tab.shouye",{
    url:"/shouye",
    views:{
      "shouye":{
        templateUrl:"templates/shouye.html",
        controller:"shouyeC"

      }
    }
  });
  $stateProvider.state("tab.fenlei",{
    url:"/fenlei",
    views:{
      "fenlei":{
        templateUrl:"templates/fenlei.html",
        controller:"fenleiC"

      }
    }
  });

  $stateProvider.state("tab.wangyou",{
    url:"/wangyou",
    views:{
      "wangyou":{
        templateUrl:"templates/wangyou.html",
        controller:"wangyouC"

      }
    }
  });
  $stateProvider.state("tab.wode",{
    url:"/wode",
    views:{
      "wode":{
        templateUrl:"templates/wode.html",
        controller:"wodeC"
      }
    }
  });
  //配置详情页面的路由
  $stateProvider.state("tab.detail",{
    url:"/detail",
    views:{
      "fenlei":{
        templateUrl:"templates/detail.html",
        controller:"detailC"

      }

    },

    params:{
      name:""
    }
  });
  $stateProvider.state("tab.youxi",{
    // cache: false,
    url:"/youxi",
    views:{
      "shouye":{
        templateUrl:"templates/youxi.html",
        controller:"youxiC"

      }
    }


  });
  $stateProvider.state("tab.Btyouxi",{
    // cache: false,
    url:"/Btyouxi",
    views:{
      "wangyou":{
        templateUrl:"templates/Btyouxi.html",
        controller:"BtyouxiC"

      }
    }


  });
  $stateProvider.state("tab.fenleiyouxi",{
    // cache: false,
    url:"/fenleiyouxi",
    views:{
      "fenlei":{
        templateUrl:"templates/fenleiyouxi.html",
        controller:"fenleiyouxiC"

      }
    }


  });
  $stateProvider.state("tab.zhuantifenlei",{
    // cache: false,
    url:"/zhuantifenlei",
    views:{
      "wode":{
        templateUrl:"templates/zhuantifenlei.html",
        controller:"zhuantifenleiC"

      }
    }


  });
  $stateProvider.state("tab.zhuantiyouxifenlei",{
    // cache: false,
    url:"/zhuantiyouxifenlei",
    views:{
      "wode":{
        templateUrl:"templates/zhuantiyouxifenlei.html",
        controller:"zhuantiyouxifenleiC"

      }
    }


  });
  $stateProvider.state("tab.hejixq",{
    url:"/hejixq",
    views:{
      "wode":{
        templateUrl:"templates/hejixq.html",
        controller:"hejixqC"

      }
    }

  });
});
