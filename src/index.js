import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './scss/index.scss'
import './babel'

import './lib/lib'

const block = $('.active')
block.hide()
setTimeout(() => {
    block.show()
    setInterval(() => {
        block.toggle()
    }, 500)
}, 1000)