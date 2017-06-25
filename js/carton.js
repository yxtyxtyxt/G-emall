//鼠标点击title菜单效果
function nav_Click(id,id2){
	$(id + ' ul li').click(function(){
		$(this).addClass('title_first').siblings().removeClass();
		$(id2 + '>div').eq($(this).index()).css('display','block').siblings().css('display','none');
	})
}
//brand自动轮播
function brandAauto(id){
	var index = 1;
	var timer = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		$(id + ' ul li').eq(index).css('z-index',2).animate({'display':'block','opacity':1},400).siblings().css('z-index',1).animate({'display':'none','opacity':0},400)
		index++
		if(index > $(id + ' ul li').length - 1){
			index = 0;
		}
	},2500);
	//鼠标移入停止轮播
	$(id).mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer = setInterval(function(){
		$(id + ' ul li').eq(index).css('z-index',2).animate({'display':'block','opacity':1},400).siblings().css('z-index',1).animate({'display':'none','opacity':0},400)
		index++
		if(index > $(id + ' ul li').length - 1){
			index = 0;
		}
	},3000);
	})
	//左按钮
	$(id + ' .brand_btn a').eq(0).click(function(){
			clearInterval(timer);
			index--;
			if(index < 0){
				index = $(id + ' ul li').length - 1;
			}
			$(id + ' ul li').eq(index - 1).css('z-index',2).animate({'display':'block','opacity':1},400).siblings().css('z-index',1).animate({'display':'none','opacity':0},400)
		
	})
	//右按钮
	$(id + ' .brand_btn a').eq(1).click(function(){
		clearInterval(timer);
		index++;
		console.log($(id + ' ul li').length)
		if(index > $(id + ' ul li').length - 1){
			index = 0;
		}
		$(id + ' ul li').eq(index - 1).css('z-index',2).animate({'display':'block','opacity':1},400).siblings().css('z-index',1).animate({'display':'none','opacity':0},400)
		
	})
}
//右侧banner图自动轮播
function rightBannerAuto(id){
	var _index = 1;
	var _timer = setInterval(function(){
		$(id + ' .floor_main_right_banner ul li').eq(_index).css('z-index',2).animate({'display':'block','opacity':1}).siblings().css('z-index',1).animate({'display':'none','opacity':0})
		$(id + ' .floor_right_banner_nav li').eq(_index).find('a').addClass('c20005');
		$(id + ' .floor_right_banner_nav li').eq(_index).siblings().find('a').removeClass();
		_index++;
		if(_index > $(id + ' .floor_main_right_banner ul li').length -1){
			_index = 0;
		}
	},3000)
	$(id + ' .floor_right_banner_nav li').find('a').click(function(){
		clearInterval(_timer);
		$(this).addClass('c20005');
		$(this).parent().siblings().find('a').removeClass();
		_index = $(this).parent().index();
		$(this).parent().parent().parent().find('ul li').eq(_index).css('z-index',2).animate({'display':'block','opacity':1}).siblings().css('z-index',1).animate({'display':'none','opacity':0})
		_timer = setInterval(function(){
			$(id + ' .floor_main_right_banner ul li').eq(_index).css('z-index',2).animate({'display':'block','opacity':1}).siblings().css('z-index',1).animate({'display':'none','opacity':0})
			$(id + ' .floor_right_banner_nav li').eq(_index).find('a').addClass('c20005');
			$(id + ' .floor_right_banner_nav li').eq(_index).siblings().find('a').removeClass();
			_index++;
			if(_index > $(id + ' .floor_main_right_banner ul li').length -1){
				_index = 0;
			}
		},3000)
	})
}