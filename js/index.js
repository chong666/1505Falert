;(function($){
	$.box = function(par){
		var settings = $.extend({
			content : "弹出框的内容",
			btns : ["确定","取消"],
			method : null
		},par);

		render();

		function render(){
			var item = "";
			$.each(settings.btns,function(i,val){
				item += '<span>'+val+'</span>';
			})
			var node = $('<div class="zhezhao"></div><div class="alertbox">'+settings.content+'<section id="boxbtn">'+item+'</section></div>');
			node.prependTo($("body"));
			node.eq(0).height($("body").height());
			$('.alertbox').animate({'width':300,'height':100},500);
			$('.zhezhao').fadeIn(500);

			active();
		}

		function active(){
			$("#boxbtn").on('click','span',function(){
				$('.alertbox').animate({'width':0,'height':0},500,function(){
					$(".zhezhao,.alertbox").remove();
				});
				$('.zhezhao').fadeOut(500);
				
				if($(this).index()==0){
					settings.method && settings.method();
				}
			})
		}
	}
})(jQuery)