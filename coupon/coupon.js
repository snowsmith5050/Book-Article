const allBtn = document.getElementById("all-btn");
const all = document.querySelector(".all");
const cBtn = document.getElementById("cancel-btn");
const link = document.getElementById("links-btn");
const link1 = document.querySelector("all-link");
const link2 = document.querySelector(".all-link2");
if(allBtn && all) {allBtn.addEventListener('click', () => {
    all.style.display = "block";
    document.body.classList.toggle("show");
});
}
if (cBtn && all) {
cBtn.addEventListener('click', () => {
    all.style.display = "none";
    document.body.classList.remove("show");
});
}
link.addEventListener('click', () => {
    document.all-link2.classList.toggle('show');
    const open = document.all-link2.contain('show');
    if(open) {
        link.addEventListener('click', () => {
            document.all-link2.remove('show');
        });
    }
});

