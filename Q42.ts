let magicians: string[] = ["Harry Houdini","David Copperfield","Penn & Teller","Derren Brown","Criss Angel","Dynamo"]
function show_magicians(magicians:string[]){
    console.log(magicians)
}

function make_great(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
         magicians[i]=`The great `+ magicians[i]
         console.log(magicians)
    }
}

make_great(magicians)
show_magicians(magicians)