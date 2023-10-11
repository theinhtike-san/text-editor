//create p element

// const p = document.createElement("p");
// p.style.color = "red";
// p.style.backgroundColor = "black";
// p.style.padding = "10px";
// p.innerText = "san kyi tar";

// p.className = "bg-black text-blue-500 p-5";
// p.classList.add("para");
// p.innerText = "san kyi tar";


//p element to body
// document.body.append(p);


const app =document.createElement("main");
app.classList.add("m-5","p-5","border","border-slate-300","rounded-md");

const heading = document.createElement("h1");
heading.innerText = "To do List";
heading.classList.add("font-serif","text-3xl", "font-bold");

const para =document.createElement("p");
para.innerText = "Education purpose only "
para.classList.add("text-blue-600","mb-3");

const lists = document.createElement("ul");
lists.classList.add("mt-5");

const createList = (listText) => {
    const list =document.createElement("li");
    list.classList.add("bg-slate-300","border-l-4","border-blue-500","p-2","mb-3")
    list.innerText = listText;
    return list;
}




lists.append(createList("to read Documentation"));
lists.append(createList("to practice"));
lists.append(createList("to read other code"));

const box = document.createElement("div");


const textInput =document.createElement("input");
textInput.classList.add("border-2","mr-3","py-2","px-4","rounded","border-box");

const addBtn = document.createElement("button");
addBtn.classList.add("bg-indigo-500","py-2","px-4","text-white","rounded");
addBtn.innerText = "Add New";

box.append(textInput);
box.append(addBtn);

document.body.append(app);
app.append(heading);
app.append(para);
app.append(lists);
app.append(box);



