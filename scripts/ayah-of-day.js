// Ayah of the Day Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load Arabic font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const ayahs = [
        {
            arabic: "وَإِن تَصْبِرُوا۟ وَتَتَّقُوا۟ فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ",
            translation: "And if you are patient and fear Allah, indeed, that is of the matters requiring resolve.",
            reference: "Surah Al-Imran (3:186)"
        },
        {
            arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship comes ease.",
            reference: "Surah Ash-Sharh (94:6)"
        },
        {
            arabic: "وَٱذْكُرُوا۟ نِعْمَةَ ٱللَّهِ عَلَيْكُمْ",
            translation: "And remember the favor of Allah upon you.",
            reference: "Surah Al-Baqarah (2:231)"
        },
        {
            arabic: "وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ",
            translation: "And cooperate in righteousness and piety.",
            reference: "Surah Al-Ma'idah (5:2)"
        },
        {
            arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟",
            translation: "O you who have believed, persevere and endure.",
            reference: "Surah Al-Imran (3:200)"
        },
        {
            arabic: "وَٱلَّذِينَ جَٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
            translation: "And those who strive for Us - We will surely guide them to Our ways.",
            reference: "Surah Al-Ankabut (29:69)"
        }
    ];

    // Get today's ayah based on date (consistent daily)
    function getDailyAyah() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        return ayahs[dayOfYear % ayahs.length];
    }

    // Display ayah
    function displayAyah(ayah) {
        document.getElementById('ayahArabic').textContent = ayah.arabic;
        document.getElementById('ayahTranslation').textContent = `"${ayah.translation}"`;
        document.getElementById('ayahReference').textContent = ayah.reference;
    }

    // Initial display
    displayAyah(getDailyAyah());

    // Refresh button - shows random ayah
    document.getElementById('refreshAyah').addEventListener('click', function() {
        const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
        displayAyah(randomAyah);
    });
});