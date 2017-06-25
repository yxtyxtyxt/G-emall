//1.创建cookie
function setCookie(key,value,expires){
	var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
	//设置过期时间
	if(typeof expires == "number"){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ";expires=" + date;
	}	
	document.cookie = cookieText;
}
//2.获取cookie
function getCookie(key){
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i ++){
		var list = arr[i].split("=");
		if(list[0] == encodeURIComponent(key)){
			return decodeURIComponent(list[1]);
		}
		
	}
}
//3.删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
}

//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
	var obj = {};
	/*
	 * var obj = new Object();
	 * obj["name"] = "zhangsan";
	 * 
	 */
	//遍历数组
	for(var i = 0; i < users.length; i ++){
		//将字符串转为数组
		var userData = users[i].split(",");
		//["test1",123] ["test2","abc"] ["test3",888]
		obj[userData[0]] = userData[1];
		/*转为对象如下：
		 * obj = {
		 * 	test1 : 123,
		 *  test2 : abc,
		 *  test3 : 888
		 * }
		 */
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}
//
function convertCartStrToObj(cartStr) {
	//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
	//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
	if(!cartStr) {
		return {};
	}
	var goods = cartStr.split(":");
	var obj = {};
	for(var i = 0; i < goods.length; i++) {
		var data = goods[i].split(",");
		//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
		obj[data[0]] = {
			name: data[1],
			price: parseFloat(data[2]),
			num: parseInt(data[3]),
			src: data[4]
		}
	}
	return obj;
}
//

function convertObjToCartStr(obj) {
/* {
 * 	sp1 : {
 * 		name : "香蕉",
 * price : 30,
 * num : 1,
 * src : "img/1.jpg"
 * },
 * sp2 :{
 * 	name :"苹果",
 * price : 40,
 * num:2,
 * src : "img/2.jpg"
 * },
 * sp3{
 * 	name : "梨"，
 * price : 50,
 * num : 3,
 * src : "img/3.jpg"
 * }
 * }
 */
var cartStr = "";
for(var id in obj) {
	if(cartStr) {
		cartStr += ":";
	}
	cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
}
return cartStr;
}