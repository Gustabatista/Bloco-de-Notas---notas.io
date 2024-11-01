function createNote() {
    const noteText = document.getElementById("noteText").value;
    const noteDate = document.getElementById("noteDate").value;
    const currentDate = new Date().toISOString().split("T")[0];
    
    if (!noteText || !noteDate) {
        alert("Por favor, preencha a nota e a data.");
        return;
    }
    
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");

    if (noteDate < currentDate) {
        noteElement.classList.add("expired");
    }
    
    noteElement.innerHTML = `
        <div class="note-info">
            <span>${noteText}</span>
            <span class="date-icon"><i class="fas fa-calendar-alt"></i> ${noteDate}</span>
        </div>
        <div class="note-actions">
            <i class="fas fa-check-circle task-complete" onclick="toggleComplete(this)"></i>
            <i class="fas fa-trash-alt delete-note" onclick="deleteNote(this)"></i>
        </div>
    `;
    
    document.getElementById("notesList").appendChild(noteElement);
    
    document.getElementById("noteText").value = "";
    document.getElementById("noteDate").value = "";
}

function toggleComplete(checkbox) {
    const note = checkbox.closest(".note");
    note.classList.toggle("completed");
}

function deleteNote(button) {
    const note = button.closest(".note");
    note.remove();
}
