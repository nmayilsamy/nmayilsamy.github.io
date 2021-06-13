



function oNe() {
	document.getElementById("caselist").innerHTML=" ";
	var textvalue = document.getElementById("txtArea1").value;
	textvalue=textvalue.replace('.','');
	textvalue=textvalue.replace(',','');
	textvalue=textvalue.replace('\n','');
	var strings= textvalue.split(" ");
	//loadlist(strings);
	//document.getElementById("txtArea1").innerHTML=strings;
	console.log(strings.length);
	for (i = 0; i < strings.length; i++) {
  	//loadlist(strings[i]);
	 }
 cleanstrings=clean1(strings);
 //var strn = removeDuplicateUsingSet(cleanstrings);
 clearBwords(cleanstrings);
 //console.log(strn);
}

//-------- load list ------------//
var sno=0;
function loadlist(sentence) {
	var clist=document.getElementById("caselist");
	var header =document.createElement('p');
	var _citation=document.createElement('li');
	//header.innerHTML= (++sno) +") " +sentence;
	header.innerHTML= sentence;
		clist.appendChild(header);
}

//-----------remove duplicate ------------------//

function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

//-----------------function to clean the passage ------------//
var badwords=[" ", "\n", "/t", "/a", "i", "the", "was", "a", "as", "at", "are", "has", "have", "had", "that","us",
					 "this", "here", "my" , "been", "mr.", "miss." , "mrs.", "for", "we", "does", "from", "can", "me", "all",
					 "there", "would", "should", "could", "couldn't", "wouldn't", "don't", "which", "within", "about", "than",
					"with", "on", "give", "given", "in", "if", "it", "thus", "per", "he", "she", "him", "her", "his", "by", "act",
					"will", "am", "not", "yes", "how", "who", "when", "where", "what", "is", "said", "no", "an" , "and", "then",
					"only", "but", "good", "bad", "to", "be", "of", "I", "after", "you", "your", "our", "or", "their",
					"{", "}", "[", "]", "!", "@", "#","$", "%", "^", "&", "*", "(", ")", "/", "\n\t\t\t"  ];
var stnchk;

function checkword(keywrd) {
  return keywrd.toLowerCase() != stnchk;
  //loadlist(keywrd.toLowerCase());
  console.log(stnchk);
}

function clearBwords(keywords) {
  for (k=0; k<=badwords.length; k++)  {
  stnchk=badwords[k];
  temparray=keywords.filter(checkword);
  keywords=temparray;
}
newkeywords = removeDuplicateUsingSet(keywords);
//loadlist(newkeywords);
densitycheck(temparray,newkeywords);
} 

//--------------------------//

//-------------------------keyword density ----------------------------//
function densitycheck(keywords, ndkeywords) {
   var keydensity=[];
   var wkeydensity=0;
   var keycounter = 0;
   var wkeycounter =0;
   var finalkeywords=[];
   var weakkeywords=[];
	for(i=0;i<=ndkeywords.length;i++) {
		k=0;k1=0;
		for(z=0;z<=keywords.length;z++) {
			if(ndkeywords[i]==keywords[z]) {
				k++;
			}
		}
		if (k>=7) {
						finalkeywords[keycounter]=ndkeywords[i];
						keydensity[keycounter]=k;
						keycounter++;
		} else if (k>=4 && k<=6) {
					weakkeywords[wkeycounter]=ndkeywords[i];
					wkeydensity[wkeycounter]=k;
					wkeycounter++;
		}
	}
  console.log("finalkeywords");
  console.log(finalkeywords);
	//loadlist(finalkeywords);
	for(sw=0;sw<=finalkeywords.length;sw++) {
		//loadlist(finalkeywords[sw]);
	}
	sno=0;
		for(sw=0;sw<=weakkeywords.length;sw++) {
		//loadlist(weakkeywords[sw]);
	}
	//loadlist(weakkeywords);
	laststage(finalkeywords);
	wlaststage(weakkeywords);
}

//-----------------------------------//

//---------------firist cleaning and pass to futher cleaning-----------------------//
function clean1(newstringval) {
	var textvalue = newstringval
	var temp1= textvalue.toString();
	var strings1= temp1.split(".");
	var tempstring=strings1.toString();
	console.log(tempstring);
	var tempstring= tempstring.replace(',', '');
	var tempstring= tempstring.replace('\n', '');
	var tempstring= tempstring.replace('\t', '');
	var strings2= tempstring.split(",");
	console.log("string2");
	console.log(strings2);
 // printstrng(strings2);
//	var tempstring=strings2.toString();
	//var tempstring=tempstring.replace(",","");
//	console.log(tempstring);
//}

//----------------------------------------------------------//
//--------------further cleaning and new array-----------------------------//
//function printstrng(stringarray) {
	var keytxt="string";
    var newpara=[];
	for (i=0;i<=strings2.length;i++) {
		console.log(i, strings2[i]);
		keytxt=String(strings2[i]);
		keytxt1=keytxt.split(" ");
		keytxt=keytxt1.join("");
		keytxt=keytxt.replace("," , "");
		keytxt=keytxt.replace("\n" , "");
		keytxt=keytxt.replace("\t" , "");
		keytxt=keytxt.trim();
		if(keytxt!="") {
		newpara.push(keytxt);
		}
	}
	console.log(newpara);
	return newpara;
}

//----------------------------------------------------------//

//-------------------check for keywords in sentence--------------//

function laststage(keywords) {
	var finalpara=[];
	paravalue= textvalue = document.getElementById("txtArea1").value;
	linevalue=paravalue.split(".");
	for(s=0;s<linevalue.length;s++) {
		flagval=0;
		 for(i=0;i<keywords.length;i++) {
			var linestring = linevalue[s].toString();
			var strngchk=keywords[i].toString();
			strngchk=strngchk.replace("\n" , "");
			strngchk=strngchk.replace("\t" , "");
			strngchk=strngchk.replace( ' ' , "");
			strngchk=strngchk.replace("(" , "");	
			strngchk=strngchk.replace(")" , "");	
			if(linestring.search(strngchk)!=-1) {
				if(flagval>=2) {
				 finalpara.push(linevalue[s]);
				 //loadlist(linevalue[s]);
				 flagval=-100;
				 }
				 flagval++;
			}
		}
	}
	if(finalpara.length>0) {
	loadlist(finalpara);
	} else {
		mnlaststage(keywords);
	}
}


//-------------------check for keywords weak in sentence--------------//

function wlaststage(keywords) {
	var wfinalpara=[];
	paravalue= textvalue = document.getElementById("txtArea1").value;
	linevalue=paravalue.split(".");
	for(s=0;s<linevalue.length;s++) {
		flagval=0;
		 for(i=0;i<keywords.length;i++) {
			var linestring = linevalue[s].toString();
			if(linestring.search(keywords[i])!=-1) {
				if(flagval>=2) {
				 wfinalpara.push(linevalue[s]);
				 //loadlist(linevalue[s]);
				 flagval=-100;
				 }
				 flagval++;
			}
		}
	}
	if(wfinalpara.length<=0){
		nlaststage(keywords);
	} else {
	loadlist(wfinalpara);
	}
}


function nlaststage(keywords1) {
	var nfinalpara=[];
	paravalue= textvalue = document.getElementById("txtArea1").value;
	linevalue=paravalue.split(".");
	for(s=0;s<linevalue.length;s++) {
		flagval=0;
		 for(i=0;i<keywords1.length;i++) {
			var linestring = linevalue[s].toString();
			if(linestring.search(keywords1[i])!=-1) {
				if(flagval>=1) {
				 nfinalpara.push(linevalue[s]);
				 //loadlist(linevalue[s]);
				 flagval=-100;
				 }
				 flagval++;
			}
		}
	}
	loadlist(nfinalpara);
}


//-------------------check for keywords in sentence--------------//

function mnlaststage(keywords) {
	var finalpara=[];
	paravalue= textvalue = document.getElementById("txtArea1").value;
	linevalue=paravalue.split(".");
	for(s=0;s<linevalue.length;s++) {
		flagval=0;
		 for(i=0;i<keywords.length;i++) {
			var linestring = linevalue[s].toString();
			var strngchk=keywords[i].toString();
			strngchk=strngchk.replace("\n" , "");
			strngchk=strngchk.replace("\t" , "");
			strngchk=strngchk.replace( ' ' , "");
			strngchk=strngchk.replace("(" , "");	
			strngchk=strngchk.replace(")" , "");	
			if(linestring.search(strngchk)!=-1) {
				 finalpara.push(linevalue[s]);
				 //loadlist(linevalue[s]);
			}
		}
	}
	if(finalpara.length>0) {
	loadlist(finalpara);
	}
}
