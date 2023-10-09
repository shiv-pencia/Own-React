
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    container.appendChild(domElement)
}
const reactElement = {
    
    type: 'a',
    props : {
        href: 'http://instagram.com',
        target: '_blank'
    },
    children: 'click here to visit Google with my react'
    

}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)