import React from 'react'
import ReactDOM from 'react-dom/client'

const element1 = React.createElement('h4', 
{
    className: 'class_test', 
    style: {
        background: 'lightblue'
    }
}, 
'Namaste From React ⚡⚡ 4️⃣')

const element2 = React.createElement('h5', 
{
    className: 'class_test', 
    style: {
        background: 'lightblue'
    }
}, 
'Heading 5️⃣')

const container = React.createElement('div', {title: 'div-test'}, [element1, element2])
const h1 = <h1 className='class_test' style={{background: 'lightblue'}}>Hi there</h1>
console.log(container)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)
