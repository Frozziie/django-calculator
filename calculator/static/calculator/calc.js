/* Variables */
var numKeys = [];
var opns = [];
var res = document.querySelector("#resultArea");
var clrBtn = document.querySelector("#clrTxt");
var delBtn = document.querySelector("#del");
var decPoint = document.querySelector("#decp");
var eqBtn = document.querySelector("#eq");

var opnSyms = ["+","-" ,"*" ,"/"];
var symList;

/* Numbers */
for(var i=0;i<=9;i++){
	(
        function(i){
    	    qs = "#num" + i; // Here you obtain the id name.
		    numKeys.push(document.querySelector(qs)); // Here you obtain the value from the selector where the id is equal to the previous variable
		    numKeys[i].addEventListener("click",
                function(){
		    	    res.textContent += i;
		        }
            );
  	    } (i)
    );
}

/* Simbols */
for(var i=0; i<=3; i++){
	(
		function(i){
    		qs = "#op" + i; // Here you obtain the id name.
			opns.push(document.querySelector(qs)); // Here you obtain the value from the selector where the id is equal to the previous variable
			opns[i].addEventListener("click", 
				function(){
					res.textContent += opnSyms[i];
				}
			);
  		} (i)
	);
}

/* Clear button */
clrBtn.addEventListener("click",
	function(){
		res.textContent = "";
	}
);

/* Delete button */
delBtn.addEventListener("click",
	function(){
		res.textContent = res.textContent.substring(0, res.textContent.length - 1);
	}
);

/* Decimal button */
decPoint.addEventListener("click",
	function(){
		res.textContent += ".";
	}
);

/* Equality button */
eqBtn.addEventListener("click",
	function(){
		(
			function(i){
				symList = [];
				for(var i=0; i<opnSyms.length; i++){
					if(res.textContent.indexOf(opnSyms[i]) > - 1){
						symList.push(opnSyms[i]);
					}
				}
				if(symList.length > 0){
					try{
						res.textContent = eval(res.textContent);
					}
					catch(e){
						res.textContent = "Invalid Syntax";
					}
				}
			} (i)
		);
	}
);