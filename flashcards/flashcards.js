
class FlashCard 
{
	constructor(wordCard , index)
	{
		this.wordCard = wordCard;
		this.index = index;
		
		createTable();
	}
	
	functioncreateTable()
	{
		this.tbl = generateTable(2,5);
		
		this.tbl.rows[0].cells[0].innerHTML = "<b>Word</b>";
		this.tbl.rows[0].cells[1].innerHTML = "<b>Simplified</b>";
		this.tbl.rows[0].cells[2].innerHTML = "<b>Pinyin</b>";
		this.tbl.rows[0].cells[3].innerHTML = "<b>Translation</b>";
		this.tbl.rows[0].cells[4].innerHTML = "<b>Sound</b>";
		addButton(this.tbl.rows[0].cells[4],i);
		
		if (wordCard["example"])
			{
				this.tbl.rows[1].cells[0].innerHTML = "&emsp; &emsp;&emsp;&emsp;<b>Example:&emsp;</b>" +wordCard["example"];
			}
			
			else
			{
				this.tbl.rows[1].style.display = "none";
			}
	}
	
	function addButton(cell)
	{
		let but = document.createElement('button');
		but.innerText = 'Play';
		
		var funcString =`playSound(${this.index})`;
		
		but.setAttribute('onclick', funcString);
		cell.appendChild(but);
	}
	
	function playSound()
	{
		var audioFileLoc = "./audio/" + this.index +".mp3";
		var audio = new Audio(audioFileLoc);
		audio.play();
	}
	
	function show()
	{
		//createTable();
		this.tbl.style.display = "";
	}
	
	function hide()
	{
		this.tbl.style.display = "none";
	}
}	
