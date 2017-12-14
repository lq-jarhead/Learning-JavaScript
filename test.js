// //变量复制前一样不需要申明类型
// //变量命令，全部小写、下划线、驼峰和python一样
// mood = 'happy'
// age = 33
// welcome = 'Nice to meet you!'
// // alert使用，浏览器弹窗提醒
// alert(welcome)

// // if条件语句，记住一个小括弧和一个花括号。前者是condition，后者是statements
// if (1 > 2) {
// 	alert(welcome);
// } else {
// 	alert('the message is from else.')
// }

// var count  = 1;
// while (count < 4){
// 	alert(count);
// 	count ++;
// }

// function f(x) {
// 	total = x*x;
// 	return total;
// }


// var number = f(20);
// total = 100;
// alert(total);

function showPic(whicepic) {
	var source = whicepic.getAttribute('href');//获取属性名href的变量值
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);//获取一个元素并改变其src变量值/属性值

	var text = whicepic.getAttribute('title');//获取元素属性名title的属性值
	var description = document.getElementById('description');//获取id=description的元素节点
	
	description.firstChild.nodeValue = text;//获取description元素的文本节点text的值并赋予新的属性值
}

function popUp(winURL) {
	window.open(winURL,'popup','width=480,height=600');
}
// alert(description.childNodes[0].nodeValue);

// // nodeType返回的是数字，代表不同的类型type
// alert(description.childNodes[0].nodeType);


window.onload = preparelinks;
function preparelinks() {
	var links = document.getElementsByTagName('a');
	for (var i=0; i<links.lenght;i++) {
		if (links[i].getAttribute('class') =='popup ') {
			links[i].onclil = function() {
				popUp(this.getAttribute('href'));
				return false;
			}
		}
	}
}

function popUp(winURL) {
	window.open(winURL,"popup",'width=320,height=4380');
}