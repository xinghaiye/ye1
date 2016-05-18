// 引入search模板
var searchTpl = require('../tpl/search.string');

// 定义一个视图
SPA.defineView('search',{
	// 将模板写在m-index-container里
	html:searchTpl,

	plugins:[
		'delegated',
		{
			name:'avalon',
			options:function(vm){
				vm.searchList = [];
			}
		}
	],

	// 给视图定义公共的属性和方法
	init:{
		// 定义视图公共的swiper对象
		mySwiper : null
	},

	bindActions:{
		'tap.dissertation.slide':function(e){
			// 获得视图公共的swiper, 跳转到某个slider
			this.mySwiper.slideTo($(e.el).index());
		}
	},

	bindEvents:{
		beforeShow: function () {
			// 保存视图对象
			var that = this;
			
			// 获得avalon的vm
			var vm = that.getVM();

			// 定义home hot swiper，注意这里的that.mySwiper
			that.mySwiper = new Swiper('#dissertation-swiper', {
				loop: false,
				onSlideChangeStart: function () {
					$('#dissertation-nav li').eq(that.mySwiper.activeIndex).addClass('active').siblings().removeClass('active');
				}
			});
		}
	}

})
