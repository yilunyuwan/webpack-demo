import x from './x.js'
import img from './assets/introduction.jpeg'

console.log(img)

const photoDiv = document.querySelector('#photo')
photoDiv.innerHTML = `<img src=${img} width="50%">`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
    }, ()=>{
        console.log('懒加载失败')
    })
}
photoDiv.appendChild(button)