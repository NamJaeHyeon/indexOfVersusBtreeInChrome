Array.prototype.shuffle = function(){
    let l = this.length;
    for(let i=0; i<l; i++){
        let tmp = this[i];
        let r = this[Math.random()*l|0];
        this[i] = this[r];
        this[r] = tmp;
    }
};





Array.prototype.indexOfCommonAlgorythm = function(value){
    let len = this.length;
    for(let i = 0; i < len; i++){
        if(this[i] === value) return i;
    }
    return -1;
}





Array.prototype.bTree = [];
Array.prototype.doUpdateBTree = false;
Array.makeBTree = function(array){

}
Array.prototype.indexOfUsingBTree = function(value){
    if(!this.doUpdateBTree){
        this.bTree = Array.makeBTree(this)
    }
    let 
}




function test(testSize){

    let arr = Array(testSize).fill(0).map((v,i)=>i);
    arr.shuffle();
    let arrLen = arr.length;
    // console.log(arr);

    let correct;

    correct= 0;
    console.time('indexOf.builtIn');
    for(let i = 0; i < 10000; i++){
        let rd = Math.random()*arrLen|0;
        if(arr.indexOf(arr[rd]) == rd){
            correct += 1;
        }
    }
    console.timeEnd('indexOf.builtIn');
    console.log('correct : '+ correct);

    correct = 0;
    console.time('indexOf.commonAlgorythm');
    for(let i = 0; i < 10000; i++){
        let rd = Math.random()*arrLen|0;
        if(arr.indexOfCommonAlgorythm(arr[rd]) == rd){
            correct += 1;
        }
    }
    console.timeEnd('indexOf.commonAlgorythm');
    console.log('correct : '+ correct);
}
