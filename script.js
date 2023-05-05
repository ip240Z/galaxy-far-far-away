let center = document.querySelector('.center')

let celBodies = 200;

for (let i = 0; i < celBodies; i++) {
    let targetEl = document.createElement('span');
    center.append(targetEl)
}
const spans = document.querySelectorAll('span')

var colorArray = ['aliceblue', 'aqua', 'aquamarine', 'azure', 'blueviolet', 'cadetblue', 'cornflowerblue', 'cyan', 'white', 'whitesmkoke']


spans.forEach(el => {  
    let randHeight = Math.random() * 460 + .5 * 360
    let randWidth = Math.random() * 740 + .5 * 200
    
    el.style.height = `${randHeight}px`
    el.style.width = `${randWidth}px`

    let revolutionTimer = Math.round(Math.random() * 50000 + 50000)
    let delay = Math.round(Math.random() * 75000)

    el.style.animationDuration = `${revolutionTimer}ms`;
    el.style.animationDelay = `-${delay}ms`;

    const node = document.createElement('div');
    const divRadius = Math.random() * 5 + 2;

    node.style.height = `${divRadius}px`
    node.style.width = `${divRadius}px`

    let randColorIndex = Math.floor(Math.random() * (colorArray.length))
    let randColor = colorArray[randColorIndex];
    node.style.background = randColor
    node.style.boxShadow = `0px 0px 1px 1px ${randColor}`

    el.appendChild(node);
})