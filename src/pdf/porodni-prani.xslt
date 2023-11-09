<xsl:stylesheet
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:fn="http://www.w3.org/2005/xpath-functions"
        xmlns:x="http://www.jirsak.org/2020/XSLT-service"
        xmlns="http://www.w3.org/1999/xhtml"
        version="3.0">

    <xsl:output encoding="UTF-8" method="xml"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Moje porodní přání</title>
            </head>
            <body>
                <header>
                    <h1>Moje porodní přání</h1>
                    <xsl:apply-templates select="/json/json[1]"/>

                    <div>
                        <xsl:apply-templates select="/json/json[2]"/>
                    </div>
                </header>
                <aside>
                    <xsl:apply-templates select="/json/json[21]"/>
                    <xsl:apply-templates select="/json/json[3]"/>
                    <xsl:apply-templates select="/json/json[4]"/>
                    <xsl:apply-templates select="/json/json[22]"/>
                </aside>
                <main>
                    <xsl:apply-templates select="/json/json[position() ge 5 and position() le 15]"/>
                    <h2>Během pobytu v porodnici si přeji:</h2>
                    <ul>
                        <xsl:apply-templates select="/json/json[position() ge 16 and position() le 19]"/>
                    </ul>
                    <xsl:apply-templates select="/json/json[20]"/>
                </main>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="/json/json[1]">
        <h2>
            <xsl:value-of select="value[1]"/><xsl:text> </xsl:text><xsl:value-of select="value[2]"/>
        </h2>
        <div class="termin">
            <xsl:value-of select="format-date(value[3], '[D]. [M]. [Y]')"/>
        </div>
    </xsl:template>

    <xsl:template match="/json/json[2]">
        <xsl:if test="exists(value)">
            <xsl:if test="value[1] != ''">
                <p>Partner:
                    <strong>
                        <xsl:value-of select="value[1]"/>
                    </strong>
                </p>
            </xsl:if>
            <xsl:if test="value[2] != ''">
                <p>Dula:
                    <strong>
                        <xsl:value-of select="value[2]"/>
                    </strong>
                </p>
            </xsl:if>
            <xsl:if test="value[3] != ''">
                <p>PA:
                    <strong>
                        <xsl:value-of select="value[3]"/>
                    </strong>
                </p>
            </xsl:if>
            <xsl:if test="value[4] != ''">
                <p>Jiné:
                    <strong>
                        <xsl:value-of select="value[4]"/>
                    </strong>
                </p>
            </xsl:if>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[3]">
        <xsl:if test="exists(value)">
            <p class="small h3">
                <strong>
                    <xsl:text>Poznámky ke zdravotnímu stavu: </xsl:text>
                </strong>
                <xsl:value-of
                        select="x:filter-join(value, ('těhotenská cukrovka', 'streptokok typu B', 'jiný RH faktor než dítě', 'HIV', 'genitální herpes', 'preeklampsie', 'podstoupená operace dělohy'))"/>
            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[4]">
        <xsl:if test="exists(value) and value != ''">
            <p class="small">
                <strong>
                    <xsl:text>Specifické potřeby: </xsl:text>
                </strong>
                <xsl:value-of select="value[1]"/>
            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[5]">
        <xsl:if test="exists(value)">
            <h2>Před porodem si přeji:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>vyčkat na přirozený začátek porodu bez ohledu na stanovený termín porodu</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>pokud bude nutné vyvolání porodu, přeji si detailní konzultaci o možnostech</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>pokud to bude možné, prosím o přítomnost smluveného lékaře</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[6]">
        <xsl:if test="exists(value)">
            <h2>Při příjmu do porodnice je pro mne důležité:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>mít při sobě partnera, dulu či jiný doprovod</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>nebýt rušena administrativními požadavky během kontrakcí</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>nebýt holena</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>nezavádět klystýr</li>
                </xsl:if>
                <xsl:if test="value[5] = 'true'">
                    <li>nezavádět preventivně kanylu</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[7]">
        <xsl:if test="exists(value)">
            <h2>Během první doby porodní si přeji:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>mít možnost volby polohy a volného pohybu jak dlouho to jen bude možné</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>mít možnost konzumace jídla a pití při porodu</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>využívat fetální monitor co nejméně</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>mít možnost pohybu při sledování fetálním monitorem</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[8]">
        <xsl:if test="exists(value)">
            <p class="h3">
                <strong>Tlumení bolesti</strong>
            </p>
            <p class="h3">
                <strong>
                    <xsl:text>Upřednostňuji tyto nefarmakologické metody: </xsl:text>
                </strong>
                <xsl:value-of
                        select="x:filter-join(value, ('vanu nebo sprchu', 'masáž', 'střídání pozic', 'dýchací techniky', 'aromaterapii', 'teplé obklady'))"/>

            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[9]">
        <xsl:if test="exists(value)">
            <p>
                <strong>V případě potřeby souhlasím s far&#xAD;ma&#xAD;ko&#xAD;lo&#xAD;gic&#xAD;ký&#xAD;mi prostředky:</strong>
            </p>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>ano, ale nenabízejte mi prostředky na tlumení bolesti, pokud se sama nezeptám</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>prostředky, které co nejméně ovlivňují bdělost dítěte po porodu</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>epidurální analgezie</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>rajský plyn</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[10]">
        <xsl:if test="exists(value)">
            <h2>V průběhu porodu si přeji:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>vyhnout se řízenému tlačení, a pokud možno, tlačit spontánně</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>řízené tlačení od zdravotního personálu</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>mít možnost volby porodní polohy</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>neprovádět preventivní nástřih hráze (epiziotomii)</li>
                </xsl:if>
                <xsl:if test="value[5] = 'true'">
                    <li>neprovádět přidržení fundu</li>
                </xsl:if>
                <xsl:if test="value[6] = 'true'">
                    <li>vyhnout se vakuové extrakci</li>
                </xsl:if>
                <xsl:if test="value[7] = 'true'">
                    <li>vyhnout se porodu kleštěmi</li>
                </xsl:if>
                <xsl:if test="value[8] = 'true'">
                    <li>v 2. době porodní preferuji intermitentní poslech ozev dle doporučení WHO</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[11]">
        <xsl:if test="exists(value)">
            <h2>V případě císařského řezu si přeji:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>před zahájením operace moment o samotě se svým doprovodem</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>přítomnost někoho z doprovodu po celou dobu operace</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>vědět, co se v jednotlivých fázích operace děje</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>pozvolné vyjmutí dítěte z dělohy</li>
                </xsl:if>
                <xsl:if test="value[5] = 'true'">
                    <li>přiložit dítě na holou kůži ihned po narození</li>
                </xsl:if>
                <xsl:if test="value[6] = 'true'">
                    <li>přiložit si dítě k prsu hned, jak to bude možné</li>
                </xsl:if>
                <xsl:if test="value[7] = 'true'">
                    <li>provést „vaginální seeding“</li>
                </xsl:if>
                <xsl:if test="value[8] = 'true'">
                    <li>nechat co nejdéle tepat nepřerušený pupečník</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[12]">
        <xsl:if test="exists(value)">
            <h2>Ihned po porodu si přeji:</h2>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>přiložit dítě na mou hruď ihned po porodu</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>aby někdo z mého doprovodu přestřihl pupeční šňůru</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>aby pupeční šňůra byla zasvorkovaná nebo přestřihnutá teprve po jejím úplném dotepání</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>vyčkat na přirozený porod placenty</li>
                </xsl:if>
                <xsl:if test="value[5] = 'true'">
                    <li>přiložit dítě k prsu pro urychlení porodu placenty</li>
                </xsl:if>
                <xsl:if test="value[6] = 'true'">
                    <li>nechat dítě samovolně přisát k prsu</li>
                </xsl:if>
                <xsl:if test="value[7] = 'true'">
                    <li>vyšetření dítěte pediatrem na těle matky</li>
                </xsl:if>
                <xsl:if test="value[8] = 'true'">
                    <li>aby byl s dítětem u všech vyšetření a zákroků jeden z rodičů</li>
                </xsl:if>
                <xsl:if test="value[9] = 'true'">
                    <li>aby dítě nebylo ihned po porodu měřeno a váženo</li>
                </xsl:if>
                <xsl:if test="value[10] = 'true'">
                    <li>aby dítě nebylo koupáno</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[13]">
        <xsl:if test="exists(value) and value != ''">
            <p>
                <strong>
                    <xsl:text>Placenta: </xsl:text>
                </strong>
                <xsl:value-of select="value[1]"/>
            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[14]">
        <xsl:if test="exists(value)">
            <p class="h3">
                <strong>
                    <xsl:text>Prosím, aby dítě NEPODSTOUPILO: </xsl:text>
                </strong>
                <xsl:value-of
                        select="x:filter-join(value, ('injekci vitaminu K', 'vykapání očí O-Septonexem', 'koupání po porodu', 'měření a vážení', 'podání umělé výživy'))"/>
            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[15]">
        <xsl:if test="exists(value)">
            <p>
                <strong>
                    <xsl:text>V případě komplikací si přeji: </xsl:text>
                </strong>
            </p>
            <ul>
                <xsl:if test="value[1] = 'true'">
                    <li>doprovodit dítě na JIP</li>
                </xsl:if>
                <xsl:if test="value[2] = 'true'">
                    <li>kojit nebo odsávat mé mléko</li>
                </xsl:if>
                <xsl:if test="value[3] = 'true'">
                    <li>chovat dítě kdykoliv to bude možné</li>
                </xsl:if>
                <xsl:if test="value[4] = 'true'">
                    <li>být stále v přítomnosti dítěte (já nebo někdo z mého doprovodu)</li>
                </xsl:if>
            </ul>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[16]">
        <xsl:if test="exists(value)">
            <xsl:if test="value[1] = 'true'">
                <li>Přeji si začít s kojením ihned po porodu.</li>
            </xsl:if>
            <xsl:if test="value[2] = 'true'">
                <li>Přeji si začít s kojením po konzultaci s laktační poradkyní.</li>
            </xsl:if>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[17]">
        <xsl:if test="exists(value)">
            <li>
                <xsl:text>Přeji si mít dítě u sebe </xsl:text>
                <xsl:choose>
                    <xsl:when test="value = '0'">stále</xsl:when>
                    <xsl:when test="value = '1'">pouze během dne</xsl:when>
                    <xsl:when test="value = '2'">jen pokud budu vzhůru</xsl:when>
                    <xsl:when test="value = '3'">jen na krmení</xsl:when>
                    <xsl:when test="value = '4'">podle aktuálních preferencí</xsl:when>
                </xsl:choose>
                <xsl:text>.</xsl:text>
            </li>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[18]">
        <xsl:if test="exists(value)">
            <xsl:variable name="text" select="x:filter-join(value, ('neprovádět rutinní dokrmování dítěte', 'nedávat dítěti dudlík', 'pahýl po pupeční šňůře nechat samovolně odpadnout'))" />
            <li>
                <xsl:value-of
                        select="fn:upper-case(fn:substring($text, 1 ,1)) || fn:substring($text, 2) || '.'"/>
            </li>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[19]">
        <xsl:if test="exists(value)">
            <li>
                <xsl:text>Přeji si </xsl:text>
                <xsl:choose>
                    <xsl:when test="value = '0'">opustit porodnici po nejdelší možné době</xsl:when>
                    <xsl:when test="value = '1'">opustit porodnici po nejkratší možné době</xsl:when>
                    <xsl:when test="value = '2'">opustit porodnice po době, kterou mi doporučí personál</xsl:when>
                    <xsl:when test="value = '3'">opustit porodnici ihned po porodu (ambulantní porod)</xsl:when>
                </xsl:choose>
                <xsl:text>.</xsl:text>
            </li>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[20]">
        <xsl:if test="exists(value) and value != ''">
            <h2>Další poznámky:</h2>
            <p>
                <xsl:text>Na porod jsem se připravovala: </xsl:text>
                <xsl:value-of select="value[1]"/>
            </p>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[21]">
        <xsl:if test="exists(value)">
            <xsl:for-each select="fn:tokenize(value[1], '\n')">
                <p class="italic">
                    <xsl:value-of select="."/>
                </p>
            </xsl:for-each>
        </xsl:if>
    </xsl:template>

    <xsl:template match="/json/json[22]">
        <xsl:if test="exists(value)">
            <h2>Co je pro mě nejdůležitější?</h2>
            <xsl:if test="value[1] = 'true'">
                <p>
                    <strong>Ráda bych měla přirozený porod bez vnějších zásahů, pokud nedojde k závažným komplikacím.</strong>
                </p>
            </xsl:if>
            <xsl:if test="value[2] = 'true'">
                <p>
                    <strong>Informujte mě, prosím, průběžně o postupu porodu a o tom, co bude následovat.</strong>
                </p>
            </xsl:if>
            <xsl:if test="value[3] = 'true'">
                <p>
                    <strong>Všechny zásahy před a během porodu bych ráda konzultovala a měla čas na rozmyšlenou.</strong>
                </p>
            </xsl:if>
            <xsl:if test="value[4] = 'true'">
                <p>
                    <strong>Po celou dobu bych se ráda nechala vést doporučeními od týmu zdravotníků.</strong>
                </p>
            </xsl:if>
            <xsl:if test="value[5] = 'true'">
                <p>
                    <strong>Přeji si, aby o mne během porodu pečoval co nejmenší počet zdravotníků.</strong>
                </p>
            </xsl:if>
        </xsl:if>
    </xsl:template>

    <xsl:function name="x:filter-join" as="xs:string">
        <xsl:param name="value" as="xs:string+"/>
        <xsl:param name="text" as="xs:string+"/>
        <xsl:sequence select="fn:string-join(fn:for-each-pair($value, $text, x:filter-value#2),  ', ')"/>
    </xsl:function>

    <xsl:function name="x:filter-value" as="xs:string?">
        <xsl:param name="value" as="xs:string"/>
        <xsl:param name="text" as="xs:string"/>
        <xsl:sequence select="if ($value = 'true') then $text else ()"/>
    </xsl:function>
</xsl:stylesheet>
