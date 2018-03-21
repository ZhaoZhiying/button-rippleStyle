button.onclick = function(){
    cricle.classList.add('active')
}

cricle.addEventListener('transitionend', function(){
    cricle.classList.remove('active')
})