document.addEventListener('DOMContentLoaded', () => {
    const areaFilter = document.getElementById('area-filter');
    const specialtyFilter = document.getElementById('specialty-filter');
    const searchInput = document.getElementById('search-input');
    const noResultsMsg = document.getElementById('no-results');
    const offersContainer = document.querySelector('.offers-container');

    // كود الجوجل شيت بتاعك واللينك السحري لتحويله لـ JSON
    const sheetId = '1o7iVY8Nx7O3RzRxOAkUXNKXai3uNkMvVuiFSpLVK15c';
    const jsonUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    let allOffers = []; // مصفوفة العروض

    // 1. دالة لجلب البيانات من جوجل شيت
    async function fetchOffersFromSheet() {
        try {
            const response = await fetch(jsonUrl);
            const text = await response.text();
            const jsonData = JSON.parse(text.substring(47, text.length - 2));
            const rows = jsonData.table.rows;

            allOffers = rows.map(r => ({
                title: r.c[0]?.v || '',
                area: r.c[1]?.v || '',
                areaText: r.c[2]?.v || '',
                specialty: r.c[3]?.v || '',
                specialtyText: r.c[4]?.v || '',
                details: r.c[5]?.v || '',
                oldPrice: r.c[6]?.v || 0,
                newPrice: r.c[7]?.v || 0,
                dateAdded: r.c[8]?.v || '',
                dateExpiry: r.c[9]?.v || '2100-12-31',
                pageLink: r.c[10]?.v || '#',
                whatsappNumber: r.c[11]?.v || '201000000000'
            })).filter(offer => offer.title !== '');

            displayOffers(allOffers);
        } catch (error) {
            console.error("حصلت مشكلة في تحميل البيانات من جوجل شيت:", error);
            offersContainer.innerHTML = "<p style='text-align:center; color:red;'>عذراً، حدث خطأ أثناء تحميل العروض الحالية.</p>";
        }
    }

    // 2. دالة رسم الكروت
    function displayOffers(offersList) {
        offersContainer.innerHTML = ''; 
        const selectedArea = areaFilter.value;
        const selectedSpecialty = specialtyFilter.value;
        const searchText = searchInput.value.toLowerCase().trim();
        const today = new Date(); 
        let visibleCardsCount = 0;

        offersList.forEach(offer => {
            const matchesArea = (selectedArea === 'all' || offer.area === selectedArea);
            const matchesSpecialty = (selectedSpecialty === 'all' || 
                offer.specialty === selectedSpecialty || 
                (selectedSpecialty === 'teeth' && offer.specialty === 'teeth-cleaning'));
            const matchesSearch = offer.title.toLowerCase().includes(searchText) || 
                                  offer.details.toLowerCase().includes(searchText);

            if (matchesArea && matchesSpecialty && matchesSearch) {
                      // كود ذكي لتغيير نص التاريخ البعيد مع الهدية 🎁
        // 1. تجهيز متغيرات التاريخ واللمبة الذكية 💡
        let displayDate = "";
        let statusLampHtml = "";
        const currentCheckDate = new Date();

        // تنظيف التاريخ لو جاي على هيئة صيغة Date دوت نت
        let cleanExpiryStr = offer.dateExpiry || "";
        if (cleanExpiryStr.includes("Date")) {
            const matches = cleanExpiryStr.match(/\d+/g);
            if (matches && matches.length >= 3) {
                cleanExpiryStr = `${matches[0]}-${matches[1]}-${matches[2]}`;
            }
        }

        // 2. التحقق من التاريخ البعيد المميز (2100)
        if (offer.dateExpiry && (offer.dateExpiry.includes("2100") || offer.dateExpiry.includes("2100-12-31"))) {
            displayDate = "العرض متاح ليكي ياقمر ولفتره محدوده 🎁";
            statusLampHtml = `<span class="status-lamp lamp-available"></span>`;
        } else {
            // 3. التحقق هل العرض انتهى أم لا
            let isExpired = false;
            if (offer.dateExpiry) {
                let checkExpiry;
                if (offer.dateExpiry.includes("Date")) {
                    const matches = offer.dateExpiry.match(/\d+/g);
                    checkExpiry = new Date(matches[0], matches[1] - 1, matches[2]);
                } else {
                    checkExpiry = new Date(offer.dateExpiry);
                }
                if (checkExpiry && checkExpiry < currentCheckDate) {
                    isExpired = true;
                }
            }

            if (isExpired) {
                displayDate = `انتهى في: ${cleanExpiryStr}`;
                statusLampHtml = `<span class="status-lamp lamp-expired"></span>`;
            } else {
                displayDate = `ينتهي في: ${cleanExpiryStr}`;
                statusLampHtml = `<span class="status-lamp lamp-available"></span>`;
            }
        }
visibleCardsCount++;
        const cardHtml = `
            <div class="card" data-area="${offer.area}" data-specialty="${offer.specialty}">
                <span class="badge ${offer.specialty}-badge">${offer.specialtyText}</span>
                <h3>${offer.title}</h3>
                <p class="location">${offer.areaText}</p>
                
                <div class="dates-section">
                    <span>📅 بدأ يوم: ${offer.dateAdded}</span>
                    <span class="expiry-date">${statusLampHtml} ${displayDate}</span>
                </div>

                <p class="offer-details">${offer.details}</p>
                <div class="price-section">
                    <span class="old-price">${offer.oldPrice} ج</span>
                    <span class="new-price">${offer.newPrice} فقط</span>
                </div>
                <div class="card-buttons" style="display: flex; gap: 10px; margin-top: 10px; direction: rtl;">
                    <a href="https://wa.me/${offer.whatsappNumber || '201000000000'}?text=${encodeURIComponent('ازيك يا قمر، أنا حابة أحجز عرض ' + (offer.title || ''))}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #25d366; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">💬 احجزي واتساب</a>
                    <a href="${offer.pageLink || '#'}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #FFA4B6; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">🌐 زيارة الصفحة</a>
                    <button class="fav-btn" onclick="toggleFav(this)" style="background: none; border: none; font-size: 24px; cursor: pointer;">💖</button>
                </div>
            </div>
        `;

        offersContainer.insertAdjacentHTML('beforeend', cardHtml);
    }
});


        noResultsMsg.style.display = (visibleCardsCount === 0) ? 'block' : 'none';
    }

    // تأمين ربط أحداث الفلاتر والبحث لمنع أيرور الـ null نهائياً
    if (areaFilter) {
        areaFilter.addEventListener('change', () => displayOffers(allOffers));
    }
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', () => displayOffers(allOffers));
    }
    if (searchInput) {
        searchInput.addEventListener('input', () => displayOffers(allOffers));
    }

    // تشغيل جلب البيانات أول ما الصفحة تفتح
    fetchOffersFromSheet();

    // ----------------------------------------------------
    // الأكواد القادمة تم نقلها هنا بالداخل لحل أيرور الـ null تماماً
    // ----------------------------------------------------
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-yUrvvxGZyTzGOLDabbYRFyYU1isYes-DSdcsHZBdYZb9R-rptoDSAQ31QL8hb0xd5Q/exec";

    const openModalBtn = document.getElementById('open-add-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const isPermanentCheck = document.getElementById('is-permanent');
    const submitOfferBtn = document.getElementById('submit-offer');

    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            document.getElementById('add-offer-modal').style.display = 'flex';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('add-offer-modal').style.display = 'none';
        });
    }

    if (isPermanentCheck) {
        isPermanentCheck.addEventListener('change', (e) => {
            const container = document.getElementById('expiry-date-container');
            if (container) {
                container.style.display = e.target.checked ? 'none' : 'block';
            }
        });
    }

    if (submitOfferBtn) {
        submitOfferBtn.addEventListener('click', async () => {
            const title = document.getElementById('new-title').value.trim();
            const area = document.getElementById('new-area').value;
            const areaText = document.getElementById('new-area').options[document.getElementById('new-area').selectedIndex].text;
            const specialty = document.getElementById('new-specialty').value;
            const specialtyText = document.getElementById('new-specialty').options[document.getElementById('new-specialty').selectedIndex].text;
            const details = document.getElementById('new-details').value.trim();
            const oldPrice = document.getElementById('new-oldPrice').value;
            const newPrice = document.getElementById('new-newPrice').value;
            const pageLink = document.getElementById('new-pageLink').value.trim();
            const whatsapp = document.getElementById('new-whatsapp').value.trim();

            const dateAdded = new Date().toISOString().split('T')[0];
            const dateExpiry = isPermanentCheck.checked ? '2100-12-31' : (document.getElementById('new-expiry')?.value || '2100-12-31');

            let formattedWhatsapp = whatsapp;
            if (formattedWhatsapp.startsWith('0')) {
                formattedWhatsapp = '20' + formattedWhatsapp.substring(1);
            } else if (!formattedWhatsapp.startsWith('20') && formattedWhatsapp !== '') {
                formattedWhatsapp = '20' + formattedWhatsapp;
            }

            const newOffer = {
                title: title,
                area: area,
                areaText: areaText,
                specialty: specialty,
                specialtyText: specialtyText,
                details: details,
                oldPrice: Number(oldPrice),
                newPrice: Number(newPrice),
                dateAdded: dateAdded,
                dateExpiry: dateExpiry,
                pageLink: pageLink,
                whatsappNumber: formattedWhatsapp
            };

            try {
                submitOfferBtn.innerText = "جاري الحفظ والعرض بالموقع...";
                submitOfferBtn.disabled = true;

                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newOffer)
                });

                alert("تمت إضافة العرض بنجاح ونور في الموقع 🎉");
                location.reload(); 
            } catch (error) {
                console.error("خطأ أثناء الإضافة:", error);
                alert("حصلت مشكلة أثناء إرسال البيانات!");
                submitOfferBtn.innerText = "حفظ العرض";
                submitOfferBtn.disabled = false;
            }
        });
    }
});
// كود تشغيل الوضع الليلي وحفظ الاختيار 🌙
const darkModeToggle = document.getElementById('darkModeToggle');

// أول ما الصفحة تفتح، نشوف هل البنت كانت مفعلاه قبل كده؟
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if(darkModeToggle) darkModeToggle.innerText = "☀️ الوضع المضيء";
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerText = "☀️ الوضع المضيء";
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerText = "🌙 الوضع الليلي";
        }
    });
}
// دالة حفظ المفضلة وتغيير شكل القلب 💖
function toggleFav(btn) {
    if (btn.innerText === "💖") {
        btn.innerText = "🩷"; // يقلب روز
        alert("العرض دخل القلب جوة.. متقلقيش مش هيضيع 😉💖");
    } else {
        btn.innerText = "💖";
    }
}
// دالة فلترة العروض وعرض المفضلة فقط
function filterFavorites() {
    const cards = document.querySelectorAll('.card');
    let hasFav = false;

    cards.forEach(card => {
        const favBtn = card.querySelector('.fav-btn');
        // لو القلب مقلوب روز (🩷) يظهر الكارت، لو لسه (💖) يخفيه
        if (favBtn && favBtn.innerText === "🩷") {
            card.style.display = "block";
            hasFav = true;
        } else {
            card.style.display = "none";
        }
    });

    // لو مفيش أي عرض في المفضلة نطلع لها رسالة رقيقة
    if (!hasFav) {
        alert("قلبك لسه فاضي يا قمر.. مفيش عروض هنا لسه! 🩷");
        // نرجع نظهر كل الكروت تاني عشان متفتكرش الموقع عطل
        cards.forEach(card => card.style.display = "block");
    }
}
// دالة حفظ المفضلة مع إرسال التفاعل للوحة الإحصائيات
function toggleFav(btn) {
    // جلب عنوان العرض عشان نعرف أنهي واحد عجبها بالظبط
    const cardTitle = btn.closest('.card').querySelector('h3').innerText;

    if (btn.innerText === "💖") {
        btn.innerText = "🩷"; // يقلب روز
        alert("العرض دخل القلب جوة.. متقلقيش مش هيضيع 😉🩷");

        // السطر السحري اللي بيبعت الإحصائية لـ Umami مخفي
        if (window.umami) {
            umami.track('حفظ في المفضلة', { 'اسم_العرض': cardTitle });
        }
    } else {
        btn.innerText = "💖";
    }
}
