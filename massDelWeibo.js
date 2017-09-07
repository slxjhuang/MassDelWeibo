var dom = document.getElementsByTagName("div");
var match = new Array();
var ids = new Array();
for (var i in dom) {
	if ((typeof dom[i]) === "object"){
		if (dom[i].getAttribute("action-type") === "feed_list_item"){
			//console.log(dom[i]);
			match.push(dom[i]);
			for(k in dom[i].attributes){
				if(dom[i].attributes[k].name === "mid"){
					ids.push(dom[i].attributes[k].nodeValue);
				}
			}
		}
	}
}
console.log(ids);
for (var j in ids){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://weibo.com/aj/mblog/del?ajwvr=6');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(encodeURI('mid=' + ids[j]));
}
