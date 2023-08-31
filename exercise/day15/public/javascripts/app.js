const btnSetCookie = document.querySelectorAll(".setCookie");
btnSetCookie.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.cookie = "isFirstTime=false";
  });
});

const todoList = document.querySelectorAll("li");
[...todoList].forEach((todo) => {
  const id = todo.getAttribute("id");
  todo.addEventListener("dblclick", async () => {
    await fetch("./delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    // window.location.reload();
  });
});

function handleBeforeUnload() {
  document.cookie = JSON.stringify(todoList);
}

window.addEventListener("beforeunload", handleBeforeUnload);
