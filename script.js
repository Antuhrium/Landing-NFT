const btnsList = [
    `document.querySelector("#btnArt")`,
    `document.querySelector("#btnCollectibles")`,
    `document.querySelector("#btnMetaverse")`,
    `document.querySelector("#btnVirtual")`,
    `document.querySelector("#btnMore")`
];
const btns = document.querySelectorAll(".btns");

function toggleClick(e) {
    btns.forEach((el) => {
        if (e === el.id) {
            document.querySelector(`#${el.id}`).className = "btn btns";
        } else {
            document.querySelector(`#${el.id}`).className = "stroke-btn btns";
        }
    })

}