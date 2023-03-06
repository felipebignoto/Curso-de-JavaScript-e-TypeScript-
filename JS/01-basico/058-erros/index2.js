/*
try{
    //é executada quando não há erros
} catch{
    //é executada quando ha erros
} finally{
    //sempre
}
*/

try{
    console.log("abri um arquivo");
    console.log("manipulei o arquivo e gerou erro");
    console.log("fechei o arquivo");
} catch{
    console.log("tarateando o erro");
} finally{
    console.log("fecha o arquivo");
}