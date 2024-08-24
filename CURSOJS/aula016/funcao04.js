function fatorial(n) {
    let far = 1

    for (let c = n; c > 1 ; c--) {
        far *= c
    }
    return far
}

console.log(fatorial(170))