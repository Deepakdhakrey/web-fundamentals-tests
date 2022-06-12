var list = ['Geek', 'Geekster', 'Geeky']
for(let i = 0; i<list.length;i++){
    if(list[i]=='Geekster'){
        var a = i;
        for(let k=i;k<list.length-1;k++){
            list[k] = list[k+1];
        }
    }
}
list.pop();
console.log(list);