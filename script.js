	 window.setTimeout(function(){
			var pplay=[];
			 pplay[0]=document.querySelector("#p1");//player 1
			 pplay[1]= document.getElementById("p2");//player2
	         var resetBut=document.querySelector("#reset");
			var p1score= document.querySelector("#p1sco");//player1 score
			var p2score= document.querySelector("#p2sco");//player2 score
			var input= document.querySelector("input");
			var paraScore= document.querySelector("#playTo");
			var p1s=0;
			var p2s= 0;
			var gameOver=false;
			var winScore;
			//for loop to select between buttons 
			for(i=0;i< pplay.length;i++){
		           if(i===0){
			pplay[i].addEventListener("click", function(){
				if(!gameOver){
				p1s++;
				if(p1s === winScore){
	        			p1score.classList.add("color");
						gameOver=true;	
				}
					p1score.textContent= p1s ;
				}
				
			});
		} else{
			pplay[i].addEventListener("click", function(){
				if(!gameOver){
				p2s++;
				if(p2s === winScore){
					p2score.classList.add("color");
						gameOver=true;	
			     }
					p2score.textContent= p2s ;
				}
			});
		  }
		}
		 //Resetting Everything
	         resetBut.addEventListener("click", function(){
	        reset();
	         } );
                   //reset function
	           function reset(){
	         p1s=0;
	         p2s=0;
	         p1score.textContent=0;
	         p2score.textContent=0;
	         p1score.classList.remove("color");
	         p2score.classList.remove("color");
	         gameOver=false;
	           }
		 //Updating PlayingTo value
	          input.addEventListener("change", function(){
	            paraScore.textContent=this.value;
	            winScore=Number(this.value);
	            reset();
	        });
	     },300);
