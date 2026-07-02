// لستة نصائح "مرايتك الحنينة بتقولك إيه النهارده" ✨
const mirrorAdvices = [
    "مرايتك الحنينة بتقولك تشربي شاي أخضر كتير، لأن فيه مضادات أكسدة هتخليكي تنوري وتبقي حنينة زيه. 🍵 الأخضر يليق بيكي يا قمر.",
    "مرايتك الحنينة بتقولك لو عايزة ريحة جلدك علطول تبقى تحفة، اشربي شاي الورد (ورد مجفف وعليه مياه مغلية)، هتبقي وردة بتتحرك في الحياة. 🌹✨",
    "مرايتك الحنينة بتقولك اللي يسيبك دقيقة سيبيه سنة، واشتري بروقانك ماسك ورطبي بشرتك وسيبك من الزعل لأنه بيكرمش الوش والموضوع مش مستاهل. 💆‍♀️ الروقان يكسب.",
    "مرايتك الحنينة بتقولك الـ Skincare مش رفاهية، ده غسيل ذنوب لليوم الطويل اللي شوفتي فيه ناس تعصبك. 🧼 الوش الرايق أولى.",
    "مرايتك الحنينة بتقولك نامي بدري واشبعي نوم، الهالات السوداء مش لايقة على عيونك اللي تدوب دي.. سيبي الموبايل قبل النوم بنص ساعة. 📱👀",
    "مرايتك الحنينة بتقولك رموشك دي محتاجة رشة سيروم أو نقطة زيت خروع حنينة، وبلاش مسكرة تقيلة كل يوم عشان ما نرجعش نعيط على اللي وقعوا. 👁️ النظرة القاتلة.",
    "مرايتك الحنينة بتقولك رطبي شفايفك قبل ما تنامي، الشفايف الناشفة دي مش ليكي إنتي معمولة من سكر. 💋 قشريها بسكر وزيت زيتون.",
    "مرايتك الحنينة بتقولك اللي يزعلك امسحيه من حياتك زي ما بتمسحي الميك اب المقاوم للمياه.. بقطنة وبلطف ومن غير أثر. 🧽❌",
    "مرايتك الحنينة بتقولك بشرتك محتاجة تشربي مية كتير النهارده، شجعي نفسك وقومي اشربي حالا وماتكسليش عشان تنوري. 🥛 قطرة مية تفرق.",
    "مرايتك الحنينة بتقولك الضوافر المكسورة دي تتبرد فوراً، إيد الصاروخ ما ينفعش تبقي مش مظبوطة.. حطي فازلين قبل النوم للنعومة. 💅 الرايقة.",
    "مرايتك الحنينة بتقولك بلاش تلمسي الحبوب اللي في وشك، حطي نقطة زيت شجرة الشاي وسيبيهم في حالهم هيمشوا لوحدهم.. العند بيبوظ الوش. 🧪 انسسيها.",
    "مرايتك الحنينة بتقولك لو شعرك زعلان منك ومقصف، قصي الأطراف وافتحي صفحة جديدة.. الشعر زي العلاقات بيحتاج قص قصري. ✂️ التجديد مطلوب.",
    "مرايتك الحنينة بتقولك إنتي جميلة في كل حالاتك، وخلي دايماً ثقتك بنفسك هي سر جاذبيتك اللي بتخطف العين وتدوب الكل. 👑 الملكة دايماً.",
    "مرايتك الحنينة بتقولك غسيل الوش بالليل ده فرض وواجب، دي جريمة في حق الوش القمر ده إنك تنامي بالميك اب وتصحي تندمي. 🧼❌ .",
    "مرايتك الحنينة بتقولك الصن بلوك ده حبيبك اللي مش هيخونك أبداً، أوعي تخرجي في الشمس من غيره عشان وشك ما يزعلش من الحروق. ☀️ خليكي قمر.",
    "مرايتك الحنينة بتقولك خدودك دي محتاجة تضحك عشان تنور، بلاش تكشيرة بتطفي الوش.. ضحكتك دي أصلها علاج مجاني. 😁 الضحكة طالعة سكر.",
    "مرايتك الحنينة بتقولك حطي مرطب إيد في شنطتك، النعومة هي السلاح السري اللي بيخلص أي حوار في ثانية. 👜 الأيدين الناعمة تكسب.",
    "مرايتك الحنينة بتقولك بلاش صبغات وتقاليع تقيلة ورا بعض، شعرك غالي عليكي ومش حمل تجارب وتدمير واستشوار علطول.. ارحميه. 💇‍♀️ دلالك فيه.",
    "مرايتك الحنينة بتقولك دلعي نفسك واعملي سكراب لطيف النهارده، الخلايا الميتة دي مكانها مش على وشك الرايق والناعم كأنك بيبي. 🍯 السحر الطبيعي.",
    "مرايتك الحنينة بتقولك شعرك محتاج حمام كريم وحبة حنية، فكي الضفيرة وسيبيه يتنفس شوية ويعبر عن طبيعته الكيرلي أو الناعمة. 💇‍♀️ الروقان طبعك.",
    "مرايتك الحنينة بتقولك الميك اب بيليق عليكي، بس من غيره إنتي قمر في السحاب.. خليكي واثقة في ملامحك الربانية الطبيعية. ☁️ الطبيعي يكسب.",
    "مرايتك الحنينة بتقولك بلاش توتر وقلق، الزعل بيعلي الكورتيزول وبيطلع حبوب في الوش ملهاش أي لازمة.. روقي يا مانجا وتألقي. 🥭 الصياعة في الرواقان.",
    "مرايتك الحنينة بتقولك لو مش لاقية نكد، بلاش تدوري عليه.. اعملي ماسك عسل وزبادي واقعدي برنسيسة في ملكوتك. 🥛 الروقان كله.",
    "مرايتك الحنينة بتقولك ريحتك الحلوة هي اللي بتفضل، اختاري بيرفيوم هادي أو عطور زيتية على أماكن النبض شبه شخصيتك الرايقة الفواحة. 🧴🔥",
    "مرايتك الحنينة بتقولك حواجبك سر رسمة وشك ومحتاجة تسريح وتنظيم، بلاش التهور بزيادة.. تفاصيلك الصغيرة دي هي اللي بتعمل الفرق. 🤨 النظرة تذبح.",
    "مرايتك الحنينة بتقولك قللي من الكافيين والقهوة والسكريات شوية، وخليكي في العصائر الفريش عشان وشك يورد ويبطل عصبية وضغط. 🍹 النعاشة تكسب.",
    "مرايتك الحنينة بتقولك اضحكي في وش الدنيا، ضحكتك دي بتعدل المزاج وبتصغر السن وبتخلي الكوكب كله ينور حواليكي. 🌟 الضحكة جنان.",
    "مرايتك الحنينة بتقولك بلاش فوطة خشنة لوشك كأنك بتعصري غسيل، استخدمي مناديل ورقية ناعمة بالطبطبة.. وشك مش مستحمل قسوة. 🧺😂",
    "مرايتك الحنينة بتقولك اغسلي فرش الميك اب بتاعتك بانتظام، بلاش الكسل ده عشان البكتيريا اللي عليها هي اللي بتطلع حبوب فجأة. 🖌️ الشطارة حلوة.",
    "مرايتك الحنينة بتقولك كلي فاكهة وخضار كتير النهارده، النضارة الحقيقية بتيجي من جوة لبرة.. الفيتامينات بتعمل سحر الميكب مش بيعرفه. 🍎 الخدود طبيعي.",
    "مرايتك الحنينة بتقولك حطي نقطة زيت لوز حلو تحت عينك بالليل, ودعي الهالات وخلي عيونك الغزلان دي تبرق وتضوي. ✨👀",
    "مرايتك الحنينة بتقولك بلاش مياه سخنة مولعة على وشك وشعرك، المياه الفاترة أو الساقعة هي سر الشباب الدايم والنعومة. 🛁 الحنية في المية.",
    "مرايتك الحنينة بتقولك ضوافر رجلك محتاجة عناية بردو، الباديكير وتدليك القدم بيحسس الواحدة إنها ملكة ماشية على بساط أحمر. 👣 الفخامة.",
    "مرايتك الحنينة بتقولك لو حسيتي بملل، غيري لفة طرحتك أو قصة شعرك.. التغيير بيبعت طاقة جديدة مبهجة في الروح. 💇‍♀️ طاقة جديدة.",
    "مرايتك الحنينة بتقولك رطبي كوعك وركبتك بانتظام، التفاصيل الصغيرة دي هي اللي بتفرق البنت الشيك الفاخرة عن الباقي. 🧴 شياكة بالملي.",
    "مرايتك الحنينة بتقولك البسي ألوان مبهجة النهارده، اللبس الفاتح بيعكس طاقة حلوة على وشك وبيديكي إشراقة كاملة. 👗 طاقة إيجابية.",
    "مرايتك الحنينة بتقولك بلاش مقارنات في السوشيال ميديا، الفلاتر مغطية البلاوي وإنتي نسخة واحدة ومفيش منك اتنين في الدنيا دي كلها. 📱❌ الاصلي يكسب.",
    "مرايتك الحنينة بتقولك حطي لوشن لجسمك بعد الشاور فوراً والجلد لسه مندي، خليكي دايماً زبدة وناعمة ومصحصحة وريحتك تهبل وراكي. 🧴 ناعمة.",
    "مرايتك الحنينة بتقولك بلاش تنامي زعلانة أو تفتحي ناموسية النكد بالليل، الدموع بتنفخ العين وبتبوظ ملامحك الصافية الرايقة. 🛌❌ بلاش نكد.",
    "مرايتك الحنينة بتقولك خدي نفس عميق واسترخي، الهدوء النفسي والراحة بيعكسوا نضارة على وشك أحسن من ميت كريم غالي. 🧘‍♀️ النقاء الداخلي.",
    "مرايتك الحنينة بتقولك إنتي تستاهلي كل حاجة حلوة في الدنيا، ما تقبليش بأقل من اللي يفرح قلبك ويدلع دلالك يا ست البنات. 🩷 الدلال كله ليكي.",
    "مرايتك الحنينة بتقولك اغسلي وشك بمية ساقعة الصبح عشان تفوقي، مش ناقصين تهور وعصبية من أول اليوم.. إحنا عايزين روقان وهدوء. ❄️😂",
    "مرايتك الحنينة بتقولك اعملي مساج خفيف لوشك وإنتي بتحطي السيروم، حركي الدورة الدموية وخلّي الوش يشع طاقة وحيوية ونضارة. 💆‍♀️ الوهج المعتاد.",
    "مرايتك الحنينة بتقولك رطبي رقبتك وإنتي بترطبي وشك، بلاش الإهمال ده عشان الرقبة هي السند اللي شايل الراس القمر دي. 🦒 متناسقة وجميلة.",
    "مرايتك الحنينة بتقولك غيري كيس المخدة كل كام يوم، البكتيريا بتموت في كيس المخدة وبتطلع حبوب مالهاش لزمة في الوش الرايق ده. 🛏️ نظافة على الفرازة.",
    "مرايتك الحنينة بتقولك كلي مكسرات (لوز أو عين جمل) لأن فيها أوميجا 3 بتخلي البشرة ناعمة وطرية زي بشرة بيبي صغير. 🥜 الذكاء والحلاوة.",
    "مرايتك الحنينة بتقولك خدي لفة مساج لبطن إيدك وصوابعك، إيديكي دي بتعمل عظمة طول اليوم وتستاهل الدلال والعناية الرايقة. 🤲 الروقان كله.",
    "مرايتك الحنينة بتقولك بلاش تحطي برفيوم مباشر على جلد الرقبة عشان ما يسمرش، حطي ورا ودنك وعلى الهدوم وعيشي الانتعاش والثبات. 🧴 السحر سحرك.",
    "مرايتك الحنينة بتقولك كلي زبادي بالليل، هيريح معدتك وهيخلي بشرتك تصحى رايقة ومكتفية من الترطيب الطبيعي والصحة. 🥛 الصحة أولاً.",
    "مرايتك الحنينة بتقولك كفاية تفكير في اللي فات، اللي فات مات وإنتي لسه قمر ومستقبلك منور زي عيونك اللي تدوب بلد. 🌟 بلاش نكد وخليكي فوق.",
    "مرايتك الحنينة بتقولك العبي رياضة أو حركي جسمك 10 دقائق، الزومبا أو المشي بيفرز هرمونات السعادة وبتطلع على وشك ضحكة جنان وحيوية. 💃 النشاط.",
    "مرايتك الحنينة بتقولك لو وشك باهت، ماسك عسل وزبادي لمدة ربع ساعة كفيل يرجعلك الوهج واللمعة والجمال المعتاد اللي بيخطف العين. 🍯 سحر طبيعي.",
    "مرايتك الحنينة بتقولك بلاش تحكي مشاكلك لكل من هب ودب، الروقان في الكتمان وبيخليكي غامضة وساحرة في عيون الكل. 🤫 الغموض شياكة برستيجك.",
    "مرايتك الحنينة بتقولك البسي اللبس اللي يريحك ويبسطك، ثقتك في نفسك وإنتي مرتاحة هي أقوى ميكب ممكن تحطيه في حياتك وبتعكس طاقتك. 👗 الثقة عنوانك.",
    "مرايتك الحنينة بتقولك بلاش المقشر الفيزيائي اللي فيه حبيبات خشنة لوشك، إنتي بتعملي سنفرة لحيطة؟ استخدمي حاجة ناعمة زيك ولطيفة. 🧽😂"
];

// دالة ذكية لاختيار نصيحة عشوائية وعرضها في البنر
function showDailyAdvice() {
    const adviceElement = document.getElementById("daily-advice");
    if (adviceElement) {
        const randomIndex = Math.floor(Math.random() * mirrorAdvices.length);
        adviceElement.textContent = mirrorAdvices[randomIndex];
    }
}

// مصفوفة مهام تحدي الـ 21 يوم الحنين 
const challengeDays = [
    { day: 1, week: 1, task: "اشربي 8 كوبايات مياه النهارده ورطبي وشك قبل النوم 💧", cheer: "بداية الألف ميل بتبدأ بخطوة، ومرايتك شيفاكي منورة من أول يوم! 💖" },
    { day: 2, week: 1, task: "مساج خفيف للوش لمدة دقيقتين مع السيروم أو المرطب 💆‍♀️", cheer: "الدورة الدموية بتصحي ووشك بيقولك شكراً على الحنية دي! 🥰" },
    { day: 3, week: 1, task: "يوم بدون ميكب نهائي.. سيبي بشرتك تتنفس من الهوا ☁️", cheer: "الملامح الربانية مفيش أحلى منها، الطبيعي دايماً يكسب يا قمر! 🌸" },
    { day: 4, week: 1, task: "اعملي سكراب شفايف (سكر وزيت زيتون) ورطبيها 💋", cheer: "الشفايف السكر دي بقت ناعمة وموردة شبه قلبك الأبيض! ✨" },
    { day: 5, week: 1, task: "قصي أطراف شعرك المتقصفة عشان يجدد طاقته ✂️", cheer: "التخلص من الأطراف الزعلانه بيفتح صفحة جديدة مليانة حيويه! 💇‍♀️" },
    { day: 6, week: 1, task: "ماسك طبيعي سريع (عسل وزبادي) لتغذية البشرة 🍯", cheer: "غسيل ذنوب لبشرتك.. النضارة والترطيب في العالي النهارده! 🥛" },
    { day: 7, week: 1, task: "اغسلي فرش الميكب والبيوتي بلندر بتاعتك كلها 🖌️", cheer: "برافو عليكي! قفلنا أول أسبوع بنظافة روقان وحماية لوشك القمر! 🎉" },
    
    { day: 8, week: 2, task: "نامي بدري وسيبى الموبايل قبل النوم بنص ساعة 🛌", cheer: "الهالات السودا برة حياتنا خلاص.. النوم ده هو سر الجمال الأصلي! 👁️" },
    { day: 9, week: 2, task: "رطبي رقبتك وإيديكي وكوعك بانتظام النهارده 🦒", cheer: "التفاصيل الصغيرة دي هي اللي بتعمل البنت الشيك الفاخرة! 🧴" },
    { day: 10, week: 2, task: "حطي صن بلوك حتى لو قاعدة قدام شاشه ☀️", cheer: "حماية كاملة من الشمس والشاشات.. بشرتك متأمنة وجاهزة تتألق! 🛡️" },
    { day: 11, week: 2, task: "اعملي حمام كريم أو ماسك مرطب لشعرك وسيبيه يرتاح 💇‍♀️", cheer: "خيوط الحرير دي محتاجة دلال، وشعرك النهارده رايق ومبسوط! ✨" },
    { day: 12, week: 2, task: "اشربي كوب شاي أخضر أو عصير فريش وبلاش كافيين 🍵", cheer: "مضادات أكسدة وصحة من جوة لبرة.. الخدود بدأت تورد طبيعي! 🍹" },
    { day: 13, week: 2, task: "غيري كيس المخدة بتاعك عشان تحمي وشك من البكتيريا 🛏️", cheer: "سر صغير بس مفعوله سحر، نوم العوافي على النظافة والفرازة! 🌟" },
    { day: 14, week: 2, task: "يوم الخضار والفاكهة.. كلي أكل صحي يورد خدودك 🍎", cheer: "الأسبوع التاني خلص وإنتي بقيتي أستاذة في الدلال والعناية! 🏆" },
    
    { day: 15, week: 3, task: "امسحي وشك بمياه ورد ساقعة الصبح عشان الانتعاش 🌸", cheer: "يا سيدي على الانتعاش والورد الطاير في الجو.. طاقة قمر! ❄️" },
    { day: 16, week: 3, task: "ممنوع تلمسي أي حباية تطلع في وشك النهارده نهائي ❌", cheer: "قوة إرادة حديدية! الحباية هتمشي لوحدها من غير ما تسيب أثر! 🧪" },
    { day: 17, week: 3, task: "اعملي باديكير خفيف ورطبي رجلك بالفازلين 👣", cheer: "ملكة ماشية على بساط أحمر.. الدلال واصل من ساسك لراسك! 👑" },
    { day: 18, week: 3, task: "حطي نقطة زيت لوز حلو تحت العين عشان الهالات 👀", cheer: "عيون الغزلان دي لازم تبرق وتضوي وتخطف قلوب الكل! ✨" },
    { day: 19, week: 3, task: "اتحركي أو ارقصي زومبا 10 دقائق لتبديل طاقة الجسم 💃", cheer: "هرمونات السعادة في العالي، والضحكة طالعة سكر ومنورة الوش! 😁" },
    { day: 20, week: 3, task: "استخدمي مناديل ورقية بالطبطبة وبلاش الفوطة الخشنة 🧺", cheer: "الحنية في كل حاجة.. وشك يستاهل أنعم معاملة في الدنيا! 🧽" },
    { day: 21, week: 3, task: "بصي في المراية وقولي لنفسك: أنا جميلة وأستاهل الدلال 👑", cheer: "مبروووك! كملتي الـ 21 يوم! مرايتك الحنينة بتقولك إنتي بقيتي ملكة النضارة والروقان الرسمية! 💖🎉👑" }
];

let allOffers = []; // مصفوفة العروض العامة
let currentSelectedWeek = 1;

// الإمساك بعناصر النافذة الخاصة بالـ Modal التفصيلي
let offerModal, closeModalBtn, modalTitle, modalArea, modalSpecialty, modalDetails, modalOldPrice, modalNewPrice, modalWhatsappBtn, modalShareBtn;

document.addEventListener('DOMContentLoaded', () => {
    // ربط فلاتر وعناصر الصفحة الرئيسي
    const areaFilter = document.getElementById('area-filter');
    const specialtyFilter = document.getElementById('specialty-filter');
    const searchInput = document.getElementById('search-input');
    const noResultsMsg = document.getElementById('no-results');
    const offersContainer = document.querySelector('.offers-container');

    // ربط عناصر الـ Modal التفصيلي
    offerModal = document.getElementById('offerModal');
    closeModalBtn = document.getElementById('closeModalBtn');
    modalTitle = document.getElementById('modalTitle');
    modalArea = document.getElementById('modalArea');
    modalSpecialty = document.getElementById('modalSpecialty');
    modalDetails = document.getElementById('modalDetails');
    modalOldPrice = document.getElementById('modalOldPrice');
    modalNewPrice = document.getElementById('modalNewPrice');
    modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
    modalShareBtn = document.getElementById('modalShareBtn');

    // تشغيل الدالة تلقائياً أول ما الصفحة تفتح
    showDailyAdvice();
    initWeekTabs();
    renderChallengeDays();
    checkAzoma();

    // تشغيل كود إظهار/إخفاء التحدي
    const toggleBtn = document.getElementById("toggle-challenge-btn");
    const challengeSec = document.getElementById("challenge-section");
    if (toggleBtn && challengeSec) {
        toggleBtn.addEventListener("click", () => {
            challengeSec.classList.toggle("hidden");
            if (challengeSec.classList.contains("hidden")) {
                toggleBtn.textContent = " ✨ يلا ابدأي تحدي ال21 يوم للنضاره وانتي الكسبانه ✨";
            } else {
                toggleBtn.textContent = "❌ إغلاق التحدي";
            }
        });
    }

    // كود الجوجل شيت واللينك السحري
    const sheetId = '1o7iVY8Nx7O3RzRxOAkUXNKXai3uNkMvVuiFSpLVK15c';
    const jsonUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    // 1. دالة لجلب البيانات من جوجل شيت
    async function fetchOffersFromSheet() {
        if (offersContainer) {
            offersContainer.innerHTML = `
                <div class="loader-container">
                    <div class="brand-pulse">
                        <span>مرايتك الحنينة</span>
                        <span class="mirror-moving">🪞</span>
                        <span class="stars-moving">✨</span>
                    </div>
                </div>
            `;
        }

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
                dateAdded: r.c[8]?.f || r.c[8]?.v || '',
                dateExpiry: r.c[9]?.f || r.c[9]?.v || '2100-12-31',
                pageLink: r.c[10]?.v || '#',
                whatsappNumber: r.c[11]?.v || '201000000000'
            })).filter(offer => offer.title !== '');

            displayOffers(allOffers);
            
        } catch (error) {
            console.error("حصلت مشكلة في تحميل البيانات:", error);
            if (offersContainer) {
                offersContainer.innerHTML = `<p style="text-align:center; color:#ff4d6d; padding:20px; font-weight:bold;">نواجه ضغطاً حالياً، لكن كله يهون عشانك ياقمر. 💖</p>`;
            }
        }
    }

    // 2. دالة رسم الكروت وفلترتها
    function displayOffers(offersList) {
        if (!offersContainer) return;
        offersContainer.innerHTML = ''; 
        const selectedArea = areaFilter ? areaFilter.value : 'all';
        const selectedSpecialty = specialtyFilter ? specialtyFilter.value : 'all';
        const searchText = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCardsCount = 0;

        offersList.forEach((offer, index) => {
            const matchesArea = (selectedArea === 'all' || offer.area === selectedArea);
            const matchesSpecialty = (
                selectedSpecialty === 'all' || 
                offer.specialty === selectedSpecialty ||
                (selectedSpecialty === 'beauty' && ['ليزر إزالة الشعر', 'العناية بالبشرة والوجه', 'حقن تجميلي (فيلر، بوتوكس)', 'تخسيس ونحت القوام'].includes(offer.specialty)) ||
                (selectedSpecialty === 'teeth' && ['تنظيف وتبييض الأسنان', 'تقويم الأسنان', 'حشو وعلاج الجذور', 'زراعة وتركيبات الأسنان'].includes(offer.specialty))
            );
            const matchesSearch = offer.title.toLowerCase().includes(searchText) || 
                                  offer.details.toLowerCase().includes(searchText);

            if (matchesArea && matchesSpecialty && matchesSearch) {
                let specialtyClass = '';
                const beautySpecialties = ['ليزر إزالة الشعر', 'العناية بالبشرة والوجه', 'حقن تجميلي (فيلر، بوتوكس)', 'تخسيس ونحت القوام'];
                const teethSpecialties = ['تنظيف وتبييض الأسنان', 'تقويم الأسنان', 'حشو وعلاج الجذور', 'زراعة وتركيبات الأسنان'];

                if (beautySpecialties.includes(offer.specialty)) {
                    specialtyClass = 'beauty-tag';
                } else if (teethSpecialties.includes(offer.specialty)) {
                    specialtyClass = 'teeth-tag';
                }

                let displayDate = "";
                let statusLampHtml = "";
                const currentCheckDate = new Date();

                let cleanExpiryStr = offer.dateExpiry || "";
                if (cleanExpiryStr.includes("Date")) {
                    const matches = cleanExpiryStr.match(/\d+/g);
                    if (matches && matches.length >= 3) {
                        cleanExpiryStr = `${matches[0]}-${matches[1]}-${matches[2]}`;
                    }
                }

                if (offer.dateExpiry && (offer.dateExpiry.includes("2100") || offer.dateExpiry.includes("2100-12-31"))) {
                    displayDate = "العرض متاح ليكي ياقمر ولفتره محدوده 🎁";
                    statusLampHtml = `<span class="status-lamp lamp-available"></span>`;
                } else {
                    let isExpired = false;
                    if (offer.dateExpiry) {
                        let checkExpiry;
                        if (offer.dateExpiry.includes("Date")) {
                            const matches = offer.dateExpiry.match(/\d+/g);
                            checkExpiry = new Date(matches[0], matches[1] - 1, matches[2]);
                        } else {
                            const parts = offer.dateExpiry.split('/');
                            checkExpiry = new Date(parts[2], parts[1] - 1, parts[0]);
                        }
                        if (checkExpiry && checkExpiry.setHours(0,0,0,0) < currentCheckDate.setHours(0,0,0,0)) {
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
      const savedFavs = JSON.parse(localStorage.getItem('favOffers') || '[]');
const isFav = savedFavs.includes(offer.title);
const favHeart = isFav ? '🩷' : '💖'; // هنا بنحدد شكل القلب الصح
                const cardHtml = `
                <div class="card" data-area="${offer.area}" data-specialty="${offer.specialty}" onclick="openOfferModal(event, ${index})">
                    <span class="badge ${specialtyClass}">${offer.specialty}</span>
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
                        <a href="https://wa.me/${offer.whatsappNumber || '201000000000'}?text=${encodeURIComponent('ازيك يا قمر، أنا شُوفت عرض [ ' + (offer.title || '') + ' ] على موقع \"مرايتك الحنينة\" وجايلكم عشان أحجزه، لسه متاح؟ 💖\n\nعشان بحب أهتم بنفسي وأحجز العرض الحنين وأدلع نفسي معاكم 💞\n\n🎁 العرض: ' + (offer.title || '') + '\n📍 المكان: ' + (offer.areaText || '') + '\n💰 السعر الحنين: ' + (offer.newPrice || '') + '\n\nفي انتظار تأكيد الحجز يا جميلتي عشان أنوركم وشكراً 🌺')}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #25d366; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">💬 احجزي واتساب</a>

                        <a href="${offer.pageLink || '#'}" target="_blank" style="flex: 1; text-align: center; text-decoration: none; background: #FFA4B6; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold;">🌐 زيارة الصفحة</a>
                        <button class="share-btn" onclick="shareAzoma('${offer.title}')" style="flex: 1; text-align: center; background: #ff4d6d; color: white; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: bold; border: none; cursor: pointer;">📢 عزومة الحنين</button>
<button class="fav-btn" onclick="toggleFav(this, '${offer.title}')" style="background:none; border:none; font-size:18px; cursor:pointer;">${favHeart}</button>
                    </div>
                </div>`;
                offersContainer.insertAdjacentHTML('beforeend', cardHtml);
            }
        });

        if (noResultsMsg) {
            noResultsMsg.style.display = (visibleCardsCount === 0) ? 'block' : 'none';
        }
    }

    // تأمين ربط الأحداث للفلاتر والبحث
    if (areaFilter) areaFilter.addEventListener('change', () => displayOffers(allOffers));
    if (specialtyFilter) specialtyFilter.addEventListener('change', () => displayOffers(allOffers));
    if (searchInput) searchInput.addEventListener('input', () => displayOffers(allOffers));
    const filterFavBtn = document.getElementById('filter-fav-btn');
    if (filterFavBtn) {
        filterFavBtn.addEventListener('click', filterFavorites);
    }
    const viewAllBtn = document.getElementById('clearFiltersBtn'); 
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        // 1. إعادة تعيين قيم الفلاتر لوضعها الافتراضي
        if (areaFilter) areaFilter.value = 'all';
        if (specialtyFilter) specialtyFilter.value = 'all';
        if (searchInput) searchInput.value = '';
        
        // 2. إعادة رسم كل العروض بالكامل
        displayOffers(allOffers);
        
        // 3. رسالة حنينة تأكيدية
        showToast("رجعنالك كل العروض نورتي مرايتك الحنينة  ياقمر✨");
    });
}
    // تشغيل جلب البيانات
    fetchOffersFromSheet();

    // الجزء الخاص بمودال إضافة عرض جديد للجوجل شيت
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-yUrvvxGZyTzGOLDabbYRFyYU1isYes-DSdcsHZBdYZb9R-rptoDSAQ31QL8hb0xd5Q/exec";
    const openModalBtn = document.getElementById('open-add-modal');
    const closeModalBtnNew = document.getElementById('close-modal');
    const isPermanentCheck = document.getElementById('is-permanent');
    const submitOfferBtn = document.getElementById('submit-offer');

    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            const modal = document.getElementById('add-offer-modal');
            if (modal) modal.style.display = 'flex';
        });
    }

    if (closeModalBtnNew) {
        closeModalBtnNew.addEventListener('click', () => {
            const modal = document.getElementById('add-offer-modal');
            if (modal) modal.style.display = 'none';
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
            const title = document.getElementById('new-title')?.value.trim() || '';
            const area = document.getElementById('new-area')?.value || '';
            const areaSelect = document.getElementById('new-area');
            const areaText = areaSelect ? areaSelect.options[areaSelect.selectedIndex].text : '';
            const specialty = document.getElementById('new-specialty')?.value || '';
            const specialtySelect = document.getElementById('new-specialty');
            const specialtyText = specialtySelect ? specialtySelect.options[specialtySelect.selectedIndex].text : '';
            const details = document.getElementById('new-details')?.value.trim() || '';
            const oldPrice = document.getElementById('new-oldPrice')?.value || 0;
            const newPrice = document.getElementById('new-newPrice')?.value || 0;
            const pageLink = document.getElementById('new-pageLink')?.value.trim() || '#';
            const whatsapp = document.getElementById('new-whatsapp')?.value.trim() || '';

            const dateAdded = new Date().toISOString().split('T')[0];
            const dateExpiry = isPermanentCheck && isPermanentCheck.checked ? '2100-12-31' : (document.getElementById('new-expiry')?.value || '2100-12-31');

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

                showToast("تمت إضافة العرض بنجاح ونور في الموقع 🎉");
                setTimeout(() => {
                    location.reload();
                }, 3000);

            } catch (error) {
                console.error("خطأ أثناء الإضافة:", error);
                showToast("حصلت مشكلة أثناء إرسال البيانات! ❌");
                submitOfferBtn.innerText = "حفظ العرض";
                submitOfferBtn.disabled = false;
            }
        });
    }

    // غلق المودال التفصيلي بالأزرار والخلفية
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeOfferModal);
    }
    if (offerModal) {
        offerModal.addEventListener('click', function(e) {
            if (e.target === offerModal) {
                closeOfferModal();
            }
        });
    }

    // إعدادات سحب النافذة للموبايل (Drag to Close)
    const modalContent = document.querySelector('.modal-content');
    let touchStartY = 0;
    let touchCurrentY = 0;

    if (modalContent) {
        modalContent.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        modalContent.addEventListener('touchmove', function(e) {
            touchCurrentY = e.touches[0].clientY;
            const deltaY = touchCurrentY - touchStartY;
            if (deltaY > 0 && modalContent.scrollTop === 0) {
                modalContent.style.transform = `translateY(${deltaY}px)`;
                modalContent.style.transition = 'none';
            }
        }, { passive: true });

        modalContent.addEventListener('touchend', function(e) {
            const deltaY = touchCurrentY - touchStartY;
            if (deltaY > 100 && modalContent.scrollTop === 0) {
                modalContent.style.transform = '';
                modalContent.style.transition = '';
                closeOfferModal();
            } else {
                modalContent.style.transform = '';
                modalContent.style.transition = 'transform 0.3s ease';
            }
            touchStartY = 0;
            touchCurrentY = 0;
        });
    }
});

// كود تشغيل الوضع الليلي وحفظ الاختيار 🌙
const darkModeToggle = document.getElementById('darkModeToggle');
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

// دالة سحرية لإظهار رسالة شيك
function showToast(message) {
    let toast = document.getElementById('toast-msg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-msg';
        toast.className = 'custom-toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// دالة حفظ المفضلة
function toggleFav(button, offerTitle) {
    let savedFavs = JSON.parse(localStorage.getItem('favOffers') || '[]');
    
    if (button.innerText.trim() === '💖') {
        // تحويل للقلب المليان وإضافة للـ localStorage
        button.innerText = '🩷';
        if (!savedFavs.includes(offerTitle)) {
            savedFavs.push(offerTitle);
        }
        localStorage.setItem('favOffers', JSON.stringify(savedFavs));
        showToast("العرض دخل القلب جوة.. متقلقيش مش هيضيع 😉🩷");
    } else {
        // تحويل للقلب الفاضي وحذف من الـ localStorage
        button.innerText = '💖';
        savedFavs = savedFavs.filter(title => title !== offerTitle);
        localStorage.setItem('favOffers', JSON.stringify(savedFavs));
        showToast("للأسف العرض خرج من جوة القلب 🥺💖");
    }
}
// دالة فلترة المفضلة
function filterFavorites() {
    const cards = document.querySelectorAll('.card');
    let hasFav = false;
    cards.forEach(card => {
        const favBtn = card.querySelector('.fav-btn');
        if (favBtn && favBtn.innerText === "🩷") {
            card.style.display = "block";
            hasFav = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!hasFav) {
        showToast("قلبك لسه فاضي يا قمر.. مفيش عروض هنا لسه! 🩷");
        cards.forEach(card => card.style.display = "block");
    }
}

// دالة فتح النافذة وتعبئة بيانات الـ Modal التفصيلي
function openOfferModal(event, index) {
    if (event && (event.target.closest('button') || event.target.closest('a') || event.target.classList.contains('heart-icon'))) {
        return;
    }
    const cards = document.querySelectorAll('.card');
    const selectedCard = cards[index];
    if (!selectedCard || !offerModal) return;

    const title = selectedCard.querySelector('h3')?.textContent || '';
    const areaText = selectedCard.querySelector('.location')?.textContent || '';
    const specialtyText = selectedCard.querySelector('.badge')?.textContent || '';
    const oldPrice = selectedCard.querySelector('.old-price')?.textContent || '';
    const newPrice = selectedCard.querySelector('.new-price')?.textContent || '';
    const details = selectedCard.querySelector('.offer-details')?.textContent || '';

    modalTitle.textContent = title;
    modalArea.textContent = areaText;
    modalSpecialty.textContent = specialtyText;
    modalDetails.textContent = details;
    modalOldPrice.textContent = oldPrice.replace('ج', '').trim();
    modalNewPrice.textContent = newPrice.replace('فقط', '').trim();

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'صباح الخير والورد 🌸' : 'مساء الخير والجمال ✨';

        const whatsappText = encodeURIComponent(
            `${greeting}\n\n` +
            `أنا شُوفت عرض [ ${title} ] على موقع "مرايتك الحنينة" وجايلكم عشان أحجزه، لسه متاح؟ 💖\n\n` +
            `عشان بحب أهتم بنفسي وأحجز العرض الحنين وأدلع نفسي معاكم 💞\n\n` +
            `🎁 العرض: ${title}\n` +
            `📍 المكان: ${areaText}\n` +
            `💰 السعر الحنين: ${newPrice}\n\n` +
            `في انتظار تأكيد الحجز يا جميلتي عشان أنوركم وشكراً 🌺`
        );

    // سحب رقم الواتساب الافتراضي أو المخصص من المصفوفة العامة لو متاح
    const currentOfferObj = allOffers[index];
    const targetWhatsapp = currentOfferObj ? currentOfferObj.whatsappNumber : '201000000000';
    modalWhatsappBtn.href = `https://wa.me/${targetWhatsapp}?text=${whatsappText}`;

    modalShareBtn.onclick = function() {
        const shareText = `بصي العرض الحنين ده من موقع مرايتك الحنينة.. خطف قلبي! ✨\n\n` +
            `🎁 ${title}\n` +
            `💰 بسعر: ${newPrice}!\n\n` +
            `تعالي نشوف تفاصيل الدلع هنا 👇\n` +
            `🔗 ${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: shareText,
                url: window.location.href
            }).catch(err => console.log('تم إلغاء المشاركة'));
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('✨ تم نسخ رابط الدلع بنجاح! يلا شاركيه مع أحبابك الحنينين 💖');
            }).catch(() => {
                alert('عذراً، لم نتمكن من النسخ التلقائي.');
            });
        }
    };

    offerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOfferModal() {
    if (offerModal) {
        offerModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// دالة بناء وعرض الأيام للتحدي
function renderChallengeDays() {
    const daysList = document.getElementById("days-list");
    if (!daysList) return;

    let completedDays = JSON.parse(localStorage.getItem("mirrorChallenge")) || [];
    daysList.innerHTML = ""; 

    const filteredDays = challengeDays.filter(item => item.week === currentSelectedWeek);

    filteredDays.forEach(item => {
        const isCompleted = completedDays.includes(item.day);
        const card = document.createElement("div");
        card.className = `day-list-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="day-info">
                <div class="day-title-text">اليوم ${item.day}</div>
                <div class="day-body-task">${item.task}</div>
            </div>
            <button class="action-day-btn">${isCompleted ? 'مكتمل ✅' : 'تمت المهمة ✨'}</button>
        `;

        const btn = card.querySelector(".action-day-btn");
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (completedDays.includes(item.day)) {
                completedDays = completedDays.filter(d => d !== item.day);
                card.classList.remove("completed");
                btn.textContent = "تمت المهمة ✨";
            } else {
                completedDays.push(item.day);
                card.classList.add("completed");
                btn.textContent = "مكتمل ✅";
                triggerScreenEffects();
                openCelebrationModal(item.day, item.cheer);
            }
            localStorage.setItem("mirrorChallenge", JSON.stringify(completedDays));
            updateProgressBar(completedDays.length);
        });
        daysList.appendChild(card);
    });
    updateProgressBar(completedDays.length);
}

function updateProgressBar(count) {
    const progressBar = document.getElementById("challenge-progress");
    const countElement = document.getElementById("completed-days-count");
    if (countElement) countElement.textContent = count;
    if (progressBar) {
        const percentage = Math.round((count / 21) * 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }
}

function triggerScreenEffects() {
    const container = document.getElementById("effects-container");
    if (!container) return;
    const effects = ["❤️", "💖", "🚀", "✨", "🌸", "👑"];
    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const el = document.createElement("div");
            el.className = "floating-effect";
            el.textContent = effects[Math.floor(Math.random() * effects.length)];
            el.style.left = Math.random() * 100 + "vw";
            el.style.setProperty('--random-x', (Math.random() * 200 - 100) + "px");
            el.style.animationDuration = (Math.random() * 1.5 + 2) + "s";
            container.appendChild(el);
            setTimeout(() => el.remove(), 3500);
        }, i * 60);
    }
}

function openCelebrationModal(dayNumber, cheerMessage) {
    const modal = document.getElementById("celebration-modal");
    const title = document.getElementById("modal-title");
    const msg = document.getElementById("modal-message");
    if (modal && title && msg) {
        title.textContent = `عاش يا ملكة النضارة! 🎉 (اليوم ${dayNumber})`;
        msg.textContent = cheerMessage;
        modal.classList.add("open");
    }
}

function closeCelebrationModal() {
    const modal = document.getElementById("celebration-modal");
    if (modal) modal.classList.remove("open");
}

function initWeekTabs() {
    const tabs = document.querySelectorAll(".week-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentSelectedWeek = parseInt(tab.getAttribute("data-week"));
            renderChallengeDays();
        });
    });
}

// 1. دالة توليد رابط العزومة
function shareAzoma(offerTitle) {
    const senderName = prompt("اكتبي اسمك عشان العزومة تتبعت باسمك: ✨");
    if (!senderName) {
        alert("لازم تكتبي اسمك عشان الهدية تطلع مظبوطة!");
        return;
    }
    const currentUrl = window.location.origin + window.location.pathname;
    const azomaUrl = `${currentUrl}?from=${encodeURIComponent(senderName)}&offer=${encodeURIComponent(offerTitle)}`;
    const whatsappText = `✨ مفاجأة حنينة لقلبك.. جالك كارت عزومة هدية من [ ${senderName} ] مخصوص عشانك! 💖\n\n🎁 العرض: ${offerTitle}\n\nافتحي الرابط ده وشوفي تفاصيل دلعك ودلالك اللي تستحقيه 👇\n🔗 ${azomaUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`, '_blank');
}

// 2. دالة فحص العزومة
function checkAzoma() {
    const urlParams = new URLSearchParams(window.location.search);
    const senderName = urlParams.get('from');
    const offerTitle = urlParams.get('offer');

    if (senderName && offerTitle) {
        const duration = 4 * 1000;
        const end = Date.now() + duration;
        if (typeof confetti === "function") {
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
                if (Date.now() < end) { requestAnimationFrame(frame); }
            }());
        }
        setTimeout(() => {
            alert(`🎉 مفاجأة حنينة من ${decodeURIComponent(senderName)}!\n\nلقد أرسلت لكي عزومة هدية على عرض الحقي واحجزي:\n🎁 [ ${decodeURIComponent(offerTitle)} ] ✨`);
        }, 500);
    }
}
