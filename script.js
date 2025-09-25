const output=document.getElementById("output");

function createPromise(name){
	const time=(Math.random()*2+1).toFixed(3);
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({name,time})
		},time*1000);
	})
}

const promises=[
	createPromise("Promise 1"),
	createPromise("Promise 2"),
	createPromise("Promise 3")
]

Promise.all(promises).then((results)=>{
	output.innerHTML="";

	results.forEach((result)=>{
		const row=document.createElement("tr");
		row.innerHTML=
			`<td>${result.name}</td>
			<td>${result.time}</td>`
		output.appendChild(row);
	});

	const totaltime=Math.max(...results.map(r=>parseFloat(r.time))).toFixed(3);
	const totalrow=document.createElement("tr");
	
	totalrow.innerHTML=
		`<td><strong>Total</strong></td>
		<td>${totaltime}</td>`

	output.appendChild(totalrow);
});