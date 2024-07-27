class Callage {
    _list
    mouseover = []
    defultZindex = []
    constructor({ list }) {
        this.list = list
    }

    get list() {
        return this._list
    }

    hendalMouseover(index) {
        for (let i = this.mouseover[index]; i < this.mouseover.length; i++) {
            const nextIndex = this.mouseover.indexOf(i + 1)

            const item = this.list[nextIndex]

            item.style.zIndex = this.mouseover[nextIndex] - 1
            this.mouseover[nextIndex] = this.mouseover[nextIndex] - 1
        }
        this.list[index].style.zIndex = this.mouseover.length
        this.mouseover[index] = this.mouseover.length
    }

    set list(nodes) {
        this.mouseover = []
        this.defultZindex = []
        this._list = nodes

        for (let i = 0; i < nodes.length; i++) {
            const el = nodes[i]
            this.mouseover[i] = i + 1
            this.defultZindex[i] = i
            el.style.zIndex = i + 1
            el.addEventListener('mouseover', () => this.hendalMouseover(i))
        }
    }
}