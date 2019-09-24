
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
var k;
var substr3 = "";
var result = "";
var newarr =  Object.entries(MORSE_TABLE);  
	for(var i=0; i < expr.length;)
	{	
		var substr = expr.slice((i),(i+10));
			for(var j=0; j < substr.length;)
			{
				var substr2 = substr.slice(j,(j+2));
					if(substr2 == "00")
					{
					substr3="";
					}
					if(substr2 == "10")
					{
					substr3=substr3+".";
					}
					if(substr2 == "11")
					{
					substr3=substr3+"-";	
					}
					if(substr2 == "**")
					{
					substr3="";
					}
			j+=2;
			}
		for(var k=0; k<newarr.length; k++)
		{	
			if(substr3 == (newarr[k][0]+""))
			{
				result=result+newarr[k][1];
			}
		}
			if(substr3 == "")
			{
				result=result+" ";
			}
	i+=10;
	}
return result;
}
module.exports = {
    decode
}
