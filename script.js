const image = document.querySelector(".container"),
    hearticon = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {

    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;
    console.log(xValue,yValue);

    hearticon.style.left = `${xValue}px`;
    hearticon.style.top = `${yValue}px`;

    hearticon.classList.add("active");

    setTimeout(() => {
        hearticon.classList.remove("active");
    }, 1000);

});