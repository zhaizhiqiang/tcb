// 获取修电脑数据
$.ajax({
	type:"get",
	url:"/doGetPcFaultList",
	dataType:"json",
	data:{
		pn:0,
		pagesize:5
	},
	success:function(data){
		
	}
})
// 获取店铺
$.ajax({
	type:"get",
	url:"/shop",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn:0,
		pagesize:5
	},
	success:function(data) {
		console.log(data)
				$.ajax({
					type:"get",
					url:"temp/dpTmp.html",
					dataType:"text",
					success:function(tmp){
						$("#middle-ml").html(baidu.template(tmp,data));
						pageUtil("m4-m2",1,Math.ceil(data.page_count/5));
					}
				})
	}
})


// console.log(data)
		
// 		$("#middle-ml").html(baidu.template("dp",data));
// 		pageUtil("m4-m2",1,Math.ceil(data.page_count/5));
// 优品精选
$.ajax({
	type:"get",
	url:"/dogethotlist",
	dataType:"json",
	data:{
		city_id:$(".xscs").attr("code")||"shang_hai",
		pn:0,
		pagesize:5
	},
	success:function(data) {
		console.log(data)
			$.ajax({
				url:"temp/jpyxTmp.html",
				type:"get",
				dataType:"text",
				success:function(tmp){
					$("#main3-right").html(baidu.template(tmp,data))
				}
			})
		
	}
})


// 热门手机回收
$.ajax({
	type:"get",
	url:"/doGetHotHsList",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn:0,
		pagesize:5
	},
	success:function(data){
		// console.log(data)
			$.ajax({
				type:"get",
				url:"temp/rmsjhsTmp.html",
				dataType:"text",
				success:function(tmp){
					$("#main2-right").html(baidu.template(tmp,data))
				}
			})
		
	}
})

// 热门城市
$.ajax({
	type:"get",
	url:"/getcitycode",
	dataType:"json",
	data:{	
		pn:0,
		pagesize:5
	},
	success:function(data){

			$.ajax({
				url:"temp/cityllistTmp.html",
				dataType:"text",
				success:function(tmp){

				$(".kk1").html(baidu.template(tmp,data))	


$(".kk1:eq(0) span").on("click",function(){
	$(".kk1:eq(0)").hide();
})

$(".qhcs:eq(0)").on("click",function(){
	$(".kk1:eq(0)").show();
})


	$(".city").on("click",function(){
		$(".kk1:eq(1)").show();
		$(".kk2").hide();
		$(".xsqx").text("选择区县")
	})

	$(".kk1 span").on("click",function(){
		$(".kk1").hide();
	})

	// 切换颜色和城市
	$(".py a").on("click",function(){
		var index = $(this).addClass("current").siblings("a").removeClass("current").end().index();
		$(".cs:eq(0) p").eq(index).show().siblings("p").hide();
		$(".cs:eq(1) p").eq(index).show().siblings("p").hide();
	})
   
	// 显示城市信息 加改变店铺
		
 	$(".kk1").on("click","a",function(){
 		var res2 = $(this).html()
 		if (res2.length!=1){
	 		$(".xscs").html(res2);
	 		var res = $(this).attr("code");
 		$(".xscs").attr("code",res);
 		$.ajax({
 			url:"/shop",
 			dataType:"json",
 			data:{
 				city_id:$(".xscs").attr("code"),
 				pn:0,
 				pagesize:5
 			},
 			success:function(data){
 				$.ajax({
					type:"get",
					url:"temp/dpTmp.html",
					dataType:"text",
					success:function(tmp){
						$("#middle-ml").html(baidu.template(tmp,data));
						
					}
				})
 			}
 		})
 		}
 	
 		
 	})




		// 切换区域
	$(".xzqx").on("click",function(){

	$(".kk2").css("display","block")
	$(".kk1").hide();
	$.ajax({
		url:"http://bang.360.cn/aj/get_area/",
		data:{
			citycode: $(".xscs").attr("code")||"bei_jing"
		},
		dataType:"jsonp",//jsonp请求 
		success:function(data){
				$.ajax({
					type:"get",
					url:"temp/qxlistTmp.html",
					dataType:"text",
					success:function(tmp){

		var html = baidu.template(tmp,data);
		$(".kk2").html(html);
	
			$(".gbqx").on("click",function(){	
			$(".kk2").css("display","none");
			}) 

		// 选择区县和获取店铺
		$(".kk2").on("click","a",function(){
			$(".xsqx").html($(this).html());
			var res =this.getAttribute("area_id")
			$(".xsqx").attr("area_id",res)
			$.ajax({
			 	url:"/shop",
			 	dataType:"json",
			 	data:{
			 		city_id:$(".xscs").attr("code")||"bei_jing",
			 		area_id:res,
			 		pn:0,
			 		pagesize:5
			 	},
			 	success:function(data){
				$.ajax({
					type:"get",
					url:"temp/dpTmp.html",
					dataType:"text",
					success:function(tmp){
						$("#middle-ml").html(baidu.template(tmp,data));
					}
				})
			 		
			 	}
			 })

				})
					}
				})
			}


		
	})

}

) 
				}
			});
		 
	
	}
})

// 获取修手机数据
$.ajax({
	type:"get",
	url:"/aj_get_fault_group",
	dataType:"json",
	data:{
		pn:0,
		pagesize:5
	},
	success:function(data){
		var html = baidu.template("xsj",data);
		$("#l1div-left").html(html);
	}
})

/* 创建分页工具函数
	  @param pageId 分页栏容器id 
	  @param currPage 当前是第几页
	  @param totalNum 总页数 
	 */
function pageUtil (pageId,currPage,totalNum,callback){
	var btns = '<a href="javascript:void(0)">首页</a>'+'<a href="javascript:void(0)">上一页</a>'+'<a href="javascript:void(0)">下一页</a>'+'<a href="javascript:void(0)">尾页</a>'
	$("#"+pageId).html(btns);

	var startNum = currPage>5 ?currPage-4:1;
	var pageStr = "";
	for (var n=0; n<10 && startNum<=totalNum;n++){
		if (currPage == startNum){
			pageStr += '<a class = "red" href ="javascript:void(0)">'+ (startNum++)+'</a>'
		}else{
			pageStr+= '<a href="javascript:void(0)">'+(startNum++)+'</a>'
	 		
		}

	}
	$("#"+pageId).find("a:eq(1)").after(pageStr);
	// 插入事件off是取消事件累加
	 	$("#"+pageId).off("click").on("click","a",function(){
	 		var btn = $(this).text();
	 		switch(btn){
	 			case "首页":
	 			pageUtil(pageId,1,totalNum,showShopList)
	 				break;
	 			case "上一页":
	 			pageUtil(pageId,currPage-1,totalNum,showShopList)
	 				break;
	 			case "下一页":
	 			pageUtil(pageId,currPage+1,totalNum,showShopList)
	 				break;
	 			case "尾页":
	 			pageUtil(pageId,totalNum,totalNum,showShopList)
	 				break;
	 			default:
	 			pageUtil(pageId,parseInt(btn),totalNum,showShopList)
	 				break;
	 		}
	 	});
	 	callback && callback(currPage-1)
}




function  showShopList(pn){
	 	 $.ajax({
	 	url:"/shop",
	 	dataType:"json",
	 	data:{
	 		city_id:$(".xscs").attr("code")||"bei_jing",
	 		area_id:$(".xsqx").attr("area_id")||"0",
	 		pn:pn,
	 		pagesize:5
	 	},
	 	success:function(data){
			$.ajax({
					type:"get",
					url:"temp/dpTmp.html",
					dataType:"text",
					success:function(tmp){
						$("#middle-ml").html(baidu.template(tmp,data));
						
					}
				})
	 		
	 	}
	 })
	 }

$(".ewm").on("click",function(){
	$("#ewm").show();
	$("#zhezhao").show();
})
$("#ewm span").on("click",function(){
	$("#ewm").hide();
	$("#zhezhao").hide();
})		


