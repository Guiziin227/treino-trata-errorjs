// try{
//     // quando não há erros 
// }catch(e){
//     // quando há erros
// }finally{
//     //sempre
// }


// try {
//     console.log(a)
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo')
//     console.log('Fechei o arquivo')
// } catch(e){
//     console.log('Tratando o arquivo')
//     console.log(e)
// }
// finally{
//     console.log('FINALLY: eu sempre sou executado')
// }

function retornaHora(data){
    if(data &&!(data instanceof Date)){
        throw new Error('Esperando uma instância de Date')
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    });
}

try{
    const hora = retornaHora(L)
    console.log(hora)
} catch(e) {
    console.log('Deu problema...', e)
} finally {
    console.log('FINALLY!')
}

