const fontChanger = document.querySelector("#fontChanger");
const colorChanger = document.querySelector("#colorChanger");
const fSizeChanger = document.querySelector("#fontsizeChanger");
const display = document.querySelector("#display")
const textChanger = document.querySelector("#textChanger");
const textLeft = document.querySelector("#textLeft");
const textCenter = document.querySelector("#textCenter");
const textJustify = document.querySelector("#textJustify");
const textRight = document.querySelector("#textRight");

const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const lineThrough = document.querySelector("#lineThrough");
const superscript = document.querySelector("#superscript");
const subscript = document.querySelector("#subscript");

const textChangerHandler = (event)=>{
    display.innerText = event.target.value

}

const fontChangerHandler = (event) => {
    console.log(event.target.value);
    display.classList.remove("font-roboto","font-agdasima","font-freehand","font-courgette");
    display.classList.add(event.target.value);
    console.log(display.classList)
  };
  
  const colorChangerHandler = (event) => {
    display.style.color = event.target.value;
  };
  
  const fontsizeChangerHandler = (event) => {
      console.log(event.target.value);
    display.style.fontSize = event.target.value;
  };
  const textLeftHandler = (event) => {
    display.classList.remove("text-right","text-center","text-justify")
    display.classList.add("text-left");

    textCenter.classList.remove("bg-slate-300");
    textJustify.classList.remove("bg-slate-300");
    textRight.classList.remove("bg-slate-300");

    textLeft.classList.add("bg-slate-300");
  }
  const textCenterHandler = (event) => {
    display.classList.remove("text-left","text-justify","text-right")
    display.classList.add("text-center");

    textLeft.classList.remove("bg-slate-300");
    textJustify.classList.remove("bg-slate-300");
    textRight.classList.remove("bg-slate-300");

    textCenter.classList.add("bg-slate-300");

    

    
  }
  const textJustifyHandler = (event) => {
    display.classList.remove("text-left","text-center","text-right")
    display.classList.add("text-justify");

    textCenter.classList.remove("bg-slate-300");
    textLeft.classList.remove("bg-slate-300");
    textRight.classList.remove("bg-slate-300");

    textJustify.classList.add("bg-slate-300");
  }

  const textRightHandler = (event) => {
    display.classList.remove("text-left","text-center","text-justify")
    display.classList.add("text-right");

    textCenter.classList.remove("bg-slate-300");
    textJustify.classList.remove("bg-slate-300");
    textLeft.classList.remove("bg-slate-300");

    textRight.classList.add("bg-slate-300");
  }

  const boldHandler = (event) =>{
    display.classList.toggle("font-bold");
    bold.classList.toggle("bg-slate-300")
  }
  const italicHandler = (event) =>{
    display.classList.toggle("italic");
    italic.classList.toggle("bg-slate-300")
  }
  const underlineHandler = (event) =>{
    display.classList.toggle("underline");
    underline.classList.toggle("bg-slate-300")
  }
  const lineThroughHandler = (event) =>{
    display.classList.toggle("line-through");
    lineThrough.classList.toggle("bg-slate-300")
  }
  const superscriptHandler = (event) =>{
    
  }
  const subscriptHandler = (event) =>{
    
  }
  textChanger.addEventListener("keyup", textChangerHandler);
  fontChanger.addEventListener("change", fontChangerHandler);
  colorChanger.addEventListener("change", colorChangerHandler);
  fSizeChanger.addEventListener("change", fontsizeChangerHandler);

  textLeft.addEventListener("click",textLeftHandler);
  textCenter.addEventListener("click",textCenterHandler);
  textJustify.addEventListener("click",textJustifyHandler);
  textRight.addEventListener("click",textRightHandler);

  bold.addEventListener("click", boldHandler);
  italic.addEventListener("click", italicHandler);
  underline.addEventListener("click", underlineHandler);
  lineThrough.addEventListener("click", lineThroughHandler);
  // superscript.addEventListener("click", superscriptHandler);
  // subscript.addEventListener("click", subscriptHandler);

  textChanger.addEventListener("keydown",(event)=>{
    if(event.ctrlKey && event.key === "l"){
      textLeftHandler();
    }
    if(event.ctrlKey && event.key === "e"){
      textCenterHandler();
    }
    if(event.ctrlKey && event.key === "j"){
      textJustifyHandler();
    }
    if(event.ctrlKey && event.key === "r"){
      textRightHandler();
    }
  })
  textChanger.addEventListener("keydown",(event)=>{
    
    if(event.ctrlKey && event.key === "b"){
      boldHandler();
    }
    if(event.ctrlKey && event.key === "i"){
      italicHandler();
    }
    if(event.ctrlKey && event.key === "u"){
      underlineHandler();
    }
    


  })