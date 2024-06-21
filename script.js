function materi() {
    window.location.href = "materi/index.html";
}



function LoginTasik() {
    const dataUser = 'indonesia';
    const dataPass = 'Tasikmalaya';
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    if (username === dataUser && password === dataPass) {
        materi();
    } else {
        const styleCSS = document.getElementById('peringatan')
        styleCSS.style.display = 'block';
    }
};