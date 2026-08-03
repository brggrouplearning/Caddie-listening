// =========================================================================
// LESSON 3: POSITION, DIRECTION & COURSE DESCRIPTION FOR CADDY
// File: lesson3.js (FULLY STANDARDIZED LISTENING PRACTICE & HINTS)
// =========================================================================

// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP TÀI NGUYÊN TỔNG HỢP MỞ RỘNG LESSON 3 (160 CÂU - 40 CÂU/SECTION)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 3.1: MÔ TẢ VỊ TRÍ (POSITION & BALL LIE) - 40 CÂU
    // =========================================================================
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is right in the middle of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz raɪt ɪn ðə ˈmɪd.əl əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của anh nằm ngay chính giữa fairway ạ.",
        "options": [
            { "en": "A. Your ball is right in the middle of the fairway, Sir.", "vi": "Bóng nằm ngay chính giữa fairway ạ" },
            { "en": "B. Your ball is on the left side of the fairway, Sir.", "vi": "Bóng nằm ở phía bên trái fairway ạ" },
            { "en": "C. Your ball is in the deep bunker, Sir.", "vi": "Bóng nằm trong bẫy cát sâu ạ" },
            { "en": "D. Your ball is behind the tree, Sir.", "vi": "Bóng nằm ở phía sau cái cây ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is in the bunker, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə ˈbʌŋ.kər, sɜːr/",
        "translation": "Bóng của anh ở trong bẫy cát thưa anh.",
        "options": [
            { "en": "A. Your ball is in the bunker, Sir.", "vi": "Bóng ở trong bẫy cát thưa anh" },
            { "en": "B. Your ball is on the green, Sir.", "vi": "Bóng đã lên green thưa anh" },
            { "en": "C. Your ball is in the water, Sir.", "vi": "Bóng ở dưới nước thưa anh" },
            { "en": "D. Your ball is on the cart path, Sir.", "vi": "Bóng ở trên đường nhựa thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Great shot, Sir! Your ball is on the green.",
        "phonetic": "/ɡreɪt ʃɑːt sɜːr! jʊər bɔːl ɪz ɑːn ðə ɡriːn/",
        "translation": "Cú đánh tuyệt vời thưa anh! Bóng đã lên green rồi ạ.",
        "options": [
            { "en": "A. Your ball is on the green, Sir.", "vi": "Bóng đã lên green thưa anh" },
            { "en": "B. Your ball is in the deep rough, Sir.", "vi": "Bóng ở trong cỏ cao thưa anh" },
            { "en": "C. Your ball is out of bounds, Sir.", "vi": "Bóng ở ngoài biên OB thưa anh" },
            { "en": "D. Your ball is behind the kiosk, Sir.", "vi": "Bóng ở sau nhà chòi thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is in the deep rough, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə diːp rʌf, sɜːr/",
        "translation": "Bóng của anh nằm trong vùng cỏ cao rậm thưa anh.",
        "options": [
            { "en": "A. Your ball is in the deep rough, Sir.", "vi": "Bóng nằm trong cỏ cao thưa anh" },
            { "en": "B. Your ball is on the fairway, Sir.", "vi": "Bóng nằm trên fairway thưa anh" },
            { "en": "C. Your ball is in the hole, Sir.", "vi": "Bóng đã lọt hố thưa anh" },
            { "en": "D. Your ball is on the tee box, Sir.", "vi": "Bóng nằm ở tee box thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is in a divot, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ə ˈdɪv.ət, sɜːr/",
        "translation": "Bóng của anh nằm trong vết lõm cỏ thưa anh.",
        "options": [
            { "en": "A. Your ball is in a divot, Sir.", "vi": "Bóng nằm trong vết lõm cỏ thưa anh" },
            { "en": "B. Your ball is on the green fringe, Sir.", "vi": "Bóng nằm ở mép green thưa anh" },
            { "en": "C. Your ball is in the lake, Sir.", "vi": "Bóng nằm dưới hồ thưa anh" },
            { "en": "D. Your ball is inside the cart, Sir.", "vi": "Bóng nằm trong xe thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is on the left side, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə left saɪd, sɜːr/",
        "translation": "Bóng của anh ở phía bên trái thưa anh.",
        "options": [
            { "en": "A. Your ball is on the left side, Sir.", "vi": "Bóng ở phía bên trái thưa anh" },
            { "en": "B. Your ball is on the right side, Sir.", "vi": "Bóng ở phía bên phải thưa anh" },
            { "en": "C. Your ball is straight ahead, Sir.", "vi": "Bóng ở thẳng phía trước thưa anh" },
            { "en": "D. Your ball is behind you, Sir.", "vi": "Bóng ở sau lưng anh thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is on the right side, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə raɪt saɪd, sɜːr/",
        "translation": "Bóng của anh ở phía bên phải thưa anh.",
        "options": [
            { "en": "A. Your ball is on the right side, Sir.", "vi": "Bóng ở phía bên phải thưa anh" },
            { "en": "B. Your ball is on the left side, Sir.", "vi": "Bóng ở phía bên trái thưa anh" },
            { "en": "C. Your ball is in the cup, Sir.", "vi": "Bóng ở trong lỗ gôn thưa anh" },
            { "en": "D. Your ball is on the bridge, Sir.", "vi": "Bóng ở trên cầu thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "It is between the trees and the bunker, Sir.",
        "phonetic": "/ɪt ɪz bɪˈtwiːn ðə triːz ænd ðə ˈbʌŋ.kər, sɜːr/",
        "translation": "Bóng ở giữa cây và bẫy cát thưa anh.",
        "options": [
            { "en": "A. It is between the trees and the bunker, Sir.", "vi": "Bóng ở giữa cây và bẫy cát thưa anh" },
            { "en": "B. It is behind the clubhouse, Sir.", "vi": "Bóng ở sau nhà câu lạc bộ thưa anh" },
            { "en": "C. It is on the green surface, Sir.", "vi": "Bóng ở trên mặt green thưa anh" },
            { "en": "D. It is in front of the buggy, Sir.", "vi": "Bóng ở trước xe điện thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Sir, your ball is at an unplayable lie.",
        "phonetic": "/sɜːr, jʊər bɔːl ɪz æt æn ʌnˈpleɪ.ə.bəl laɪ/",
        "translation": "Thưa anh, bóng của anh nằm ở thế không đánh được ạ.",
        "options": [
            { "en": "A. Your ball is at an unplayable lie, Sir.", "vi": "Bóng ở thế không thể đánh được ạ" },
            { "en": "B. Your ball is in a perfect lie, Sir.", "vi": "Bóng nằm ở thế rất đẹp ạ" },
            { "en": "C. Your ball is on the tee, Sir.", "vi": "Bóng nằm trên cọc tee ạ" },
            { "en": "D. Your ball is in the hole, Sir.", "vi": "Bóng nằm trong lỗ ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is behind the green, Sir.",
        "phonetic": "/jʊər bɔːl ɪz bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Bóng của anh ở phía sau green thưa anh.",
        "options": [
            { "en": "A. Your ball is behind the green, Sir.", "vi": "Bóng ở phía sau green thưa anh" },
            { "en": "B. Your ball is in front of the green, Sir.", "vi": "Bóng ở phía trước green thưa anh" },
            { "en": "C. Your ball is in the center of green, Sir.", "vi": "Bóng ở chính giữa green thưa anh" },
            { "en": "D. Your ball is lost, Sir.", "vi": "Bóng bị mất rồi thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is right next to the pin, Sir.",
        "phonetic": "/jʊər bɔːl ɪz raɪt nekst tə ðə pɪn, sɜːr/",
        "translation": "Bóng của anh nằm ngay cạnh cờ thưa anh.",
        "options": [
            { "en": "A. Your ball is right next to the pin, Sir.", "vi": "Bóng nằm ngay cạnh cờ thưa anh" },
            { "en": "B. Your ball is far away from the pin, Sir.", "vi": "Bóng nằm cách xa cờ thưa anh" },
            { "en": "C. Your ball is in the water hazard, Sir.", "vi": "Bóng nằm dưới bẫy nước thưa anh" },
            { "en": "D. Your ball is on the cart path, Sir.", "vi": "Bóng nằm trên đường nhựa thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The lie is sloping uphill, Sir.",
        "phonetic": "/ðə laɪ ɪz ˈsloʊ.pɪŋ ˌʌpˈhɪl, sɜːr/",
        "translation": "Thế bóng đang ở địa hình dốc lên thưa anh.",
        "options": [
            { "en": "A. The lie is sloping uphill, Sir.", "vi": "Thế bóng ở địa hình dốc lên thưa anh" },
            { "en": "B. The lie is sloping downhill, Sir.", "vi": "Thế bóng ở địa hình dốc xuống thưa anh" },
            { "en": "C. The ground is completely flat, Sir.", "vi": "Mặt đất hoàn toàn bằng phẳng ạ" },
            { "en": "D. The ball is in deep mud, Sir.", "vi": "Bóng ở dưới bùn sâu thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The lie is sloping downhill, Sir.",
        "phonetic": "/ðə laɪ ɪz ˈsloʊ.pɪŋ ˌdaʊnˈhɪl, sɜːr/",
        "translation": "Thế bóng đang ở địa hình dốc xuống thưa anh.",
        "options": [
            { "en": "A. The lie is sloping downhill, Sir.", "vi": "Thế bóng ở địa hình dốc xuống thưa anh" },
            { "en": "B. The lie is sloping uphill, Sir.", "vi": "Thế bóng ở địa hình dốc lên thưa anh" },
            { "en": "C. The ball is on the tee, Sir.", "vi": "Bóng ở trên cọc tee thưa anh" },
            { "en": "D. The green is elevated, Sir.", "vi": "Vùng green ở trên dốc cao ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is straight ahead, Sir.",
        "phonetic": "/jʊər bɔːl ɪz streɪt əˈhed, sɜːr/",
        "translation": "Bóng của anh thẳng phía trước thưa anh.",
        "options": [
            { "en": "A. Your ball is straight ahead, Sir.", "vi": "Bóng ở thẳng phía trước thưa anh" },
            { "en": "B. Your ball is behind the buggy, Sir.", "vi": "Bóng ở phía sau xe điện thưa anh" },
            { "en": "C. Your ball is in the left rough, Sir.", "vi": "Bóng ở trong cỏ rough bên trái ạ" },
            { "en": "D. Your ball is out of bounds, Sir.", "vi": "Bóng ở ngoài biên OB thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The ball is buried down in the deep rough, Sir.",
        "phonetic": "/ðə bɔːl ɪz ˈber.id daʊn ɪn ðə diːp rʌf, sɜːr/",
        "translation": "Bóng bị chìm sâu trong cỏ rậm thưa anh.",
        "options": [
            { "en": "A. The ball is buried down in the deep rough, Sir.", "vi": "Bóng bị chìm sâu trong cỏ rậm thưa anh" },
            { "en": "B. The ball is sitting up nicely on fairway, Sir.", "vi": "Bóng nằm rất đẹp trên fairway thưa anh" },
            { "en": "C. The ball is in the hole, Sir.", "vi": "Bóng đã ở trong lỗ thưa anh" },
            { "en": "D. The ball is on the green fringe, Sir.", "vi": "Bóng ở mép green thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is 100 yards left to the pin, Sir.",
        "phonetic": "/jʊər bɔːl ɪz wʌn ˈhʌn.drəd jɑːrdz left tə ðə pɪn, sɜːr/",
        "translation": "Bóng của anh còn cách cờ 100 yard thưa anh.",
        "options": [
            { "en": "A. Your ball is 100 yards left to the pin, Sir.", "vi": "Bóng cách cờ 100 yard thưa anh" },
            { "en": "B. Your ball is 200 yards from the tee, Sir.", "vi": "Bóng cách tee 200 yard thưa anh" },
            { "en": "C. Your ball is in the water hazard, Sir.", "vi": "Bóng ở dưới bẫy nước thưa anh" },
            { "en": "D. Your ball is on the practice green, Sir.", "vi": "Bóng ở trên green tập thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball has a good lie on the fairway, Sir.",
        "phonetic": "/jʊər bɔːl hæz ə ɡʊd laɪ ɑːn ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của anh có thế nằm rất tốt trên fairway thưa anh.",
        "options": [
            { "en": "A. Your ball has a good lie on the fairway, Sir.", "vi": "Bóng có thế nằm tốt trên fairway thưa anh" },
            { "en": "B. Your ball is in a bad lie in the sand, Sir.", "vi": "Bóng nằm ở thế xấu trong cát thưa anh" },
            { "en": "C. Your ball is lost in the forest, Sir.", "vi": "Bóng bị mất trong rừng thưa anh" },
            { "en": "D. Your ball is under the cart wheel, Sir.", "vi": "Bóng ở dưới bánh xe thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball crossed the red line here, Sir.",
        "phonetic": "/jʊər bɔːl krɑːst ðə red laɪn hɪər, sɜːr/",
        "translation": "Bóng của anh đã cắt qua vạch đỏ ở đây thưa anh.",
        "options": [
            { "en": "A. Your ball crossed the red line here, Sir.", "vi": "Bóng cắt qua vạch đỏ ở đây thưa anh" },
            { "en": "B. Your ball is in the center of the cup, Sir.", "vi": "Bóng ở giữa lỗ gôn thưa anh" },
            { "en": "C. Your ball is on the tee box, Sir.", "vi": "Bóng ở trên tee box thưa anh" },
            { "en": "D. Your ball is inside the bunker, Sir.", "vi": "Bóng ở trong bẫy cát thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Your ball is on the fringe of the green, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə frɪndʒ əv ðə ɡriːn, sɜːr/",
        "translation": "Bóng của anh nằm ở phần mép green thưa anh.",
        "options": [
            { "en": "A. Your ball is on the fringe of the green, Sir.", "vi": "Bóng nằm ở mép green thưa anh" },
            { "en": "B. Your ball is deep inside the bunker, Sir.", "vi": "Bóng nằm sâu trong bẫy cát thưa anh" },
            { "en": "C. Your ball is behind the clubhouse, Sir.", "vi": "Bóng ở sau nhà câu lạc bộ thưa anh" },
            { "en": "D. Your ball is on the driving range, Sir.", "vi": "Bóng ở sân tập thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You can stop here, Sir. Your ball is on the left.",
        "phonetic": "/juː kæn stɑːp hɪər, sɜːr. jʊər bɔːl ɪz ɑːn ðə left/",
        "translation": "Anh có thể dừng ở đây ạ. Bóng của anh ở bên trái.",
        "options": [
            { "en": "A. You can stop here, Sir. Your ball is on the left.", "vi": "Dừng ở đây ạ, bóng ở bên trái" },
            { "en": "B. Keep driving forward to the clubhouse, Sir.", "vi": "Lái tiếp về nhà câu lạc bộ ạ" },
            { "en": "C. Turn right immediately, Sir.", "vi": "Rẽ phải ngay lập tức ạ" },
            { "en": "D. Park the cart inside the bunker, Sir.", "vi": "Đỗ xe vào bẫy cát ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "2",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is in the middle of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə ˈmɪd.əl əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của anh ở chính giữa đường fairway thưa anh.",
        "displaySentence": "Your ball is in the _______ of the fairway, Sir.",
        "targetWord": "middle",
        "hint": "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is in the bunker, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə ˈbʌŋ.kər, sɜːr/",
        "translation": "Bóng của anh nằm trong bẫy cát thưa anh.",
        "displaySentence": "Your ball is in the _______, Sir.",
        "targetWord": "bunker",
        "hint": "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is on the green, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə ɡriːn, sɜːr/",
        "translation": "Bóng của anh đã lên vùng green thưa anh.",
        "displaySentence": "Your ball is on the _______, Sir.",
        "targetWord": "green",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is in the deep rough, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə diːp rʌf, sɜːr/",
        "translation": "Bóng của anh nằm trong vùng cỏ rậm thưa anh.",
        "displaySentence": "Your ball is in the deep _______, Sir.",
        "targetWord": "rough",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is on the left side, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə left saɪd, sɜːr/",
        "translation": "Bóng của anh ở phía bên trái thưa anh.",
        "displaySentence": "Your ball is on the _______ side, Sir.",
        "targetWord": "left",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is on the right side, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə raɪt saɪd, sɜːr/",
        "translation": "Bóng của anh ở phía bên phải thưa anh.",
        "displaySentence": "Your ball is on the _______ side, Sir.",
        "targetWord": "right",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is straight ahead, Sir.",
        "phonetic": "/jʊər bɔːl ɪz streɪt əˈhed, sɜːr/",
        "translation": "Bóng của anh ở thẳng phía trước thưa anh.",
        "displaySentence": "Your ball is _______ ahead, Sir.",
        "targetWord": "straight",
        "hint": "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The lie is sloping uphill, Sir.",
        "phonetic": "/ðə laɪ ɪz ˈsloʊ.pɪŋ ˌʌpˈhɪl, sɜːr/",
        "translation": "Thế bóng ở địa hình dốc lên thưa anh.",
        "displaySentence": "The lie is sloping _______, Sir.",
        "targetWord": "uphill",
        "hint": "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The lie is sloping downhill, Sir.",
        "phonetic": "/ðə laɪ ɪz ˈsloʊ.pɪŋ ˌdaʊnˈhɪl, sɜːr/",
        "translation": "Thế bóng ở địa hình dốc xuống thưa anh.",
        "displaySentence": "The lie is sloping _______, Sir.",
        "targetWord": "downhill",
        "hint": "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Your ball is behind the green, Sir.",
        "phonetic": "/jʊər bɔːl ɪz bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Bóng của anh ở phía sau green thưa anh.",
        "displaySentence": "Your ball is _______ the green, Sir.",
        "targetWord": "behind",
        "hint": "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại thực tế và chọn phương án đúng:",
        "audioText": "Your ball is in a divot, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ə ˈdɪv.ət, sɜːr/",
        "translation": "Bóng của anh nằm trong vết lõm cỏ thưa anh.",
        "options": [
            { "en": "A. Your ball is in a divot, Sir.", "vi": "Bóng nằm trong vết lõm cỏ ạ" },
            { "en": "B. Your ball is on a clean tee, Sir.", "vi": "Bóng nằm trên tee sạch ạ" },
            { "en": "C. Your ball is inside the cup, Sir.", "vi": "Bóng nằm trong lỗ ạ" },
            { "en": "D. Your ball is on the path, Sir.", "vi": "Bóng nằm trên đường ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại tình huống và chọn phương án đúng:",
        "audioText": "Your ball is right next to the bunker lip, Sir.",
        "phonetic": "/jʊər bɔːl ɪz raɪt nekst tə ðə ˈbʌŋ.kər lɪp, sɜːr/",
        "translation": "Bóng của anh nằm ngay sát mép bẫy cát thưa anh.",
        "options": [
            { "en": "A. Your ball is right next to the bunker lip, Sir.", "vi": "Bóng nằm sát mép bẫy cát ạ" },
            { "en": "B. Your ball is in the middle of fairway, Sir.", "vi": "Bóng nằm giữa fairway ạ" },
            { "en": "C. Your ball is on the green, Sir.", "vi": "Bóng nằm trên green ạ" },
            { "en": "D. Your ball is on the buggy, Sir.", "vi": "Bóng nằm trên xe điện ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại xử lý và chọn phương án đúng:",
        "audioText": "Don't worry, Sir. Your ball is safe between the bunker and water.",
        "phonetic": "/doʊnt ˈwɜːr.i sɜːr. jʊər bɔːl ɪz seɪf bɪˈtwiːn ðə ˈbʌŋ.kər ænd ˈwɔː.tər/",
        "translation": "Anh đừng lo ạ. Bóng nằm an toàn giữa bẫy cát và hồ nước ạ.",
        "options": [
            { "en": "A. Your ball is safe between the bunker and water, Sir.", "vi": "Bóng an toàn giữa cát và nước ạ" },
            { "en": "B. Your ball is in the deep lake, Sir.", "vi": "Bóng nằm dưới hồ sâu ạ" },
            { "en": "C. Your ball is lost, Sir.", "vi": "Bóng bị mất rồi ạ" },
            { "en": "D. Your ball is inside the cart, Sir.", "vi": "Bóng ở trong xe ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại tìm bóng và chọn phương án đúng:",
        "audioText": "I found your ball, Sir. It is under the big tree.",
        "phonetic": "/aɪ faʊnd jʊər bɔːl, sɜːr. ɪt ɪz ˈʌn.dər ðə bɪɡ triː/",
        "translation": "Em tìm thấy bóng rồi ạ. Nó ở dưới gốc cây to.",
        "options": [
            { "en": "A. I found your ball, Sir. It is under the big tree.", "vi": "Em thấy bóng dưới gốc cây to ạ" },
            { "en": "B. I cannot find your ball, Sir.", "vi": "Em không tìm thấy bóng ạ" },
            { "en": "C. Your ball is in the hole, Sir.", "vi": "Bóng đã lọt hố rồi ạ" },
            { "en": "D. Your ball is on the green, Sir.", "vi": "Bóng trên green rồi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại địa hình và chọn phương án đúng:",
        "audioText": "Please take your stance carefully. The ground is sloping, Sir.",
        "phonetic": "/pliːz teɪk jʊər stæns ˈker.fə.li. ðə ɡraʊnd ɪz ˈsloʊ.pɪŋ, sɜːr/",
        "translation": "Xin anh đứng thế đánh cẩn thận ạ. Mặt đất đang bị dốc.",
        "options": [
            { "en": "A. Please take your stance carefully. The ground is sloping, Sir.", "vi": "Xin đứng thế đánh cẩn thận vì đất dốc ạ" },
            { "en": "B. Please run fast, Sir.", "vi": "Xin hãy chạy nhanh ạ" },
            { "en": "C. Hit the ball as hard as possible, Sir.", "vi": "Đánh hết lực có thể ạ" },
            { "en": "D. No need to watch the ball, Sir.", "vi": "Không cần nhìn bóng đâu ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại ranh giới và chọn phương án đúng:",
        "audioText": "I'm sorry, Sir. Your ball is out of bounds.",
        "phonetic": "/aɪm ˈsɑː.ri sɜːr. jʊər bɔːl ɪz aʊt əv baʊndz/",
        "translation": "Em xin lỗi thưa anh. Bóng của anh đã ra ngoài biên OB rồi ạ.",
        "options": [
            { "en": "A. I'm sorry, Sir. Your ball is out of bounds.", "vi": "Xin lỗi anh, bóng ra ngoài biên OB rồi ạ" },
            { "en": "B. Your ball is in the center of fairway, Sir.", "vi": "Bóng ở giữa fairway ạ" },
            { "en": "C. Your ball is on the green, Sir.", "vi": "Bóng ở trên green ạ" },
            { "en": "D. Nice shot, Sir!", "vi": "Cú đánh tuyệt vời ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại an toàn và chọn phương án đúng:",
        "audioText": "Your ball stopped right in front of the water, Sir. It is safe.",
        "phonetic": "/jʊər bɔːl stɑːpt raɪt ɪn frʌnt əv ðə ˈwɔː.tər, sɜːr. ɪt ɪz seɪf/",
        "translation": "Bóng dừng ngay trước hồ nước thưa anh. Bóng an toàn ạ.",
        "options": [
            { "en": "A. Your ball stopped in front of the water, Sir. It is safe.", "vi": "Bóng dừng trước nước, an toàn ạ" },
            { "en": "B. Your ball is deep inside the water, Sir.", "vi": "Bóng ở chìm sâu dưới nước ạ" },
            { "en": "C. Your ball is lost, Sir.", "vi": "Bóng bị mất rồi ạ" },
            { "en": "D. Your ball is on the cart roof, Sir.", "vi": "Bóng trên mái xe điện ạ" }
        ],
        "correct": 0
    },

    // =========================================================================
    // SECTION 3.2: MÔ TẢ HƯỚNG & ĐIỀU HƯỚNG (DIRECTION & GUIDANCE) - 40 CÂU
    // =========================================================================
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please turn left here and follow the path, Sir.",
        "phonetic": "/pliːz tɜːrn left hɪər ænd ˈfɑː.loʊ ðə pæθ, sɜːr/",
        "translation": "Vui lòng rẽ trái ở đây và đi theo đường nhựa thưa anh.",
        "options": [
            { "en": "A. Please turn left here and follow the path, Sir.", "vi": "Vui lòng rẽ trái và đi theo đường nhựa ạ" },
            { "en": "B. Please turn right here, Sir.", "vi": "Vui lòng rẽ phải ở đây ạ" },
            { "en": "C. Please drive backward, Sir.", "vi": "Vui lòng lái xe lùi lại ạ" },
            { "en": "D. Please stop the cart now, Sir.", "vi": "Vui lòng dừng xe lại bây giờ ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please turn right here, Sir.",
        "phonetic": "/pliːz tɜːrn raɪt hɪər, sɜːr/",
        "translation": "Vui lòng rẽ phải ở đây thưa anh.",
        "options": [
            { "en": "A. Please turn right here, Sir.", "vi": "Vui lòng rẽ phải ở đây thưa anh" },
            { "en": "B. Please turn left here, Sir.", "vi": "Vui lòng rẽ trái ở đây thưa anh" },
            { "en": "C. Please go straight ahead, Sir.", "vi": "Vui lòng đi thẳng phía trước ạ" },
            { "en": "D. Please reverse the cart, Sir.", "vi": "Vui lòng lùi xe lại ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please go straight to the next tee box, Sir.",
        "phonetic": "/pliːz ɡoʊ streɪt tə ðə nekst tiː bɑːks, sɜːr/",
        "translation": "Xin đi thẳng đến khu vực phát bóng tiếp theo thưa anh.",
        "options": [
            { "en": "A. Please go straight to the next tee box, Sir.", "vi": "Xin đi thẳng tới tee box tiếp theo ạ" },
            { "en": "B. Please turn left right now, Sir.", "vi": "Xin rẽ trái ngay bây giờ ạ" },
            { "en": "C. Please stop on the grass, Sir.", "vi": "Xin dừng trên cỏ ạ" },
            { "en": "D. Please turn around, Sir.", "vi": "Xin quay đầu xe ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please slow down, Sir. It is a steep hill ahead.",
        "phonetic": "/pliːz sloʊ daʊn, sɜːr. ɪt ɪz ə stiːp hɪl əˈhed/",
        "translation": "Xin đi chậm lại ạ. Phía trước là dốc cao.",
        "options": [
            { "en": "A. Please slow down, Sir. It is a steep hill ahead.", "vi": "Xin đi chậm lại, phía trước dốc cao ạ" },
            { "en": "B. Please drive faster, Sir.", "vi": "Xin lái xe nhanh hơn ạ" },
            { "en": "C. The road is flat and clear, Sir.", "vi": "Đường bằng phẳng và thoáng ạ" },
            { "en": "D. Turn off the cart engine, Sir.", "vi": "Tắt máy xe điện đi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please stay on the cart path, Sir.",
        "phonetic": "/pliːz steɪ ɑːn ðə kɑːrt pæθ, sɜːr/",
        "translation": "Vui lòng đi trên đường dành cho xe điện thưa anh.",
        "options": [
            { "en": "A. Please stay on the cart path, Sir.", "vi": "Vui lòng đi trên đường xe điện ạ" },
            { "en": "B. Please drive on the green, Sir.", "vi": "Vui lòng lái xe lên green ạ" },
            { "en": "C. Please drive into the bunker, Sir.", "vi": "Vui lòng lái xe vào bẫy cát ạ" },
            { "en": "D. Please park on the fairway, Sir.", "vi": "Vui lòng đỗ xe trên fairway ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please don't drive on the grass today, Sir.",
        "phonetic": "/pliːz doʊnt draɪv ɑːn ðə ɡræs təˈdeɪ, sɜːr/",
        "translation": "Vui lòng không lái xe lên cỏ ngày hôm nay thưa anh.",
        "options": [
            { "en": "A. Please don't drive on the grass today, Sir.", "vi": "Vui lòng không lái xe lên cỏ hôm nay ạ" },
            { "en": "B. You can drive on the grass everywhere, Sir.", "vi": "Anh có thể lái xe lên cỏ khắp nơi ạ" },
            { "en": "C. Please drive faster on the grass, Sir.", "vi": "Xin lái xe nhanh hơn trên cỏ ạ" },
            { "en": "D. Park the buggy on the green, Sir.", "vi": "Đỗ xe điện trên green ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please aim to the safe zone on the right, Sir.",
        "phonetic": "/pliːz eɪm tə ðə seɪf zoʊn ɑːn ðə raɪt, sɜːr/",
        "translation": "Xin anh ngắm vào vùng an toàn bên phải ạ.",
        "options": [
            { "en": "A. Please aim to the safe zone on the right, Sir.", "vi": "Xin ngắm vào vùng an toàn bên phải ạ" },
            { "en": "B. Aim directly at the water hazard, Sir.", "vi": "Ngắm thẳng vào bẫy nước ạ" },
            { "en": "C. Aim at the deep bunker on the left, Sir.", "vi": "Ngắm vào bẫy cát sâu bên trái ạ" },
            { "en": "D. Hit as hard as you can without aim, Sir.", "vi": "Cứ đánh hết lực không cần ngắm ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "There is a hidden lake on the left side, please aim right, Sir.",
        "phonetic": "/ðer ɪz ə ˈhɪd.ən leɪk ɑːn ðə left saɪd, pliːz eɪm raɪt, sɜːr/",
        "translation": "Có hồ nước khuất bên trái, xin ngắm sang phải thưa anh.",
        "options": [
            { "en": "A. There is a hidden lake on the left side, please aim right, Sir.", "vi": "Có hồ khuất bên trái, xin ngắm sang phải ạ" },
            { "en": "B. Aim to the left lake, Sir.", "vi": "Ngắm vào hồ bên trái ạ" },
            { "en": "C. No water on this hole, Sir.", "vi": "Không có nước ở hố này ạ" },
            { "en": "D. Aim at the left trees, Sir.", "vi": "Ngắm vào hàng cây bên trái ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The wind is blowing strongly from left to right, Sir.",
        "phonetic": "/ðə wɪnd ɪz ˈbloʊ.ɪŋ ˈstrɑːŋ.li frəm left tə raɪt, sɜːr/",
        "translation": "Gió đang thổi rất mạnh từ trái qua phải thưa anh.",
        "options": [
            { "en": "A. The wind is blowing strongly from left to right, Sir.", "vi": "Gió thổi mạnh từ trái qua phải ạ" },
            { "en": "B. The wind is blowing from right to left, Sir.", "vi": "Gió thổi từ phải qua trái ạ" },
            { "en": "C. There is no wind on the fairway, Sir.", "vi": "Không có gió trên fairway ạ" },
            { "en": "D. It is headwind straight ahead, Sir.", "vi": "Gió thổi ngược thẳng phía trước ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "It is a bit bumpy here, please be careful, Sir.",
        "phonetic": "/ɪt ɪz ə bɪt ˈbʌm.pi hɪər, pliːz biː ˈker.fəl, sɜːr/",
        "translation": "Chỗ này hơi xóc, xin anh cẩn thận ạ.",
        "options": [
            { "en": "A. It is a bit bumpy here, please be careful, Sir.", "vi": "Chỗ này hơi xóc, xin cẩn thận ạ" },
            { "en": "B. Drive as fast as possible here, Sir.", "vi": "Lái xe nhanh nhất có thể ở đây ạ" },
            { "en": "C. Stop the cart on the green, Sir.", "vi": "Dừng xe trên green ạ" },
            { "en": "D. Reverse the buggy now, Sir.", "vi": "Lùi xe điện ngay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please set the brake, Sir. It's a bit of a slope.",
        "phonetic": "/pliːz set ðə breɪk, sɜːr. ɪts ə bɪt əv ə sloʊp/",
        "translation": "Xin anh cài phanh ạ. Chỗ này hơi dốc.",
        "options": [
            { "en": "A. Please set the brake, Sir. It's a bit of a slope.", "vi": "Xin anh cài phanh vì chỗ này hơi dốc ạ" },
            { "en": "B. Leave the brake open, Sir.", "vi": "Cứ nhả phanh ra thưa anh" },
            { "en": "C. Drive down the hill quickly, Sir.", "vi": "Lái xuống dốc nhanh lên ạ" },
            { "en": "D. Turn off the lights, Sir.", "vi": "Tắt đèn đi thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Going backward, please, Sir.",
        "phonetic": "/ˈɡoʊ.ɪŋ ˈbæk.wɚd, pliːz, sɜːr/",
        "translation": "Vui lòng cho xe đi lùi ạ.",
        "options": [
            { "en": "A. Going backward, please, Sir.", "vi": "Vui lòng cho xe đi lùi ạ" },
            { "en": "B. Going forward fast, Sir.", "vi": "Đi tiến lên nhanh ạ" },
            { "en": "C. Turn left immediately, Sir.", "vi": "Rẽ trái ngay ạ" },
            { "en": "D. Stop playing golf, Sir.", "vi": "Dừng chơi golf ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please go straight after the bridge, Sir.",
        "phonetic": "/pliːz ɡoʊ streɪt ˈæf.tər ðə brɪdʒ, sɜːr/",
        "translation": "Xin đi thẳng sau khi qua cầu thưa anh.",
        "options": [
            { "en": "A. Please go straight after the bridge, Sir.", "vi": "Xin đi thẳng sau khi qua cầu ạ" },
            { "en": "B. Turn left before the bridge, Sir.", "vi": "Rẽ trái trước khi qua cầu ạ" },
            { "en": "C. Drive into the river, Sir.", "vi": "Lái xe xuống sông ạ" },
            { "en": "D. Stop on the bridge, Sir.", "vi": "Dừng xe trên cầu ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please aim slightly to the right to avoid the hazard, Sir.",
        "phonetic": "/pliːz eɪm ˈslaɪt.li tə ðə raɪt tə əˈvɔɪd ðə ˈhæz.ɚd, sɜːr/",
        "translation": "Xin ngắm hơi lệch sang phải để tránh bẫy thưa anh.",
        "options": [
            { "en": "A. Please aim slightly to the right to avoid the hazard, Sir.", "vi": "Xin ngắm hơi lệch sang phải để tránh bẫy ạ" },
            { "en": "B. Aim straight into the lake, Sir.", "vi": "Ngắm thẳng vào hồ ạ" },
            { "en": "C. Aim to the left OB line, Sir.", "vi": "Ngắm vào vạch OB bên trái ạ" },
            { "en": "D. Don't look at the target, Sir.", "vi": "Không cần nhìn mục tiêu ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You should hit the ball back to the fairway, Sir.",
        "phonetic": "/juː ʃʊd hɪt ðə bɔːl bæk tə ðə ˈfer.weɪ, sɜːr/",
        "translation": "Anh nên đánh bóng quay trở lại đường fairway ạ.",
        "options": [
            { "en": "A. You should hit the ball back to the fairway, Sir.", "vi": "Anh nên đánh bóng quay lại fairway ạ" },
            { "en": "B. Hit the ball deeper into the forest, Sir.", "vi": "Đánh bóng sâu hơn vào rừng ạ" },
            { "en": "C. Try to hit 300 yards from this deep rough, Sir.", "vi": "Cố đánh 300 yard từ cỏ rậm này ạ" },
            { "en": "D. Throw the ball with your hand, Sir.", "vi": "Ném bóng bằng tay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please turn left here, Sir.",
        "phonetic": "/pliːz tɜːrn left hɪər, sɜːr/",
        "translation": "Vui lòng rẽ trái ở đây thưa anh.",
        "displaySentence": "Please turn _______ here, Sir.",
        "targetWord": "left",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please turn right here, Sir.",
        "phonetic": "/pliːz tɜːrn raɪt hɪər, sɜːr/",
        "translation": "Vui lòng rẽ phải ở đây thưa anh.",
        "displaySentence": "Please turn _______ here, Sir.",
        "targetWord": "right",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please stay on the cart path, Sir.",
        "phonetic": "/pliːz steɪ ɑːn ðə kɑːrt pæθ, sɜːr/",
        "translation": "Vui lòng đi trên đường dành cho xe điện thưa anh.",
        "displaySentence": "Please stay on the cart _______, Sir.",
        "targetWord": "path",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Slow down, please. It is a steep hill ahead, Sir.",
        "phonetic": "/sloʊ daʊn, pliːz. ɪt ɪz ə stiːp hɪl əˈhed, sɜːr/",
        "translation": "Đi chậm lại ạ. Phía trước là dốc cao.",
        "displaySentence": "_______ down, please. It is a steep hill ahead, Sir.",
        "targetWord": "Slow",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please aim to the safe zone, Sir.",
        "phonetic": "/pliːz eɪm tə ðə seɪf zoʊn, sɜːr/",
        "translation": "Xin anh ngắm vào vùng an toàn thưa anh.",
        "displaySentence": "Please aim to the safe _______, Sir.",
        "targetWord": "zone",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại tình huống và chọn phương án đúng:",
        "audioText": "Please slow down, Sir. There is a sharp turn ahead.",
        "phonetic": "/pliːz sloʊ daʊn, sɜːr. ðer ɪz ə ʃɑːrp tɜːrn əˈhed/",
        "translation": "Xin đi chậm lại ạ. Phía trước có khúc cua gắt.",
        "options": [
            { "en": "A. Please slow down, Sir. There is a sharp turn ahead.", "vi": "Xin đi chậm lại, phía trước có khúc cua gắt ạ" },
            { "en": "B. Drive as fast as you like, Sir.", "vi": "Cứ lái nhanh như anh thích ạ" },
            { "en": "C. Turn off the cart lights, Sir.", "vi": "Tắt đèn xe đi ạ" },
            { "en": "D. Jump out of the cart, Sir.", "vi": "Nhảy ra khỏi xe ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại xử lý sự cố và chọn phương án đúng:",
        "audioText": "Sir, the battery is low. I will call Marshal for a new cart.",
        "phonetic": "/sɜːr, ðə ˈbæt̬.ɚ.i ɪz loʊ. aɪ wɪl kɔːl ˈmɑːr.ʃəl fɔːr ə nuː kɑːrt/",
        "translation": "Thưa anh, bình điện sắp hết. Em sẽ gọi Điều hành đổi xe mới ạ.",
        "options": [
            { "en": "A. Sir, the battery is low. I will call Marshal for a new cart.", "vi": "Thưa anh, bình điện yếu. Em sẽ gọi đổi xe mới ạ" },
            { "en": "B. Push the cart by yourself, Sir.", "vi": "Anh tự đẩy xe nhé ạ" },
            { "en": "C. Leave the bag here and walk home, Sir.", "vi": "Bỏ túi gậy ở đây đi bộ về ạ" },
            { "en": "D. The cart is completely fine, Sir.", "vi": "Xe hoàn toàn bình thường ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại quy định sân và chọn phương án đúng:",
        "audioText": "I'm sorry, Sir. The grass is wet today. Please stay on the path.",
        "phonetic": "/aɪm ˈsɑː.ri, sɜːr. ðə ɡræs ɪz wet təˈdeɪ. pliːz steɪ ɑːn ðə pæθ/",
        "translation": "Em xin lỗi, hôm nay cỏ ướt ạ. Xin vui lòng đi trên đường nhựa.",
        "options": [
            { "en": "A. I'm sorry, Sir. The grass is wet today. Please stay on the path.", "vi": "Xin lỗi hôm nay cỏ ướt, xin đi trên đường nhựa ạ" },
            { "en": "B. Yes, drive directly onto the green, Sir.", "vi": "Vâng, lái thẳng lên green đi ạ" },
            { "en": "C. I don't care about the grass, Sir.", "vi": "Em không quan tâm cỏ ạ" },
            { "en": "D. Park the cart in the lake, Sir.", "vi": "Đỗ xe dưới hồ ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại thời tiết gió và chọn phương án đúng:",
        "audioText": "Listen to the wind, Sir. It is blowing from left to right.",
        "phonetic": "/ˈlɪs.ən tə ðə wɪnd, sɜːr. ɪt ɪz ˈbloʊ.ɪŋ frəm left tə raɪt/",
        "translation": "Hãy chú ý tiếng gió thưa anh. Gió đang thổi từ trái qua phải ạ.",
        "options": [
            { "en": "A. Listen to the wind, Sir. It is blowing from left to right.", "vi": "Hãy chú ý tiếng gió, gió thổi từ trái qua phải ạ" },
            { "en": "B. Ignore the wind completely, Sir.", "vi": "Lờ đi cơn gió ạ" },
            { "en": "C. Hit as high as you can in this wind, Sir.", "vi": "Đánh bổng cao nhất có thể trong gió ạ" },
            { "en": "D. Don't hit the ball today, Sir.", "vi": "Đừng đánh bóng hôm nay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại trấn an và chọn phương án đúng:",
        "audioText": "Take your time, Sir. Relax before your next shot.",
        "phonetic": "/teɪk jʊər taɪm, sɜːr. rɪˈlæks bɪˈfɔːr jʊər nekst ʃɑːt/",
        "translation": "Anh cứ từ tốn thôi ạ. Thư giãn trước cú đánh tiếp theo.",
        "options": [
            { "en": "A. Take your time, Sir. Relax before your next shot.", "vi": "Anh cứ từ tốn thư giãn trước cú đánh tiếp theo ạ" },
            { "en": "B. Hurry up, you are too slow, Sir.", "vi": "Nhanh lên, anh chậm quá ạ" },
            { "en": "C. You played so poorly, Sir.", "vi": "Anh đánh kém quá ạ" },
            { "en": "D. Give up this hole, Sir.", "vi": "Bỏ hố này đi ạ" }
        ],
        "correct": 0
    },

    // =========================================================================
    // SECTION 3.3: GIỚI THIỆU TRÊN SÂN & TƯ VẤN THUẬT TOÁN (COURSE DESCRIPTION & ADVICE) - 40 CÂU
    // =========================================================================
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "This is Hole number 3, Par 4, 380 yards, Sir.",
        "phonetic": "/ðɪs ɪz hoʊl ˈnʌm.bər θriː, pɑːr fɔːr, ˈθriː ˈhʌn.drəd ænd ˈeɪ.ti jɑːrdz, sɜːr/",
        "translation": "Đây là hố số 3, Par 4, dài 380 yard thưa anh.",
        "options": [
            { "en": "A. This is Hole number 3, Par 4, 380 yards, Sir.", "vi": "Đây là hố số 3, Par 4, 380 yard thưa anh" },
            { "en": "B. This is Hole number 5, Par 3, 150 yards, Sir.", "vi": "Đây là hố số 5, Par 3, 150 yard thưa anh" },
            { "en": "C. This is Hole number 18, Par 5, 500 yards, Sir.", "vi": "Đây là hố số 18, Par 5, 500 yard thưa anh" },
            { "en": "D. This is the clubhouse area, Sir.", "vi": "Đây là khu vực nhà câu lạc bộ thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The pin is at the back of the green today, Sir.",
        "phonetic": "/ðə pɪn ɪz æt ðə bæk əv ðə ɡriːn təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ cắm ở phía cuối green thưa anh.",
        "options": [
            { "en": "A. The pin is at the back of the green today, Sir.", "vi": "Cờ cắm ở phía cuối green thưa anh" },
            { "en": "B. The pin is at the front of the green today, Sir.", "vi": "Cờ cắm ở đầu green thưa anh" },
            { "en": "C. The pin is in the middle of green, Sir.", "vi": "Cờ cắm ở giữa green thưa anh" },
            { "en": "D. There is no pin on the green today, Sir.", "vi": "Hôm nay không cắm cờ thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You have 150 yards to the green. An 8-iron is good, Sir.",
        "phonetic": "/juː hæv wʌn ˈhʌn.drəd ˈfɪf.ti jɑːrdz tə ðə ɡriːn. æn eɪt ˈaɪ.ən ɪz ɡʊd, sɜːr/",
        "translation": "Anh còn 150 yard nữa lên green. Gậy sắt 8 là phù hợp thưa anh.",
        "options": [
            { "en": "A. You have 150 yards to the green. An 8-iron is good, Sir.", "vi": "Còn 150 yard, gậy sắt 8 phù hợp ạ" },
            { "en": "B. You have 50 yards. Use your driver, Sir.", "vi": "Còn 50 yard, dùng gậy driver ạ" },
            { "en": "C. You have 300 yards. Use a putter, Sir.", "vi": "Còn 300 yard, dùng gậy gạt ạ" },
            { "en": "D. You are already in the hole, Sir.", "vi": "Anh đã vào lỗ rồi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "There is a big bunker on the right side of the fairway, Sir.",
        "phonetic": "/ðer ɪz ə bɪɡ ˈbʌŋ.kər ɑːn ðə raɪt saɪd əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Có bẫy cát lớn ở bên phải fairway thưa anh.",
        "options": [
            { "en": "A. There is a big bunker on the right side of the fairway, Sir.", "vi": "Có bẫy cát lớn bên phải fairway thưa anh" },
            { "en": "B. There is a lake on the left side, Sir.", "vi": "Có hồ nước bên trái thưa anh" },
            { "en": "C. The fairway is clear with no hazards, Sir.", "vi": "Fairway thoáng không có bẫy thưa anh" },
            { "en": "D. There is a buggy path on the green, Sir.", "vi": "Có đường xe điện trên green thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please be careful, there is water behind the green, Sir.",
        "phonetic": "/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Xin anh cẩn thận, có hồ nước ở phía sau green ạ.",
        "options": [
            { "en": "A. Please be careful, there is water behind the green, Sir.", "vi": "Xin cẩn thận có nước phía sau green ạ" },
            { "en": "B. There is a bunker in front of the tee, Sir.", "vi": "Có bẫy cát trước tee box ạ" },
            { "en": "C. The green is completely dry, Sir.", "vi": "Green hoàn toàn khô ráo ạ" },
            { "en": "D. You can hit as long as you want, Sir.", "vi": "Anh có thể đánh dài tùy thích ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You have 100 yards left. A Pitching Wedge is perfect, Sir.",
        "phonetic": "/juː hæv wʌn ˈhʌn.drəd jɑːrdz left. ə ˈpɪtʃ.ɪŋ wedʒ ɪz ˈpɜːr.fekt, sɜːr/",
        "translation": "Anh còn 100 yard nữa. Gậy PW là hoàn hảo thưa anh.",
        "options": [
            { "en": "A. You have 100 yards left. A Pitching Wedge is perfect, Sir.", "vi": "Còn 100 yard, gậy PW là hoàn hảo ạ" },
            { "en": "B. You have 250 yards left. Use 3-wood, Sir.", "vi": "Còn 250 yard, dùng gậy gỗ 3 ạ" },
            { "en": "C. Use your putter for 100 yards, Sir.", "vi": "Dùng gậy gạt cho 100 yard ạ" },
            { "en": "D. You don't need a club, Sir.", "vi": "Anh không cần gậy ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The green is elevated, Sir. You should use one club more.",
        "phonetic": "/ðə ɡriːn ɪz ˈel.ə.veɪ.t̬ɪd, sɜːr. juː ʃʊd juːz wʌn klʌb mɔːr/",
        "translation": "Vùng green ở dốc cao thưa anh. Anh nên tăng thêm 1 gậy ạ.",
        "options": [
            { "en": "A. The green is elevated, Sir. You should use one club more.", "vi": "Green ở dốc cao, nên tăng thêm 1 gậy ạ" },
            { "en": "B. The green is downhill, Sir. Take less club.", "vi": "Green ở dốc xuống, lấy giảm gậy đi ạ" },
            { "en": "C. The green is flat, Sir.", "vi": "Green bằng phẳng thưa anh" },
            { "en": "D. The green is underwater, Sir.", "vi": "Green ngập trong nước thưa anh" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "A Hybrid or a 5-iron is safer than a Driver here, Sir.",
        "phonetic": "/ə ˈhaɪ.brɪd ɔːr ə faɪv ˈaɪ.ən ɪz ˈseɪf.ər ðæn ə ˈdraɪ.vər hɪər, sɜːr/",
        "translation": "Gậy Hybrid hoặc sắt 5 sẽ an toàn hơn gậy Driver ở đây thưa anh.",
        "options": [
            { "en": "A. A Hybrid or a 5-iron is safer than a Driver here, Sir.", "vi": "Hybrid hoặc sắt 5 an toàn hơn Driver ở đây ạ" },
            { "en": "B. Always hit Driver as hard as you can, Sir.", "vi": "Lúc nào cũng vung Driver hết lực ạ" },
            { "en": "C. Use putter from the tee box, Sir.", "vi": "Dùng gậy gạt từ tee box ạ" },
            { "en": "D. Don't use iron clubs today, Sir.", "vi": "Hôm nay không dùng gậy sắt ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The cup is on a downhill slope, Sir. Please putt gently.",
        "phonetic": "/ðə kʌp ɪz ɑːn ə ˌdaʊnˈhɪl sloʊp, sɜːr. pliːz pʌt ˈdʒent.li/",
        "translation": "Lỗ gôn nằm trên dốc đổ xuống thưa anh. Xin gạt bóng nhẹ nhàng ạ.",
        "options": [
            { "en": "A. The cup is on a downhill slope, Sir. Please putt gently.", "vi": "Lỗ ở dốc xuống, xin gạt nhẹ nhàng ạ" },
            { "en": "B. Hit your putt as hard as possible, Sir.", "vi": "Gạt bóng hết lực có thể ạ" },
            { "en": "C. The green is uphill slope, Sir. Hit firmer.", "vi": "Green dốc lên, đánh căng hơn ạ" },
            { "en": "D. The cup is closed, Sir.", "vi": "Lỗ gôn đóng cửa rồi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "I read it as two balls to the right, Sir.",
        "phonetic": "/aɪ red ɪt æz tuː bɔːlz tə ðə raɪt, sɜːr/",
        "translation": "Em đọc đường này lệch 2 quả bóng về bên phải thưa anh.",
        "options": [
            { "en": "A. I read it as two balls to the right, Sir.", "vi": "Lệch 2 quả bóng về bên phải thưa anh" },
            { "en": "B. Aim straight into the cup, Sir.", "vi": "Ngắm thẳng vào giữa lỗ thưa anh" },
            { "en": "C. Aim 5 cups to the left, Sir.", "vi": "Ngắm lệch 5 miệng hố sang trái ạ" },
            { "en": "D. The green is flat with no break, Sir.", "vi": "Green phẳng không đổ dốc ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "The green is very fast today, Sir. Keep it on the low side.",
        "phonetic": "/ðə ɡriːn ɪz ˈver.i fæst təˈdeɪ, sɜːr. kiːp ɪt ɑːn ðə loʊ saɪd/",
        "translation": "Green hôm nay rất chạy thưa anh. Hãy giữ bóng ở sườn thấp.",
        "options": [
            { "en": "A. The green is very fast today, Sir. Keep it on the low side.", "vi": "Green rất chạy, giữ bóng ở sườn thấp ạ" },
            { "en": "B. The green is very slow, hit very hard, Sir.", "vi": "Green rất chậm, đánh thật mạnh ạ" },
            { "en": "C. The green is wet and muddy, Sir.", "vi": "Green ướt và đầm lầy ạ" },
            { "en": "D. The flagstick is broken, Sir.", "vi": "Cột cờ bị gãy rồi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Here is your driver and your glove, Sir. Good luck!",
        "phonetic": "/hɪər ɪz jʊər ˈdraɪ.vər ænd jʊər ɡlʌv, sɜːr. ɡʊd lʌk/",
        "translation": "Gửi anh gậy Driver và găng tay ạ. Chúc anh may mắn!",
        "options": [
            { "en": "A. Here is your driver and your glove, Sir. Good luck!", "vi": "Gửi anh Driver và găng tay ạ. Chúc may mắn!" },
            { "en": "B. Here is your putter and cold towel, Sir.", "vi": "Gửi anh gậy gạt và khăn lạnh ạ" },
            { "en": "C. Please buy new gloves at proshop, Sir.", "vi": "Mua găng tay mới ở proshop ạ" },
            { "en": "D. Clean your shoes now, Sir.", "vi": "Lau giày ngay đi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Which club would you like to use for this shot, Sir?",
        "phonetic": "/wɪtʃ klʌb wʊd juː laɪk tə juːz fɔːr ðɪs ʃɑːt, sɜːr/",
        "translation": "Anh muốn dùng cây gậy nào cho cú đánh này ạ?",
        "options": [
            { "en": "A. Which club would you like to use for this shot, Sir?", "vi": "Anh muốn dùng gậy nào cho cú này ạ?" },
            { "en": "B. Do you want to go home now, Sir?", "vi": "Anh có muốn về nhà bây giờ không ạ?" },
            { "en": "C. How much is your golf bag, Sir?", "vi": "Túi gậy của anh bao nhiêu tiền ạ?" },
            { "en": "D. Where is the clubhouse restaurant, Sir?", "vi": "Nhà hàng ở đâu thưa anh?" }
        ],
        "correct": 0
    },

    // Fill in the blanks (26-35)
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "This is Hole number 3, Par 4, Sir.",
        "phonetic": "/ðɪs ɪz hoʊl ˈnʌm.bər θriː, pɑːr fɔːr, sɜːr/",
        "translation": "Đây là hố số 3, Par 4 thưa anh.",
        "displaySentence": "This is Hole number _______, Par 4, Sir.",
        "targetWord": "3",
        "hint": "💡 Gợi ý: Nhập số."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The pin is at the back of the green today, Sir.",
        "phonetic": "/ðə pɪn ɪz æt ðə bæk əv ðə ɡriːn təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ cắm ở phía cuối green thưa anh.",
        "displaySentence": "The pin is at the _______ of the green today, Sir.",
        "targetWord": "back",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "You have 150 yards left to the green, Sir.",
        "phonetic": "/juː hæv wʌn ˈhʌn.drəd ˈfɪf.ti jɑːrdz left tə ðə ɡriːn, sɜːr/",
        "translation": "Anh còn 150 yard nữa lên green thưa anh.",
        "displaySentence": "You have _______ yards left to the green, Sir.",
        "targetWord": "150",
        "hint": "💡 Gợi ý: Nhập số."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "You should use one club more, Sir.",
        "phonetic": "/juː ʃʊd juːz wʌn klʌb mɔːr, sɜːr/",
        "translation": "Anh nên dùng tăng thêm 1 gậy ạ.",
        "displaySentence": "You should use one club _______, Sir.",
        "targetWord": "more",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "There is water behind the green, Sir.",
        "phonetic": "/ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Có hồ nước ở phía sau green thưa anh.",
        "displaySentence": "There is _______ behind the green, Sir.",
        "targetWord": "water",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The cup is on a downhill slope, Sir.",
        "phonetic": "/ðə kʌp ɪz ɑːn ə ˌdaʊnˈhɪl sloʊp, sɜːr/",
        "translation": "Lỗ gôn nằm trên dốc đổ xuống thưa anh.",
        "displaySentence": "The cup is on a _______ slope, Sir.",
        "targetWord": "downhill",
        "hint": "💡 Gợi ý: Từ gồm 8 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The green is very fast today, Sir.",
        "phonetic": "/ðə ɡriːn ɪz ˈver.i fæst təˈdeɪ, sɜːr/",
        "translation": "Green hôm nay rất chạy thưa anh.",
        "displaySentence": "The green is very _______ today, Sir.",
        "targetWord": "fast",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please putt gently, Sir.",
        "phonetic": "/pliːz pʌt ˈdʒent.li, sɜːr/",
        "translation": "Xin vui lòng gạt bóng nhẹ nhàng ạ.",
        "displaySentence": "Please putt _______, Sir.",
        "targetWord": "gently",
        "hint": "💡 Gợi ý: Từ gồm 6 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "A Pitching Wedge is perfect for this shot, Sir.",
        "phonetic": "/ə ˈpɪtʃ.ɪŋ wedʒ ɪz ˈpɜːr.fekt fɔːr ðɪs ʃɑːt, sɜːr/",
        "translation": "Gậy Pitching Wedge là hoàn hảo cho cú đánh này ạ.",
        "displaySentence": "A Pitching _______ is perfect for this shot, Sir.",
        "targetWord": "Wedge",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Here is your club, Sir. Good luck!",
        "phonetic": "/hɪər ɪz jʊər klʌb, sɜːr. ɡʊd lʌk/",
        "translation": "Gậy của anh đây ạ. Chúc anh may mắn!",
        "displaySentence": "Here is your club, Sir. Good _______!",
        "targetWord": "luck",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },

    // Practical MCQs (36-40)
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại chiến thuật và chọn phương án đúng:",
        "audioText": "The pin is guarded by bunker. I recommend aiming to the center of the green, Sir.",
        "phonetic": "/ðə pɪn ɪz ɡɑːr.dɪd baɪ ˈbʌŋ.kər. aɪ ˌrek.əˈmend ˈeɪ.mɪŋ tə ðə ˈsen.tər əv ðə ɡriːn, sɜːr/",
        "translation": "Cờ bị chắn bởi bẫy cát. Em khuyên nên ngắm vào giữa green thưa anh.",
        "options": [
            { "en": "A. I recommend aiming to the center of the green, Sir.", "vi": "Em khuyên nên ngắm vào giữa green ạ" },
            { "en": "B. Hit directly into the sand bunker, Sir.", "vi": "Đánh thẳng vào bẫy cát ạ" },
            { "en": "C. Hit as hard as you can out of bounds, Sir.", "vi": "Đánh hết lực ra ngoài biên ạ" },
            { "en": "D. Use putter from 200 yards, Sir.", "vi": "Dùng gậy gạt từ 200 yard ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại kiểm soát lực và chọn phương án đúng:",
        "audioText": "Greens are running fast today. Please make a softer touch, Sir.",
        "phonetic": "/ɡriːnz ɑːr ˈrʌn.ɪŋ fæst təˈdeɪ. pliːz meɪk ə ˈsɑːf.tər tʌtʃ, sɜːr/",
        "translation": "Green chạy nhanh hôm nay. Xin hãy gạt nhẹ tay hơn thưa anh.",
        "options": [
            { "en": "A. Please make a softer touch with your putt, Sir.", "vi": "Xin hãy gạt nhẹ tay hơn thưa anh" },
            { "en": "B. Hit the putt as hard as possible, Sir.", "vi": "Gạt bóng thật mạnh tay ạ" },
            { "en": "C. The green is very slow, Sir.", "vi": "Green rất chậm thưa anh" },
            { "en": "D. Stop putting right now, Sir.", "vi": "Dừng gạt bóng ngay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại thớ cỏ và chọn phương án đúng:",
        "audioText": "It is against the grain, Sir. Please hit your putt a touch firmer.",
        "phonetic": "/ɪt ɪz əˈɡenst ðə ɡreɪn, sɜːr. pliːz hɪt jʊər pʌt ə tʌtʃ ˈfɜːr.mər/",
        "translation": "Cú gạt ngược thớ cỏ thưa anh. Xin gạt bóng chắc tay hơn một chút ạ.",
        "options": [
            { "en": "A. Please hit your putt a touch firmer, Sir.", "vi": "Xin gạt bóng chắc tay hơn một chút ạ" },
            { "en": "B. Hit your putt very softly, Sir.", "vi": "Gạt bóng thật nhẹ thôi ạ" },
            { "en": "C. The green is extremely fast, Sir.", "vi": "Green cực kỳ nhanh ạ" },
            { "en": "D. Use driver on the green, Sir.", "vi": "Dùng gậy driver trên green ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại dốc fairway và chọn phương án đúng:",
        "audioText": "The fairway is downhill, Sir. Would you like to have less club?",
        "phonetic": "/ðə ˈfer.weɪ ɪz ˌdaʊnˈhɪl, sɜːr. wʊd juː laɪk tə hæv les klʌb/",
        "translation": "Fairway dốc xuống thưa anh. Anh có muốn giảm bớt số gậy đi không ạ?",
        "options": [
            { "en": "A. The fairway is downhill. Would you like less club, Sir?", "vi": "Fairway dốc xuống, anh có muốn giảm số gậy đi không ạ?" },
            { "en": "B. Add two clubs for downhill slope, Sir.", "vi": "Tăng thêm 2 gậy cho dốc xuống ạ" },
            { "en": "C. Use putter for 200 yards downhill, Sir.", "vi": "Dùng gậy gạt cho 200 yard dốc xuống ạ" },
            { "en": "D. No need to hit the ball, Sir.", "vi": "Không cần đánh bóng ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại vượt bẫy và chọn phương án đúng:",
        "audioText": "You need 200 yards to carry the fairway bunker, Sir.",
        "phonetic": "/juː niːd tuː ˈhʌn.drəd jɑːrdz tə ˈkær.i ðə ˈfer.weɪ ˈbʌŋ.kər, sɜːr/",
        "translation": "Anh cần đánh qua 200 yard để vượt bẫy cát fairway thưa anh.",
        "options": [
            { "en": "A. You need 200 yards to carry the fairway bunker, Sir.", "vi": "Cần 200 yard để vượt qua bẫy cát fairway ạ" },
            { "en": "B. The bunker is 50 yards away, Sir.", "vi": "Bẫy cát cách 50 yard ạ" },
            { "en": "C. Hit into the water, Sir.", "vi": "Đánh xuống nước ạ" },
            { "en": "D. The hole is finished, Sir.", "vi": "Hố này xong rồi ạ" }
        ],
        "correct": 0
    },

    // =========================================================================
    // SECTION 3.4: THỰC HÀNH & LUYỆN TẬP PHẢN XẠ (ROLE-PLAY DRILLS) - 40 CÂU
    // =========================================================================
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "This is Hole 5, Par 4, 410 yards. Straight ahead, but OB is on the left, Sir.",
        "phonetic": "/ðɪs ɪz hoʊl faɪv, pɑːr fɔːr, fɔːr ˈhʌn.drəd ænd ten jɑːrdz. streɪt əˈhed, bʌt oʊ-biː ɪz ɑːn ðə left, sɜːr/",
        "translation": "Đây là hố 5, Par 4, 410 yard. Đường đánh thẳng, nhưng có OB bên trái thưa anh.",
        "options": [
            { "en": "A. This is Hole 5, Par 4, 410 yards. Straight ahead, OB is left, Sir.", "vi": "Hố 5, Par 4, 410 yard. Thẳng phía trước, OB bên trái ạ" },
            { "en": "B. This is Hole 1, Par 3, 100 yards, Sir.", "vi": "Đây là hố 1, Par 3, 100 yard thưa anh" },
            { "en": "C. This is the practice range, Sir.", "vi": "Đây là sân tập thưa anh" },
            { "en": "D. Please go home now, Sir.", "vi": "Xin mời anh về nhà ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Here is your driver, Sir. Please hit when you are ready!",
        "phonetic": "/hɪər ɪz jʊər ˈdraɪ.vər, sɜːr. pliːz hɪt wen juː ɑːr ˈred.i/",
        "translation": "Gậy Driver của anh đây ạ. Xin đánh khi anh đã sẵn sàng!",
        "options": [
            { "en": "A. Here is your driver, Sir. Please hit when you are ready!", "vi": "Gậy Driver đây ạ. Xin đánh khi anh sẵn sàng!" },
            { "en": "B. Don't hit the driver today, Sir.", "vi": "Đừng đánh driver hôm nay ạ" },
            { "en": "C. Your swing is wrong, Sir.", "vi": "Cú vung gậy của anh sai rồi ạ" },
            { "en": "D. Stop playing golf, Sir.", "vi": "Dừng chơi golf ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You have 135 yards left to the front pin, Sir. Wind is from behind.",
        "phonetic": "/juː hæv wʌn ˈθɜːr.ti faɪv jɑːrdz left tə ðə frʌnt pɪn, sɜːr. wɪnd ɪz frəm bɪˈhaɪnd/",
        "translation": "Anh còn 135 yard đến cờ trước thưa anh. Gió đang thổi xuôi từ phía sau ạ.",
        "options": [
            { "en": "A. You have 135 yards left to the front pin, Sir. Wind is from behind.", "vi": "Còn 135 yard tới cờ trước, gió thuận sau lưng ạ" },
            { "en": "B. You have 300 yards left, Sir.", "vi": "Còn 300 yard nữa thưa anh" },
            { "en": "C. The pin is lost, Sir.", "vi": "Cột cờ bị mất rồi ạ" },
            { "en": "D. Use your putter now, Sir.", "vi": "Dùng gậy gạt ngay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "I recommend a 9-iron, Sir. It will fly perfectly with the wind.",
        "phonetic": "/aɪ ˌrek.əˈmend ə naɪn ˈaɪ.ən, sɜːr. ɪt wɪl flaɪ ˈpɜːr.fekt.li wɪð ðə wɪnd/",
        "translation": "Em gợi ý gậy sắt 9 ạ. Bóng sẽ bay rất đẹp nhờ thuận gió.",
        "options": [
            { "en": "A. I recommend a 9-iron, Sir. It will fly perfectly with the wind.", "vi": "Gợi ý gậy sắt 9, bóng bay đẹp nhờ thuận gió ạ" },
            { "en": "B. Use a 3-wood for 135 yards, Sir.", "vi": "Dùng gậy gỗ 3 cho 135 yard ạ" },
            { "en": "C. Use driver from fairway, Sir.", "vi": "Dùng gậy driver từ fairway ạ" },
            { "en": "D. Don't use iron, Sir.", "vi": "Không dùng gậy sắt ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Here is your Sand Wedge and your putter for the next shot, Sir.",
        "phonetic": "/hɪər ɪz jʊər sænd wedʒ ænd jʊər ˈpʌt.ər fɔːr ðə nekst ʃɑːt, sɜːr/",
        "translation": "Gửi anh cây Sand Wedge và gậy gạt cho cú đánh tiếp theo ạ.",
        "options": [
            { "en": "A. Here is your Sand Wedge and your putter for the next shot, Sir.", "vi": "Gửi anh gậy SW và gậy gạt cho cú sau ạ" },
            { "en": "B. I don't have Sand Wedge, Sir.", "vi": "Em không có gậy SW ạ" },
            { "en": "C. Use driver out of the bunker, Sir.", "vi": "Dùng driver cứu bóng khỏi bẫy cát ạ" },
            { "en": "D. Leave the clubs here, Sir.", "vi": "Đẩy gậy ở đây ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Yes, Sir. The green is quite fast and slopes down from right to left.",
        "phonetic": "/jes sɜːr. ðə ɡriːn ɪz kwaɪt fæst ænd sloʊps daʊn frəm raɪt tə left/",
        "translation": "Vâng thưa anh. Green khá nhanh và dốc đổ từ phải sang trái ạ.",
        "options": [
            { "en": "A. The green is quite fast and slopes down from right to left, Sir.", "vi": "Green khá nhanh và dốc đổ từ phải sang trái ạ" },
            { "en": "B. The green is very slow and flat, Sir.", "vi": "Green rất chậm và bằng phẳng ạ" },
            { "en": "C. The green is covered in snow, Sir.", "vi": "Green phủ đầy tuyết ạ" },
            { "en": "D. The green is under repair, Sir.", "vi": "Green đang sửa chữa ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "It is in the bunker, but it has a good lie. You have 160 yards left, Sir.",
        "phonetic": "/ɪt ɪz ɪn ðə ˈbʌŋ.kər, bʌt ɪt hæz ə ɡʊd laɪ. juː hæv wʌn ˈsɪks.ti jɑːrdz left, sɜːr/",
        "translation": "Bóng trong cát nhưng thế bóng khá đẹp. Anh còn 160 yard nữa thưa anh.",
        "options": [
            { "en": "A. It is in the bunker, but it has a good lie. You have 160 yards left, Sir.", "vi": "Bóng trong cát nhưng thế bóng đẹp, còn 160 yard ạ" },
            { "en": "B. The ball is lost in the lake, Sir.", "vi": "Bóng mất dưới hồ rồi ạ" },
            { "en": "C. The ball is on the green, Sir.", "vi": "Bóng đã trên green rồi ạ" },
            { "en": "D. You must walk home now, Sir.", "vi": "Anh phải đi bộ về nhà ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "I recommend a 7-iron, Sir. Just focus on clean contact to clear the lip.",
        "phonetic": "/aɪ ˌrek.əˈmend ə ˈsev.ən ˈaɪ.ən, sɜːr. dʒʌst ˈfoʊ.kəs ɑːn kliːn ˈkɑːn.tækt tə klɪər ðə lɪp/",
        "translation": "Gợi ý gậy sắt 7 ạ. Chỉ cần tập trung tiếp bóng gọn để qua thành cát.",
        "options": [
            { "en": "A. I recommend a 7-iron, Sir. Focus on clean contact to clear the lip.", "vi": "Gợi ý gậy sắt 7, tập trung tiếp bóng gọn qua thành cát ạ" },
            { "en": "B. Hit driver as hard as possible out of sand, Sir.", "vi": "Dùng driver vung hết lực trong cát ạ" },
            { "en": "C. Use putter to roll out of the bunker, Sir.", "vi": "Dùng gậy gạt lăn bóng khỏi bẫy cát ạ" },
            { "en": "D. Pick up the ball with hand, Sir.", "vi": "Nhặt bóng lên bằng tay ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "You should use the 8-iron, Sir. Aim slightly left and let the wind drift it back.",
        "phonetic": "/juː ʃʊd juːz ðə eɪt ˈaɪ.ən, sɜːr. eɪm ˈslaɪt.li left ænd let ðə wɪnd drɪft ɪt bæk/",
        "translation": "Nên dùng gậy sắt 8 ạ. Ngắm hơi lệch trái và để gió đẩy bóng lượn về.",
        "options": [
            { "en": "A. You should use the 8-iron, Sir. Aim slightly left for the wind.", "vi": "Nên dùng gậy sắt 8, ngắm lệch trái nương theo gió ạ" },
            { "en": "B. Use 9-iron and aim to the right hazard, Sir.", "vi": "Dùng sắt 9 ngắm vào bẫy bên phải ạ" },
            { "en": "C. Use driver for 140 yards, Sir.", "vi": "Dùng driver cho 140 yard ạ" },
            { "en": "D. Don't hit against crosswind, Sir.", "vi": "Đừng đánh khi có gió ngang ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Here is your 8-iron, Sir. Trust your swing!",
        "phonetic": "/hɪər ɪz jʊər eɪt ˈaɪ.ən, sɜːr. trʌst jʊər swɪŋ/",
        "translation": "Gậy sắt số 8 của anh đây ạ. Hãy tự tin vào cú swing của mình!",
        "options": [
            { "en": "A. Here is your 8-iron, Sir. Trust your swing!", "vi": "Gậy sắt 8 đây ạ. Hãy tự tin vào cú swing của mình!" },
            { "en": "B. Here is your 8-iron. I think you will miss, Sir.", "vi": "Gậy sắt 8 đây. Em nghĩ anh sẽ đánh hỏng ạ" },
            { "en": "C. This club is too heavy for you, Sir.", "vi": "Cây gậy này quá nặng so với anh ạ" },
            { "en": "D. Return the club to the bag, Sir.", "vi": "Cất gậy lại vào túi đi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "I found it next to the tree, Sir. But the ball is buried down in deep rough.",
        "phonetic": "/aɪ faʊnd ɪt nekst tə ðə triː, sɜːr. bʌt ðə bɔːl ɪz ˈber.id daʊn ɪn diːp rʌf/",
        "translation": "Em tìm thấy cạnh cây rồi ạ. Tuy nhiên bóng bị chìm sâu trong cỏ rậm.",
        "options": [
            { "en": "A. I found it next to the tree, Sir. It is buried in deep rough.", "vi": "Tìm thấy cạnh cây rồi ạ. Bóng chìm sâu trong cỏ rậm ạ" },
            { "en": "B. Ball is lost, Sir.", "vi": "Bóng bị mất rồi ạ" },
            { "en": "C. Ball is in the middle of cup, Sir.", "vi": "Bóng ở giữa lỗ gôn ạ" },
            { "en": "D. Ball is on the cart seat, Sir.", "vi": "Bóng ở trên ghế xe điện ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "It is too risky, Sir. Please use a Sand Wedge to chip it back to fairway first.",
        "phonetic": "/ɪt ɪz tuː ˈrɪs.ki, sɜːr. pliːz juːz ə sænd wedʒ tə tʃɪp ɪt bæk tə ˈfer.weɪ fɜːrst/",
        "translation": "Rủi ro lắm thưa anh. Anh nên dùng Sand Wedge chip bóng ra fairway trước ạ.",
        "options": [
            { "en": "A. It is too risky, Sir. Use Sand Wedge to chip it back to fairway first.", "vi": "Rủi ro lắm ạ. Nên dùng SW chip bóng ra fairway trước ạ" },
            { "en": "B. Yes, hit Rescue as hard as possible to green, Sir.", "vi": "Vâng, dùng Rescue vung hết lực lên green ạ" },
            { "en": "C. Use putter from deep rough, Sir.", "vi": "Dùng gậy gạt từ cỏ rậm ạ" },
            { "en": "D. Leave the ball in the rough forever, Sir.", "vi": "Bỏ bóng lại trong cỏ rậm luôn ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Actually, Sir, it's a double break. Slightly left first, then slopes right to left.",
        "phonetic": "/ˈæk.tʃu.ə.li sɜːr, ɪts ə ˈdʌb.əl breɪk. ˈslaɪt.li left fɜːrst, ðen sloʊps raɪt tə left/",
        "translation": "Thực ra đây là dốc 2 chiều ạ. Hơi lượn trái trước, sau đó đổ từ phải sang trái.",
        "options": [
            { "en": "A. Actually, Sir, it's a double break. Slightly left first, then right to left.", "vi": "Thực ra đây là dốc 2 chiều, hơi lượn trái rồi đổ từ phải sang trái ạ" },
            { "en": "B. It is a completely flat putt, Sir.", "vi": "Cú gạt hoàn toàn bằng phẳng ạ" },
            { "en": "C. Aim straight into the lake behind, Sir.", "vi": "Ngắm thẳng xuống hồ phía sau ạ" },
            { "en": "D. The green has no slope at all, Sir.", "vi": "Green hoàn toàn không có độ dốc ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Đóng vai thực chiến] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        "audioText": "Please aim one ball width to the right of the cup, Sir. Keep speed firm.",
        "phonetic": "/pliːz eɪm wʌn bɔːl wɪdθ tə ðə raɪt əv ðə kʌp, sɜːr. kiːp spiːd fɜːrm/",
        "translation": "Xin ngắm chệch sang phải miệng hố 1 quả bóng ạ. Và giữ lực gạt chắc tay.",
        "options": [
            { "en": "A. Please aim one ball width to the right of the cup, Sir. Keep speed firm.", "vi": "Xin ngắm chệch phải miệng hố 1 quả bóng và gạt chắc tay ạ" },
            { "en": "B. Aim 10 feet to the left of the hole, Sir.", "vi": "Ngắm chệch trái 10 feet ạ" },
            { "en": "C. Hit the ball softly with no speed, Sir.", "vi": "Đánh bóng nhẹ hều không có lực ạ" },
            { "en": "D. Turn your back to the hole, Sir.", "vi": "Quay lưng về phía lỗ gôn ạ" }
        ],
        "correct": 0
    },

    // Fill in the blanks (26-35)
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "The fairway is straight, but there is an OB on the left side, Sir.",
        "phonetic": "/ðə ˈfer.weɪ ɪz streɪt, bʌt ðer ɪz æn oʊ-biː ɑːn ðə left saɪd, sɜːr/",
        "translation": "Fairway thẳng, nhưng có OB ở phía bên trái thưa anh.",
        "displaySentence": "The fairway is straight, but there is an _______ on the left side, Sir.",
        "targetWord": "OB",
        "hint": "💡 Gợi ý: Từ gồm 2 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "I recommend a 9-iron for this 135 yards shot, Sir.",
        "phonetic": "/aɪ ˌrek.əˈmend ə naɪn ˈaɪ.ən fɔːr ðɪs wʌn ˈθɜːr.ti faɪv jɑːrdz ʃɑːt, sɜːr/",
        "translation": "Em gợi ý gậy sắt 9 cho cú đánh 135 yard này thưa anh.",
        "displaySentence": "I recommend a 9-_______ for this 135 yards shot, Sir.",
        "targetWord": "iron",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Here is your Sand Wedge, Sir.",
        "phonetic": "/hɪər ɪz jʊər sænd wedʒ, sɜːr/",
        "translation": "Gửi anh gậy Sand Wedge ạ.",
        "displaySentence": "Here is your Sand _______, Sir.",
        "targetWord": "Wedge",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Just focus on clean contact to clear the bunker lip, Sir.",
        "phonetic": "/dʒʌst ˈfoʊ.kəs ɑːn kliːn ˈkɑːn.tækt tə klɪər ðə ˈbʌŋ.kər lɪp, sɜːr/",
        "translation": "Chỉ cần tập trung tiếp bóng gọn để qua thành bẫy cát thưa anh.",
        "displaySentence": "Just focus on clean contact to clear the bunker _______, Sir.",
        "targetWord": "lip",
        "hint": "💡 Gợi ý: Từ gồm 3 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Here is your 8-iron, Sir. Trust your swing!",
        "phonetic": "/hɪər ɪz jʊər eɪt ˈaɪ.ən, sɜːr. trʌst jʊər swɪŋ/",
        "translation": "Gậy sắt 8 của anh đây ạ. Hãy tin tưởng vào cú swing của mình!",
        "displaySentence": "Here is your 8-iron, Sir. Trust your _______!",
        "targetWord": "swing",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "I found your ball right next to the tree, Sir.",
        "phonetic": "/aɪ faʊnd jʊər bɔːl raɪt nekst tə ðə triː, sɜːr/",
        "translation": "Em tìm thấy bóng ngay cạnh cái cây rồi thưa anh.",
        "displaySentence": "I found your ball right next to the _______, Sir.",
        "targetWord": "tree",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please chip it out safely back to the fairway first, Sir.",
        "phonetic": "/pliːz tʃɪp ɪt aʊt ˈseɪf.li bæk tə ðə ˈfer.weɪ fɜːrst, sɜːr/",
        "translation": "Xin chip bóng ra an toàn quay lại fairway trước ạ.",
        "displaySentence": "Please chip it out safely back to the _______ first, Sir.",
        "targetWord": "fairway",
        "hint": "💡 Gợi ý: Từ gồm 7 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Actually, Sir, it is a double break.",
        "phonetic": "/ˈæk.tʃu.ə.li, sɜːr, ɪt ɪz ə ˈdʌb.əl breɪk/",
        "translation": "Thực ra thưa anh, đây là dốc lượn 2 chiều ạ.",
        "displaySentence": "Actually, Sir, it is a double _______.",
        "targetWord": "break",
        "hint": "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please keep the speed firm, Sir.",
        "phonetic": "/pliːz kiːp ðə spiːd fɜːrm, sɜːr/",
        "translation": "Xin hãy giữ lực gạt thật chắc tay thưa anh.",
        "displaySentence": "Please keep the speed _______, Sir.",
        "targetWord": "firm",
        "hint": "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        "audioText": "Please aim one ball width to the right of the cup, Sir.",
        "phonetic": "/pliːz eɪm wʌn bɔːl wɪdθ tə ðə raɪt əv ðə kʌp, sɜːr/",
        "translation": "Xin ngắm chệch sang bên phải lỗ gôn 1 quả bóng ạ.",
        "displaySentence": "Please aim one ball width to the right of the _______, Sir.",
        "targetWord": "cup",
        "hint": "💡 Gợi ý: Từ gồm 3 ký tự."
    },

    // Practical MCQs (36-40)
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại chiến thuật và chọn phương án đúng:",
        "audioText": "Don't worry, Sir. I have an eagle eye, I will watch your ball position.",
        "phonetic": "/doʊnt ˈwɜːr.i sɜːr. aɪ hæv æn ˈiː.ɡəl aɪ, aɪ wɪl wɑːtʃ jʊər bɔːl pəˈzɪʃ.ən/",
        "translation": "Anh đừng lo ạ. Mắt em rất tinh, em sẽ canh chuẩn vị trí bóng cho anh.",
        "options": [
            { "en": "A. Don't worry, Sir. I have an eagle eye, I will watch your ball.", "vi": "Đừng lo ạ, mắt em tinh lắm em sẽ canh bóng cho anh" },
            { "en": "B. I am blind and cannot see your ball, Sir.", "vi": "Em không nhìn thấy bóng của anh ạ" },
            { "en": "C. Find the ball by yourself, Sir.", "vi": "Anh tự đi tìm bóng nhé ạ" },
            { "en": "D. Look at the clouds in the sky, Sir.", "vi": "Nhìn lên mây trên trời đi ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại line gạt và chọn phương án đúng:",
        "audioText": "It breaks slightly from left to right, Sir. Aim half a cup to the left.",
        "phonetic": "/ɪt breɪks ˈslaɪt.li frəm left tə raɪt, sɜːr. eɪm hæf ə kʌp tə ðə left/",
        "translation": "Bóng lượn nhẹ từ trái sang phải thưa anh. Ngắm lệch trái nửa miệng hố ạ.",
        "options": [
            { "en": "A. Aim half a cup to the left, Sir.", "vi": "Ngắm chệch trái nửa miệng hố ạ" },
            { "en": "B. Aim 10 meters to the right, Sir.", "vi": "Ngắm chệch phải 10 mét ạ" },
            { "en": "C. Hit directly at the bunker, Sir.", "vi": "Đánh thẳng vào bẫy cát ạ" },
            { "en": "D. Putt backwards away from the hole, Sir.", "vi": "Gạt bóng lùi xa khỏi lỗ ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại chọn gậy và chọn phương án đúng:",
        "audioText": "The green is elevated, Sir. The 7-iron is much safer than the 8-iron.",
        "phonetic": "/ðə ɡriːn ɪz ˈel.ə.veɪ.t̬ɪd, sɜːr. ðə ˈsev.ən ˈaɪ.ən ɪz mʌtʃ ˈseɪf.ər ðæn ðə eɪt ˈaɪ.ən/",
        "translation": "Green ở trên dốc cao thưa anh. Gậy sắt 7 sẽ an toàn hơn nhiều so với sắt 8 ạ.",
        "options": [
            { "en": "A. The green is elevated, Sir. The 7-iron is much safer.", "vi": "Green ở dốc cao, gậy sắt 7 an toàn hơn ạ" },
            { "en": "B. Use 9-iron and hit as soft as possible, Sir.", "vi": "Dùng sắt 9 đánh thật nhẹ ạ" },
            { "en": "C. Use putter for elevated green, Sir.", "vi": "Dùng gậy gạt cho green trên dốc cao ạ" },
            { "en": "D. Take no club, Sir.", "vi": "Không lấy gậy nào ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại chào tạm biệt và chọn phương án đúng:",
        "audioText": "Thank you for a great game today, Sir! Hope to serve you again soon!",
        "phonetic": "/θæŋk juː fɔːr ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr! hoʊp tə sɜːrv juː əˈɡen suːn/",
        "translation": "Cảm ơn anh vì trận đấu tuyệt vời hôm nay ạ! Hy vọng sớm được phục vụ lại anh!",
        "options": [
            { "en": "A. Thank you for a great game today, Sir! Hope to serve you again!", "vi": "Cảm ơn trận đấu tuyệt vời! Hy vọng sớm phục vụ lại anh ạ!" },
            { "en": "B. Good bye, I don't want to see you again, Sir.", "vi": "Tạm biệt, em không muốn gặp lại anh ạ" },
            { "en": "C. Your golf play was very bad, Sir.", "vi": "Anh chơi golf tệ quá ạ" },
            { "en": "D. Return all golf balls to me, Sir.", "vi": "Trả lại toàn bộ bóng golf cho em ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.1 Luyện nghe] Nghe đoạn hội thoại bàn giao gậy và chọn phương án đúng:",
        "audioText": "Excuse me, Sir. You have 14 clubs and 1 umbrella. Everything is clean and secure.",
        "phonetic": "/ɪkˈskjuːz miː, sɜːr. juː hæv ˌfɔːrˈtiːn klʌbz ænd wʌn ʌmˈbrel.ə. ˈev.ri.θɪŋ ɪz kliːn ænd sɪˈkjʊr/",
        "translation": "Xin lỗi thưa anh. Anh có đủ 14 cây gậy và 1 chiếc ô. Mọi thứ đã được vệ sinh sạch sẽ và an toàn ạ.",
        "options": [
            { "en": "A. You have 14 clubs and 1 umbrella. Everything is clean and secure, Sir.", "vi": "Đủ 14 gậy và 1 ô, mọi thứ sạch sẽ an toàn ạ" },
            { "en": "B. You lost 5 clubs today, Sir.", "vi": "Anh bị mất 5 cây gậy hôm nay ạ" },
            { "en": "C. I broke your umbrella, Sir.", "vi": "Em làm gãy ô của anh rồi ạ" },
            { "en": "D. Please clean the clubs yourself, Sir.", "vi": "Anh tự đi lau gậy nhé ạ" }
        ],
        "correct": 0
    }
);
