import { routesForm } from '../links.js';

export const formTitleLink = [
  { title: 'Úvod', link: `${routesForm[0].path}` },
  { title: 'Osobní informace', link: `${routesForm[1].path}` },
  { title: 'Před porodem', link: `${routesForm[2].path}` },
  // { title: 'První doba porodní', link: `${routesForm[3].path}` },
  // { title: 'V průběhu porodu', link: `${routesForm[4].path}` },
  // { title: 'Po porodu', link: `${routesForm[5].path}` },
  // { title: 'V šestinedělí', link: `${routesForm[6].path}` },
  // { title: 'Osobní poznámky', link: `${routesForm[7].path}` },
  // { title: 'Preference', link: `${routesForm[8].path}` },
  // { title: 'Ukončení a odeslání', link: `${routesForm[9].path}` },
];

export const formTexts = [
  {
    title: 'Chci si vytvořit své porodní přání. Ale jak na to? ',
    text: `<p>Čekají tě otázky týkající se různých fází porodního procesu. Dej si na jejich zodpovězení dostatek času. Pokud budeš nad nějakým bodem váhat nebo ti nebude úplně jasný, přečti si o tématu více na našem blogu, nebo otázku přeskoč a vrať se k ní později. Po zodpovězení všech otázek ti vygenerujeme seznam tvých porodních přání.</p>

    <p>Seznam tvých porodních přání dostane jedinečnou adresu, kterou budeš moci sdílet se svým porodním týmem, partnerem nebo kýmkoli jiným.  Seznam přání si můžeš také vytisknout nebo uložit pro svoji potřebu.</p>
    
    <p>Dokud svůj seznam nezveřejníš, nikdo se k němu nedostane.Tvá data jsou v bezpečí. Svá přání můžeš kdykoli změnit a vygenerovat nový seznam.</p>
    
    <p>Pamatuj, seznam porodních přání je nástroj, který by měl usnadnit komunikaci potřeb a preferencí mezi rodičkou a personálem porodnice. Platí, že čím je porodní přání stručnější, tím lépe a rychleji mu ostatní porozumí. Vybírej tedy jen ty body, které jsou pro tebe opravdu důležité.</p>`,
  },
  {
    title: 'Tvé porodní přání je hotové!',
    text: `<p>Skvělé! Na následující adrese:_____ si můžeš prohlédnout seznam svých porodních přání.</p>

    <p>Jak se seznamem dále naložit? Jedinečný odkaz si můžeš uložit do záložek v prohlížeči, nebo si seznam rovnou vytisknout. Odkaz můžeš s kýmkoliv sdílet.</p>
    
    <p>Doporučujeme seznam přání předem probrat s personálem v porodnici, kde jsi se rozhodla rodit a ověřit si, zda je v souladu s jejich praxí. Pokud plánuješ mít svou porodní asistentku nebo dulu, seznam se svým přáním i je.</p>
    
    <p>Udělej si tři kopie dokončeného textu. Jednu ulož do tašky k porodu, abys ji měla po ruce, druhou dej partnerovi a třetí bude založena do lékařské zprávy a bude ji mít k dispozici ošetřující personál.</p>`,
  },
];

export const formQuest = [
  {
    id: 0,
    quest: 'Vyplň své osobní údaje:',
    type: 'input',
    answers: ['Jméno:', 'Příjmení:', 'Odhadovaný termín porodu:'],
  },
  {
    id: 1,
    quest: 'Bude tě k porodu někdo doprovázet? Pokud ano, vyplň jméno:',
    type: 'input',
    answers: ['partner:', 'dula:', 'porodní asistentka:', 'jiný doprovod:'],
  },
  {
    id: 2,
    quest: 'Trpíš následujícím? Pokud ano, zaškrtni:',
    type: 'checkbox',
    answers: [
      'diagnostikována těhotenská cukrovka',
      'diagnostikovaný streptokok typu B',
      'mám jiný RH faktor než dítě',
      'jsem HIV pozitivní',
      'mám genitální herpes',
      'trpím preeklampsií',
      'prodělala jsem operaci dělohy',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 3,
    quest:
      'Máš ty, nebo tvůj partner nějaká specifická (kulturní, náboženská) přání?',
    type: 'input',
    answers: ['Dolplň'],
  },
  {
    id: 4,
    quest: 'Pokud budeš ty i dítě v pořádku, co je tebe před porodem důležité?',
    type: 'checkbox',
    answers: [
      'vyčkat na přirozený začátek porodu bez ohledu na vypočítaný termín porodu',
      'pokud bude nutné vyvolávání porodu, prosím o detailní konzultaci možností',
      'pokud to bude možné, přeji si u porodu domluveného lékaře',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 5,
    quest: 'Je při příjmu do porodnice pro tebe důležité něco z následujícího?',
    type: 'checkbox',
    answers: [
      'mít partnera nebo dulu u sebe během příjmu',
      'během kontrakcí nebýt rušena administrativními požadavky',
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
      'mít možnost pohybu během snímání fetálního monitoru',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 7,
    question:
      'Jaké nefarmakologické metody bys ráda využila k tlumení bolesti? ',
    type: 'checkbox',
    answers: [
      'vanu nebo sprchu',
      'masáž',
      'střídání pozic',
      'dýchací techniky',
      'aromaterapii',
      'teplé obklady',
      'jiné:',
    ],
    textDisabled: 'nemám žádnou preferenci',
  },
  {
    id: 8,
    question:
      'Jsi otevřená užití nějakých farmakologických prostředků k tlumení bolesti?',
    type: 'checkbox',
    answers: [
      'Prosím, nenabízejte mi prostředky na tlumení bolesti, pokud se sama nezeptám.',
      'epidurální analgezie',
      'rajský plyn,',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 9,
    question: 'V průběhu porodu si přeji: ',
    type: 'checkbox',
    answers: [
      'vyhnout se řízenému tlačení a pokud možno tlačit spontánně',
      'řízené tlačení od zdravotního personálu',
      'mít možnost volby porodní polohy',
      'neprovádět preventivní nástřih hráze (epiziotomii)',
      'neprovádět přidržení fundu',
      'vyhnout se vakuové extrakci',
      'vyhnout se porodu kleštěmi',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 10,
    question: 'Pokud by bylo nutné podstoupit císařský řez, tak bys chtěla: ',
    type: 'checkbox',
    answers: [
      'před zahájením operace moment o samotě se svým doprovodem',
      'přítomnost někoho z doprovodu po celou dobu operace',
      'vědět, co se v jednotlivých fázích operace děje',
      'přiložit dítě na holou kůži ihned po narození',
      'přiložit si dítě k prsu hned, jak to bude možné',
      'provést “vaginální seeding”',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 11,
    question: 'Bezprostředně po porodu bych si přála:',
    type: 'checkbox',
    answers: [
      'přiložit miminko na mou hruď ihned po porodu',
      'někoho ze svého týmu, aby přestřihl pupečník',
      'aby pupeční šňůra byla zasvorkovaná nebo přestřihnutá teprve po úplném dotepání',
      'přiložit miminko k prsu pro urychlení porodu placenty',
      'nechat miminko se samovolně přisát k prsu',
      'vyčkat přirozeného porodu placenty ',
      'vyšetření dítěte pediatrem na těle matky',
      'aby u všech vyšetření a zákroků byl s naším dítětem jeden z rodičů ',
      'aby bylo miminko nebylo ihned po porodu měřeno a váženo',
      'aby miminko nebylo koupáno',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 12,
    question: 'Co bys sis přála udělat s placentou?',
    type: 'checkbox',
    answers: 'placentu prosím:',
    textDisabled: 'nic',
  },
  {
    id: 13,
    question:
      'Tyto procedury jsou obvykle praktikovány po porodu dítěte. Zaškrtni ty, které NECHCEŠ:',
    type: 'checkbox',
    answers: [
      'injekci vitaminu K',
      'vykapání očí O-Septonexem',
      'aby dítě bylo koupáno',
      ' měření a vážení dítěte ihned po porodu',
      ' podání umělé výživy',
    ],
    textDisabled: 'nevadí mi nic z výše uvedeného',
  },
  {
    id: 14,
    question:
      'V případě, že se tvému miminku nebude dařit dobře, je pro tebe důležité následující:',
    type: 'checkbox',
    answers: [
      'přeji si dítě doprovodit na JIP',
      'kojit nebo odsávat své mléko',
      ' chovat miminko kdykoliv to bude možné',
      'chci být stále přítomná já nebo někdo z mého doprovodu',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 15,
    question: 'Kdy a jak chceš začít s kojením svého dítěte?',
    type: 'checkbox',
    answers: [
      'po porodu, jak jen to bude možné',
      'po konzultaci s laktační poradkyní',
      'neprovádět rutinní dokrmování dítěte',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 16,
    question: 'Chceš být s miminkem v jednom pokoji? ',
    type: 'checkbox',
    answers: [
      'ano stále',
      'ano během dne',
      'jen pokud budu vzhůru',
      'jen na krmení',
      'dám vědět, kdy si přeji mít dítě v pokoji',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 17,
    question: 'V následné péči o miminko je pro mne důležité:',
    type: 'checkbox',
    answers: [
      'nedávat dítěti dudlík',
      'pahýl po pupeční šňůře nechat samostatně odpadnout',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 18,
    question: 'Jak dlouho si přeješ zůstat v nemocnici po porodu? ',
    type: 'checkbox',
    answers: [
      'tak dlouho, jak jen to bude možné',
      'tak krátce, jak jen to bude možné',
      'tak, jak mi bude doporučeno personálem',
      'chci nemocnici opustit ihned po porodu (ambulantní porod)',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
    id: 19,
    quest:
      'Zde můžeš napsat, zda a jaké kurzy předporodní kurzy jsi absolvovala:',
    type: 'input',
    labels: ['Na porod jsem se připravovala: '],
  },
  {
    id: 20,
    quest: 'Osobní úvod',
    type: 'input',
    labels: [
      'Zde je prostor pro tvůj osobní úvod porodního přání. Napiš zdravotnickému týmu to nejdůležitější, co ti leží na srdci. Můžeš využít naši předlohu, nebo si text zformulovat úplně sama. Pamatuj ale na to, že čím je text stručnější, tím lépe a rychleji mu ostatní porozumí.',
      'Chtěla bych vám předem ze srdce poděkovat, protože věřím, že se vždy snažíte dělat to nejlepší pro mne a mé dítě. Čekám své první dítě. Chápu, že ne vždy se věci daří tak, jak si je člověk naplánuje - a u porodu to platí dvojnásob. Věřím tomu, že mi trpělivě vysvětlíte jednotlivé zákroky a potenciální problémy. Děkuji, že použijete předložené preference při vedení mého porodního procesu.',
    ],
  },
  {
    id: 21,
    question:
      'Vyber možnosti, které považuješ pro tvůj porodní zážitek za zásadní. Ve výstupu budou tato přání zvýrazněna. Vybrat můžeš maximálně tři možnosti.',
    type: 'checkbox',
    answers: [
      'Ráda bych měla přirozený porod bez vnějších zásahů, pokud nedojde k závažným komplikacím.',
      'Informujte mě, prosím, průběžně o postupu porodu a o tom, co bude následovat.',
      'Všechny zásahy před a během porodu bych ráda konzultovala a měla čas na rozmyšlenou.',
      'Po celou dobu bych se ráda nechala vést doporučeními od týmu zdravotníků.',
      'Přeji si, aby o mne během porodu pečoval co nejmenší počet zdravotníků.',
    ],
    textDisabled: 'Nic z výše uvedeného.',
  },
];
