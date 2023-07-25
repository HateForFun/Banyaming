import pandas as pd
from gtts import gTTS
import json


my_words = pd.read_excel('Words List.xlsx')

lastIndex = 1169 -1 

my_words_rows_num = my_words.shape[0]

#create audio files

for i in range(lastIndex+1,my_words_rows_num):

    current_word = my_words.loc[i][0]
    
    print(current_word)
    
    word = gTTS(current_word, lang='zh-TW',slow=True)
    word.save('audio\\' +str(i) + '.mp3')

#create dictionary

dic =[]

for i in range(0,my_words_rows_num):
    
    word = my_words.loc[i]["Word"]
    pinyin = my_words.loc[i]["Pinyin"]
    translation = my_words.loc[i]["Meaning"]
    example = my_words.loc[i]["Examples"]
    simplified = my_words.loc[i]["Simplified"]
    known = my_words.loc[i]["Known"] == "Y"

    dic.append({"word": word,"simplified": simplified, "pinyin" : pinyin, "translation" : translation, "example" : example, "known" : known})
    
print(dic)

#create json

y = json.dumps(dic)

with open('flashcards2.json', 'w') as f:
    f.write(y)

#write js file
    
with open('flashcards2.json', 'r') as original: data = original.read()
with open('mywords2.js', 'w') as modified: modified.write("mywords =" + data)