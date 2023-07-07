// Pinyin no tone, indexing purpose
function deTone(input) 
{
  var inputString = String(input).toLowerCase();

  const e_tones = ["e", "ē", "é", "ě", "è"];
  const a_tones = ["a", "ā", "á", "ǎ", "à"];
  const i_tones = ["i", "ī", "í", "ǐ", "ì"];
  const o_tones = ["o", "ō", "ó", "ǒ", "ò"];
  const u_tones = ["u", "ū", "ú", "ǔ", "ù"];
  const v_tones = ["ü", "ǖ", "ǘ", "ǚ", "ǜ"];

  for (let i = 0; i < e_tones.length; i++) 
  {
    inputString = inputString.replaceAll(e_tones[i], e_tones[0]);
    inputString = inputString.replaceAll(a_tones[i], a_tones[0]);
    inputString = inputString.replaceAll(i_tones[i], i_tones[0]);
    inputString = inputString.replaceAll(o_tones[i], o_tones[0]);
    inputString = inputString.replaceAll(u_tones[i], u_tones[0]);
    inputString = inputString.replaceAll(v_tones[i], v_tones[0]);
  }
  return inputString;
}

function searchPinyin(query, input)
{
	out_options =[query,deTone(query)];
	
	for (let i = 0; i < out_options.length; i++) 
	{
		if (out_options[i].includes(input))
		{
			return true;
		}
	}
	
	return false;
	
}

function highlight(text,cell) 
{
	var innerHTML = cell.textContent;
	
	var allLowCase = innerHTML.toLowerCase();
	
	var cellText;
	
	var index = allLowCase.indexOf(text.toLowerCase());
	if (index >= 0) 
	{ 
		cellText = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		cell.innerHTML = cellText;
	}
}

function highlightPinyin(text,cell)
{
	var innerHTML = cell.textContent;
	var filter = deTone(innerHTML);
	
	var index = filter.indexOf(text.toLowerCase());
	if (index >= 0) 
	{ 
		innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		cell.innerHTML = innerHTML;
	}
}

function unhighlight(cell)
{
	cell.innerHTML = cell.textContent;
	console.log(cell.innerHTML);
}

function unhighlightAll(row)
{
	for (j = 0; j < row.cells.length; j++)
	{
		if (j == 4) {continue;}
		//console.log(`j = ${j} , ${row.cells[j].textContent}`);
		unhighlight(row.cells[j]);
		//row.cells[j].getElementsByTagName('span').remove();
	}
}




