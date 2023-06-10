function descendingOrder(n){
    let res = +n.toString().split('').map(Number).sort((a,b) => b - a).join('')
    return res
}