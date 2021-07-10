import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './scss/index.scss'
import './babel'

import './lib/lib'
import $ from './lib/lib'

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    $('#first').on('click', () => {
        $('.text').eq(0).fadeOut(300)
    })

    $('[data-count="second"]').on('click', () => {
        $('.text').eq(1).fadeOut(300)
    })

    $('#all').on('click', () => {
        $('.text').fadeOut(800)
    })

    $('#click').on('click', function() {
        $('.some').eq(1).toggleClass('active')
    })

    console.log('some:', $('.container').eq(1).find('.some'))
    console.log('closest:', $('.some').closest('.findme'))

    console.log('findme:', $('.some').closest('.findme'))

    $()
        .get('https://jsonplaceholder.typicode.com/todos/1', 'json')
        .then((res) => console.log('get:', res))

    $()
        .get('http://localhost:4000/src/db.json', 'json')
        .then((res) => createLi(res.dropdown))
        .catch((error) => console.log(error))

    function createLi(response) {
        response.forEach((item, idx, arr) => {
            let dropdown = document.createElement('div')
            dropdown.classList.add('dropdown')

            let li = document.createElement('li')
            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    li.insertAdjacentHTML(
                        'beforeend',
                        `<a href = "#" class = "dropdown-item">${item[key]}</a>`
                    )
                }
            }

            dropdown.innerHTML = `
                <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn${idx}">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" data-toggle-id="dropdownMenuBtn${idx}">${li.innerHTML}</ul>
            `

            const wrap1 = document.querySelector('.wrap1')
            const wrap2 = document.querySelector('.wrap2')

            if (idx === 0) {
                wrap1.innerHTML += dropdown.outerHTML
            } else {
                wrap2.innerHTML += dropdown.outerHTML
            }
        })
        $('.dropdown-toggle').dropdown()
    }
})