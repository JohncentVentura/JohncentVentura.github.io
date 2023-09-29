/* 
    What I learned from Javascript in this project:
    * When an HTML document is loaded into a web browser, it becomes a document object (DOM). The document object is accessed with "document"
    * The querySelectorAll() method returns all elements that matches a CSS selector(s)
    * The querySelector() method returns the first element that matches a CSS selector
    * The addEventListener(event, function, Capture) method attaches an event handler to a document
    * The classList property returns the CSS classnames of an element.
    * The className property sets or returns an element's class attribute.
    * The replace(searchValue, newValue) method returns a new string with the value(s) replaced.
    * The event.target property returns the element where the event occured.
    * The forEach(function) method calls a function for each element in an array.
    * The remove() method removes an element (or node) from the document.
    * 
*/

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function PageTransitions() {
    //Button click active class, for .controls
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () { //Add event of 'click' to each .control elements, and run code when click is true
            //Set all .active-btn elements to currentBtn, then replace the first currentBtn with '' to empty it, then this or the clicked sectBtn[i] will add a className of ' active-btn'
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections active, for .section
    allSelections.addEventListener('click', (e) =>{ //e means event
        //console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            //Remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
        }
        e.target.classList.add('active'); //Only add active class to e.target

        //Hide other section
        sections.forEach((section) =>{
            section.classList.remove('active');
        })

        //Pass id from dataset to element, since id is related to ids in header & main elements in html, add 'active' class to those elements with that id
        const element = document.getElementById(id); 
        element.classList.add('active');
    })
}

PageTransitions();

