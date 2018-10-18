var domailurl = "http://mr.hackcoll.com/";

function DotAjax(url,callback) {
    url = domailurl + url;
    api.ajax({
        url: url,
        method: 'get',
    }, function(ret, err) {
        if (ret) {
            if(callback){
              callback(ret);
            }
        } else {
            api.toast({
                msg: "服务器繁忙，稍后访问!",
                location: 'middle'
            })
        }
    });
}
function openWin(winName, dt) {
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

function refreshMy()
{
  var jsfun = 'refresh();';
  api.execScript({
      name: 'main',
      frameName: 'index_frm',
      script: jsfun
  });
}

function msg(msg)
{
  api.toast({
      msg: msg,
      location: 'middle'
  });
}
