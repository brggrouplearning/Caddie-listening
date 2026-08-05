// =========================================================================
// LESSON 1: BASIC COMMUNICATION & FIRST IMPRESSION FOR CADDY
// File: data/lesson1.js (UPDATED & OPTIMIZED FOR SPELLING, TTS & PHONETICS)
// =========================================================================

if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

const lesson1Data = [
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI TIẾNG ANH & ĐÁNH VẦN (60 CÂU)
    // =========================================================================
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/aɪ/", phonetic: "/aɪ/", translation: "Nguyên âm /aɪ/",
        options: [{ en: "A. /aɪ/", vi: "/aɪ/" }, { en: "B. /iː/", vi: "/iː/" }, { en: "C. /eɪ/", vi: "/eɪ/" }, { en: "D. /ɛ/", vi: "/ɛ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Papa. P-A-P-A. Bravo. B-R-A-V-O.", phonetic: "/ˈpɑː.pə, ˈbrɑː.voʊ/", translation: "P trong từ Papa, B trong từ Bravo.",
        options: [{ en: "A. Papa", vi: "Papa" }, { en: "B. Peter", vi: "Peter" }, { en: "C. Paul", vi: "Paul" }, { en: "D. Pink", vi: "Pink" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/eɪtʃ/", phonetic: "/eɪtʃ/", translation: "Chữ cái H (/eɪtʃ/)",
        options: [{ en: "A. /eɪtʃ/", vi: "/eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "/heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "/eɪdʒ/" }, { en: "D. /ætʃ/", vi: "/ætʃ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Bravo and Papa.", phonetic: "/ˈbrɑː.voʊ ænd ˈpɑː.pə/", translation: "B và P.",
        options: [{ en: "A. B và P", vi: "B và P" }, { en: "B. A và Z", vi: "A và Z" }, { en: "C. K và L", vi: "K và L" }, { en: "D. H và O", vi: "H và O" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Arthur. A-R-T-H-U-R.", phonetic: "/ˈɑːr.θər/", translation: "Tên là Arthur.",
        options: [{ en: "A. ARTHUR", vi: "Arthur" }, { en: "B. AUTHOR", vi: "Author" }, { en: "C. ARCHER", vi: "Archer" }, { en: "D. MARK", vi: "Mark" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Harrison. H-A-R-R-I-S-O-N.", phonetic: "/ˈhær.ə.sən/", translation: "Tên là Harrison.",
        options: [{ en: "A. HARRISON", vi: "Harrison" }, { en: "B. HARRIS", vi: "Harris" }, { en: "C. HARISON", vi: "Harison" }, { en: "D. HARRYS", vi: "Harrys" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Rose. R-O-S-E.", displaySentence: "Caddy's name is _______.", translation: "Tên của Caddy là _______.",
        targetWord: "rose", phonetic: "/roʊz/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Callaway.", phonetic: "/ˈkæl.ə.weɪ/", translation: "Thương hiệu bóng Callaway.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/p/", phonetic: "/p/", translation: "Phụ âm /p/",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh", vi: "Không rung thanh quản" },
            { en: "B. Đọc rung dây thanh quản", vi: "Giống âm /b/" },
            { en: "C. Đọc thành âm /f/", vi: "Kéo dài" },
            { en: "D. Uốn lưỡi chạm vòm miệng", vi: "Chạm vòm miệng trên" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Putter.", phonetic: "/ˈpʌt.ər/", translation: "Gậy gạt Putter.",
        options: [
            { en: "A. Bật hơi mạnh vô thanh ở âm /p/ đầu từ", vi: "Tránh nhầm với Butter" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc thành Butter" },
            { en: "C. Đọc thành âm /f/ nhẹ", vi: "Đọc thành Futter" },
            { en: "D. Bỏ qua âm đầu", vi: "Đọc là utter" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "G-8-0.", phonetic: "/dʒiː eɪt oʊ/", translation: "Mã đặt sân G-8-0.",
        options: [{ en: "A. Oh /oʊ/", vi: "Đọc là Oh" }, { en: "B. Zero", vi: "Zero" }, { en: "C. Null", vi: "Null" }, { en: "D. Nil", vi: "Nil" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/ɔːr/", phonetic: "/ɔːr/", translation: "Nguyên âm /ɔːr/",
        options: [{ en: "A. /ɔːr/ dài", vi: "Nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Nguyên âm /ɒ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Tee box.", phonetic: "/tiː bɑːks/", translation: "Khu phát bóng Tee box.",
        options: [{ en: "A. /tiː bɑːks/", vi: "/tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "/teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "/tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "/tiː bɔːks/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/dʒ/", phonetic: "/dʒ/", translation: "Phụ âm /dʒ/",
        options: [{ en: "A. /dʒ/", vi: "Phụ âm /dʒ/" }, { en: "B. /ʒ/", vi: "Phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Phụ âm /ɡ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/aɪ/", phonetic: "/aɪ/", translation: "Nguyên âm /aɪ/",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Srixon.", phonetic: "/ˈsrɪk.sən/", translation: "Hãng bóng Srixon.",
        options: [{ en: "A. Srixon", vi: "Bóng hãng Srixon" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. TaylorMade", vi: "Bóng hãng TaylorMade" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Mike. M-I-K-E.", displaySentence: "Golfer's name is _______.", translation: "Tên của Golfer là _______.",
        targetWord: "mike", phonetic: "/maɪk/", hint: "Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/eɪ/", phonetic: "/eɪ/", translation: "Nguyên âm /eɪ/",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /ɑːr/", vi: "Phát âm /ɑːr/" }, { en: "C. /æ/", vi: "Phát âm /æ/" }, { en: "D. /e/", vi: "Phát âm /e/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Ping. P-I-N-G.", displaySentence: "Putter brand is _______.", translation: "Hãng gậy gạt là _______.",
        targetWord: "ping", phonetic: "/pɪŋ/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/ziː/", phonetic: "/ziː/", translation: "Chữ Z (/ziː/)",
        options: [{ en: "A. /ziː/", vi: "Đọc là Zee (/ziː/)" }, { en: "B. /zed/", vi: "Đọc là Zed (/zed/)" }, { en: "C. /zaɪ/", vi: "Đọc là Zai" }, { en: "D. /zoʊ/", vi: "Đọc là Zo" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Double U.", phonetic: "/ˈdʌb.əl.juː/", translation: "Chữ W (Double U).",
        options: [{ en: "A. Double U /ˈdʌb.əl.juː/", vi: "Double U" }, { en: "B. Triple U", vi: "Triple U" }, { en: "C. Way", vi: "Way" }, { en: "D. Ve", vi: "Ve" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/ɑːr/", phonetic: "/ɑːr/", translation: "Phụ âm /ɑːr/",
        options: [{ en: "A. Uốn cong đầu lưỡi về phía sau", vi: "Phát âm uốn lưỡi /ɑːr/" }, { en: "B. Rung đầu lưỡi mạnh", vi: "Giống tiếng Việt" }, { en: "C. Bật môi vô thanh", vi: "Không uốn lưỡi" }, { en: "D. Đọc giống chữ L", vi: "Đọc là L" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "David. D-A-V-I-D.", phonetic: "/ˈdeɪ.vɪd/", translation: "Tên là David.",
        options: [{ en: "A. DAVID", vi: "David" }, { en: "B. DAVIS", vi: "Davis" }, { en: "C. DANIEL", vi: "Daniel" }, { en: "D. DAVIN", vi: "Davin" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/keɪ/", phonetic: "/keɪ/", translation: "Chữ K (/keɪ/)",
        options: [{ en: "A. /keɪ/", vi: "Phát âm /keɪ/" }, { en: "B. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "C. /kiː/", vi: "Phát âm /kiː/" }, { en: "D. /kɛ/", vi: "Phát âm /kɛ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Honma.", phonetic: "/ˈhɒn.mə/", translation: "Gậy hãng Honma.",
        options: [{ en: "A. Honma", vi: "Gậy hãng Honma" }, { en: "B. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Majesty", vi: "Gậy hãng Majesty" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/iː/", phonetic: "/iː/", translation: "Nguyên âm /iː/",
        options: [{ en: "A. /iː/", vi: "Phát âm /iː/" }, { en: "B. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "C. /e/", vi: "Phát âm /e/" }, { en: "D. /aɪ/", vi: "Phát âm /aɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/dʒeɪ/", phonetic: "/dʒeɪ/", translation: "Chữ J (/dʒeɪ/)",
        options: [{ en: "A. /dʒeɪ/", vi: "Phát âm /dʒeɪ/" }, { en: "B. /ʒeɪ/", vi: "Phát âm /ʒeɪ/" }, { en: "C. /dʒaɪ/", vi: "Phát âm /dʒaɪ/" }, { en: "D. /jeɪ/", vi: "Phát âm /jeɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/dʒiː/", phonetic: "/dʒiː/", translation: "Chữ G (/dʒiː/)",
        options: [{ en: "A. /dʒiː/ (kết thúc bằng âm iː dài)", vi: "Đọc là /dʒiː/" }, { en: "B. /dʒeɪ/", vi: "Đọc giống chữ J" }, { en: "C. /ɡiː/", vi: "Đọc là Gi" }, { en: "D. /dʒe/", vi: "Đọc là Ge" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "John. J-O-H-N.", phonetic: "/dʒɑːn/", translation: "Tên là John.",
        options: [{ en: "A. JOHN", vi: "John" }, { en: "B. JACK", vi: "Jack" }, { en: "C. JIM", vi: "Jim" }, { en: "D. JOE", vi: "Joe" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/waɪ/", phonetic: "/waɪ/", translation: "Chữ Y (/waɪ/)",
        options: [{ en: "A. /waɪ/", vi: "Phát âm /waɪ/" }, { en: "B. /jaɪ/", vi: "Phát âm /jaɪ/" }, { en: "C. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "D. /yeɪ/", vi: "Phát âm /yeɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "TaylorMade.", phonetic: "/ˈteɪ.lər.meɪd/", translation: "Gậy hãng TaylorMade.",
        options: [{ en: "A. TaylorMade", vi: "Gậy hãng TaylorMade" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. Ping", vi: "Gậy hãng Ping" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Anna. A-N-N-A.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
        targetWord: "anna", phonetic: "/ˈæn.ə/", hint: "Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Alex. A-L-E-X.", phonetic: "/ˈæl.ɪks/", translation: "Tên là Alex.",
        options: [{ en: "A. ALEX", vi: "Alex" }, { en: "B. ALAN", vi: "Alan" }, { en: "C. ADAM", vi: "Adam" }, { en: "D. ALEC", vi: "Alec" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/eks/", phonetic: "/eks/", translation: "Chữ X (/eks/)",
        options: [{ en: "A. /eks/", vi: "Phát âm /eks/" }, { en: "B. /egz/", vi: "Phát âm /egz/" }, { en: "C. /z/", vi: "Phát âm /z/" }, { en: "D. /s/", vi: "Phát âm /s/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Volvik.", phonetic: "/ˈvɔːl.vɪk/", translation: "Bóng hãng Volvik.",
        options: [{ en: "A. Volvik", vi: "Bóng hãng Volvik" }, { en: "B. Vice", vi: "Bóng hãng Vice" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Bridgestone", vi: "Bóng hãng Bridgestone" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Paul. P-A-U-L.", displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "paul", phonetic: "/pɔːl/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/juː/", phonetic: "/juː/", translation: "Chữ U (/juː/)",
        options: [{ en: "A. /juː/", vi: "Phát âm /juː/" }, { en: "B. /uː/", vi: "/uː/" }, { en: "C. /ʌ/", vi: "Phát âm /ʌ/" }, { en: "D. /aʊ/", vi: "Phát âm /aʊ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/kjuː/", phonetic: "/kjuː/", translation: "Chữ Q (/kjuː/)",
        options: [{ en: "A. /kjuː/", vi: "Phát âm /kjuː/" }, { en: "B. /kuː/", vi: "Phát âm /kuː/" }, { en: "C. /kwɑː/", vi: "Phát âm /kwɑː/" }, { en: "D. /kju/", vi: "Phát âm /kju/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Tom. T-O-M.", phonetic: "/tɑːm/", translation: "Tên là Tom.",
        options: [{ en: "A. TOM", vi: "Tom" }, { en: "B. TIM", vi: "Tim" }, { en: "C. TED", vi: "Ted" }, { en: "D. TODD", vi: "Todd" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Mary. M-A-R-Y.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
        targetWord: "mary", phonetic: "/ˈmer.i/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/eɪ/", phonetic: "/eɪ/", translation: "Chữ A (/eɪ/)",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /æ/", vi: "Phát âm /æ/" }, { en: "C. /ɑː/", vi: "Phát âm /ɑː/" }, { en: "D. /e/", vi: "Phát âm /e/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/aɪ/", phonetic: "/aɪ/", translation: "Chữ I (/aɪ/)",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /ɪ/", vi: "Phát âm /ɪ/" }, { en: "D. /eɪ/", vi: "Phát âm /eɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/oʊ/", phonetic: "/oʊ/", translation: "Chữ O (/oʊ/)",
        options: [{ en: "A. /oʊ/", vi: "Phát âm /oʊ/" }, { en: "B. /ɒ/", vi: "Phát âm /ɒ/" }, { en: "C. /ɔː/", vi: "Phát âm /ɔː/" }, { en: "D. /uː/", vi: "Phát âm /uː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/eɪtʃ/", phonetic: "/eɪtʃ/", translation: "Chữ H (/eɪtʃ/)",
        options: [{ en: "A. /eɪtʃ/", vi: "Phát âm /eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "Phát âm /heɪtʃ/" }, { en: "C. /eɪt/", vi: "Phát âm /eɪt/" }, { en: "D. /eɪdʒ/", vi: "Phát âm /eɪdʒ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/el/", phonetic: "/el/", translation: "Chữ L (/el/)",
        options: [{ en: "A. /el/", vi: "Phát âm /el/" }, { en: "B. /al/", vi: "Phát âm /al/" }, { en: "C. /leɪ/", vi: "Phát âm /leɪ/" }, { en: "D. /il/", vi: "Phát âm /il/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/em/", phonetic: "/em/", translation: "Chữ M (/em/)",
        options: [{ en: "A. /em/", vi: "Phát âm /em/" }, { en: "B. /meɪ/", vi: "Phát âm /meɪ/" }, { en: "C. /am/", vi: "Phát âm /am/" }, { en: "D. /muː/", vi: "Phát âm /muː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/en/", phonetic: "/en/", translation: "Chữ N (/en/)",
        options: [{ en: "A. /en/", vi: "Phát âm /en/" }, { en: "B. /neɪ/", vi: "Phát âm /neɪ/" }, { en: "C. /an/", vi: "Phát âm /an/" }, { en: "D. /nuː/", vi: "Phát âm /nuː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/es/", phonetic: "/es/", translation: "Chữ S (/es/)",
        options: [{ en: "A. /es/", vi: "Phát âm /es/" }, { en: "B. /seɪ/", vi: "Phát âm /seɪ/" }, { en: "C. /as/", vi: "Phát âm /as/" }, { en: "D. /siː/", vi: "Phát âm /siː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/tiː/", phonetic: "/tiː/", translation: "Chữ T (/tiː/)",
        options: [{ en: "A. /tiː/", vi: "Phát âm /tiː/" }, { en: "B. /teɪ/", vi: "Phát âm /teɪ/" }, { en: "C. /taɪ/", vi: "Phát âm /taɪ/" }, { en: "D. /te/", vi: "Phát âm /te/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/viː/", phonetic: "/viː/", translation: "Chữ V (/viː/)",
        options: [{ en: "A. /viː/", vi: "Phát âm /viː/" }, { en: "B. /veɪ/", vi: "Phát âm /veɪ/" }, { en: "C. /vaɪ/", vi: "Phát âm /vaɪ/" }, { en: "D. /ve/", vi: "Phát âm /ve/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Mizuno.", phonetic: "/mɪˈzuː.noʊ/", translation: "Gậy hãng Mizuno.",
        options: [{ en: "A. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "B. Honma", vi: "Gậy hãng Honma" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Titleist", vi: "Bóng hãng Titleist" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Bridgestone.", phonetic: "/ˈbrɪdʒ.stoʊn/", translation: "Bóng hãng Bridgestone.",
        options: [{ en: "A. Bridgestone", vi: "Bóng hãng Bridgestone" }, { en: "B. Volvik", vi: "Bóng hãng Volvik" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. Srixon", vi: "Bóng hãng Srixon" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Jack. J-A-C-K.", displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "jack", phonetic: "/dʒæk/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Jane. J-A-N-E.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
        targetWord: "jane", phonetic: "/dʒeɪn/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Mark. M-A-R-K.", displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "mark", phonetic: "/mɑːrk/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Vice.", phonetic: "/vaɪs/", translation: "Bóng hãng Vice.",
        options: [{ en: "A. Vice", vi: "Bóng hãng Vice" }, { en: "B. Volvik", vi: "Bóng hãng Volvik" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Titleist", vi: "Bóng hãng Titleist" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/diː/", phonetic: "/diː/", translation: "Chữ D (/diː/)",
        options: [{ en: "A. /diː/", vi: "Phát âm /diː/" }, { en: "B. /deɪ/", vi: "Phát âm /deɪ/" }, { en: "C. /daɪ/", vi: "Phát âm /daɪ/" }, { en: "D. /de/", vi: "Phát âm /de/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "/siː/", phonetic: "/siː/", translation: "Chữ C (/siː/)",
        options: [{ en: "A. /siː/", vi: "Phát âm /siː/" }, { en: "B. /seɪ/", vi: "Phát âm /seɪ/" }, { en: "C. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "D. /keɪ/", vi: "Phát âm /keɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Lucy. L-U-C-Y.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
        targetWord: "lucy", phonetic: "/ˈluː.si/", hint: "Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Adam. A-D-A-M.", displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "adam", phonetic: "/ˈæd.əm/", hint: "Tên gồm 4 ký tự."
    },

    // =========================================================================
    // SECTION 1.2: GIỚI THIỆU BẢN THÂN & NGHI THỨC CHÀO HỎI (60 CÂU)
    // =========================================================================
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Good morning, Sir! Welcome to Golden Sands Golf Resort.", phonetic: "/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kəm tə ˈɡoʊl.dən sændz ɡɑːlf rɪˈzɔːrt/", translation: "Chào buổi sáng anh! Chào mừng anh đến với Golden Sands Golf Resort.",
        options: [
            { en: "A. Good morning, Sir! Welcome to Golden Sands Golf Resort.", vi: "Chào buổi sáng anh! Chào mừng anh đến với Golden Sands Golf Resort." },
            { en: "B. Good morning, Sir! Please give me your golf bag.", vi: "Chào buổi sáng anh! Cho em xin túi gậy ạ." },
            { en: "C. Hello Sir! Are you ready to play now?", vi: "Chào anh! Anh sẵn sàng chơi chưa ạ?" },
            { en: "D. Morning Sir, let's go quickly to the tee box.", vi: "Chào buổi sáng, mình ra tee box nhanh thôi ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "My caddy number is 214. I am your Caddy today, I am here to assist you.", phonetic: "/maɪ ˈkæd.i ˈnʌm.bər ɪz tuː wʌn fɔːr. aɪ æm jʊər ˈkæd.i təˈdeɪ, aɪ æm hɪər tə əˈsɪst juː/", translation: "Số caddy của em là 214. Em là Caddy của anh hôm nay, em ở đây để hỗ trợ anh ạ.",
        options: [
            { en: "A. My caddy number is 214. I am your Caddy today, I am here to assist you.", vi: "Số caddy của em là 214. Em là Caddy của anh hôm nay, em ở đây để hỗ trợ anh ạ." },
            { en: "B. I am caddy 214, I will carry your bag today.", vi: "Em là caddy 214, vác túi cho anh hôm nay ạ." },
            { en: "C. My name is Caddy 214, let's go.", vi: "Tên em là Caddy 214, đi thôi ạ." },
            { en: "D. Caddy 214 ready to support.", vi: "Caddy 214 sẵn sàng hỗ trợ ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Is this your first time playing at our course, Sir?", phonetic: "/ɪz ðɪs jʊər fɜːrst taɪm ˈpleɪ.ɪŋ æt aʊər kɔːrs, sɜːr/", translation: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?" },
            { en: "B. Have you played golf before, Sir?", vi: "Anh đã từng chơi golf trước đây chưa ạ?" },
            { en: "C. Do you know this course layout, Sir?", vi: "Anh có biết sơ đồ sân này không ạ?" },
            { en: "D. Did you play at another golf resort before?", vi: "Anh có chơi ở khu nghỉ dưỡng golf khác trước đây chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am very well, thank you, Sir! How are you today?", phonetic: "/aɪ æm ˈver.i wel, θæŋk juː, sɜːr! haʊ ɑːr juː təˈdeɪ/", translation: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?",
        options: [
            { en: "A. I am very well, thank you, Sir! How are you today?", vi: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?" },
            { en: "B. I am fine, thank you. Let me carry your bag.", vi: "Em khỏe, cảm ơn anh. Để em vác túi cho anh ạ." },
            { en: "C. Not bad today, thank you Sir.", vi: "Hôm nay không tệ lắm, cảm ơn anh ạ." },
            { en: "D. Very good, hope we have a nice game.", vi: "Rất tốt, hy vọng chúng ta có trận đánh hay ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Have a great game today, Sir!", phonetic: "/hæv ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!",
        options: [
            { en: "A. Have a great game today, Sir!", vi: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!" },
            { en: "B. Good luck to you on every hole, Sir!", vi: "Chúc anh may mắn ở mọi hố đấu ạ!" },
            { en: "C. Hope you score well today, Sir!", vi: "Hy vọng hôm nay anh ghi điểm tốt ạ!" },
            { en: "D. Wish you a nice round of golf, Sir!", vi: "Chúc anh có một vòng golf vui vẻ ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Eye contact and smiling.", phonetic: "/aɪ ˈkɑːn.tækt ænd ˈsmaɪ.lɪŋ/", translation: "Duy trì giao tiếp ánh mắt và nụ cười thân thiện.",
        options: [
            { en: "A. Duy trì giao tiếp bằng mắt và nụ cười thân thiện", vi: "Eye contact & smiling" },
            { en: "B. Đứng quay lưng lại phía khách", vi: "Đứng quay lưng" },
            { en: "C. Nhìn xuống đất đọc kịch bản", vi: "Nhìn xuống đất" },
            { en: "D. Nói quá nhanh không ngắt nghỉ", vi: "Nói quá nhanh" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir and Ma'am.", phonetic: "/sɜːr ænd mæm/", translation: "Sir / Ma'am",
        options: [{ en: "A. Sir / Ma'am", vi: "Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Mister / Missis" }, { en: "C. Mister / Lady", vi: "Mister / Lady" }, { en: "D. Gentleman / Lady", vi: "Gentleman / Lady" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "How long have you been playing golf, Sir?", phonetic: "/haʊ lɑːŋ hæv juː biːn ˈpleɪ.ɪŋ ɡɑːlf, sɜːr/", translation: "Anh chơi môn golf này được bao lâu rồi ạ?",
        options: [
            { en: "A. How long have you been playing golf, Sir?", vi: "Anh chơi golf được bao lâu rồi ạ?" },
            { en: "B. How many years do you play golf, Sir?", vi: "Mấy năm anh chơi golf rồi ạ?" },
            { en: "C. Are you an experienced golfer, Sir?", vi: "Anh là golfer nhiều kinh nghiệm phải không ạ?" },
            { en: "D. Did you practice golf for a long time?", vi: "Anh tập golf lâu chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Caddy.", phonetic: "/ˈkæd.i/", translation: "Caddy",
        options: [{ en: "A. /ˈkæd.i/", vi: "/ˈkæd.i/" }, { en: "B. /ˈkɑː.di/", vi: "/ˈkɑː.di/" }, { en: "C. /ˈked.i/", vi: "/ˈked.i/" }, { en: "D. /kædˈdiː/", vi: "/kædˈdiː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Which tee box do you play today, Sir?", phonetic: "/wɪtʃ tiː bɑːks duː juː pleɪ təˈdeɪ, sɜːr/", translation: "Hôm nay anh phát bóng ở tee nào ạ?",
        options: [
            { en: "A. Which tee box do you play today, Sir?", vi: "Hôm nay anh phát bóng ở tee nào ạ?" },
            { en: "B. What color tee box do you prefer, Sir?", vi: "Anh thích phát bóng ở tee màu gì ạ?" },
            { en: "C. Where would you like to tee off, Sir?", vi: "Anh muốn phát bóng ở đâu ạ?" },
            { en: "D. Are we playing from the blue tee, Sir?", vi: "Chúng ta phát bóng từ tee xanh phải không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please let me know if you have any special requirements, Sir.", phonetic: "/pliːz let miː noʊ ɪf juː hæv ˈen.i ˈspeʃ.əl rɪˈkwaɪər.mənts, sɜːr/", translation: "Anh có yêu cầu đặc biệt nào xin cứ dặn em nhé ạ.",
        options: [
            { en: "A. Please let me know if you have any special requirements, Sir.", vi: "Anh có yêu cầu đặc biệt nào xin dặn em nhé ạ." },
            { en: "B. Please tell me your playing habits, Sir.", vi: "Vui lòng cho em biết thói quen chơi của anh ạ." },
            { en: "C. Do you have any preferences for clubs, Sir?", vi: "Anh có ưu tiên gậy nào không ạ?" },
            { en: "D. Feel free to instruct me on the course, Sir.", vi: "Xin cứ tự nhiên chỉ dẫn em trên sân ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Nice to meet you too, Sir!", phonetic: "/naɪs tə miːt juː tuː, sɜːr/", translation: "Rất hân hạnh được gặp anh ạ!",
        options: [
            { en: "A. Nice to meet you too, Sir!", vi: "Rất hân hạnh được gặp anh ạ!" },
            { en: "B. Pleasure to meet you as well, Sir!", vi: "Vinh hạnh được gặp anh ạ!" },
            { en: "C. Glad to meet you today, Sir!", vi: "Vui mừng được gặp anh hôm nay ạ!" },
            { en: "D. Thank you, nice meeting you, Sir!", vi: "Cảm ơn, rất vui được gặp anh ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "May I take your golf bag, Sir?", phonetic: "/meɪ aɪ teɪk jʊər ɡɑːlf bæɡ, sɜːr/", translation: "Cho phép em xin túi gậy của anh ạ?",
        options: [
            { en: "A. May I take your golf bag, Sir?", vi: "Cho phép em xin túi gậy của anh ạ?" },
            { en: "B. Let me carry your golf bag for you, Sir.", vi: "Để em xách túi gậy cho anh nhé ạ." },
            { en: "C. Can I assist you with your golf bag, Sir?", vi: "Em hỗ trợ túi gậy cho anh được không ạ?" },
            { en: "D. Shall I load your bag onto the buggy, Sir?", vi: "Em xếp túi của anh lên xe điện nhé ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Is this Mr. Arthur's bag, Sir?", phonetic: "/ɪz ðɪs ˈmɪs.tər ˈɑːr.θərz bæɡ, sɜːr/", translation: "Dạ đây có phải túi gậy của anh Arthur không ạ?",
        options: [
            { en: "A. Is this Mr. Arthur's bag, Sir?", vi: "Dạ đây có phải túi gậy của anh Arthur không ạ?" },
            { en: "B. May I check the name on this bag tag, Sir?", vi: "Em xin phép kiểm tra tên trên thẻ túi nhé ạ?" },
            { en: "C. Does this bag belong to Mr. Arthur, Sir?", vi: "Túi này thuộc về ông Arthur phải không ạ?" },
            { en: "D. Is this your golf bag, Mr. Arthur?", vi: "Đây là túi gậy của anh phải không, anh Arthur?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Assist.", displaySentence: "I am here to _______ you, Sir.", translation: "Em ở đây để _______ anh ạ.",
        targetWord: "assist", phonetic: "/əˈsɪst/", hint: "Từ gồm 6 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Welcome.", phonetic: "/ˈwel.kəm/", translation: "Welcome",
        options: [{ en: "A. Âm tiết 1 (Wel-)", vi: "WEL-come" }, { en: "B. Âm tiết 2 (-come)", vi: "Wel-COME" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Assist.", phonetic: "/əˈsɪst/", translation: "Assist",
        options: [{ en: "A. Âm tiết 2 (-sist)", vi: "as-SIST" }, { en: "B. Âm tiết 1 (As-)", vi: "AS-sist" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thank you very much, Sir! Hope to see you again!", phonetic: "/θæŋk juː ˈver.i mʌtʃ, sɜːr! hoʊp tə siː juː əˈɡen/", translation: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!",
        options: [
            { en: "A. Thank you very much, Sir! Hope to see you again!", vi: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!" },
            { en: "B. Thank you for playing today, Sir! Have a safe trip home.", vi: "Cảm ơn anh đã chơi hôm nay! Chúc anh thượng lộ bình an ạ." },
            { en: "C. Thank you Sir, hope you enjoyed your time with us.", vi: "Cảm ơn anh, hy vọng anh tận hưởng thời gian ở sân ạ." },
            { en: "D. Goodbye Sir, see you next time!", vi: "Tạm biệt anh, hẹn gặp lại lần sau ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Here is your golf bag, Sir. All clubs are clean.", phonetic: "/hɪər ɪz jʊər ɡɑːlf bæɡ, sɜːr. ɔːl klʌbz ɑːr kliːn/", translation: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch.",
        options: [
            { en: "A. Here is your golf bag, Sir. All clubs are clean.", vi: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch." },
            { en: "B. I have cleaned all your clubs, Sir. Please check your bag.", vi: "Em đã lau sạch gậy rồi ạ. Anh kiểm tra lại túi nhé." },
            { en: "C. Your golf bag is ready, Sir. All equipment is accounted for.", vi: "Túi gậy đã sẵn sàng ạ. Đủ mọi đồ dùng rồi ạ." },
            { en: "D. Here are your clubs, Sir. Everything is wiped down.", vi: "Gậy của anh đây ạ. Mọi thứ đã được lau khô." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "It was my pleasure serving you today, Sir!", phonetic: "/ɪt wʌz maɪ ˈpleʒ.ɚ ˈsɜːr.vɪŋ juː təˈdeɪ, sɜːr/", translation: "Rất hân hạnh được phục vụ anh hôm nay ạ!",
        options: [
            { en: "A. It was my pleasure serving you today, Sir!", vi: "Rất hân hạnh được phục vụ anh hôm nay ạ!" },
            { en: "B. Thank you so much for your kind words, Sir!", vi: "Cảm ơn lời khen của anh rất nhiều ạ!" },
            { en: "C. I'm very glad to hear that, Sir!", vi: "Em rất vui khi nghe điều đó ạ!" },
            { en: "D. Thank you Sir, I tried my best today!", vi: "Cảm ơn anh, em đã cố gắng hết sức hôm nay ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am ready whenever you are, Sir.", phonetic: "/aɪ æm ˈred.i wenˈev.ər juː ɑːr, sɜːr/", translation: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ.",
        options: [
            { en: "A. I am ready whenever you are, Sir.", vi: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ." },
            { en: "B. Whenever you are set, we can start, Sir.", vi: "Khi nào anh chuẩn bị xong, mình bắt đầu ạ." },
            { en: "C. Just let me know when you want to proceed, Sir.", vi: "Cứ báo em khi nào anh muốn tiếp tục nhé ạ." },
            { en: "D. I'm fully prepared for our round today, Sir.", vi: "Em đã chuẩn bị hoàn toàn cho trận đấu hôm nay ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thank you Sir, I will pick up your bag right away.", phonetic: "/θæŋk juː sɜːr, aɪ wɪl pɪk ʌp jʊər bæɡ raɪt əˈweɪ/", translation: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ.",
        options: [
            { en: "A. Thank you Sir, I will pick up your bag right away.", vi: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ." },
            { en: "B. Thank you Sir, please wait a moment while I fetch your bag.", vi: "Cảm ơn anh, xin chờ chút em đi lấy túi ạ." },
            { en: "C. I got your tag, Sir. I'll get your equipment now.", vi: "Em nhận thẻ rồi ạ. Em đi lấy gậy ngay đây ạ." },
            { en: "D. Thank you Sir, I will retrieve your bag from storage.", vi: "Cảm ơn anh, em sẽ lấy túi ra từ kho ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "May I have your name, Sir?", phonetic: "/meɪ aɪ hæv jʊər neɪm, sɜːr/", translation: "Dạ cho phép em được biết tên của anh ạ?",
        options: [
            { en: "A. May I have your name, Sir?", vi: "Cho phép em được biết tên của anh ạ?" },
            { en: "B. Could you tell me your name, Sir?", vi: "Anh có thể cho em biết tên anh được không ạ?" },
            { en: "C. How should I address you today, Sir?", vi: "Em nên xưng hô với anh thế nào hôm nay ạ?" },
            { en: "D. May I ask who I am caddying for today, Sir?", vi: "Cho em hỏi hôm nay em làm caddy cho ai ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Enjoy your game today, Sir!", phonetic: "/ɪnˈdʒɔɪ jʊər ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!",
        options: [
            { en: "A. Enjoy your game today, Sir!", vi: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!" },
            { en: "B. Wish you a wonderful time on the course, Sir!", vi: "Chúc anh có thời gian tuyệt vời trên sân ạ!" },
            { en: "C. Hope you have a fun round of golf today, Sir!", vi: "Hy vọng anh có vòng chơi golf vui vẻ ạ!" },
            { en: "D. Have fun and play well today, Sir!", vi: "Chúc anh chơi vui và đánh tốt hôm nay ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Club.", displaySentence: "Welcome to Golden Sands Golf _______, Sir!", translation: "Chào mừng anh đến với Câu lạc bộ _______ Golden Sands Golf!",
        targetWord: "club", phonetic: "/klʌb/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you use a buggy today, Sir?", phonetic: "/duː juː juːz ə ˈbʌɡ.i təˈdeɪ, sɜːr/", translation: "Hôm nay anh có dùng xe điện không ạ?",
        options: [
            { en: "A. Do you use a buggy today, Sir?", vi: "Hôm nay anh có dùng xe điện không ạ?" },
            { en: "B. Will you be riding a golf cart today, Sir?", vi: "Hôm nay anh sẽ đi xe điện chứ ạ?" },
            { en: "C. Would you prefer walking or using a buggy, Sir?", vi: "Anh thích đi bộ hay đi xe điện hơn ạ?" },
            { en: "D. Are we taking a cart for this round, Sir?", vi: "Vòng này chúng ta có lấy xe điện không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You are very welcome, Sir!", phonetic: "/juː ɑːr ˈver.i ˈwel.kəm, sɜːr/", translation: "Dạ không có gì đâu ạ!",
        options: [
            { en: "A. You are very welcome, Sir!", vi: "Dạ không có gì đâu ạ!" },
            { en: "B. My pleasure, Sir!", vi: "Vinh hạnh của em ạ!" },
            { en: "C. Happy to help you, Sir!", vi: "Rất vui được hỗ trợ anh ạ!" },
            { en: "D. Don't mention it, Sir!", vi: "Không có gì đâu ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Don't worry Sir, we still have enough time for tee off.", phonetic: "/doʊnt ˈwɜːr.i sɜːr, wiː stɪl hæv ɪˈnʌf taɪm fɔːr tiː ɑːf/", translation: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ.",
        options: [
            { en: "A. Don't worry Sir, we still have enough time for tee off.", vi: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ." },
            { en: "B. Take it easy Sir, we can still make our tee time.", vi: "Anh cứ bình tĩnh ạ, mình vẫn kịp giờ phát bóng ạ." },
            { en: "C. No problem Sir, everything is ready for you to tee off.", vi: "Không sao đâu ạ, mọi thứ đã sẵn sàng để anh phát bóng ạ." },
            { en: "D. Relax Sir, we have plenty of time before start.", vi: "Anh thư giãn đi ạ, còn nhiều thời gian trước khi khởi hành ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Are we ready to start, Sir?", phonetic: "/ɑːr wiː ˈred.i tə stɑːrt, sɜːr/", translation: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?",
        options: [
            { en: "A. Are we ready to start, Sir?", vi: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?" },
            { en: "B. Shall we head to the first tee, Sir?", vi: "Chúng ta ra đường tee số 1 nhé ạ?" },
            { en: "C. Is everyone ready to tee off, Sir?", vi: "Mọi người đã sẵn sàng phát bóng chưa ạ?" },
            { en: "D. Would you like to proceed to hole 1 now, Sir?", vi: "Anh có muốn di chuyển ra hố 1 bây giờ chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Luck.", displaySentence: "Good _______ and have fun, Sir!", translation: "Chúc anh gặp nhiều _______ mắn và chơi vui vẻ ạ!",
        targetWord: "luck", phonetic: "/lʌk/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "How should I call you, Sir?", phonetic: "/haʊ ʃʊd aɪ kɔːl juː, sɜːr/", translation: "Tôi nên xưng hô với ông thế nào ạ?",
        options: [
            { en: "A. How should I call you, Sir?", vi: "Tôi nên xưng hô với ông thế nào ạ?" },
            { en: "B. What is your name, Sir?", vi: "Tên ông là gì ạ?" },
            { en: "C. May I know your name, Sir?", vi: "Cho tôi biết tên ông được không ạ?" },
            { en: "D. Can I address you by name, Sir?", vi: "Tôi gọi tên ông được không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "John. J-O-H-N.", phonetic: "/dʒɑːn/", translation: "Ông John",
        options: [
            { en: "A. Nice to meet you, Mr. John.", vi: "Rất vui được gặp ông John." },
            { en: "B. Good to see you, Mr. John.", vi: "Tốt khi gặp ông John." },
            { en: "C. Pleased to meet you, Mr. John.", vi: "Hân hạnh gặp ông John." },
            { en: "D. Welcome Mr. John.", vi: "Chào mừng ông John." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "It's a pleasure to support you today.", phonetic: "/ɪts ə ˈpleʒ.ɚ tə əˈsɪst juː təˈdeɪ/", translation: "Rất vinh hạnh được hỗ trợ ông hôm nay.",
        options: [
            { en: "A. It's a pleasure to support you today.", vi: "Rất vinh hạnh được hỗ trợ ông hôm nay." },
            { en: "B. I am glad to carry your bag today.", vi: "Tôi vui vì vác túi giúp ông hôm nay." },
            { en: "C. I am happy to play with you today.", vi: "Tôi vui vì chơi cùng ông hôm nay." },
            { en: "D. It is good to serve you today.", vi: "Tốt khi phục vụ ông hôm nay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will try my best to support you today.", phonetic: "/aɪ wɪl traɪ maɪ best tə əˈsɪst juː təˈdeɪ/", translation: "Tôi sẽ cố gắng hết sức để hỗ trợ ông/bà.",
        options: [
            { en: "A. I will try my best to support you today.", vi: "Tôi sẽ cố gắng hết sức để hỗ trợ ông/bà." },
            { en: "B. I will do everything for you today.", vi: "Tôi làm mọi thứ cho ông hôm nay." },
            { en: "C. I try to help you play well today.", vi: "Tôi cố giúp ông đánh tốt hôm nay." },
            { en: "D. I will serve you best today.", vi: "Tôi phục vụ ông tốt nhất hôm nay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "If you need anything, please tell me.", phonetic: "/ɪf juː niːd ˈen.i.θɪŋ, pliːz tel miː/", translation: "Nếu ông/bà cần gì, cứ bảo tôi.",
        options: [
            { en: "A. If you need anything, please tell me.", vi: "Nếu ông/bà cần gì, cứ bảo tôi." },
            { en: "B. Just ask me if you want help.", vi: "Cứ hỏi tôi nếu cần giúp." },
            { en: "C. Let me know when you need something.", vi: "Báo tôi khi cần gì đó." },
            { en: "D. Tell me if you have questions.", vi: "Nói tôi nếu có câu hỏi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Ready.", displaySentence: "I'm _______ to go when you are.", translation: "Tôi đã _______ sàng khi nào ông muốn đi.",
        targetWord: "ready", phonetic: "/ˈred.i/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Pleasure.", displaySentence: "It is a _______ to support you.", translation: "Rất _______ hạnh được hỗ trợ ông.",
        targetWord: "pleasure", phonetic: "/ˈpleʒ.ɚ/", hint: "Từ gồm 8 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Good afternoon, Madam!", phonetic: "/ɡʊd ˌæf.tərˈnuːn, ˈmæd.əm/", translation: "Chào buổi chiều bà!",
        options: [
            { en: "A. Good afternoon, Madam!", vi: "Chào buổi chiều bà!" },
            { en: "B. Good morning, Madam!", vi: "Chào buổi sáng bà!" },
            { en: "C. Good evening, Madam!", vi: "Chào buổi tối bà!" },
            { en: "D. Hello Madam!", vi: "Xin chào bà!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Good evening, Sir!", phonetic: "/ɡʊd ˈiːv.nɪŋ, sɜːr/", translation: "Chào buổi tối ông!",
        options: [
            { en: "A. Good evening, Sir!", vi: "Chào buổi tối ông!" },
            { en: "B. Good afternoon, Sir!", vi: "Chào buổi chiều ông!" },
            { en: "C. Good morning, Sir!", vi: "Chào buổi sáng ông!" },
            { en: "D. Welcome Sir!", vi: "Chào mừng ông!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am very happy to be your caddie today.", phonetic: "/aɪ æm ˈver.i ˈhæp.i tə biː jʊər ˈkæd.i təˈdeɪ/", translation: "Tôi rất vui được hỗ trợ ông/bà hôm nay.",
        options: [
            { en: "A. I am very happy to be your caddie today.", vi: "Tôi rất vui được hỗ trợ ông/bà hôm nay." },
            { en: "B. I am glad to work with you today.", vi: "Tôi vui được làm việc cùng ông hôm nay." },
            { en: "C. I am pleased to meet you on the course today.", vi: "Hân hạnh gặp ông trên sân hôm nay." },
            { en: "D. It is nice to caddie for you today.", vi: "Tốt khi làm caddie cho ông hôm nay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please keep your valuables with you, Sir.", phonetic: "/pliːz kiːp jʊər ˈvæl.jə.bəlz wɪð juː, sɜːr/", translation: "Ông vui lòng tự giữ các đồ giá trị bên mình.",
        options: [
            { en: "A. Please keep your valuables with you, Sir.", vi: "Ông vui lòng tự giữ đồ giá trị bên mình." },
            { en: "B. Do not leave money in the bag, Sir.", vi: "Đừng để tiền trong túi ạ." },
            { en: "C. Take your phone and wallet, Sir.", vi: "Cầm điện thoại và ví đi ạ." },
            { en: "D. Keep your personal belongings safe, Sir.", vi: "Giữ đồ cá nhân an toàn ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Phone.", displaySentence: "Please keep your _______ and wallet, Sir.", translation: "Xin tự giữ _______ thoại và ví tiền ạ.",
        targetWord: "phone", phonetic: "/foʊn/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am checking the club list.", phonetic: "/aɪ æm ˈtʃek.ɪŋ ðə klʌb lɪst/", translation: "Tôi đang kiểm tra danh sách gậy.",
        options: [
            { en: "A. I am checking the club list.", vi: "Tôi đang kiểm tra danh sách gậy." },
            { en: "B. I am counting your clubs.", vi: "Tôi đang đếm gậy của ông." },
            { en: "C. I am inspecting your bag.", vi: "Tôi đang kiểm tra túi của ông." },
            { en: "D. I check your equipment now.", vi: "Tôi xem thiết bị bây giờ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "What is your name, Sir?", phonetic: "/wɑːt ɪz jʊər neɪm, sɜːr/", translation: "Để cho chắc chắn, ông tên là gì?",
        options: [
            { en: "A. What is your name, Sir?", vi: "Ông tên là gì ạ?" },
            { en: "B. Who are you, Sir?", vi: "Ông là ai ạ?" },
            { en: "C. Can you spell your name, Sir?", vi: "Đánh vần tên ông giúp tôi?" },
            { en: "D. May I know who you are, Sir?", vi: "Tôi có thể biết ông là ai?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "David. D-A-V-I-D.", phonetic: "/ˈdeɪ.vɪd/", translation: "Ông David",
        options: [
            { en: "A. Thank you, Mr. David.", vi: "Cảm ơn ông David." },
            { en: "B. Thanks David.", vi: "Cảm ơn David." },
            { en: "C. Thank you Sir David.", vi: "Cảm ơn Ngài David." },
            { en: "D. Appreciated Mr. David.", vi: "Ghi nhận ông David." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Call.", displaySentence: "You can _______ me Kevin.", translation: "Bạn có thể _______ tôi là Kevin.",
        targetWord: "call", phonetic: "/kɔːl/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I hope we have a good game.", phonetic: "/aɪ hoʊp wiː hæv ə ɡʊd ɡeɪm/", translation: "Hy vọng chúng ta có một trận đấu tốt.",
        options: [
            { en: "A. I hope we have a good game.", vi: "Hy vọng chúng ta có trận đấu tốt." },
            { en: "B. Wish us a great round today.", vi: "Chúc chúng ta vòng đấu tuyệt vời." },
            { en: "C. Hope to score well today.", vi: "Hy vọng ghi điểm tốt hôm nay." },
            { en: "D. Let's play a nice game today.", vi: "Hãy chơi trận hay hôm nay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Yes, I believe so!", phonetic: "/jes, aɪ bɪˈliːv soʊ/", translation: "Dạ tôi cũng tin vậy!",
        options: [
            { en: "A. Yes, I believe so!", vi: "Dạ tôi cũng tin vậy!" },
            { en: "B. Yes, I think so too!", vi: "Vâng, tôi cũng nghĩ vậy!" },
            { en: "C. Sure, I agree with you!", vi: "Chắc chắn, tôi đồng ý!" },
            { en: "D. Absolutely, Sir!", vi: "Tuyệt đối đúng thưa ông!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Eye contact.", phonetic: "/aɪ ˈkɑːn.tækt/", translation: "Duy trì giao tiếp bằng mắt.",
        options: [
            { en: "A. Maintain eye contact", vi: "Duy trì giao tiếp bằng mắt" },
            { en: "B. Look away from guest", vi: "Nhìn đi chỗ khác" },
            { en: "C. Look down at ground", vi: "Nhìn xuống đất" },
            { en: "D. Stare at guest", vi: "Nhìn chằm chằm khách" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Friendly smile.", phonetic: "/ˈfrend.li smaɪl/", translation: "Luôn giữ nụ cười thân thiện.",
        options: [
            { en: "A. Always keep a friendly smile", vi: "Luôn giữ nụ cười thân thiện" },
            { en: "B. Never smile at work", vi: "Không bao giờ cười" },
            { en: "C. Keep a serious face", vi: "Giữ mặt nghiêm trọng" },
            { en: "D. Smile only when asked", vi: "Chỉ cười khi được hỏi" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Madam.", displaySentence: "Always use Sir or _______.", translation: "Luôn dùng kính ngữ Sir hoặc _______.",
        targetWord: "madam", phonetic: "/ˈmæd.əm/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Stand straight.", phonetic: "/stænd streɪt/", translation: "Đứng thẳng lưng, mở rộng vai.",
        options: [
            { en: "A. Stand straight with shoulders open", vi: "Đứng thẳng lưng, mở rộng vai" },
            { en: "B. Cross your arms", vi: "Khoanh tay" },
            { en: "C. Hands in pockets", vi: "Để tay vào túi" },
            { en: "D. Lean on golf bag", vi: "Tựa vào túi gậy" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Hands visible.", phonetic: "/hændz ˈvɪz.ə.bəl/", translation: "Đôi tay luôn phải được nhìn thấy.",
        options: [
            { en: "A. Hands must be visible at all times", vi: "Đôi tay luôn phải được nhìn thấy" },
            { en: "B. Hide hands in pockets", vi: "Giấu tay trong túi" },
            { en: "C. Keep hands behind back", vi: "Để tay sau lưng" },
            { en: "D. Rest hands on hips", vi: "Chống tay lên hông" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Cross.", displaySentence: "Do not _______ your arms.", translation: "Không bao giờ được _______ tay.",
        targetWord: "cross", phonetic: "/krɑːs/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Speak clearly.", phonetic: "/spiːk ˈklɪr.li/", translation: "Giọng nói rõ ràng, có kiểm soát.",
        options: [
            { en: "A. Speak clearly with tone control", vi: "Giọng nói rõ ràng, có kiểm soát" },
            { en: "B. Speak as fast as possible", vi: "Nói nhanh nhất có thể" },
            { en: "C. Whisper to guest", vi: "Nói thầm với khách" },
            { en: "D. Shout loudly on course", vi: "Hét to trên sân" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Repeat guest's name.", phonetic: "/rɪˈpiːt ɡest neɪm/", translation: "Nhắc tên khách tối thiểu 2 lần.",
        options: [
            { en: "A. Repeat guest's name at least twice", vi: "Nhắc tên khách tối thiểu 2 lần" },
            { en: "B. Never mention guest's name", vi: "Không bao giờ gọi tên khách" },
            { en: "C. Ask name every 5 minutes", vi: "Hỏi tên mỗi 5 phút" },
            { en: "D. Call guest by nickname", vi: "Gọi khách bằng biệt danh" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Welcome to BRG Golf Resort!", phonetic: "/ˈwel.kəm tə biː ɑːr dʒiː ɡɑːlf rɪˈzɔːrt/", translation: "Chào mừng tới BRG Golf Resort!",
        options: [
            { en: "A. Welcome to BRG Golf Resort!", vi: "Chào mừng tới BRG Golf Resort!" },
            { en: "B. Hello from BRG Club!", vi: "Xin chào từ CLB BRG!" },
            { en: "C. Good day at BRG Course!", vi: "Ngày tốt lành tại sân BRG!" },
            { en: "D. Enjoy BRG Resort!", vi: "Tận hưởng resort BRG!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Professional.", displaySentence: "I am confident and _______.", translation: "Tôi tự tin và chuyên _______.",
        targetWord: "professional", phonetic: "/prəˈfeʃ.ən.əl/", hint: "Từ gồm 12 ký tự."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Show confidence.", phonetic: "/ʃoʊ ˈkɑːn.fə.dəns/", translation: "Thể hiện sự tự tin mà không kiêu ngạo.",
        options: [
            { en: "A. Show confidence without arrogance", vi: "Thể hiện sự tự tin mà không kiêu ngạo" },
            { en: "B. Be proud and arrogant", vi: "Tự hào và kiêu ngạo" },
            { en: "C. Act shy in front of guest", vi: "Tỏ ra nhút nhát trước khách" },
            { en: "D. Stay silent all time", vi: "Im lặng suốt thời gian" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Calm energy.", phonetic: "/kɑːm ˈen.ɚ.dʒi/", translation: "Duy trì năng lượng thân thiện và điềm tĩnh.",
        options: [
            { en: "A. Maintain friendly and calm energy", vi: "Duy trì năng lượng thân thiện và điềm tĩnh" },
            { en: "B. Be loud and energetic", vi: "Ồn ào và quá năng lượng" },
            { en: "C. Show tiredness openly", vi: "Tỏ ra mệt mỏi công khai" },
            { en: "D. Act nervous always", vi: "Luôn tỏ ra lo lắng" }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.3: SỐ ĐẾM & KHOẢNG CÁCH (60 CÂU)
    // =========================================================================
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "115 yards.", phonetic: "/wʌn ˈhʌn.drəd ænd ˌfɪfˈtiːn jɑːrdz/", translation: "115 yard",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Giúp phân biệt với Fifty" },
            { en: "B. Nhấn mạnh vào âm tiết đầu (Fif-)", vi: "Nhấn âm đầu" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Giọng trầm" },
            { en: "D. Nhấn âm vào từ 'yards'", vi: "Nhấn đơn vị đo" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "150 yards.", phonetic: "/wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːrdz/", translation: "150 yard",
        options: [
            { en: "A. One hundred and fifty yards", vi: "150 yard" },
            { en: "B. Fifteen zero yards", vi: "15 0 yard" },
            { en: "C. One five zero yards", vi: "1 5 0 yard" },
            { en: "D. One hundred fifteen yards", vi: "115 yard" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sixty.", phonetic: "/ˈsɪk.sti/", translation: "Số 60 (Sixty)",
        options: [{ en: "A. Âm tiết đầu (Six-)", vi: "Six-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Six-TY" }, { en: "C. Cả hai âm bằng nhau", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Three.", phonetic: "/θriː/", translation: "Số 3 (Three)",
        options: [{ en: "A. /θriː/", vi: "/θriː/" }, { en: "B. /triː/", vi: "/triː/" }, { en: "C. /free/", vi: "/free/" }, { en: "D. /driː/", vi: "/driː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thirteen.", phonetic: "/ˌθɜːrˈtiːn/", translation: "Số 13 (Thirteen)",
        options: [{ en: "A. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "B. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "C. /θriː.tiːn/", vi: "/θriː.tiːn/" }, { en: "D. /θɜːr.ten/", vi: "/θɜːr.ten/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Fourteen.", phonetic: "/ˌfɔːrˈtiːn/", translation: "Số 14 (Fourteen)",
        options: [{ en: "A. Fourteen /ˌfɔːrˈtiːn/", vi: "14 cây gậy" }, { en: "B. Forty /ˈfɔːr.ti/", vi: "40 cây gậy" }, { en: "C. Four /fɔːr/", vi: "4 cây gậy" }, { en: "D. Fourteenth /ˌfɔːrˈtiːnθ/", vi: "Thứ 14" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "One hundred.", phonetic: "/wʌn ˈhʌn.drəd/", translation: "100 (One hundred)",
        options: [{ en: "A. /ˈhʌn.drəd/", vi: "/ˈhʌn.drəd/" }, { en: "B. /ˈhʊn.dred/", vi: "/ˈhʊn.dred/" }, { en: "C. /ˈhæn.drɪd/", vi: "/ˈhæn.drɪd/" }, { en: "D. /ˈhɒn.drəd/", vi: "/ˈhɒn.drəd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Five.", phonetic: "/faɪv/", translation: "Số 5 (Five)",
        options: [{ en: "A. /faɪv/", vi: "/faɪv/" }, { en: "B. /fɪf/", vi: "/fɪf/" }, { en: "C. /faɪf/", vi: "/faɪf/" }, { en: "D. /faɪ/", vi: "/faɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Twelve.", phonetic: "/twelv/", translation: "Số 12 (Twelve)",
        options: [{ en: "A. /twelv/", vi: "/twelv/" }, { en: "B. /twelf/", vi: "/twelf/" }, { en: "C. /twerv/", vi: "/twerv/" }, { en: "D. /twelvθ/", vi: "/twelvθ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Twenty.", phonetic: "/ˈtwen.ti/", translation: "Số 20 (Twenty)",
        options: [{ en: "A. /ˈtwen.ti/", vi: "/ˈtwen.ti/" }, { en: "B. /twenˈtiːn/", vi: "/twenˈtiːn/" }, { en: "C. /ˈtwen.ty/", vi: "/ˈtwen.ty/" }, { en: "D. /two.ty/", vi: "/two.ty/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "One thousand.", phonetic: "/wʌn ˈθaʊ.zənd/", translation: "1000 (One thousand)",
        options: [{ en: "A. /ˈθaʊ.zənd/", vi: "/ˈθaʊ.zənd/" }, { en: "B. /ˈsaʊ.zənd/", vi: "/ˈsaʊ.zənd/" }, { en: "C. /ˈtoʊ.zənd/", vi: "/ˈtoʊ.zənd/" }, { en: "D. /ˈθoʊ.zænd/", vi: "/ˈθoʊ.zænd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Forty.", phonetic: "/ˈfɔːr.ti/", translation: "Số 40 (Forty)",
        options: [{ en: "A. Forty /ˈfɔːr.ti/", vi: "Forty (không có chữ u)" }, { en: "B. Fourty /ˈfɔːr.tiːn/", vi: "Fourty" }, { en: "C. Forth /ˈfɔːrθ/", vi: "Forth" }, { en: "D. Four-ty /fɔːrˈti/", vi: "Four-ty" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Nine.", phonetic: "/naɪn/", translation: "Số 9 (Nine)",
        options: [{ en: "A. /naɪn/", vi: "/naɪn/" }, { en: "B. /nɪn/", vi: "/nɪn/" }, { en: "C. /neɪn/", vi: "/neɪn/" }, { en: "D. /naɪ/", vi: "/naɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Eight.", phonetic: "/eɪt/", translation: "Số 8 (Eight)",
        options: [{ en: "A. Ate", vi: "Ate (/eɪt/)" }, { en: "B. Eat", vi: "Eat (/iːt/)" }, { en: "C. At", vi: "At (/æt/)" }, { en: "D. Height", vi: "Height (/haɪt/)" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Seven.", phonetic: "/ˈsev.ən/", translation: "Số 7 (Seven)",
        options: [{ en: "A. /ˈsev.ən/", vi: "/ˈsev.ən/" }, { en: "B. /ˈseɪ.vən/", vi: "/ˈseɪ.vən/" }, { en: "C. /ˈsev.en/", vi: "/ˈsev.en/" }, { en: "D. /sɪv.ən/", vi: "/sɪv.ən/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Four.", phonetic: "/fɔːr/", translation: "Số 4 (Four)",
        options: [{ en: "A. /fɔːr/", vi: "/fɔːr/" }, { en: "B. /fɑːr/", vi: "/fɑːr/" }, { en: "C. /fʊər/", vi: "/fʊər/" }, { en: "D. /fəʊr/", vi: "/fəʊr/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Six.", phonetic: "/sɪks/", translation: "Số 6 (Six)",
        options: [{ en: "A. /ks/", vi: "Cụm phụ âm /ks/" }, { en: "B. /s/", vi: "Âm /s/" }, { en: "C. /z/", vi: "Âm /z/" }, { en: "D. /ʃ/", vi: "Âm /ʃ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thirty.", phonetic: "/ˈθɜːr.ti/", translation: "Số 30 (Thirty)",
        options: [{ en: "A. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "B. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "C. /ˈtriː.ti/", vi: "/ˈtriː.ti/" }, { en: "D. /ˈθɜːr.ten/", vi: "/ˈθɜːr.ten/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Fifty.", phonetic: "/ˈfɪf.ti/", translation: "Số 50 (Fifty)",
        options: [{ en: "A. Âm tiết đầu (Fif-)", vi: "FIF-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Fif-TY" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "One.", phonetic: "/wʌn/", translation: "Số 1 (One)",
        options: [{ en: "A. /wʌn/", vi: "/wʌn/" }, { en: "B. /oʊn/", vi: "/oʊn/" }, { en: "C. /wɒn/", vi: "/wɒn/" }, { en: "D. /vʌn/", vi: "/vʌn/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Two.", phonetic: "/tuː/", translation: "Số 2 (Two)",
        options: [{ en: "A. /tuː/", vi: "/tuː/" }, { en: "B. /tʊ/", vi: "/tʊ/" }, { en: "C. /toʊ/", vi: "/toʊ/" }, { en: "D. /tʌ/", vi: "/tʌ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Ten.", phonetic: "/ten/", translation: "Số 10 (Ten)",
        options: [{ en: "A. /e/", vi: "Nguyên âm ngắn /e/" }, { en: "B. /æ/", vi: "Nguyên âm /æ/" }, { en: "C. /ɪ/", vi: "Nguyên âm /ɪ/" }, { en: "D. /ʌ/", vi: "Nguyên âm /ʌ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Eleven.", phonetic: "/ɪˈlev.ən/", translation: "Số 11 (Eleven)",
        options: [{ en: "A. Âm tiết 2 (-lev-)", vi: "e-LEV-en" }, { en: "B. Âm tiết 1 (E-)", vi: "E-lev-en" }, { en: "C. Âm tiết 3 (-en)", vi: "e-lev-EN" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Third.", phonetic: "/θɜːrd/", translation: "Thứ ba (Third)",
        options: [{ en: "A. /θɜːrd/", vi: "/θɜːrd/" }, { en: "B. /θriːθ/", vi: "/θriːθ/" }, { en: "C. /θɜːrt/", vi: "/θɜːrt/" }, { en: "D. /triːd/", vi: "/triːd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "150.", displaySentence: "The distance to the green is _______ yards.", translation: "Khoảng cách đến green là _______ yard.",
        targetWord: "150", phonetic: "/wʌn ˈhʌn.drəd ænd ˈfɪf.ti/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "100.", displaySentence: "You have _______ yards left to the pin.", translation: "Anh còn _______ yard nữa là tới cờ.",
        targetWord: "100", phonetic: "/wʌn ˈhʌn.drəd/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Iron.", phonetic: "/ˈaɪ.ən/", translation: "Gậy sắt (Iron)",
        options: [{ en: "A. /ˈaɪ.ən/", vi: "/ˈaɪ.ən/" }, { en: "B. /ˈaɪ.rən/", vi: "/ˈaɪ.rən/" }, { en: "C. /ˈiː.rɒn/", vi: "/ˈiː.rɒn/" }, { en: "D. /ˈaɪ.roʊn/", vi: "/ˈaɪ.roʊn/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Rangefinder.", phonetic: "/ˈreɪndʒˌfaɪn.dər/", translation: "Máy đo khoảng cách Rangefinder",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Excuse me Sir, there are only 13 clubs in your bag. Please check.", phonetic: "/ɪkˈskjuːz miː sɜːr, ðer ɑːr ˈoʊn.li ˌθɜːrˈtiːn klʌbz ɪn jʊər bæɡ. pliːz tʃek/", translation: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em.",
        options: [
            { en: "A. Excuse me Sir, there are only 13 clubs in your bag. Please check.", vi: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em." },
            { en: "B. You lost one club already, Sir!", vi: "Anh bị mất 1 cây gậy rồi đấy ạ!" },
            { en: "C. Where is your missing club, Sir?", vi: "Cây gậy bị thiếu của anh ở đâu ạ?" },
            { en: "D. Your bag only has 13 clubs today, Sir.", vi: "Túi của anh hôm nay chỉ có 13 gậy thôi ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Distance.", phonetic: "/ˈdɪs.təns/", translation: "Distance",
        options: [{ en: "A. Âm tiết 1 (Dis-)", vi: "DIS-tance" }, { en: "B. Âm tiết 2 (-tance)", vi: "Dis-TANCE" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "180 yards.", phonetic: "/wʌn ˈhʌn.drəd ænd ˈeɪ.ti jɑːrdz/", translation: "180 yard",
        options: [{ en: "A. 180 yards", vi: "180 yard" }, { en: "B. 108 yards", vi: "108 yard" }, { en: "C. 80 yards", vi: "80 yard" }, { en: "D. 118 yards", vi: "118 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "5.", displaySentence: "This is hole number _______.", translation: "Đây là hố số _______.",
        targetWord: "5", phonetic: "/faɪv/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sixteen.", phonetic: "/ˌsɪkˈstiːn/", translation: "Số 16 (Sixteen)",
        options: [{ en: "A. /ˌsɪkˈstiːn/", vi: "/ˌsɪkˈstiːn/" }, { en: "B. /ˈsɪk.sti/", vi: "/ˈsɪk.sti/" }, { en: "C. /sɪks.ten/", vi: "Siksten" }, { en: "D. /sɪks.tiːnθ/", vi: "Sixteenth" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Seventy.", phonetic: "/ˈsev.ən.ti/", translation: "Số 70 (Seventy)",
        options: [{ en: "A. /ˈsev.ən.ti/", vi: "/ˈsev.ən.ti/" }, { en: "B. /ˌsev.ənˈtiːn/", vi: "/ˌsev.ənˈtiːn/" }, { en: "C. /seven.tiːn/", vi: "Seventeen" }, { en: "D. /sev.ti/", vi: "Sevti" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "4.", displaySentence: "This is a Par _______ hole.", translation: "Đây là hố Par _______.",
        targetWord: "4", phonetic: "/fɔːr/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Eighty.", phonetic: "/ˈeɪ.ti/", translation: "Số 80 (Eighty)",
        options: [{ en: "A. Âm tiết 1 (Eigh-)", vi: "EIGH-ty" }, { en: "B. Âm tiết 2 (-ty)", vi: "Eigh-TY" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "200 yards.", phonetic: "/tuː ˈhʌn.drəd jɑːrdz/", translation: "200 yard",
        options: [{ en: "A. 200 yards", vi: "200 yard" }, { en: "B. 120 yards", vi: "120 yard" }, { en: "C. 20 yards", vi: "20 yard" }, { en: "D. 220 yards", vi: "220 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "8.", displaySentence: "Here is your _______ iron, Sir.", translation: "Đây là gậy sắt số _______ của anh.",
        targetWord: "8", phonetic: "/eɪt/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Seventeen.", phonetic: "/ˌsev.ənˈtiːn/", translation: "Số 17 (Seventeen)",
        options: [{ en: "A. Âm tiết 3 (-teen)", vi: "Seven-TEEN" }, { en: "B. Âm tiết 1 (Sev-)", vi: "SEVen-teen" }, { en: "C. Âm tiết 2 (-en-)", vi: "sev-EN-teen" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Ninety.", phonetic: "/ˈnaɪn.ti/", translation: "Số 90 (Ninety)",
        options: [{ en: "A. /ˈnaɪn.ti/", vi: "/ˈnaɪn.ti/" }, { en: "B. /ˌnaɪnˈtiːn/", vi: "/ˌnaɪnˈtiːn/" }, { en: "C. /nin.ti/", vi: "Ninti" }, { en: "D. /naɪn.ten/", vi: "Nineten" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "125 yards.", phonetic: "/wʌn ˈhʌn.drəd ænd ˈtwen.ti faɪv jɑːrdz/", translation: "125 yard",
        options: [
            { en: "A. One hundred and twenty-five yards", vi: "125 yard" },
            { en: "B. Twelve five yards", vi: "125 yard" },
            { en: "C. One twenty yards", vi: "120 yard" },
            { en: "D. Two hundred yards", vi: "200 yard" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "May I check your clubs now, Sir?", phonetic: "/meɪ aɪ tʃek jʊər klʌbz naʊ, sɜːr/", translation: "Tôi xin phép kiểm tra gậy của Ngài bây giờ nhé?",
        options: [
            { en: "A. May I check your clubs now, Sir?", vi: "Tôi xin phép kiểm tra gậy của Ngài bây giờ nhé?" },
            { en: "B. Can I take your bag now, Sir?", vi: "Tôi lấy túi của ông bây giờ nhé?" },
            { en: "C. Shall I carry your clubs now, Sir?", vi: "Tôi mang gậy giúp ông bây giờ nhé?" },
            { en: "D. Let me count your clubs, Sir.", vi: "Để tôi đếm gậy cho ông." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You have 14 clubs and an umbrella.", phonetic: "/juː hæv ˌfɔːrˈtiːn klʌbz ænd æn ʌmˈbrel.ə/", translation: "Ông có 14 cây gậy và một cây ô.",
        options: [
            { en: "A. You have 14 clubs and an umbrella.", vi: "Ông có 14 cây gậy và một cây ô." },
            { en: "B. You have 13 clubs and an umbrella.", vi: "Ông có 13 gậy và một ô." },
            { en: "C. You have 14 clubs in total.", vi: "Ông có tổng cộng 14 gậy." },
            { en: "D. There are 14 clubs here.", vi: "Có 14 cây gậy ở đây." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Everything is in good condition.", phonetic: "/ˈev.ri.θɪŋ ɪz ɪn ɡʊd kənˈdɪʃ.ən/", translation: "Tất cả đều ổn.",
        options: [
            { en: "A. Everything is in good condition.", vi: "Tất cả đều ổn." },
            { en: "B. All equipment looks new.", vi: "Mọi đồ dùng trông mới." },
            { en: "C. Everything is clean and ready.", vi: "Mọi thứ sạch sẽ và sẵn sàng." },
            { en: "D. Clubs are well prepared.", vi: "Gậy được chuẩn bị tốt." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you have enough balls and tees for today?", phonetic: "/duː juː hæv ɪˈnʌf bɔːlz ænd tiːz fɔːr təˈdeɪ/", translation: "Ông đã chuẩn bị đủ bóng và tee cho hôm nay chưa?",
        options: [
            { en: "A. Do you have enough balls and tees for today?", vi: "Ông chuẩn bị đủ bóng và tee chưa?" },
            { en: "B. Do you need more balls and tees, Sir?", vi: "Ông có cần thêm bóng và tee không?" },
            { en: "C. How many balls do you have today?", vi: "Hôm nay ông có bao nhiêu bóng?" },
            { en: "D. Are your balls and tees ready?", vi: "Bóng và tee của ông sẵn sàng chưa?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, I noticed a small crack on this club.", phonetic: "/sɜːr, aɪ ˈnoʊ.tɪst ə smɔːl kræk ɑːn ðɪs klʌb/", translation: "Thưa ông, tôi thấy có một vết nứt nhỏ trên cây gậy này.",
        options: [
            { en: "A. Sir, I noticed a small crack on this club.", vi: "Tôi thấy vết nứt nhỏ trên gậy này." },
            { en: "B. Sir, this club is completely broken.", vi: "Cây gậy này hỏng hoàn toàn rồi." },
            { en: "C. Sir, this club has a scratch on it.", vi: "Cây gậy này bị xước nhẹ." },
            { en: "D. Sir, check this damaged club please.", vi: "Kiểm tra cây gậy hỏng này ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Sir, this zipper is broken or damaged.", phonetic: "/sɜːr, ðɪs ˈzɪp.ər ɪz ˈbroʊ.kən ɔːr ˈdæm.ɪdʒd/", translation: "Thưa ông, cái khóa này bị hỏng rồi.",
        options: [
            { en: "A. Sir, this zipper is broken or damaged.", vi: "Thưa ông, cái khóa này bị hỏng rồi." },
            { en: "B. Sir, your bag zipper is open.", vi: "Khóa túi của ông đang mở." },
            { en: "C. Sir, the bag pocket is stuck.", vi: "Ngăn túi bị kẹt thưa ông." },
            { en: "D. Sir, this strap is broken.", vi: "Dây đeo này bị đứt thưa ông." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "There are only 13 clubs here. One is missing.", phonetic: "/ðer ɑːr ˈoʊn.li ˌθɜːrˈtiːn klʌbz hɪər. wʌn ɪz ˈmɪs.ɪŋ/", translation: "Ở đây chỉ có 13 cây thôi. Bị thiếu một cây.",
        options: [
            { en: "A. There are only 13 clubs here. One is missing.", vi: "Chỉ có 13 cây. Thiếu một cây." },
            { en: "B. You have 13 clubs today Sir.", vi: "Ông có 13 gậy hôm nay." },
            { en: "C. One club is lost in your bag.", vi: "Một cây gậy bị thất lạc." },
            { en: "D. I count 13 clubs in total.", vi: "Tôi đếm được 13 cây tổng cộng." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Yes, Sir. I checked twice.", phonetic: "/jes, sɜːr. aɪ tʃekt twaɪs/", translation: "Dạ chắc, tôi đã đếm 2 lần rồi.",
        options: [
            { en: "A. Yes, Sir. I checked twice.", vi: "Dạ chắc, tôi đã đếm 2 lần rồi." },
            { en: "B. Yes Sir, I am very sure.", vi: "Vâng thưa ông, tôi rất chắc chắn." },
            { en: "C. Yes Sir, I counted carefully.", vi: "Vâng, tôi đã đếm cẩn thận." },
            { en: "D. Yes Sir, double check complete.", vi: "Vâng, đã kiểm tra kỹ lại rồi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please check your car or your locker again.", phonetic: "/pliːz tʃek jʊər kɑːr ɔːr jʊər ˈlɑː.kər əˈɡen/", translation: "Ông vui lòng kiểm tra lại xe hoặc tủ đồ.",
        options: [
            { en: "A. Please check your car or your locker again.", vi: "Ông kiểm tra lại xe hoặc tủ đồ." },
            { en: "B. Look inside your golf bag again.", vi: "Nhìn lại bên trong túi gậy." },
            { en: "C. Check with pro-shop staff please.", vi: "Hỏi nhân viên cửa hàng xem." },
            { en: "D. Ask your friend about missing club.", vi: "Hỏi bạn ông về gậy thiếu." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you want to buy some tees at the Pro-shop?", phonetic: "/duː juː wɑːnt tə baɪ səm tiːz æt ðə proʊ ʃɑːp/", translation: "Ông có muốn mua thêm tee ở cửa hàng không?",
        options: [
            { en: "A. Do you want to buy some tees at the Pro-shop?", vi: "Ông có muốn mua thêm tee ở cửa hàng không?" },
            { en: "B. Shall I buy tees for you at Pro-shop?", vi: "Tôi đi mua tee cho ông nhé?" },
            { en: "C. Would you like to check Pro-shop for tees?", vi: "Ông ghé cửa hàng xem tee không?" },
            { en: "D. Need any golf tees from store Sir?", vi: "Cần tee từ cửa hàng không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "14.", displaySentence: "I counted _______ clubs in your bag.", translation: "Tôi đếm được _______ cây gậy trong túi của ông.",
        targetWord: "14", phonetic: "/ˌfɔːrˈtiːn/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "13.", displaySentence: "There are only _______ clubs in the bag.", translation: "Chỉ có _______ cây gậy trong túi thôi.",
        targetWord: "13", phonetic: "/ˌθɜːrˈtiːn/", hint: "Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Can I rent an umbrella from the club?", phonetic: "/kæn aɪ rent æn ʌmˈbrel.ə frəm ðə klʌb/", translation: "Tôi có thể thuê một cái ô từ câu lạc bộ không?",
        options: [
            { en: "A. Can I rent an umbrella from the club?", vi: "Tôi có thể thuê ô từ CLB không?" },
            { en: "B. Do you have an extra umbrella for me?", vi: "Cậu có dư cái ô nào không?" },
            { en: "C. Shall I buy an umbrella from shop?", vi: "Tôi có nên mua ô ở cửa hàng?" },
            { en: "D. Can you lend me your umbrella?", vi: "Cậu cho tôi mượn ô được không?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will get an umbrella for you right now.", phonetic: "/aɪ wɪl ɡet æn ʌmˈbrel.ə fɔːr juː raɪt naʊ/", translation: "Tôi sẽ đi lấy cho ông một chiếc ô ngay đây.",
        options: [
            { en: "A. I will get an umbrella for you right now.", vi: "Tôi đi lấy ô cho ông ngay đây." },
            { en: "B. I will buy an umbrella for you now.", vi: "Tôi đi mua ô cho ông ngay." },
            { en: "C. Let me fetch an umbrella from cart.", vi: "Để tôi lấy ô từ xe điện." },
            { en: "D. I bring you umbrella right away.", vi: "Tôi mang ô đến ngay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Check.", displaySentence: "I double _______ your golf bag.", translation: "Tôi kiểm tra _______ túi gậy của ông.",
        targetWord: "check", phonetic: "/tʃek/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Woods on top, irons middle, putter bottom.", phonetic: "/wʊdz ɑːn tɑːp, ˈaɪ.ərnz ˈmɪd.əl, ˈpʌt.ər ˈbɑː.t̬əm/", translation: "Gậy gỗ phía trên, gậy sắt ở giữa, gậy gạt phía dưới.",
        options: [
            { en: "A. Woods on top, irons middle, putter bottom", vi: "Gậy gỗ trên, sắt giữa, putter dưới" },
            { en: "B. Put putter on top always", vi: "Luôn để putter phía trên" },
            { en: "C. Mix all clubs together", vi: "Xếp lẫn lộn các loại gậy" },
            { en: "D. Put irons on top row", vi: "Để gậy sắt ở hàng trên" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Count clubs publicly in front of guest.", phonetic: "/kaʊnt klʌbz ˈpʌb.lɪk.li ɪn frʌnt əv ɡest/", translation: "Đếm số lượng gậy công khai trước mặt khách.",
        options: [
            { en: "A. Count clubs publicly in front of guest", vi: "Đếm gậy công khai trước mặt khách" },
            { en: "B. Count clubs privately in storage", vi: "Đếm gậy riêng trong kho" },
            { en: "C. Do not count clubs before round", vi: "Không đếm gậy trước trận" },
            { en: "D. Ask guest to count clubs alone", vi: "Yêu cầu khách tự đếm" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Never open small locked pockets.", phonetic: "/ˈnev.ər ˈoʊ.pən smɔːl lɑːkt ˈpɑː.kɪts/", translation: "Tuyệt đối không tự ý mở các ngăn túi nhỏ.",
        options: [
            { en: "A. Never open small locked pockets", vi: "Không tự ý mở ngăn túi nhỏ" },
            { en: "B. Open all pockets to check items", vi: "Mở mọi ngăn để kiểm tra" },
            { en: "C. Check small pockets for money", vi: "Kiểm tra ngăn nhỏ xem có tiền không" },
            { en: "D. Clean inside small pockets", vi: "Vệ sinh bên trong ngăn nhỏ" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Price.", displaySentence: "Do not comment on club brand _______.", translation: "Tuyệt đối không bình luận về nhãn hiệu hay _______ tiền của gậy.",
        targetWord: "price", phonetic: "/praɪs/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Slightly bow and use both hands when receiving bag.", phonetic: "/ˈslaɪt.li baʊ ænd juːz boʊθ hændz wen rɪˈsiːv.ɪŋ bæɡ/", translation: "Hơi cúi người và dùng cả hai tay khi nhận túi.",
        options: [
            { en: "A. Slightly bow and use both hands when receiving bag", vi: "Hơi cúi người, dùng 2 tay khi nhận túi" },
            { en: "B. Take bag with one hand quickly", vi: "Cầm túi bằng 1 tay thật nhanh" },
            { en: "C. Grab bag without looking at guest", vi: "Giật túi mà không nhìn khách" },
            { en: "D. Wait for guest to put bag on ground", vi: "Chờ khách tự đặt túi xuống đất" }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.4: SỞ THÍCH & TRÒ CHUYỆN GIAO LƯU (60 CÂU)
    // =========================================================================
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you play golf to relax or for business, Sir?", phonetic: "/duː juː pleɪ ɡɑːlf tə rɪˈlæks ɔːr fɔːr ˈbɪz.nɪs, sɜːr/", translation: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?",
        options: [
            { en: "A. Do you play golf to relax or for business, Sir?", vi: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?" },
            { en: "B. Is golf purely your hobby or for business networking, Sir?", vi: "Golf là sở thích thuần túy hay kết nối công việc vậy ạ?" },
            { en: "C. Do you play golf mainly on weekends, Sir?", vi: "Anh chủ yếu chơi golf vào cuối tuần phải không ạ?" },
            { en: "D. Do you play golf for exercise or fun, Sir?", vi: "Anh chơi golf để rèn luyện sức khỏe hay giải trí ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Is golf your favorite sport, Sir?", phonetic: "/ɪz ɡɑːlf jʊər ˈfeɪ.vər.ɪt spɔːrt, sɜːr/", translation: "Golf có phải là môn thể thao yêu thích của anh không ạ?",
        options: [
            { en: "A. Is golf your favorite sport, Sir?", vi: "Golf có phải môn thể thao yêu thích của anh không ạ?" },
            { en: "B. What sport do you like beside golf, Sir?", vi: "Môn nào anh thích ngoài golf ạ?" },
            { en: "C. Do you play other sports well, Sir?", vi: "Anh có chơi môn khác giỏi không ạ?" },
            { en: "D. Is golf the main sport you practice, Sir?", vi: "Golf là môn thể thao chính anh luyện tập phải không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Travelling.", phonetic: "/ˈtræv.əl.ɪŋ/", translation: "Travelling",
        options: [{ en: "A. /ˈtræv.əl.ɪŋ/", vi: "/ˈtræv.əl.ɪŋ/" }, { en: "B. /ˈtræv.əl/", vi: "/ˈtræv.əl/" }, { en: "C. /traˈvel.ɪŋ/", vi: "/traˈvel.ɪŋ/" }, { en: "D. /ˈtræv.lɪŋ/", vi: "/træv.lɪŋ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Beautiful day, isn't it, Sir?", phonetic: "/ˈbjuː.t̬ə.fəl deɪ, ˈɪz.ənt ɪt, sɜːr/", translation: "Thời tiết hôm nay tuyệt vời phải không anh?",
        options: [
            { en: "A. Beautiful day, isn't it, Sir?", vi: "Thời tiết hôm nay tuyệt vời phải không anh?" },
            { en: "B. It's a very pleasant day on the course, Sir.", vi: "Hôm nay là một ngày rất dễ chịu trên sân ạ." },
            { en: "C. The weather is great for playing golf today, Sir.", vi: "Thời tiết hôm nay rất tuyệt để chơi golf ạ." },
            { en: "D. Perfect golfing weather today, Sir.", vi: "Thời tiết chơi golf hôm nay hoàn hảo ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Relax.", phonetic: "/rɪˈlæks/", translation: "Relax",
        options: [{ en: "A. Âm tiết thứ 2 (-lax)", vi: "re-LAX" }, { en: "B. Âm tiết thứ 1 (Re-)", vi: "RE-lax" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Business.", phonetic: "/ˈbɪz.nɪs/", translation: "Business",
        options: [{ en: "A. 2 âm tiết (/ˈbɪz.nɪs/)", vi: "2 âm tiết" }, { en: "B. 3 âm tiết (/ˈbɪ.zɪ.nəs/)", vi: "3 âm tiết" }, { en: "C. 4 âm tiết", vi: "4 âm tiết" }, { en: "D. 1 âm tiết", vi: "1 âm tiết" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I like travelling too, Sir! I also like cooking.", phonetic: "/aɪ laɪk ˈtræv.əl.ɪŋ tuː, sɜːr! aɪ ˈɔːl.soʊ laɪk ˈkʊk.ɪŋ/", translation: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa.",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa." },
            { en: "B. Travelling is wonderful, Sir! Do you travel often?", vi: "Du lịch tuyệt vời lắm ạ! Anh có đi thường xuyên không ạ?" },
            { en: "C. That sounds lovely, Sir! Vietnam has many nice places.", vi: "Nghe tuyệt quá ạ! Việt Nam có nhiều điểm đến đẹp lắm ạ." },
            { en: "D. Travelling is a great way to unwind, Sir.", vi: "Du lịch là cách tuyệt vời để thư giãn thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Swimming.", phonetic: "/ˈswɪm.ɪŋ/", translation: "Swimming",
        options: [{ en: "A. Swimming /ˈswɪm.ɪŋ/", vi: "Bơi lội" }, { en: "B. Diving", vi: "Lặn" }, { en: "C. Running", vi: "Chạy" }, { en: "D. Walking", vi: "Đi bộ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Music.", phonetic: "/ˈmjuː.zɪk/", translation: "Music",
        options: [{ en: "A. /ˈmjuː.zɪk/", vi: "/ˈmjuː.zɪk/" }, { en: "B. /ˈmuː.zɪk/", vi: "/ˈmuː.zɪk/" }, { en: "C. /ˈmjuː.sɪk/", vi: "/ˈmjuː.sɪk/" }, { en: "D. /muː.sɪk/", vi: "/muː.sɪk/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I play golf with my family.", phonetic: "/aɪ pleɪ ɡɑːlf wɪð maɪ ˈfæm.əl.i/", translation: "Tôi chơi golf cùng với gia đình.",
        options: [
            { en: "A. Tôi chơi golf cùng với gia đình", vi: "Play with family" },
            { en: "B. Tôi chơi golf một mình", vi: "Play alone" },
            { en: "C. Tôi chơi golf với đồng nghiệp", vi: "Play with coworkers" },
            { en: "D. Tôi chơi golf với Caddy", vi: "Play with caddy" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Jogging.", phonetic: "/ˈdʒɑː.ɡɪŋ/", translation: "Jogging",
        options: [{ en: "A. Jogging /ˈdʒɑː.ɡɪŋ/", vi: "Chạy bộ thể dục" }, { en: "B. Running", vi: "Chạy nhanh" }, { en: "C. Walking", vi: "Đi bộ" }, { en: "D. Jog", vi: "Chạy nhẹ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "What are your hobbies in your free time, Sir?", phonetic: "/wɑːt ɑːr jʊər ˈhɑː.biz ɪn jʊər friː taɪm, sɜːr/", translation: "Sở thích lúc rảnh rỗi của anh là gì ạ?",
        options: [
            { en: "A. What are your hobbies in your free time, Sir?", vi: "Sở thích lúc rảnh rỗi của anh là gì ạ?" },
            { en: "B. How do you usually enjoy your weekends, Sir?", vi: "Anh thường tận hưởng cuối tuần như thế nào ạ?" },
            { en: "C. Do you have any favorite activities outside golf, Sir?", vi: "Anh có hoạt động yêu thích nào ngoài golf không ạ?" },
            { en: "D. What do you like doing when you're not playing golf, Sir?", vi: "Anh thích làm gì khi không chơi golf ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Watching TV.", phonetic: "/ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", translation: "Watching TV",
        options: [{ en: "A. Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", vi: "Xem TV" }, { en: "B. Looking TV", vi: "Nhìn TV" }, { en: "C. Seeing TV", vi: "Thấy TV" }, { en: "D. Listen TV", vi: "Nghe TV" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Shopping.", phonetic: "/ˈʃɑː.pɪŋ/", translation: "Shopping",
        options: [{ en: "A. Shopping /ˈʃɑː.pɪŋ/", vi: "Mua sắm" }, { en: "B. Buying", vi: "Mua hàng" }, { en: "C. Selling", vi: "Bán hàng" }, { en: "D. Market", vi: "Chợ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Cooking.", phonetic: "/ˈkʊk.ɪŋ/", translation: "Cooking",
        options: [{ en: "A. Cooking /ˈkʊk.ɪŋ/", vi: "Nấu ăn" }, { en: "B. Cooked", vi: "Đã nấu" }, { en: "C. Kitchen", vi: "Nhà bếp" }, { en: "D. Chef", vi: "Đầu bếp" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Networking.", phonetic: "/ˈnet.wɜːrk.ɪŋ/", translation: "Networking",
        options: [
            { en: "A. I play golf for networking.", vi: "Tôi chơi golf để giao lưu kết nối đối tác" },
            { en: "B. I play golf for fitness.", vi: "Tôi chơi golf để tập thể dục" },
            { en: "C. I play golf with friends.", vi: "Tôi chơi golf với bạn bè" },
            { en: "D. I play golf for tournament.", vi: "Tôi chơi golf để thi đấu" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Besides golf, I love playing tennis.", phonetic: "/bɪˈsaɪdz ɡɑːlf, aɪ lʌv ˈpleɪ.ɪŋ ˈten.ɪs/", translation: "Bên cạnh golf, tôi rất thích chơi tennis.",
        options: [
            { en: "A. Oh tennis too? You must be very active, Sir!", vi: "Ồ cả tennis nữa ạ? Anh chắc hẳn rất năng động ạ!" },
            { en: "B. Tennis is a great sport as well, Sir!", vi: "Tennis cũng là một môn thể thao tuyệt vời ạ!" },
            { en: "C. That's awesome, Sir! Tennis keeps you in good shape.", vi: "Rất tuyệt ạ! Tennis giúp giữ vóc dáng rất tốt ạ." },
            { en: "D. Playing tennis is very good for endurance, Sir.", vi: "Chơi tennis rất tốt cho thể lực thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Reading.", phonetic: "/ˈriː.dɪŋ/", translation: "Reading",
        options: [{ en: "A. Reading /ˈriː.dɪŋ/", vi: "Đọc sách" }, { en: "B. Writing", vi: "Viết sách" }, { en: "C. Listening", vi: "Lắng nghe" }, { en: "D. Speaking", vi: "Nói chuyện" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Music.", 
        displaySentence: "I love listening to _______.", 
        translation: "Tôi rất thích nghe _______.",
        targetWord: "music", phonetic: "/ˈmjuː.zɪk/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Favorite.", phonetic: "/ˈfeɪ.vər.ɪt/", translation: "Favorite",
        options: [{ en: "A. Âm tiết 1 (Fa-)", vi: "FA-vo-rite" }, { en: "B. Âm tiết 2 (-vo-)", vi: "fa-VO-rite" }, { en: "C. Âm tiết 3 (-rite)", vi: "fa-vo-RITE" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại phản xạ và chọn phương án đúng:",
        audioText: "I am here for business.", phonetic: "/aɪ æm hɪər fɔːr ˈbɪz.nɪs/", translation: "Tôi đến đây vì công việc.",
        options: [
            { en: "A. I see! Do you often play golf to network, Sir?", vi: "Em hiểu rồi ạ! Anh có thường chơi golf để kết nối đối tác không ạ?" },
            { en: "B. That's great Sir, golf is wonderful for building relationships.", vi: "Tuyệt quá ạ, golf là môn rất tốt để xây dựng mối quan hệ ạ." },
            { en: "C. Hope your business outing goes smoothly today, Sir.", vi: "Hy vọng buổi giao lưu công việc hôm nay diễn ra thuận lợi ạ." },
            { en: "D. Wishing you a successful round with your partners, Sir.", vi: "Chúc anh có vòng đấu thành công cùng các đối tác ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại trò chuyện và chọn phương án đúng:",
        audioText: "Would you like to try our clubhouse restaurant, Sir?", phonetic: "/wʊd juː laɪk tə traɪ aʊər ˈklʌb.haʊs ˈres.tə.rɑːnt, sɜːr/", translation: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?",
        options: [
            { en: "A. Would you like to try our clubhouse restaurant, Sir?", vi: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?" },
            { en: "B. Do you plan to have a meal at our restaurant, Sir?", vi: "Anh có kế hoạch dùng bữa tại nhà hàng của chúng em không ạ?" },
            { en: "C. Can I recommend our clubhouse special dishes, Sir?", vi: "Em có thể gợi ý các món đặc sản nhà câu lạc bộ không ạ?" },
            { en: "D. Would you like me to book a table for your post-round meal, Sir?", vi: "Anh có muốn em đặt bàn ăn sau trận chơi không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại phương tiện và chọn phương án đúng:",
        audioText: "Did you come here by car today, Sir?", phonetic: "/dɪd juː kʌm hɪər baɪ kɑːr təˈdeɪ, sɜːr/", translation: "Hôm nay anh đến đây bằng ô tô phải không ạ?",
        options: [
            { en: "A. Did you come here by car today, Sir?", vi: "Hôm nay anh đến đây bằng ô tô phải không ạ?" },
            { en: "B. Was your drive to the golf course smooth today, Sir?", vi: "Chuyến di chuyển đến sân hôm nay của anh thuận lợi chứ ạ?" },
            { en: "C. Did you travel far to get here today, Sir?", vi: "Hôm nay anh có đi xa để tới đây không ạ?" },
            { en: "D. Did you take the highway to reach our resort, Sir?", vi: "Anh có đi đường cao tốc để đến khu nghỉ dưỡng không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại cảnh quan và chọn phương án đúng:",
        audioText: "This hole has a beautiful view of the lake, Sir.", phonetic: "/ðɪs hoʊl hæz ə ˈbjuː.t̬ə.fəl vjuː əv ðə leɪk, sɜːr/", translation: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh.",
        options: [
            { en: "A. This hole has a beautiful view of the lake, Sir.", vi: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh." },
            { en: "B. You can enjoy a scenic landscape on this hole, Sir.", vi: "Anh có thể thưởng ngoạn phong cảnh rất đẹp ở hố này ạ." },
            { en: "C. This is one of our most picturesque holes, Sir.", vi: "Đây là một trong những hố có cảnh quan đẹp nhất sân ạ." },
            { en: "D. Notice the lovely lake view right ahead, Sir.", vi: "Anh chú ý góc nhìn ra hồ thơ mộng ngay phía trước ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại chúc cuối tuần và chọn phương án đúng:",
        audioText: "Have a wonderful weekend with your family, Sir!", phonetic: "/hæv ə ˈwʌn.dər.fəl ˈwiːk.end wɪð jʊər ˈfæm.əl.i, sɜːr/", translation: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!",
        options: [
            { en: "A. Have a wonderful weekend with your family, Sir!", vi: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!" },
            { en: "B. Wish you a relaxing weekend, Sir!", vi: "Chúc anh có ngày cuối tuần thư giãn ạ!" },
            { en: "C. Hope you enjoy the rest of your weekend, Sir!", vi: "Hy vọng anh tận hưởng trọn vẹn phần còn lại của cuối tuần ạ!" },
            { en: "D. Have a peaceful weekend, Sir!", vi: "Chúc anh một cuối tuần an lành ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại du lịch và chọn phương án đúng:",
        audioText: "Do you often travel for golf tournaments, Sir?", 
        phonetic: "/duː juː ˈɑːf.ən ˈtræv.əl fɔːr ɡɑːlf ˈtʊr.nə.mənts, sɜːr/", 
        translation: "Anh có thường xuyên đi du lịch kết hợp thi đấu golf không ạ?",
        options: [
            { en: "A. Do you often travel for golf tournaments, Sir?", vi: "Anh có thường đi du lịch đấu golf không ạ?" },
            { en: "B. Do you enjoy playing golf in different cities, Sir?", vi: "Anh có thích chơi golf ở các thành phố khác nhau không ạ?" },
            { en: "C. Have you joined many golf trips this year, Sir?", vi: "Anh đã tham gia nhiều chuyến du đấu golf năm nay chưa ạ?" },
            { en: "D. Do you usually play golf near your home, Sir?", vi: "Anh có thường chơi golf gần nhà không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại thời tiết và chọn phương án đúng:",
        audioText: "How do you feel about the weather today, Sir?", 
        phonetic: "/haʊ duː juː fiːl əˈbaʊt ðə ˈweð.ər təˈdeɪ, sɜːr/", 
        translation: "Anh cảm thấy thời tiết hôm nay thế nào ạ?",
        options: [
            { en: "A. How do you feel about the weather today, Sir?", vi: "Anh cảm thấy thời tiết hôm nay thế nào ạ?" },
            { en: "B. Isn't it a pleasant day for golf today, Sir?", vi: "Hôm nay thời tiết dễ chịu để chơi golf đúng không ạ?" },
            { en: "C. Do you prefer cool or warm weather for golf, Sir?", vi: "Anh thích thời tiết mát mẻ hay ấm áp khi chơi golf hơn ạ?" },
            { en: "D. Is the wind making it challenging today, Sir?", vi: "Gió hôm nay có gây khó khăn cho anh không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại ăn trưa và chọn phương án đúng:",
        audioText: "Where do you usually have lunch after playing, Sir?", 
        phonetic: "/wer duː juː ˈjuː.ʒu.ə.li hæv lʌntʃ ˈæf.tər ˈpleɪ.ɪŋ, sɜːr/", 
        translation: "Anh thường dùng bữa trưa ở đâu sau khi chơi xong ạ?",
        options: [
            { en: "A. Where do you usually have lunch after playing, Sir?", vi: "Anh thường ăn trưa ở đâu sau khi chơi xong ạ?" },
            { en: "B. Will you be having lunch at our clubhouse restaurant, Sir?", vi: "Anh sẽ dùng bữa trưa tại nhà hàng nhà câu lạc bộ chứ ạ?" },
            { en: "C. Would you like me to reserve a table for lunch, Sir?", vi: "Anh có muốn em đặt bàn ăn trưa giúp anh không ạ?" },
            { en: "D. Do you plan to dine with your flight after the round, Sir?", vi: "Anh có kế hoạch dùng bữa cùng nhóm sau vòng chơi không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Tennis.", 
        displaySentence: "I like playing _______ with my friends.", 
        translation: "Tôi thích chơi _______ cùng với bạn bè.",
        targetWord: "tennis", phonetic: "/ˈten.ɪs/", hint: "Từ gồm 6 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn hội thoại kỹ năng và chọn phương án đúng:",
        audioText: "You have a very consistent swing, Sir!", 
        phonetic: "/juː hæv ə ˈver.i kənˈsɪs.tənt swɪŋ, sɜːr/", 
        translation: "Anh có cú swing rất ổn định và đều tay ạ!",
        options: [
            { en: "A. You have a very consistent swing, Sir!", vi: "Anh có cú swing rất ổn định ạ!" },
            { en: "B. Your swing tempo is very smooth today, Sir!", vi: "Nhịp swing của anh hôm nay rất mượt mà ạ!" },
            { en: "C. You hit the ball so cleanly every time, Sir!", vi: "Anh tiếp bóng lần nào cũng rất ngọt ạ!" },
            { en: "D. Great ball striking ability, Sir!", vi: "Khả năng chạm bóng tuyệt vời quá anh ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you play golf often on weekends, Sir?", phonetic: "/duː juː pleɪ ɡɑːlf ˈɑːf.ən ɑːn ˈwiːk.endz, sɜːr/", translation: "Anh có thường chơi golf vào cuối tuần không ạ?",
        options: [
            { en: "A. Do you play golf often on weekends, Sir?", vi: "Anh có thường chơi golf vào cuối tuần không?" },
            { en: "B. How often do you play golf per week?", vi: "Anh chơi bao nhiêu buổi mỗi tuần?" },
            { en: "C. Do you prefer playing on weekdays?", vi: "Anh thích chơi ngày thường hơn không?" },
            { en: "D. Are you free to play golf this weekend?", vi: "Anh rảnh chơi golf cuối tuần này không?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I usually play golf with my business partners.", phonetic: "/aɪ ˈjuː.ʒu.ə.li pleɪ ɡɑːlf wɪð maɪ ˈbɪz.nɪs ˈpɑːrt.nɚz/", translation: "Tôi thường chơi golf cùng với đối tác kinh doanh.",
        options: [
            { en: "A. I usually play golf with my business partners.", vi: "Tôi thường chơi golf với đối tác kinh doanh." },
            { en: "B. I play golf with my close friends.", vi: "Tôi chơi golf với bạn thân." },
            { en: "C. I play golf with my family members.", vi: "Tôi chơi golf với gia đình." },
            { en: "D. I play golf alone on weekends.", vi: "Tôi chơi golf một mình vào cuối tuần." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Golf is a great way to build trust.", phonetic: "/ɡɑːlf ɪz ə ɡreɪt weɪ tə bɪld trʌst/", translation: "Golf là một cách tuyệt vời để xây dựng sự tin tưởng.",
        options: [
            { en: "A. Golf is a great way to build trust.", vi: "Golf giúp xây dựng sự tin tưởng." },
            { en: "B. Golf helps you get fit quickly.", vi: "Golf giúp thon gọn nhanh." },
            { en: "C. Golf is very easy to learn.", vi: "Golf rất dễ học." },
            { en: "D. Golf takes very little time.", vi: "Golf tốn rất ít thời gian." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "That's great! I hope we have a wonderful game today.", phonetic: "/ðæts ɡreɪt! aɪ hoʊp wiː hæv ə ˈwʌn.dər.fəl ɡeɪm təˈdeɪ/", translation: "Tuyệt quá! Hy vọng chúng ta có một trận đấu tuyệt vời.",
        options: [
            { en: "A. That's great! I hope we have a wonderful game today.", vi: "Tuyệt quá! Hy vọng có trận đấu tuyệt vời." },
            { en: "B. Sounds good! Let's start the game now.", vi: "Nghe hay đấy! Bắt đầu trận ngay." },
            { en: "C. Very nice! Hope to see good score today.", vi: "Rất tốt! Hy vọng thấy điểm tốt." },
            { en: "D. Excellent! Wish you good luck today.", vi: "Xuất sắc! Chúc anh may mắn." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Relax.", displaySentence: "Golf helps me _______ after work.", translation: "Golf giúp tôi _______ giãn sau giờ làm việc.",
        targetWord: "relax", phonetic: "/rɪˈlæks/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Networking.", displaySentence: "I play golf for business _______.", translation: "Tôi chơi golf để giao lưu kết nối _______ nghiệp.",
        targetWord: "networking", phonetic: "/ˈnet.wɜːrk.ɪŋ/", hint: "Từ gồm 10 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you like playing golf in the morning, Sir?", phonetic: "/duː juː laɪk ˈpleɪ.ɪŋ ɡɑːlf ɪn ðə ˈmɔːr.nɪŋ, sɜːr/", translation: "Anh có thích chơi golf vào buổi sáng không ạ?",
        options: [
            { en: "A. Do you like playing golf in the morning, Sir?", vi: "Anh thích chơi golf buổi sáng không?" },
            { en: "B. Do you prefer morning or afternoon tee time?", vi: "Anh thích giờ tee sáng hay chiều?" },
            { en: "C. Did you wake up early to play golf today?", vi: "Dậy sớm chơi golf hôm nay phải không?" },
            { en: "D. Is morning weather suitable for golf?", vi: "Thời tiết sáng có hợp chơi golf không?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Fresh air in the morning is wonderful, Sir.", phonetic: "/freʃ er ɪn ðə ˈmɔːr.nɪŋ ɪz ˈwʌn.dər.fəl, sɜːr/", translation: "Không khí lành lạnh vào buổi sáng thật tuyệt thưa anh.",
        options: [
            { en: "A. Fresh air in the morning is wonderful, Sir.", vi: "Không khí sáng sớm rất tuyệt." },
            { en: "B. Morning breeze feels cool and nice.", vi: "Gió sáng cảm giác mát dịu." },
            { en: "C. Sunshine is mild in the morning.", vi: "Nắng sáng rất dịu." },
            { en: "D. Early morning round is best.", vi: "Vòng đấu sáng sớm là tốt nhất." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Do you enjoy playing on this course design, Sir?", phonetic: "/duː juː ɪnˈdʒɔɪ ˈpleɪ.ɪŋ ɑːn ðɪs kɔːrs dɪˈzaɪn, sɜːr/", translation: "Anh có thích thiết kế của sân golf này không ạ?",
        options: [
            { en: "A. Do you enjoy playing on this course design, Sir?", vi: "Anh thích thiết kế sân này không?" },
            { en: "B. What do you think about our course layout?", vi: "Anh nghĩ sao về sơ đồ sân?" },
            { en: "C. Is this course challenging for you, Sir?", vi: "Sân này có thử thách với anh không?" },
            { en: "D. How do you rate this golf resort?", vi: "Anh đánh giá resort golf này thế nào?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "This course is designed by Nicklaus Design.", phonetic: "/ðɪs kɔːrs ɪz dɪˈzaɪnd baɪ ˈnɪk.laʊs dɪˈzaɪn/", translation: "Sân này được thiết kế bởi Nicklaus Design.",
        options: [
            { en: "A. This course is designed by Nicklaus Design.", vi: "Sân được thiết kế bởi Nicklaus Design." },
            { en: "B. This course is famous in Vietnam.", vi: "Sân này rất nổi tiếng ở Việt Nam." },
            { en: "C. This course opened 5 years ago.", vi: "Sân này mở cửa 5 năm trước." },
            { en: "D. This course has 18 holes in total.", vi: "Sân có tổng cộng 18 hố." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "What a beautiful landscape on this hole!", phonetic: "/wɑːt ə ˈbjuː.t̬ə.fəl ˈlænd.skeɪp ɑːn ðɪs hoʊl/", translation: "Phong cảnh hố này đẹp quá!",
        options: [
            { en: "A. What a beautiful landscape on this hole!", vi: "Phong cảnh hố này đẹp quá!" },
            { en: "B. View on this hole is very clear.", vi: "Tầm nhìn hố này rất rõ." },
            { en: "C. Look at the lake scenery here.", vi: "Nhìn cảnh hồ nước ở đây." },
            { en: "D. This is the signature hole of our course.", vi: "Đây là hố biểu tượng của sân." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Peaceful.", displaySentence: "The scenery here is very _______.", translation: "Phong cảnh ở đây rất bình _______.",
        targetWord: "peaceful", phonetic: "/ˈpiːs.fəl/", hint: "Từ gồm 8 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "How often do you travel to Vietnam, Sir?", phonetic: "/haʊ ˈɑːf.ən duː juː ˈtræv.əl tə ˌvjetˈnɑːm, sɜːr/", translation: "Anh có thường xuyên đi du lịch Việt Nam không ạ?",
        options: [
            { en: "A. How often do you travel to Vietnam, Sir?", vi: "Anh có thường du lịch Việt Nam không?" },
            { en: "B. Is this your first visit to Vietnam, Sir?", vi: "Lần đầu anh tới Việt Nam phải không?" },
            { en: "C. Do you like Vietnamese food, Sir?", vi: "Anh thích đồ ăn Việt Nam không?" },
            { en: "D. How long will you stay in Vietnam, Sir?", vi: "Anh ở Việt Nam bao lâu ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Vietnam has many world class golf courses, Sir.", phonetic: "/ˌvjetˈnɑːm hæz ˈmen.i wɜːld klæs ɡɑːlf ˈkɔːr.sɪz, sɜːr/", translation: "Việt Nam có nhiều sân golf đẳng cấp thế giới thưa anh.",
        options: [
            { en: "A. Vietnam has many world class golf courses, Sir.", vi: "Việt Nam có nhiều sân đẳng cấp thế giới." },
            { en: "B. Vietnamese golf courses are very green.", vi: "Sân golf Việt Nam rất xanh." },
            { en: "C. Golf is growing fast in Vietnam.", vi: "Golf phát triển nhanh ở Việt Nam." },
            { en: "D. Players love playing golf in Vietnam.", vi: "Người chơi thích chơi golf ở Việt Nam." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Would you like to try some coffee at clubhouse, Sir?", phonetic: "/wʊd juː laɪk tə traɪ səm ˈkɑː.fi æt ˈklʌb.haʊs, sɜːr/", translation: "Anh có muốn dùng thử cà phê tại nhà CLB không ạ?",
        options: [
            { en: "A. Would you like to try some coffee at clubhouse, Sir?", vi: "Dùng thử cà phê tại nhà CLB không ạ?" },
            { en: "B. Can I bring you a cup of hot coffee?", vi: "Mang cho anh tách cà phê nóng nhé?" },
            { en: "C. Do you drink coffee before playing golf?", vi: "Anh uống cà phê trước khi chơi không?" },
            { en: "D. Our clubhouse serves great Vietnamese coffee.", vi: "Nhà CLB phục vụ cà phê Việt Nam rất ngon." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Vietnamese iced coffee is very famous, Sir.", phonetic: "/ˌvjet.nəˈmiːz aɪst ˈkɑː.fi ɪz ˈver.i ˈfeɪ.məs, sɜːr/", translation: "Cà phê đá Việt Nam rất nổi tiếng thưa anh.",
        options: [
            { en: "A. Vietnamese iced coffee is very famous, Sir.", vi: "Cà phê đá Việt Nam rất nổi tiếng." },
            { en: "B. Try our local coffee flavor, Sir.", vi: "Thử hương vị cà phê địa phương." },
            { en: "C. Cold drinks are ready at halfway house.", vi: "Đồ uống lạnh sẵn sàng ở nhà dừng chân." },
            { en: "D. Enjoy your drink after round, Sir.", vi: "Tận hưởng đồ uống sau trận nhé." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Delicious.", displaySentence: "Vietnamese coffee is strong and _______.", translation: "Cà phê Việt Nam đậm đà và ngon _______.",
        targetWord: "delicious", phonetic: "/dɪˈlɪʃ.əs/", hint: "Từ gồm 9 ký tự."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Wishing you a pleasant stay in our resort!", phonetic: "/ˈwɪʃ.ɪŋ juː ə ˈplez.ənt steɪ ɪn aʊər rɪˈzɔːrt/", translation: "Chúc anh có kỳ nghỉ dễ chịu tại khu nghỉ dưỡng của chúng em!",
        options: [
            { en: "A. Wishing you a pleasant stay in our resort!", vi: "Chúc có kỳ nghỉ dễ chịu tại resort!" },
            { en: "B. Hope you like our resort service!", vi: "Hy vọng thích dịch vụ resort!" },
            { en: "C. Enjoy your holiday at our golf hotel!", vi: "Tận hưởng kỳ nghỉ tại khách sạn golf!" },
            { en: "D. Have fun staying with us today!", vi: "Vui vẻ khi ở cùng chúng em!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Thank you for sharing your stories, Sir!", phonetic: "/θæŋk juː fɔːr ˈʃer.ɪŋ jʊər ˈstɔːr.iz, sɜːr/", translation: "Cảm ơn anh đã chia sẻ những câu chuyện ạ!",
        options: [
            { en: "A. Thank you for sharing your stories, Sir!", vi: "Cảm ơn đã chia sẻ câu chuyện ạ!" },
            { en: "B. Nice talking with you today, Sir!", vi: "Nói chuyện với anh rất vui!" },
            { en: "C. I enjoyed listening to you, Sir!", vi: "Lắng nghe anh rất thú vị!" },
            { en: "D. Thanks for your interesting conversation!", vi: "Cảm ơn cuộc trò chuyện thú vị!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Talking.", displaySentence: "It was nice _______ to you today.", translation: "Trò _______ với anh hôm nay rất vui.",
        targetWord: "talking", phonetic: "/ˈtɑːk.ɪŋ/", hint: "Từ gồm 7 ký tự."
    },

    // =========================================================================
    // SECTION 1.5: THỰC HÀNH & TÌNH HUỐNG TRÊN SÂN (60 CÂU)
    // =========================================================================
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại thực tế và chọn phương án đúng:",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?", phonetic: "/hɪər ɪz jʊər faɪv ˈaɪ.ən, sɜːr. ɪz ðɪs ðə klʌb juː niːd/", translation: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?" },
            { en: "B. Here is the 5-iron, Sir. Would you like another club instead?", vi: "Gậy 5 đây ạ. Anh có muốn đổi gậy khác không ạ?" },
            { en: "C. I brought your 5-iron, Sir. Please check if it's correct.", vi: "Em mang gậy 5 ra rồi ạ. Anh xem đúng chưa nhé ạ." },
            { en: "D. 5-iron ready, Sir. Let me know if you prefer a hybrid.", vi: "Gậy 5 đã sẵn sàng ạ. Anh muốn dùng gậy hybrid thì báo em nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại tư vấn và chọn phương án đúng:",
        audioText: "Please aim to the left, there is a bunker on the right.", phonetic: "/pliːz eɪm tə ðə left, ðer ɪz ə ˈbʌŋ.kər ɑːn ðə raɪt/", translation: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ.",
        options: [
            { en: "A. Please aim to the left, there is a bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ." },
            { en: "B. Watch out for the fairway bunker on the right side, Sir.", vi: "Cẩn thận bẫy cát fairway bên phải thưa anh." },
            { en: "C. I recommend aiming slightly left to avoid the sand, Sir.", vi: "Em khuyên nên ngắm hơi lệch trái để tránh cát ạ." },
            { en: "D. Left side is safer, Sir. There is a deep bunker right.", vi: "Phía bên trái an toàn hơn ạ. Phía phải có bẫy cát sâu ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại chăm sóc và chọn phương án đúng:",
        audioText: "The sun is strong today. Would you like some cold water?", phonetic: "/ðə sʌn ɪz strɔːŋ təˈdeɪ. wʊd juː laɪk səm koʊld ˈwɔː.tər/", translation: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?",
        options: [
            { en: "A. The sun is strong today. Would you like some cold water?", vi: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?" },
            { en: "B. It's quite hot today, Sir. Can I offer you a cold drink?", vi: "Trời hôm nay khá nóng ạ. Em lấy đồ uống lạnh cho anh nhé ạ?" },
            { en: "C. Please stay hydrated, Sir. Would you like some water?", vi: "Anh chú ý uống nước nhé ạ. Anh có dùng thêm nước không ạ?" },
            { en: "D. Shall I fetch some chilled water for you, Sir?", vi: "Em đi lấy chút nước mát cho anh nhé ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại khen ngợi và chọn phương án đúng:",
        audioText: "That is a great shot, Sir!", phonetic: "/ðæt ɪz ə ɡreɪt ʃɑːt, sɜːr/", translation: "Cú đánh tuyệt vời quá anh ơi!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. Beautiful shot, Sir! Perfect trajectory.", vi: "Cú đánh tuyệt đẹp ạ! Đường bóng hoàn hảo." },
            { en: "C. Well struck, Sir! That ball flew so straight.", vi: "Đánh rất ngọt ạ! Bóng đi thật thẳng." },
            { en: "D. Outstanding shot, Sir! Right down the middle.", vi: "Cú đánh xuất sắc ạ! Đúng chính giữa fairway." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại lựa chọn gậy và chọn phương án đúng:",
        audioText: "Which club do you prefer, Sir?", phonetic: "/wɪtʃ klʌb duː juː prɪˈfɜːr, sɜːr/", translation: "Anh ưu tiên chọn gậy nào ạ?",
        options: [
            { en: "A. Which club do you prefer, Sir?", vi: "Anh ưu tiên chọn gậy nào ạ?" },
            { en: "B. Which option fits your shot best here, Sir?", vi: "Lựa chọn gậy nào phù hợp nhất cho cú đánh này ạ?" },
            { en: "C. Would you like an iron or a hybrid for this distance, Sir?", vi: "Anh muốn dùng gậy sắt hay gậy hybrid cho khoảng cách này ạ?" },
            { en: "D. Which club are you leaning towards, Sir?", vi: "Anh đang thiên về chọn cây gậy nào ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại chăm sóc nắng nóng và chọn phương án đúng:",
        audioText: "Do you need more sunscreen, Sir?", phonetic: "/duː juː niːd mɔːr ˈsʌn.skriːn, sɜːr/", translation: "Anh có cần thêm kem chống nắng không ạ?",
        options: [
            { en: "A. Do you need more sunscreen, Sir?", vi: "Anh có cần thêm kem chống nắng không ạ?" },
            { en: "B. The UV index is high today, Sir. Would you like some sunscreen?", vi: "Chỉ số UV hôm nay cao ạ. Anh có muốn dùng kem chống nắng không ạ?" },
            { en: "C. Can I offer you some sun protection spray, Sir?", vi: "Em lấy thêm bình xịt chống nắng cho anh nhé ạ?" },
            { en: "D. Would you like to reapply sunscreen before we continue, Sir?", vi: "Anh có muốn thoa thêm kem chống nắng trước khi đi tiếp không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại di chuyển xe điện và chọn phương án đúng:",
        audioText: "Please get on the buggy, Sir.", phonetic: "/pliːz ɡet ɑːn ðə ˈbʌɡ.i, sɜːr/", translation: "Mời anh lên xe điện ạ.",
        options: [
            { en: "A. Please get on the buggy, Sir.", vi: "Mời anh lên xe điện ạ." },
            { en: "B. Please take a seat on the golf cart, Sir.", vi: "Mời anh ngồi vào xe golf ạ." },
            { en: "C. We can drive to the next ball now, Sir.", vi: "Bây giờ mình có thể lái xe đến vị trí bóng tiếp theo ạ." },
            { en: "D. Ready to ride to your ball, Sir?", vi: "Sẵn sàng di chuyển bằng xe đến vị trí bóng chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại trấn an tìm bóng và chọn phương án đúng:",
        audioText: "Don't worry, Sir. I will find your ball.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr. aɪ wɪl faɪnd jʊər bɔːl/", translation: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh.",
        options: [
            { en: "A. Don't worry, Sir. I will find your ball.", vi: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh." },
            { en: "B. Stay calm Sir, I saw where it landed.", vi: "Anh bình tĩnh nhé ạ, em đã nhìn thấy điểm bóng rơi rồi ạ." },
            { en: "C. I'll search the rough right away, Sir.", vi: "Em sẽ đi tìm ở khu cỏ rough ngay lập tức ạ." },
            { en: "D. We have time to track it down, Sir.", vi: "Chúng ta có thời gian để tìm bóng ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Towel.", displaySentence: "Would you like a wet _______, Sir?", translation: "Anh có cần dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel", phonetic: "/ˈtaʊ.əl/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Luck.", displaySentence: "Good _______ with your shot, Sir!", translation: "Chúc anh _______ mắn với cú đánh ạ!",
        targetWord: "luck", phonetic: "/lʌk/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại cảnh báo bẫy cát và chọn phương án đúng:",
        audioText: "Watch out for the bunker, Sir.", phonetic: "/wɑːtʃ aʊt fɔːr ðə ˈbʌŋ.kər, sɜːr/", translation: "Anh chú ý bẫy cát nhé ạ.",
        options: [
            { en: "A. Watch out for the bunker, Sir.", vi: "Anh chú ý bẫy cát nhé ạ." },
            { en: "B. Mind the sand trap right there, Sir.", vi: "Cẩn thận bẫy cát ngay đó thưa anh." },
            { en: "C. Please be mindful of the bunker ahead, Sir.", vi: "Xin chú ý bẫy cát phía trước ạ." },
            { en: "D. Keep clear of the bunker on this side, Sir.", vi: "Đánh né khu bẫy cát bên này ra nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại chúc mừng thành tích và chọn phương án đúng:",
        audioText: "Congratulations on your birdie, Sir!", phonetic: "/kənˌɡrætʃ.əˈleɪ.ʃənz ɑːn jʊər ˈbɜːr.di, sɜːr/", translation: "Chúc mừng anh đã đạt điểm Birdie ạ!",
        options: [
            { en: "A. Congratulations on your birdie, Sir!", vi: "Chúc mừng anh đã đạt điểm Birdie ạ!" },
            { en: "B. Fantastic birdie, Sir! Great putt.", vi: "Birdie tuyệt vời thưa anh! Cú gạt rất hay ạ." },
            { en: "C. Awesome birdie, Sir! You played that hole perfectly.", vi: "Birdie đỉnh quá anh ơi! Anh xử lý hố này hoàn hảo ạ." },
            { en: "D. Great job making birdie on this hole, Sir!", vi: "Chúc mừng anh ghi điểm birdie hố này ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại cảnh báo bẫy nước và chọn phương án đúng:",
        audioText: "Please be careful, there is water behind the green, Sir.", phonetic: "/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/", translation: "Anh cẩn thận giúp em, có nước ở phía sau green ạ.",
        options: [
            { en: "A. Please be careful, there is water behind the green, Sir.", vi: "Anh cẩn thận giúp em, có nước phía sau green ạ." },
            { en: "B. Watch your distance, Sir. Water hazard is past the flag.", vi: "Anh chú ý lực đánh ạ. Bẫy nước nằm sau lá cờ ạ." },
            { en: "C. Don't hit long, Sir. Water is lurking behind the pin.", vi: "Đừng đánh thừa cờ ạ. Nước nằm ở phía sau ạ." },
            { en: "D. The green drops off into water at the back, Sir.", vi: "Mặt green phía sau dốc thẳng xuống nước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại trả lại bóng và chọn phương án đúng:",
        audioText: "Your ball is clean now, Sir. Good luck with your putt!", phonetic: "/jʊər bɔːl ɪz kliːn naʊ, sɜːr. ɡʊd lʌk wɪð jʊər pʌt/", translation: "Bóng của anh đã lau sạch rồi ạ. Chúc anh gạt bóng may mắn ạ!",
        options: [
            { en: "A. Your ball is clean now, Sir. Good luck with your putt!", vi: "Bóng đã được lau sạch. Chúc anh gạt bóng may mắn ạ!" },
            { en: "B. Here is your clean ball, Sir. Line looks good.", vi: "Bóng sạch của anh đây ạ. Đường ngắm trông rất đẹp ạ." },
            { en: "C. Ball is wiped clean, Sir. Hope this putt goes in!", vi: "Bóng đã được lau khô ạ. Hy vọng cú gạt này lọt hố ạ!" },
            { en: "D. All cleaned up for you, Sir. Ready for your putt.", vi: "Đã lau chùi xong cho anh ạ. Sẵn sàng cho cú gạt bóng ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại hướng dẫn ngắm đánh và chọn phương án đúng:",
        audioText: "Please hit straight ahead, Sir.", phonetic: "/pliːz hɪt streɪt əˈhed, sɜːr/", translation: "Anh đánh thẳng phía trước giúp em nhé ạ.",
        options: [
            { en: "A. Please hit straight ahead, Sir.", vi: "Anh đánh thẳng phía trước giúp em nhé ạ." },
            { en: "B. Aim straight down the center line, Sir.", vi: "Ngắm thẳng theo đường trung tâm thưa anh." },
            { en: "C. Straight shot is best here, Sir.", vi: "Cú đánh thẳng là tốt nhất ở góc này ạ." },
            { en: "D. Just aim for the target pole straight ahead, Sir.", vi: "Cứ ngắm vào cột mốc thẳng phía trước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại thời tiết xấu và chọn phương án đúng:",
        audioText: "The storm is coming near. Let's go back to the clubhouse, Sir.", phonetic: "/ðə stɔːrm ɪz ˈkʌm.ɪŋ nɪər. lets ɡoʊ bæk tə ðə ˈklʌb.haʊs, sɜːr/", translation: "Cơn bão đang đến gần rồi ạ. Chúng ta nên quay về nhà câu lạc bộ thưa anh.",
        options: [
            { en: "A. The storm is coming near. Let's go back to the clubhouse, Sir.", vi: "Bão đang đến gần. Chúng ta về nhà câu lạc bộ thôi ạ." },
            { en: "B. Lightning warning is active, Sir. We need to take shelter.", vi: "Cảnh báo sấm sét đã kích hoạt ạ. Chúng ta cần tìm nơi trú ẩn ạ." },
            { en: "C. For safety, let's head back inside due to the weather, Sir.", vi: "Để an toàn, chúng ta di chuyển vào trong do thời tiết xấu ạ." },
            { en: "D. Bad weather approaching, Sir. Clubhouse is safer now.", vi: "Thời tiết xấu đang tới ạ. Về nhà câu lạc bộ sẽ an toàn hơn ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại trấn an và chọn phương án đúng:",
        audioText: "Take your time, Sir.", phonetic: "/teɪk jʊər taɪm, sɜːr/", translation: "Anh cứ từ tốn bình tĩnh thôi ạ.",
        options: [
            { en: "A. Take your time, Sir.", vi: "Anh cứ từ tốn bình tĩnh thôi ạ." },
            { en: "B. No rush at all, Sir. Focus on your routine.", vi: "Không cần vội đâu ạ. Hãy tập trung vào thói quen chuẩn bị ạ." },
            { en: "C. Take a deep breath and relax before you stroke, Sir.", vi: "Hít thở sâu và thư giãn trước khi thực hiện cú gạt nhé ạ." },
            { en: "D. Feel free to take a couple of practice swings, Sir.", vi: "Cứ thoải mái thực hiện vài cú nháp trước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại mệt mỏi và chọn phương án đúng:",
        audioText: "Would you like to sit and rest for a moment, Sir?", phonetic: "/wʊd juː laɪk tə sɪt ænd rest fɔːr ə ˈmoʊ.mənt, sɜːr/", translation: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?",
        options: [
            { en: "A. Would you like to sit and rest for a moment, Sir?", vi: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?" },
            { en: "B. We can pause briefly if you need a break, Sir.", vi: "Chúng ta có thể tạm dừng một chút nếu anh cần nghỉ ạ." },
            { en: "C. Please take a seat in the shade for a bit, Sir.", vi: "Mời anh ngồi nghỉ trong bóng râm một chút ạ." },
            { en: "D. Feel free to catch your breath here, Sir.", vi: "Anh cứ lấy lại sức ở đây thoải mái nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại ô che nắng và chọn phương án đúng:",
        audioText: "Would you like an umbrella, Sir?", phonetic: "/wʊd juː laɪk æn ʌmˈbrel.ə, sɜːr/", translation: "Anh có muốn dùng ô che không ạ?",
        options: [
            { en: "A. Would you like an umbrella, Sir?", vi: "Anh có muốn dùng ô che không ạ?" },
            { en: "B. Can I hold the umbrella over you, Sir?", vi: "Em che ô cho anh nhé ạ?" },
            { en: "C. Shall I open the umbrella for shade, Sir?", vi: "Em mở ô che nắng cho anh nhé ạ?" },
            { en: "D. Would you prefer some cover with the umbrella, Sir?", vi: "Anh có muốn che ô cho bớt nắng/mưa không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại động viên và chọn phương án đúng:",
        audioText: "Don't worry, Sir! We can recover on the next shot.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr! wiː kæn rɪˈkʌv.ər ɑːn ðə nekst ʃɑːt/", translation: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ.",
        options: [
            { en: "A. Don't worry, Sir! We can recover on the next shot.", vi: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ." },
            { en: "B. Shake it off, Sir! Still plenty of holes left.", vi: "Bỏ qua đi ạ! Chúng ta còn nhiều hố phía trước ạ." },
            { en: "C. Forget that one, Sir. Let's focus on this next swing.", vi: "Quên cú đó đi ạ. Hãy tập trung vào cú đánh tiếp theo ạ." },
            { en: "D. Bad luck Sir, but you can definitely bounce back.", vi: "Kém may mắn chút thôi ạ, anh chắc chắn sẽ gỡ lại được ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Water.", displaySentence: "Would you like some cold _______, Sir?", translation: "Anh có muốn dùng chút _______ lạnh không ạ?",
        targetWord: "water", phonetic: "/ˈwɔː.tər/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại bảo dưỡng green và chọn phương án đúng:",
        audioText: "I will repair the pitch mark for you, Sir.", phonetic: "/aɪ wɪl rɪˈper ðə pɪtʃ mɑːrk fɔːr juː, sɜːr/", translation: "Em sẽ sửa vết bóng trên green giúp anh ạ.",
        options: [
            { en: "A. I will repair the pitch mark for you, Sir.", vi: "Em sẽ sửa vết bóng trên green giúp anh ạ." },
            { en: "B. Let me fix this ball mark on the green, Sir.", vi: "Để em sửa vết bóng này trên green ạ." },
            { en: "C. I'm taking care of your pitch mark now, Sir.", vi: "Em đang xử lý vết bóng cho anh rồi ạ." },
            { en: "D. Allow me to mend the green surface here, Sir.", vi: "Cho phép em sửa mặt cỏ green chỗ này ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại bẫy cát và chọn phương án đúng:",
        audioText: "Let me rake the bunker for you, Sir.", phonetic: "/let miː reɪk ðə ˈbʌŋ.kər fɔːr juː, sɜːr/", translation: "Để em cào bẫy cát giúp anh ạ.",
        options: [
            { en: "A. Let me rake the bunker for you, Sir.", vi: "Để em cào bẫy cát giúp anh ạ." },
            { en: "B. I will smooth out the sand for you, Sir.", vi: "Em sẽ cào phẳng cát cho anh ạ." },
            { en: "C. I'm raking your footprints in the bunker, Sir.", vi: "Em đang cào phẳng vết chân trong bẫy cát ạ." },
            { en: "D. Leave the sand to me, Sir. I'll rake it clean.", vi: "Cứ để bẫy cát cho em ạ. Em sẽ cào sạch sẽ ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại vị trí cờ và chọn phương án đúng:",
        audioText: "Would you like me to attend the pin, Sir?", phonetic: "/wʊd juː laɪk miː tə əˈtend ðə pɪn, sɜːr/", translation: "Anh có muốn em giữ cờ/rút cờ giúp anh không ạ?",
        options: [
            { en: "A. Would you like me to attend the pin, Sir?", vi: "Anh có muốn em giữ/rút cờ giúp anh không ạ?" },
            { en: "B. Shall I pull the flagstick out for you, Sir?", vi: "Em rút cờ ra cho anh nhé ạ?" },
            { en: "C. Do you want the pin left in or taken out, Sir?", vi: "Anh muốn cắm cờ hay rút cờ ra ạ?" },
            { en: "D. Would you like me to hold the flag, Sir?", vi: "Anh có muốn em giữ lá cờ không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại an toàn và chọn phương án đúng:",
        audioText: "Please stand behind the safety line, Sir.", phonetic: "/pliːz stænd bɪˈhaɪnd ðə ˈseɪf.ti laɪn, sɜːr/", translation: "Anh vui lòng đứng sau vạch an toàn giúp em ạ.",
        options: [
            { en: "A. Please stand behind the safety line, Sir.", vi: "Anh vui lòng đứng sau vạch an toàn giúp em ạ." },
            { en: "B. Please step back to stay in a safe position, Sir.", vi: "Vui lòng lùi lại để ở vị trí an toàn thưa anh." },
            { en: "C. Kindly stand clear of the player's swing path, Sir.", vi: "Xin đứng né khỏi tầm vung gậy của người chơi ạ." },
            { en: "D. For safety, please wait behind the tee markers, Sir.", vi: "Vì an toàn, xin chờ phía sau vạch tee thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại cảnh báo cỏ rậm và chọn phương án đúng:",
        audioText: "Watch out for the thick rough on the left, Sir.", 
        phonetic: "/wɑːtʃ aʊt fɔːr ðə θɪk rʌf ɑːn ðə left, sɜːr/", 
        translation: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ.",
        options: [
            { en: "A. Watch out for the thick rough on the left, Sir.", vi: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ." },
            { en: "B. Please avoid the heavy rough on the left side, Sir.", vi: "Xin tránh vùng cỏ rất rậm phía bên trái ạ." },
            { en: "C. The rough on the left is quite deep today, Sir.", vi: "Cỏ rough bên trái hôm nay khá sâu thưa anh." },
            { en: "D. Keep it away from the left rough if possible, Sir.", vi: "Đánh tránh khu cỏ rough bên trái ra nhé anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại vệ sinh gậy và chọn phương án đúng:",
        audioText: "Shall I clean your club face, Sir?", 
        phonetic: "/ʃæl aɪ kliːn jʊər klʌb feɪs, sɜːr/", 
        translation: "Em lau mặt gậy giúp anh nhé ạ?",
        options: [
            { en: "A. Shall I clean your club face, Sir?", vi: "Em lau mặt gậy giúp anh nhé ạ?" },
            { en: "B. Let me wipe down your club face for you, Sir.", vi: "Để em lau sạch mặt gậy cho anh ạ." },
            { en: "C. Would you like me to clean the grooves on this club, Sir?", vi: "Anh có muốn em vệ sinh rãnh mặt gậy không ạ?" },
            { en: "D. Allow me to sanitize and clean your club, Sir.", vi: "Cho phép em lau chùi gậy sạch sẻ nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn hội thoại kết quả bóng và chọn phương án đúng:",
        audioText: "Great shot Sir, your ball is on the green!", 
        phonetic: "/ɡreɪt ʃɑːt sɜːr, jʊər bɔːl ɪz ɑːn ðə ɡriːn/", 
        translation: "Cú đánh tuyệt vời thưa anh, bóng đã lên green rồi ạ!",
        options: [
            { en: "A. Great shot Sir, your ball is on the green!", vi: "Cú đánh tuyệt vời, bóng đã lên green rồi ạ!" },
            { en: "B. Excellent approach shot, Sir! It landed nicely on the green.", vi: "Cú đánh tiếp cận tuyệt vời ạ! Bóng lên green rất đẹp." },
            { en: "C. You are safely on the green, Sir! Good chance for birdie.", vi: "Bóng lên green an toàn rồi ạ! Cơ hội birdie tốt đấy ạ." },
            { en: "D. Beautiful shot, Sir! The ball stopped right on the green.", vi: "Cú đánh đẹp quá ạ! Bóng dừng ngay trên green rồi ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I am checking the fairway conditions now, Sir.", phonetic: "/aɪ æm ˈtʃek.ɪŋ ðə ˈfer.weɪ kənˈdɪʃ.ənz naʊ, sɜːr/", translation: "Dạ em đang kiểm tra điều kiện fairway ạ.",
        options: [
            { en: "A. I am checking the fairway conditions now, Sir.", vi: "Em kiểm tra điều kiện fairway ạ." },
            { en: "B. Fairway looks wet today Sir.", vi: "Fairway hôm nay có vẻ ướt ạ." },
            { en: "C. Ball is in middle of fairway Sir.", vi: "Bóng nằm ở giữa fairway ạ." },
            { en: "D. Please keep buggy on fairway path.", vi: "Xin đi xe điện trên đường fairway." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Wind is blowing from left to right, Sir.", phonetic: "/wɪnd ɪz ˈbloʊ.ɪŋ frəm left tə raɪt, sɜːr/", translation: "Gió đang thổi từ trái sang phải thưa anh.",
        options: [
            { en: "A. Wind is blowing from left to right, Sir.", vi: "Gió thổi từ trái sang phải ạ." },
            { en: "B. Wind is blowing against us Sir.", vi: "Gió thổi ngược lại ạ." },
            { en: "C. Wind is helping your ball flight Sir.", vi: "Gió xuôi hỗ trợ đường bóng ạ." },
            { en: "D. There is no wind at all Sir.", vi: "Không có gió chút nào ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "The green is sloping downhill, Sir.", phonetic: "/ðə ɡriːn ɪz ˈsloʊ.pɪŋ ˌdaʊnˈhɪl, sɜːr/", translation: "Mặt green đang dốc xuống dốc thưa anh.",
        options: [
            { en: "A. The green is sloping downhill, Sir.", vi: "Mặt green dốc xuống dốc ạ." },
            { en: "B. Green speed is very fast today.", vi: "Tốc độ green hôm nay nhanh." },
            { en: "C. Green slope is breaking left.", vi: "Green dốc lượn sang trái." },
            { en: "D. Aim uphill for this putt Sir.", vi: "Ngắm lên dốc cho cú gạt này." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Putt with gentle force, Sir.", phonetic: "/pʌt wɪð ˈdʒen.təl fɔːrs, sɜːr/", translation: "Anh gạt bóng với lực nhẹ nhàng thôi ạ.",
        options: [
            { en: "A. Putt with gentle force, Sir.", vi: "Gạt bóng với lực nhẹ nhàng ạ." },
            { en: "B. Hit hard on this putt Sir.", vi: "Đánh mạnh tay cú gạt này." },
            { en: "C. Stroke smoothly towards pin.", vi: "Gạt mượt mà hướng tới cờ." },
            { en: "D. Keep putter head low.", vi: "Giữ đầu gậy gạt thấp." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Wind.", displaySentence: "The _______ is strong today, Sir.", translation: "Hôm nay _______ thổi rất mạnh thưa anh.",
        targetWord: "wind", phonetic: "/wɪnd/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Right.", displaySentence: "Please aim slightly to the _______.", translation: "Anh ngắm lệch nhẹ sang bên _______ giúp em.",
        targetWord: "right", phonetic: "/raɪt/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Your ball is in a divot, Sir.", phonetic: "/jʊər bɔːl ɪz ɪn ə ˈdɪv.ət, sɜːr/", translation: "Bóng của anh nằm trong vết cỏ tróc ạ.",
        options: [
            { en: "A. Your ball is in a divot, Sir.", vi: "Bóng nằm trong vết cỏ tróc ạ." },
            { en: "B. Your ball is on deep rough Sir.", vi: "Bóng nằm trên cỏ rough sâu." },
            { en: "C. Your ball is near sand trap Sir.", vi: "Bóng nằm gần bẫy cát." },
            { en: "D. Ball is plugged in soft ground.", vi: "Bóng lún dưới đất mềm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will replace the divot for you, Sir.", phonetic: "/aɪ wɪl rɪˈpleɪs ðə ˈdɪv.ət fɔːr juː, sɜːr/", translation: "Em sẽ đặt lại mảng cỏ tróc giúp anh ạ.",
        options: [
            { en: "A. I will replace the divot for you, Sir.", vi: "Em đặt lại mảng cỏ tróc giúp anh." },
            { en: "B. Let me fill sand in divot hole.", vi: "Để em lấp cát vào vết cỏ." },
            { en: "C. I clean divot tool for you.", vi: "Em lau dụng cụ sửa cỏ." },
            { en: "D. Leave divot area to greenkeeper.", vi: "Để mảng cỏ cho nhân viên bảo dưỡng." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Pin position is red flag in front today, Sir.", phonetic: "/pɪn pəˈzɪʃ.ən ɪz red flæɡ ɪn frʌnt təˈdeɪ, sɜːr/", translation: "Vị trí cờ hôm nay là cờ đỏ phía trước green ạ.",
        options: [
            { en: "A. Pin position is red flag in front today, Sir.", vi: "Cờ đỏ phía trước green hôm nay." },
            { en: "B. Pin is white flag in middle today.", vi: "Cờ trắng ở giữa green hôm nay." },
            { en: "C. Pin is blue flag at back today.", vi: "Cờ xanh ở phía sau green hôm nay." },
            { en: "D. Flag color changed on back nine.", vi: "Màu cờ đổi ở 9 hố sau." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "White flag means middle pin position.", phonetic: "/waɪt flæɡ miːnz ˈmɪd.əl pɪn pəˈzɪʃ.ən/", translation: "Lá cờ màu trắng nghĩa là vị trí cờ ở giữa green.",
        options: [
            { en: "A. White flag means middle pin position", vi: "Cờ trắng = Vị trí cờ ở giữa" },
            { en: "B. White flag means front pin position", vi: "Cờ trắng = Vị trí cờ phía trước" },
            { en: "C. White flag means back pin position", vi: "Cờ trắng = Vị trí cờ phía sau" },
            { en: "D. White flag means out of bounds", vi: "Cờ trắng = Báo hiệu OB" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Blue flag indicates back pin position.", phonetic: "/bluː flæɡ ˈɪn.dɪ.keɪts bæk pɪn pəˈzɪʃ.ən/", translation: "Cờ màu xanh lá chỉ vị trí cờ phía sau green.",
        options: [
            { en: "A. Blue flag indicates back pin position", vi: "Cờ xanh = Vị trí cờ phía sau" },
            { en: "B. Blue flag indicates water hazard", vi: "Cờ xanh = Bẫy nước" },
            { en: "C. Blue flag indicates front pin position", vi: "Cờ xanh = Vị trí cờ phía trước" },
            { en: "D. Blue flag indicates drop zone", vi: "Cờ xanh = Khu vực thả bóng" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Front.", displaySentence: "Red flag is at the _______.", translation: "Cờ màu đỏ nằm ở phía _______ green.",
        targetWord: "front", phonetic: "/frʌnt/", hint: "Từ gồm 5 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Back.", displaySentence: "Blue flag is at the _______.", translation: "Cờ màu xanh nằm ở phía _______ green.",
        targetWord: "back", phonetic: "/bæk/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Please play a provisional ball, Sir.", phonetic: "/pliːz pleɪ ə prəˈvɪʒ.ən.əl bɔːl, sɜːr/", translation: "Anh đánh quả bóng dự phòng giúp em nhé ạ.",
        options: [
            { en: "A. Please play a provisional ball, Sir.", vi: "Đánh bóng dự phòng giúp em ạ." },
            { en: "B. Take penalty drop here Sir.", vi: "Thả bóng phạt ở đây thưa anh." },
            { en: "C. Search for original ball again Sir.", vi: "Tìm lại bóng ban đầu lần nữa." },
            { en: "D. Hit new ball from tee box.", vi: "Phát bóng mới từ khu tee." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Your ball is out of bounds, Sir.", phonetic: "/jʊər bɔːl ɪz aʊt əv baʊndz, sɜːr/", translation: "Bóng của anh đã đi ra ngoài biên (OB) rồi ạ.",
        options: [
            { en: "A. Your ball is out of bounds, Sir.", vi: "Bóng đã ra ngoài biên (OB) ạ." },
            { en: "B. Your ball is in water hazard Sir.", vi: "Bóng ở trong bẫy nước." },
            { en: "C. Ball is safe on fairway edge.", vi: "Bóng an toàn ở mép fairway." },
            { en: "D. Ball is lost in deep trees.", vi: "Bóng mất trong rặng cây." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You can drop ball within two club lengths, Sir.", phonetic: "/juː kæn drɑːp bɔːl wɪˈðɪn tuː klʌb leŋkθs, sɜːr/", translation: "Anh có thể thả bóng trong vòng 2 chiều dài gậy ạ.",
        options: [
            { en: "A. You can drop ball within two club lengths, Sir.", vi: "Thả bóng trong 2 chiều dài gậy." },
            { en: "B. Drop ball one club length away.", vi: "Thả bóng cách 1 chiều dài gậy." },
            { en: "C. Place ball by hand on turf.", vi: "Đặt bóng bằng tay trên mặt cỏ." },
            { en: "D. Tee up ball anywhere here.", vi: "Cắm tee phát bóng bất kỳ đâu." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Knee.", displaySentence: "Drop the ball from _______ height.", translation: "Thả bóng từ độ cao ngang _______ đầu gối.",
        targetWord: "knee", phonetic: "/niː/", hint: "Từ gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Keep up with the group ahead, Sir.", phonetic: "/kiːp ʌp wɪð ðə ɡruːp əˈhed, sɜːr/", translation: "Mình duy trì tốc độ theo kịp nhóm phía trước nhé ạ.",
        options: [
            { en: "A. Keep up with the group ahead, Sir.", vi: "Theo kịp nhóm phía trước nhé ạ." },
            { en: "B. Let group behind pass us Sir.", vi: "Cho nhóm sau vượt qua ạ." },
            { en: "C. Play faster on this hole Sir.", vi: "Chơi nhanh hơn hố này ạ." },
            { en: "D. Wait for group ahead to clear green.", vi: "Chờ nhóm trước ra khỏi green." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Marshal asks us to speed up slightly, Sir.", phonetic: "/ˈmɑːr.ʃəl æsks ʌs tə spiːd ʌp ˈslaɪt.li, sɜːr/", translation: "Trọng tài sân nhờ nhóm mình đẩy nhanh tốc độ một chút ạ.",
        options: [
            { en: "A. Marshal asks us to speed up slightly, Sir.", vi: "Trọng tài nhờ đẩy nhanh tốc độ chút ạ." },
            { en: "B. Marshal stop our round now Sir.", vi: "Trọng tài dừng trận đấu ngay." },
            { en: "C. Course marshal checking score cards.", vi: "Trọng tài đang kiểm tra thẻ điểm." },
            { en: "D. Marshal warnings about slow play.", vi: "Trọng tài cảnh báo chơi chậm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Here is your scorecard and pencil, Sir.", phonetic: "/hɪər ɪz jʊər ˈskɔːr.kɑːrd ænd ˈpen.səl, sɜːr/", translation: "Gửi anh thẻ ghi điểm và bút chì ạ.",
        options: [
            { en: "A. Here is your scorecard and pencil, Sir.", vi: "Gửi anh thẻ điểm và bút chì ạ." },
            { en: "B. Let me mark your score on app.", vi: "Để em ghi điểm trên ứng dụng." },
            { en: "C. Please sign scorecard at end.", vi: "Xin ký thẻ điểm ở cuối trận." },
            { en: "D. Scorecard is kept in buggy.", vi: "Thẻ điểm được giữ trong xe điện." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "You scored Par on hole 18, Sir!", phonetic: "/juː skɔːrd pɑːr ɑːn hoʊl ˌeɪˈtiːn, sɜːr/", translation: "Anh ghi điểm Par ở hố 18 thưa anh!",
        options: [
            { en: "A. You scored Par on hole 18, Sir!", vi: "Anh ghi điểm Par hố 18 thưa anh!" },
            { en: "B. Hole 18 bogey score logged.", vi: "Ghi nhận điểm Bogey hố 18." },
            { en: "C. Great birdie finish on 18th hole.", vi: "Kết thúc birdie tuyệt vời hố 18." },
            { en: "D. Total score calculated for round.", vi: "Tổng điểm đã được tính xong." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Excellent.", displaySentence: "Thank you for an _______ round today!", translation: "Cảm ơn anh vì một vòng đấu xuất _______ hôm nay!",
        targetWord: "excellent", phonetic: "/ˈek.səl.ənt/", hint: "Từ gồm 9 ký tự."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "I will pack your bag carefully now, Sir.", phonetic: "/aɪ wɪl pæk jʊər bæɡ ˈker.fəl.i naʊ, sɜːr/", translation: "Em sẽ thu xếp và bọc túi gậy cẩn thận bây giờ ạ.",
        options: [
            { en: "A. I will pack your bag carefully now, Sir.", vi: "Em thu xếp túi cẩn thận bây giờ ạ." },
            { en: "B. Bag is ready for transport to car.", vi: "Túi sẵn sàng chuyển ra xe ô tô." },
            { en: "C. Please check bag headcover again.", vi: "Xin kiểm tra lại mút bọc đầu gậy." },
            { en: "D. Load bag directly to locker room.", vi: "Chuyển túi trực tiếp vào phòng đồ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Luyện nghe] Nghe đoạn audio và chọn câu tiếng Anh đúng:",
        audioText: "Have a safe flight back home, Sir!", phonetic: "/hæv ə seɪf flaɪt bæk hoʊm, sɜːr/", translation: "Chúc anh có chuyến bay trở về nhà an toàn ạ!",
        options: [
            { en: "A. Have a safe flight back home, Sir!", vi: "Chúc anh chuyến bay trở về an toàn ạ!" },
            { en: "B. Safe drive home today Sir!", vi: "Lái xe về nhà an toàn hôm nay ạ!" },
            { en: "C. Enjoy your travel next week!", vi: "Tận hưởng chuyến du lịch tuần tới!" },
            { en: "D. Hope to see you next season Sir!", vi: "Hy vọng gặp lại anh mùa giải tới!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Điền từ] Nghe đoạn audio và ĐIỀN TỪ chuẩn xác:",
        audioText: "Drive.", displaySentence: "Have a safe _______ home, Sir!", translation: "Chúc anh lái _______ về nhà an toàn ạ!",
        targetWord: "drive", phonetic: "/draɪv/", hint: "Từ gồm 5 ký tự."
    }
];

// CHUẨN HÓA UNICODE NFC TOÀN BỘ CHUỖI TIẾNG VIỆT KHI NẠP DỮ LIỆU
lesson1Data.forEach(item => {
    if (item.translation) {
        item.translation = item.translation.normalize('NFC').replace(/\s+/g, ' ').trim();
    }
    if (item.hint) {
        item.hint = item.hint.normalize('NFC').replace(/\s+/g, ' ').trim();
    }
    if (item.options && Array.isArray(item.options)) {
        item.options.forEach(opt => {
            if (opt.vi) opt.vi = opt.vi.normalize('NFC').replace(/\s+/g, ' ').trim();
        });
    }
});

window.masterQuizData.push(...lesson1Data);
