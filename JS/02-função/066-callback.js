//Parte 
function f1(){
    console.log("f1");
} 

function f2(){
    console.log("f2");
}

function f3(){
    console.log("f3");
}

//Parte 
function f4(){
    setTimeout(function(){
        console.log("f4");
    },5000);
    
}
function f5(){
    setTimeout(function(){
        console.log("f5");
    },10000);
    
}

function f6(){
    setTimeout(function(){
        console.log("f6");
    },800);
    
}


//parte 3
function f7(callback){
    setTimeout(function(){
        console.log("f7");
        if(callback) callback();
    },5000);
    
}
function f8(callback){
    setTimeout(function(){
        console.log("f8");
        if(callback) callback();
    },10000);
    
}

function f9(callback){
    setTimeout(function(){
        console.log("f9");
        if(callback) callback();
    },800);
    
}

//imprime na ordem - parte
f1();
f2();
f3();
console.log("Olá");
//imprime na ordem de chegada - parte 2
f4();
f5();
f6();
//Como fazer para ser executada na ordem? - parte 3
f7(function(){
    f8(function(){
        f9(function(){
            console.log("olá");
        }
        )
    })
});
