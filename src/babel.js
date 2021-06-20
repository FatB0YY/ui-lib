async function start() {
    return await Promise.resolve('async is workimg')
}

start().then(console.log('Babel!'))