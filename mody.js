// console.log(this);

	const setWords = ["Lorem ipsum is a dummy text,you can get it from internet. ","Write this paragraph to check your speed.","Hey there ,write This paragraph to see how fast You can Type. "];
	const msg = document.getElementById('hidtext');
	const typewords = document.getElementById('mywords');
	const btn = document.getElementById('strbtn');
	const clrbtn = document.getElementById('clrbtn');
	const warn = document.getElementById('warn');


	let StartTime, EndTime, Totaltime;

	function playgame () {
		 let randomNumber = Math.floor(Math.random()*setWords.length);
		 msg.innerText = setWords[randomNumber];
		 btn.innerText = 'Done';
		 let date = new Date();
		 StartTime = date.getTime(); 
		     
	}

	const wordCounter = (str) =>{
		 let responce = str.split(" ").length;
		 console.log(responce);
		 return responce;
	 }

	function Endgame(){
		let date = new Date();
		     EndTime = date.getTime();
	         Totaltime = ((EndTime - StartTime)/1000);
		     console.log(Totaltime);

			 let totalstr = typewords.value;
	         let wordCount = wordCounter(totalstr);
			 let speed = Math.round((wordCount / Totaltime)*60);
			 let finalMsg = "You typing speed is " + speed + " words per minute";
			 finalMsg += compareWords(msg.innerText,totalstr);

			 msg.innerText = finalMsg; 

	}
    
    const compareWords = (str1,str2) => {
	let words1 = str1.split(' ');
	let words2 = str2.split(' ');
	let cnt = 0;

	words1.forEach(function(item,index){
		if(item == words2[index]){
			cnt++;

		}
	}
	)
	let errorwords = (words1.length - cnt);
	return (`. ${cnt} correct out of ${words1.length} words and the Total number of errors are ${errorwords}.`);

    }
	 

	btn.addEventListener('click',function(){
		if(this.innerText == 'Start'){
			typewords.disabled = false;
			playgame();


		}
		else if(this.innerText == 'Done'){
			if (typewords.value == '') {
				warn.innerText= 'Write something!';
			}else{
				typewords.disabled = true;
				btn.innerText = 'Start';
				Endgame();
				typewords.value = '';
				
			}
			    

		}


	});

	clrbtn.addEventListener('click', function(){
		typewords.value='';
	})



	document.querySelectorAll("button").forEach( function(item) {
    item.addEventListener('focus', function() {
        this.blur();
    })

    
    





})
	







