angular.module("controllers",["ngCordova"])

  // 首页的控制器
  .controller("shouyeC",function ($scope,$http,$state,$ionicSlideBoxDelegate,MainData) {
    $scope.mine={
      itemClick:function (index) {
        $state.go("tab.youxi");
        MainData.xiangxi.name=$scope.mine.lbArr[index];
      },
      lunbo:function (index) {
        $state.go("tab.youxi");
        MainData.xiangxi.name=$scope.mine.lunboArr[index];
      }

    };




    //轮播图数据请求
    $scope.url = encodeURIComponent("http://data.25game.com/Ad.aspx");


    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
      method:"GET"
    })
      .then(function (res) {

        $scope.mine.lunboArr=res.data.Data;

      })
      .then(function (error) {
        if (error){

        }
      });
    $scope.$watch("mine.lunboArr" , function (newValue , oldValue) {
      if(newValue && newValue.length > 1){
        $ionicSlideBoxDelegate.update();
        $ionicSlideBoxDelegate.loop(true);
      }
    });


  //  列表数据请求

    $scope.url1 = encodeURIComponent("http://data.25game.com/AppList.aspx?");

    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url1,
      method:"GET"
    })
      .then(function (res) {
        for (var i=0;i<res.data.Data.length;i++){
          var Style = res.data.Data[i].Style;
          Style = Style.split("|");
          res.data.Data[i].Style = Style;
          var NetSize = res.data.Data[i].NetSize;
          NetSize = NetSize/1024;
          NetSize=parseFloat(NetSize).toFixed(1);
          res.data.Data[i].NetSize = NetSize;
        }

        $scope.mine.lbArr=res.data.Data;
      })
      .then(function (error) {
        if (error){

        }
      });
    // 刷新
    $scope.doRefresh = function() {
      //轮播图数据请求
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
        method:"GET"
      })
        .then(function (res) {
          $scope.mine.lunboArr=res.data.Data;
        $scope.$broadcast('scroll.refreshComplete');
        })
        .then(function (error) {
          if (error){
          }
        });
      $scope.$watch("mine.lunboArr" , function (newValue , oldValue) {
        if(newValue && newValue.length > 1){
          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);
        }
      });
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url1,
        method:"GET"
      })
        .then(function (res) {
          for (var i=0;i<res.data.Data.length;i++){
            var Style = res.data.Data[i].Style;
            Style = Style.split("|");
            res.data.Data[i].Style = Style;
            var NetSize = res.data.Data[i].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            res.data.Data[i].NetSize = NetSize;
          }

          $scope.mine.lbArr=res.data.Data;
          $scope.$broadcast('scroll.refreshComplete');
        })
        .then(function (error) {
          if (error){
          }
        });
    };
    // 加载
    var suiji =2;
    $scope.mine.lbArr=[];
    $scope.loadMore = function() {

      var abc =true;
      if (abc){
        $scope.url2 = encodeURIComponent("http://data.25game.com/AppList.aspx?UserId=&Page="+suiji+"&ClassId=-1&Language=&Key=&Style=-1&SdkVersion=23&Sort=&Login=0&TypeId=-1");
        suiji++;
      }
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url2,
        method:"get"
      })
        .then(function (res) {
          for (var j=0;j<res.data.Data.length;j++){
            var Style = res.data.Data[j].Style;
            Style = Style.split("|");
            res.data.Data[j].Style = Style;
            var NetSize = res.data.Data[j].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            res.data.Data[j].NetSize = NetSize;


          }
          for(var i = 0; i < res.data.Data.length; i++){
            $scope.mine.lbArr.push(res.data.Data[i]);
          }
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
        .then(function (error) {
          if (error){
          }
        });
    };

  })
  //分类页面的控制器
  .controller("fenleiC",function ($scope,$http,$state,$stateParams,MainData) {
    $scope.mine={
      liebiaoFn:function (index) {


        $state.go("tab.detail");
        MainData.shuju.name=$scope.mine.leibiaoArr[index];
      }
    };
    $scope.url = encodeURIComponent("http://data.25game.com/AppType.aspx?Style=-1&SdkVersion=23&UserId=&ClassId=2&Language=");
    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
      method:"GET"
    })
      .then(function (res) {

        $scope.mine.leibiaoArr=res.data.Data;
      })
      .then(function (error) {
        if (error){
        }
      });

  })
  //网游页面控制器
  .controller("wangyouC",function ($scope,$http,$state,MainData) {
    $scope.mine={
      wnagyouFn:function (index) {


        $state.go("tab.Btyouxi");
        MainData.xiangxi.name=$scope.mine.wangyouArr[index];
      }
    };
    //网友列表请求数据
    $scope.url = encodeURIComponent("http://data.25game.com/AppList.aspx?UserId=&Page=1&ClassId=2&Language=&Key=&Style=-1&SdkVersion=23&Sort=new&Login=0&TypeId=35");


    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
      method:"GET"
    })
      .then(function (res) {
        for (var i=0;i<res.data.Data.length;i++){
          var Style = res.data.Data[i].Style;
          Style = Style.split("|");
          res.data.Data[i].Style = Style;
          var NetSize = res.data.Data[i].NetSize;
          NetSize = NetSize/1024;
          NetSize=parseFloat(NetSize).toFixed(1);
          res.data.Data[i].NetSize = NetSize;
          var FileLink = res.data.Data[i].FileLink;
          FileLink = FileLink.split("#");
          // console.log(FileLink);
          res.data.Data[i].FileLink = FileLink;
        }
        $scope.mine.wangyouArr=res.data.Data;
      })
      .then(function (error) {
        if (error){

        }
      });


    $scope.doRefresh = function() {
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
        method:"GET"
      })
        .then(function (res) {
          for (var i=0;i<res.data.Data.length;i++){
            var Style = res.data.Data[i].Style;
            Style = Style.split("|");
            res.data.Data[i].Style = Style;
            var NetSize = res.data.Data[i].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            res.data.Data[i].NetSize = NetSize;
            var FileLink = res.data.Data[i].FileLink;
            FileLink = FileLink.split("#");
            // console.log(FileLink);
            res.data.Data[i].FileLink = FileLink;
          $scope.mine.wangyouArr=res.data.Data;
        }
          $scope.$broadcast('scroll.refreshComplete');
        })
        .then(function (error) {
          if (error){
          }
        });
    };
    // 加载
    var suiji =2;
    $scope.loadMore = function() {
      var abc =true;
      if (abc){
        $scope.url3 = encodeURIComponent("http://data.25game.com/AppList.aspx?UserId=&Page="+suiji+"&ClassId=2&Language=&Key=&Style=-1&SdkVersion=23&Sort=new&Login=0&TypeId=35");
        suiji++;
        console.log(suiji);
      }
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url3,
        method:"GET"
      })
        .then(function (res) {
          for (var j=0;j<res.data.Data.length;j++){
            var Style = res.data.Data[j].Style;
            Style = Style.split("|");
            res.data.Data[j].Style = Style;
            var NetSize = res.data.Data[j].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            res.data.Data[j].NetSize = NetSize;
          }
          for(var i = 0; i < res.data.Data.length; i++){
            $scope.mine.wangyouArr.push(res.data.Data[i]);
          }
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
        .then(function (error) {
          if (error){

          }
        });
    };


  })
  //我的页面控制器
  .controller("wodeC" , function ($scope,$state,$http) {
    $scope.name = "立即登录"
    $scope.touxiang = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3610704133,3947436040&fm=21&gp=0.jpg";
    // qq登录
    $scope.QQloginFn = function () {

      QQSDK.ssoLogin(function (res) {
        // alert(res.access_token);
        // alert(res.userid);
        $scope.useraccess_token = res.access_token;
        $scope.userid = res.userid;
        //获取用户信息
        $scope.qqurl =encodeURIComponent("https://graph.qq.com/user/get_user_info?access_token=" + $scope.useraccess_token + "&oauth_consumer_key=1105995384&openid=" + $scope.userid);
        $http({
          url:"http://59.110.139.104:3000/wy?myUrl="+$scope.qqurl,
          method:"GET"
        })
          .then(function (res) {
            $scope.name = res.data.nickname;
            $scope.touxiang = res.data.figureurl_qq_2;
          })
      },function (error) {
        // alert(error);
      });
    }
    // 退出
    $scope.QQtuichu = function () {
      QQSDK.logout(function () {
        alert('退出成功');
        $scope.name = "立即登录"
        $scope.touxiang = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3610704133,3947436040&fm=21&gp=0.jpg";
      }, function (failReason) {
        alert(failReason);
      });
    }
    $scope.zhuanti=function () {

      $state.go("tab.zhuantifenlei");
    }
    // $scope.denglufn = function () {
    //
    //   $state.go("tab.denglu" , {
    //
    //   })
    // }
  })
  //详情页控制器
  .controller("detailC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
    $scope.mine={
      xiangqingClick:function (index) {
        $state.go("tab.fenleiyouxi");
        MainData.xiangxi.name=$scope.mine.litArr[index];
      }

    };
    $scope.data = MainData.shuju.name;
    console.log( $scope.data);
    $scope.url = "http://data.25game.com/AppList.aspx?UserId=&Page=1&ClassId=2&Language=&Key=&Style=-1&SdkVersion=23&Sort=new&Login=0&TypeId=" + $scope.data.TypeId;
    $scope.url = encodeURIComponent($scope.url);
    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
      method:"GET",


    })
      .then(function (res) {

        for (var i=0;i<res.data.Data.length;i++) {
          var Style = res.data.Data[i].Style;
          Style = Style.split("|");
          res.data.Data[i].Style = Style;
          var NetSize = res.data.Data[i].NetSize;
          NetSize = NetSize / 1024;
          NetSize = parseFloat(NetSize).toFixed(1);
          res.data.Data[i].NetSize = NetSize;
        }
        $scope.mine.litArr=res.data.Data;
      })
      .then(function (error) {
        if (error){

        }
      });
    $scope.doRefresh = function() {
      console.log("开始刷新");
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
        method:"GET"
      })
        .then(function (res) {
          console.log(res.data);


          for (var i=0;i<res.data.Data.length;i++){

            var Style = res.data.Data[i].Style;
            Style = Style.split("|");
            res.data.Data[i].Style = Style;
            var NetSize = res.data.Data[i].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            res.data.Data[i].NetSize = NetSize;
            var FileLink = res.data.Data[i].FileLink;
            FileLink = FileLink.split("#");
            res.data.Data[i].FileLink = FileLink;
            $scope.mine.litArr=res.data.Data;
          }
          $scope.$broadcast('scroll.refreshComplete');
        })
        .then(function (error) {
          if (error){
          }
        });
    };
    // 加载
    var suijis =2;

    $scope.mine.litArr=[];
    $scope.moreDataCanBeLoaded = function () {
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }

    $scope.loadMore = function() {
      // if(MainData.isLoading == false){
        var abc =true;
        if (abc){
          $scope.url3 = encodeURIComponent("http://data.25game.com/AppList.aspx?UserId=&Page="+suijis+"&ClassId=2&Language=&Key=&Style=-1&SdkVersion=23&Sort=new&Login=0&TypeId="+ $scope.data.TypeId);
          suijis++;
          console.log(suijis);
        }
        $http({
          url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url3,
          method:"GET"
        })
          .then(function (res) {

            for (var j=0;j<res.data.Data.length;j++){
              var Style = res.data.Data[j].Style;
              Style = Style.split("|");
              res.data.Data[j].Style = Style;
              var NetSize = res.data.Data[j].NetSize;
              NetSize = NetSize/1024;
              NetSize=parseFloat(NetSize).toFixed(1);
              res.data.Data[j].NetSize = NetSize;


            }
            for(var i = 0; i < res.data.Data.length; i++){
              $scope.mine.litArr.push(res.data.Data[i]);
            }


            console.log("加载数据完毕");
            $scope.$broadcast('scroll.infiniteScrollComplete');
            console.log($scope.mine.litArr);

          })
          .then(function (error) {
            if (error){
              console.log(error.message);
              $scope.$broadcast('scroll.infiniteScrollComplete');
            }
          });
      $scope.$on('stateChangeSuccess', function() {
        $scope.loadMore();
      });
      // }
    };
  })
//游戏详情页控制器
  .controller("youxiC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
    $scope.datas = MainData.xiangxi.name;
    $scope.url = "http://data.25game.com/AppView.aspx?AppId=" +  $scope.datas.AppId;
    $scope.url = encodeURIComponent($scope.url);

    $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
    $.ajax($scope.url,{
      dataType: "text",
      success: function(data) {
        data = data.replace(/<\/?.+?>/g,"");
        data = data.replace(/[\r\n]/g, "");
        data = data.replace(/\s+/g, "");
        $.parseJSON(data);
        data = JSON.parse(data);
        if (data.Data.Style=""){

        }
        else {
          var Style = data.Data.Style;
          Style = Style.split("|");
          data.Data.Style = Style;
        }

        var Thumbnail =data.Data.Thumbnail;
        Thumbnail = Thumbnail.split("|");
        data.Data.Thumbnail = Thumbnail;
        var NetSize = data.Data.NetSize;
        NetSize = NetSize/1024;
        NetSize=parseFloat(NetSize).toFixed(1);
        data.Data.NetSize = NetSize;
        $scope.mine = {
          listArr:data.Data
        }
        $scope.fenxiang = function () {
          var args = {};
          args.scene = QQSDK.Scene.QQ;
          args.url =  $scope.url;
          args.title = $scope.mine.listArr.Title;
          args.description = $scope.mine.listArr.Content;
          args.image = $scope.mine.listArr.Icon;
          QQSDK.shareNews(function () {
            alert('分享成功');
          }, function (failReason) {
            alert('分享失败');
          },args);
        }
        // 下载页面的开始
        if (data.Data.FileLink==''){
          var downLoq = data.Data.FileData;
          downLoq = downLoq.split("#");
          data.Data.FileData = downLoq;
          $scope.abc = data.Data.FileData[1];
        }
        else {
          var downLo = data.Data.FileLink;
          downLo = downLo.split("#");
          data.Data.FileLink = downLo;
          $scope.abc = data.Data.FileLink[1];
        }

        $scope.openUrl = function () {
          if (!cordova.InAppBrowser){
            return;
          }
          cordova.InAppBrowser.open($scope.abc, '_system', 'location=no,hidden=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
        }
      },
      error: function(err) {

      }
    });
  })
  .controller("fenleiyouxiC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
  $scope.datas = MainData.xiangxi.name;

  // console.log(MainData.xiangxi.name);



  $scope.url = "http://data.25game.com/AppView.aspx?AppId=" +  $scope.datas.AppId;
  $scope.url = encodeURIComponent($scope.url);

  $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
  $.ajax($scope.url,{
    dataType: "text",
    success: function(data) {
      data = data.replace(/<\/?.+?>/g,"");
      data = data.replace(/[\r\n]/g, "");
      data = data.replace(/\s+/g, "");
      $.parseJSON(data);
      data = JSON.parse(data);
      if (data.Data.Style=""){

      }
      else {
        var Style = data.Data.Style;
        Style = Style.split("|");
        data.Data.Style = Style;
      }

      var Thumbnail =data.Data.Thumbnail;
      Thumbnail = Thumbnail.split("|");
      data.Data.Thumbnail = Thumbnail;
      var NetSize = data.Data.NetSize;
      NetSize = NetSize/1024;
      NetSize=parseFloat(NetSize).toFixed(1);
      data.Data.NetSize = NetSize;
      $scope.mine = {
        listArr:data.Data
      }

      $scope.fenxiang = function () {
        var args = {};
        args.scene = QQSDK.Scene.QQ;
        args.url =  $scope.url;
        args.title = $scope.mine.listArr.Title;
        args.description = $scope.mine.listArr.Content;
        args.image = $scope.mine.listArr.Icon;
        QQSDK.shareNews(function () {
          alert('分享成功');
        }, function (failReason) {
          alert('分享失败');
        },args);
      }
      // 下载页面的开始
      if (data.Data.FileLink==''){
        var downLoq = data.Data.FileData;
        downLoq = downLoq.split("#");
        data.Data.FileData = downLoq;
        $scope.abc = data.Data.FileData[1];
      }
        else {

        var downLo = data.Data.FileLink;
        downLo = downLo.split("#");
        data.Data.FileLink = downLo;
        $scope.abc = data.Data.FileLink[1];
      }
      $scope.openUrl = function () {
        if (!cordova.InAppBrowser){
          return;
        }
          cordova.InAppBrowser.open($scope.abc, '_system', 'location=no,hidden=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
       }

    },
    error: function(err) {
    }
  });

})
  .controller("BtyouxiC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
  $scope.datas = MainData.xiangxi.name;
  $scope.goBackFn = function () {
    window.history.go(-1);
  }
  $scope.url = "http://data.25game.com/AppView.aspx?AppId=" +  $scope.datas.AppId;
  $scope.url = encodeURIComponent($scope.url);
  $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
  $.ajax($scope.url,{
    dataType: "text",
    success: function(data) {
      data = data.replace(/<\/?.+?>/g,"");
      data = data.replace(/[\r\n]/g, "");
      data = data.replace(/\s+/g, "");
      $.parseJSON(data);
      data = JSON.parse(data);
      if (data.Data.Style=""){

      }
      else {
        var Style = data.Data.Style;
        Style = Style.split("|");
        data.Data.Style = Style;
      }

      var Thumbnail =data.Data.Thumbnail;
      Thumbnail = Thumbnail.split("|");
      data.Data.Thumbnail = Thumbnail;
      var NetSize = data.Data.NetSize;
      NetSize = NetSize/1024;
      NetSize=parseFloat(NetSize).toFixed(1);
      data.Data.NetSize = NetSize;
      $scope.mine = {
        listArr:data.Data
      }
      $scope.fenxiang = function () {
        var args = {};
        args.scene = QQSDK.Scene.QQ;
        args.url =  $scope.url;
        args.title = $scope.mine.listArr.Title;
        args.description = $scope.mine.listArr.Content;
        args.image = $scope.mine.listArr.Icon;
        QQSDK.shareNews(function () {
          alert('分享成功');
        }, function (failReason) {
          alert('分享失败');
        },args);
      }

      if (data.Data.FileLink==''){
        var downLoq = data.Data.FileData;
        downLoq = downLoq.split("#");
        data.Data.FileData = downLoq;
        $scope.abc = data.Data.FileData[1];
      }
      else {

        var downLo = data.Data.FileLink;
        downLo = downLo.split("#");
        data.Data.FileLink = downLo;
        $scope.abc = data.Data.FileLink[1];

      }

      $scope.openUrl = function () {
        if (!cordova.InAppBrowser){
          return;
        }
        cordova.InAppBrowser.open($scope.abc, '_system', 'location=no,hidden=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
      };

      // 下载的页面的结束

    },
    error: function(err) {

    }

  });

})
  .controller("zhuantifenleiC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData){
    $scope.url = encodeURIComponent("http://data.25game.com/AlbumList.aspx?Sort=New&Page=1");


    $http({
      url:"http://59.110.139.104:3000/wy?myUrl="+$scope.url,
      method:"GET"
    })
      .then(function (res) {
       console.log(res.data.Data);
        $scope.zhuantifenlei = res.data.Data;
        console.log($scope.zhuantifenlei);
      })
      .then(function (error) {
        if (error){

        }
      });
    $scope.flzt=function (index) {

      // console.log(index);

      // $state.go("tab.youxi");
      $state.go("tab.zhuantiyouxifenlei");
      MainData.zhuanti.name=$scope.zhuantifenlei[index];
    }
  })
  .controller("zhuantiyouxifenleiC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
    $scope.hejixq=function (index) {
      console.log(index);
      $state.go("tab.hejixq");
      MainData.xiangxi.name=$scope.yxsj[index];
    }

    $scope.data = MainData.zhuanti.name;
    // console.log( $scope.data);
    $scope.url = "http://data.25game.com/AlbumView.aspx?Page=1&AlbumId=" + $scope.data.AlbumId;
    $scope.url = encodeURIComponent($scope.url);
    $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
    $.ajax($scope.url, {
      dataType: "text",
      success: function (data) {

        data = data.replace(/<\/?.+?>/g, "");
        data = data.replace(/[\r\n]/g, "");
        data = data.replace(/\s+/g, "");
        $.parseJSON(data);

        data = JSON.parse(data);

        for (var i=0;i<data.Data.length;i++){
          var Style = data.Data[i].Style;
          Style = Style.split("|");
          data.Data[i].Style = Style;
          var NetSize = data.Data[i].NetSize;
          NetSize = NetSize/1024;
          NetSize=parseFloat(NetSize).toFixed(1);
          data.Data[i].NetSize = NetSize;
          var FileLink = data.Data[i].FileLink;
          FileLink = FileLink.split("#");
          // console.log(FileLink);
          data.Data[i].FileLink = FileLink;
        }

        $scope.yxhj = data;
        $scope.yxsj = data.Data;
        // console.log(data);

      },

      error: function (err) {

      }

      });

    // // 加载
    var suijis =2;

    $scope.yxsj=[];
    $scope.moreDataCanBeLoaded = function () {
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    //
    $scope.loadMore = function() {
      // if(MainData.isLoading == false){
      var abc =true;
      if (abc){
        $scope.url = encodeURIComponent("http://data.25game.com/AlbumView.aspx?Page="+suijis+"&AlbumId="+ $scope.data.AlbumId);
        suijis++;

      }
      $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
      $.ajax($scope.url, {
        dataType: "text",
        success: function (data) {

          data = data.replace(/<\/?.+?>/g, "");
          data = data.replace(/[\r\n]/g, "");
          data = data.replace(/\s+/g, "");
          $.parseJSON(data);
          data = JSON.parse(data);
          for (var i=0;i<data.Data.length;i++){
            var Style = data.Data[i].Style;
            Style = Style.split("|");
            data.Data[i].Style = Style;
            var NetSize = data.Data[i].NetSize;
            NetSize = NetSize/1024;
            NetSize=parseFloat(NetSize).toFixed(1);
            data.Data[i].NetSize = NetSize;
            var FileLink = data.Data[i].FileLink;
            FileLink = FileLink.split("#");
            // console.log(FileLink);
            data.Data[i].FileLink = FileLink;
          }


          for(var j = 0; j < data.Data.length; j++){
            // $scope.yxsj.push(data.Data[j]);
            $scope.yxsj.push(data.Data[j]);
          }

          $scope.$broadcast('scroll.infiniteScrollComplete');
        },

        error: function (err) {

        }
        });
      $scope.$on('stateChangeSuccess', function() {
        $scope.loadMore();
      });
      // }
    };
  })
  .controller("hejixqC",function ($scope,$stateParams,$state,$http,$cacheFactory,MainData) {
    $scope.datas = MainData.xiangxi.name;
    $scope.url = "http://data.25game.com/AppView.aspx?AppId=" +  $scope.datas.AppId;
    console.log($scope.url);
    $scope.url = encodeURIComponent($scope.url);

    $scope.url="http://59.110.139.104:3000/wy?myUrl="+$scope.url;
    $.ajax($scope.url,{
      dataType: "text",
      success: function(data) {
        data = data.replace(/<\/?.+?>/g,"");
        data = data.replace(/[\r\n]/g, "");
        data = data.replace(/\s+/g, "");
        $.parseJSON(data);
        data = JSON.parse(data);
        if (data.Data.Style=""){

        }
        else {
          var Style = data.Data.Style;
          Style = Style.split("|");
          data.Data.Style = Style;
        }

        var Thumbnail =data.Data.Thumbnail;
        Thumbnail = Thumbnail.split("|");
        data.Data.Thumbnail = Thumbnail;
        var NetSize = data.Data.NetSize;
        NetSize = NetSize/1024;
        NetSize=parseFloat(NetSize).toFixed(1);
        data.Data.NetSize = NetSize;
        $scope.mine = {
          listArr:data.Data
        }
        $scope.fenxiang = function () {
          var args = {};
          args.scene = QQSDK.Scene.QQ;
          args.url =  $scope.url;
          args.title = $scope.mine.listArr.Title;
          args.description = $scope.mine.listArr.Content;
          args.image = $scope.mine.listArr.Icon;
          QQSDK.shareNews(function () {
            alert('分享成功');
          }, function (failReason) {
            alert('分享失败');
          },args);
        }
        // 下载页面的开始
        if (data.Data.FileLink==''){
          var downLoq = data.Data.FileData;
          downLoq = downLoq.split("#");
          data.Data.FileData = downLoq;
          $scope.abc = data.Data.FileData[1];
        }
        else {
          var downLo = data.Data.FileLink;
          downLo = downLo.split("#");
          data.Data.FileLink = downLo;
          $scope.abc = data.Data.FileLink[1];
        }

        $scope.openUrl = function () {
          if (!cordova.InAppBrowser){
            return;
          }
          cordova.InAppBrowser.open($scope.abc, '_system', 'location=no,hidden=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
        }
      },
      error: function(err) {

      }
    });
  });

