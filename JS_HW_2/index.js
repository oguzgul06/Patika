let listDOM = document.getElementsByTagName("li");

for (let i = 0; i < listDOM.length; i++) {
  let span = document.createElement("span");
  span.className = "close";

  let txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  listDOM[i].appendChild(span);
}

for (let i = 0; i < listDOM.length; i++) {
  listDOM[i].addEventListener("click", function (event) {
    event.target.classList.toggle("checked");
  });
}

let span = document.getElementsByTagName("span");

for (let i = 0; i < span.length; i++) {
  span[i].onclick = function (event) {
    let section = event.target.parentElement;
    section.style.display = "none";
  };
}

let closeDOM = document.getElementsByClassName("close");
for (let i = 0; i < closeDOM.length; i++) {
  closeDOM[i].onclick = function (event) {
    let div = event.target.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
for (let i = 0; i < list.length; i++) {
  list.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "li") {
        event.target.classList.toggle("checked");
      }
    },
    false
  );
}

let button = document.querySelector("#liveToastBtn"); // button değeri tutuluyor

// listeye eleman ekleme
button.onclick = function newElement() {
  let liDOM = document.createElement("li");
  let inputText = document.getElementById("task").value;
  let textNode = document.createTextNode(inputText);

  liDOM.appendChild(textNode);

  if (inputText === "") {
    alert("You must write something on the text box");
  } else {
    document.getElementById("list").appendChild(liDOM);
  }
  document.getElementById("task").value = "";

  let spanDOM = document.createElement("span");
  let iconDOM = document.createTextNode("\u00D7");
  spanDOM.className = "close";
  spanDOM.appendChild(iconDOM);
  liDOM.appendChild(spanDOM);

  for (let j = 0; j < close.length; j++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
};
