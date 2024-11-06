name1 = document.getElementById("name");
name2 = document.getElementById("name2");
setTimeout(hidename2, 3000);
function hidename2() {
    name2.style.display = "flex";
    name1.style.display = "none";
}
