const textInput = document.querySelector("#textInput");
const heading = document.querySelector("#heading");

// textInput.addEventListener('focus',() =>{
//     console.log("u focus");
// })
// textInput.addEventListener('blur',() =>{
//     console.log("u blur");
// })

// heading.addEventListener("mouseover",()=>{
//     console.log("mouse over");
// })
// heading.addEventListener("mouseout",()=>{
//     console.log("mouse out");
// })
// heading.addEventListener("mousemove",()=>{
//     console.log("mouse move");
// })

const fileInput = document.querySelector("#fileInput");

// fileInput.addEventListener('change',()=>{
//     console.log(fileInput.files);
// })

// const testForm = document.querySelector("#testForm");
// const link = document.querySelector("#link");

// console.log(testForm);

// testForm.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     const formData = new FormData(testForm);
//     formData.append("salary",1200)
 //     console.log(formData.get("your_name"));
//     console.log(formData.get("your_bd"));
//     console.log(formData.get("salary"));
//     console.log(formData.has("salary"));

//     testForm.reset();
// })

// link.addEventListener("click",(event)=>{
//     event.preventDefault();
//     console.log(event);
//     console.log("u click")
// })

window.addEventListener('scroll',(event)=>{
    console.log(window.scrollY);
    console.log("U scroll");
})