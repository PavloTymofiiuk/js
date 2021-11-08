function checkData(data){
	return new Promise((resolve, reject) => {
		if(typeof(data) === 'number'){
			if(data % 2 == 0){
			return setTimeout(() => resolve('even'), 2000);
		}	else {
			return setTimeout(() => resolve('odd'), 1000);
		}
	  } else {
			return reject('Error');
	}
	})
	}

	function checkResult(result){
		console.log(`Your number is ${result}`);
	}
	checkData(1).then(checkResult,	e => console.log(e));
	checkData(3).then(checkResult,	e => console.log(e));
	checkData(4).then(checkResult, 	e => console.log(e));
	checkData(false).then(checkResult,	e => console.log(e));
	checkData('just text').then(checkResult,	e => console.log(e));