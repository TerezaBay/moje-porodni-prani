export const formTitleLink = [
  { title: 'Úvod', link: '/formhome/' },
  { title: 'Základní informace', link: '/formhome/form02BasicInfo' },
  { title: 'Před porodem', link: '/formhome/form03BeforeBirth' },
  { title: 'První doba porodní', link: '/formhome/form04PreLabour' },
  { title: 'V průběhu porodu', link: '/formhome/form05DuringLabour' },
  { title: 'Po porodu', link: '/formhome/form06AfterBirth' },
  { title: 'Pobyt v porodnici', link: '/formhome/form07InHospital' },
  { title: 'Osobní poznámky', link: '/formhome/form08PersonalNotes' },
  { title: 'Preference', link: '/formhome/form09Preferences' },
  { title: 'Odeslání a ukončení', link: '/formhome/form10Submit' },
  { title: 'Konec', link: '/formhome/form11End' },
];

export const formTexts = [
  {
    title: 'Chci si vytvořit své porodní přání. Ale jak na to?',
    text: [
      'Čekají tě otázky týkající se různých fází porodu. Dej si na jejich zodpovězení dostatek času. Pokud budeš nad některým bodem váhat nebo ti nebude úplně jasný, přečti si o tématu více na našem blogu, případně otázku přeskoč a vrať se k ní později. Po zodpovězení všech otázek ti vygenerujeme seznam tvých porodních přání v PDF.',
      'Současně tvůj seznam dostal jedinečnou url adresu, pod kterou budeš moci svůj seznam kdykoliv otevřít a kterou budeš moci sdílet se svým porodním týmem, partnerem nebo kýmkoli jiným. Tato adresa je uložena v odkaze níže:',
      'Seznam přání si můžeš vytisknout či uložit pro svoji osobní potřebu.',
      'Dokud svůj seznam nezveřejníš, nikdo se k němu nedostane. Tvá data jsou v bezpečí. Svá přání můžeš kdykoli změnit a vygenerovat nový seznam.',
      'Pamatuj, seznam porodních přání je nástroj, který by měl usnadnit komunikaci potřeb a preferencí mezi rodičkou a personálem porodnice. Platí, že čím je porodní přání stručnější, tím lépe a rychleji mu ostatní porozumí. Vybírej tedy jen ty body, které jsou pro tebe opravdu důležité.',
    ],
  },
  {
    title: 'Tvé porodní přání je hotové!',
    text: [
      'Skvělé! Tvůj seznam přání se právě stáhl do tvého zařízení.',
      // 'Jak se seznamem dále naložit? Jedinečný odkaz si můžeš uložit do záložek v prohlížeči, nebo si seznam rovnou vytisknout. Odkaz můžeš s kýmkoliv sdílet.',
      'Doporučujeme seznam přání předem probrat s personálem v porodnici, kde jsi se rozhodla rodit a ověřit si, zda je v souladu s jejich praxí. Pokud plánuješ mít svou porodní asistentku nebo dulu, seznam se svým přáním i je.',
      'Udělej si tři kopie dokončeného textu. Jednu ulož do tašky k porodu, abys ji měla po ruce, druhou dej partnerovi a třetí bude založena do lékařské zprávy a bude ji mít k dispozici ošetřující personál.',
    ],
  },
];

export const formQuest = [
  {
    id: 0,
    quest: 'Vyplň své osobní údaje:',
    type: 'input',
    answers: [
      'Jméno:',
      'Příjmení:',
      { text: 'Odhadovaný termín porodu:', type: 'date' },
    ],
  },
  {
    id: 1,
    quest:
      'Bude tě k porodu někdo doprovázet? Pokud ano, vyplň jeho/její jméno:',
    type: 'input',
    answers: ['Partner:', 'Dula:', 'Porodní asistentka:', 'Jiný doprovod:'],
    isOptional: true,
  },
  {
    id: 2,
    quest: 'Týkají se tě některá z následujících zdravotních komplikací?',
    type: 'checkbox',
    answers: [
      'streptokok typu B',
      'těhotenská cukrovka',
      'jiný RH faktor než dítě',
      'HIV',
      'genitální herpes',
      'preeklampsie',
      'podstoupená operace dělohy',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 3,
    quest:
      'Máš ty nebo tvůj partner nějaké specifické (kulturní, náboženské) požadavky?',
    type: 'textArea',
    answers: ['Pokud ano, napiš je zde:'],
    isOptional: true,
  },
  {
    id: 4,
    quest:
      'Pokud budeš ty i dítě v pořádku, je pro tebe před porodem důležité něco z následujícího?',
    type: 'checkbox',
    answers: [
      'vyčkat na přirozený začátek porodu bez ohledu na stanovený termín porodu',
      'pokud bude nutné vyvolání porodu, přeji si detailní konzultaci o možnostech',
      'pokud to bude možné, prosím o přítomnost smluveného lékaře',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 5,
    quest: 'Je pro tebe při příjmu do porodnice důležité něco z následujícího?',
    type: 'checkbox',
    answers: [
      'mít při sobě partnera, dulu či jiný doprovod',
      'nebýt rušena administrativními požadavky během kontrakcí',
      'nebýt holena',
      'nezavádět klystýr',
      'nezavádět preventivně kanylu',
    ],
    textDisabled: 'nemám žádná zvláštní přání',
  },
  {
    id: 6,
    quest: 'Během první doby porodní si přeji:',
    type: 'checkbox',
    answers: [
      'mít možnost volby polohy a volného pohybu jak dlouho to jen bude možné',
      'mít možnost konzumace jídla a pití při porodu',
      'využívat fetální monitor co nejméně',
      'mít možnost pohybu při sledování fetálním monitorem',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 7,
    quest: 'Jaké nefarmakologické metody k tlumení bolesti bys ráda využila?',
    type: 'checkbox',
    answers: [
      'vanu nebo sprchu',
      'masáž',
      'střídání pozic',
      'dýchací techniky',
      'aromaterapii',
      'teplé obklady',
    ],
    textDisabled: 'nemám žádnou preferenci',
  },
  {
    id: 8,
    quest: 'V případě potřeby souhlasím s farmakologickými prostředky:',
    type: 'checkbox',
    answers: [
      'ano, ale nenabízejte mi prostředky na tlumení bolesti, pokud se sama nezeptám',
      'prostředky, které co nejméně ovlivňují bdělost dítěte po porodu',
      'epidurální analgezie',
      'rajský plyn',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 9,
    quest: 'V průběhu porodu si přeji: ',
    type: 'checkbox',
    answers: [
      'vyhnout se řízenému tlačení, a pokud možno, tlačit spontánně',
      'řízené tlačení od zdravotního personálu',
      'mít možnost volby porodní polohy',
      'neprovádět preventivní nástřih hráze (epiziotomii)',
      'neprovádět přidržení fundu',
      'vyhnout se vakuové extrakci',
      'vyhnout se porodu kleštěmi',
      'v 2. době porodní preferuji intermitentní poslech ozev dle doporučení WHO'
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 10,
    quest: 'Pokud by bylo nutné podstoupit císařský řez, tak bys chtěla: ',
    type: 'checkbox',
    answers: [
      'před zahájením operace moment o samotě se svým doprovodem',
      'přítomnost někoho z mého doprovodu po celou dobu operace',
      'vědět, co se v jednotlivých fázích operace děje',
      'pozvolné vyjmutí dítěte z dělohy',
      'přiložit dítě na holou kůži ihned po narození',
      'přiložit si dítě k prsu hned, jak to bude možné',
      'provést tzv. vaginální seeding',
      'nechat co nejdéle tepat nepřerušený pupečník'
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 11,
    quest: 'Bezprostředně po porodu bych si přála:',
    type: 'checkbox',
    answers: [
      'přiložit dítě na mou hruď ihned po porodu',
      'aby někdo z mého doprovodu přestřihl pupeční šňůru',
      'aby pupeční šňůra byla zasvorkovaná nebo přestřihnutá teprve po jejím úplném dotepání',
      'vyčkat na přirozený porod placenty ',
      'přiložit dítě k prsu pro urychlení porodu placenty',
      'nechat dítě samovolně přisát k prsu',
      'vyšetření dítěte pediatrem na těle matky',
      'aby byl s dítětem u všech vyšetření a zákroků jeden z rodičů',
      'aby dítě nebylo ihned po porodu měřeno a váženo',
      'aby dítě nebylo koupáno',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 12,
    quest: 'Co bys sis přála udělat s placentou?',
    type: 'textArea',
    answers: ['Doplň své přání. Pokud žádné nemáš, nech pole prázdné.'],
    textDisabled: '',
    isOptional: true,
  },
  {
    id: 13,
    quest:
      'Tyto procedury jsou obvykle praktikovány po porodu dítěte. Zaškrtni ty, které NECHCEŠ:',
    type: 'checkbox',
    answers: [
      'injekci vitaminu K',
      'vykapání očí O-Septonexem',
      'koupání po porodu',
      'měření a vážení ihned po porodu',
      'podání umělé výživy',
    ],
    textDisabled: 'nevadí mi nic z výše uvedeného',
  },
  {
    id: 14,
    quest: 'Bude-li mít miminko zdravotní potíže, je pro mne důležité:',
    type: 'checkbox',
    answers: [
      'doprovodit dítě na JIP',
      'kojit nebo odsávat mé mateřské mléko',
      'chovat dítě kdykoliv to bude možné',
      'být stále v přítomnosti dítěte (já nebo někdo z mého doprovodu)',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 15,
    quest: 'Kdy a jak chceš začít s kojením svého dítěte?',
    type: 'checkbox',
    answers: [
      'začít s kojením ihned po porodu, jak to bude možné',
      'začít s kojením po konzultaci s laktační poradkyní',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 16,
    quest: 'Chceš být s miminkem v jednom pokoji? ',
    type: 'radioButton',
    answers: [
      'stále',
      'pouze během dne',
      'jen pokud budu vzhůru',
      'jen na krmení',
      'podle aktuálních preferencí',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 17,
    quest: 'V následné péči o miminko je pro mne důležité:',
    type: 'checkbox',
    answers: [
      'neprovádět rutinní dokrmování dítěte',
      'nedávat dítěti dudlík',
      'pahýl po pupeční šňůře nechat samovolně odpadnout',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 18,
    quest: 'Jak dlouho po porodu si přeješ opustit porodnici?',
    type: 'radioButton',
    answers: [
      'po nejdelší možné době',
      'po nejkratší možné době',
      'po době, kterou mi doporučí personál',
      'ihned po porodu (ambulantní porod)',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 19,
    quest: 'Zde můžeš napsat, zda a které předporodní kurzy jsi absolvovala:',
    type: 'textArea',
    answers: ['Na porod jsem se připravovala: '],
    isOptional: true,
  },
  {
    id: 20,
    quest: 'Osobní úvod',
    type: 'longTextArea',
    example:
      'Chtěla bych vám předem ze srdce poděkovat, protože věřím, že se vždy snažíte dělat pro mne a mé dítě to nejlepší. Čekám své první dítě. Chápu, že ne vždy se věci daří tak, jak si je člověk naplánuje - a u porodu to platí dvojnásob. Děkuji, že mi trpělivě vysvětlíte jednotlivé zákroky i potenciální problémy a že budete co nejvíce respektovat předložené preference.',
    answers: [
      'Zde je prostor pro tvůj osobní úvod porodního přání. Napiš zdravotnickému personálu to nejdůležitější, co ti leží na srdci. Můžeš využít naši předlohu, kterou zkopíruješ do textového pole a podle svých představ upravíš. Anebo si text můžeš zformulovat úplně sama. Pamatuj ale na to, že čím bude úvod stručnější, tím lépe a rychleji mu ostatní porozumí.',
    ],
  },
  {
    id: 21,
    quest:
      'Které z následujících možností jsou pro tebe nejdůležitější? Ve výstupu budou tato přání zvýrazněna. Vybrat můžeš maximálně tři možnosti.',
    type: 'checkbox',
    maxChecked: 3,
    answers: [
      'Ráda bych měla přirozený porod bez vnějších zásahů, pokud nedojde k závažným komplikacím.',
      'Informujte mě, prosím, průběžně o postupu porodu a o tom, co bude následovat.',
      'Všechny zásahy před a během porodu bych ráda konzultovala a měla čas na rozmyšlenou.',
      'Po celou dobu bych se ráda nechala vést doporučeními od týmu zdravotníků.',
      'Přeji si, aby o mne během porodu pečoval co nejmenší počet zdravotníků.',
    ],
    textDisabled: 'Nic z výše uvedeného.',
  },
  {
    id: 22,
    quest: 'Odeslání formuláře',
    type: 'checkbox',
    disclaimer:
      'Aplikace Moje porodní přání neposkytuje lékařská doporučení. Obsah není náhradou profesionální zdravotnické péče. K zodpovězení otázek týkajících se těhotenství a porodu vždy vyhledejte radu kvalifikovaného pracovníka.',
    answers: ['Beru na vědomí.'],
    requiredCheckedAll: true,
  },
];
