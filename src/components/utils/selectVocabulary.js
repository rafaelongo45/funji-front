export default function selectVocabulary(type) {
  const hiraganaHash = {
    a: "あ",
    e: "え",
    i: "い",
    o: "お",
    u: "う",
    ka: "か",
    ki: "き",
    ku: "く",
    ke: "け",
    ko: "こ",
    kka: "っか",
    kki: "っき",
    kku: "っく",
    kke: "っけ",
    kko: "っこ",
    ga: "が",
    gi: "ぎ",
    gu: "ぐ",
    ge: "げ",
    go: "ご",
    gga: "っが",
    ggi: "っぎ",
    ggu: "っぐ",
    gge: "っげ",
    ggo: "っご",
    sa: "さ",
    shi: "し",
    su: "す",
    se: "せ",
    so: "そ",
    ssa: "っさ",
    sshi: "っし",
    ssu: "っす",
    sse: "っせ",
    sso: "っそ",
    za: "ざ",
    ji: "じ",
    zu: "ず",
    ze: "ぜ",
    zo: "ぞ",
    zza: "っざ",
    jji: "っじ",
    zzu: "っず",
    zze: "っぜ",
    zzo: "っぞ",
    ta: "た",
    tchi: "ち",
    chi: "ち",
    ti: "ち",
    tsu: "つ",
    te: "て",
    to: "と",
    tta: "った",
    cchi: "っち",
    tti: "っち",
    ttsu: "っつ",
    tte: "って",
    tto: "っと",
    da: "だ",
    di: "ぢ",
    dji: "ぢ",
    dzu: "づ",
    de: "で",
    do: "ど",
    dda: "っだ",
    ddi: "っぢ",
    ddji: "っぢ",
    ddzu: "っづ",
    dde: "っで",
    ddo: "っど",
    ha: "は",
    hi: "ひ",
    hu: "ふ",
    fu: "ふ",
    he: "へ",
    ho: "ほ",
    hha: "っは",
    hhi: "っひ",
    hhu: "っふ",
    ffu: "っふ",
    hhe: "っへ",
    hho: "っほ",
    ba: "ば",
    bi: "び",
    bu: "ぶ",
    be: "べ",
    bo: "ぼ",
    bba: "っば",
    bbi: "っび",
    bbu: "っぶ",
    bbe: "っべ",
    bbo: "っぼ",
    pa: "ぱ",
    pi: "ぴ",
    pu: "ぷ",
    pe: "ぺ",
    po: "ぽ",
    ppa: "っぱ",
    ppi: "っぴ",
    ppu: "っぷ",
    ppe: "っぺ",
    ppo: "っぽ",
    na: "な",
    ni: "に",
    nu: "ぬ",
    ne: "ね",
    no: "の",
    nna: "っな",
    nni: "っに",
    nnu: "っぬ",
    nne: "っね",
    nno: "っの",
    ma: "ま",
    mi: "み",
    mu: "む",
    me: "め",
    mo: "も",
    mma: "っま",
    mmi: "っみ",
    mmu: "っむ",
    mme: "っめ",
    mmo: "っも",
    ra: "ら",
    ri: "り",
    ru: "る",
    re: "れ",
    ro: "ろ",
    rra: "っら",
    rri: "っり",
    rru: "っる",
    rre: "っれ",
    rro: "っろ",
    wa: "わ",
    wi: "ゐ",
    we: "ゑ",
    wo: "を",
    wwa: "っわ",
    wwi: "っゐ",
    wwe: "っゑ",
    wwo: "っを",
    ya: "や",
    yu: "ゆ",
    yo: "よ",
    yya: "っや",
    yyu: "っゆ",
    yyo: "っよ",
    n: "ん",
    nn: "ん",
    kya: "きゃ",
    kyu: "きゅ",
    kyo: "きゃ",
    kkya: "っきゃ",
    kkyu: "っきゅ",
    kkyo: "っきよ",
    nya: "にゃ",
    nyu: "にゅ",
    nyo: "にょ",
    nnya: "っにゃ",
    nnyu: "っにゅ",
    nnyo: "っにょ",
    hya: "ひゃ",
    hyu: "ひゅ",
    hyo: "ひょ",
    hhya: "っひゃ",
    hhyu: "っひゅ",
    hhyo: "っひょ",
    mya: "みゃ",
    myu: "みゅ",
    myo: "みょ",
    mmya: "っみゃ",
    mmyu: "っみゅ",
    mmyo: "っみょ",
    rya: "りゃ",
    ryu: "りゅ",
    ryo: "りょ",
    rrya: "っりゃ",
    rryu: "っりゅ",
    rryo: "っりょ",
    gya: "ぎゃ",
    gyu: "ぎゅ",
    gyo: "ぎょ",
    ggya: "っぎゃ",
    ggyu: "っぎゅ",
    ggyo: "っぎょ",
    bya: "びゃ",
    byu: "びゅ",
    byo: "びょ",
    bbya: "っびゃ",
    bbyu: "っびゅ",
    bbyo: "っびょ",
    pya: "ぴゃ",
    pyu: "ぴゅ",
    pyo: "ぴょ",
    ppya: "っぴゃ",
    ppyu: "っぴゅ",
    ppyo: "っぴょ",
    ja: "じゃ",
    ju: "じゅ",
    jo: "じょ",
    jja: "っじゃ",
    jju: "っじゅ",
    jjo: "っじょ",
    sha: "しゃ",
    shu: "しゅ",
    sho: "しょ",
    ssha: "っしゃ",
    sshu: "っしゅ",
    ssho: "っしょ",
    cha: "ちゃ",
    chu: "ちゅ",
    cho: "ちょ",
    ccha: "っちゃ",
    cchu: "っちゅ",
    ccho: "っちょ",
    ".": ".",
    "-": "-",
  };

  const katakanaHash = {
    a: "ア",
    e: "エ",
    i: "イ",
    o: "オ",
    u: "ウ",
    ka: "カ",
    ki: "キ",
    ku: "ク",
    ke: "ケ",
    ko: "コ",
    kka: "っカ",
    kki: "っキ",
    kku: "っク",
    kke: "っケ",
    kko: "っコ",
    ga: "ガ",
    gi: "ギ",
    gu: "グ",
    ge: "ゲ",
    go: "ゴ",
    gga: "っガ",
    ggi: "っギ",
    ggu: "っグ",
    gge: "っゲ",
    ggo: "っゴ",
    sa: "サ",
    shi: "シ  ",
    su: "ス",
    se: "セ",
    so: "ソ",
    ssa: "っサ",
    sshi: "っシ ",
    ssu: "っス",
    sse: "っセ",
    sso: "っソ",
    za: "ザ",
    ji: "ジ",
    zu: "ズ",
    ze: "ゼ",
    zo: "ゾ",
    zza: "っザ",
    jji: "っジ",
    zzu: "っズ",
    zze: "っゼ",
    zzo: "っゾ",
    ta: "タ",
    tchi: "チ",
    chi: "チ",
    ti: "チ",
    tsu: "ツ",
    te: "テ",
    to: "ト",
    tta: "っタ",
    cchi: "っチ",
    tti: "っチ",
    ttsu: "っツ",
    tte: "っテ",
    tto: "っト",
    da: "ダ",
    di: "ヂ",
    dji: "ヂ",
    dzu: "ヅ",
    de: "デ",
    do: "ド",
    dda: "っダ",
    ddi: "っヂ",
    ddji: "っヂ",
    ddzu: "っヅ",
    dde: "っデ",
    ddo: "っド",
    ha: "ハ",
    hi: "ヒ",
    hu: "フ",
    fu: "フ",
    he: "ヘ",
    ho: "ホ",
    hha: "っハ",
    hhi: "っヒ",
    hhu: "っフ",
    ffu: "っフ",
    hhe: "っヘ",
    hho: "っホ",
    ba: "バ",
    bi: "ビ",
    bu: "ブ",
    be: "べ",
    bo: "ボ",
    bba: "っバ",
    bbi: "っビ",
    bbu: "っブ",
    bbe: "っべ",
    bbo: "っボ",
    pa: "パ",
    pi: "ピ",
    pu: "プ",
    pe: "ぺ",
    po: "ポ",
    ppa: "っパ",
    ppi: "っピ",
    ppu: "っプ",
    ppe: "っぺ",
    ppo: "っポ",
    na: "ナ",
    ni: "ニ",
    nu: "ヌ",
    ne: "ネ",
    no: "ノ",
    nna: "っナ",
    nni: "っニ",
    nnu: "っヌ",
    nne: "っネ",
    nno: "っノ",
    ma: "マ",
    mi: "ミ",
    mu: "ム",
    me: "メ",
    mo: "モ",
    mma: "っマ",
    mmi: "っミ",
    mmu: "っム",
    mme: "っメ",
    mmo: "っモ",
    ra: "ラ",
    ri: "リ",
    ru: "ル",
    re: "レ",
    ro: "ロ",
    rra: "っラ",
    rri: "っリ",
    rru: "っル",
    rre: "っレ",
    rro: "っロ",
    wa: "ワ",
    wi: "ヰ",
    we: "ヱ",
    wo: "ヲ",
    wwa: "っワ",
    wwi: "っヰ",
    wwe: "っヱ",
    wwo: "っヲ",
    ya: "ヤ",
    yu: "ユ",
    yo: "ヨ",
    yya: "っヤ",
    yyu: "っユ",
    yyo: "っヨ",
    n: "ン",
    nn: "ン",
    kya: "キャ",
    kyu: "キュ",
    kyo: "キョ",
    kkya: "っキャ",
    kkyu: "っキュ",
    kkyo: "っキョ",
    nya: "ニャ",
    nyu: "ニュ",
    nyo: "ニョ",
    nnya: "っニャ",
    nnyu: "っニュ",
    nnyo: "っニョ",
    hya: "ヒャ",
    hyu: "ヒュ",
    hyo: "ヒョ",
    hhya: "っヒャ",
    hhyu: "っヒュ",
    hhyo: "っヒョ",
    mya: "ミャ",
    myu: "ミュ",
    myo: "ミョ",
    mmya: "っミャ",
    mmyu: "っミュ",
    mmyo: "っミョ",
    rya: "リャ",
    ryu: "リュ",
    ryo: "リョ",
    rrya: "っリャ",
    rryu: "っリュ",
    rryo: "っリョ",
    gya: "ギャ",
    gyu: "ギュ",
    gyo: "ギョ",
    ggya: "っギャ",
    ggyu: "っギュ",
    ggyo: "っギョ",
    bya: "ビャ",
    byu: "ビュ",
    byo: "ビョ",
    bbya: "っビャ",
    bbyu: "っビュ",
    bbyo: "っビョ",
    pya: "ピャ",
    pyu: "ピュ",
    pyo: "ピョ",
    ppya: "っピャ",
    ppyu: "っピュ",
    ppyo: "っピョ",
    ja: "ジャ",
    ju: "ジュ",
    jo: "ジョ",
    jja: "っジャ",
    jju: "っジュ",
    jjo: "っジョ",
    sha: "シャ",
    shu: "シュ",
    sho: "ショ",
    ssha: "っシャ",
    sshu: "っシュ",
    ssho: "っショ",
    cha: "チャ",
    chu: "チュ",
    cho: "チョ",
    ccha: "っチャ",
    cchu: "っチゅ",
    ccho: "っチょ",
    ".": ".",
    "-": "-",
  };

  //TODO: Resto dos hiragana combinações com ya yu yo e com small tsu

  if (type === "kun") return hiraganaHash;
  if (type === "on") return katakanaHash;
  if (type === "meaning") return;
}
