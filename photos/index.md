---
layout: true
---
<style type="text/css">

.fancybox-caption__body {
    max-height: 0vh;
    overflow: auto;
    pointer-events: all;
}





    .header-inner{
         display: none;
    }
    .sidebar{
        display: none;
    }
    .content{
        margin-bottom: 360px;
    }
    .content-wrap{
       width: 100%;
       // box-sizing: content-box;
       padding: initial !important;
       background:url('https://s2.ax1x.com/2019/09/07/nlL4pR.jpg');
    }
    
	.main-inner{
		width: 100%;
	}
	.main {
        padding-bottom: 150px;
        margin-top: 0px;
        background:url('https://s2.ax1x.com/2019/09/07/nlL4pR.jpg');
	}
	.main-inner{
		margin-top: unset;
	}
	.page-post-detail .post-meta{
		display: none;
	}
	body {
		background-image: unset;
		background-attachment: unset;
		background-size: 100%;
		/*background-position: top left;*/
	}
	.header{
		background: rgba(28, 25, 25, 0.6);
		border-bottom: unset;
	}
	.menu .menu-item a{
		    font-weight: 300;
    		color: #e6eaed;
	}
	.footer-inner {
    	 padding-left: 0px;
    }
    
    img:hover {
        //opacity:0.8; /*透明度*/
        //filter:alpha(opacity=100); /* For IE8 and earlier */
    }

	.imgbox{
	    margin-top: 20px;
	    padding: 1px 10px;
        width: 100%;
        overflow: hidden;
        height: 250px;
	    border-right: 1px solid #bcbcbc;
	    background:url('https://s2.ax1x.com/2019/09/07/nlL4pR.jpg');
	}
	.box{
		visibility: visible;
		overflow: auto; 
		zoom: 1;
	}
	.box li{
        float: left;
        width: 25%;
        position: relative;
        overflow: hidden;
        text-align: center;
        list-style: none;
        margin: 0;
        /*display: inline;*/
        padding: 0;
        height: 360px;
	}
	.box li span{
        display: block;
        padding: 12% 7% 10% 7%;
        min-height: 80px;
        //background: #fff;
        color: #222;
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
	}

	img.imgitem{
		padding: unset;
		padding: unset;
		border: unset;
		position: relative;
		padding: 0px;
		height: 100%;
		width: 100%;
	}

    div#posts.posts-expand {
        border: unset;
        padding: unset;
        margin-bottom: 10px;
    }
    .posts-expand .post-body img{
        padding: 0px !important;
    }
    .box p{
        margin-top: -25px;
        display: block;
        background: #121212;
        color: #fff;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }
    
    .box span strong{
        background: rgba(0,0,0,0.4);
        padding: 20px;
    }
    
    .posts-expand .post-title {
        display: none;
    }
    
    .title{
        margin: 10px auto;
        display: inline-block;
        vertical-align: middle;
        //background: url(/images/beichen.jpg);
        font: 85px/250px 'ChaletComprimeMilanSixty';
        //background-position: left bottom !important;
        background-position: center center !important;
        color: #fff;
        background-size: 100% auto !important; 
        -webkit-background-size: cover; 
        -moz-background-size: cover;
        -o-background-size: cover;
        width: 100%;
        text-align: center;
        border: unset;
        height: 560px;
        cursor: unset !important;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    @media (max-width: 767px){
        .box li {
            width: 98%;
        }
        .title {
            height: 200px;
        }
        
        .box span {
            min-height: 80px;
            border-right: unset;
            font-size: 17px;
        }
        .box p{
            border-right: unset;
            font-size: 12px;
          
        }
        .posts-expand {
            margin: unset;
        }
    
    }

    @media (min-width: 1600px){
    
        .container .main-inner{
            width: 100%;
        }
    }

</style>

<div id="box" class="box"></div>

<script type="text/javascript">
   
   // 相册json
   var json = 
    [
    	[
            {
                'title': 'pixiv',
                
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/infocenterbg.a1a0d152.jpg'
            },
            {
                'title': '9月雨后',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/83006789_p0.jpg'
            },
            {
                'title': '五花肉',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/82874993_p0.jpg'
            },
            {
                'title': '五花肉+1',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/82978693_p0.jpg'
            },
            {
                'title': '别样的艳',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/c07233b99acd20e907387df8dee7b190.jpg'
            },
            {
                'title': '远处的城堡',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/82802980_p0.jpg'
            },
            {
                'title': '夕阳红',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/82967262_p0.png'
            },
            {
                'title': '卢浮宫',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/15466735_p0.jpg'
            },
            {
                'title': '景区一角',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/83005883_p0.png'
            },
            {
                'title': '夕阳🌇',
                'url': 'https://raw.githubusercontent.com/a2603802339/tuchuang/master/img/75886476_p0.jpg'
            },
            {
                'title': '冰沟丹霞',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/30687834_p0.jpg'
            },
            {
                'title': '别样的雨后',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/82727901_p0_master1200.jpg'
            },
            {
                'title': '卢浮宫',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/82637642_p0_master1200.jpg'
            }
    	],
    	
    	[
            {
                'title': '壁纸',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/milad-b-fakurian-LYPZ29ve8mI-unsplash.jpg'
            },
            {
                'title': '一天的行程',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/hector-j-rivas-1FxMET2U5dU-unsplash.jpg'
            },
            {
                'title': '珠峰国家公园',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/rui-matayoshi-IfC4e4sdEYc-unsplash.jpg'
            },
            {
                'title': '盘山公路',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/albert-s-XrvrRXJORPU-unsplash.jpg'
            },
            {
                'title': '保护区',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/aston-yao-Ebz3RWJTJrE-unsplash.jpg'
            },
            {
                'title': '珠峰大本营',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/karim-manjra-gVa7zpwsxZo-unsplash.jpg'
            },
            {
                'title': '氧气瓶',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/karim-manjra-RxenDIopGN4-unsplash.jpg'
            },
            {
                'title': '珠峰日出',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/franck-v-1JePildXM7g-unsplash.jpg'
            },
            {
                'title': '寺庙',
                'url': 'https://gitee.com/BT-boy/photos/raw/master/img/karim-manjra-rYDiAOGTJkc-unsplash.jpg'
            }
    	]
    ]
    
    var content = json2Array(json);
        
    var wid = 250;
    if ((window.innerWidth) > 1200) {
        wid = (window.innerWidth*3)/18;
    }
    var box = document.getElementById('box');
    
    var i=0;
    for (var i = 0; i < content.length; i++) {
    	var conBox = document.createElement("div");
    	conBox.id = 'conBox'+i;
    	box.appendChild(conBox);
    	var item = document.createElement("div");
    	var title = content[i][0].title;
    	var url = content[i][0].url;
    	item.innerHTML = "<button class = 'title' style = 'background: url(" + url + ");'><span style = 'display: inline;'><strong style = 'color:#f0f3f6;' >" + title + "</strong></span></button>";
    	conBox.appendChild(item);
    
    	for (var j = 1; j < content[i].length ; j++) {
    		var _title = content[i][j].title;
    		var _url = content[i][j].url;
    		var item = document.createElement("li");
    		item.innerHTML="<div class = 'imgbox' id = 'imgbox' style = 'height: " + wid + "px;'><img class = 'imgitem' src='" + _url + "' alt='" + _url + "'></div><span>" + _title +"</span>";
    		conBox.appendChild(item);
    	}
    }
    
    //json转二维数组
    function json2Array(arr) {
        for (var i=0; i<arr.length; i++) {
            var tmpArr = []
            for (var attr in arr[i]) {
                tmpArr.push(arr[i][attr])
            }
            arr[i] = tmpArr
        }
        return arr
    }

</script>