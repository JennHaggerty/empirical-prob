function handleNumInput(arr){
	var num = arr; // 999
  var numDisplay = document.getElementById('accordion-num');

	numDisplay.innerHTML = num;
	validateNumForm(num);
	buildString(num);
	findProbability(num);

	return;
}

function handleInput(arr){
	var letter = arr; // e
	var probability = findProbability(arr);

	clearStyling(); // remove styling related to percentage

	//if(){}
	if (validateForm(letter) != false){
		document.getElementById('resultsContainer').classList.remove('closed');
		document.getElementById('jumbospan1').classList.add('closed');
		document.getElementById('jumbospan2').classList.remove('closed');

		addStyling(probability); // color percentage

		results.innerHTML = probability += "%"; // populate div
	}
	return;
}

function addStyling(arr){
	var rounded = (arr * 100).toFixed(); // 0.1886 => 19

	if (rounded < 3){
		results.classList.add("text-danger");
	} else if (rounded < 7) {
		results.classList.add("text-warning");
	} else {
		results.classList.add("text-success");
	}
}

function clearStyling(){
	var classList = results.classList.contains("text-danger")
								||results.classList.contains("text-warning")
								||results.classList.contains("text-success"); 
	if (classList) {
		results.classList.remove("text-success");
		results.classList.remove("text-danger");
		results.classList.remove("text-warning");
	}
}

function findProbability(arr, err){ // e
	var theString 	= document.getElementById( "theString" ).innerHTML; //onetwothree...onehundredtwentythree
	if(typeof(arr) != "string"){
		console.log("Argument not a string");
		return err;
	} else {
		occurrenceOfLetter = theString.split(arr).length-1; // e = 233
		probability = occurrenceOfLetter/theString.length; // 0.1886...
		//probability = probability.toFixed(2)*100; // 0.1886 => 0.19 => 19
		probability = probability*100; // 0.1886 => 0.19 => 19
		return probability;
	}
}

function buildString(arr){
	var theString = '';
	for(var i = 1; i <= arr; i++) {
		var convertedNum = NumberToWords(i); // one hundred twenty three
	
		theString += convertedNum.replace(/\s/g,''); // onehundredtwentythree
	}
	var stringDiv = document.getElementById('theString');
	stringDiv.innerHTML = theString;

	return theString;
}

function NumberToWords(number){ // 123
	var num = new String(number); // "123"
	var splt = num.split(""); // "1", "2", "3"
	var newNumber = splt.reverse(); // "3", "2", "1"
	var first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', 'ten', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
 
	var word = new Array();
	var count = 0;
 
	for(i=0; i < newNumber.length; i++){
		switch(i){
			case 0: // newNumber = 3,2,1   word[count] = three
        if ((newNumber[i] == 0) || (newNumber[i + 1] == 1)) { 
            word[count] = '';
        }
        else {
            word[count] = first[newNumber[i]];
        }
				word[count] = word[count];

      	break;
 
			case 1: // newNumber = 3,2,1   word[count] = twenty
				Tens();

        break;
 
			case 2: // newNumber = 3,2,1   word[count] = one hundred
				if (newNumber[i] == 0) {
					word[count] = '';
				}
				else if ((newNumber[i - 1] == 0) || (newNumber[i - 2] == 0)) {
					word[count] = first[newNumber[i]] + " hundred ";
				}
				else {
					word[count] = first[newNumber[i]] + " hundred ";
				}

        break;
			default: break;
		}
		count++;
	}
 
	function Tens() {
		if (newNumber[i] == 0) { 
			word[count] = ''; 
		}else if (newNumber[i] == 1) { 
			word[count] = two[newNumber[i - 1]]; 
		}else {
			word[count] = tens[newNumber[i]]; 
		}
	}
 
	word.reverse(); // ["three", "twenty" , "one hundred"] 
	var result = '';
	for(i=0; i < newNumber.length; i++){ // one hundred // one hundred twenty // one hundred twenty three 
		result = result + word[i];
	}

	//console.log(result);
	return result;
}

function validateNumForm(arr){
	var numForm = document.getElementById('num-input');
	var numFormInput = numForm.value;
	var results = document.getElementById("results");

	var errorDiv = document.getElementById("num-error");
	errorDiv.innerHTML = ""; // clear error msg

  if (!/^[0-9]*$/g.test(numFormInput)) {
		numForm.className = 'form-control is-invalid'; 
		errorDiv.classList.remove('closed'); // display err div
		errorDiv.innerHTML = " Must be a number."; // display err
    return false;
  } else if (numFormInput == '') {
		numForm.className = 'form-control'; 
		results.innerHTML = ""; // clear results on empty string
		return false;
	} else {
		numForm.className = 'form-control is-valid'; 
	}
	return;
}

function validateForm(arr){
	var letterForm = document.getElementById('letter-input');
	var letterFormInput = letterForm.value;
	var results = document.getElementById("results");
	var errorDiv = document.getElementById("error");
	//var letterFormInput = document.getElementById('letter-input').value;

	errorDiv.innerHTML = ""; // clear error msg

  if (!/^[a-zA-Z]*$/g.test(letterFormInput)) {
		letterForm.className = 'form-control is-invalid'; 
		errorDiv.classList.remove('closed'); // display err div
		errorDiv.innerHTML = " Must be a letter."; // display err
    return false;
  } else if (letterFormInput == '') {
		letterForm.className = 'form-control'; 
		results.innerHTML = ""; // clear results on empty string
		return false;
	} else {
		letterForm.className = 'form-control is-valid'; 
	}
	return;
}

function handleClick(e){ // because CDN can't be trusted to function
	var card = document.getElementById('collapseOne');

	if(card.classList.contains('closed')){
		card.className = "open";
	} else {
		card.className = "closed";
	}
}
