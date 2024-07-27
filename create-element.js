const createElement = (
    tagName, 
    classNames = '', 
    attributes = {},
    styles = {}
) => {
    const el = document.createElement(tagName)

    if (Array.isArray(classNames)) {
        el.classList.add(...classNames);
    } else if (classNames) {
        el.classList.add(classNames);
    }

    for (const attrName in attributes) {
        el[attrName] = attributes[attrName];
    }

    for (const style in styles) {
        el.style[style] = styles[style]
    }

    return el;
}