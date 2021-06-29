import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './scss/index.scss'
import './babel'

import './lib/lib'
import $ from './lib/lib'

document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const block1 = $('.block1')
    block1.hide()
    setTimeout(() => {
        block1.show()
        setInterval(() => {
            block1.toggle()
        }, 500)
    }, 1000)

    const block2 = $('.block2')
    block2.addClass('class1', 'class2', 'class3')
    block2.removeClass('class2')
    setInterval(() => {
        block2.toggleClass('class3')
    }, 2000)

    $('button').on('click', function() {
        $(this).toggleClass('active')
    })
})