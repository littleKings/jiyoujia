$.ajax({
	url:"http://www.ikindness.cn/api/test/getProduct",
	type:"get",
	dataType:"json"
}).done(function(data){
	var _data=data.data
	fenye();
	//价格区间
	function priceFrom(){
		var __data=_data;
		var from = $(".little").val();
		var untill = $(".big").val();
		for(var i =0;i<__data.length;i++){
			if(parseFloat(__data[i].price)<parseFloat(from)||parseFloat(__data[i].price)>parseFloat(untill)){
				__data.splice(i,1);
			}
		}
		_data=__data
		console.log(_data.length)
		fenye(_data);
	}
	$(".queding").click(function(){
		priceFrom(_data);
	});
	//价格从低到高
	function priceup(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].price)>parseFloat(__data[i+1].price)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		fenye(_data);
	}
	//价格从高到低
	function pricedown(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].price)<parseFloat(__data[i+1].price)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		fenye(_data);
	}
	//交易量从低到高
	function soldup(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].sold)>parseFloat(__data[i+1].sold)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		fenye(_data);
	}
	//交易量从高到低
	function solddowm(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].sold)<parseFloat(__data[i+1].sold)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		fenye(_data);
	}
	//获得下降
	$(".od").click(function(){
		solddowm(_data);
	});
	//获得上升
	$(".oc").click(function(){
		soldup(_data);
	});
	//获得升序数组
	$(".oa").click(function(){
		priceup(_data);
	});
	//获得降序数组
	$(".ob").click(function(){
		pricedown(_data);
	});

	//换页 向前
	$(".zongyeshu").html("/"+Math.ceil(_data.length/10))

	function fenye(){
		var p=0;
		$(".qianjin").click(yeshu=function(){
			p=p+1;

			if(p>=1&&p<=6){
				$(".dangqianyeshu").html(p);
			}else{
				$(".dangqianyeshu").html("6");
			}

			if(p==1){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=0;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==2){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=10;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==3){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=20;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==4){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=30;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==5){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=40;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==6){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=50;i<(p*10);i++){
					yangshi(_data);
				}
			}else{
				p=6
			}
			function yangshi(_data){
			var yangshi = _data
				$(".chanpinliebiao").append(
					"<li class=\"chanpinliebiao"+[i]+"\">"
					+"<div class=\"chanpinliebiao1 ps\">"
					+"<a style=\"background-image:url(http:"+yangshi[i].image+")\" href=\"http:"+yangshi[i].href+"\"></a>"
					+"</div>"	
					+"<div class=\"chanpinliebiao1 jiage\">"
					+"<span>￥</span><span>"+yangshi[i].price+"</span>"
					+"</div>"
					+"<div class=\"chanpinliebiao1 neirong\">"
					+"<span>"+yangshi[i].name+"</span>"
					+"</div>"
					+"<div class=\"chanpinliebiao1 dianming\">"
					+"<span class=\"hengxian\">"
					+"<span class=\"hengxian1\"></span>"
					+"<span class=\"hengxian1\"></span>"
					+"<span class=\"hengxian1\"></span>"
					+"</span>"
					+"<span class=\"dian\"></span>"
					+"<span class=\"diming\">"+yangshi[i].location+"</span>"
					+"<div class=\"tubiao\">"
					+"<img src=\"1.png\">"
					+"</div>"
					+"</div>"
					+"</li>"
					)
			};
		});
		yeshu();
		$(".houtui").click(yeshu=function(){
			p=p-1;
			if(p>=1&&p<=6){
				$(".dangqianyeshu").html(p);
			}else{
				$(".dangqianyeshu").html("1");
			}
		
			if(p==1){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=0;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==2){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=10;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==3){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=20;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==4){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=30;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==5){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=40;i<(p*10);i++){
					yangshi(_data);
				}
			}else if(p==6){
				for (var i =0;i<_data.length;i++) {
					$(".chanpinliebiao"+i).remove()
				}
				for(var i=50;i<(p*10);i++){
					yangshi(_data);
				}
			}else{
				p=1
			}
			function yangshi(_data){
			var yangshi = _data
				$(".chanpinliebiao").append(
					"<li class=\"chanpinliebiao"+[i]+"\">"
					+"<div class=\"chanpinliebiao1 ps\">"
					+"<a style=\"background-image:url(http:"+yangshi[i].image+")\" href=\"http:"+yangshi[i].href+"\"></a>"
					+"</div>"	
					+"<div class=\"chanpinliebiao1 jiage\">"
					+"<span>￥</span><span>"+yangshi[i].price+"</span>"
					+"</div>"
					+"<div class=\"chanpinliebiao1 neirong\">"
					+"<span>"+yangshi[i].name+"</span>"
					+"</div>"
					+"<div class=\"chanpinliebiao1 dianming\">"
					+"<span class=\"hengxian\">"
					+"<span class=\"hengxian1\"></span>"
					+"<span class=\"hengxian1\"></span>"
					+"<span class=\"hengxian1\"></span>"
					+"</span>"
					+"<span class=\"dian\"></span>"
					+"<span class=\"diming\">"+yangshi[i].location+"</span>"
					+"<div class=\"tubiao\">"
					+"<img src=\"1.png\">"
					+"</div>"
					+"</div>"
					+"</li>"
					)
			};
		});
	}
});