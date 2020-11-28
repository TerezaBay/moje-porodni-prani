export const formTitle = [
  'Úvodní informace',
  'Před porodem',
  'První doba porodní',
  'V průběhu porodu',
  'Po porodu',
  'V šestinedělí',
  'Osobní poznámky',
  'Preference',
  'Ukončení a odeslání',
];

export const formTexts = [
  {
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
    quest:
      'Pokud budeš ty i dítě v pořádku, je tebe před porodem důležité něco z následujícího?',
    type: 'checkbox',
    answers: [
      'vyčkat na přirozený začátek porodu bez ohledu na vypočítaný termín porodu',
      'pokud bude nutné vyvolávání porodu, prosím o detailní konzultaci možností',
      'pokud to bude možné, přeji si u porodu domluveného lékaře',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
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
    question: 'Co bys sis přála udělat s placentou?',
    type: 'checkbox',
    answers: 'placentu prosím:',
    textDisabled: 'nic',
  },
  {
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
    question: 'V následné péči o miminko je pro mne důležité:',
    type: 'checkbox',
    answers: [
      'nedávat dítěti dudlík',
      'pahýl po pupeční šňůře nechat samostatně odpadnout',
    ],
    textDisabled: 'nic z výše uvedeného',
  },
  {
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
    question:
      'Zde můžeš napsat, zda a jaké kurzy předporodní kurzy jsi absolvovala:',
    type: 'input',
    answers: 'Na porod jsem se připravovala:',
    textDisabled: '',
  },
  {
    question: 'Osobní úvod',
    type: 'input',
    answers: [
      'Zde je prostor pro tvůj osobní úvod porodního přání. Napiš zdravotnickému týmu to nejdůležitější, co ti leží na srdci. Můžeš využít naši předlohu, nebo si text zformulovat úplně sama. Pamatuj ale na to, že čím je text stručnější, tím lépe a rychleji mu ostatní porozumí.',
      'Chtěla bych vám předem ze srdce poděkovat, protože věřím, že se vždy snažíte dělat to nejlepší pro mne a mé dítě. Čekám své první dítě. Chápu, že ne vždy se věci daří tak, jak si je člověk naplánuje - a u porodu to platí dvojnásob. Věřím tomu, že mi trpělivě vysvětlíte jednotlivé zákroky a potenciální problémy. Děkuji, že použijete předložené preference při vedení mého porodního procesu.',
    ],
    textDisabled: '',
  },
  {
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
