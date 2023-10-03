var inp_box= document.getElementById("take_task");
var list_add= document.getElementById("task_list");
 function add_task(){
    if(inp_box.value ===""){
        alert("You must type something")
    }
    else{
        var task=document.createElement("li");
        task.innerHTML=inp_box.value;
        list_add.appendChild(task)
        var del=document.createElement("span");
        del.innerHTML="\u00d7"
        task.appendChild(del);
    }
    inp_box.value="";
}

list_add.addEventListener("click",function(tag){
    if(tag.target.tagName === "LI"){
        tag.target.classList.toggle("check")
    }
    else if(tag.target.tagName === "SPAN"){
        tag.target.parentElement.remove();
    }
})
