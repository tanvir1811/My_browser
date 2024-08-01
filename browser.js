
function get(){
    var inp = document.getElementById("po").value;
    window.open("https://www.google.com/search?q="+inp+"&sca_esv=7035ff6bfa45f4a8&sxsrf=ADLYWIIFBeu35FD5VVIEDc7G49C3Ry-_lA%3A1722519034712&source=hp&ei=-o2rZpSGKcS8vr0PpKuXuQI&iflsig=AL9hbdgAAAAAZqucCuca4B8n0RJzoidgDtfafud_DFKa&oq=why+&gs_lp=Egdnd3Mtd2l6IgR3aHkgKgIIADIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAkj0C1AAWABwAXgAkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIIqAIKmAMIkgcBMaAHAA&sclient=gws-wiz")
    
    
}
// Add an event listener for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is "Enter"
    if (event.key === 'Enter') {
        var inp = document.getElementById("po").value;
    window.open("https://www.google.com/search?q="+inp+"&sca_esv=7035ff6bfa45f4a8&sxsrf=ADLYWIIFBeu35FD5VVIEDc7G49C3Ry-_lA%3A1722519034712&source=hp&ei=-o2rZpSGKcS8vr0PpKuXuQI&iflsig=AL9hbdgAAAAAZqucCuca4B8n0RJzoidgDtfafud_DFKa&oq=why+&gs_lp=Egdnd3Mtd2l6IgR3aHkgKgIIADIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAkj0C1AAWABwAXgAkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIIqAIKmAMIkgcBMaAHAA&sclient=gws-wiz")
    
        
    }
    // Check if the key pressed is "Escape"
    else if (event.key === 'Escape') {
        
    }
});
