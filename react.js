
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const props in reactElement.props) {
        if (props==='children') continue;

            domElement.setAttribute(props , reactElement.props[props])
            
        
    }
    
    container.appendChild(domElement)
}
const reactElement = {
    
    type: 'a',
    props : {
        href: 'http://instagram.com',
        target: '_blank'
    },
    children: 'click here to visit Google '
    

}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)