function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números')
    }
    return x + y
}

try {
console.log(soma(1,2))
console.log(soma('b', 2))
} catch(err){
    console.log(err)
    console.log(alert('Desculpe algo deu errado'))
}
