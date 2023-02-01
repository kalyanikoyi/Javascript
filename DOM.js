// ---------------------To write something on html page -----------

document.write('Hello people')

//--------------------- To create element ---------------------

 var ele = document.createElement('h1')

//  -------------------- To give body to the created element ------------------

document.body.append(ele)

// ----------------------To write text in the element -------------

ele.innerText = 'welcome to the app'

// ----------------------To change content -------------

ele.textContent = 'welcome kalyani'

//---------------------- To add element along with content to html---------------

ele.innerHTML =' <a> Google</a>'

function onclicking(){
    var elem=document.getElementById('element')
    elem.innerText ='chalapathi'
}