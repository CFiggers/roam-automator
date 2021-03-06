function run(input, parameters) {
    var internalText = input;
    var abbrevs = {
        Gen: "Genesis",
        Ex: "Exodus",
        Exod: "Exodus",
        Lev: "Leviticus",
        Num: "Numbers",
        Deut: "Deuteronomy",
        Josh: "Joshua",
        Judg: "Judges",
        Rt: "Ruth",
        "1 Sam": "1 Samuel",
        "2 Sam": "2 Samuel",
        "1 Kgs": "1 Kings",
        "2 Kgs": "2 Kings",
        "1 Kgdms": "1 Kings",
        "2 Kgdms": "2 Kings",
        "1 Chr": "1 Chronicles",
        "2 Chr": "2 Chronicles",
        "1 Chron": "1 Chronicles",
        "2 Chron": "2 Chronicles",
        Ez: "Ezra",
        Neh: "Nehemiah",
        Esth: "Esther",
        Ps: "Psalm",
        Pss: "Psalms",
        Prov: "Proverbs",
        Eccl: "Ecclesiastes",
        Sos: "Song of Solomon",
        Song: "Song of Solomon",
        Isa: "Isaiah",
        Jer: "Jeremiah",
        Lam: "Lamentations",
        Ezek: "Ezekiel",
        Dan: "Daniel",
        Hos: "Hosea",
        Obad: "Obadiah",
        Mic: "Micah",
        Nah: "Nahum",
        Hab: "Habakkuk",
        Zeph: "Zephaniah",
        Hag: "Haggai",
        Zech: "Zechariah",
        Mal: "Malachi",
        Matt: "Matthew",
        Mat: "Matthew",
        Mt: "Matthew",
        Mk: "Mark",
        Lk: "Luke",
        Jn: "John",
        Rom: "Romans",
        "1 Cor": "1 Corinthians",
        "2 Cor": "2 Corinthians",
        Gal: "Galatians",
        Eph: "Ephesians",
        Phil: "Philippians",
        Col: "Colossians",
        "1 Thess": "1 Thessalonians",
        "2 Thess": "2 Thessalonians",
        "1 Tim": "1 Timothy",
        "2 Tim": "2 Timothy",
        Phlm: "Philemon",
        Heb: "Hebrews",
        "1 Pet": "1 Peter",
        "2 Pet": "2 Peter",
        Jas: "James",
        Rev: "Revelation",
        JOS: "Joshua",
        "1SA": "1 Samuel",
        "2SA": "2 Samuel",
        "1KI": "1 Kings",
        "2KI": "2 Kings",
        "1CH": "2 Chronicles",
        "2CH": "1 Chronicles",
        EZR: "Ezra",
        EST: "Esther",
        JOB: "Job",
        PSA: "Psalm",
        PRO: "Proverbs",
        ECC: "Ecclesiastes",
        EZE: "Ezekiel",
        ZEC: "Zechariah",
        MAT: "Matthew",
        MAR: "Mark",
        LUK: "Luke",
        ROM: "Romans",
        "1CO": "1 Corinthians",
        "2CO": "2 Corinthians",
        PHI: "Philippians",
        "1TH": "1 Thessalonians",
        "2TH": "2 Thessalonians",
        "1TI": "1 Timothy",
        "2TI": "2 Timothy",
        TIT: "Titus",
        "1PE": "1 Peter",
        "2PE": "2 Peter",
        JAS: "James",
        "1JO": "1 John",
        "2JO": "2 John",
        "3JO": "3 John",
        JOH: "John",
        JOHN: "John"
    };
    var spacers = {
        ".": " ",
        " ": " ",
        ";": ";"
    };
    var books = [
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy",
        "Joshua",
        "Judges",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "1 Kings",
        "2 Kings",
        "1 Chronicles",
        "2 Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther",
        "Job",
        "Psalm",
        "Proverbs",
        "Ecclesiastes",
        "Song of Solomon",
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi",
        "Matthew",
        "Mark",
        "Luke",
        "John",
        "Acts",
        "Romans",
        "1 Corinthians",
        "2 Corinthians",
        "Galatians",
        "Ephesians",
        "Philippians",
        "Colossians",
        "1 Thessalonians",
        "2 Thessalonians",
        "1 Timothy",
        "2 Timothy",
        "Titus",
        "Philemon",
        "Hebrews",
        "James",
        "1 Peter",
        "2 Peter",
        "1 John",
        "2 John",
        "3 John",
        "Jude",
        "Revelation",
    ];
    for (var _i = 0, _a = Object.keys(spacers); _i < _a.length; _i++) {
        var spacer = _a[_i];
        for (var _b = 0, _c = Object.keys(abbrevs); _b < _c.length; _b++) {
            var abbrev = _c[_b];
            var findRE = new RegExp(abbrev + spacer + "(?=[0-9])", "gi");
            internalText = internalText.replace(findRE, abbrevs[abbrev] + spacers[spacer]);
        }
    }
    for (var _d = 0, books_1 = books; _d < books_1.length; _d++) {
        var book = books_1[_d];
        var findRE = new RegExp(book + " ([0-9]+)" + "(?=[,. :);])", "gi");
        internalText = internalText.replace(findRE, "[[" + book + " $1]]");
    }
    return internalText;
}
