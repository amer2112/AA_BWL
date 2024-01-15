var models = [- "Produktivität", "Wirtschaftlichkeit", "Rabatt", "Entscheidung unter Sicherheit",
              "Entscheidung unter Ungewissheit", 
              "Herzberg", "Rückkopplungsmodell", "Stakeholder", 
              "Shareholder","Makroökonomie", "Porter's five fources, Branchenstrukturanalyse", 
              "Wettbwerbsstrategien", "Kapitalfreisetzung", "Marktanteil", "BCG-Matrix", "Synergie",
              "Acquisition", "SWOT-Analyse", "Produkt-Markt-Matrix", "Wichtige Berechnungen",
              "Diversifikationen (bsp: Sportschuhe verkaufen)", "Gallener Modell", "Funktionale Organisationsform",
              "Geschäftsorganisation", "Strategische Allianzen ", "Joint ventures", "Fusion", "Koordination ", "Transaktionstheorie", 
              "Marketingmanagement", "Ziele des Marketings", "Ziele des Marketings", "Strategische Marketingsmanagment",
              "Sinus-Millieus","Leistungsprogramm ","Positionsstrategien","Neu positionieren (repositionierung)","Operative Marketingmanagement",
              "Leistung", "Marketingstrategien", "Preisfestlegung", "Break-even-analysis", "Kommunikation beim Marketing", "Werbung", 
              "AIDA-Modell (Werbewirkung)", "Public relations", "Product placement", 
              "Distributionspolitik", "Degitale Handelsplattformen"];
var definitions = [
    "= Stück pro Tag/Stundem am Tag",
    "= Stückpreis/Arbeitskosten am Tag; WK pro Kunde = Wirtschaftlichkeit/(Materialkosten+ Mitarbeiterkosten)",
    "Mengenrabatt--> Stückkosten fallen wegen hoher Menge",
    "Verzinsung = Eignekapital*zinsen(%); Prämie = ((Eigenkapital +Privatvermögen) / Gesamtkapital) * (Gewinn - Verzinsung)",
    "Maximax/Minimax-Regeln, Hurwicz-Formel",
    "Hygienfaktoren: führen zur keinen Unzufriedenheit; Motivatoren: führen zur Zufriedenheit Zufriedenheit und Unzufriedenheit sind unabhängig von einander",
    "Leistung = zentrales Element -> belohnt; Belohung für Leistung (extrinsisch oder intrinsisch); Belohunung => Motivation; Motivation => Leistung erhöhen/erniedrigen",
    "alle Gruppen, die mit dem Unternehmen in Bezug stehen (Mitarbeiter, UF, …); Xziel:  Differenz zwischen Input und Output maximieren, bestmöglicher Output für geringstmöglicher input (alles maximieren)",
    "Investierung vom Eigenkapital, Ziel: Gewinn maximieren",
    "1.Marktpotenzial - Marktvolumen = Wachstumsreserve, kann ich noch wachsen?; 2.Marktsättigungsgrad = Marktvolumen/Martkpotenzial",
    "1.Lieferantenmacht, 2.potenzielle neue Anbieter, 3,Käufermacht, 4.Ersatzprodukte, 5.Branche (Wettbewerb)",
    "1.Kostenführerstrategie, 2.Differenzierungsstrategie",
    "Zu viele Produkte und nichts verkauft --> schnell verkaufen",
    "1.Absolut = (Umsatz des Unternehmens / Gesamt-Umsatz des Marktes) * 100, 2.Relativ = eigener Marktanteil / höchster Marktanteil des stärksten Wettbewerbers",
    "1.Star, 2.cash cow, 3.poor dogs, 4.question mark; Schwäche: relativer Marktanteil und Erfahrung als 1 betrachtet",
    "1.Kostensynergie (wenigere Kosten), 2.Nutzensynergie(access to Facilities I don't have)",
    "Unternhmen A mit Geld kauft Unternehmen B (mit know-how)",
    "Strength, weakness, opportunity, threat; Strategien: ST, WO, SO, WT",
    "In Markt verkaufen, Entwicklung im neuen Land, neues Produkt anbieten, neues Produkt im neuen Markt anbieten",
    "1.ROI = Kapitalumschlag * Umsatzrentabilität;2. Umsatz / gebundenes Kapital = Kapitalumschlag;3.  Gewinn; Umsatz = Umsatzrentabilität;4.  Umsatz - Kosten = Gewinn;5.  Sonsitge Kosten + Materialkosten = Kosten",
    "Vertikal (Leder und Schuhe verkaufen); Horizontal (Schuhe und Sportkleidung verkaufen); Lateral (Schuhe und PCs verkaufen)",
    "Wer?, Was?, Wert?, Wie? => business-analysis",
    "Einliniensystem (keine Kommunikation zwischen unterschiedliche Objekte, 1-deminsionale Kommunikation, Komm. Ist zentralisiert); UntLeitung haben Funktionen (Marketing,…) und marketing haben Objekte (Leistungspolitik, Preispolitik,…)",
    "unterschiedliche Geschäftsbereiche (Tochtergesellschaften) die eigene Funktionen haben",
    "Wettbewerbsvorteile unterschiedlicher Airlines zB, rechtlich unabhängig (meistends kurzfristig)",
    "zwei Unternehmen werden zu einem Dritten, das rechtlich selbstständig ist (fast immer langfristig) => werden meistens danach zur Akquisition",
    "entweder Aufnahme(100% Kauf) oder Verschmelzung (2 Unternehmen werden zu Einem; riskant (Synergie überschätzt, Arbeitsverlust, Umzug, feindliche Übernahme)",
    "Systematische Abstimmung und Ausrichtung von Operationen innerhalb einer Organisation",
    "Veträge, Tauschbeziehung einer Leistung",
    "Strategie, Ziele des mArketings, Umsetzung des Marketings, Kontrolle",
    "Angebot > Nachfrage; ökonomische Ziele, Nutz für Kunden und gute Leistung, brand image",
    "S (Stimuli/Werbung), O (Entscheidungsprozess), R (Kaufverhalten)",
    "1.Marktsegmentierungsstrategie (deffirenzierte Zielgruppe), Kriterien: Geographisch, Sozial, Psychologisch, Verhalten); 2.Massenmarktsstrategie (große Masse); Ziel = Absatz/Umsatz über hohe Verkaufszahlen; Kostenvorteile",
    "Die Sinus-Milieus teilen die Gesellschaft in verschiedene Gruppen ein, die ähnliche Lebensstile, Werte und Einstellungen teilen. Diese Segmentierung hilft Unternehmen, ihre Zielgruppen besser zu verstehen und ihre Marketingstrategien gezielter auszurichten.",
    "1.Modifikation (Leitstungsdifferenzierung - oder standarderisierung), 2.Innovation, 3.Leistungselimination",
    "1.USP: unique selling proposition; 2.points of parity-Positionierung ",
    "Aspekt durch Marketing ändern, bsp: Sicherheit verbessern bei FaceBook",
    "Produkt, preis, werbung, Wo und Wie soll es verkauft werden",
    "Leistungskern, Verpackung und Marke, Zusatzleistungen",
    "Einzelmarkenstrategie, Familienmarkenstrategie, Unternehmensstrategie (Funktion = Marke)",
    "Erlöse - Kosten; kostenorientiert, nachfrageorientiert, konlurrenzorientiert",
    "Gewinnschwelle (break-even-point),  Fixkosten / Deckungsbeitrag (pro Stück; Kosten = Erlöse",
    "Instrumente: Werbung, social media,… (Botschaft könnte misverstanden werden)",
    "Klassisch (Radio, Print); social media (interaktiv)",
    "Attention, Interest, Desire, Action; auch wichtig ist recall test (erinnern) und recognition test (wiedererinnern test); Ziel = Absatz",
    "Selbstdarstellung (brand image), Ziel = Image und Vertrauen",
    "Produkt bei Zielkunden bekannt machen; Ziel = image und Bekanntheit",
    "Ausgangslogistik((Lagerstandorte, Transportmittel, Redistribution), Vertriebskanäle (Weg von Hersteller zum Kunde); Unternehmen kan mehrere Kanäle haben, wie nike, JD, snipes,…",
    "Indirekter Vertriebskanal, bsp Lieferando oder Uber (Nachfrage mit Leistungsgeber vernetzen)"
];
var currentIndex = 0;
var isCardFlipped = false;

function toggleCardFlip() {
    if (!isCardFlipped) {
        showDefinition();
    } else {
        hideDefinition();
    }
    isCardFlipped = !isCardFlipped;
}

function showDefinition() {
    var cardInner = document.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(180deg)';
    document.getElementById('model-text').innerText = definitions[currentIndex];
}

function hideDefinition() {
    var cardInner = document.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(0deg)';
    document.getElementById('model-text').innerText = models[currentIndex];
}

function updateCardContent() {
    document.getElementById('definition-text').innerText = definitions[currentIndex];
}

function showDefinition() {
    var definitionText = document.getElementById('definition-text');
    definitionText.style.opacity = 1;
}

function hideDefinition() {
    var definitionText = document.getElementById('definition-text');
    definitionText.style.opacity = 0;
}
