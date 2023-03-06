//err: naoExisto is not defined
    //console.log(naoExisto);

//tente e se der erro vai para catch
/*
    try{
        console.log(naoExisto);
    } catch(err){
        console.log("naoExisto não existe");
    }
*/

//lançando um erro
function soma(x,y){
    if(typeof x != 'number' || typeof y != 'number'){
        throw('x e y precisam ser números')
    }
    return x+y;
}

console.log(soma(1,2));
console.log(soma('string',2));