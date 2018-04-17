const fs = require('fs');

fs.readFile('input.txt',(err,data)=>{
	if(!err){
	  string=data.toString();
	  let parenthesis=0;
	  let a=0;
	  console.time('Part1');
	  for(; parenthesis<string.length ; parenthesis++){
	    if(string[parenthesis]==='(') a++;
	    else a--;
      }
	  console.log('Floor number:',a);
	  console.timeEnd('Part1');
	}
})

// fs.readFile('input.txt',(err,data)=>{
// 	if(!err){
// 	  string=data.toString();
// 	  let parenthesis=0;
// 	  let a=0;
// 	  console.time('Part2');
// 	  for(; parenthesis<string.length ; parenthesis++){
// 	  	if(string[parenthesis]==='(') a++; 
// 	    else a--;
// 	    if(a===-1) break;
//       }
// 	  console.log('Position:',parenthesis+1);
// 	  console.timeEnd('Part2');
// 	}
// })