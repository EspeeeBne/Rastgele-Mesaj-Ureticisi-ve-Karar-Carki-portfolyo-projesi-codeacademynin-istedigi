document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".menu button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            tabContents.forEach(content => content.style.display = "none");
            tabContents[index].style.display = "block";
        });
    });

    const messages = [
        "Bugün harika bir gün olacak!",
        "Kendine güven, başarı seninle!",
        "Sabır, en büyük erdemdir.",
        "Küçük adımlar büyük başarılara yol açar.",
        "Her zorluk, yeni bir fırsattır.",
        "Gülümsemek her zaman bir başlangıçtır.",
        "Hayallerine ulaşmak için vazgeçme.",
        "Kendine inan ve ilerle.",
        "Zamanını iyi kullan, başarı kapını çalar.",
        "Düşmek, yeniden kalkmak için bir fırsattır.",
        "Hayat, cesur olanları ödüllendirir.",
        "Bugün yeni bir şey öğrenmek için harika bir gün.",
        "Güçlü ol, bu da geçecek.",
        "Her gün bir adımdır, ilerlemeye devam et.",
        "Her gün, yeni bir başlangıçtır.",
        "Sevgiyle yapılan her şey güzeldir.",
        "Mutluluk, paylaşınca çoğalır.",
        "Korkularını aş ve cesur ol.",
        "Başarıya giden yol, denemekten geçer.",
        "Kendi yolunu bul, kimseye bağlı kalma.",
        "Başarısızlık, öğrenmenin bir parçasıdır.",
        "Her zaman elinden gelenin en iyisini yap.",
        "Hayat, küçük anların değerini bilmekle güzelleşir.",
        "Kendini sev, sen özelsin.",
        "Yenilgiler, seni güçlendiren basamaklardır.",
        "Gülümse, dünya seninle gülümser.",
        "Hedefine odaklan ve pes etme.",
        "Her şeye rağmen, umutlu ol.",
        "Hayat, seçimlerimizin bir toplamıdır.",
        "Kendine karşı nazik ol.",
        "Güçlü yanlarını keşfet ve geliştir.",
        "Sevgi, en büyük güçtür.",
        "Başarı, sabır ve çaba gerektirir.",
        "Her gün kendini biraz daha geliştir.",
        "Mutlu olmanın yolu, kendin olmaktır.",
        "Küçük şeylerle mutlu olmayı öğren.",
        "Kendi hikayeni yaz.",
        "Bugün yapacağın küçük bir iyilik, büyük fark yaratabilir.",
        "Düşüncelerini olumlu tut.",
        "Her sabah yeni bir umutla uyan.",
        "Kendine güven, en iyi sen olabilirsin.",
        "Her şey senin elinde.",
        "Bugün, dünden daha iyi ol.",
        "Yeteneklerini keşfetmek için zaman ayır.",
        "Hayatta en önemli şey, sevgidir.",
        "Her zorluk, seni daha güçlü yapar.",
        "İçindeki gücü keşfet.",
        "Başarı, çok çalışmanın meyvesidir.",
        "Mutluluk, anı yaşamaktır.",
        "Düşüncelerinle dünyanı şekillendir.",
        "Hayal et, inan ve gerçekleştir.",
        "Kendine yeni hedefler koy.",
        "Cesur adımlar atmaktan çekinme.",
        "Her şey bir adımla başlar.",
        "Zorluklarla yüzleş, onlardan kaçma.",
        "Hayat, fırsatlarla doludur.",
        "Kendine zaman ayır ve dinlen.",
        "Her şey, senin inancınla başlar.",
        "Başarı, sabır ve azimle gelir.",
        "Her sabah yeni bir umutla başla.",
        "Hayatta her şey mümkün.",
        "Güçlü yanlarını ortaya çıkar.",
        "Her anın tadını çıkar.",
        "Hedefine doğru adım at.",
        "Mutluluğu aramak yerine, onu yarat.",
        "Kendine inan, her şey mümkün.",
        "Düşüncelerini olumlu tut, hayatın değişir.",
        "Bugün, yeni bir fırsat olabilir.",
        "Kendine zaman tanı, gelişmek zaman alır.",
        "Her yeni gün, yeni bir şanstır.",
        "Kendine güvenmek, başarının yarısıdır.",
        "Hedeflerine sadık kal.",
        "Hayatta en önemli şey, mutlu olmaktır.",
        "Her şeyin bir çözümü vardır.",
        "Başarı, sürekli çaba ile elde edilir.",
        "Bugün, en iyi halini ortaya koy.",
        "Hayat kısa, onu dolu dolu yaşa.",
        "Olumlu düşün, olumlu yaşa.",
        "Hayat, sürprizlerle dolu.",
        "Kendine inan ve harekete geç.",
        "Hayatta hiçbir şey imkansız değildir.",
        "Kendi değerini bil.",
        "Başarıya ulaşmanın yolu, çok çalışmaktır.",
        "Her sabah, yeni bir umuttur.",
        "Her şey senin elinde, harekete geç.",
        "Mutlu olmanın yolu, sevmekten geçer.",
        "Her şeyin bir zamanı vardır.",
        "Başarı, cesaretle gelir.",
        "Hayat, seçimlerle şekillenir.",
        "Bugün, geçmişin pişmanlıklarını bırak.",
        "Kendine iyi davran, sen özelsin.",
        "Hayallerine ulaşmak için cesur ol.",
        "Kendi yolunu çiz.",
        "Her şey, seninle başlar.",
        "Mutluluğun anahtarı, içindedir.",
        "Hayat, bir yolculuktur, tadını çıkar.",
        "Kendine inan, her şey mümkün.",
        "Başarıya giden yol, denemekten geçer.",
        "Mutlu değilsen mutlu ol!",
        "Başarı da bir gün gelir sakın pes etme.",
        "Hayat yorucu olabilir ama sen asla yorulma.",
        "Küçük adımlar, büyük farklar yaratır."
    ];

    const generateMessageButton = document.getElementById("generateMessageButton");
    const randomMessageElement = document.getElementById("randomMessage");

    generateMessageButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        randomMessageElement.textContent = messages[randomIndex];
    });


    const generateNumberButton = document.getElementById("generateNumberButton");
    const randomNumberElement = document.getElementById("randomNumber");

    generateNumberButton.addEventListener("click", function () {
        const minValue = parseInt(document.getElementById("minValue").value);
        const maxValue = parseInt(document.getElementById("maxValue").value);

        if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            randomNumberElement.textContent = `Rastgele Sayı: ${randomNumber}`;
        } else {
            randomNumberElement.textContent = "Lütfen geçerli bir minimum ve maksimum değer girin.";
        }
    });



    const spinWheelButton = document.getElementById("spinWheelButton");
    const selectedOptionElement = document.getElementById("selectedOption");
    const optionsInput = document.getElementById("options");

    if (spinWheelButton && selectedOptionElement && optionsInput) {
        spinWheelButton.addEventListener("click", function () {
            const options = optionsInput.value.split(",").map(option => option.trim()).filter(option => option);

            if (options.length > 0) {
                const randomIndex = Math.floor(Math.random() * options.length);
                selectedOptionElement.textContent = `Seçim: ${options[randomIndex]}`;
                selectedOptionElement.style.display = "block";
            } else {
                selectedOptionElement.textContent = "Lütfen seçenekleri virgülle ayırarak girin.";
                selectedOptionElement.style.display = "block";
            }
        });
    } else {
        console.error("One or more elements are missing from the DOM.");
    }
});
