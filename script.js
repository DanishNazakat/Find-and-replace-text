

let para = document.getElementById("paragraph").innerText;
console.log("Paragraph Before Replace");
console.log(para);
function text() {

    let textFind = document.getElementById("textFind").value;
    let textReplace = document.getElementById("textReplace").value;
    let resultp = document.getElementById("resultp");
    let paragraph = document.getElementById("paragraph");
    for (var i = 0; i < para.length; i++) {
        if (para.slice(i, i + textFind.length) === textFind) {
            para = para.slice(0, i) + textReplace + para.slice(i + textFind.length);
        }
    }
    resultp.style.display = "block";
    paragraph.style.display = "none";
    console.log("Paragraph After Replace");
    console.log(para);
}