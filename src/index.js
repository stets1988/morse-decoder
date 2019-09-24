
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
var result = "";
var arr_morse_table =  Object.entries(MORSE_TABLE);  
	for(var i=0; i < expr.length;)
	{	
		var substr10 = expr.slice((i),(i+10));
			for(var j=0; j < substr10.length;)
			{
				var substr2 = substr10.slice(j,(j+2));
					if(substr2 == "00")
					{
					substr2_morse="";
					}
					if(substr2 == "10")
					{
					substr2_morse=substr2_morse+".";
					}
					if(substr2 == "11")
					{
					substr2_morse=substr2_morse+"-";	
					}
					if(substr2 == "**")
					{
					substr2_morse="**";
					}
			j+=2;
			}
		for(var k=0; k<arr_morse_table.length; k++)
		{	
			if(substr2_morse == (arr_morse_table[k][0]))
			{
				result=result+arr_morse_table[k][1];
				substr2_morse="";
			}
		}
			if(substr2_morse == "**")
			{
				result=result+" ";
				substr2_morse="";
			}
						
	i+=10;
	}
return result;
}
module.exports = {
    decode
}
