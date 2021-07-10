import $ from '../core'

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id')
        $(this[i]).click((event) => {
            event.preventDefault()
            $(`[data-toggle-id="${id}"]`).fadeToggle(300)
        })
    }
}