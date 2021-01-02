const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");

const uploadURL = 'http://localhost:3000/api/files'; 

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.  dataTransfer.files;
    console.log(files);
      
    if(files.length){
        fileInput.files = files;
         uploadFile();
    }  
});

dropZone.addEventListener("dragover", (e)=> {
    e.preventDefault();
    dropZone.classList.add("dragged");
});

dropZone.addEventListener("dragleave", (e)=>{
    dropZone.classList.remove("dragged");

    console.log("dragged");
});

const uploadFile = ()=>{
    const file = fileInput.files;
    const formData = new FormData();
    formData.append("myfile", file[0]);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response);
            document.getElementById("linkAfterUpload").innerHTML= xhr.response;
        }
    };
    
    xhr.open("POST", uploadURL);
    xhr.send(formData);
};

