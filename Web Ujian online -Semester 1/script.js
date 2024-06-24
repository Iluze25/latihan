function materi() {
    window.location.href = "Web%20Ujian%20online%20-Semester%201/materi/materi.html";
}

function loginValue() {
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value

    if (username === "indonesia" && password === "Tasikmalaya") {
        alert('Anda akan segera masuk ke Materi');
        materi();
    } else {
        const style = document.getElementById('peringatan');
        style.style.display = "block";
    }
}
