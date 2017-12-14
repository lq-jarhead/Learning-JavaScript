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
	var source = whicepic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	var text = whicepic.getAttribute('title');
	var description = document.getElementById('description');
	//注意这里的赋值，var现在的作用体现出来了
	description.firstChild.nodeValue = text;
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