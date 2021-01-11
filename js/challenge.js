let counter = document.querySelector("#counter");
let minusButton = document.querySelector("#minus")
let plusButton = document.querySelector("#plus")
let heartButton = document.querySelector("#heart")
let pauseButton = document.querySelector("#pause")
let likesList = document.querySelector("#likes")
let comments = document.querySelector("#comments")
let commentForm = document.querySelector("#comment-form")
let commentInputField = document.querySelector("#comment-input")
let likes = {};
let intervalID

document.addEventListener("DOMContentLoaded", () => {
  startCounter()
  minusButton.addEventListener("click", decrement)
  plusButton.addEventListener("click", increment)
  heartButton.addEventListener("click", like)
  pauseButton.addEventListener("click", pauseClick)
  commentForm.addEventListener("submit", (e) => addComment(e))
})


function startCounter() {
  intervalID = setInterval(increment, 1000)
}

function stopCounter() {
  intervalID = clearInterval(intervalID)
}

function counterToNum() {
  return parseInt(counter.innerText, 10);
}

function increment() {
  counter.innerText = counterToNum() + 1;
}

function decrement() {
  counter.innerText = counterToNum() - 1;
}

function pauseClick() {
  if (intervalID) {
    stopCounter();
  } else {
    startCounter();
  }
}

function like() {
  let num = counterToNum()
  if (likes[num]) {
    likes[num]++
    document.querySelector(`#num_${num}`).innerHTML = `${num} was liked ${likes[num]} times.`
  } else {
    likes[num] = 1
    likesList.innerHTML += `<li id="num_${num}">${num} was liked ${likes[num]} times.</li>`
  }
}

function addComment(e) {
  e.preventDefault()
  if (commentInputField.value !== "") {
    comments.innerHTML += `<p>${commentInputField.value}</p>`
    commentInputField.value = ""
  }
}

