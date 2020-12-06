<xsl:stylesheet
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:fo="http://www.w3.org/1999/XSL/Format"
        xmlns:fn="http://www.w3.org/2005/xpath-functions"
        xmlns:html="http://www.w3.org/1999/xhtml"
        xmlns:x="http://www.jirsak.org/2020/XSLT-service"
        version="3.0">

    <xsl:output encoding="UTF-8" method="xml" media-type="application/pdf" x:previous-templates="porodni-prani.xslt" x:file-name="porodni-prani.pdf"/>

    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="page"
                                       page-height="297mm"
                                       page-width="210mm"
                                       margin="0">
                    <fo:region-body margin-top="30mm" margin-bottom="15mm" margin-left="10mm" margin-right="10mm" column-count="2"/>
                    <fo:region-before extent="24mm"/>
                    <fo:region-after extent="10mm"/>
                </fo:simple-page-master>
            </fo:layout-master-set>

            <fo:page-sequence master-reference="page" font-family="Open Sans" font-size="11pt">
                <fo:static-content flow-name="xsl-region-before">
                    <xsl:apply-templates select="/html:html/html:body/html:header"/>
                </fo:static-content>
                <fo:static-content flow-name="xsl-region-after">
                    <fo:block text-align="center" font-size="9pt">
                        Vytvořeno v aplikaci <fo:inline font-weight="bold">www.porodni-prani.cz</fo:inline>.
                    </fo:block>
                </fo:static-content>
                <fo:flow flow-name="xsl-region-body">
                    <fo:block-container span="all" margin-bottom="5mm">
                        <xsl:apply-templates select="/html:html/html:body/html:aside"/>
                    </fo:block-container>
                    <fo:block-container>
                        <xsl:apply-templates select="/html:html/html:body/html:main[1]"/>
                    </fo:block-container>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>

    <xsl:template match="html:header">
        <fo:block-container absolute-position="absolute" background-color="#89455d" color="white" top="0" left="0" height="24mm"
                            width="310mm">
            <fo:table table-layout="fixed" width="297mm">
                <fo:table-column column-width="110mm"/>
                <fo:table-column column-width="70mm"/>
                <fo:table-column column-width="30mm"/>
                <fo:table-body>
                    <fo:table-row>
                        <fo:table-cell>
                            <xsl:apply-templates select="html:h1 | html:h2"/>
                        </fo:table-cell>
                        <fo:table-cell display-align="center">
                            <fo:block-container margin-top="1mm">
                                <xsl:apply-templates select="html:div/html:p"/>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell display-align="center">
                            <xsl:apply-templates select="html:div[@class='termin']"/>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-body>
            </fo:table>

        </fo:block-container>
    </xsl:template>

    <xsl:template match="html:header/html:h1">
        <fo:block font-family="Clicker Script" font-size="7mm" margin-left="6mm" margin-top="3mm">
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>

    <xsl:template match="html:header/html:h2">
        <fo:block font-weight="bold" font-size="6mm" margin-left="6mm" margin-top="3mm">
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>

    <xsl:template match="html:header/html:div[@class='termin']">
        <fo:block text-align="center">
            Odhadovaný
        </fo:block>
        <fo:block text-align="center">
            termín porodu:
        </fo:block>
        <fo:block text-align="center" font-weight="bold">
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>

    <xsl:template match="html:aside">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="html:p">
        <fo:block margin-bottom="1mm">
            <xsl:if test="fn:contains-token(@class, 'small')">
                <xsl:attribute name="font-size">9pt</xsl:attribute>
            </xsl:if>
            <xsl:if test="fn:contains-token(@class, 'italic')">
                <xsl:attribute name="font-style">italic</xsl:attribute>
            </xsl:if>
            <xsl:if test="fn:contains-token(@class, 'h3')">
                <xsl:attribute name="margin-top">2mm</xsl:attribute>
            </xsl:if>
            <xsl:if test="exists(ancestor::html:aside)">
                <xsl:attribute name="text-align">justify</xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </fo:block>
    </xsl:template>

    <xsl:template match="html:h2">
        <fo:block font-weight="bold" font-size="14pt" color="#89455d" margin-top="4mm" margin-bottom="2mm" keep-with-next="always">
            <xsl:apply-templates/>
        </fo:block>
    </xsl:template>

    <xsl:template match="html:strong">
        <fo:inline font-weight="bold">
            <xsl:apply-templates/>
        </fo:inline>
    </xsl:template>

    <xsl:template match="html:ul">
        <fo:list-block>
            <xsl:apply-templates/>
        </fo:list-block>
    </xsl:template>

    <xsl:template match="html:ul/html:li">
        <fo:list-item keep-with-previous="always">
            <fo:list-item-label>
                <fo:block>•</fo:block>
            </fo:list-item-label>
            <fo:list-item-body start-indent="3mm">
                <fo:block>
                    <xsl:apply-templates/>
                </fo:block>
            </fo:list-item-body>
        </fo:list-item>
    </xsl:template>

</xsl:stylesheet>
