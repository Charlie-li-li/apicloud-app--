//首页PPT列表处理
var appppt=new Vue({
  el:'#pptlist',
  data:{
    pptlist:[
      {id:1,ppttype:1,picurl:'../image/temp/b1.jpg'},
      {id:2,ppttype:2,picurl:'../image/temp/b2.png'},
      {id:3,ppttype:3,picurl:'../image/temp/b3.png'},
      {id:4,ppttype:1,picurl:'../image/temp/b4.jpg'}
    ]
  }
})

//首页排行榜列表
var app = new Vue({
    el: '#mmphlist',
    data: {
        phlist: mmdatalist.filter(function(el){
          return el.istop;
        })
    }
})

//首页美客推荐列表
var app1 = new Vue({
    el: '#mmtjlist',
    data: {
        mmlist: mmdatalist
    }
})

//美客标签列表
var applb = new Vue({
    el: '#labelMM',
    data: {
        lblist: [{
            id: 1,
            title: '最热'
        }, {
            id: 2,
            title: '只看男'
        }, {
            id: 3,
            title: '只看女'
        }, {
            id: 4,
            title: '校园背景'
        }, {
            id: 5,
            title: '校外背景'
        }, {
            id: 6,
            title: '图书馆'
        }, {
            id: 7,
            title: '宿舍'
        }, {
            id: 8,
            title: '教学楼'
        }, {
            id: 9,
            title: '运动场'
        }]
    }
})

//美客列表
var appmmlist = new Vue({
    el: '#tabContent',
    data: {
        mmyslist: mmdatalist,
        mmlist:mmdatalist
    }
})

//视频列表
var appvd = new Vue({
    el: '#box3',
    data: {
        vdlist: [{
            user: {
                userid: 1,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/4cb7d9e25f113a1f300927b825aa1e29_header_l.jpg',
                name: '李宝儿',
                yx:'外语学院'
            },
            vd: {
                id: 1,
                puzzle: '../image/temp/puzzle.jpg',
                src: 'http://mp4.vjshi.com/2018-03-05/ae4376ce1e287d306690def395256f06.mp4'
            }
        }, {
            user: {
                userid: 2,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/38068bee049eeee1c6e08cee626a6aba_header_l.jpg',
                name: '张多多',
                yx:'数计学院'
            },
            vd: {
                id: 2,
                puzzle: '../image/temp/puzzle2.jpg',
                src: 'http://mp4.vjshi.com/2018-04-09/0f8c207dcf51fcd79e503f46cdff3d1f.mp4'
            }
        }, {
            user: {
                userid: 3,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/d83cc3c9aa165fc4e2861c1bb611cc67_header_l.jpg',
                name: '曼妮儿',
                yx:'艺术学院'
            },
            vd: {
                id: 3,
                puzzle: '../image/temp/puzzle3.jpg',
                src: 'http://mp4.vjshi.com/2018-04-03/ead35533092d9afbbadfbcf29e939283.mp4'
            }
        }]
    }
})

//消息列表
var appmsg = new Vue({
    el: '#msglist',
    data: {
        msglist: [{
            user: {
                userid: 1,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/4cb7d9e25f113a1f300927b825aa1e29_header_l.jpg',
                name: '李宝儿',
                yx: '外语学院'
            },
            msg: {
                id: 1,
                type: 1, //文字
                info: 'Hello!',
                noreadcount: 9,
                src: 'http://mp4.vjshi.com/2018-03-05/ae4376ce1e287d306690def395256f06.mp4'
            }
        }, {
            user: {
                userid: 2,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/38068bee049eeee1c6e08cee626a6aba_header_l.jpg',
                name: '张多多',
                yx: '数计学院'
            },
            msg: {
                id: 2,
                type: 1, //文字
                info: '感谢你的关注和鼎力支持',
                noreadcount: 1,
                src: 'http://mp4.vjshi.com/2018-03-05/ae4376ce1e287d306690def395256f06.mp4'
            }
        }, {
            user: {
                userid: 3,
                lb: [1, 3, 5],
                level: 1,
                txpicurl: '../image/temp/d83cc3c9aa165fc4e2861c1bb611cc67_header_l.jpg',
                name: '曼妮儿',
                yx: '艺术学院'
            },
            msg: {
                id: 3,
                type: 1, //文字
                info: '让我们一起活出精彩!',
                noreadcount: 0,
                src: 'http://mp4.vjshi.com/2018-03-05/ae4376ce1e287d306690def395256f06.mp4'
            }
        }]
    }
})


//我的页面
if($api.getStorage('loginmodel')._id)
  userdata=$api.getStorage('loginmodel');
var appmy=new Vue({
  el:'#box5',
  data:{
    usermodel:userdata
  },
  methods:{
    openWin:function(winName,dt){
      var delay = 0;
      if (api.systemType != 'ios') {
          delay = 300;
      }
      api.openWin({
          name: '' + winName + '',
          url: '' + winName + '.html',
          bounces: false,
          delay: delay,
          slidBackEnabled: true,
          vScrollBarEnabled: false,
          pageParam:{
            dt:dt
          }
      });
    }
  }
})
