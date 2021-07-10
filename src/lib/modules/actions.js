import $ from '../core'

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content
        } else {
            return this[i].innerHTML
        }
    }
    return this
}

$.prototype.eq = function(idx) {
    const swap = this[idx]
    const objLength = Object.keys(this).length
    for (let i = 0; i < objLength; i++) {
        delete this[i]
    }
    this[0] = swap
    this.length = 1
    return this
}

$.prototype.idx = function() {
    const parent = this[0].parentNode
    const childs = [...parent.children]
    const findMyIndex = (item) => {
        return item == this[0]
    }
    return childs.findIndex(findMyIndex)
}

$.prototype.find = function(selector) {
    const newObj = this[0].querySelectorAll(selector)
    for (let i = 0; i < this.length; i++) {
        delete this[i]
    }

    Object.assign(this, newObj)
    this.length = newObj.length
    return this
}

$.prototype.closest = function(selector) {
    let counter = 0
    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) === null) {
            return this
        } else {
            this[i] = this[i].closest(selector)
            counter++
        }
    }
    const objLength = Object.keys(this).length
    for (; counter < objLength; counter++) {
        delete this[counter]
    }
    return this
}

