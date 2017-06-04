var http = require("http");


var getlink = {
  getSource: function (url) {
    if (url.search('youtu') != -1){
      return 'y';
    }else{
      if((url.search('mp3') != -1)){
        return 'm';
      }else{
        if((url.search('facebook') != -1)){
          return 'f';
        }else{
          return '0';
        }
      }
    }
  },

  getMediaId: function (url) {
    let s =getlink.getSource(url)
    if(s=='m'){
      //http://mp3.zing.vn/bai-hat/Co-Em-Cho-Min-MrA/ZW7FODC9.html
      var last = url.lastIndexOf('/')+1;
      var id = url.substr(last,8);
      return id;
    }else{
      if(s=='y'){
        var last = url.lastIndexOf('v=')+2;
        var id = url.substr(last,11);
        return id;
      }else{
        return -1;
      }
    }
  },



getLinkDownload : function (id,callback) {
  if(id.length==8){
    var url = 'http://api.mp3.zing.vn/api/mobile/song/getsonginfo?requestdata=%7B%22id%22:%22'+ id +'%22%7D';
    http.get(url, function (response) {
      // so we have to handle the "data" event
         var buffer = "",
             data,
             route;

         response.on("data", function (chunk) {
             buffer += chunk;
         });

         response.on("end", function (err) {
             // finished transferring data
             // dump the raw data
             data = JSON.parse(buffer);
             callback(data);
         });

    })
  }else{

    callback(false);
  }
},

  index : function (req,res) {
    var url = req.param('urldata');
    var id = getlink.getMediaId(url);
    getlink.getLinkDownload(id,function (data){
      if(!data){
        res.render('getlink',{
          songname:"Noname",
          artist:"Nobody",
          download128:"No Link",
          thumbnail:"https://s-media-cache-ak0.pinimg.com/564x/41/f4/c6/41f4c62da9793a67529546f21f87ef03.jpg"
      })
    }else{
        res.render('getlink',{
          songname:data.title,
          artist:data.artist,
          download128:data.link_download[128],
          download320:data.link_download[320],

          thumbnail:'http://zmp3-photo-fbcrawler-td.zadn.vn/thumb/600_600/'+data.thumbnail,
        })
      }

    })

  }
}


module.exports =getlink;
