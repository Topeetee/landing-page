

document.getElementById("btn").addEventListener('click',() =>{
    alert("This wont work but you can click on the contacts to send me a Mail");
});
document.getElementById("btn-btn").addEventListener('click', () =>{
    document.querySelector('.nav-bar').classList.toggle('active');
});