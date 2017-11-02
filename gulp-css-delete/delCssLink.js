let through2 = require('through2');

function doDel(data){
    console.log(data);
    let links = data.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (link[i].type == 'text/css') {
            data.body.removeChild(link[i]);
        }
    }
	return data;
}

function delCssLink(){
	return through2.obj(function(file, encoding, cb){
		//如果文件为空，不做任何操作，转入下一个操作，即下一个pipe
		if(file.isNull()){
			console.log('isNull');
		    this.push(file);
			return cb();
		}
		//插件不支持对stream直接操作，抛出异常
		if(file.isStream()){
			console.log('isStream');
			this.emit('error');
			return cb();
		}
		//内容转换，处理好后，再转成Buffer形式
		var content = doDel(file.contents);
		file.contents = new Buffer(content);
		//下面这两句基本是标配，可参考through2的API
		this.push(file);
		cb();
	});
}

module.exports = modify;
