$.ajax({
	type : "get",
	url : "http://www.ikindness.cn/api/test/getProduct",
	success:function(data){
		$(".chanpinliebiao").append(template("tmpl",data));
		}
})