document.addEventListener('DOMContentLoaded', () => {
    const areaFilter = document.getElementById('area-filter');
    const specialtyFilter = document.getElementById('specialty-filter');
    const searchInput = document.getElementById('search-input');
    const noResultsMsg = document.getElementById('no-results');
    const offersContainer = document.querySelector('.offers-container');

    // كود الجوجل شيت بتاعك واللينك السحري لتحويله لـ JSON
    const sheetId = '1o7iVY8Nx7O3RzRxOAkUXNKXai3uNkMvVuiFSpLVK15c';
    const jsonUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    let allOffers = []; // المصفوفة اللي هنخزن فيها العروض اللي جاية من جوجل

    // 1. دالة لجلب البيانات من جوجل شيت
    async function fetchOffersFromSheet() {
        try {
            const response = await fetch(jsonUrl);
            const text = await response.text();
            
            // تنظيف الداتا لأن جوجل بترجعها مع حماية برمجية
            const jsonData = JSON.parse(text.substring(47, text.length - 2));
            const rows = jsonData.table.rows;

            // نلف على السطور من أول السطر التالت (index 0) عشان نتخطى العناوين والشرح
            allOffers = [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i].c;
                if (!row || !row[0]) continue; // لو السطر فاضي يتخطاه

                allOffers.push({
                    title: row[0] ? row[0].v : '',
                    area: row[1] ? row[1].v : '',
                    areaText: row[2] ? row[2].v : '',
                    specialty: row[3] ? row[3].v : '',
                    specialtyText: row[4] ? row[4].v : '',
                    details: row[5] ? row[5].v : '',
                    oldPrice: row[6] ? row[6].v : '',
                    newPrice: row[7] ? row[7].v : '',
                    dateAdded: row[8] ? row[8].v : '',
                    dateExpiry: row[9] ? row[9].v : ''
                });
            }

            // بعد ما الداتا حملت بنجاح، بنرسمها في الصفحة
            displayOffers(allOffers);

        } catch (error) {
            console.error("حصلت مشكلة في تحميل البيانات من جوجل شيت:", error);
            offersContainer.innerHTML = "<p style='text-align:center; color:red;'>عذراً، حدث خطأ أثناء تحميل العروض الحالية.</p>";
        }
    }

    // 2. دالة لرسم الكروت وتطبيق الفلاتر والبحث والتواريخ
    function displayOffers(offersList) {
        offersContainer.innerHTML = ''; // نصفر الحاوية الأول
        
        const selectedArea = areaFilter.value;
        const selectedSpecialty = specialtyFilter.value;
        const searchText = searchInput.value.toLowerCase().trim();
        
        const today = new Date(); // تاريخ النهارده عشان نتأكد من الصلاحية
        let visibleCardsCount = 0;

        offersList.forEach(offer => {
            // أولاً: تشيك على تاريخ انتهاء العرض (لو مكتوب)
            if (offer.dateExpiry) {
                const expiryDate = new Date(offer.dateExpiry);
                if (expiryDate < today) {
                    return; // لو العرض منتهي صلاحيته اخرج ومتعرضوش للبنات
                }
            }

            // ثانياً: شروط المطابقة للفلاتر والبحث
            const matchesArea = (selectedArea === 'all' || offer.area === selectedArea);
           const matchesSpecialty = (selectedSpecialty === 'all' || 
    offer.specialty === selectedSpecialty || 
    (selectedSpecialty === 'teeth' && offer.specialty === 'teeth-cleaning'));
            const matchesSearch = offer.title.toLowerCase().includes(searchText) || 
                                  offer.details.toLowerCase().includes(searchText);

            // لو العرض حقق كل الشروط نبدأ نصنع الكارت برمجياً (HTML Dynamic)
            if (matchesArea && matchesSpecialty && matchesSearch) {
                visibleCardsCount++;

                const cardHtml = `
                    <div class="card" data-area="${offer.area}" data-specialty="${offer.specialty}">
                        <span class="badge ${offer.specialty}-badge">${offer.specialtyText}</span>
                        <h3>${offer.title}</h3>
                        <p class="location">${offer.areaText}</p>
                        
                        <div class="dates-section">
                            <span>📅 بدأ يوم: ${offer.dateAdded}</span>
<span class="expiry-date">${offer.dateExpiry === '2100-12-31' ? '✨ متاح ليكي دائماً' : '⏳ ينتهي: ' + offer.dateExpiry}</span>
                        </div>

                        <p class="offer-details">${offer.details}</p>
                        
                        <div class="price-section">
                            <span class="old-price">${offer.oldPrice} ج</span>
                            <span class="new-price">${offer.newPrice} فقط</span>
                        </div>
            <div class="card-buttons" style="display: flex; gap: 10px; margin-top: 10px; direction: rtl;">
                <a href="https://wa.me/${offer.whatsappNumber || '201000000000'}?text=إزيك، أنا حابة أحجز عرض: ${encodeURIComponent(offer.title || '')}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #25d366; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">💬 احجزي واتساب</a>
                <a href="${offer.pageLink || '#'}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #007bff; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">🌐 زيارة الصفحة</a>
            </div>
                    </div>
                `;
                offersContainer.insertAdjacentHTML('beforeend', cardHtml);
            }
        });

        // إظهار أو إخفاء رسالة "عذراً يا قمر"
        if (visibleCardsCount === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }

    // 3. ربط أحداث الفلاتر والبحث بالدالة (تشتغل فوراً أول ما البنات يغيروا الفلتر)
    areaFilter.addEventListener('change', () => displayOffers(allOffers));
    specialtyFilter.addEventListener('change', () => displayOffers(allOffers));
    searchInput.addEventListener('input', () => displayOffers(allOffers));

    // تشغيل جلب البيانات أول ما الصفحة تفتح
    fetchOffersFromSheet();
});
// الرابط السحري الجديد بتاعك بعد التحديث
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyr0thnvillT8LmY5_gUPK11ReuxSutik1guT-cE6lYZfDbiQXMex038EFf7F0oqX3doQ/exec";

// 1. فتح وقفل النافذة المنبثقة من الموبايل
document.getElementById('open-add-modal').addEventListener('click', () => {
    document.getElementById('add-offer-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('add-offer-modal').style.display = 'none';
});

// إخفاء/إظهار حقل التاريخ لو العرض دائم
document.getElementById('is-permanent').addEventListener('change', (e) => {
    const container = document.getElementById('expiry-date-container');
    if (e.target.checked) {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});

// 2. عند الضغط على زرار حفظ العرض
document.getElementById('submit-offer').addEventListener('click', async () => {
    // تجميع المدخلات
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


    // تجهيز كائن العرض الجديد بنفس أسمائه في الشيت والكود
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
        whatsappNumber: whatsapp
    };

    try {
        // تغيير حالة الزرار أثناء الإرسال
        const submitBtn = document.getElementById('submit-offer');
        submitBtn.innerText = "جاري الحفظ بالشيت والموقع...";
        submitBtn.disabled = true;

        // إرسال البيانات لجوجل شيت في الخلفية (بدون مشاكل CORS)
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOffer)
        });

        // إضافة العرض الجديد للمصفوفة الأساسية في فرونت إند الموقع فوراً
        // تأكد إن اسم المصفوفة عندك هو allOffers أو عرضه مباشرة
        if (typeof allOffers !== 'undefined') {
            allOffers.push(newOffer); 
            displayOffers(allOffers); 
        } else {
            // لو المصفوفة عندك باسم تاني زودها فيها أو اعمل ريفريش بسيط
            location.reload();
            return;
        }

        // تنظيف الخانات وقفل الفورم بعد النجاح
        document.getElementById('add-offer-modal').style.display = 'none';
        document.getElementById('new-title').value = '';
        document.getElementById('new-details').value = '';
        document.getElementById('new-oldPrice').value = '';
        document.getElementById('new-newPrice').value = ''; 
        document.getElementById('new-pageLink').value = '';
        document.getElementById('new-whatsapp').value = '';
        document.getElementById('is-permanent').checked = false;
        document.getElementById('expiry-date-container').style.display = 'block';
        
        submitBtn.innerText = "حفظ العرض";
        submitBtn.disabled = false;
        
        alert("تمت إضافة العرض بنجاح في جوجل شيت ونور في الموقع يا فنان! 🎉");

    } catch (error) {
        console.error("خطأ أثناء الإضافة:", error);
        alert("حصلت مشكلة أثناء إرسال البيانات!");
        document.getElementById('submit-offer').innerText = "حفظ العرض";
        document.getElementById('submit-offer').disabled = false;
    }
});
// كود تأمين البيانات عشان الكروت ترجع تظهر فوراً
function fixOfferData(offer) {
    if (!offer.whatsappNumber) {
        offer.whatsappNumber = offer.whatsapp || "201000000000"; // حط رقمك الافتراضي هنا لو الخانة فاضية
    }
    if (!offer.pageLink) {
        offer.pageLink = "#";
    }
    return offer;
}