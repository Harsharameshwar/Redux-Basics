// import { IProduce } from 'immer';
// const produce= IProduce();
const produce=require("immer/compat/pre-3.7/dist/immer")
const book={name:"Antaragni"}

function publish(book){
    return produce(book,draftBook=>{
        draftBook.isPublished=true;
    });
}

publish(book);
console.log(book);

