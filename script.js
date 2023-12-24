// main side bar 
function sideBar() {
    let bodyOverlay = document.querySelector('.body_overlay')
    let sideBarBody = document.querySelector('.main-sidebar')
    let bar_icn = document.getElementById('bar-icn')
    bar_icn.onclick = ()=> {
     sideBarBody.classList.add('main-sidebar-visible')
    bodyOverlay.classList.add('b-overlay-active')
    }
    close_sidebar.onclick = function() {
        sideBarBody.classList.remove('main-sidebar-visible')    
         bodyOverlay.classList.remove('b-overlay-active')            
    }                
}   
sideBar()           