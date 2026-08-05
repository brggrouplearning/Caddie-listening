// =========================================================================
// LESSON 4: MOVE SAFELY, STAY ALERT & ON-COURSE PROCEDURES FOR CADDIE
// File: lesson4.js (FULLY REFACTORED & STANDARDIZED - 35 CÂU / SECTION)
// =========================================================================

if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

window.masterQuizData.push(
    // =========================================================================
    // SECTION 4.1: AN TOÀN DI CHUYỂN & LÁI XE ĐIỆN (MOVE SAFELY) - 35 CÂU
    // =========================================================================
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        "title": "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please turn left here and follow the cart path, Sir.",
        "phonetic": "/pliːz tɜːrn left hɪər ænd ˈfɑː.loʊ ðə kɑːrt pæθ, sɜːr/",
        "options": [
            { "en": "A. Please turn left here and follow the cart path, Sir.", "vi": "Vui lòng rẽ trái và đi theo đường xe điện ạ" },
            { "en": "B. Please turn right here and stop the cart, Sir.", "vi": "Vui lòng rẽ phải và dừng xe lại ạ" },
            { "en": "C. Please drive backward on the grass, Sir.", "vi": "Vui lòng lùi xe trên cỏ ạ" },
            { "en": "D. Please go back to the clubhouse now, Sir.", "vi": "Vui lòng quay về nhà câu lạc bộ ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        "title": "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please turn right around this bend, Sir.",
        "phonetic": "/pliːz tɜːrn raɪt əˈraʊnd ðɪs bend, sɜːr/",
        "options": [
            { "en": "A. Please turn right around this bend, Sir.", "vi": "Vui lòng rẽ phải qua khúc cua này ạ" },
            { "en": "B. Please turn left and drive fast, Sir.", "vi": "Vui lòng rẽ trái và lái xe nhanh ạ" },
            { "en": "C. Please stop in the middle of the road, Sir.", "vi": "Vui lòng dừng lại giữa đường ạ" },
            { "en": "D. Please park on the green, Sir.", "vi": "Vui lòng đỗ xe trên green ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        "title": "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please go straight to the next tee box, Sir.",
        "phonetic": "/pliːz ɡoʊ streɪt tə ðə nekst tiː bɑːks, sɜːr/",
        "options": [
            { "en": "A. Please go straight to the next tee box, Sir.", "vi": "Vui lòng đi thẳng tới tee box tiếp theo ạ" },
            { "en": "B. Please turn left before the bridge, Sir.", "vi": "Vui lòng rẽ trái trước khi qua cầu ạ" },
            { "en": "C. Please reverse the buggy car, Sir.", "vi": "Vui lòng lùi xe điện lại ạ" },
            { "en": "D. Please stop near the water hazard, Sir.", "vi": "Vui lòng dừng gần bẫy nước ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        "title": "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Slow down, please. It is a steep hill ahead, Sir.",
        "phonetic": "/sloʊ daʊn, pliːz. ɪt ɪz ə stiːp hɪl əˈhed, sɜːr/",
        "options": [
            { "en": "A. Slow down, please. It is a steep hill ahead, Sir.", "vi": "Đi chậm lại, phía trước dốc cao thưa anh" },
            { "en": "B. Drive faster, the road is very clear, Sir.", "vi": "Lái nhanh hơn, đường rất thoáng thưa anh" },
            { "en": "C. Turn off the cart lights right now, Sir.", "vi": "Tắt đèn xe đi ngay thưa anh" },
            { "en": "D. Stop the buggy on the slope, Sir.", "vi": "Dừng xe điện trên con dốc thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        "title": "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please stay on the cart path, Sir.",
        "phonetic": "/pliːz steɪ ɑːn ðə kɑːrt pæθ, sɜːr/",
        options: [
            { "en": "A. Please stay on the cart path, Sir.", "vi": "Vui lòng đi trên đường xe điện ạ" },
            { "en": "B. Please drive on the fairway grass, Sir.", "vi": "Vui lòng lái xe lên cỏ fairway ạ" },
            { "en": "C. Please park inside the sand bunker, Sir.", "vi": "Vui lòng đỗ xe trong bẫy cát ạ" },
            { "en": "D. Please walk across the green, Sir.", "vi": "Vui lòng đi bộ qua green ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please don't drive on the grass today, Sir.",
        phonetic: "/pliːz doʊnt draɪv ɑːn ðə ɡræs təˈdeɪ, sɜːr/",
        options: [
            { "en": "A. Please don't drive on the grass today, Sir.", "vi": "Vui lòng không lái xe lên cỏ hôm nay ạ" },
            { "en": "B. You can drive freely on the grass, Sir.", "vi": "Anh có thể tự do lái xe lên cỏ ạ" },
            { "en": "C. Please park your buggy on the green, Sir.", "vi": "Vui lòng đỗ xe điện trên green ạ" },
            { "en": "D. Drive faster across the fairway, Sir.", "vi": "Lái xe nhanh hơn qua fairway ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You can stop here, Sir. This is a good spot.",
        phonetic: "/juː kæn stɑːp hɪər, sɜːr. ðɪs ɪz ə ɡʊd spɑːt/",
        options: [
            { "en": "A. You can stop here, Sir. This is a good spot.", "vi": "Anh có thể dừng ở đây, vị trí này rất tiện ạ" },
            { "en": "B. Keep driving forward to the lake, Sir.", "vi": "Lái tiếp về phía hồ nước ạ" },
            { "en": "C. Reverse the cart into the trees, Sir.", "vi": "Lùi xe vào hàng cây ạ" },
            { "en": "D. Turn left onto the green, Sir.", "vi": "Rẽ trái lên green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Going backward, please, Sir.",
        phonetic: "/ˈɡoʊ.ɪŋ ˈbæk.wɚd, pliːz, sɜːr/",
        options: [
            { "en": "A. Going backward, please, Sir.", "vi": "Vui lòng cho xe đi lùi ạ" },
            { "en": "B. Going forward very fast, Sir.", "vi": "Cho xe tiến lên thật nhanh ạ" },
            { "en": "C. Turn right immediately, Sir.", "vi": "Rẽ phải ngay lập tức ạ" },
            { "en": "D. Stop the cart on the bridge, Sir.", "vi": "Dừng xe trên cầu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please set the brake, Sir. It's a bit of a slope.",
        phonetic: "/pliːz set ðə breɪk, sɜːr. ɪts ə bɪt əv ə sloʊp/",
        options: [
            { "en": "A. Please set the brake, Sir. It's a bit of a slope.", "vi": "Xin cài phanh vì chỗ này hơi dốc ạ" },
            { "en": "B. Release the handbrake immediately, Sir.", "vi": "Nhả phanh tay ra ngay ạ" },
            { "en": "C. Leave the cart unattended on the hill, Sir.", "vi": "Để xe không phanh trên dốc ạ" },
            { "en": "D. Drive down the steep hill fast, Sir.", "vi": "Lái xuống dốc thật nhanh ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please go straight after the bridge, Sir.",
        phonetic: "/pliːz ɡoʊ streɪt ˈæf.tər ðə brɪdʒ, sɜːr/",
        options: [
            { "en": "A. Please go straight after the bridge, Sir.", "vi": "Dạ xin đi thẳng sau khi qua cầu ạ" },
            { "en": "B. Please turn right before the bridge, Sir.", "vi": "Xin rẽ phải trước khi qua cầu ạ" },
            { "en": "C. Please stop the cart on the bridge, Sir.", "vi": "Xin dừng xe trên cầu ạ" },
            { "en": "D. Please reverse off the bridge, Sir.", "vi": "Xin lùi xe khỏi cầu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "It is a bit bumpy here, please be careful, Sir.",
        phonetic: "/ɪt ɪz ə bɪt ˈbʌm.pi hɪər, pliːz biː ˈker.fəl, sɜːr/",
        options: [
            { "en": "A. It is a bit bumpy here, please be careful, Sir.", "vi": "Chỗ này hơi xóc, xin cẩn thận ạ" },
            { "en": "B. The road is smooth, drive as fast as you want, Sir.", "vi": "Đường mượt, lái nhanh tùy thích ạ" },
            { "en": "C. Stop on the grass right now, Sir.", "vi": "Dừng trên cỏ ngay bây giờ ạ" },
            { "en": "D. Turn off the cart battery, Sir.", "vi": "Tắt bình điện xe đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, the battery is low. I will call Marshal for a new cart.",
        phonetic: "/sɜːr, ðə ˈbæt̬.ɚ.i ɪz loʊ. aɪ wɪl kɔːl ˈmɑːr.ʃəl fɔːr ə nuː kɑːrt/",
        options: [
            { "en": "A. The battery is low. I will call Marshal for a new cart, Sir.", "vi": "Bình điện yếu, em sẽ gọi đổi xe mới ạ" },
            { "en": "B. The battery is full, drive faster, Sir.", "vi": "Bình điện đầy, lái nhanh hơn ạ" },
            { "en": "C. Push the cart by yourself, Sir.", "vi": "Anh tự đẩy xe đi ạ" },
            { "en": "D. Walk back to the hotel, Sir.", "vi": "Đi bộ về khách sạn ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please maintain a safe distance with the front buggy, Sir.",
        phonetic: "/pliːz meɪnˈteɪn ə seɪf ˈdɪs.təns wɪð ðə frʌnt ˈbʌɡ.i, sɜːr/",
        options: [
            { "en": "A. Please maintain a safe distance with the front buggy, Sir.", "vi": "Vui lòng giữ khoảng cách an toàn với xe trước ạ" },
            { "en": "B. Drive right behind the front buggy, Sir.", "vi": "Lái áp sát ngay sau xe trước ạ" },
            { "en": "C. Hit the front buggy with your cart, Sir.", "vi": "Đâm vào xe trước ạ" },
            { "en": "D. Stop moving forever, Sir.", "vi": "Dừng di chuyển luôn ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please mind your speed around this bend, Sir.",
        phonetic: "/pliːz maɪnd jʊər spiːd əˈraʊnd ðɪs bend, sɜːr/",
        options: [
            { "en": "A. Please mind your speed around this bend, Sir.", "vi": "Xin chú ý tốc độ quanh khúc cua này ạ" },
            { "en": "B. Accelerate as hard as you can on the bend, Sir.", "vi": "Tăng tốc hết sức quanh khúc cua ạ" },
            { "en": "C. Stop in the middle of the turn, Sir.", "vi": "Dừng xe giữa khúc cua ạ" },
            { "en": "D. Drive backward around the bend, Sir.", "vi": "Lùi xe quanh khúc cua ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please keep focus on the road, Sir.",
        phonetic: "/pliːz kiːp ˈfoʊ.kəs ɑːn ðə roʊd, sɜːr/",
        options: [
            { "en": "A. Please keep focus on the road, Sir.", "vi": "Vui lòng tập trung nhìn đường ạ" },
            { "en": "B. Look at your phone while driving, Sir.", "vi": "Vừa lái xe vừa nhìn điện thoại ạ" },
            { "en": "C. Close your eyes while driving, Sir.", "vi": "Nhắm mắt lại khi lái xe ạ" },
            { "en": "D. Look at the sky, Sir.", "vi": "Nhìn lên trời đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The grass is wet today. Please park here on the path, Sir.",
        phonetic: "/ðə ɡræs ɪz wet təˈdeɪ. pliːz pɑːrk hɪər ɑːn ðə pæθ, sɜːr/",
        options: [
            { "en": "A. The grass is wet today. Please park here on the path, Sir.", "vi": "Cỏ ướt, xin đỗ trên đường nhựa ạ" },
            { "en": "B. Drive directly onto the green grass, Sir.", "vi": "Lái trực tiếp lên cỏ green ạ" },
            { "en": "C. Park inside the lake water, Sir.", "vi": "Đỗ xe dưới nước hồ ạ" },
            { "en": "D. The path is closed today, Sir.", "vi": "Đường nhựa đóng cửa hôm nay ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The pin is blue today, Sir. It is at the back of the green.",
        phonetic: "/ðə pɪn ɪz bluː təˈdeɪ, sɜːr. ɪt ɪz æt ðə bæk əv ðə ɡriːn/",
        options: [
            { "en": "A. The pin is blue today, Sir. It is at the back of the green.", "vi": "Hôm nay cờ màu xanh dương, cắm ở cuối green ạ" },
            { "en": "B. The pin is red today, Sir. It is a front pin.", "vi": "Hôm nay cờ màu đỏ, cắm ở đầu green ạ" },
            { "en": "C. The pin is white today, Sir. It is in the middle.", "vi": "Hôm nay cờ màu trắng, cắm ở giữa green ạ" },
            { "en": "D. There is no pin on the green today, Sir.", "vi": "Hôm nay không cắm cờ trên green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please watch out, there are red hazard stakes along the left side, Sir.",
        phonetic: "/pliːz wɑːtʃ aʊt, ðer ɑːr red ˈhæz.ɚd steɪks əˈlɑːŋ ðə left saɪd, sɜːr/",
        options: [
            { "en": "A. Please watch out, there are red hazard stakes along the left side, Sir.", "vi": "Lưu ý có cọc bẫy màu đỏ dọc bên trái ạ" },
            { "en": "B. There are white OB stakes along the right side, Sir.", "vi": "Có cọc OB màu trắng dọc bên phải ạ" },
            { "en": "C. The fairway is completely clear of stakes, Sir.", "vi": "Fairway hoàn toàn không có cọc ranh giới ạ" },
            { "en": "D. Turn off the buggy engine near the stakes, Sir.", "vi": "Tắt máy xe điện gần cọc ranh giới ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Your ball went over the white stakes. I am afraid it is OB, Sir.",
        phonetic: "/jʊər bɔːl went ˈoʊ.vɚ ðə waɪt steɪks. aɪ æm əˈfreɪd ɪt ɪz oʊ-biː, sɜːr/",
        options: [
            { "en": "A. Your ball went over the white stakes. I am afraid it is OB, Sir.", "vi": "Bóng qua cọc trắng, tôi e là bị OB rồi ạ" },
            { "en": "B. Your ball is safe in the middle of fairway, Sir.", "vi": "Bóng an toàn ở giữa fairway ạ" },
            { "en": "C. Your ball is on the green surface, Sir.", "vi": "Bóng đã lên mặt green rồi ạ" },
            { "en": "D. Nice shot over the bunker, Sir.", "vi": "Cú đánh tuyệt vời qua bẫy cát ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please drive slowly on the bridge, Sir.",
        phonetic: "/pliːz draɪv ˈsloʊ.li ɑːn ðə brɪdʒ, sɜːr/",
        options: [
            { "en": "A. Please drive slowly on the bridge, Sir.", "vi": "Vui lòng lái xe chậm qua cầu ạ" },
            { "en": "B. Speed up on the bridge, Sir.", "vi": "Tăng tốc khi qua cầu ạ" },
            { "en": "C. Stop the cart in the middle of the bridge, Sir.", "vi": "Dừng xe giữa cầu ạ" },
            { "en": "D. Turn off the engine on the bridge, Sir.", "vi": "Tắt máy trên cầu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please park the cart under the shade, Sir.",
        phonetic: "/pliːz pɑːrk ðə kɑːrt ˈʌn.dər ðə ʃeɪd, sɜːr/",
        options: [
            { "en": "A. Please park the cart under the shade, Sir.", "vi": "Xin đỗ xe dưới bóng râm ạ" },
            { "en": "B. Park the cart in direct sunlight, Sir.", "vi": "Đỗ xe trực tiếp dưới nắng ạ" },
            { "en": "C. Park the cart on the green, Sir.", "vi": "Đỗ xe trên green ạ" },
            { "en": "D. Leave the cart in the sand bunker, Sir.", "vi": "Để xe trong bẫy cát ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please mind the pedestrians walking ahead, Sir.",
        phonetic: "/pliːz maɪnd ðə pəˈdes.tri.ənz ˈwɑː.kɪŋ əˈhed, sɜːr/",
        options: [
            { "en": "A. Please mind the pedestrians walking ahead, Sir.", "vi": "Chú ý người đi bộ phía trước ạ" },
            { "en": "B. Honk loudly at pedestrians, Sir.", "vi": "Bóp còi to vào người đi bộ ạ" },
            { "en": "C. Drive fast towards pedestrians, Sir.", "vi": "Lái nhanh về phía người đi bộ ạ" },
            { "en": "D. Ignore the people walking, Sir.", "vi": "Phớt lờ người đi bộ ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please keep two hands on the steering wheel, Sir.",
        phonetic: "/pliːz kiːp tuː hændz ɑːn ðə ˈstɪr.ɪŋ wiːl, sɜːr/",
        options: [
            { "en": "A. Please keep two hands on the steering wheel, Sir.", "vi": "Vui lòng giữ hai tay trên vô-lăng ạ" },
            { "en": "B. Drive without hands, Sir.", "vi": "Lái xe không dùng tay ạ" },
            { "en": "C. Hold your phone with both hands while driving, Sir.", "vi": "Cầm điện thoại bằng hai tay khi lái ạ" },
            { "en": "D. Turn off the steering wheel, Sir.", "vi": "Tắt vô-lăng đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please turn on the cart headlights, it is getting dark, Sir.",
        phonetic: "/pliːz tɜːrn ɑːn ðə kɑːrt ˈhed.laɪts, ɪt ɪz ˈɡet.ɪŋ dɑːrk, sɜːr/",
        options: [
            { "en": "A. Please turn on the cart headlights, it is getting dark, Sir.", "vi": "Xin bật đèn xe điện vì trời tối ạ" },
            { "en": "B. Turn off all lights in the dark, Sir.", "vi": "Tắt hết đèn trong trời tối ạ" },
            { "en": "C. Drive backward in the dark, Sir.", "vi": "Lùi xe trong trời tối ạ" },
            { "en": "D. Leave the cart here overnight, Sir.", "vi": "Để xe ở đây qua đêm ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please make a U-turn carefully, Sir.",
        phonetic: "/pliːz meɪk ə juː.tɜːrn ˈker.fəl.i, sɜːr/",
        options: [
            { "en": "A. Please make a U-turn carefully, Sir.", "vi": "Vui lòng quay đầu xe cẩn thận ạ" },
            { "en": "B. Make a fast U-turn on the grass, Sir.", "vi": "Quay đầu xe thật nhanh trên cỏ ạ" },
            { "en": "C. Never turn the cart around, Sir.", "vi": "Không bao giờ được quay đầu xe ạ" },
            { "en": "D. Drive into the lake to turn around, Sir.", "vi": "Lái xuống hồ để quay đầu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The white stakes indicate Out of Bounds on the right side, Sir.",
        phonetic: "/ðə waɪt steɪks ˈɪn.də.keɪt aʊt əv baʊndz ɑːn ðə raɪt saɪd, sɜːr/",
        options: [
            { "en": "A. The white stakes indicate Out of Bounds on the right side, Sir.", "vi": "Cọc trắng chỉ ranh giới OB bên phải ạ" },
            { "en": "B. White stakes mean you can drive freely, Sir.", "vi": "Cọc trắng nghĩa là lái xe tự do ạ" },
            { "en": "C. White stakes mean water hazard ahead, Sir.", "vi": "Cọc trắng nghĩa là bẫy nước phía trước ạ" },
            { "en": "D. Remove the white stakes, Sir.", "vi": "Nhổ cọc màu trắng đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "mcq",
        title: "[4.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Yellow stakes mark a regular penalty area ahead, Sir.",
        phonetic: "/ˈjel.oʊ steɪks mɑːrk ə ˈreɡ.jə.lɚ ˈpen.əl.ti ˈer.i.ə əˈhead, sɜːr/",
        options: [
            { "en": "A. Yellow stakes mark a regular penalty area ahead, Sir.", "vi": "Cọc vàng đánh dấu khu vực phạt phía trước ạ" },
            { "en": "B. Yellow stakes mean free parking zone, Sir.", "vi": "Cọc vàng là khu vực đỗ xe miễn phí ạ" },
            { "en": "C. Yellow stakes show the fairway line, Sir.", "vi": "Cọc vàng chỉ đường fairway ạ" },
            { "en": "D. Drive over yellow stakes, Sir.", "vi": "Lái xe đè lên cọc vàng ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please turn left here, Sir.",
        phonetic: "/pliːz tɜːrn left hɪər, sɜːr/",
        displaySentence: "Please turn _______ here, Sir.",
        targetWord: "left",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please turn right here, Sir.",
        phonetic: "/pliːz tɜːrn raɪt hɪər, sɜːr/",
        displaySentence: "Please turn _______ here, Sir.",
        targetWord: "right",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please stay on the cart path, Sir.",
        phonetic: "/pliːz steɪ ɑːn ðə kɑːrt pæθ, sɜːr/",
        displaySentence: "Please stay on the cart _______, Sir.",
        targetWord: "path",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Slow down, please. It is a steep hill ahead, Sir.",
        phonetic: "/sloʊ daʊn, pliːz. ɪt ɪz ə stiːp hɪl əˈhed, sɜːr/",
        displaySentence: "Slow down, please. It is a steep _______ ahead, Sir.",
        targetWord: "hill",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please park the cart under the shade, Sir.",
        phonetic: "/pliːz pɑːrk ðə kɑːrt ˈʌn.dər ðə ʃeɪd, sɜːr/",
        displaySentence: "Please park the cart under the _______, Sir.",
        targetWord: "shade",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please drive slowly on the bridge, Sir.",
        phonetic: "/pliːz draɪv ˈsloʊ.li ɑːn ðə brɪdʒ, sɜːr/",
        displaySentence: "Please drive slowly on the _______, Sir.",
        targetWord: "bridge",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Yellow stakes mark a penalty area, Sir.",
        phonetic: "/ˈjel.oʊ steɪks mɑːrk ə ˈpen.əl.ti ˈer.i.ə, sɜːr/",
        displaySentence: "Yellow stakes mark a _______ area, Sir.",
        targetWord: "penalty",
        hint: "💡 Gợi ý: Từ gồm 7 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.1",
        "type": "fill",
        title: "[4.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "The white stakes show Out of Bounds, Sir.",
        phonetic: "/ðə waɪt steɪks ʃoʊ aʊt əv baʊndz, sɜːr/",
        displaySentence: "The _______ stakes show Out of Bounds, Sir.",
        targetWord: "white",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },

    // =========================================================================
    // SECTION 4.2: CẢNH BÁO NGUY HIỂM & CẢNH GIÁC (STAY ALERT) - 35 CÂU
    // =========================================================================
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "FORE! Cover your head, Sir!",
        phonetic: "/fɔːr! ˈkʌv.ər jʊər hed, sɜːr/",
        options: [
            { "en": "A. FORE! Cover your head, Sir!", "vi": "CÓ BÓNG! Che đầu lại thưa anh!" },
            { "en": "B. Look at the ball flying nicely, Sir.", "vi": "Nhìn bóng bay đẹp quá thưa anh" },
            { "en": "C. Good shot down the fairway, Sir.", "vi": "Cú đánh đẹp xuống fairway thưa anh" },
            { "en": "D. Take your time to putt, Sir.", "vi": "Từ tốn gạt bóng thưa anh" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "WATCH OUT! BALL!",
        phonetic: "/wɑːtʃ aʊt! bɔːl/",
        options: [
            { "en": "A. WATCH OUT! BALL!", "vi": "CẨN THẬN! BÓNG BAY!" },
            { "en": "B. NICE SHOT, SIR!", "vi": "CÚ ĐÁNH ĐẸP NÀY!" },
            { "en": "C. HOLE IN ONE, SIR!", "vi": "BÓNG LỌT HỐ NGAY CÚ ĐẦU!" },
            { "en": "D. WELCOME TO OUR COURSE!", "vi": "CHÀO MỪNG TỚI SÂN CỦA CHÚNG EM!" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Hold on a moment. The ground ahead looks a bit slippery, Sir.",
        phonetic: "/hoʊld ɑːn ə ˈmoʊ.mənt. ðə ɡraʊnd əˈhed lʊks ə bɪt ˈslɪp.ɚ.i, sɜːr/",
        options: [
            { "en": "A. The ground ahead looks a bit slippery, Sir.", "vi": "Mặt đất phía trước trông hơi trơn trượt ạ" },
            { "en": "B. The ground is completely dry and firm, Sir.", "vi": "Mặt đất hoàn toàn khô và cứng ạ" },
            { "en": "C. Drive as fast as you can on the mud, Sir.", "vi": "Lái thật nhanh trên bùn ạ" },
            { "en": "D. Walk without shoes on the wet grass, Sir.", "vi": "Đi bộ không giày trên cỏ ướt ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please be cautious, we've got some obstacles ahead, Sir.",
        phonetic: "/pliːz biː ˈkɑː.ʃəs, wiːv ɡɑːt səm ˈɑːb.stə.kəlz əˈhed, sɜːr/",
        options: [
            { "en": "A. Please be cautious, we've got obstacles ahead, Sir.", "vi": "Xin cẩn trọng có chướng ngại vật phía trước ạ" },
            { "en": "B. The road is completely clear ahead, Sir.", "vi": "Đường phía trước hoàn toàn quang đãng ạ" },
            { "en": "C. Drive with full speed into the bunker, Sir.", "vi": "Lái hết tốc lực vào bẫy cát ạ" },
            { "en": "D. Ignore all safety signs, Sir.", "vi": "Phớt lờ mọi biển cảnh báo an toàn ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you need medical assistance, Sir? I'll call clubhouse right away.",
        phonetic: "/duː juː niːd ˈmed.ɪ.kəl əˈsɪs.təns, sɜːr? aɪl kɔːl ˈklʌb.haʊs raɪt əˈweɪ/",
        options: [
            { "en": "A. Do you need medical assistance, Sir?", "vi": "Anh có cần hỗ trợ y tế không ạ?" },
            { "en": "B. Please keep playing without doctor, Sir.", "vi": "Xin tiếp tục chơi không cần bác sĩ ạ" },
            { "en": "C. Walk 5 kilometers to the hospital, Sir.", "vi": "Đi bộ 5 km tới bệnh viện ạ" },
            { "en": "D. You are fine, keep hitting, Sir.", "vi": "Anh ổn mà, đánh tiếp đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please stand behind the safety line, Sir.",
        phonetic: "/pliːz stænd bɪˈhaɪnd ðə ˈseɪf.ti laɪn, sɜːr/",
        options: [
            { "en": "A. Please stand behind the safety line, Sir.", "vi": "Xin đứng phía sau vạch an toàn ạ" },
            { "en": "B. Please stand right in front of the golfer, Sir.", "vi": "Xin đứng ngay trước mặt người chơi ạ" },
            { "en": "C. Touch the club during backswing, Sir.", "vi": "Chạm vào gậy khi người chơi vung gậy ạ" },
            { "en": "D. Stand inside the swing zone, Sir.", "vi": "Đứng bên trong vòng vung gậy ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Look out! There is a deep water hazard over there, Sir.",
        phonetic: "/lʊk aʊt! ðer ɪz ə diːp ˈwɔː.tər ˈhæz.ɚd ˈoʊ.vɚ ðer, sɜːr/",
        options: [
            { "en": "A. Look out! There is a deep water hazard over there, Sir.", "vi": "Coi chừng! Đằng kia có bẫy nước sâu ạ" },
            { "en": "B. Swim inside the lake water, Sir.", "vi": "Bơi xuống nước hồ đi ạ" },
            { "en": "C. The lake has no water today, Sir.", "vi": "Hồ không có nước hôm nay ạ" },
            { "en": "D. Hit the ball directly into the deep lake, Sir.", "vi": "Đánh bóng thẳng xuống hồ sâu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please stay away from the cliff edge, Sir. It's dangerous.",
        phonetic: "/pliːz steɪ əˈweɪ frəm ðə klɪf edʒ, sɜːr. ɪts ˈdeɪn.dʒɚ.əs/",
        options: [
            { "en": "A. Please stay away from the cliff edge, Sir.", "vi": "Xin tránh xa mép vách đá ạ" },
            { "en": "B. Jump off the cliff for fun, Sir.", "vi": "Nhảy xuống vách đá cho vui ạ" },
            { "en": "C. Drive the buggy on the edge, Sir.", "vi": "Lái xe điện sát mép vách ạ" },
            { "en": "D. Stand on one foot near the edge, Sir.", "vi": "Đứng 1 chân gần mép ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The front group is still in range. Please wait, Sir.",
        phonetic: "/ðə frʌnt ɡruːp ɪz stɪl ɪn reɪndʒ. pliːz weɪt, sɜːr/",
        options: [
            { "en": "A. The front group is still in range. Please wait, Sir.", "vi": "Nhóm trước trong tầm đánh, xin chờ ạ" },
            { "en": "B. Hit your ball right at the front group, Sir.", "vi": "Đánh bóng thẳng vào nhóm trước ạ" },
            { "en": "C. Shout at the front group to run, Sir.", "vi": "Hét vào mặt nhóm trước ạ" },
            { "en": "D. The fairway is empty, Sir.", "vi": "Fairway hoàn toàn trống ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The green is clear now. You can hit, Sir.",
        phonetic: "/ðə ɡriːn ɪz klɪər naʊ. juː kæn hɪt, sɜːr/",
        options: [
            { "en": "A. The green is clear now. You can hit, Sir.", "vi": "Green đã trống rồi, anh có thể đánh ạ" },
            { "en": "B. The green is full of players, don't hit, Sir.", "vi": "Green đầy người, đừng đánh ạ" },
            { "en": "C. Wait 1 hour for the green to clear, Sir.", "vi": "Chờ 1 tiếng cho green trống ạ" },
            { "en": "D. The pin was stolen, Sir.", "vi": "Cột cờ bị trộm rồi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "My pleasure, Sir!",
        phonetic: "/maɪ ˈpleʒ.ɚ, sɜːr/",
        options: [
            { "en": "A. My pleasure, Sir!", "vi": "Rất hân hạnh được phục vụ ông ạ!" },
            { "en": "B. You must pay extra for this, Sir.", "vi": "Ông phải trả thêm tiền cho việc này ạ" },
            { "en": "C. Don't touch my golf bag, Sir.", "vi": "Đừng chạm vào túi gậy của tôi ạ" },
            { "en": "D. I don't care, Sir.", "vi": "Tôi không quan tâm ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Pardon me, Sir?",
        phonetic: "/ˈpɑːr.dən miː, sɜːr/",
        options: [
            { "en": "A. Pardon me, Sir?", "vi": "Xin lỗi ông nói gì cơ ạ?" },
            { "en": "B. Speak louder, I cannot hear, Sir.", "vi": "Nói to lên tôi không nghe thấy ạ" },
            { "en": "C. You are speaking wrongly, Sir.", "vi": "Ông đang nói sai rồi ạ" },
            { "en": "D. Stop talking now, Sir.", "vi": "Dừng nói chuyện ngay đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Are you feeling hurt anywhere, Sir? We have a first aid kit on the buggy.",
        phonetic: "/ɑːr juː ˈfiː.lɪŋ hɜːrt ˈen.i.wer, sɜːr? wiː hæv ə ˌfɜːrst ˈeɪd kɪt ɑːn ðə ˈbʌɡ.i/",
        options: [
            { "en": "A. Are you feeling hurt anywhere, Sir? We have a first aid kit on the buggy.", "vi": "Ông có bị đau ở đâu không? Có túi sơ cứu trên xe ạ" },
            { "en": "B. Walk faster to finish 18 holes, Sir.", "vi": "Đi nhanh lên cho xong 18 hố ạ" },
            { "en": "C. You are too weak to play golf, Sir.", "vi": "Ông yếu quá không chơi golf được đâu ạ" },
            { "en": "D. Go home by yourself, Sir.", "vi": "Tự đi bộ về nhà đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "After you, Sir.",
        phonetic: "/ˈæf.tər juː, sɜːr/",
        options: [
            { "en": "A. After you, Sir.", "vi": "Xin mời ông đi trước ạ" },
            { "en": "B. I will go first, wait for me, Sir.", "vi": "Tôi sẽ đi trước, chờ tôi ạ" },
            { "en": "C. Get out of my way, Sir.", "vi": "Tránh đường cho tôi đi ạ" },
            { "en": "D. Stop moving, Sir.", "vi": "Dừng di chuyển lại ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Caution! A stray ball is coming from the next fairway, Sir!",
        phonetic: "/ˈkɑː.ʃən! ə streɪ bɔːl ɪz ˈkʌm.ɪŋ frəm ðə nekst ˈfer.weɪ, sɜːr/",
        options: [
            { "en": "A. Caution! A stray ball is coming from next fairway, Sir!", "vi": "Cẩn thận! Có bóng lạc từ fairway bên cạnh ạ" },
            { "en": "B. Catch the flying ball with your hands, Sir.", "vi": "Dùng tay bắt quả bóng đang bay ạ" },
            { "en": "C. Walk towards the stray ball, Sir.", "vi": "Đi về phía bóng lạc ạ" },
            { "en": "D. Look up high at the flying ball, Sir.", "vi": "Ngước lên cao nhìn bóng bay ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Excuse me, Sir. Please do not stand directly in front of the golfer.",
        phonetic: "/ɪkˈskjuːz miː, sɜːr. pliːz duː nɑːt stænd dɪˈrekt.li ɪn frʌnt əv ðə ˈɡɑːl.fɚ/",
        options: [
            { "en": "A. Please do not stand directly in front of the golfer, Sir.", "vi": "Xin không đứng trực diện trước người đánh ạ" },
            { "en": "B. Please stand right in front of the golf ball, Sir.", "vi": "Xin đứng ngay phía trước bóng ạ" },
            { "en": "C. Walk around during the backswing, Sir.", "vi": "Đi lại xung quanh khi họ vung gậy ạ" },
            { "en": "D. Shout loudly when the golfer hits, Sir.", "vi": "Hét to khi người chơi đánh bóng ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please turn off your phone or switch to silent mode, Sir.",
        phonetic: "/pliːz tɜːrn ɑːf jʊər foʊn ɔːr swɪtʃ tə ˈsaɪ.lənt moʊd, sɜːr/",
        options: [
            { "en": "A. Please turn off your phone or switch to silent mode, Sir.", "vi": "Vui lòng tắt máy hoặc chuyển chế độ im lặng ạ" },
            { "en": "B. Play loud music on your phone now, Sir.", "vi": "Mở nhạc to trên điện thoại bây giờ ạ" },
            { "en": "C. Make a phone call during putting, Sir.", "vi": "Gọi điện thoại lúc gạt bóng ạ" },
            { "en": "D. Throw your phone onto the green, Sir.", "vi": "Ném điện thoại lên green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Be careful, Sir! The grass near the pond is soft and muddy.",
        phonetic: "/biː ˈker.fəl, sɜːr! ðə ɡræs nɪər ðə pɑːnd ɪz sɑːft ænd ˈmʌd.i/",
        options: [
            { "en": "A. Be careful, Sir! The grass near the pond is soft and muddy.", "vi": "Cẩn thận! Cỏ gần ao rất mềm và lầy ạ" },
            { "en": "B. The grass near the pond is dry and hard, Sir.", "vi": "Cỏ gần ao khô và cứng ạ" },
            { "en": "C. Run fast into the muddy area, Sir.", "vi": "Chạy nhanh vào vùng lầy lội ạ" },
            { "en": "D. Park the buggy inside the pond, Sir.", "vi": "Đỗ xe điện trong lòng ao ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, there is a horn sounding for dangerous weather situation.",
        phonetic: "/sɜːr, ðer ɪz ə hɔːrn ˈsaʊn.dɪŋ fɔːr ˈdeɪn.dʒɚ.əs ˈweð.ɚ ˌsɪtʃ.uˈeɪ.ʃən/",
        options: [
            { "en": "A. There is a horn sounding for dangerous weather, Sir.", "vi": "Có tiếng còi báo hiệu thời tiết nguy hiểm ạ" },
            { "en": "B. The horn means you win the tournament, Sir.", "vi": "Tiếng còi nghĩa là anh thắng giải ạ" },
            { "en": "C. Ignore the horn and play 18 holes, Sir.", "vi": "Lờ còi đi và đánh tiếp 18 hố ạ" },
            { "en": "D. The horn is for lunch time, Sir.", "vi": "Tiếng còi báo giờ ăn trưa ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please keep quiet while the other player is preparing to hit, Sir.",
        phonetic: "/pliːz kiːp kwaɪət waɪl ðə ˈʌð.ɚ ˈpleɪ.ɚ ɪz prɪˈper.ɪŋ tə hɪt, sɜːr/",
        options: [
            { "en": "A. Please keep quiet while the other player prepares to hit, Sir.", "vi": "Xin giữ trật tự khi người khác chuẩn bị đánh ạ" },
            { "en": "B. Speak loudly when the player prepares to hit, Sir.", "vi": "Nói thật to khi họ chuẩn bị đánh ạ" },
            { "en": "C. Clap hands before the swing, Sir.", "vi": "Vỗ tay trước khi vung gậy ạ" },
            { "en": "D. Sing a song on the tee box, Sir.", "vi": "Hát một bài trên tee box ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please stay behind the line of sight, Sir.",
        phonetic: "/pliːz steɪ bɪˈhaɪnd ðə laɪn əv saɪt, sɜːr/",
        options: [
            { "en": "A. Please stay behind the line of sight, Sir.", "vi": "Vui lòng đứng sau tầm nhìn ạ" },
            { "en": "B. Stand directly in the putting line, Sir.", "vi": "Đứng ngay trên đường gạt bóng ạ" },
            { "en": "C. Cast your shadow over the hole, Sir.", "vi": "Tạo bóng râm đè lên lỗ gôn ạ" },
            { "en": "D. Walk across the line of putt, Sir.", "vi": "Đi cắt qua đường gạt bóng ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I have cold water and fresh towels in the cooler, Sir.",
        phonetic: "/aɪ hæv koʊld ˈwɔː.tər ænd freʃ ˈtaʊ.əlz ɪn ðə ˈkuː.lɚ, sɜːr/",
        options: [
            { "en": "A. I have cold water and fresh towels in the cooler, Sir.", "vi": "Em có nước lạnh và khăn mát trong thùng đá ạ" },
            { "en": "B. I have no water or towels today, Sir.", "vi": "Hôm nay em không có nước lẫn khăn ạ" },
            { "en": "C. Buy your own drink at clubhouse, Sir.", "vi": "Anh tự mua nước ở nhà câu lạc bộ đi ạ" },
            { "en": "D. The cooler is broken, Sir.", "vi": "Thùng đá bị hỏng rồi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "How can I help you, Sir?",
        phonetic: "/haʊ kæn aɪ help juː, sɜːr/",
        options: [
            { "en": "A. How can I help you, Sir?", "vi": "Em có thể giúp gì cho anh ạ?" },
            { "en": "B. What do you want from me, Sir?", "vi": "Anh muốn gì ở em ạ?" },
            { "en": "C. Do it yourself, Sir.", "vi": "Anh tự làm đi ạ" },
            { "en": "D. Go away please, Sir.", "vi": "Mời anh đi ra chỗ khác ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Certainly, Sir. Right away!",
        phonetic: "/ˈsɝː.tən.li, sɜːr. raɪt əˈweɪ/",
        options: [
            { "en": "A. Certainly, Sir. Right away!", "vi": "Tất nhiên rồi, em làm ngay ạ!" },
            { "en": "B. No, I cannot do that, Sir.", "vi": "Không, em không làm đâu ạ" },
            { "en": "C. Wait 2 hours please, Sir.", "vi": "Chờ 2 tiếng nữa nhé ạ" },
            { "en": "D. Forget about it, Sir.", "vi": "Quên chuyện đó đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thank you very much for your kindness, Sir!",
        phonetic: "/θæŋk juː ˈver.i mʌtʃ fɔːr jʊər ˈkaɪnd.nəs, sɜːr/",
        options: [
            { "en": "A. Thank you very much for your kindness, Sir!", "vi": "Cảm ơn anh rất nhiều vì sự tốt bụng ạ!" },
            { "en": "B. You don't need to thank me, Sir.", "vi": "Không cần cảm ơn em đâu ạ" },
            { "en": "C. Give me money now, Sir.", "vi": "Đưa tiền cho em ngay ạ" },
            { "en": "D. I don't care, Sir.", "vi": "Em không quan tâm ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "mcq",
        title: "[4.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am so sorry for the inconvenience, Sir.",
        phonetic: "/aɪ æm soʊ ˈsɑː.ri fɔːr ðə ˌɪn.kənˈviː.ni.əns, sɜːr/",
        options: [
            { "en": "A. I am so sorry for the inconvenience, Sir.", "vi": "Em rất xin lỗi vì sự bất tiện này ạ" },
            { "en": "B. That's your problem, not mine, Sir.", "vi": "Đó là vấn đề của anh chứ ạ" },
            { "en": "C. I am happy that you feel uncomfortable, Sir.", "vi": "Em vui vì anh thấy không thoải mái ạ" },
            { "en": "D. Don't complain to me, Sir.", "vi": "Đừng phàn nàn với em ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "FORE! Cover your head, Sir!",
        phonetic: "/fɔːr! ˈkʌv.ər jʊər hed, sɜːr/",
        displaySentence: "_______! Cover your head, Sir!",
        targetWord: "FORE",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please cover your head, Sir!",
        phonetic: "/pliːz ˈkʌv.ər jʊər hed, sɜːr/",
        displaySentence: "Please cover your _______, Sir!",
        targetWord: "head",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please turn off your phone or switch to silent mode, Sir.",
        phonetic: "/pliːz tɜːrn ɑːf jʊər foʊn ɔːr swɪtʃ tə ˈsaɪ.lənt moʊd, sɜːr/",
        displaySentence: "Please turn off your phone or switch to _______ mode, Sir.",
        targetWord: "silent",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please keep quiet while the player is hitting, Sir.",
        phonetic: "/pliːz kiːp kwaɪət waɪl ðə ˈpleɪ.ɚ ɪz ˈhɪt.ɪŋ, sɜːr/",
        displaySentence: "Please keep _______ while the player is hitting, Sir.",
        targetWord: "quiet",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "I am so sorry for the inconvenience, Sir.",
        phonetic: "/aɪ æm soʊ ˈsɑː.ri fɔːr ðə ˌɪn.kənˈviː.ni.əns, sɜːr/",
        displaySentence: "I am so sorry for the _______, Sir.",
        targetWord: "inconvenience",
        hint: "💡 Gợi ý: Từ gồm 13 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "How can I help you, Sir?",
        phonetic: "/haʊ kæn aɪ help juː, sɜːr/",
        displaySentence: "How can I _______ you, Sir?",
        targetWord: "help",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Certainly, Sir. Right away!",
        phonetic: "/ˈsɝː.tən.li, sɜːr. raɪt əˈweɪ/",
        displaySentence: "_______, Sir. Right away!",
        targetWord: "Certainly",
        hint: "💡 Gợi ý: Từ gồm 9 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "My pleasure, Sir!",
        phonetic: "/maɪ ˈpleʒ.ɚ, sɜːr/",
        displaySentence: "My _______, Sir!",
        targetWord: "pleasure",
        hint: "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.2",
        "type": "fill",
        title: "[4.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "After you, Sir.",
        phonetic: "/ˈæf.tər juː, sɜːr/",
        displaySentence: "After _______, Sir.",
        targetWord: "you",
        hint: "💡 Gợi ý: Từ gồm 3 ký tự."
    },

    // =========================================================================
    // SECTION 4.3: QUY TRÌNH & THỦ TỤC TRÊN SÂN (ON-COURSE PROCEDURES) - 35 CÂU
    // =========================================================================
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Your ball is in casual water, Sir. You can take free relief.",
        phonetic: "/jʊər bɔːl ɪz ɪn ˈkæʒ.u.əl ˈwɔː.tər, sɜːr. juː kæn teɪk friː rɪˈliːf/",
        options: [
            { "en": "A. You can take free relief from casual water, Sir.", "vi": "Được giải thoát miễn phí khỏi nước tạm thời ạ" },
            { "en": "B. You get 2 penalty strokes, Sir.", "vi": "Anh bị phạt 2 gậy ạ" },
            { "en": "C. You must play the ball underwater, Sir.", "vi": "Phải đánh bóng từ dưới nước ạ" },
            { "en": "D. Your ball is disqualified, Sir.", "vi": "Bóng bị tước quyền thi đấu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, for unplayable ball, you have 3 options with 1 penalty stroke.",
        phonetic: "/sɜːr, fɔːr ʌnˈpleɪ.ə.bəl bɔːl, juː hæv θriː ˈɑːp.ʃənz wɪð wʌn ˈpen.əl.ti stroʊk/",
        options: [
            { "en": "A. You have 3 options with 1 penalty stroke, Sir.", "vi": "Có 3 lựa chọn kèm 1 gậy phạt thưa anh" },
            { "en": "B. You have 10 options with no penalty, Sir.", "vi": "Có 10 lựa chọn không phạt gậy ạ" },
            { "en": "C. You must stop playing golf today, Sir.", "vi": "Phải dừng chơi golf hôm nay ạ" },
            { "en": "D. You must buy a new golf bag, Sir.", "vi": "Phải mua túi gậy mới ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please drop the ball from knee height, Sir.",
        phonetic: "/pliːz drɑːp ðə bɔːl frəm niː haɪt, sɜːr/",
        options: [
            { "en": "A. Please drop the ball from knee height, Sir.", "vi": "Vui lòng thả bóng từ độ cao ngang đầu gối ạ" },
            { "en": "B. Throw the ball high into the air, Sir.", "vi": "Ném bóng cao lên không trung ạ" },
            { "en": "C. Place the ball directly inside the hole, Sir.", "vi": "Đặt bóng trực tiếp vào trong lỗ ạ" },
            { "en": "D. Drop the ball from shoulder height, Sir.", "vi": "Thả bóng từ độ cao ngang vai ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Loose leaves and stones can be removed without penalty, Sir.",
        phonetic: "/luːs liːvz ænd stoʊnz kæn biː rɪˈmuːvd wɪˈðaʊt ˈpen.əl.ti, sɜːr/",
        options: [
            { "en": "A. Leaves and stones can be removed without penalty, Sir.", "vi": "Lá cây và đá nhặt đi không bị phạt ạ" },
            { "en": "B. Removing stones costs 5 penalty strokes, Sir.", "vi": "Nhặt đá bị phạt 5 gậy ạ" },
            { "en": "C. You cannot touch any leaves on the course, Sir.", "vi": "Không được chạm vào lá cây ạ" },
            { "en": "D. Break the tree branches, Sir.", "vi": "Bẻ cành cây đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You have more than 14 clubs, Sir. Let's remove excess ones.",
        phonetic: "/juː hæv mɔːr ðæn ˌfɔːrˈtiːn klʌbz, sɜːr. lets rɪˈmuːv ɪkˈses wʌnz/",
        options: [
            { "en": "A. Let's remove excess clubs to avoid penalties, Sir.", "vi": "Bỏ gậy thừa ra để tránh bị phạt gậy ạ" },
            { "en": "B. You can carry 30 clubs in your bag, Sir.", "vi": "Anh mang 30 cây gậy thoải mái ạ" },
            { "en": "C. Throw all iron clubs away, Sir.", "vi": "Ném hết gậy sắt đi ạ" },
            { "en": "D. Hide the extra clubs under the grass, Sir.", "vi": "Giấu gậy thừa dưới cỏ ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The relief area is one club-length from reference point, Sir.",
        phonetic: "/ðə rɪˈliːf ˈer.i.ə ɪz wʌn klʌb leŋkθ frəm ˈref.ɚ.əns pɔɪnt, sɜːr/",
        options: [
            { "en": "A. The relief area is one club-length, Sir.", "vi": "Vùng giải thoát trong phạm vi 1 chiều dài gậy ạ" },
            { "en": "B. The relief area is 100 yards, Sir.", "vi": "Vùng giải thoát dài 100 yard ạ" },
            { "en": "C. Drop the ball on the green surface, Sir.", "vi": "Thả bóng trên mặt green ạ" },
            { "en": "D. Drop the ball inside the lake, Sir.", "vi": "Thả bóng dưới hồ ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You can drop within two club-lengths, no closer to the hole, Sir.",
        phonetic: "/juː kæn drɑːp wɪðˈɪn tuː klʌb leŋkθs, noʊ ˈkloʊ.sɚ tə ðə hoʊl, sɜːr/",
        options: [
            { "en": "A. You can drop within two club-lengths, no closer to hole, Sir.", "vi": "Thả bóng trong 2 chiều dài gậy, không gần lỗ hơn ạ" },
            { "en": "B. Drop the ball 50 meters closer to the hole, Sir.", "vi": "Thả bóng gần lỗ hơn 50 mét ạ" },
            { "en": "C. Place the ball right next to the pin, Sir.", "vi": "Đặt bóng ngay cạnh cờ ạ" },
            { "en": "D. Throw the ball into the cup, Sir.", "vi": "Ném bóng vào lỗ gôn ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I'm sorry, Sir. I will be more concentrated on your game.",
        phonetic: "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl biː mɔːr ˈkɑːn.sən.treɪ.t̬ɪd ɑːn jʊər ɡeɪm/",
        options: [
            { "en": "A. I'm sorry, Sir. I will be more concentrated.", "vi": "Em xin lỗi, em sẽ tập trung hơn ạ" },
            { "en": "B. I am fully focused, you are wrong, Sir.", "vi": "Em đang tập trung mà, anh sai rồi ạ" },
            { "en": "C. I want to sleep now, Sir.", "vi": "Em muốn đi ngủ bây giờ ạ" },
            { "en": "D. Look at other players, Sir.", "vi": "Nhìn sang người chơi khác đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will repair your pitch mark on the green, Sir.",
        phonetic: "/aɪ wɪl rɪˈper jʊər pɪtʃ mɑːrk ɑːn ðə ɡriːn, sɜːr/",
        options: [
            { "en": "A. I will repair your pitch mark on the green, Sir.", "vi": "Em sẽ sửa vết bóng đè trên green ạ" },
            { "en": "B. Dig a big hole on the green, Sir.", "vi": "Đào hố to trên green ạ" },
            { "en": "C. Leave the pitch mark damaged, Sir.", "vi": "Dể nguyên vết hỏng trên green ạ" },
            { "en": "D. Clean your golf cart wheels, Sir.", "vi": "Lau bánh xe điện ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Let me rake the bunker clean for you, Sir.",
        phonetic: "/let miː reɪk ðə ˈbʌŋ.kər kliːn fɔːr juː, sɜːr/",
        options: [
            { "en": "A. Let me rake the bunker clean for you, Sir.", "vi": "Để em cào phẳng bẫy cát cho anh ạ" },
            { "en": "B. Leave your footprints in the sand, Sir.", "vi": "Để lại vết chân trong cát ạ" },
            { "en": "C. Throw sand at other golfers, Sir.", "vi": "Ném cát vào người chơi khác ạ" },
            { "en": "D. Fill the bunker with water, Sir.", "vi": "Đổ nước đầy bẫy cát ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Are you enjoying the game today, Sir?",
        phonetic: "/ɑːr juː ɪnˈdʒɔɪ.ɪŋ ðə ɡeɪm təˈdeɪ, sɜːr/",
        options: [
            { "en": "A. Are you enjoying the game today, Sir?", "vi": "Ông có đang tận hưởng trận đấu hôm nay không ạ?" },
            { "en": "B. Why are you playing so badly today, Sir?", "vi": "Tới sao hôm nay ông đánh tệ thế ạ?" },
            { "en": "C. Do you want to stop playing now, Sir?", "vi": "Ông có muốn dừng chơi bây giờ không ạ?" },
            { "en": "D. How much is your golf shoes, Sir?", "vi": "Đôi giày golf của ông bao nhiêu tiền ạ?" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I like your outfit today. It looks very professional!",
        phonetic: "/aɪ laɪk jʊər ˈaʊt.fɪt təˈdeɪ. ɪt lʊks ˈver.i prəˈfeʃ.ən.əl/",
        options: [
            { "en": "A. I like your outfit today. It looks very professional!", "vi": "Tôi thích bộ đồ hôm nay, nhìn rất chuyên nghiệp ạ!" },
            { "en": "B. Your outfit is so strange, Sir.", "vi": "Trang phục của ông lạ đời quá ạ" },
            { "en": "C. Buy new clothes at the proshop, Sir.", "vi": "Đi mua quần áo mới ở proshop đi ạ" },
            { "en": "D. Your clothes are dirty, Sir.", "vi": "Quần áo của ông bị bẩn rồi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The sun is quite strong now, Sir. You look a bit tired. Would you like to take a short rest?",
        phonetic: "/ðə sʌn ɪz kwaɪt strɑːŋ naʊ, sɜːr. juː lʊk ə bɪt taɪərd. wʊd juː laɪk tə teɪk ə ʃɔːrt rest/",
        options: [
            { "en": "A. The sun is strong, you look tired. Would you like a short rest, Sir?", "vi": "Nắng gắt trông ông hơi mệt, ông muốn nghỉ chút không ạ?" },
            { "en": "B. Run faster under the sun, Sir.", "vi": "Chạy nhanh hơn dưới nắng đi ạ" },
            { "en": "C. Stand under the sun for 2 hours, Sir.", "vi": "Đứng dưới nắng 2 tiếng đi ạ" },
            { "en": "D. No rest allowed on this hole, Sir.", "vi": "Không được nghỉ ở hố này đâu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "We are approaching the Kiosk House, Sir. Our fresh coconut is very refreshing today. Would you like to try one?",
        phonetic: "/wiː ɑːr əˈproʊ.tʃɪŋ ðə ˈkiː.ɑːsk haʊs, sɜːr. aʊər freʃ ˈkoʊ.kə.nʌt ɪz ˈver.i rɪˈfreʃ.ɪŋ təˈdeɪ/",
        options: [
            { "en": "A. We are approaching Kiosk. Fresh coconut is refreshing, try one, Sir?", "vi": "Sắp tới Kiosk, dừa tươi rất mát, ông dùng thử không ạ?" },
            { "en": "B. The Kiosk is closed today, Sir.", "vi": "Nhà chòi Kiosk hôm nay đóng cửa rồi ạ" },
            { "en": "C. Don't buy anything at Kiosk, Sir.", "vi": "Đừng mua gì ở Kiosk thưa ông" },
            { "en": "D. Drink lake water instead, Sir.", "vi": "Uống nước hồ thay thế đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please replace your divot and press it down with your foot, Sir.",
        phonetic: "/pliːz rɪˈpleɪs jʊər ˈdɪv.ət ænd pres ɪt daʊn wɪð jʊər fʊt, sɜːr/",
        options: [
            { "en": "A. Please replace your divot and press it down, Sir.", "vi": "Đặt lại mảng cỏ lật và dẫm chân xuống ạ" },
            { "en": "B. Throw the divot into the lake, Sir.", "vi": "Ném mảng cỏ xuống hồ ạ" },
            { "en": "C. Leave the divot hole open, Sir.", "vi": "Dể nguyên vết hỏng trên green ạ" },
            { "en": "D. Take the divot home, Sir.", "vi": "Mang mảng cỏ về nhà ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please fill the divot hole with sand mixture, Sir.",
        phonetic: "/pliːz fɪl ðə ˈdɪv.ət hoʊl wɪð sænd ˈmɪks.tʃɚ, sɜːr/",
        options: [
            { "en": "A. Please fill the divot hole with sand mixture, Sir.", "vi": "Xin đổ cát vào hố cỏ bị tróc ạ" },
            { "en": "B. Fill the hole with water, Sir.", "vi": "Đổ nước đầy hố tróc cỏ ạ" },
            { "en": "C. Dig the hole deeper with a club, Sir.", "vi": "Đào hố sâu hơn bằng gậy ạ" },
            { "en": "D. Put a golf ball inside the divot hole, Sir.", "vi": "Đặt bóng vào hố tróc cỏ ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, please do not step on the line of putt.",
        phonetic: "/sɜːr, pliːz duː nɑːt step ɑːn ðə laɪn əv pʌt/",
        options: [
            { "en": "A. Sir, please do not step on the line of putt.", "vi": "Xin vui lòng không giẫm lên đường gạt bóng ạ" },
            { "en": "B. Step heavily on the putting line, Sir.", "vi": "Giẫm mạnh lên đường gạt bóng ạ" },
            { "en": "C. Run across the putting green, Sir.", "vi": "Chạy qua mặt green ạ" },
            { "en": "D. Jump on the green surface, Sir.", "vi": "Nhảy trên mặt green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "May I attend the flagstick for you, Sir?",
        phonetic: "/meɪ aɪ əˈtend ðə ˈflæɡ.stɪk fɔːr juː, sɜːr/",
        options: [
            { "en": "A. May I attend the flagstick for you, Sir?", "vi": "Em xin phép giữ cờ cho anh nhé ạ?" },
            { "en": "B. Should I throw the flagstick into the lake, Sir?", "vi": "Em ném cờ xuống hồ nhé ạ?" },
            { "en": "C. Can I take the flagstick home, Sir?", "vi": "Em mang cờ về nhà được không ạ?" },
            { "en": "D. Leave the flagstick lying on the green, Sir.", "vi": "Vứt cờ nằm trên green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will mark your ball on the green now, Sir.",
        phonetic: "/aɪ wɪl mɑːrk jʊər bɔːl ɑːn ðə ɡriːn naʊ, sɜːr/",
        options: [
            { "en": "A. I will mark your ball on the green now, Sir.", "vi": "Em sẽ đánh dấu bóng trên green cho anh ạ" },
            { "en": "B. I will kick your ball off the green, Sir.", "vi": "Em sẽ đá bóng khỏi green ạ" },
            { "en": "C. Clean your shoes on the green, Sir.", "vi": "Lau giày trên green ạ" },
            { "en": "D. Pick up the ball without marking, Sir.", "vi": "Nhặt bóng lên không cần đánh dấu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Let me clean your golf ball before you putt, Sir.",
        phonetic: "/let miː kliːn jʊər ɡɑːlf bɔːl bɪˈfɔːr juː pʌt, sɜːr/",
        options: [
            { "en": "A. Let me clean your golf ball before you putt, Sir.", "vi": "Để em lau bóng sạch trước khi anh gạt ạ" },
            { "en": "B. Throw dirty mud on your ball, Sir.", "vi": "Trát bùn bẩn vào bóng ạ" },
            { "en": "C. Swap your ball with another ball, Sir.", "vi": "Tráo bóng của anh lấy bóng khác ạ" },
            { "en": "D. Put the ball in your pocket, Sir.", "vi": "Cất bóng vào túi quần ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Have you played on our course before, Sir?",
        phonetic: "/hæv juː pleɪd ɑːn aʊər kɔːrs bɪˈfɔːr, sɜːr/",
        options: [
            { "en": "A. Have you played on our course before, Sir?", "vi": "Anh từng chơi trên sân em trước đây chưa ạ?" },
            { "en": "B. Do you know how to swing a club, Sir?", "vi": "Anh có biết vung gậy không ạ?" },
            { "en": "C. Is this your first time playing golf ever, Sir?", "vi": "Đây là lần đầu tiên anh chơi golf đúng không ạ?" },
            { "en": "D. How much money do you earn per month, Sir?", "vi": "Thu nhập mỗi tháng của anh là bao nhiêu ạ?" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "How do you feel about the green speed today, Sir?",
        phonetic: "/haʊ duː juː fiːl əˈbaʊt ðə ɡriːn spiːd təˈdeɪ, sɜːr/",
        options: [
            { "en": "A. How do you feel about the green speed today, Sir?", "vi": "Anh thấy tốc độ green hôm nay thế nào ạ?" },
            { "en": "B. Is the green too green today, Sir.", "vi": "Mặt green hôm nay có quá xanh không ạ?" },
            { "en": "C. Why is the green so round, Sir?", "vi": "Tại sao green lại tròn thế ạ?" },
            { "en": "D. Do you want to cut the green grass yourself, Sir?", "vi": "Anh có muốn tự cắt cỏ green không ạ?" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Would you like some cold tea or electrolyte drink, Sir?",
        phonetic: "/wʊd juː laɪk səm koʊld tiː ɔːr iˈlek.trə.laɪt drɪŋk, sɜːr/",
        options: [
            { "en": "A. Would you like cold tea or electrolyte drink, Sir?", "vi": "Anh muốn dùng trà lạnh hay nước điện giải ạ?" },
            { "en": "B. Drink hot boiled water only, Sir.", "vi": "Chỉ uống nước sôi nóng thôi ạ" },
            { "en": "C. Do not drink anything during 18 holes, Sir.", "vi": "Không được uống gì trong suốt 18 hố ạ" },
            { "en": "D. Buy hot soup at the kiosk, Sir.", "vi": "Mua súp nóng ở chòi kiosk ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "mcq",
        title: "[4.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The weather is very nice today for a good round of golf, Sir.",
        phonetic: "/ðə ˈweð.ɚ ɪz ˈver.i naɪs təˈdeɪ fɔːr ə ɡʊd raʊnd əv ɡɑːlf, sɜːr/",
        options: [
            { "en": "A. The weather is very nice today for golf, Sir.", "vi": "Thời tiết hôm nay rất đẹp để chơi golf ạ" },
            { "en": "B. It will snow heavily in 5 minutes, Sir.", "vi": "Trời sẽ có tuyết rơi dầy trong 5 phút nữa ạ" },
            { "en": "C. The weather is terrible, go home now, Sir.", "vi": "Thời tiết tệ quá, về nhà ngay đi ạ" },
            { "en": "D. I hate sunny weather, Sir.", "vi": "Em ghét thời tiết có nắng ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "You can take free relief, Sir.",
        phonetic: "/juː kæn teɪk friː rɪˈliːf, sɜːr/",
        displaySentence: "You can take free _______, Sir.",
        targetWord: "relief",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please drop the ball from knee height, Sir.",
        phonetic: "/pliːz drɑːp ðə bɔːl frəm niː haɪt, sɜːr/",
        displaySentence: "Please _______ the ball from knee height, Sir.",
        targetWord: "drop",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "You get one penalty stroke, Sir.",
        phonetic: "/juː ɡet wʌn ˈpen.əl.ti stroʊk, sɜːr/",
        displaySentence: "You get one penalty _______, Sir.",
        targetWord: "stroke",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please replace your divot, Sir.",
        phonetic: "/pliːz rɪˈpleɪs jʊər ˈdɪv.ət, sɜːr/",
        displaySentence: "Please replace your _______, Sir.",
        targetWord: "divot",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please fill the divot hole with sand, Sir.",
        phonetic: "/pliːz fɪl ðə ˈdɪv.ət hoʊl wɪð sænd, sɜːr/",
        displaySentence: "Please fill the divot hole with _______, Sir.",
        targetWord: "sand",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Do not step on the line of putt, Sir.",
        phonetic: "/duː nɑːt step ɑːn ðə laɪn əv pʌt, sɜːr/",
        displaySentence: "Do not step on the line of _______, Sir.",
        targetWord: "putt",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "May I attend the flagstick for you, Sir?",
        phonetic: "/meɪ aɪ əˈtend ðə ˈflæɡ.stɪk fɔːr juː, sɜːr/",
        displaySentence: "May I attend the _______ for you, Sir?",
        targetWord: "flagstick",
        hint: "💡 Gợi ý: Từ gồm 9 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "I will mark your ball on the green, Sir.",
        phonetic: "/aɪ wɪl mɑːrk jʊər bɔːl ɑːn ðə ɡriːn, sɜːr/",
        displaySentence: "I will _______ your ball on the green, Sir.",
        targetWord: "mark",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Let me clean your golf ball, Sir.",
        phonetic: "/let miː kliːn jʊər ɡɑːlf bɔːl, sɜːr/",
        displaySentence: "Let me _______ your golf ball, Sir.",
        targetWord: "clean",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Are you enjoying the game today, Sir?",
        phonetic: "/ɑːr juː ɪnˈdʒɔɪ.ɪŋ ðə ɡeɪm təˈdeɪ, sɜːr/",
        displaySentence: "Are you _______ the game today, Sir?",
        targetWord: "enjoying",
        hint: "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.3",
        "type": "fill",
        title: "[4.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "How do you feel about the green speed, Sir?",
        phonetic: "/haʊ duː juː fiːl əˈbaʊt ðə ɡriːn spiːd, sɜːr/",
        displaySentence: "How do you feel about the green _______, Sir?",
        targetWord: "speed",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },

    // =========================================================================
    // SECTION 4.4: LUYỆN TẬP PHẢN XẠ & TÌNH HUỐNG (ROLE-PLAY DRILLS) - 35 CÂU
    // =========================================================================
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please turn right here and follow the cart path to fairway, Sir.",
        phonetic: "/pliːz tɜːrn raɪt hɪər ænd ˈfɑː.loʊ ðə kɑːrt pæθ tə ˈfer.weɪ, sɜːr/",
        options: [
            { "en": "A. Please turn right here and follow the cart path, Sir.", "vi": "Vui lòng rẽ phải và đi theo đường xe điện ạ" },
            { "en": "B. Drive directly across the green, Sir.", "vi": "Lái xe trực tiếp qua green ạ" },
            { "en": "C. Reverse into the lake, Sir.", "vi": "Lùi xe xuống hồ ạ" },
            { "en": "D. Stop the cart on the tee box, Sir.", "vi": "Dừng xe trên tee box ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please slow down, Sir. Steep hill ahead, keep your foot on the brake.",
        phonetic: "/pliːz sloʊ daʊn, sɜːr. stiːp hɪl əˈhed, kiːp jʊər fʊt ɑːn ðə breɪk/",
        options: [
            { "en": "A. Please slow down, Sir. Steep hill ahead, set the brake.", "vi": "Xin đi chậm lại, phía trước dốc cao, cài phanh ạ" },
            { "en": "B. Drive as fast as you can down the hill, Sir.", "vi": "Lái càng nhanh càng tốt xuống dốc ạ" },
            { "en": "C. Turn off cart power on the slope, Sir.", "vi": "Tắt nguồn xe trên dốc ạ" },
            { "en": "D. Jump out of the buggy now, Sir.", "vi": "Nhảy ra khỏi xe ngay ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Lightning warning! Please leave your clubs and head to clubhouse now, Sir.",
        phonetic: "/ˈlaɪt.nɪŋ ˈwɔːr.nɪŋ! pliːz liːv jʊər klʌbz ænd hed tə ˈklʌb.haʊs naʊ, sɜːr/",
        options: [
            { "en": "A. Lightning warning! Please head to clubhouse now, Sir.", "vi": "Cảnh báo sấm sét! Xin về nhà câu lạc bộ ngay ạ" },
            { "en": "B. Hold your iron club high in the rain, Sir.", "vi": "Giơ gậy sắt cao lên trong mưa ạ" },
            { "en": "C. Stand under the big tree to play, Sir.", "vi": "Đứng dưới cây to tiếp tục đánh ạ" },
            { "en": "D. Keep playing all 18 holes, Sir.", "vi": "Tiếp tục đánh đủ 18 hố ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am deeply sorry, Sir. I will be 100% focused on your game from now.",
        phonetic: "/aɪ æm ˈdiːp.li ˈsɑː.ri, sɜːr. aɪ wɪl biː wʌn ˈhʌn.drəd pərˈsent ˈfoʊ.kəst ɑːn jʊər ɡeɪm frəm naʊ/",
        options: [
            { "en": "A. I am deeply sorry, Sir. I will be fully focused from now.", "vi": "Thành thật xin lỗi, em sẽ tập trung hoàn toàn từ bây giờ ạ" },
            { "en": "B. It's not my fault, Sir.", "vi": "Không phải lỗi của em ạ" },
            { "en": "C. You are playing too bad anyway, Sir.", "vi": "Dù sao anh cũng đánh tệ quá ạ" },
            { "en": "D. I don't want to carry your bag, Sir.", "vi": "Em không muốn xách túi cho anh ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Here is your cart, Sir. All 14 clubs are cleaned. Please check your belongings.",
        phonetic: "/hɪər ɪz jʊər kɑːrt, sɜːr. ɔːl ˌfɔːrˈtiːn klʌbz ɑːr kliːnd. pliːz tʃek jʊər bɪˈlɑːŋ.ɪŋz/",
        options: [
            { "en": "A. All 14 clubs are cleaned. Please check your belongings, Sir.", "vi": "Đủ 14 gậy đã lau sạch, xin kiểm tra đồ cá nhân ạ" },
            { "en": "B. I lost all your personal belongings, Sir.", "vi": "Em làm mất hết đồ cá nhân của anh rồi ạ" },
            { "en": "C. Clean the clubs by yourself, Sir.", "vi": "Anh tự lau gậy nhé ạ" },
            { "en": "D. Pay me extra tips right now, Sir.", "vi": "Đưa thêm tiền tip ngay ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "160 yards with headwind, Sir. I recommend a 6-iron instead of 7-iron.",
        phonetic: "/wʌn ˈsɪks.ti jɑːrdz wɪð ˈhed.wɪnd, sɜːr. aɪ ˌrek.əˈmend ə sɪks ˈaɪ.ən ɪnˈsted əv ˈsev.ən ˈaɪ.ən/",
        options: [
            { "en": "A. 160 yards with headwind. I recommend a 6-iron, Sir.", "vi": "160 yard gió ngược, khuyên dùng sắt 6 ạ" },
            { "en": "B. Use pitching wedge for 160 yards headwind, Sir.", "vi": "Dùng PW cho 160 yard gió ngược ạ" },
            { "en": "C. Use putter from fairway, Sir.", "vi": "Dùng gậy gạt từ fairway ạ" },
            { "en": "D. Don't hit against the wind, Sir.", "vi": "Đừng đánh ngược gió ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Beautiful drive, Sir! Right down the middle of the fairway!",
        phonetic: "/ˈbjuː.t̬ə.fəl draɪv, sɜːr! raɪt daʊn ðə ˈmɪd.əl əv ðə ˈfer.weɪ/",
        options: [
            { "en": "A. Beautiful drive, Sir! Right down the middle of fairway!", "vi": "Cú phát bóng tuyệt đẹp chính giữa fairway ạ!" },
            { "en": "B. Terrible drive, Sir. Ball is lost.", "vi": "Cú phát bóng tệ quá, mất bóng rồi ạ" },
            { "en": "C. Your ball went into OB, Sir.", "vi": "Bóng vào OB rồi ạ" },
            { "en": "D. You missed the ball completely, Sir.", "vi": "Anh đánh trượt bóng rồi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thank you for a memorable round today, Sir! Safe trip home and see you again!",
        phonetic: "/θæŋk juː fɔːr ə ˈmem.ər.ə.bəl raʊnd təˈdeɪ, sɜːr! seɪf trɪp hoʊm ænd siː juː əˈɡen/",
        options: [
            { "en": "A. Thank you for a memorable round today, Sir! Safe trip home!", "vi": "Cảm ơn vì vòng chơi đáng nhớ! Chúc về nhà an toàn ạ" },
            { "en": "B. Goodbye Sir, weather was bad.", "vi": "Tạm biệt, thời tiết tệ quá" },
            { "en": "C. Give me more tip money, Sir.", "vi": "Đưa thêm tiền tip cho em ạ" },
            { "en": "D. Don't come back to our resort, Sir.", "vi": "Đừng quay lại khu nghỉ dưỡng ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn hội thoại tác phong và chọn phương án đúng:",
        audioText: "Hand over with both hands, smile, and say politely: 'Here is a cold towel for you, Sir.'",
        phonetic: "/hænd ˈoʊ.vɚ wɪð boʊθ hændz/",
        options: [
            { "en": "A. Trao bằng 2 tay, mỉm cười và nói: 'Here is a cold towel for you, Sir.'", "vi": "Chuẩn tác phong Caddie" },
            { "en": "B. Nói trước rồi ném đồ cho khách", "vi": "Thô lỗ" },
            { "en": "C. Đưa đồ bằng 1 tay không nhìn khách", "vi": "Thiếu tôn trọng" },
            { "en": "D. Chỉ đưa đồ khi khách gắt gỏng", "vi": "Bị động" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn hội thoại nguyên tắc và chọn phương án đúng:",
        audioText: "Safety first, proactive guidance, clear and polite English with Sir/Ma'am.",
        phonetic: "/ˈseɪf.ti fɜːrst, proʊˈæk.tɪv ˈɡaɪ.dəns/",
        options: [
            { "en": "A. An toàn là số 1, chủ động chỉ dẫn sớm, giao tiếp rõ ràng lịch sự kèm Sir/Ma'am", "vi": "Nguyên tắc vàng Caddie" },
            { "en": "B. Lái xe càng nhanh càng tốt", "vi": "Gây nguy hiểm" },
            { "en": "C. Chỉ nói tiếng Anh khi khách bắt chuyện trước", "vi": "Bị động" },
            { "en": "D. Không cần quan sát xe điện", "vi": "Vi phạm an toàn" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn hội thoại thực tế và chọn phương án đúng:",
        audioText: "The flag is red today, Sir. It is a front pin, but stay below the pin because it slopes from back to front.",
        phonetic: "/ðə flæɡ ɪz red təˈdeɪ, sɜːr. ɪt ɪz ə frʌnt pɪn, bʌt steɪ bɪˈloʊ ðə pɪn bɪˈkɑːz ɪt sloʊps frəm bæk tə frʌnt/",
        options: [
            { "en": "A. Red flag is front pin, stay below the pin as it slopes back to front, Sir.", "vi": "Cờ đỏ cờ trước, giữ bóng dưới hố vì dốc đổ từ sau ra trước ạ" },
            { "en": "B. Red flag means out of bounds, Sir.", "vi": "Cờ đỏ nghĩa là ra ngoài biên OB ạ" },
            { "en": "C. Hit past the green into the forest, Sir.", "vi": "Đánh qua green vào rừng đi ạ" },
            { "en": "D. Use driver on the green, Sir.", "vi": "Dùng gậy driver trên green ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn hội thoại xử lý tình huống và chọn phương án đúng:",
        audioText: "The ball is two yards past the white stakes. It is OB, Sir. Here is your provisional ball, take your time!",
        phonetic: "/ðə bɔːl ɪz tuː jɑːrdz pæst ðə waɪt steɪks. ɪt ɪz oʊ-biː, sɜːr. hɪər ɪz jʊər prəˈvɪʒ.ən.əl bɔːl/",
        options: [
            { "en": "A. Ball is past white stakes, it's OB. Here is your provisional ball, Sir!", "vi": "Bóng quá cọc trắng bị OB. Đây là bóng dự phòng thưa ông!" },
            { "en": "B. Ball is safe, no need provisional ball, Sir.", "vi": "Bóng an toàn không cần bóng dự phòng ạ" },
            { "en": "C. Kick the ball back to fairway with foot, Sir.", "vi": "Dùng chân đá bóng quay lại fairway ạ" },
            { "en": "D. You win the hole automatically, Sir.", "vi": "Ông thắng hố này tự động ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn hội thoại sơ cứu y tế và chọn phương án đúng:",
        audioText: "Please sit down and rest on the buggy, Sir. Don't move your leg. Let me get the cold spray from the first aid kit.",
        phonetic: "/pliːz sɪt daʊn ænd rest ɑːn ðə ˈbʌɡ.i, sɜːr. doʊnt muːv jʊər leɡ. let miː ɡet ðə koʊld spreɪ frəm ðə ˌfɜːrst ˈeɪd kɪt/",
        options: [
            { "en": "A. Sit on buggy, don't move. I will get cold spray from first aid kit, Sir.", "vi": "Ngồi nghỉ trên xe, đừng di chuyển. Tôi lấy xịt lạnh từ túi sơ cứu ạ" },
            { "en": "B. Keep running 5 miles to cure your leg, Sir.", "vi": "Chạy tiếp 5 dặm cho khỏi chân ạ" },
            { "en": "C. I don't have first aid kit on buggy, Sir.", "vi": "Tôi không có túi sơ cứu trên xe ạ" },
            { "en": "D. Jump up and down on one foot, Sir.", "vi": "Nhảy lò cò 1 chân đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio xử lý phàn nàn và chọn phương án đúng:",
        audioText: "I am so sorry, Sir. I will be quicker and keep a close eye on your ball path.",
        phonetic: "/aɪ æm soʊ ˈsɑː.ri, sɜːr. aɪ wɪl biː ˈkwɪk.ɚ ænd kiːp ə kloʊs aɪ ɑːn jʊər bɔːl pæθ/",
        options: [
            { "en": "A. I am sorry, Sir. I will be quicker and keep a close eye on your ball path.", "vi": "Em xin lỗi, em sẽ nhanh hơn và quan sát bóng kỹ hơn ạ" },
            { "en": "B. Why don't you walk faster yourself, Sir?", "vi": "Tại sao anh không tự đi nhanh lên ạ?" },
            { "en": "C. I am not working for you, Sir.", "vi": "Em không làm việc cho anh đâu ạ" },
            { "en": "D. Look for your ball by yourself, Sir.", "vi": "Anh tự đi tìm bóng đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio động viên tâm lý và chọn phương án đúng:",
        audioText: "Great recovery shot, Sir! Don't worry about the last hole, let's focus on this one!",
        phonetic: "/ɡreɪt rɪˈkʌv.ɚ.i ʃɑːt, sɜːr! doʊnt ˈwɝː.i əˈbaʊt ðə læst hoʊl, lets ˈfoʊ.kəs ɑːn ðɪs wʌn/",
        options: [
            { "en": "A. Great recovery, Sir! Don't worry about last hole, focus on this one!", "vi": "Cú giải cứu tuyệt vời! Đừng lo hố trước, tập trung hố này ạ!" },
            { "en": "B. You played terribly on the last hole, Sir.", "vi": "Anh đánh tệ quá ở hố vừa rồi ạ" },
            { "en": "C. Give up now, Sir.", "vi": "Bỏ cuộc bây giờ đi ạ" },
            { "en": "D. You will lose this match, Sir.", "vi": "Anh sẽ thua trận này đấy ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio tư vấn chiến thuật và chọn phương án đúng:",
        audioText: "The wind is blowing from left to right, Sir. Please aim slightly to the left side of the fairway.",
        phonetic: "/ðə wɪnd ɪz ˈbloʊ.ɪŋ frəm left tə raɪt, sɜːr. pliːz eɪm ˈslaɪt.li tə ðə left saɪd əv ðə ˈfer.weɪ/",
        options: [
            { "en": "A. The wind is from left to right, please aim slightly left, Sir.", "vi": "Gió thổi từ trái sang phải, xin ngắm hơi lệch trái ạ" },
            { "en": "B. Aim directly into the right bunker, Sir.", "vi": "Ngắm thẳng vào bẫy cát bên phải ạ" },
            { "en": "C. Don't hit the ball when it is windy, Sir.", "vi": "Đừng đánh bóng khi có gió ạ" },
            { "en": "D. The wind has no effect on golf ball, Sir.", "vi": "Gió không ảnh hưởng tới bóng đâu ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio hướng dẫn gạt bóng và chọn phương án đúng:",
        audioText: "It is a downhill putt with a left-to-right break, Sir. Please hit it softly.",
        phonetic: "/ɪt ɪz ə ˈdaʊn.hɪl pʌt wɪð ə left tə raɪt breɪk, sɜːr. pliːz hɪt ɪt ˈsɑːft.li/",
        options: [
            { "en": "A. It is a downhill putt with left-to-right break, please hit softly, Sir.", "vi": "Cú gạt xuống dốc đổ từ trái sang phải, xin gạt nhẹ ạ" },
            { "en": "B. Hit as hard as you can on downhill putt, Sir.", "vi": "Gạt thật mạnh khi xuống dốc ạ" },
            { "en": "C. The green is completely flat here, Sir.", "vi": "Mặt green ở đây hoàn toàn phẳng ạ" },
            { "en": "D. Use a 7-iron for this putt, Sir.", "vi": "Dùng gậy sắt 7 cho cú gạt này ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio xử lý sự cố thiết bị và chọn phương án đúng:",
        audioText: "Sir, your driver head is a bit loose. Let me tighten it with the wrench for your safety.",
        phonetic: "/sɜːr, jʊər ˈdraɪ.vɚ hed ɪz ə bɪt luːs. let miː ˈtaɪ.tən ɪt wɪð ðə rentʃ fɔːr jʊər ˈseɪf.ti/",
        options: [
            { "en": "A. Your driver head is loose. Let me tighten it for your safety, Sir.", "vi": "Đầu gậy driver bị lỏng, để em siết lại cho an toàn ạ" },
            { "en": "B. Break the club head completely, Sir.", "vi": "Làm gãy luôn đầu gậy đi ạ" },
            { "en": "C. Keep hitting with a broken club, Sir.", "vi": "Cứ tiếp tục đánh bằng gậy hỏng đi ạ" },
            { "en": "D. Throw the driver into the lake, Sir.", "vi": "Ném gậy driver xuống hồ đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio thông báo thời gian và chọn phương án đúng:",
        audioText: "Marshal requested us to speed up slightly to keep pace of play, Sir.",
        phonetic: "/ˈmɑːr.ʃəl rɪˈkwes.tɪd ʌs tə spiːd ʌp ˈslaɪt.li tə kiːp peɪs əv pleɪ, sɜːr/",
        options: [
            { "en": "A. Marshal requested us to speed up slightly to keep pace of play, Sir.", "vi": "Điều hành nhờ đẩy nhanh tốc độ để giữ nhịp chơi ạ" },
            { "en": "B. Stop playing golf for 3 hours now, Sir.", "vi": "Dừng chơi golf 3 tiếng ngay bây giờ ạ" },
            { "en": "C. Walk as slow as possible, Sir.", "vi": "Đi bộ càng chậm càng tốt ạ" },
            { "en": "D. The Marshal is firing us, Sir.", "vi": "Điều hành sa thải chúng ta rồi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "mcq",
        title: "[4.4 Luyện nghe] Nghe đoạn audio chào tạm biệt và chọn phương án đúng:",
        audioText: "It was an absolute pleasure serving you today, Sir. Hope to see you back at Golden Sands soon!",
        phonetic: "/ɪt wɑːz æn ˈæb.sə.luːt ˈpleʒ.ɚ ˈsɝː.vɪŋ juː təˈdeɪ, sɜːr. hoʊp tə siː juː bæk æt ˈɡoʊl.dən sændz suːn/",
        options: [
            { "en": "A. It was a pleasure serving you! Hope to see you back at Golden Sands soon!", "vi": "Rất hân hạnh phục vụ anh! Hẹn sớm gặp lại tại Golden Sands ạ!" },
            { "en": "B. I am glad the game is finally over, Sir.", "vi": "Em mừng vì trận đấu cuối cùng cũng xong ạ" },
            { "en": "C. Never visit Golden Sands again, Sir.", "vi": "Đừng bao giờ tới Golden Sands nữa ạ" },
            { "en": "D. Give me your phone number, Sir.", "vi": "Cho em xin số điện thoại đi ạ" }
        ],
        "correct": 0
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "The wind is from left, please aim to the right, Sir.",
        phonetic: "/ðə wɪnd ɪz frəm left, pliːz eɪm tə ðə raɪt, sɜːr/",
        displaySentence: "The wind is from left, please aim to the _______, Sir.",
        targetWord: "right",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Would you like to add a club for headwind, Sir?",
        phonetic: "/wʊd juː laɪk tə æd ə klʌb fɔːr ˈhed.wɪnd, sɜːr/",
        displaySentence: "Would you like to _______ a club for headwind, Sir?",
        targetWord: "add",
        hint: "💡 Gợi ý: Từ gồm 3 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Have a great game today, Sir!",
        phonetic: "/hæv ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr/",
        displaySentence: "Have a _______ game today, Sir!",
        targetWord: "great",
        hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Watch out for the red hazard stakes, Sir.",
        phonetic: "/wɑːtʃ aʊt fɔːr ðə red ˈhæz.ɚd steɪks, sɜːr/",
        displaySentence: "Watch out for the red hazard _______, Sir.",
        targetWord: "stakes",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Let me get the cold spray from the first aid kit, Sir.",
        phonetic: "/let miː ɡet ðə koʊld spreɪ frəm ðə ˌfɜːrst ˈeɪd kɪt, sɜːr/",
        displaySentence: "Let me get the cold spray from the first aid _______, Sir.",
        targetWord: "kit",
        hint: "💡 Gợi ý: Từ gồm 3 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Which golf course is your favorite, Sir?",
        phonetic: "/wɪtʃ ɡɑːlf kɔːrs ɪz jʊər ˈfeɪ.vɚ.ɪt, sɜːr/",
        displaySentence: "Which golf course is your _______, Sir?",
        targetWord: "favorite",
        hint: "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Please keep a close eye on the ball path, Sir.",
        phonetic: "/pliːz kiːp ə kloʊs aɪ ɑːn ðə bɔːl pæθ, sɜːr/",
        displaySentence: "Please keep a close eye on the ball _______, Sir.",
        targetWord: "path",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "We need to keep the pace of play today, Sir.",
        phonetic: "/wiː niːd tə kiːp ðə peɪs əv pleɪ təˈdeɪ, sɜːr/",
        displaySentence: "We need to keep the _______ of play today, Sir.",
        targetWord: "pace",
        hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "It was an absolute pleasure serving you, Sir.",
        phonetic: "/ɪt wɑːz æn ˈæb.sə.luːt ˈpleʒ.ɚ ˈsɝː.vɪŋ juː, sɜːr/",
        displaySentence: "It was an absolute _______ serving you, Sir.",
        targetWord: "pleasure",
        hint: "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        lesson: "4",
        "section": "section4.4",
        "type": "fill",
        title: "[4.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Take a deep breath before you swing, Sir.",
        phonetic: "/teɪk ə diːp breθ bɪˈfɔːr juː swɪŋ, sɜːr/",
        displaySentence: "Take a deep _______ before you swing, Sir.",
        targetWord: "breath",
        hint: "💡 Gợi ý: Từ gồm 6 ký tự."
    }
);

// CHUẨN HÓA UNICODE NFC TOÀN BỘ CHUỖI TIẾNG VIỆT KHI NẠP DỮ LIỆU
window.masterQuizData.forEach(item => {
    if (item.hint) {
        item.hint = item.hint.normalize('NFC').replace(/\s+/g, ' ').trim();
    }
    if (item.options && Array.isArray(item.options)) {
        item.options.forEach(opt => {
            if (opt.vi) opt.vi = opt.vi.normalize('NFC').replace(/\s+/g, ' ').trim();
        });
    }
});
