var models = [
    "Produktivität", "Wirtschaftlichkeit", "Rabatt", "Entscheidung unter Sicherheit",
    "Entscheidung unter Ungewissheit", "Herzberg", "Rückkopplungsmodell", "Stakeholder",
    "Shareholder", "Makroökonomie", "Porter's five forces, Branchenstrukturanalyse",
    "Wettbewerbsstrategien", "Kapitalfreisetzung", "Marktanteil", "BCG-Matrix", "Synergie",
    "Acquisition", "SWOT-Analyse", "Produkt-Markt-Matrix", "Wichtige Berechnungen",
    "Diversifikationen (bsp: Sportschuhe verkaufen)", "Gallener Modell", "Funktionale Organisationsform",
    "Geschäftsorganisation", "Strategische Allianzen", "Joint ventures", "Fusion", "Koordination ", "Transaktionstheorie",
    "Marketingmanagement", "Ziele des Marketings", "Strategisches Marketingsmanagement",
    "Sinus-Milieus", "Leistungsprogramm", "Positionsstrategien", "Neu positionieren (Repositionierung)", "Operatives Marketingmanagement",
    "Leistung", "Marketingstrategien", "Preisfestlegung", "Break-even-analysis", "Kommunikation beim Marketing", "Werbung",
    "AIDA-Modell (Werbewirkung)", "Public relations", "Product placement",
    "Distributionspolitik", "Digitale Handelsplattformen"
];

var definitions = [
    "= Stück pro Tag/Stunde am Tag",
    "= Stückpreis/Arbeitskosten am Tag; WK pro Kunde = Wirtschaftlichkeit/(Materialkosten+Mitarbeiterkosten)",
    "Mengenrabatt --> Stückkosten fallen wegen hoher Menge",
    "Verzinsung = Eigenkapital * Zinsen(%); Prämie = ((Eigenkapital + Privatvermögen) / Gesamtkapital) * (Gewinn - Verzinsung)",
    "Maximax/Minimax-Regeln, Hurwicz-Formel",
    "Hygienefaktoren: führen zur keinen Unzufriedenheit; Motivatoren: führen zur Zufriedenheit Zufriedenheit und Unzufriedenheit sind unabhängig voneinander",
    "Leistung = zentrales Element -> belohnt; Belohnung für Leistung (extrinsisch oder intrinsisch); Belohnung => Motivation; Motivation => Leistung erhöhen/erniedrigen",
    "alle Gruppen, die mit dem Unternehmen in Bezug stehen (Mitarbeiter, UF, …); Xziel: Differenz zwischen Input und Output maximieren, bestmöglicher Output für geringstmöglichen Input (alles maximieren)",
    "Investition vom Eigenkapital, Ziel: Gewinn maximieren",
    "1. Marktpotenzial - Marktvolumen = Wachstumsreserve, kann ich noch wachsen?; 2. Marktsättigungsgrad = Marktvolumen/Marktpotenzial",
    "1. Lieferantenmacht, 2. potenzielle neue Anbieter, 3. Käufermacht, 4. Ersatzprodukte, 5. Branche (Wettbewerb)",
    "1. Kostenführerstrategie, 2. Differenzierungsstrategie",
    "Zu viele Produkte und nichts verkauft --> schnell verkaufen",
    "1. Absolut = (Umsatz des Unternehmens / Gesamt-Umsatz des Marktes) * 100, 2. Relativ = eigener Marktanteil / höchster Marktanteil des stärksten Wettbewerbers",
    "1. Star, 2. Cash Cow, 3. Poor Dogs, 4. Question Mark; Schwäche: relativer Marktanteil und Erfahrung als 1 betrachtet",
    "1. Kostensynergie (wenigere Kosten), 2. Nutzensynergie (Zugang zu Einrichtungen, die ich nicht habe)",
    "Unternehmen A mit Geld kauft Unternehmen B (mit Know-how)",
    "Strength, Weakness, Opportunity, Threat; Strategien: ST, WO, SO, WT",
    "In Markt verkaufen, Entwicklung im neuen Land, neues Produkt anbieten, neues Produkt im neuen Markt anbieten",
    "1. ROI = Kapitalumschlag * Umsatzrentabilität; 2. Umsatz / gebundenes Kapital = Kapitalumschlag; 3. Gewinn; Umsatz = Umsatzrentabilität; 4. Umsatz - Kosten = Gewinn; 5. Sonstige Kosten + Materialkosten = Kosten",
    "Vertikal (Leder und Schuhe verkaufen); Horizontal (Schuhe und Sportkleidung verkaufen); Lateral (Schuhe und PCs verkaufen)",
    "Wer?, Was?, Wert?, Wie? => Business-Analyse",
    "Einliniensystem (keine Kommunikation zwischen unterschiedlichen Objekten, 1-dimensionale Kommunikation, Komm. Ist zentralisiert); Unterleitung haben Funktionen (Marketing,…) und Marketing haben Objekte (Leistungspolitik, Preispolitik, …)",
    "unterschiedliche Geschäftsbereiche (Tochtergesellschaften), die eigene Funktionen haben",
    "Wettbewerbsvorteile unterschiedlicher Airlines z.B., rechtlich unabhängig (meistens kurzfristig)",
    "zwei Unternehmen werden zu einem Dritten, das rechtlich selbstständig ist (fast immer langfristig) => werden meistens danach zur Akquisition",
    "entweder Aufnahme (100% Kauf) oder Verschmelzung (2 Unternehmen werden zu Einem; riskant (Synergie überschätzt, Arbeitsverlust, Umzug, feindliche Übernahme)",
    "Systematische Abstimmung und Ausrichtung von Operationen innerhalb einer Organisation",
    "Verträge, Tauschbeziehung einer Leistung",
    "Strategie, Ziele des Marketings, Umsetzung des Marketings, Kontrolle",
    "Angebot > Nachfrage; ökonomische Ziele, Nutzen für Kunden und gute Leistung, Brand Image",
    "S (Stimuli/Werbung), O (Entscheidungsprozess), R (Kaufverhalten)",
    "1. Marktsegmentierungsstrategie (differenzierte Zielgruppe), Kriterien: Geographisch, Sozial, Psychologisch, Verhalten); 2. Massenmarktsstrategie (große Masse); Ziel = Absatz/Umsatz über hohe Verkaufszahlen; Kostenvorteile",
    "Die Sinus-Milieus teilen die Gesellschaft in verschiedene Gruppen ein, die ähnliche Lebensstile, Werte und Einstellungen teilen. Diese Segmentierung hilft Unternehmen, ihre Zielgruppen besser zu verstehen und ihre Marketingstrategien gezielter auszurichten.",
    "1. Modifikation (Leistungsdifferenzierung - oder Standardisierung), 2. Innovation, 3. Leistungselimination",
    "1. USP: Unique Selling Proposition; 2. Points of Parity-Positionierung",
    "Aspekt durch Marketing ändern, bsp: Sicherheit verbessern bei FaceBook",
    "Produkt, Preis, Werbung, Wo und Wie soll es verkauft werden",
    "Leistungskern, Verpackung und Marke, Zusatzleistungen",
    "Einzelmarkenstrategie, Familienmarkenstrategie, Unternehmensstrategie (Funktion = Marke)",
    "Erlöse - Kosten; kostenorientiert, nachfrageorientiert, konkurrenzorientiert",
    "Gewinnschwelle (Break-even-Point), Fixkosten / Deckungsbeitrag (pro Stück; Kosten = Erlöse",
    "Instrumente: Werbung, Social Media,… (Botschaft könnte missverstanden werden)",
    "Klassisch (Radio, Print); Social Media (interaktiv)",
    "Attention, Interest, Desire, Action; auch wichtig ist Recall Test (Erinnern) und Recognition Test (Wiedererinnern Test); Ziel = Absatz",
    "Selbstdarstellung (Brand Image), Ziel = Image und Vertrauen",
    "Produkt bei Zielkunden bekannt machen; Ziel = Image und Bekanntheit",
    "Ausgangslogistik (Lagerstandorte, Transportmittel, Redistribution), Vertriebskanäle (Weg von Hersteller zum Kunden); Unternehmen kann mehrere Kanäle haben, wie Nike, JD, Snipes,…",
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
