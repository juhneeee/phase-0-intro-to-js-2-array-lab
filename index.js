// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(n){
    cats.push(n);
}
function destructivelyPrependCat(n){
    cats.unshift(n);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(n){
    return [...cats,n]
}
function prependCat(n){
    return [n, ...cats]
}
function removeLastCat(){
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}