// =========================================================================
// LESSON 5: COMPLAINTS, OFFERS, ENCOURAGEMENT & FAREWELL STANDARDS FOR CADDY
// File: lesson5.js (40 CÂU/SECTION - TỔNG 200 CÂU CHUẨN XÁC)
// =========================================================================

(function() {
    if (typeof window.masterQuizData === 'undefined') {
        window.masterQuizData = [];
    }

    const lesson5Data = [
        // =========================================================================
        // SECTION 5.1: LỜI THAN PHIỀN (COMPLAINTS & APOLOGIES) - 40 CÂU
        // =========================================================================
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. I will be quicker next time.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl biː ˈkwɪk.ɚ nekst taɪm/",
            options: [
                { en: "A. I'm sorry, Sir. I will be quicker next time.", vi: "Em xin lỗi ông, lần sau em sẽ nhanh hơn ạ" },
                { en: "B. You are walking too slow, Sir.", vi: "Ông đi bộ quá chậm thưa ông" },
                { en: "C. I am very fast, you are wrong, Sir.", vi: "Em làm rất nhanh, ông sai rồi ạ" },
                { en: "D. Please wait for 2 hours, Sir.", vi: "Xin vui lòng chờ 2 tiếng ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I am very sorry that my service today did not meet your expectations, Sir.",
            phonetic: "/aɪ æm ˈver.i ˈsɑː.ri ðæt maɪ ˈsɜːr.vɪs təˈdeɪ dɪd nɑːt miːt jʊər ˌek.spekˈteɪ.ʃənz, sɜːr/",
            options: [
                { en: "A. I am very sorry that my service today did not meet your expectations, Sir.", vi: "Rất tiếc vì dịch vụ chưa làm ông hài lòng ạ" },
                { en: "B. My service is the best on this course, Sir.", vi: "Dịch vụ của em là tốt nhất sân này ạ" },
                { en: "C. You have too many requirements, Sir.", vi: "Ông có quá nhiều yêu cầu ạ" },
                { en: "D. Stop complaining about my work, Sir.", vi: "Đừng phàn nàn về công việc của em ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I completely understand your frustration right now, Sir.",
            phonetic: "/aɪ kəmˈpliːt.li ˌʌn.dɚˈstænd jʊər frʌsˈtreɪ.ʃən raɪt naʊ, sɜːr/",
            options: [
                { en: "A. I completely understand your frustration right now, Sir.", vi: "Em hoàn toàn hiểu sự khó chịu của ông lúc này ạ" },
                { en: "B. Don't be angry, it's not a big deal, Sir.", vi: "Đừng tức giận, không có gì to tát đâu ạ" },
                { en: "C. Why are you frustrated with me, Sir?", vi: "Tại sao ông lại bực bội với em ạ?" },
                { en: "D. You should calm down and stop talking, Sir.", vi: "Ông nên bình tĩnh và ngừng nói chuyện ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Today is weekend, so it is crowded. We hope to have your understanding, Sir.",
            phonetic: "/təˈdeɪ ɪz ˈwiːk.end, soʊ ɪt ɪz ˈkraʊ.dɪd. wiː hoʊp tə hæv jʊər ˌʌn.dɚˈstæn.dɪŋ, sɜːr/",
            options: [
                { en: "A. Today is weekend, so it is crowded. We hope to have your understanding, Sir.", vi: "Cuối tuần sân đông, mong ông thông cảm ạ" },
                { en: "B. If it is crowded, you can go home now, Sir.", vi: "Sân đông thì ông có thể về nhà bây giờ ạ" },
                { en: "C. The course is empty, you drive too slow, Sir.", vi: "Sân vắng mà ông lái xe chậm quá ạ" },
                { en: "D. Pay extra fee for empty course, Sir.", vi: "Trả thêm phí để chơi sân vắng ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. I will report this to the manager immediately.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl rɪˈpɔːrt ðɪs tə ðə ˈmæn.ə.dʒɚ ɪˈmiː.di.ət.li/",
            options: [
                { en: "A. I'm sorry, Sir. I will report this to the manager immediately.", vi: "Xin lỗi ông, em sẽ báo Quản lý ngay ạ" },
                { en: "B. Solve the problem by yourself, Sir.", vi: "Ông tự giải quyết vấn đề đi ạ" },
                { en: "C. The manager is busy today, Sir.", vi: "Quản lý hôm nay bận rồi ạ" },
                { en: "D. Forget it and keep playing, Sir.", vi: "Quên nó đi và tiếp tục đánh ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I sincerely apologize for giving you the wrong distance, Sir.",
            phonetic: "/aɪ sɪnˈsɪr.li əˈpɑː.lə.dʒaɪz fɔːr ˈɡɪv.ɪŋ juː ðə rɑːŋ ˈdɪs.təns, sɜːr/",
            options: [
                { en: "A. I sincerely apologize for giving you the wrong distance, Sir.", vi: "Thành thật xin lỗi vì báo sai khoảng cách ạ" },
                { en: "B. You misheard my number, Sir.", vi: "Ông nghe nhầm số của em rồi ạ" },
                { en: "C. The distance marker is incorrect, not me, Sir.", vi: "Cọc khoảng cách sai chứ không phải em ạ" },
                { en: "D. It is only 10 yards difference, Sir.", vi: "Chỉ lệch có 10 yard thôi mà ông" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I am so sorry for dropping your club, Sir. Let me clean it for you.",
            phonetic: "/aɪ æm soʊ ˈsɑː.ri fɔːr ˈdrɑː.pɪŋ jʊər klʌb, sɜːr. let miː kliːn ɪt fɔːr juː/",
            options: [
                { en: "A. I am so sorry for dropping your club, Sir. Let me clean it for you.", vi: "Xin lỗi vì làm rơi gậy, để em lau lại ạ" },
                { en: "B. Your club was too slippery, Sir.", vi: "Gậy của ông trơn quá ạ" },
                { en: "C. Pick up the club yourself, Sir.", vi: "Ông tự nhặt gậy lên đi ạ" },
                { en: "D. It is not broken, don't worry, Sir.", vi: "Gậy chưa gãy đâu, đừng lo ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "My apologies, Sir. I forgot to put wet towel on the cart.",
            phonetic: "/maɪ əˈpɑː.lə.dʒiːz, sɜːr. aɪ fɚˈɡɑːt tə pʊt wet ˈtaʊ.əl ɑːn ðə kɑːrt/",
            options: [
                { en: "A. My apologies, Sir. I forgot to put wet towel on the cart.", vi: "Xin lỗi ông, em quên mang khăn ướt lên xe ạ" },
                { en: "B. You don't need wet towel today, Sir.", vi: "Hôm nay ông không cần khăn ướt đâu ạ" },
                { en: "C. Use your own handkerchief, Sir.", vi: "Ông dùng khăn tay của ông đi ạ" },
                { en: "D. Towels are out of stock today, Sir.", vi: "Hôm nay hết khăn ướt rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I am sorry for the delay, Sir. The rough grass is very deep here.",
            phonetic: "/aɪ æm ˈsɑː.ri fɔːr ðə dɪˈleɪ, sɜːr. ðə rʌf ɡræs ɪz ˈver.i diːp hɪər/",
            options: [
                { en: "A. I am sorry for the delay, Sir. The rough grass is very deep here.", vi: "Xin lỗi vì chậm trễ, cỏ rough ở đây quá dày ạ" },
                { en: "B. You shouldn't hit into the deep grass, Sir.", vi: "Lẽ ra ông không nên đánh vào cỏ dày ạ" },
                { en: "C. Buy a new ball and stop searching, Sir.", vi: "Mua bóng mới và ngừng tìm đi ạ" },
                { en: "D. I don't want to search in this grass, Sir.", vi: "Em không muốn tìm ở khu cỏ này đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I am terribly sorry for moving while you were swinging, Sir.",
            phonetic: "/aɪ æm ˈter.ə.bli ˈsɑː.ri fɔːr ˈmuː.vɪŋ waɪl juː wɜːr ˈswɪŋ.ɪŋ, sɜːr/",
            options: [
                { en: "A. I am terribly sorry for moving while you were swinging, Sir.", vi: "Vô cùng xin lỗi vì di chuyển khi ông vung gậy ạ" },
                { en: "B. You swung too quickly without warning, Sir.", vi: "Ông swing nhanh quá không báo trước ạ" },
                { en: "C. A little movement is normal, Sir.", vi: "Di chuyển chút xíu là bình thường mà ạ" },
                { en: "D. Don't look at me when you swing, Sir.", vi: "Đừng nhìn em khi ông vung gậy ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I apologize for this issue, Sir. I will arrange another cart right away.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz fɔːr ðɪs ˈɪʃ.uː, sɜːr. aɪ wɪl əˈreɪndʒ əˈnʌð.ɚ kɑːrt raɪt əˈweɪ/",
            options: [
                { en: "A. I apologize for this issue, Sir. I will arrange another cart right away.", vi: "Em xin lỗi, em sẽ đổi xe khác ngay ạ" },
                { en: "B. You can walk for the rest of the game, Sir.", vi: "Ông có thể đi bộ phần còn lại ạ" },
                { en: "C. Drive slowly and it will be fine, Sir.", vi: "Cứ lái chậm thôi là được ạ" },
                { en: "D. The mechanics are sleeping now, Sir.", vi: "Thợ sửa xe đang ngủ rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. I read the break incorrectly. I will pay more attention.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ red ðə breɪk ˌɪn.kəˈrekt.li. aɪ wɪl peɪ mɔːr əˈten.ʃən/",
            options: [
                { en: "A. I'm sorry, Sir. I read the break incorrectly. I will pay more attention.", vi: "Xin lỗi ông, em đọc sai line, em sẽ chú ý hơn ạ" },
                { en: "B. The green changed direction suddenly, Sir.", vi: "Green tự nhiên đổi hướng đấy chứ ạ" },
                { en: "C. You hit the ball too hard, Sir.", vi: "Tại ông đánh bóng quá lực ạ" },
                { en: "D. Don't ask for line next time, Sir.", vi: "Lần sau đừng hỏi line em nữa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I assure you this will not happen again, Sir.",
            phonetic: "/aɪ əˈʃʊr juː ðɪs wɪl nɑːt ˈhæp.ən əˈɡen, sɜːr/",
            options: [
                { en: "A. I assure you this will not happen again, Sir.", vi: "Cam đoan việc này sẽ không lặp lại ạ" },
                { en: "B. Mistakes happen all the time, Sir.", vi: "Sai sót xảy ra suốt ấy mà ạ" },
                { en: "C. Don't be so strict with me, Sir.", vi: "Đừng quá khắt khe với em ạ" },
                { en: "D. I cannot promise anything, Sir.", vi: "Em không hứa trước được điều gì đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you for your feedback, Sir. I will improve my attitude.",
            phonetic: "/θæŋk juː fɔːr jʊər ˈfiːd.bæk, sɜːr. aɪ wɪl ɪmˈpruːv maɪ ˈæt̬.ə.tuːd/",
            options: [
                { en: "A. Thank you for your feedback, Sir. I will improve my attitude.", vi: "Cảm ơn góp ý, em sẽ cải thiện thái độ ạ" },
                { en: "B. My attitude is totally fine, Sir.", vi: "Thái độ của em hoàn toàn bình thường ạ" },
                { en: "C. You are too hard to please, Sir.", vi: "Ông khó tính quá đấy ạ" },
                { en: "D. I don't care about feedback, Sir.", vi: "Em không quan tâm góp ý đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. I brought you the 7-iron instead of 8-iron.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ brɔːt juː ðə ˈsev.ən aɪ.ɚn ɪnˈsted əv eɪt aɪ.ɚn/",
            options: [
                { en: "A. I'm sorry, Sir. I brought you the 7-iron instead of 8-iron.", vi: "Xin lỗi ông, em lấy nhầm gậy sắt 7 thay vì 8 ạ" },
                { en: "B. 7-iron and 8-iron are the same, Sir.", vi: "Gậy 7 với gậy 8 giống nhau mà ạ" },
                { en: "C. You told me to bring 7-iron, Sir.", vi: "Chính ông bảo em lấy gậy 7 mà ạ" },
                { en: "D. Use 7-iron anyway, Sir.", vi: "Cứ đánh gậy 7 đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I apologize, Sir. Let me clean this club head properly right now.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz, sɜːr. let miː kliːn ðɪs klʌb hed ˈprɑː.pɚ.li raɪt naʊ/",
            options: [
                { en: "A. I apologize, Sir. Let me clean this club head properly right now.", vi: "Em xin lỗi, để em lau sạch mặt gậy ngay ạ" },
                { en: "B. A little mud doesn't matter, Sir.", vi: "Dính chút bùn không sao đâu ạ" },
                { en: "C. Clean it yourself with towel, Sir.", vi: "Lấy khăn tự lau đi ạ" },
                { en: "D. Grass is clean enough, Sir.", vi: "Dính cỏ thế này là sạch rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I am deeply sorry, Sir. I will run to get an umbrella for you right now.",
            phonetic: "/aɪ æm ˈdiːp.li ˈsɑː.ri, sɜːr. aɪ wɪl rʌn tə ɡet æn ʌmˈbrel.ə fɔːr juː raɪt naʊ/",
            options: [
                { en: "A. I am deeply sorry, Sir. I will run to get an umbrella for you right now.", vi: "Xin lỗi ông, em sẽ chạy đi lấy ô ngay ạ" },
                { en: "B. The sun is good for your health, Sir.", vi: "Nắng tốt cho sức khỏe mà ông" },
                { en: "C. You should wear a hat, Sir.", vi: "Lẽ ra ông phải đội mũ chứ ạ" },
                { en: "D. We don't provide umbrellas, Sir.", vi: "Sân em không cung cấp ô đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. We will speed up our pace of play immediately.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. wiː wɪl spiːd ʌp aʊər peɪs əv pleɪ ɪˈmiː.di.ət.li/",
            options: [
                { en: "A. I'm sorry, Sir. We will speed up our pace of play immediately.", vi: "Xin lỗi ông, nhóm em sẽ chơi nhanh hơn ngay ạ" },
                { en: "B. You can wait behind us, Sir.", vi: "Các ông cứ việc chờ phía sau ạ" },
                { en: "C. We paid for 4 hours, Sir.", vi: "Bọn em trả tiền chơi 4 tiếng mà ạ" },
                { en: "D. Don't rush us, Sir.", vi: "Đừng thúc giục bọn em ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "It was completely my fault, Sir. I apologize for my carelessness.",
            phonetic: "/ɪt wɑːz kəmˈpliːt.li maɪ fɑːlt, sɜːr. aɪ əˈpɑː.lə.dʒaɪz fɔːr maɪ ˈker.ləs.nəs/",
            options: [
                { en: "A. It was completely my fault, Sir. I apologize for my carelessness.", vi: "Hoàn toàn là lỗi của em, xin lỗi vì bất cẩn ạ" },
                { en: "B. Nobody is perfect, Sir.", vi: "Không ai hoàn hảo cả thưa ông" },
                { en: "C. It's half your fault too, Sir.", vi: "Một nửa cũng là lỗi của ông ạ" },
                { en: "D. Blame the weather, not me, Sir.", vi: "Trách thời tiết chứ đừng trách em ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "mcq",
            title: "[5.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I'm sorry, Sir. I will rake the bunker smoothly right now.",
            phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl reɪk ðə ˈbʌŋ.kɚ ˈsmuːð.li raɪt naʊ/",
            options: [
                { en: "A. I'm sorry, Sir. I will rake the bunker smoothly right now.", vi: "Xin lỗi ông, em sẽ cào bẫy cát phẳng ngay ạ" },
                { en: "B. The sand is already fine, Sir.", vi: "Cát thế này phẳng rồi ạ" },
                { en: "C. Other caddies didn't rake either, Sir.", vi: "Caddie khác cũng đâu có cào đâu ạ" },
                { en: "D. Rake it yourself if you want, Sir.", vi: "Thích thì tự cào đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I'm sorry, I will be quicker next time, Sir.",
            phonetic: "/aɪm ˈsɑː.ri, aɪ wɪl biː ˈkwɪk.ɚ nekst taɪm, sɜːr/",
            displaySentence: "I'm sorry, I will be _______ next time, Sir.",
            targetWord: "quicker",
            hint: "Từ gồm 7 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Sir, I sincerely apologize for this inconvenience.",
            phonetic: "/sɜːr, aɪ sɪnˈsɪr.li əˈpɑː.lə.dʒaɪz fɔːr ðɪs ˌɪn.kənˈviː.ni.əns/",
            displaySentence: "Sir, I sincerely apologize for this _______.",
            targetWord: "inconvenience",
            hint: "Từ 13 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I completely understand your frustration, Sir.",
            phonetic: "/aɪ kəmˈpliːt.li ˌʌn.dɚˈstænd jʊər frʌsˈtreɪ.ʃən, sɜːr/",
            displaySentence: "I completely understand your _______, Sir.",
            targetWord: "frustration",
            hint: "Từ 11 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I am sorry for bringing the wrong club, Sir.",
            phonetic: "/aɪ æm ˈsɑː.ri fɔːr ˈbrɪŋ.ɪŋ ðə rɑːŋ klʌb, sɜːr/",
            displaySentence: "I am sorry for bringing the _______ club, Sir.",
            targetWord: "wrong",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will pay more attention to your game, Sir.",
            phonetic: "/aɪ wɪl peɪ mɔːr əˈten.ʃən tə jʊər ɡeɪm, sɜːr/",
            displaySentence: "I will pay more _______ to your game, Sir.",
            targetWord: "attention",
            hint: "Từ 9 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will report this problem to my manager, Sir.",
            phonetic: "/aɪ wɪl rɪˈpɔːrt ðɪs ˈprɑː.bləm tə maɪ ˈmæn.ə.dʒɚ, sɜːr/",
            displaySentence: "I will report this problem to my _______, Sir.",
            targetWord: "manager",
            hint: "Từ 7 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Please forgive my carelessness, Sir.",
            phonetic: "/pliːz fɚˈɡɪv maɪ ˈker.ləs.nəs, sɜːr/",
            displaySentence: "Please forgive my _______, Sir.",
            targetWord: "carelessness",
            hint: "Từ 12 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I apologize for disturbing your concentration, Sir.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz fɔːr dɪˈstɜːr.bɪŋ jʊər ˌkɑːn.sənˈtreɪ.ʃən, sɜːr/",
            displaySentence: "I apologize for disturbing your _______, Sir.",
            targetWord: "concentration",
            hint: "Từ 13 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will check all clubs carefully before starting, Sir.",
            phonetic: "/aɪ wɪl tʃek ɑːl klʌbz ˈker.fəl.i bɪˈfɔːr ˈstɑːrt.ɪŋ, sɜːr/",
            displaySentence: "I will check all clubs _______ before starting, Sir.",
            targetWord: "carefully",
            hint: "Từ 9 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I am sorry for losing sight of your ball, Sir.",
            phonetic: "/aɪ æm ˈsɑː.ri fɔːr ˈluː.zɪŋ saɪt əv jʊər bɔːl, sɜːr/",
            displaySentence: "I am sorry for losing _______ of your ball, Sir.",
            targetWord: "sight",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I apologize for disturbing your swing, Sir.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz fɔːr dɪˈstɜːr.bɪŋ jʊər swɪŋ, sɜːr/",
            displaySentence: "I apologize for disturbing your _______, Sir.",
            targetWord: "swing",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will speed up my pace right away, Sir.",
            phonetic: "/aɪ wɪl spiːd ʌp maɪ peɪs raɪt əˈweɪ, sɜːr/",
            displaySentence: "I will speed up my _______ right away, Sir.",
            targetWord: "pace",
            hint: "Từ 4 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I am sorry for the wrong distance advice, Sir.",
            phonetic: "/aɪ æm ˈsɑː.ri fɔːr ðə rɑːŋ ˈdɪs.təns ədˈvaɪs, sɜːr/",
            displaySentence: "I am sorry for the wrong distance _______, Sir.",
            targetWord: "advice",
            hint: "Từ 6 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Thank you for pointing out my error, Sir.",
            phonetic: "/θæŋk juː fɔːr ˈpɔɪnt.ɪŋ aʊt maɪ ˈer.ɚ, sɜːr/",
            displaySentence: "Thank you for pointing out my _______, Sir.",
            targetWord: "error",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will watch your ball landing area closely, Sir.",
            phonetic: "/aɪ wɪl wɑːtʃ jʊər bɔːl ˈlænd.ɪŋ ˈer.i.ə ˈkloʊs.li, sɜːr/",
            displaySentence: "I will watch your ball landing area _______, Sir.",
            targetWord: "closely",
            hint: "Từ 7 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I take full responsibility for this mistake, Sir.",
            phonetic: "/aɪ teɪk fʊl rɪˌspɑːn.səˈbɪl.ə.ti fɔːr ðɪs mɪˈsteɪk, sɜːr/",
            displaySentence: "I take full _______ for this mistake, Sir.",
            targetWord: "responsibility",
            hint: "Từ 14 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I promise not to repeat this mistake, Sir.",
            phonetic: "/aɪ ˈprɑː.mɪs nɑːt tə rɪˈpiːt ðɪs mɪˈsteɪk, sɜːr/",
            displaySentence: "I promise not to _______ this mistake, Sir.",
            targetWord: "repeat",
            hint: "Từ 6 ký tự, động từ."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I apologize for the dirt on your golf bag, Sir.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz fɔːr ðə dɜːrt ɑːn jʊər ɡɑːlf bæɡ, sɜːr/",
            displaySentence: "I apologize for the _______ on your golf bag, Sir.",
            targetWord: "dirt",
            hint: "Từ 4 ký tự."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will do my best to ensure a comfortable round, Sir.",
            phonetic: "/aɪ wɪl duː maɪ best tə ɪnˈʃʊr ə ˈkʌm.fɚ.t̬ə.bəl raʊnd, sɜːr/",
            displaySentence: "I will do my best to ensure a _______ round, Sir.",
            targetWord: "comfortable",
            hint: "Từ 11 ký tự, tính từ."
        },
        {
            lesson: "5", section: "section5.1", type: "fill",
            title: "[5.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Sorry, I gave you the short tee by mistake, Sir.",
            phonetic: "/ˈsɑː.ri, aɪ ɡeɪv juː ðə ʃɔːrt tiː baɪ mɪˈsteɪk, sɜːr/",
            displaySentence: "Sorry, I gave you the short tee by _______, Sir.",
            targetWord: "mistake",
            hint: "Từ 7 ký tự."
        },

        // =========================================================================
        // SECTION 5.2: LỜI ĐỀ NGHỊ (OFFERS & SUGGESTIONS) - 40 CÂU
        // =========================================================================
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Would you like some cold water, Sir?",
            phonetic: "/wʊd juː laɪk səm koʊld ˈwɔː.tər, sɜːr/",
            options: [
                { en: "A. Would you like some cold water, Sir?", vi: "Ông có muốn dùng chút nước mát không ạ?" },
                { en: "B. Do you have water for me, Sir?", vi: "Ông có nước cho em không ạ?" },
                { en: "C. Buy 5 bottles of water now, Sir.", vi: "Mua 5 chai nước ngay đi ạ" },
                { en: "D. Don't drink water while playing, Sir.", vi: "Đừng uống nước trong lúc chơi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Would you like me to open the umbrella for you, Sir?",
            phonetic: "/wʊd juː laɪk miː tə ˈoʊ.pən ðə ʌmˈbrel.ə fɔːr juː, sɜːr/",
            options: [
                { en: "A. Would you like me to open the umbrella for you, Sir?", vi: "Ông có cần em mở ô che cho ông không ạ?" },
                { en: "B. Hold the umbrella for me, Sir.", vi: "Cầm ô giúp em thưa ông" },
                { en: "C. Close your umbrella immediately, Sir.", vi: "Đóng ô lại ngay đi ạ" },
                { en: "D. We don't have umbrellas today, Sir.", vi: "Hôm nay chúng em không có ô ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Excuse me, Sir. May I clean your golf ball?",
            phonetic: "/ɪkˈskjuːz miː, sɜːr. meɪ aɪ kliːn jʊər ɡɑːlf bɔːl/",
            options: [
                { en: "A. Excuse me, Sir. May I clean your golf ball?", vi: "Xin phép em lau bóng cho ông được không ạ?" },
                { en: "B. Clean your golf ball by yourself, Sir.", vi: "Ông tự đi mà lau bóng ạ" },
                { en: "C. Give me a new golf ball, Sir.", vi: "Đưa cho em quả bóng mới đi ạ" },
                { en: "D. Your ball is too clean, don't touch it, Sir.", vi: "Bóng sạch rồi đừng chạm vào ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "You look a bit tired. Would you like to sit and rest for a moment, Sir?",
            phonetic: "/juː lʊk ə bɪt taɪərd. wʊd juː laɪk tə sɪt ænd rest fɔːr ə ˈmoʊ.mənt, sɜːr/",
            options: [
                { en: "A. You look a bit tired. Would you like to sit and rest for a moment, Sir?", vi: "Trông ông hơi mệt, ông muốn ngồi nghỉ chút không ạ?" },
                { en: "B. You are so weak, run faster, Sir.", vi: "Ông yếu quá, chạy nhanh lên ạ" },
                { en: "C. Keep playing without stopping, Sir.", vi: "Tiếp tục chơi không được dừng lại ạ" },
                { en: "D. Stand under the sun for 1 hour, Sir.", vi: "Đứng dưới nắng 1 tiếng ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Please take a short rest, Sir. I will contact the Marshal to solve this now.",
            phonetic: "/pliːz teɪk ə ʃɔːrt rest, sɜːr. aɪ wɪl ˈkɑːn.tækt ðə ˈmɑːr.ʃəl tə sɑːlv ðɪs naʊ/",
            options: [
                { en: "A. Please take a short rest, Sir. I will contact the Marshal to solve this now.", vi: "Xin ông nghỉ chút, em sẽ gọi Marshal xử lý ngay ạ" },
                { en: "B. Call the Marshal by your phone, Sir.", vi: "Ông tự lấy điện thoại gọi Marshal đi ạ" },
                { en: "C. Nobody can help you right now, Sir.", vi: "Không ai giúp được ông lúc này đâu ạ" },
                { en: "D. Leave the course immediately, Sir.", vi: "Rời khỏi sân ngay lập tức ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Would you like a cold towel to refresh yourself, Sir?",
            phonetic: "/wʊd juː laɪk ə koʊld ˈtaʊ.əl tə rɪˈfreʃ jʊərˈself, sɜːr/",
            options: [
                { en: "A. Would you like a cold towel to refresh yourself, Sir?", vi: "Ông muốn dùng khăn lạnh cho mát không ạ?" },
                { en: "B. Wash your face at the lake, Sir.", vi: "Ra hồ mà rửa mặt thưa ông" },
                { en: "C. Hot towel is better for your skin, Sir.", vi: "Khăn nóng tốt cho da hơn ạ" },
                { en: "D. You don't look sweaty at all, Sir.", vi: "Trông ông chẳng có tẹo mồ hôi nào ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Shall I bring both 7-iron and 8-iron for you to choose, Sir?",
            phonetic: "/ʃæl aɪ brɪŋ boʊθ ˈsev.ən aɪ.ɚn ænd eɪt aɪ.ɚn fɔːr juː tə tʃuːz, sɜːr/",
            options: [
                { en: "A. Shall I bring both 7-iron and 8-iron for you to choose, Sir?", vi: "Em cầm cả gậy 7 và 8 ra cho ông chọn nhé ạ?" },
                { en: "B. Choose one club only, I don't carry two, Sir.", vi: "Chọn một cây thôi, em không mang hai cây đâu ạ" },
                { en: "C. Decide your club before walking, Sir.", vi: "Quyết định chọn gậy trước khi đi đi ạ" },
                { en: "D. Hit with any club you see, Sir.", vi: "Thấy cây nào thì đánh cây đó đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "We are passing the kiosk. Would you like to grab a snack, Sir?",
            phonetic: "/wiː ɑːr ˈpæs.ɪŋ ðə ˈkiː.ɑːsk. wʊd juː laɪk tə ɡræb ə snæk, sɜːr/",
            options: [
                { en: "A. We are passing the kiosk. Would you like to grab a snack, Sir?", vi: "Gần trạm nghỉ, ông muốn mua chút đồ ăn nhẹ không ạ?" },
                { en: "B. Kiosk is closed today, Sir.", vi: "Trạm nghỉ hôm nay đóng cửa rồi ạ" },
                { en: "C. Don't eat food while playing, Sir.", vi: "Đừng ăn trong lúc chơi ạ" },
                { en: "D. Buy lunch for me at kiosk, Sir.", vi: "Mua đồ ăn trưa cho em ở trạm nghỉ đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Please hop on the cart, Sir. I will drive you directly to your ball.",
            phonetic: "/pliːz hɑːp ɑːn ðə kɑːrt, sɜːr. aɪ wɪl draɪv juː dɪˈrekt.li tə jʊər bɔːl/",
            options: [
                { en: "A. Please hop on the cart, Sir. I will drive you directly to your ball.", vi: "Mời ông lên xe em chở thẳng tới bóng ạ" },
                { en: "B. You should walk to exercise, Sir.", vi: "Ông nên đi bộ để tập thể dục ạ" },
                { en: "C. Drive the cart yourself, Sir.", vi: "Ông tự lái xe điện đi ạ" },
                { en: "D. Cart is out of battery, Sir.", vi: "Xe điện hết điện rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "May I suggest playing safely to the right side to avoid the bunker, Sir?",
            phonetic: "/meɪ aɪ səˈdʒest ˈpleɪ.ɪŋ ˈseɪf.li tə ðə raɪt saɪd tə əˈvɔɪd ðə ˈbʌŋ.kɚ, sɜːr/",
            options: [
                { en: "A. May I suggest playing safely to the right side to avoid the bunker, Sir?", vi: "Gợi ý ông đánh an toàn sang phải tránh cát ạ?" },
                { en: "B. Hit straight into bunker for fun, Sir.", vi: "Đánh thẳng vào bẫy cát cho vui đi ạ" },
                { en: "C. You cannot avoid bunkers on this hole, Sir.", vi: "Hố này ông không tránh nổi bẫy cát đâu ạ" },
                { en: "D. Don't ask me for strategy, Sir.", vi: "Đừng hỏi em chiến thuật ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "The sun is getting strong. Would you like some sunscreen, Sir?",
            phonetic: "/ðə sʌn ɪz ˈɡet.ɪŋ strɑːŋ. wʊd juː laɪk səm ˈsʌn.skriːn, sɜːr/",
            options: [
                { en: "A. The sun is getting strong. Would you like some sunscreen, Sir?", vi: "Trắng nắng gắt, ông dùng kem chống nắng không ạ?" },
                { en: "B. You are getting sunburned, Sir.", vi: "Ông đang bị cháy nắng kìa" },
                { en: "C. Sunscreen is very expensive, Sir.", vi: "Kem chống nắng đắt lắm ạ" },
                { en: "D. Wear long jacket in this sun, Sir.", vi: "Mặc áo khoác dài dưới nắng này đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Your glove looks wet from rain. Would you like to change to a fresh glove, Sir?",
            phonetic: "/jʊər ɡlʌv lʊks wet frɑːm reɪn. wʊd juː laɪk tə tʃeɪndʒ tə ə freʃ ɡlʌv, sɜːr/",
            options: [
                { en: "A. Your glove looks wet. Would you like to change to a fresh glove, Sir?", vi: "Găng ướt rồi, ông có muốn đổi găng khô mới không ạ?" },
                { en: "B. Take off your glove and play barehanded, Sir.", vi: "Tháo găng ra đánh tay trần đi ạ" },
                { en: "C. Wet gloves give better grip, Sir.", vi: "Găng ướt bám tốt hơn đấy ạ" },
                { en: "D. You forgot to buy spare gloves, Sir.", vi: "Ông quên mua găng dự phòng rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Excuse me, Sir. Would you like me to wipe your sunglasses?",
            phonetic: "/ɪkˈskjuːz miː, sɜːr. wʊd juː laɪk miː tə waɪp jʊər ˈsʌnˌɡlæs.ɪz/",
            options: [
                { en: "A. Excuse me, Sir. Would you like me to wipe your sunglasses?", vi: "Xin phép em lau kính râm giúp ông nhé ạ?" },
                { en: "B. Your glasses are very dirty, Sir.", vi: "Kính của ông bẩn quá ạ" },
                { en: "C. Don't wear glasses on green, Sir.", vi: "Đừng đeo kính trên green ạ" },
                { en: "D. Put your sunglasses in my pocket, Sir.", vi: "Cất kính vào túi em đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Shall we let the group behind pass us while we look for the ball, Sir?",
            phonetic: "/ʃæl wiː let ðə ɡruːp bɪˈhaɪnd pæs ʌs waɪl wiː lʊk fɔːr ðə bɔːl, sɜːr/",
            options: [
                { en: "A. Shall we let the group behind pass us while we look for the ball, Sir?", vi: "Nhường nhóm sau đi trước trong lúc tìm bóng nhé ạ?" },
                { en: "B. Block the group behind us, Sir.", vi: "Cản đường nhóm phía sau đi ạ" },
                { en: "C. Tell them to wait for 30 minutes, Sir.", vi: "Bảo họ chờ 30 phút đi ạ" },
                { en: "D. We don't care about other players, Sir.", vi: "Kệ người chơi khác đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "mcq",
            title: "[5.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "May I take your empty bottle and trash, Sir?",
            phonetic: "/meɪ aɪ teɪk jʊər ˈemp.ti ˈbɑː.t̬əl ænd træʃ, sɜːr/",
            options: [
                { en: "A. May I take your empty bottle and trash, Sir?", vi: "Em xin phép dọn vỏ chai và rác cho ông ạ?" },
                { en: "B. Throw trash on the fairway grass, Sir.", vi: "Vứt rác ra cỏ fairway đi ạ" },
                { en: "C. Keep empty bottles in your pocket, Sir.", vi: "Cất vỏ chai vào túi quần đi ạ" },
                { en: "D. Leave your trash on the green, Sir.", vi: "Để rác lại trên green đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Would you like to have some cold water, Sir?",
            phonetic: "/wʊd juː laɪk tə hæv səm koʊld ˈwɔː.tər, sɜːr/",
            displaySentence: "Would you like to have some _______ water, Sir?",
            targetWord: "cold",
            hint: "Từ gồm 4 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Our fresh coconut is very refreshing today, Sir.",
            phonetic: "/aʊər freʃ ˈkoʊ.kə.nʌt ɪz ˈver.i rɪˈfreʃ.ɪŋ təˈdeɪ, sɜːr/",
            displaySentence: "Our fresh _______ is very refreshing today, Sir.",
            targetWord: "coconut",
            hint: "Từ 7 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "May I clean your ball on the green, Sir?",
            phonetic: "/meɪ aɪ kliːn jʊər bɔːl ɑːn ðə ɡriːn, sɜːr/",
            displaySentence: "May I _______ your ball on the green, Sir?",
            targetWord: "clean",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Shall I open the umbrella for shade, Sir?",
            phonetic: "/ʃæl aɪ ˈoʊ.pən ðə ʌmˈbrel.ə fɔːr ʃeɪd, sɜːr/",
            displaySentence: "Shall I open the _______ for shade, Sir?",
            targetWord: "umbrella",
            hint: "Từ 8 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Would you like to rest for a few minutes, Sir?",
            phonetic: "/wʊd juː laɪk tə rest fɔːr ə fjuː ˈmɪn.ɪts, sɜːr/",
            displaySentence: "Would you like to _______ for a few minutes, Sir?",
            targetWord: "rest",
            hint: "Từ 4 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I will contact the Marshal to assist us, Sir.",
            phonetic: "/aɪ wɪl ˈkɑːn.tækt ðə ˈmɑːr.ʃəl tə əˈsɪst ʌs, sɜːr/",
            displaySentence: "I will contact the _______ to assist us, Sir.",
            targetWord: "Marshal",
            hint: "Từ 7 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Here is a cold towel for your hands, Sir.",
            phonetic: "/hɪər ɪz ə koʊld ˈtaʊ.əl fɔːr jʊər hændz, sɜːr/",
            displaySentence: "Here is a cold _______ for your hands, Sir.",
            targetWord: "towel",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Let me fetch another club for this distance, Sir.",
            phonetic: "/let miː fetʃ əˈnʌð.ɚ klʌb fɔːr ðɪs ˈdɪs.təns, sɜːr/",
            displaySentence: "Let me _______ another club for this distance, Sir.",
            targetWord: "fetch",
            hint: "Động từ 5 ký tự"
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "May I check your score for this hole, Sir?",
            phonetic: "/meɪ aɪ tʃek jʊər skɔːr fɔːr ðɪs hoʊl, sɜːr/",
            displaySentence: "May I check your _______ for this hole, Sir?",
            targetWord: "score",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Please follow the 150-yard marker line, Sir.",
            phonetic: "/pliːz ˈfɑː.loʊ ðə wʌn ˈhʌn.drəd ˈfɪf.ti jɑːrd ˈmɑːr.kɚ laɪn, sɜːr/",
            displaySentence: "Please follow the 150-yard _______ line, Sir.",
            targetWord: "marker",
            hint: "Từ 6 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Would you like a dry glove from your bag, Sir?",
            phonetic: "/wʊd juː laɪk ə draɪ ɡlʌv frɑːm jʊər bæɡ, sɜːr/",
            displaySentence: "Would you like a dry _______ from your bag, Sir.",
            targetWord: "glove",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I recommend using Pitching Wedge for this distance, Sir.",
            phonetic: "/aɪ ˌrek.əˈmend ˈjuː.zɪŋ ˈpɪtʃ.ɪŋ wedʒ fɔːr ðɪs ˈdɪs.təns, sɜːr/",
            displaySentence: "I recommend using Pitching _______ for this distance, Sir.",
            targetWord: "Wedge",
            hint: "Từ 6 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Please stand behind the safety line, Sir.",
            phonetic: "/pliːz stænd bɪˈhaɪnd ðə ˈseɪf.ti laɪn, sɜːr/",
            displaySentence: "Please stand behind the _______ line, Sir.",
            targetWord: "safety",
            hint: "Từ 6 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "The green breaks to the left, Sir.",
            phonetic: "/ðə ɡriːn breɪks tə ðə left, sɜːr/",
            displaySentence: "The green breaks to the _______, Sir.",
            targetWord: "left",
            hint: "Từ 4 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Shall I bring extra umbrella for shade, Sir?",
            phonetic: "/ʃæl aɪ brɪŋ ˈek.strə ʌmˈbrel.ə fɔːr ʃeɪd, sɜːr/",
            displaySentence: "Shall I bring _______ umbrella for shade, Sir.",
            targetWord: "extra",
            hint: "Từ 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "You can clear the bunker with 5-iron, Sir.",
            phonetic: "/juː kæn klɪər ðə ˈbʌŋ.kɚ wɪð faɪv aɪ.ɚn, sɜːr/",
            displaySentence: "You can _______ the bunker with 5-iron, Sir.",
            targetWord: "clear",
            hint: "Động từ nghĩa gồm 5 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "May I brush away small stones on your line, Sir?",
            phonetic: "/meɪ aɪ brʌʃ əˈweɪ smɑːl stoʊnz ɑːn jʊər laɪn, sɜːr/",
            displaySentence: "May I brush away small _______ on your line, Sir.",
            targetWord: "stones",
            hint: "Danh từ số nhiều gồm 06 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Would you like electrolyte water to stay hydrated, Sir?",
            phonetic: "/wʊd juː laɪk iˈlek.trə.laɪt ˈwɔː.tər tə steɪ ˈhaɪ.dreɪ.t̬ɪd, sɜːr/",
            displaySentence: "Would you like electrolyte water to stay _______, Sir.",
            targetWord: "hydrated",
            hint: "Tính từ chỉ trạng thái đủ nước cho cơ thể."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Shall we stop at Clubhouse after hole 9, Sir?",
            phonetic: "/ʃæl wiː stɑːp æd ˈklʌb.haʊs ˈæf.tɚ hoʊl naɪn, sɜːr/",
            displaySentence: "Shall we stop at Clubhouse after hole _______, Sir.",
            targetWord: "nine",
            hint: "Từ 4 ký tự."
        },
        {
            lesson: "5", section: "section5.2", type: "fill",
            title: "[5.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "May I take your club to clean, Sir?",
            phonetic: "/meɪ aɪ teɪk jʊər klʌb tə kliːn, sɜːr/",
            displaySentence: "May I take your club to _______, Sir.",
            targetWord: "clean",
            hint: "Từ gồm 5 ký tự."
        },

        // =========================================================================
        // SECTION 5.3: ĐỘNG VIÊN, KHÍCH LỆ (ENCOURAGEMENT & POSITIVE ENERGY) - 40 CÂU
        // =========================================================================
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Great drive, Sir! The ball is right in the middle of the fairway!",
            phonetic: "/ɡreɪt draɪv, sɜːr! ðə bɔːl ɪz raɪt ɪn ðə ˈmɪd.əl əv ðə ˈfer.weɪ/",
            options: [
                { en: "A. Great drive, Sir! The ball is right in the middle of the fairway!", vi: "Cú phát bóng tuyệt vời chính giữa fairway ạ!" },
                { en: "B. Bad drive, Sir. The ball went into the lake.", vi: "Cú phát bóng tệ quá xuống hồ rồi ạ" },
                { en: "C. Your ball is out of bounds, Sir.", vi: "Bóng ra ngoài biên OB rồi ạ" },
                { en: "D. You missed the ball, Sir.", vi: "Ông đánh trượt bóng rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Unlucky, Sir! Don't worry, the next shot will be better.",
            phonetic: "/ʌnˈlʌk.i, sɜːr! doʊnt ˈwɜːr.i, ðə nekst ʃɑːt wɪl biː ˈbet̬.ɚ/",
            options: [
                { en: "A. Unlucky, Sir! Don't worry, the next shot will be better.", vi: "Tiếc quá ông ơi! Đừng lo, quả sau sẽ tốt hơn ạ" },
                { en: "B. You played so poorly on this hole, Sir.", vi: "Ông đánh quá tệ ở hố này ạ" },
                { en: "C. Stop playing golf today, Sir.", vi: "Dừng chơi golf hôm nay đi ạ" },
                { en: "D. That was a terrible shot, Sir.", vi: "Đó là một cú đánh kinh khủng ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Amazing save, Sir! That was pure skill!",
            phonetic: "/əˈmeɪ.zɪŋ seɪv, sɜːr! ðæt wɑːz pjʊr skɪl/",
            options: [
                { en: "A. Amazing save, Sir! That was pure skill!", vi: "Cứu bóng kinh ngạc quá! Hoàn toàn là kỹ năng ạ!" },
                { en: "B. You just got lucky, Sir.", vi: "Ông chỉ may mắn thôi ạ" },
                { en: "C. The bunker was easy, Sir.", vi: "Bẫy cát này dễ mà ạ" },
                { en: "D. You hit into the sand again, Sir.", vi: "Ông lại đánh vào cát rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Take your time, Sir. Relax and take a deep breath.",
            phonetic: "/teɪk jʊər taɪm, sɜːr. rɪˈlæks ænd teɪk ə diːp breθ/",
            options: [
                { en: "A. Take your time, Sir. Relax and take a deep breath.", vi: "Cứ thong thả, thư giãn và hít thở sâu ạ" },
                { en: "B. Hurry up, you are taking too long, Sir.", vi: "Nhanh lên ông mất thời gian quá ạ" },
                { en: "C. Don't breathe so loud, Sir.", vi: "Đừng hít thở to thế ạ" },
                { en: "D. Hit immediately without thinking, Sir.", vi: "Đánh ngay không cần suy nghĩ ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Nice Birdie, Sir! You read the green very well!",
            phonetic: "/naɪs ˈbɜːr.di, sɜːr! juː red ðə ɡriːn ˈver.i wel/",
            options: [
                { en: "A. Nice Birdie, Sir! You read the green very well!", vi: "Birdie đẹp quá! Ông đọc green rất chuẩn ạ!" },
                { en: "B. Bad Birdie, you got lucky, Sir.", vi: "Birdie tệ, ông may thôi ạ" },
                { en: "C. That was a Double Bogey, Sir.", vi: "Đó là điểm Double Bogey ạ" },
                { en: "D. You missed the cup, Sir.", vi: "Ông đánh trượt hố rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Forget about the last shot, Sir. Let's focus on the next one.",
            phonetic: "/fɚˈɡet əˈbaʊt ðə læst ʃɑːt, sɜːr. lets ˈfoʊ.kəs ɑːn ðə nekst wʌn/",
            options: [
                { en: "A. Forget about the last shot, Sir. Let's focus on the next one.", vi: "Quên quả vừa rồi đi, tập trung quả tiếp theo ạ" },
                { en: "B. Remember how bad your last shot was, Sir.", vi: "Hãy nhớ cú đánh vừa rồi tệ thế nào ạ" },
                { en: "C. Give up this round, Sir.", vi: "Bỏ vòng đấu này đi ạ" },
                { en: "D. You ruined the game, Sir.", vi: "Ông làm hỏng trận đấu rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Beautiful putt, Sir! Straight into the center of the cup!",
            phonetic: "/ˈbjuː.t̬ə.fəl pʌt, sɜːr! streɪt ˈɪn.tə ðə ˈsen.t̬ɚ əv ðə kʌp/",
            options: [
                { en: "A. Beautiful putt, Sir! Straight into the center of the cup!", vi: "Cú putt tuyệt đẹp thẳng giữa tâm hố ạ!" },
                { en: "B. The cup was lucky to catch your ball, Sir.", vi: "Hố may mắn mới bắt được bóng của ông ạ" },
                { en: "C. Too slow putt, Sir.", vi: "Putt chậm quá ạ" },
                { en: "D. You almost missed, Sir.", vi: "Ông suýt trượt đấy ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Good try, Sir! The line was perfect, just needed a bit more speed.",
            phonetic: "/ɡʊd traɪ, sɜːr! ðə laɪn wɑːz ˈpɜːr.fekt, dʒʌst ˈniː.dɪd ə bɪt mɔːr spiːd/",
            options: [
                { en: "A. Good try, Sir! The line was perfect, just needed a bit more speed.", vi: "Cố gắng tốt! Line chuẩn chỉ thiếu chút lực ạ" },
                { en: "B. Bad attempt, Sir.", vi: "Thử nghiệm tệ quá ạ" },
                { en: "C. You hit way past the hole, Sir.", vi: "Ông đánh quá thừa lực rồi ạ" },
                { en: "D. Don't try again on next hole, Sir.", vi: "Hố sau đừng thử nữa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "You are playing very consistently today, Sir! Keep it up!",
            phonetic: "/juː ɑːr ˈpleɪ.ɪŋ ˈver.i kənˈsɪs.tənt.li təˈdeɪ, sɜːr! kiːp ɪt ʌp/",
            options: [
                { en: "A. You are playing very consistently today, Sir! Keep it up!", vi: "Hôm nay ông chơi rất ổn định! Tiếp tục phát huy ạ!" },
                { en: "B. Today is your lucky day only, Sir.", vi: "Hôm nay chỉ là ngày may mắn thôi ạ" },
                { en: "C. You will play bad on back nine, Sir.", vi: "9 hố sau ông sẽ đánh tệ thôi ạ" },
                { en: "D. Your swing looks strange today, Sir.", vi: "Dáng swing hôm nay trông lạ quá ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Great fight, Sir! You handled the rain exceptionally well!",
            phonetic: "/ɡreɪt faɪt, sɜːr! juː ˈhæn.dəld ðə reɪn ɪkˈsep.ʃən.i wel/",
            options: [
                { en: "A. Great fight, Sir! You handled the rain exceptionally well!", vi: "Tinh thần tuyệt vời! Xử lý trong mưa xuất sắc ạ!" },
                { en: "B. You should have quit when it rained, Sir.", vi: "Lẽ ra mưa ông nên bỏ cuộc ạ" },
                { en: "C. Playing in rain is stupid, Sir.", vi: "Chơi trong mưa ngốc lắm ạ" },
                { en: "D. Rain ruined your game completely, Sir.", vi: "Mưa làm hỏng hết trận đấu của ông rồi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Tough lie, Sir, but you have the skills to get out easily!",
            phonetic: "/tʌf laɪ, sɜːr, bʌt juː hæv ðə skɪlz tə ɡet aʊt ˈiː.zəl.i/",
            options: [
                { en: "A. Tough lie, Sir, but you have the skills to get out easily!", vi: "Thế bóng khó, nhưng kỹ năng của ông sẽ cứu ra dễ dàng ạ!" },
                { en: "B. Impossible to escape this bunker, Sir.", vi: "Không thể thoát khỏi bẫy cát này đâu ạ" },
                { en: "C. Pick up the ball and take penalty, Sir.", vi: "Nhặt bóng lên chịu phạt điểm đi ạ" },
                { en: "D. You always hit into sand, Sir.", vi: "Ông toàn đánh vào cát thôi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Excellent concentration, Sir! That was a masterclass shot!",
            phonetic: "/ˈek.səl.ənt ˌkɑːn.sənˈtreɪ.ʃən, sɜːr! ðæt wɑːz ə ˈmæs.tɚ.klæs ʃɑːt/",
            options: [
                { en: "A. Excellent concentration, Sir! That was a masterclass shot!", vi: "Tập trung tuyệt vời! Cú đánh đẳng cấp bậc thầy ạ!" },
                { en: "B. You looked distracted, Sir.", vi: "Trông ông có vẻ xao nhãng ạ" },
                { en: "C. Beginners can hit like that too, Sir.", vi: "Người mới chơi cũng đánh được thế ạ" },
                { en: "D. Pure luck, no concentration, Sir.", vi: "May thôi chứ không có tập trung đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "What an approach shot, Sir! Right next to the pin!",
            phonetic: "/wʌt æn əˈproʊtʃ ʃɑːt, sɜːr! raɪt nekst tə ðə pɪn/",
            options: [
                { en: "A. What an approach shot, Sir! Right next to the pin!", vi: "Cú tiếp cận cờ tuyệt vời! Bóng nằm sát cờ luôn ạ!" },
                { en: "B. Too far from the pin, Sir.", vi: "Quá xa cờ thưa ông" },
                { en: "C. Over-green shot, terrible, Sir.", vi: "Đánh thừa gạt qua green, tệ quá ạ" },
                { en: "D. You got lucky with the slope, Sir.", vi: "Ông may nhờ độ dốc thôi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Solid Par on this handicap 1 hole, Sir! Outstanding play!",
            phonetic: "/ˈsɑː.lɪd pɑːr ɑːn ðɪs ˈhæn.dɪ.kæp wʌn hoʊl, sɜːr! aʊtˈstæn.dɪŋ pleɪ/",
            options: [
                { en: "A. Solid Par on this handicap 1 hole, Sir! Outstanding play!", vi: "Điểm Par vững vàng ở hố khó nhất! Thi đấu xuất sắc ạ!" },
                { en: "B. Par is not good enough, you need Birdie, Sir.", vi: "Par chưa đủ tốt, ông phải được Birdie chứ ạ" },
                { en: "C. This hole is easy, everyone gets Par, Sir.", vi: "Hố này dễ, ai chả được Par ạ" },
                { en: "D. You struggled too much for Par, Sir.", vi: "Ông vất vả quá mới được điểm Par ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "mcq",
            title: "[5.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Last hole, Sir! Finish strong and show your best swing!",
            phonetic: "/læst hoʊl, sɜːr! ˈfɪn.ɪʃ strɑːŋ ænd ʃoʊ jʊər best swɪŋ/",
            options: [
                { en: "A. Last hole, Sir! Finish strong and show your best swing!", vi: "Hố cuối rồi! Kết thúc mạnh mẽ và thể hiện cú swing đẹp nhất ạ!" },
                { en: "B. Finally the last hole, I am so exhausted, Sir.", vi: "Cuối cùng cũng hố cuối, em mệt mỏi quá ạ" },
                { en: "C. You played terribly all day, Sir.", vi: "Cả ngày ông đánh tệ quá ạ" },
                { en: "D. Hurry up so we can go home, Sir.", vi: "Nhanh lên để còn về nhà ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Great swing, Sir! You have a perfect rhythm!",
            phonetic: "/ɡreɪt swɪŋ, sɜːr! juː hæv ə ˈpɜːr.fekt ˈrɪð.əm/",
            displaySentence: "Great swing, Sir! You have a perfect _______!",
            targetWord: "rhythm",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Stay focused, Sir! You've got this!",
            phonetic: "/steɪ ˈfoʊ.kəst, sɜːr! juːv ɡɑːt ðɪs/",
            displaySentence: "Stay _______, Sir! You've got this!",
            targetWord: "focused",
            hint: "Từ gồm 7 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "That drive was long and straight, Sir!",
            phonetic: "/ðæt draɪv wɑːz lɑːŋ ænd streɪt, sɜːr/",
            displaySentence: "That drive was long and _______, Sir!",
            targetWord: "straight",
            hint: "Từ gồm 8 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Don't worry, Sir. You can save Par easily.",
            phonetic: "/doʊnt ˈwɜːr.i, sɜːr. juː kæn seɪv pɑːr ˈiː.zəl.i/",
            displaySentence: "Don't _______, Sir. You can save Par easily.",
            targetWord: "worry",
            hint: "Từ gồm 5 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "That was a great effort, Sir!",
            phonetic: "/ðæt wɑːz ə ɡreɪt ˈef.ɚt, sɜːr/",
            displaySentence: "That was a great _______, Sir!",
            targetWord: "effort",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Take a deep breath and relax, Sir.",
            phonetic: "/teɪk ə diːp breθ ænd rɪˈlæks, sɜːr/",
            displaySentence: "Take a deep _______ and relax, Sir.",
            targetWord: "breath",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Congratulations on your amazing Birdie, Sir!",
            phonetic: "/kənˌɡrætʃ.əˈleɪ.ʃənz ɑːn jʊər əˈmeɪ.zɪŋ ˈbɜːr.di, sɜːr/",
            displaySentence: "Congratulations on your amazing _______, Sir!",
            targetWord: "Birdie",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "You read the green line perfectly, Sir!",
            phonetic: "/juː red ðə ɡriːn laɪn ˈpɜːr.fekt.li, sɜːr/",
            displaySentence: "You read the green line _______, Sir!",
            targetWord: "perfectly",
            hint: "Từ gồm 9 ký tự, loại trạng từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Trust your swing and stay confident, Sir!",
            phonetic: "/trʌst jʊər swɪŋ ænd steɪ ˈkɑːn.fə.dənt, sɜːr/",
            displaySentence: "Trust your swing and stay _______, Sir!",
            targetWord: "confident",
            hint: "Từ gồm 9 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Keep up the excellent performance, Sir!",
            phonetic: "/kiːp ʌp ðə ˈek.səl.ənt pɚˈfɔːr.məns, sɜːr/",
            displaySentence: "Keep up the excellent _______, Sir!",
            targetWord: "performance",
            hint: "From 11 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Swing with confidence, Sir!",
            phonetic: "/swɪŋ wɪð ˈkɑːn.fə.dəns, sɜːr/",
            displaySentence: "Swing with _______, Sir!",
            targetWord: "confidence",
            hint: "From 10 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "That was an outstanding shot, Sir!",
            phonetic: "/ðæt wɑːz æn aʊtˈstæn.dɪŋ ʃɑːt, sɜːr/",
            displaySentence: "That was an _______ shot, Sir!",
            targetWord: "outstanding",
            hint: "Từ gồm 11 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Keep a positive mindset, Sir!",
            phonetic: "/kiːp ə ˈpɑː.zə.t̬ɪv ˈmaɪnd.set, sɜːr/",
            displaySentence: "Keep a positive _______, Sir!",
            targetWord: "mindset",
            hint: "Từ gồm 7 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Incredible distance on that drive, Sir!",
            phonetic: "/ɪnˈkred.ə.bəl ˈdɪs.təns ɑːn ðæt draɪv, sɜːr/",
            displaySentence: "Incredible _______ on that drive, Sir!",
            targetWord: "distance",
            hint: "Từ gồm 8 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Focus on the target ahead, Sir!",
            phonetic: "/ˈfoʊ.kəs ɑːn ðə ˈtɑːr.ɡɪt əˈhed, sɜːr/",
            displaySentence: "Focus on the _______ ahead, Sir!",
            targetWord: "target",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "What a smooth stroke, Sir!",
            phonetic: "/wʌt ə smuːð stroʊk, sɜːr/",
            displaySentence: "What a _______ stroke, Sir!",
            targetWord: "smooth",
            hint: "Từ gồm 6 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Your tempo was spot on, Sir!",
            phonetic: "/jʊər ˈtem.poʊ wɑːz spɑːt ɑːn, sɜːr/",
            displaySentence: "Your _______ was spot on, Sir!",
            targetWord: "tempo",
            hint: "Từ gồm 5 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Commit to your swing, Sir!",
            phonetic: "/kəˈmɪt tə jʊər swɪŋ, sɜːr/",
            displaySentence: "_______ to your swing, Sir!",
            targetWord: "Commit",
            hint: "Từ gồm 6 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Great recovery from the rough, Sir!",
            phonetic: "/ɡreɪt rɪˈkʌv.ɚ.i frɑːm ðə rʌf, sɜːr/",
            displaySentence: "Great _______ from the rough, Sir!",
            targetWord: "recovery",
            hint: "Từ gồm 8 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.3", type: "fill",
            title: "[5.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Hole in one! Absolutely miraculous, Sir!",
            phonetic: "/hoʊl ɪn wʌn! ˌæb.səˈluːt.li mɪˈræk.jə.ləs, sɜːr/",
            displaySentence: "Hole in one! Absolutely _______, Sir!",
            targetWord: "miraculous",
            hint: "Từ gồm 10 ký tự, loại tính từ."
        },

        // =========================================================================
        // SECTION 5.4: LỜI CHÀO TẠM BIỆT (FAREWELL STANDARDS & LAST IMPRESSION) - 40 CÂU
        // =========================================================================
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "It was a pleasure to assist you today, Sir.",
            phonetic: "/ɪt wɑːz ə ˈpleʒ.ɚ tə əˈsɪst juː təˈdeɪ, sɜːr/",
            options: [
                { en: "A. It was a pleasure to assist you today, Sir.", vi: "Rất vinh hạnh được hỗ trợ ông hôm nay ạ" },
                { en: "B. I am very tired of assisting you, Sir.", vi: "Em rất mệt mỏi khi hỗ trợ ông ạ" },
                { en: "C. You must pay me now, Sir.", vi: "Ông phải trả tiền cho em ngay ạ" },
                { en: "D. Don't come back here again, Sir.", vi: "Đừng quay lại đây nữa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Have a safe trip home, Sir!",
            phonetic: "/hæv ə seɪf trɪp hoʊm, sɜːr/",
            options: [
                { en: "A. Have a safe trip home, Sir!", vi: "Chúc ông về nhà an toàn ạ!" },
                { en: "B. Drive as fast as possible on the road, Sir.", vi: "Lái xe nhanh nhất có thể trên đường ạ" },
                { en: "C. Walk back to your home, Sir.", vi: "Đi bộ về nhà ông đi ạ" },
                { en: "D. Stay at the parking lot forever, Sir.", vi: "Ở lại bãi đỗ xe mãi mãi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "We hope to welcome you back soon. Have a wonderful evening, Sir!",
            phonetic: "/wiː hoʊp tə ˈwel.kəm juː bæk suːn. hæv ə ˈwʌn.dɚ.fəl ˈiːv.nɪŋ, sɜːr/",
            options: [
                { en: "A. We hope to welcome you back soon. Have a wonderful evening, Sir!", vi: "Hy vọng sớm đón tiếp lại ông, chúc buổi tối tuyệt vời ạ!" },
                { en: "B. Goodbye, I don't want to see you again, Sir.", vi: "Tạm biệt, em không muốn gặp lại ông ạ" },
                { en: "C. The course is closing forever, Sir.", vi: "Sân golf đóng cửa vĩnh viễn rồi ạ" },
                { en: "D. Go to another golf resort next time, Sir.", vi: "Lần sau sang sân khác chơi đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you very much for your kindness, Sir. I really appreciate it!",
            phonetic: "/θæŋk juː ˈver.i mʌtʃ fɔːr jʊər ˈkaɪnd.nəs, sɜːr. aɪ ˈriː.ə.li əˈpriː.ʃi.eɪt ɪt/",
            options: [
                { en: "A. Thank you very much for your kindness, Sir. I really appreciate it!", vi: "Cảm ơn sự tử tế của ông, em rất trân trọng ạ!" },
                { en: "B. This tip is too small, give me more, Sir.", vi: "Tiền tip này ít quá, đưa thêm đi ạ" },
                { en: "C. I don't need your money, Sir.", vi: "Em không cần tiền của ông ạ" },
                { en: "D. Give tips to other caddies too, Sir.", vi: "Cho caddie khác tiền tip nữa đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Please check your valuables, phone and wallet before going inside, Sir.",
            phonetic: "/pliːz tʃek jʊər ˈvæl.jə.bəlz, foʊn ænd ˈwɑː.lɪt bɪˈfɔːr ˈɡoʊ.ɪŋ ɪnˈsaɪd, sɜːr/",
            options: [
                { en: "A. Please check your valuables, phone and wallet before going inside, Sir.", vi: "Xin kiểm tra đồ giá trị, điện thoại, ví tiền trước khi vào ạ" },
                { en: "B. Leave your phone and wallet on the cart, Sir.", vi: "Để điện thoại và ví trên xe điện ạ" },
                { en: "C. I took your wallet, Sir.", vi: "Em lấy ví của ông rồi ạ" },
                { en: "D. Throw your valuables away, Sir.", vi: "Ném đồ giá trị đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Enjoy your lunch at the Clubhouse, Sir! You earned it!",
            phonetic: "/ɪnˈdʒɔɪ jʊər lʌntʃ æt ðə ˈklʌb.haʊs, sɜːr! juː ɜːrnd ɪt/",
            options: [
                { en: "A. Enjoy your lunch at the Clubhouse, Sir! You earned it!", vi: "Chúc ông ăn trưa ngon miệng tại Clubhouse ạ!" },
                { en: "B. The food at Clubhouse is terrible, Sir.", vi: "Thức ăn ở Clubhouse tệ lắm ạ" },
                { en: "C. Buy lunch for me too, Sir.", vi: "Mua đồ ăn trưa cho em nữa đi ạ" },
                { en: "D. Don't eat lunch today, Sir.", vi: "Hôm nay đừng ăn trưa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I look forward to serving you again next time, Sir!",
            phonetic: "/aɪ lʊk ˈfɔːr.wɚd tə ˈsɝː.vɪŋ juː əˈɡen nekst taɪm, sɜːr/",
            options: [
                { en: "A. I look forward to serving you again next time, Sir!", vi: "Mong chờ lại được phục vụ ông lần tới ạ!" },
                { en: "B. Choose another caddie next time, Sir.", vi: "Lần sau chọn caddie khác đi ạ" },
                { en: "C. I am quitting my job tomorrow, Sir.", vi: "Nghỉ việc từ mai rồi thưa ông" },
                { en: "D. Don't call my number again, Sir.", vi: "Đừng gọi số điện thoại của em nữa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Are you satisfied with my service today, Sir?",
            phonetic: "/ɑːr juː ˈsæt̬.ɪs.faɪd wɪð maɪ ˈsɜːr.vɪs təˈdeɪ, sɜːr/",
            options: [
                { en: "A. Are you satisfied with my service today, Sir?", vi: "Ông có hài lòng với dịch vụ hôm nay không ạ?" },
                { en: "B. You must give me 5 stars rating, Sir.", vi: "Ông phải đánh giá em 5 sao đấy ạ" },
                { en: "C. Why aren't you happy with me, Sir?", vi: "Sao ông không vui với em ạ?" },
                { en: "D. Tell the manager I am the best, Sir.", vi: "Nói với quản lý em là giỏi nhất đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "All 14 clubs are cleaned and organized in your bag, Sir.",
            phonetic: "/ɑːl ˌfɔːrˈtiːn klʌbz ɑːr kliːnd ænd ˈɔːr.ɡə.naɪzd ɪn jʊər bæɡ, sɜːr/",
            options: [
                { en: "A. All 14 clubs are cleaned and organized in your bag, Sir.", vi: "Đủ 14 gậy đã lau sạch và xếp gọn trong túi ạ" },
                { en: "B. Check your bag yourself, I didn't count, Sir.", vi: "Tự kiểm tra túi đi em không đếm đâu ạ" },
                { en: "C. One club is broken, sorry, Sir.", vi: "Một cây gậy bị gãy rồi xin lỗi ạ" },
                { en: "D. Leave your bag in the cart, Sir.", vi: "Cứ vứt túi gậy trên xe đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Hope to see you again at the tournament next month, Sir!",
            phonetic: "/hoʊp tə siː juː əˈɡen æd ðə ˈtʊr.nə.mənt nekst mʌnθ, sɜːr/",
            options: [
                { en: "A. Hope to see you again at the tournament next month, Sir!", vi: "Hy vọng gặp lại ông tại giải đấu tháng sau ạ!" },
                { en: "B. You cannot join the tournament next month, Sir.", vi: "Ông không tham gia giải tháng sau được đâu ạ" },
                { en: "C. Tournament is canceled forever, Sir.", vi: "Giải đấu bị hủy vĩnh viễn rồi ạ" },
                { en: "D. Don't play tournaments, it's expensive, Sir.", vi: "Đừng đấu giải tốn tiền lắm ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you all for coming today! You all had a fantastic round!",
            phonetic: "/θæŋk juː ɑːl fɔːr ˈkʌm.ɪŋ təˈdeɪ! juː ɑːl hæd ə fænˈtæs.tɪk raʊnd/",
            options: [
                { en: "A. Thank you all for coming today! You all had a fantastic round!", vi: "Cảm ơn các ông! Mọi người đã có vòng đấu tuyệt vời ạ!" },
                { en: "B. Goodbye group, you were too slow today, Sirs.", vi: "Tạm biệt nhóm, hôm nay mọi người chơi chậm quá" },
                { en: "C. Pay tips for each caddie now, Sirs.", vi: "Trả tiền tip cho từng caddie ngay đi ạ" },
                { en: "D. Don't come together next time, Sirs.", vi: "Lần sau đừng đi chung nhóm nữa ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you very much, Mr. David! Goodbye and see you soon!",
            phonetic: "/θæŋk juː ˈver.i mʌtʃ, ˈmɪs.tɚ ˈdeɪ.vɪd! ɡʊdˈbaɪ ænd siː juː suːn/",
            options: [
                { en: "A. Thank you very much, Mr. David! Goodbye and see you soon!", vi: "Cảm ơn ông David rất nhiều! Tạm biệt và hẹn gặp lại ạ!" },
                { en: "B. Hey customer, goodbye, Sir.", vi: "Này vị khách, tạm biệt nhé" },
                { en: "C. I forgot your name, goodbye, Sir.", vi: "Em quên tên ông rồi, tạm biệt ạ" },
                { en: "D. Bye bye Mr. No Name, Sir.", vi: "Tạm biệt ông không tên ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Your golf bag has been transferred to the Bag Drop area, Sir.",
            phonetic: "/jʊər ɡɑːlf bæɡ hæz biːn trænsˈfɜːrd tə ðə bæɡ drɑːp ˈer.i.ə, sɜːr/",
            options: [
                { en: "A. Your golf bag has been transferred to the Bag Drop area, Sir.", vi: "Túi gậy đã được chuyển sang khu vực Bag Drop ạ" },
                { en: "B. Carry your heavy bag to your car yourself, Sir.", vi: "Tự vác túi gậy nặng ra xe đi ạ" },
                { en: "C. Your bag is lost somewhere, Sir.", vi: "Túi gậy thất lạc đâu đó rồi ạ" },
                { en: "D. We keep your bag forever, Sir.", vi: "Bọn em giữ túi gậy vĩnh viễn ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you for your kind words, Sir. It was my duty and pleasure!",
            phonetic: "/θæŋk juː fɔːr jʊər kaɪnd wɜːrdz, sɜːr. ɪt wɑːz maɪ ˈduː.ti ænd ˈpleʒ.ɚ/",
            options: [
                { en: "A. Thank you for your kind words, Sir. It was my duty and pleasure!", vi: "Cảm ơn lời khen, đó là trách nhiệm và niềm vinh hạnh ạ!" },
                { en: "B. Words are not enough, give extra tip, Sir.", vi: "Lời nói không đủ đâu, tip thêm đi ạ" },
                { en: "C. I know I am great, Sir.", vi: "Em biết em giỏi mà ông" },
                { en: "D. Don't compliment me too much, Sir.", vi: "Đừng khen em nhiều quá ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "mcq",
            title: "[5.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Have a safe flight back home, Sir! Hope to see you next season!",
            phonetic: "/hæv ə seɪf flaɪt bæk hoʊm, sɜːr! hoʊp tə siː juː nekst ˈsiː.zən/",
            options: [
                { en: "A. Have a safe flight back home, Sir! Hope to see you next season!", vi: "Chúc chuyến bay an toàn! Hy vọng gặp lại mùa tới ạ!" },
                { en: "B. Flight will be delayed today, Sir.", vi: "Chuyến bay hôm nay hoãn rồi ạ" },
                { en: "C. Don't travel by airplane, Sir.", vi: "Đừng đi máy bay thưa ông" },
                { en: "D. Stay in Vietnam forever, Sir.", vi: "Ở lại Việt Nam mãi mãi đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "It was my pleasure to support you today, Sir.",
            phonetic: "/ɪt wɑːz maɪ ˈpleʒ.ɚ tə səˈpɔːrt juː təˈdeɪ, sɜːr/",
            displaySentence: "It was my _______ to support you today, Sir.",
            targetWord: "pleasure",
            hint: "Từ gồm 8 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Thank you very much for your kindness, Sir.",
            phonetic: "/θæŋk juː ˈver.i mʌtʃ fɔːr jʊər ˈkaɪnd.nəs, sɜːr/",
            displaySentence: "Thank you very much for your _______, Sir.",
            targetWord: "kindness",
            hint: "Từ gồm 8 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Wishing you a safe trip home, Sir!",
            phonetic: "/ˈwɪʃ.ɪŋ juː ə seɪf trɪp hoʊm, sɜːr/",
            displaySentence: "Wishing you a _______ trip home, Sir!",
            targetWord: "safe",
            hint: "Từ gồm 4 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I really appreciate your tip, Sir.",
            phonetic: "/aɪ ˈriː.ə.li əˈpriː.ʃi.eɪt jʊər tɪp, sɜːr/",
            displaySentence: "I really _______ your tip, Sir!",
            targetWord: "appreciate",
            hint: "Từ gồm 10 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Please check your wallet before leaving, Sir.",
            phonetic: "/pliːz tʃek jʊər ˈwɑː.lɪt bɪˈfɔːr ˈliː.vɪŋ, sɜːr/",
            displaySentence: "Please check your _______ before leaving, Sir.",
            targetWord: "wallet",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "We hope to welcome you back soon, Sir.",
            phonetic: "/wiː hoʊp tə ˈwel.kəm juː bæk suːn, sɜːr/",
            displaySentence: "We hope to _______ you back soon, Sir.",
            targetWord: "welcome",
            hint: "Từ gồm 7 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Have a wonderful evening, Sir!",
            phonetic: "/hæv ə ˈwʌn.dɚ.fəl ˈiːv.nɪŋ, sɜːr/",
            displaySentence: "Have a wonderful _______, Sir!",
            targetWord: "evening",
            hint: "Từ gồm 7 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Don't forget your valuables on the cart, Sir.",
            phonetic: "/doʊnt fɚˈɡet jʊər ˈvæl.jə.bəlz ɑːn ðə kɑːrt, sɜːr/",
            displaySentence: "Don't forget your _______ on the cart, Sir.",
            targetWord: "valuables",
            hint: "Từ gồm 9 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I hope to caddie for you again, Sir.",
            phonetic: "/aɪ hoʊp tə ˈkæd.i fɔːr juː əˈɡen, sɜːr/",
            displaySentence: "I hope to _______ for you again, Sir.",
            targetWord: "caddie",
            hint: "Từ gồm 6 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Goodbye and have a great rest of your day, Sir!",
            phonetic: "/ɡʊdˈbaɪ ænd hæv ə ɡreɪt rest əv jʊər deɪ, sɜːr/",
            displaySentence: "_______ and have a great rest of your day, Sir!",
            targetWord: "Goodbye",
            hint: "Từ gồm 7 ký tự, loại thán từ/danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Please check all your golf accessories before leaving, Sir.",
            phonetic: "/pliːz tʃek ɑːl jʊər ɡɑːlf ækˈses.ər.iːz bɪˈfɔːr ˈliː.vɪŋ, sɜːr/",
            displaySentence: "Please check all your golf _______ before leaving, Sir.",
            targetWord: "accessories",
            hint: "Từ gồm 11 ký tự, loại danh từ số nhiều."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "I hope you are fully satisfied with the course condition, Sir.",
            phonetic: "/aɪ hoʊp juː ɑːr ˈfʊl.i ˈsæt̬.ɪs.faɪd wɪð ðə skɔːrs kənˈdɪʃ.ən, sɜːr/",
            displaySentence: "I hope you are fully _______ with the course condition, Sir.",
            targetWord: "satisfied",
            hint: "Từ gồm 9 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Have a wonderful journey ahead, Sir!",
            phonetic: "/hæv ə ˈwʌn.dɚ.fəl ˈdʒɜːr.ni əˈhed, sɜːr/",
            displaySentence: "Have a wonderful _______ ahead, Sir.",
            targetWord: "journey",
            hint: "Từ gồm 7 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Don't forget your rangefinder in the cart pocket, Sir.",
            phonetic: "/doʊnt fɚˈɡet jʊər ˈreɪndʒˌfaɪn.dɚ ɪn ðə kɑːrt ˈpɑː.kɪt, sɜːr/",
            displaySentence: "Don't forget your _______ in the cart pocket, Sir.",
            targetWord: "rangefinder",
            hint: "Từ gồm 11 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "See you again next week, Mr. Miller!",
            phonetic: "/siː juː əˈɡen nekst wiːk, ˈmɪs.tɚ ˈmɪl.ɚ/",
            displaySentence: "See you again next _______, Mr. Miller!",
            targetWord: "week",
            hint: "Từ gồm 4 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Drive safely on your way back, Sir.",
            phonetic: "/draɪv ˈseɪf.li ɑːn jʊər weɪ bæk, sɜːr/",
            displaySentence: "Drive _______ on your way back, Sir.",
            targetWord: "safely",
            hint: "Từ gồm 6 ký tự, loại trạng từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Thank you for your great cooperation today, Sir.",
            phonetic: "/θæŋk juː fɔːr jʊər ɡreɪt koʊˌɑː.pəˈreɪ.ʃən təˈdeɪ, sɜːr/",
            displaySentence: "Thank you for your great _______ today, Sir.",
            targetWord: "cooperation",
            hint: "Từ gồm 11 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Best wishes to your family, Sir!",
            phonetic: "/best ˈwɪʃ.ɪz tə jʊər ˈfæm.əl.i, sɜːr/",
            displaySentence: "Best wishes to your _______, Sir!",
            targetWord: "family",
            hint: "Từ gồm 6 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Thank you for your warm smile throughout the round, Sir.",
            phonetic: "/θæŋk juː fɔːr jʊər wɔːrm smaɪl θruːˈaʊt ðə raʊnd, sɜːr/",
            displaySentence: "Thank you for your warm _______ throughout the round, Sir.",
            targetWord: "smile",
            hint: "Từ gồm 5 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.4", type: "fill",
            title: "[5.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Farewell and see you next time, Sir!",
            phonetic: "/ˌferˈwel ænd siː juː nekst taɪm, sɜːr/",
            displaySentence: "_______ and see you next time, Sir!",
            targetWord: "Farewell",
            hint: "Từ gồm 8 ký tự, loại danh từ/thán từ."
        },

        // =========================================================================
        // SECTION 5.5: THỰC HÀNH & LUYỆN TẬP PHẢN XẠ (ROLE-PLAY DRILLS) - 40 CÂU
        // =========================================================================
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại thực tế và chọn phương án đúng:",
            audioText: "It's okay, Sir! Unlucky with the wind. We have many holes left, let's focus on the next shot!",
            phonetic: "/ɪts oʊˈkeɪ, sɜːr! ʌnˈlʌk.i wɪð ðə wɪnd. wiː hæv ˈmen.i hoʊlz left, lets ˈfoʊ.kəs ɑːn ðə nekst ʃɑːt/",
            options: [
                { en: "A. It's okay, Sir! Unlucky wind. We have many holes left, focus on next shot!", vi: "Không sao đâu ạ! Do gió thôi, còn nhiều hố phía trước, tập trung cú sau ạ!" },
                { en: "B. You hit so bad, I am annoyed too, Sir.", vi: "Ông đánh tệ quá em cũng bực đấy ạ" },
                { en: "C. Walk into the bunker and sit there, Sir.", vi: "Đi vào bẫy cát mà ngồi ở đó đi ạ" },
                { en: "D. You should stop playing now, Sir.", vi: "Ông nên dừng chơi bây giờ đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại khen ngợi và chọn phương án đúng:",
            audioText: "Awesome Birdie, Sir! You read the green line perfectly. Great job!",
            phonetic: "/ˈɑː.səm ˈbɜːr.di, sɜːr! juː red ðə ɡriːn laɪn ˈpɜːr.fekt.li. ɡreɪt dʒɑːb/",
            options: [
                { en: "A. Awesome Birdie, Sir! You read the green line perfectly. Great job!", vi: "Birdie đỉnh quá! Ông đọc line green quá hoàn hảo ạ!" },
                { en: "B. Normal shot, nothing special, Sir.", vi: "Đánh bình thường, không có gì đặc biệt ạ" },
                { en: "C. Why didn't you get an Eagle, Sir?", vi: "Sao ông không đánh được Eagle ạ?" },
                { en: "D. The cup was too big, Sir.", vi: "Do cái hố to quá thôi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại xử lý phàn nàn và chọn phương án đúng:",
            audioText: "I am deeply sorry, Sir. I completely understand. I will be 100% concentrated on your game now.",
            phonetic: "/aɪ æm ˈdiːp.li ˈsɑː.ri, sɜːr. aɪ kəmˈpliːt.li ˌʌn.dɚˈstænd. aɪ wɪl biː wʌn ˈhʌn.drəd pərˈsent ˈkɑːn.sən.treɪ.t̬ɪd ɑːn jʊər ɡeɪm naʊ/",
            options: [
                { en: "A. I am deeply sorry, Sir. I understand. I will be 100% concentrated from now.", vi: "Thành thật xin lỗi, em hiểu ạ. Em sẽ tập trung 100% từ bây giờ ạ" },
                { en: "B. It is not my fault, you play too fast, Sir.", vi: "Không phải lỗi của em, tại ông đánh nhanh quá ạ" },
                { en: "C. I am paying attention, stop shouting, Sir.", vi: "Em đang chú ý mà, đừng có hét lên ạ" },
                { en: "D. Change caddie if you don't like me, Sir.", vi: "Không thích thì đổi caddie khác đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại bàn giao thiết bị và chọn phương án đúng:",
            audioText: "Here is your bag, Sir. You have 14 clubs, clean and safe. Enjoy your lunch at the Clubhouse!",
            phonetic: "/hɪər ɪz jʊər bæɡ, sɜːr. juː hæv ˌfɔːrˈtiːn klʌbz, kliːn ænd seɪf. ɪnˈdʒɔɪ jʊər lʌntʃ æt ðə ˈklʌb.haʊs/",
            options: [
                { en: "A. Here is your bag, Sir. All 14 clubs are clean. Enjoy your lunch at Clubhouse!", vi: "Túi gậy đây ạ. Đủ 14 gậy sạch sẽ. Chúc ông ăn trưa ngon miệng ạ!" },
                { en: "B. Clean the clubs yourself, I am tired, Sir.", vi: "Tự đi lau gậy đi, em mệt rồi ạ" },
                { en: "C. You lost 2 clubs on the course, Sir.", vi: "Ông làm mất 2 cây gậy trên sân rồi ạ" },
                { en: "D. Give me my tip money right here, Sir.", vi: "Đưa tiền tip cho em ngay tại đây ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại mô tả quy tắc và chọn phương án đúng:",
            audioText: "Observe ball result, offer genuine compliment or encouragement within 3 seconds after ball stops.",
            phonetic: "/əbˈzɜːrv bɔːl rɪˈzʌlt, ˈoʊ.fɚ ˈdʒen.ju.ɪn ˈkɑːm.plə.mənt wɪðˈɪn θriː ˈsek.əndz/",
            options: [
                { en: "A. Khen/động viên chân thành ngay trong vòng 3 giây sau khi bóng dừng hẳn", vi: "Quy tắc 3 giây vàng Caddie" },
                { en: "B. Chờ 5 phút sau mới bắt đầu khen", vi: "Quá muộn" },
                { en: "C. Khen liên tục từ lúc khách vung gậy", vi: "Gây xao nhãng" },
                { en: "D. Chỉ khen khi khách ghi điểm Hole-in-One", vi: "Thiếu quan tâm" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn hội thoại mô tả mô hình và chọn phương án đúng:",
            audioText: "Listen, Apologize, Solve, and Thank.",
            phonetic: "/ˈlɪs.ən, əˈpɑː.lə.dʒaɪz, sɑːlv, ænd θæŋk/",
            options: [
                { en: "A. Listen (Lắng nghe) - Apologize (Xin lỗi) - Solve (Giải quyết) - Thank (Cảm ơn)", vi: "Mô hình L.A.S.T chuẩn 4T" },
                { en: "B. Laugh (Cười) - Argue (Tranh cãi) - Stop (Dừng lại) - Talk (Nói to)", vi: "Sai nghiêm trọng" },
                { en: "C. Leave (Bỏ đi) - Avoid (Né tránh) - Shout (Hét lên) - Threat (Đe dọa)", vi: "Vi phạm đạo đức" },
                { en: "D. Lock (Khóa) - Ask (Hỏi) - Sit (Ngồi) - Touch (Chạm)", vi: "Không liên quan" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Unlucky lie, Sir! I will bring your sand wedge right away. You can save Par!",
            phonetic: "/ʌnˈlʌk.i laɪ, sɜːr! aɪ wɪl brɪŋ jʊər sænd wedʒ raɪt əˈweɪ. juː kæn seɪv pɑːr/",
            options: [
                { en: "A. Unlucky lie, Sir! I will bring your sand wedge right away. You can save Par!", vi: "Thế bóng không may, em mang gậy cát ra ngay. Cứu Par tốt ạ!" },
                { en: "B. Why do you always hit into sand, Sir?", vi: "Sao ông cứ đánh vào cát hoài thế ạ?" },
                { en: "C. Sand trap is your home, Sir.", vi: "Bẫy cát là nhà của ông luôn rồi ạ" },
                { en: "D. Leave the ball in sand and walk away, Sir.", vi: "Bỏ bóng lại trong cát rồi đi tiếp đi ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Sir, please take a sip of cold water and sit under shade for 1 minute.",
            phonetic: "/sɜːr, pliːz teɪk ə sɪp əv koʊld ˈwɔː.tər ænd sɪt ˈʌn.dɚ ʃeɪd fɔːr wʌn ˈmɪn.ɪt/",
            options: [
                { en: "A. Sir, please take a sip of cold water and sit under shade for 1 minute.", vi: "Mời ông uống ngụm nước lạnh và ngồi bóng râm 1 phút ạ" },
                { en: "B. Sun is not hot, don't complain, Sir.", vi: "Trời có nắng lắm đâu mà phàn nàn ạ" },
                { en: "C. Run to next tee box quickly, Sir.", vi: "Chạy nhanh sang tee box tiếp theo đi ạ" },
                { en: "D. I am tired too, don't ask me for water, Sir.", vi: "Em cũng mệt lắm đừng xin nước em ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "I apologize, Sir. The wind shifted suddenly. I will re-check carefully for next shot.",
            phonetic: "/aɪ əˈpɑː.lə.dʒaɪz, sɜːr. ðə wɪnd ʃɪft.ɪd ˈsʌd.ən.li. aɪ wɪl riː tʃek ˈker.fəl.i fɔːr nekst ʃɑːt/",
            options: [
                { en: "A. I apologize. The wind shifted suddenly. I will re-check carefully next shot.", vi: "Xin lỗi ông, gió đổi hướng đột ngột, em sẽ kiểm tra kỹ cú sau ạ" },
                { en: "B. Wind is invisible, not my fault, Sir.", vi: "Gió tàng hình em sao thấy được ạ" },
                { en: "C. You should feel wind by yourself, Sir.", vi: "Ông phải tự cảm nhận gió chứ ạ" },
                { en: "D. Wind doesn't affect ball much, Sir.", vi: "Gió đâu ảnh hưởng bóng mấy đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Thank you so much for your generosity, Sir! It was a true pleasure working with you!",
            phonetic: "/θæŋk juː soʊ mʌtʃ fɔːr jʊər ˌdʒen.əˈrɑː.sə.ti, sɜːr! ɪt wɑːz ə truː ˈpleʒ.ɚ ˈwɜːrk.ɪŋ wɪð juː/",
            options: [
                { en: "A. Thank you so much for your generosity, Sir! It was a true pleasure!", vi: "Cảm ơn sự hào phóng của ông! Vinh hạnh khi đồng hành cùng ông ạ!" },
                { en: "B. Put tip money in my pocket directly, Sir.", vi: "Đút tiền tip thẳng vào túi em đi ạ" },
                { en: "C. Is this all? Give more, Sir.", vi: "Có bấy nhiêu thôi sao? Cho thêm đi ạ" },
                { en: "D. I don't accept small tips, Sir.", vi: "Em không nhận tiền tip ít thế đâu ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Unlucky water hazard, Sir! Let's drop a new ball here and aim for a great pitch!",
            phonetic: "/ʌnˈlʌk.i ˈwɔː.tər ˈhæz.ɚd, sɜːr! lets drɑːp ə nuː bɔːl hɪər ænd eɪm fɔːr ə ɡreɪt pɪtʃ/",
            options: [
                { en: "A. Unlucky water hazard, Sir! Drop a new ball and aim for a great pitch!", vi: "Không may xuống nước, thả bóng mới và nhắm cú pitch đẹp ạ!" },
                { en: "B. Jump into the water to get your ball back, Sir.", vi: "Nhảy xuống nước mà mò bóng lại đi ạ" },
                { en: "C. Water hazards always destroy bad players, Sir.", vi: "Bẫy nước lúc nào chả tiêu diệt người chơi kém" },
                { en: "D. That ball was 5 dollars wasted, Sir.", vi: "Mất toi quả bóng 5 đô rồi ông" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Let me throw a few grass blades in the air to verify the wind direction again, Sir.",
            phonetic: "/let miː θroʊ ə fjuː ɡræs bleɪdz ɪn ðə er tə ˈver.ə.faɪ ðə wɪnd dɪˈrek.ʃən əˈɡen, sɜːr/",
            options: [
                { en: "A. Let me throw grass blades in air to verify wind direction again, Sir.", vi: "Để em thả cọng cỏ kiểm tra lại hướng gió ngay ạ" },
                { en: "B. My wind judgment is always 100% correct, Sir.", vi: "Đo gió của em luôn đúng 100% ạ" },
                { en: "C. Grass doesn't lie, you are wrong, Sir.", vi: "Cỏ không biết nói dối đâu, ông sai rồi" },
                { en: "D. Look at the flag, don't ask me, Sir.", vi: "Tự nhìn cờ đi đừng hỏi em ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "So close, Sir! Just lip out! Great line and speed!",
            phonetic: "/soʊ kloʊs, sɜːr! dʒʌst lɪp aʊt! ɡreɪt laɪn ænd spiːd/",
            options: [
                { en: "A. So close, Sir! Just lip out! Great line and speed!", vi: "Suýt nữa vào! Nảy mép hố thôi, line và lực quá tuyệt ạ!" },
                { en: "B. Terrible putting, Sir.", vi: "Gạt bóng tệ quá ông" },
                { en: "C. You missed because you rushed, Sir.", vi: "Ông trượt vì vội vã đấy ạ" },
                { en: "D. Try harder next year, Sir.", vi: "Năm sau cố gắng hơn nhé" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Stand outside the player's line of sight and keep absolute silence.",
            phonetic: "/stænd ˌaʊtˈsaɪd ðə ˈpleɪ.ɚz laɪn əv saɪt ænd kiːp ˈæb.sə.luːt ˈsaɪ.ləns/",
            options: [
                { en: "A. Đứng ngoài tầm nhìn của người chơi và giữ im lặng tuyệt đối", vi: "Chuẩn mực vị trí đứng Caddy" },
                { en: "B. Đứng ngay trước mặt khách để nhìn cho rõ", vi: "Gây cản trở tầm nhìn" },
                { en: "C. Đi qua đi lại phía sau để tìm gậy tiếp theo", vi: "Gây tiếng ồn xao nhãng" },
                { en: "D. Ngồi trên xe điện nói chuyện điện thoại", vi: "Vi phạm quy chế tác phong" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Clean all clubs, check count of 14 clubs, confirm valuables with guest, return bag safely.",
            phonetic: "/kliːn ɑːl klʌbz, tʃek kaʊnt əv ˌfɔːrˈtiːn klʌbz, kənˈfɜːrm ˈvæl.jə.bəlz, rɪˈtɜːrn bæɡ/",
            options: [
                { en: "A. Lau gậy, đếm đủ 14 cây, xác nhận đồ giá trị, bàn giao túi an toàn", vi: "Quy trình kết thúc 18 hố chuẩn" },
                { en: "B. Vứt túi gậy tại bãi xe rồi bỏ đi", vi: "Sai quy trình" },
                { en: "C. Chỉ lau gậy Driver, các gậy khác để khách tự lau", vi: "Thiếu trách nhiệm" },
                { en: "D. Đòi tiền tip trước mới chịu đếm gậy", vi: "Vi phạm thái độ phục vụ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Politely inform the group and proactively hand clubs faster to speed up play.",
            phonetic: "/pəˈlaɪt.li ɪnˈfɔːrm ðə ɡruːp ænd proʊˈæk.tɪv.li hænd klʌbz ˈfæs.tɚ tə spiːd ʌp pleɪ/",
            options: [
                { en: "A. Thông báo lịch sự và chủ động hỗ trợ đưa gậy nhanh hơn để đẩy tốc độ", vi: "Xử lý nhóm chậm chuẩn Caddy" },
                { en: "B. Tranh cãi gay gắt với Marshal trên sân", vi: "Thái độ không chuẩn mực" },
                { en: "C. Trách mắng khách chơi quá chậm", vi: "Xúc phạm khách hàng" },
                { en: "D. Bỏ mặc không quan tâm tới tốc độ", vi: "Thiếu chuyên nghiệp" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Pin is 150 yards over water. I suggest 6-iron to comfortably clear the hazard, Sir.",
            phonetic: "/pɪn ɪz wʌn ˈhʌn.drəd ˈfɪf.ti jɑːrdz ˈoʊ.vɚ ˈwɔː.tər. aɪ səˈdʒest sɪks aɪ.ɚn tə ˈkʌm.fɚ.t̬ə.bli klɪər ðə ˈhæz.ɚd, sɜːr/",
            options: [
                { en: "A. Pin is 150 yards over water. I suggest 6-iron to clear hazard comfortably!", vi: "Cờ 150 yard qua nước, em gợi ý gậy 6 để qua bẫy thoải mái ạ!" },
                { en: "B. Use Putter to hit through the water, Sir.", vi: "Dùng gậy gạt Putter đánh xuyên qua nước đi ạ" },
                { en: "C. Hit as hard as you can with 9-iron and pray, Sir.", vi: "Đánh hết lực bằng gậy 9 rồi cầu nguyện đi ạ" },
                { en: "D. Skip this hole, water is dangerous, Sir.", vi: "Bỏ hố này đi, nước nguy hiểm lắm" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "It's double break, Sir. First left to right, then breaks back to the left near cup.",
            phonetic: "/ɪts ˈdʌb.əl breɪk, sɜːr. fɜːrst left tʊ raɪt, ðen breɪks bæk tə ðə left nɪər kʌp/",
            options: [
                { en: "A. Double break, Sir. First left to right, then breaks back left near cup.", vi: "Dốc hai chiều ạ, đầu tiên trái sang phải, gần hố đổ ngược sang trái ạ" },
                { en: "B. Green is flat like a mirror, hit straight, Sir.", vi: "Green phẳng như gương, cứ đánh thẳng đi ạ" },
                { en: "C. I have no idea about this green, Sir.", vi: "Em chẳng biết gì về green này đâu ạ" },
                { en: "D. Guess the line yourself, Sir.", vi: "Tự đoán line đi thưa ông" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Remain calm, check if guest is safe, collect broken pieces, offer spare club politely.",
            phonetic: "/rɪˈmeɪn kɑːm, tʃek ɪf ɡest ɪz seɪf, kəˈlekt ˈbroʊ.kən piːs.ɪz, ˈoʊ.fɚ sper klʌb/",
            options: [
                { en: "A. Bình tĩnh, kiểm tra an toàn khách, thu gom gậy gãy, đưa gậy thay thế", vi: "Xử lý khi khách làm gãy gậy" },
                { en: "B. La lớn lên chỉ trích khách làm hỏng đồ", vi: "Không chuyên nghiệp" },
                { en: "C. Vứt mảnh gậy gãy vào bẫy cát", vi: "Mất vệ sinh sân" },
                { en: "D. Yêu cầu khách đền tiền ngay trên sân", vi: "Sai quy định dịch vụ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "mcq",
            title: "[5.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
            audioText: "Hole-in-One! Incredible, Sir! Let me mark the exact distance and score on scorecard!",
            phonetic: "/hoʊl ɪn wʌn! ˌæb.səˈluːt.li mɪˈræk.jə.ləs, sɜːr/",
            options: [
                { en: "A. Hole-in-One! Incredible! Let me mark distance and score on scorecard!", vi: "Hole-in-One! Tuyệt vời! Để em ghi nhận khoảng cách và điểm số ạ!" },
                { en: "B. You got lucky, the wind pushed it in, Sir.", vi: "May thôi chứ gió thổi bóng vào đấy ạ" },
                { en: "C. Hole-in-One means you must pay me 1000 dollars, Sir.", vi: "Hole-in-One là ông phải cho em 1000 đô nhé" },
                { en: "D. Pick up ball and keep playing, don't scream, Sir.", vi: "Lấy bóng chơi tiếp đừng hét lên ạ" }
            ], correct: 0
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "One shot at a time, Sir. Stay in the moment!",
            phonetic: "/wʌn ʃɑːt æt ə taɪm, sɜːr. steɪ ɪn ðə ˈmoʊ.mənt/",
            displaySentence: "One _______ at a time, Sir. Stay in the moment!",
            targetWord: "shot",
            hint: "Từ gồm 4 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Have a safe trip home, Mr. Evans!",
            phonetic: "/hæv ə seɪf trɪp hoʊm, ˈmɪs.tɚ ˈev.ənz/",
            displaySentence: "Have a _______ trip home, Mr. Evans!",
            targetWord: "safe",
            hint: "Từ gồm 4 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "First step is to listen carefully to the customer, Sir.",
            phonetic: "/fɜːrst step ɪz tə ˈlɪs.ən ˈker.fəl.i tə ðə ˈkʌs.tə.mɚ, sɜːr/",
            displaySentence: "First step is to _______ carefully to the customer, Sir.",
            targetWord: "listen",
            hint: "Từ gồm 6 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Second step is to apologize sincerely for the inconvenience, Sir.",
            phonetic: "/ˈsek.ənd step ɪz tə əˈpɑː.lə.dʒaɪz sɪnˈsɪr.li fɔːr ðə ˌɪn.kənˈviː.ni.əns, sɜːr/",
            displaySentence: "Second step is to _______ sincerely for the inconvenience, Sir.",
            targetWord: "apologize",
            hint: "Từ gồm 9 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Third step is to solve the issue immediately, Sir.",
            phonetic: "/θɜːrd step ɪz tə sɑːlv ðə ˈɪʃ.uː ɪˈmiː.di.ət.li, sɜːr/",
            displaySentence: "Third step is to _______ the issue immediately, Sir.",
            targetWord: "solve",
            hint: "Từ gồm 5 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Final step is to thank the customer for understanding, Sir.",
            phonetic: "/ˈfaɪ.nəl step ɪz tə θæŋk ðə ˈkʌs.tə.mɚ fɔːr ˌʌn.dɚˈstæn.dɪŋ, sɜːr/",
            displaySentence: "Final step is to _______ the customer for understanding, Sir.",
            targetWord: "thank",
            hint: "Từ gồm 5 ký tự, loại động từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Compliment the player within three seconds after ball stops, Sir.",
            phonetic: "/ˈkɑːm.plə.mənt ðə ˈpleɪ.ɚ wɪðˈɪn θriː ˈsek.əndz ˈæf.tɚ bɔːl stɑːps, sɜːr/",
            displaySentence: "Compliment the player within three _______ after ball stops, Sir.",
            targetWord: "seconds",
            hint: "Từ gồm 7 ký tự, loại danh từ số nhiều."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Maintain professional attitude at all times, Sir.",
            phonetic: "/meɪnˈteɪn prəˈfeʃ.ən.əl ˈæt̬.ə.tuːd æt ɑːl taɪmz, sɜːr/",
            displaySentence: "Maintain _______ attitude at all times, Sir.",
            targetWord: "professional",
            hint: "Từ gồm 12 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "We aim to create memorable experience for every guest, Sir.",
            phonetic: "/wiː eɪm tə kriːˈeɪt ˈmem.ər.ə.bəl ɪkˈspɪr.i.əns fɔːr ˈev.ri ɡest, sɜːr/",
            displaySentence: "We aim to create _______ experience for every guest, Sir.",
            targetWord: "memorable",
            hint: "Từ gồm 9 ký tự, loại tính từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Double check the cart before returning to staging area, Sir.",
            phonetic: "/ˈdʌb.əl tʃek ðə kɑːrt bɪˈfɔːr rɪˈtɜːrn.ɪŋ tə ˈsteɪ.dʒɪŋ ˈer.i.ə, sɜːr/",
            displaySentence: "Double check the _______ before returning to staging area, Sir.",
            targetWord: "cart",
            hint: "Từ gồm 4 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Always double check the yardage before advising the guest, Sir.",
            phonetic: "/ˈɑːl.weɪz ˈdʌb.əl tʃek ðə ˈjɑːr.dɪdʒ bɪˈfɔːr ədˈvaɪz.ɪŋ ðə ɡest, sɜːr/",
            displaySentence: "Always double check the _______ before advising the guest, Sir.",
            targetWord: "yardage",
            hint: "Từ gồm 7 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Place your hand on left chest and bow slightly, Sir.",
            phonetic: "/pleɪs jʊər hænd ɑːn left tʃest ænd baʊ ˈslaɪt.li, sɜːr/",
            displaySentence: "Place your hand on left _______ and bow slightly, Sir.",
            targetWord: "chest",
            hint: "Từ gồm 5 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Keep a safe distance from the player's swing arc, Sir.",
            phonetic: "/kiːp ə seɪf ˈdɪs.təns frɑːm ðə ˈpleɪ.ɚz swɪŋ ɑːrk, sɜːr/",
            displaySentence: "Keep a safe distance from the player's swing _______, Sir.",
            targetWord: "arc",
            hint: "Từ gồm 3 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Maintain a warm smile throughout the round, Sir.",
            phonetic: "/meɪnˈteɪn ə wɔːrm smaɪl θruːˈaʊt ðə raʊnd, sɜːr/",
            displaySentence: "Maintain a warm _______ throughout the round, Sir.",
            targetWord: "smile",
            hint: "Từ gồm 5 ký tự, loại danh từ."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Clean the club grooves after every single shot, Sir.",
            phonetic: "/kliːn ðə klʌbz ɡruːvz ˈæf.tɚ ˈev.ri ˈsɪŋ.ɡəl ʃɑːt, sɜːr/",
            displaySentence: "Clean the club _______ after every single shot, Sir.",
            targetWord: "grooves",
            hint: "Từ gồm 7 ký tự, loại danh từ số nhiều."
        },
        {
            lesson: "5", section: "section5.5", type: "fill",
            title: "[5.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
            audioText: "Keep the pace of play on schedule, Sir.",
            phonetic: "/kiːp ðə peɪs əv pleɪ ɑːn ˈskedʒ.uːl, sɜːr/",
            displaySentence: "Keep the pace of play on _______, Sir.",
            targetWord: "schedule",
            hint: "Từ gồm 8 ký tự, loại danh từ."
        }
    ];

    // CHUẨN HÓA UNICODE NFC TOÀN BỘ CHUỖI TIẾNG VIỆT KHI NẠP DỮ LIỆU
    lesson5Data.forEach(item => {
        if (item.hint) {
            item.hint = item.hint.normalize('NFC').replace(/\s+/g, ' ').trim();
        }
        if (item.options && Array.isArray(item.options)) {
            item.options.forEach(opt => {
                if (opt.vi) opt.vi = opt.vi.normalize('NFC').replace(/\s+/g, ' ').trim();
            });
        }
    });

    window.masterQuizData.push(...lesson5Data);
})();
