let toDoInput = document.querySelector(".textToInput")
let list = document.querySelector(".list")
let submit = document.querySelector(".submitBtn")
let clear = document.querySelector(".removeBtn")

submit.addEventListener("click", () =>{
    let taskText = toDoInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    let listItems = document.getElementsByTagName('li');

    for(let i = 0; i < listItems.length; i++){
        if(listItems[i].textContent.toLowerCase() === taskText.toLowerCase()){
            alert("Task already submited!");
            return;
        }
    }

    taskText = taskText.charAt(0).toUpperCase() + taskText.slice(1).toLowerCase();
    list.innerHTML += "<li>" + taskText + "</li>";

    toDoInput.value ="";

});

list.addEventListener("click", () =>{
    let style = event.target.style;
    if(!style.textDecoration){
    style.textDecoration = "line-through";}else {style.textDecoration="";
}
});

clear.addEventListener("click", ()=>{
    list.innerHTML = "";
})




