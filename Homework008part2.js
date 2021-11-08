function checkData(data){
	return new Promise((resolve, reject) => {
		if(typeof(data) === 'number'){
		if(data % 2 == 0){
			return setTimeout(() => resolve('even'), 2000);
		} else {
			return setTimeout(() => resolve('odd'), 1000);
		}
		} else {
		return reject('Error');
		}
	})
	}

	async function checkResult(data){
	const result = await checkData(data);
	console.log(`Your number is ${result}`);
	}
	
	checkResult(1);
	checkResult(2);
	checkResult(100);
	checkResult('just text').catch(e => console.log(e));
	checkResult(true).catch(e => console.log(e));