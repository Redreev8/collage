const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const list = document.querySelector('.list')


const sqrCreateBox = (box, tag, width, cellSize, step = [0, 0], row = 1, colums = 1, i = 1) => {
    const boxWidth = box.clientWidth
    const boxHeight = box.clientHeight

    const item = createElement(tag, 'item', {}, {
        backgroundColor: getRandomColor(),
        gridColumn: `${colums + step[0]}/${(width/cellSize) + 1 + step[0]}`,
        gridRow: `${row + step[1]}/${((width/cellSize) + row - 1) + 1 + step[1]}`,
    })
    box.append(item)
    const cor = item.getBoundingClientRect()
    const isWidth = boxWidth - cor.right + 40 >= width
    const isHeight = boxHeight - cor.bottom + 40 > width
    if ( isWidth || isHeight ) {
        const newxtStep = [step[0], i % 2 === 0 ? 0 : 2]
        
        if (isWidth) {
            newxtStep[0] += 3
        } else {
            newxtStep[0] = 0
        }

        const nextRow = isWidth ? row : row + (width/cellSize) + 1
        const nextColums = colums
        sqrCreateBox(box, tag, width, cellSize, newxtStep, nextRow, nextColums, i += 1)
    }
}

window.addEventListener('resize', () => {
    list.innerHTML = ''
    sqrCreateBox(list, 'li', 80, 20)
    callage.list = document.querySelectorAll('.item')
})

sqrCreateBox(list, 'li', 80, 20)

const callage = new Callage({
    list: document.querySelectorAll('.item')
})
