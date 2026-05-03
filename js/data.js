const DATA = {
  ta: [
    {ico:"🤲",q:"Nima uchun qo'llarni yuvish kerak?",opts:[{ico:"🦠",txt:"Kasallik tarqalmaydi",ok:true},{ico:"😋",txt:"Ovqat mazali bo'ladi",ok:false},{ico:"💧",txt:"Qo'l toza bo'ladi",ok:true},{ico:"🎮",txt:"Ko'proq o'ynash mumkin",ok:false}]},
    {ico:"🍳",q:"Nega ertalab nonushta qilish muhim?",opts:[{ico:"💪",txt:"Kuch-quvvat beradi",ok:true},{ico:"😴",txt:"Uyqu keladi",ok:false},{ico:"🧠",txt:"Miya yaxshi ishlaydi",ok:true},{ico:"📺",txt:"TV ko'rish kerak emas",ok:false}]},
    {ico:"👴",q:"Nima uchun kattalarni hurmat qilish kerak?",opts:[{ico:"❤️",txt:"Ular bizni sevadi",ok:true},{ico:"🍭",txt:"Shakar olish uchun",ok:false},{ico:"📚",txt:"Ko'p tajriba bor",ok:true},{ico:"😴",txt:"Ular ko'p uxlaydi",ok:false}]},
    {ico:"🤝",q:"Do'stlarga yordam berish nega yaxshi?",opts:[{ico:"😊",txt:"Do'st xursand bo'ladi",ok:true},{ico:"🎁",txt:"Sovg'a olish uchun",ok:false},{ico:"🤗",txt:"Do'stlik kuchayadi",ok:true},{ico:"🏃",txt:"Tez yugurish uchun",ok:false}]},
    {ico:"🌿",q:"Nega tabiatni asrash zarur?",opts:[{ico:"🌱",txt:"O'simliklar o'sadi",ok:true},{ico:"🎪",txt:"Bayram bo'ladi",ok:false},{ico:"🐦",txt:"Hayvonlar yashaydi",ok:true},{ico:"💻",txt:"Internet tez ishlaydi",ok:false}]},
    {ico:"📚",q:"Nima uchun kitob o'qish foydali?",opts:[{ico:"🧠",txt:"Bilim ortadi",ok:true},{ico:"😴",txt:"Uyquga yordam beradi",ok:false},{ico:"💬",txt:"Ko'p so'z bilamiz",ok:true},{ico:"🍕",txt:"Ovqat mazali bo'ladi",ok:false}]}
  ],
  tn: [
    {ico:"😢",q:"Do'stingiz yig'layapti. Nima qilasiz?",opts:[{ico:"🤗",txt:"Yoniga boring",ok:true},{ico:"🎮",txt:"O'ynashda davom eting",ok:false},{ico:"👩‍🏫",txt:"O'qituvchi chaqiring",ok:true},{ico:"🏃",txt:"Qoching",ok:false}]},
    {ico:"🧸",q:"Do'stingiz o'yinchoqni so'radi. Nima qilasiz?",opts:[{ico:"✅",txt:"Berasiz",ok:true},{ico:"❌",txt:"Bermaysiz",ok:false},{ico:"⏰",txt:"Navbat bilan o'ynaysiz",ok:true},{ico:"😤",txt:"Janjal chiqarasiz",ok:false}]},
    {ico:"⏳",q:"Boshqa bola navbatga siqib kirdi. Nima qilasiz?",opts:[{ico:"😌",txt:"Sabr bilan kutasiz",ok:true},{ico:"👊",txt:"Urasiz",ok:false},{ico:"🗣️",txt:"Muloyim aytasiz",ok:true},{ico:"😭",txt:"Yig'lab yuborasiz",ok:false}]},
    {ico:"🤕",q:"Do'sting yiqildi. Nima qilasiz?",opts:[{ico:"😂",txt:"Kulasiz",ok:false},{ico:"🏃",txt:"Yordamga yugurasiz",ok:true},{ico:"📢",txt:"Boshqalarni chaqirasiz",ok:true},{ico:"🙈",txt:"Ko'rmagan bo'lasiz",ok:false}]},
    {ico:"🤥",q:"Do'sting yolg'on gapiryapti. Nima qilasiz?",opts:[{ico:"🤫",txt:"Siz ham yolg'on",ok:false},{ico:"✅",txt:"Rost gapiring",ok:true},{ico:"💬",txt:"Do'stga aytasiz",ok:true},{ico:"😶",txt:"Jim turasiz",ok:false}]},
    {ico:"🔍",q:"Daftaringiz yo'q, dars boshlanyapti!",opts:[{ico:"😭",txt:"Yig'lab yuborasiz",ok:false},{ico:"👩‍🏫",txt:"O'qituvchiga aytasiz",ok:true},{ico:"🙏",txt:"Do'stdan qarz so'raysiz",ok:true},{ico:"🤔",txt:"Tinch qidirasiz",ok:true}]}
  ],
  bh: [
    {ico:"📚",q:"Kitobmi yoki multfilmmi yaxshi?",sides:[{ico:"📖",txt:"Kitob yaxshiroq",col:"tc-a"},{ico:"📺",txt:"Multfilm yaxshiroq",col:"tc-b"}],reasons:["Ko'p bilamiz","Qiziqarli","Foydali","Fikr o'stiradi","Kulgili"],rcolor:["cblue","cblue","cblue","cblue","cblue"]},
    {ico:"🐶",q:"Uy hayvoni boqish kerakmi?",sides:[{ico:"✅",txt:"Ha, kerak!",col:"tc-a"},{ico:"❌",txt:"Kerak emas",col:"tc-b"}],reasons:["Do'st bo'ladi","Mehribon bo'lamiz","Qiyin bo'ladi","Vaqt ketadi","Sog'lom bo'lamiz"],rcolor:["cgreen","cgreen","cred","cred","cgreen"]},
    {ico:"🍭",q:"Shirinlik ko'p yeyish yaxshimi?",sides:[{ico:"😋",txt:"Ba'zida yeysa bo'ladi",col:"tc-a"},{ico:"🚫",txt:"Yo'q, zararli",col:"tc-b"}],reasons:["Mazali","Tishga yomon","Kasal bo'lamiz","Ba'zida yaxshi","Energiya beradi"],rcolor:["cgreen","cred","cred","cgreen","cgreen"]},
    {ico:"⚽",q:"Har kuni sport kerakmi?",sides:[{ico:"💪",txt:"Ha, kerak!",col:"tc-a"},{ico:"🛋️",txt:"Dam olish ham kerak",col:"tc-b"}],reasons:["Kuchli bo'lamiz","Sog' bo'lamiz","Charchaymiz","Quvnoq bo'lamiz","Mushak o'sadi"],rcolor:["cgreen","cgreen","cred","cgreen","cgreen"]},
    {ico:"👫",q:"Ko'p do'st yaxshimi?",sides:[{ico:"👥",txt:"Ko'p do'st yaxshi",col:"tc-a"},{ico:"🤝",txt:"Yaxshi do'st yaxshi",col:"tc-b"}],reasons:["Yolg'iz emasmiz","Yordam beradi","Ishonchli bo'ladi","Qiziqarli","Har doim bor"],rcolor:["cgreen","cgreen","cgreen","cpurple","cgreen"]},
    {ico:"🌅",q:"Erta turish foydalimi?",sides:[{ico:"🌄",txt:"Ha, foydali!",col:"tc-a"},{ico:"😴",txt:"Ko'proq uxlash kerak",col:"tc-b"}],reasons:["Kun ko'p bo'ladi","Dam olish kerak","Tetik bo'lamiz","Miya yaxshi ishlaydi","Charchab qolmaymiz"],rcolor:["cgreen","cblue","cgreen","cgreen","cgreen"]}
  ],
  hk: [
    {ico:"🐦",txt:"Bir kuni kichkina qushcha uyasidan uchib chiqdi va birinchi marta yolg'iz safarga otlandi. U katta daraxtga yetib kelganida...",opts:[{ico:"🤝",txt:"Yangi do'st topdi",ok:true},{ico:"😢",txt:"Yig'lab ketdi",ok:false},{ico:"🌈",txt:"Kamalak ko'rib uchdi",ok:true},{ico:"🏠",txt:"Orqaga qaytdi",ok:false}]},
    {ico:"🔑",txt:"Ali maktabdan qaytayotganda yo'lda eski kalit topdi. Yaqinida sirli eshik bor edi...",opts:[{ico:"🚪",txt:"Eshikni ochdi",ok:true},{ico:"🏃",txt:"Qo'rqib qochdi",ok:false},{ico:"📢",txt:"Do'stlarini chaqirdi",ok:true},{ico:"🔑",txt:"Kalitni tashlab ketdi",ok:false}]},
    {ico:"🌧️",txt:"Maftuna bog'da o'ynayotganda kuchli yomg'ir yog'ib boshladi. U yashirinish joyini izlab yugurdi...",opts:[{ico:"🏠",txt:"Kichkina uy topdi",ok:true},{ico:"😭",txt:"Ho'l bo'lib yig'ladi",ok:false},{ico:"🐱",txt:"Mushukcha bilan yashindi",ok:true},{ico:"🏊",txt:"Suvda cho'mildi",ok:false}]},
    {ico:"🎁",txt:"Laylo tug'ilgan kunida eshik oldida katta sirli quti ko'rdi. Qutida hech qanday nom yo'q edi...",opts:[{ico:"🌟",txt:"Ajoyib sovg'a chiqdi",ok:true},{ico:"😱",txt:"Qo'rqib ketdi",ok:false},{ico:"💌",txt:"Ichida xat bor edi",ok:true},{ico:"📦",txt:"Bo'sh quti edi",ok:false}]},
    {ico:"🌟",txt:"Kechqurun osmonga qarab yotganda bitta yulduz ko'z qisdi. Yulduz tushib kelayotganda Aziz...",opts:[{ico:"🤝",txt:"Yulduz bilan do'st bo'ldi",ok:true},{ico:"😴",txt:"Uxlab qoldi",ok:false},{ico:"🙏",txt:"Orzusini aytdi",ok:true},{ico:"📺",txt:"TV ko'rdi",ok:false}]},
    {ico:"🐰",txt:"Kichkina quyoncha o'rmondan yo'l topa olmadi. Qorong'i tushayotgandi. U eng baland daraxtga chiqdi va...",opts:[{ico:"🏠",txt:"Uy yo'lini ko'rdi",ok:true},{ico:"😭",txt:"Yig'lab qoldi",ok:false},{ico:"👫",txt:"Do'stlarini ko'rdi",ok:true},{ico:"💤",txt:"Daraxtda uxlab qoldi",ok:false}]}
  ]
};
