

const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'SHOW MODAL'
btnModal.style.cssText = `
background-color: grey;
color: black;
font-size: 1rem;
margin-top: 50px;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-radius: 5px;
border-color: black;
cursor: pointer;
`
btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = 'white  '
})
btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'grey'
})


const modal = document.createElement('div')
modal.style.cssText = `

position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000050;
display: flex;
justify-content: center;
align-items: center;
`


const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
width: 700px;
height:300px;
background-color: #fff;

position: fixed;
top: 370px;
left: 50%;
transform: translate(-50%, -50%);

padding: 20px;
font-size: 1.5rem;
`

modal.append(modalWindow)


btnModal.addEventListener('click', () => {
    console.log('clicked');
    ROOT.append(modal)
    body.style.cssText = `
    background-color: white;

    `
})

const closeModal = document.createElement('button');


closeModal.textContent = 'x'
modalWindow.append(closeModal)

closeModal.style.cssText = `
position: absolute;
top: 0;
right: 0;
background-color: white;
width: 30px;
height: 30px;
color: black;
border: none;
font-size:30px;
`

closeModal.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove()
    }
})

const h1 = document.createElement('h1')
h1.textContent = 'Warning!'
modalWindow.append(h1)
h1.style.cssText = `
font-family: sans-serif;
font-size:40px;
`
const p = document.createElement('p')
modalWindow.append(p)
p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore consectetur, aspernatur fuga deserunt nulla est!'
p.style.cssText = `
font-family: sans-serif;
margin-top: 20px;
`
const btn1 = document.createElement('button')
modalWindow.append(btn1)
btn1.textContent = 'ACCEPT'
btn1.style.cssText = `
border: block;
border-radius: 10px;
font-size: 20px;
weight: 200px;  
margin-top: 40px;
color: white;
background-color: green;
padding: 5px 10px;
`
const btn2 = document.createElement('button')
modalWindow.append(btn2)
btn2.textContent = 'DECLINE'
btn2.style.cssText = `
border: block;
border-radius: 10px;
font-size: 20px;
weight: 200px;  
margin-top: 40px;
color: white;
background-color: red;
margin-left: 10px;
padding: 5px 10px;
`

function changeTheme(isChecked) {
    if (isChecked) {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
  }
