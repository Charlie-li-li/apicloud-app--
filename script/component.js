//首页排行美客列表显示模板组件
Vue.component('mmlistph', {
    props: ['mkmodel'],
    template: `
  <div tapmode @click="openWin('mmdetail_win',mkmodel)" class="aui-col-xs-4">
      <img width="60" :src="mkmodel._faceurl" />
      <div class="aui-grid-label">{{mkmodel._nick}}</div>
  </div>
  `,
    methods: {
        openWin: function(winName, dt) {
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
                pageParam: {
                    dt: dt
                }
            });
        }
    }
})

//美客列表显示模板组件
Vue.component('mmlist', {
    props: ['mkmodel'],
    template: `
  <li class="aui-col-xs-6">
      <a href="javascript:;" tapmode @click="openWin('mmdetail_win',mkmodel)">
          <img :src="mkmodel._picurl">
          <div>{{mkmodel._nick}}</div>
      </a>
  </li>
  `,
    methods: {
        openWin: function(winName, dt) {
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
                pageParam: {
                    dt: dt
                }
            });
        }
    }
})

//美客页面标签组件代码
Vue.component('lblist', {
    props: ['lbmodel'],
    template: `
  <span tapmode onclick="selectM(this)" @click="filtermmlist(lbmodel.id)" style="padding:5px 8px;" class="aui-label aui-label-outlined aui-margin-l-5 aui-margin-b-5">{{lbmodel.title}}</span>
  `,
    methods: {
        filtermmlist: function(id) {
            appmmlist.mmlist = appmmlist.mmyslist.filter(function(ele) {
                return ele.lb.includes(id);
            })
        }
    }
})

//视频列表页面组件代码
Vue.component('vdlist', {
    props: ['vdmodel'],
    template: `
  <div class="aui-card-list">
      <div class="aui-card-list-header aui-card-list-user aui-border-b">
          <div class="aui-card-list-user-avatar">
              <img :src="vdmodel.user.txpicurl" class="aui-img-round" />
          </div>
          <div class="aui-card-list-user-name">
              <div>{{vdmodel.user.name}}<i class="vip vip-xs"></i></div>
              <small>1天前</small>
          </div>
          <div class="aui-card-list-user-info">{{vdmodel.user.yx}}</div>
      </div>
      <div class="aui-card-list-content">
          <img tapmodel @click="bf(vdmodel.vd.src)" :src="vdmodel.vd.puzzle" />
      </div>
      <div class="aui-card-list-footer aui-border-t">
          <div tapmode onclick="showMessage(0)" class="aui-font-size-12"><i class="aui-iconfont aui-icon-star aui-font-size-14"></i> 666次</div>
          <div tapmode onclick="openSharebox()" class="aui-font-size-12"><i class="aui-iconfont aui-icon-share aui-font-size-14"></i> 分享</div>
          <div tapmode onclick="showPopup('bottom-left')" class="aui-font-size-12 aui-text-danger"><i class="aui-iconfont aui-icon-like aui-font-size-14"></i> 鼎力支持</div>
      </div>
  </div>
  `,
    methods: {
        bf: function(href) {
            var videoPlayer = api.require('videoPlayer');
            videoPlayer.play({
                texts: {
                    head: {
                        title: '顶部文字'
                    }
                },
                styles: {
                    head: {
                        bg: 'rgba(0.5,0.5,0.5,0.7)',
                        height: 40,
                        titleSize: 14,
                        titleColor: '#fff',
                        backSize: 20,
                        backImg: 'fs://img/back.png',
                        setSize: 20,
                        setImg: 'fs://img/set.png'
                    },
                    foot: {
                        bg: 'rgba(0.5,0.5,0.5,0.7)',
                        height: 44,
                        playSize: 14,
                        playImg: 'fs://img/back.png',
                        pauseImg: 'fs://img/back.png',
                        nextSize: 14,
                        nextImg: 'fs://img/back.png',
                        timeSize: 14,
                        timeColor: '#fff',
                        sliderImg: 'fs://img/slder.png',
                        progressColor: '#696969',
                        progressSelected: '#76EE00',
                        verticalImg:'widget://image/wait_pay.png',                //（可选项）字符串类型；底部竖屏按钮的背景图片，要求本地路径（widget://、fs://）；默认：竖屏按钮图标
                        horizontalImg:'widget://image/wait_pay_selector.png'
                    }
                },
                path: href, //（可选项）字符串类型；文档的路径，支持网络和本地（fs://）路径；默认：未传值时不播放
                //在 android 平台上不支持 widget://
                autoPlay: true //（可选项）布尔类型；打开时是否自动播放；默认：true（自动播放）
            }, function(ret, err) {
                if (ret) {
                    //alert(JSON.stringify(ret));
                } else {
                    alert(JSON.stringify(err));
                }
            });
        }
    }
})

//消息列表页面组件代码
Vue.component('msglist', {
    props: ['msgmodel', 'index'],
    template: `
  <li tapmode @click="refeshreadcount(index,msgmodel.user.userid)" class="aui-list-item aui-list-item-middle">
      <div class="aui-media-list-item-inner">
          <div class="aui-list-item-media wechat-avatar">
              <div v-if="msgmodel.msg.noreadcount>0" class="aui-badge">{{msgmodel.msg.noreadcount}}</div>
              <img :src="msgmodel.user.txpicurl" />
          </div>
          <div class="aui-list-item-inner">
              <div class="aui-list-item-text">
                  <div class="aui-list-item-title aui-font-size-14">{{msgmodel.user.name}}</div>
                  <div class="aui-list-item-right">星期一</div>
              </div>
              <div class="aui-list-item-text aui-font-size-12">
                  {{msgmodel.msg.info}}
              </div>
          </div>
      </div>
  </li>
  `,
    methods: {
        refeshreadcount: function(aindex, dt) {
            appmsg.msglist[aindex].msg.noreadcount = 0;
            this.openWin('chat_win', dt);
        },
        openWin: function(winName, dt) {
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
                pageParam: {
                    dt: dt
                }
            });
        }
    }
})
