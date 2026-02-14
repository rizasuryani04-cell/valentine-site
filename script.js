document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('story').classList.add('reveal');
});

// Surprise muncul saat scroll ke bawah (deteksi scroll)
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Ubah angka jika perlu
        document.getElementById('surprise').classList.add('reveal');
    }
});