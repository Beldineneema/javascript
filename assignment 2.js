function foo(){
    var a= 1;
    function bar(s){
        var b=2;
        console.log(a,b);
    }bars();
    function bars(){
        var c=3;
        console.log(c);
    }bars();
    console.log(a,b);
}
foo();