document.querySelector(".btn.btn-primary").addEventListener("click", () => {
    const name = document.querySelector(".NameInput").value;
    const content = document.querySelector(".ContentInput").value;
    if (name=='' || content=='')
        return;
    const li =document.createElement("li");
    li.innerHTML = `
        <div class="input-container">
            <input class="form-control" type="text" value="${name} : ${content}" aria-label="Disabled input example" disabled readonly>
            <button class="btn delete-btn"><img src="trash-fill.svg"></button>
        </div>
    `;
    document.querySelector(".List").appendChild(li);
    document.querySelector(".NameInput").value = "";
    document.querySelector(".ContentInput").value = "";

    document.querySelector(".List").addEventListener("click", (event) => {
        if (event.target.closest(".btn")) {
            event.target.closest("li").remove();
        }
    });
}); 
