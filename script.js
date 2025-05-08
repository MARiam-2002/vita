// فتح وإغلاق نافذة التسجيل (Sign Up)
function openModal() {
    document.getElementById("signupModal").style.display = "block";
}

function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

// فتح نافذة تسجيل الدخول (Login) من داخل نافذة التسجيل
function showLoginModal() {
    closeModal(); // إغلاق نافذة التسجيل
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// فتح وإغلاق نافذة الاختبار السريع (Quick Test)
function openTestModal() {
    document.getElementById("testModal").style.display = "block";
}

function closeTestModal() {
    document.getElementById("testModal").style.display = "none";
}

// فتح وإغلاق نافذة اختيار الحساب (Google Accounts)
function openGoogleAccountsModal() {
    document.getElementById("googleAccountsModal").style.display = "block";
}

function closeGoogleAccountsModal() {
    document.getElementById("googleAccountsModal").style.display = "none";
}

// فتح نافذة about
function openAboutModal() {
    document.getElementById("aboutModal").style.display = "block";
}

// إغلاق نافذة about
function closeAboutModal() {
    document.getElementById("aboutModal").style.display = "none";
}

// إغلاق النافذة عند النقر خارجها
window.onclick = function(event) {
    const modal = document.getElementById("aboutModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// إغلاق النوافذ المنبثقة عند النقر خارج محتواها
window.onclick = function(event) {
    var signupModal = document.getElementById("signupModal");
    var loginModal = document.getElementById("loginModal");
    var testModal = document.getElementById("testModal");
    var googleAccountsModal = document.getElementById("googleAccountsModal");

    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == testModal) {
        testModal.style.display = "none";
    }
    if (event.target == googleAccountsModal) {
        googleAccountsModal.style.display = "none";
    }
}

// إضافة تأثير البار السفلي عند النقر على Contact
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    const footer = document.querySelector('footer');
    footer.classList.add('highlight');
    
    // التمرير السلس إلى البار السفلي
    footer.scrollIntoView({ behavior: 'smooth' });
    
    // إزالة التأثير بعد ثانيتين
    setTimeout(() => {
        footer.classList.remove('highlight');
    }, 2000);
});