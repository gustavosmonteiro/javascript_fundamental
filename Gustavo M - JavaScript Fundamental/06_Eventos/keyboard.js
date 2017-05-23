document.addEventListener("DOMContentLoaded", init);

function init(e){
    document.body.addEventListener("keydown", document_body_keydown)
    
    function document_body_keydown(e){
        console.log(e.keyCode);
    }
}