from pathlib import Path

categories = {
"Sport": [
("Calcio","Rugby"),("Tennis","Padel"),("Basket","Pallavolo"),("Nuoto","Pallanuoto"),("Formula 1","MotoGP"),
("Sci","Snowboard"),("Boxe","Kickboxing"),("Atletica","Triathlon"),("Golf","Minigolf"),("Ciclismo","Mountain bike"),
("Ping pong","Tennis"),("Scherma","Kendo"),("Baseball","Softball"),("Hockey","Lacrosse"),("Surf","Windsurf"),
("Judo","Karate"),("Skateboard","Pattinaggio"),("Arrampicata","Alpinismo"),("Canottaggio","Kayak"),("Maratona","Mezza maratona")
],
"Animali": [
("Leone","Tigre"),("Gatto","Volpe"),("Cane","Lupo"),("Mucca","Bufalo"),("Cavallo","Asino"),
("Aquila","Falco"),("Delfino","Orca"),("Squalo","Balena"),("Pecora","Capra"),("Rana","Rospo"),
("Coccodrillo","Alligatore"),("Ghepardo","Leopardo"),("Topo","Criceto"),("Oca","Anatra"),("Pavone","Fagiano"),
("Serpente","Lucertola"),("Polpo","Calamaro"),("Granchio","Aragosta"),("Cinghiale","Maiale"),("Pinguino","Foca")
],
"Cibo e Cucina": [
("Pizza","Focaccia"),("Pasta","Riso"),("Lasagna","Cannelloni"),("Gelato","Granita"),("Pane","Toast"),
("Cappuccino","Caffè macchiato"),("Cornetto","Brioche"),("Risotto","Minestra"),("Mozzarella","Burrata"),("Prosciutto","Salame"),
("Parmigiana","Lasagna"),("Tiramisù","Zuppa inglese"),("Carbonara","Amatriciana"),("Hamburger","Hot dog"),("Sushi","Sashimi"),
("Kebab","Gyros"),("Piadina","Crepes"),("Polenta","Purè"),("Arancino","Supplì"),("Cioccolato","Cacao")
],
"Cinema e Serie TV": [
("Batman","Superman"),("Rocky","Rambo"),("Titanic","Pearl Harbor"),("Harry Potter","Il Signore degli Anelli"),("Spider-Man","Iron Man"),
("Star Wars","Star Trek"),("Matrix","Inception"),("Jurassic Park","King Kong"),("Il Padrino","Scarface"),("Friends","How I Met Your Mother"),
("Breaking Bad","Better Call Saul"),("Game of Thrones","Il Trono di Spade"),("Stranger Things","Dark"),("The Walking Dead","Lost"),("Top Gun","Giorni di tuono"),
("Ghostbusters","Men in Black"),("Shrek","Toy Story"),("Frozen","Rapunzel"),("La Casa di Carta","Prison Break"),("Squid Game","Alice in Borderland")
],
"Anni 80/90": [
("Walkman","Discman"),("VHS","DVD"),("Game Boy","Game Gear"),("MTV","Videomusic"),("Bim Bum Bam","Ciao Ciao"),
("Cabina telefonica","Gettone telefonico"),("Commodore 64","Amiga"),("Super Nintendo","Mega Drive"),("Tamagotchi","Giga Pet"),("Crystal Ball","Didò"),
("Festivalbar","Karaoke"),("Non è la Rai","Drive In"),("Sarabanda","Passaparola"),("Jovanotti","883"),("Ambra","Sabrina Salerno"),
("Fiat Uno","Panda 4x4"),("Zaino Invicta","Diario Smemoranda"),("Cioè","Topolino"),("Pongo","Das"),("Big Babol","Brooklyn")
],
"Oggetti di Casa": [
("Telefono","Tablet"),("Computer","Stampante"),("Lampada","Torcia"),("Orologio","Sveglia"),("Sedia","Poltrona"),
("Divano","Letto"),("Forno","Microonde"),("Frigorifero","Congelatore"),("Lavatrice","Lavastoviglie"),("Aspirapolvere","Scopa"),
("Telecomando","Joystick"),("Specchio","Quadro"),("Cuscino","Coperta"),("Bicchiere","Tazza"),("Pentola","Padella"),
("Chiave","Lucchetto"),("Armadio","Cassettiera"),("Tappeto","Zerbino"),("Candela","Profumatore"),("Libro","Rivista")
],
"Tecnologia": [
("Smartphone","Tablet"),("Laptop","Desktop"),("Mouse","Touchpad"),("Wi-Fi","Bluetooth"),("Email","Chat"),
("Google","Bing"),("Instagram","TikTok"),("YouTube","Netflix"),("QR code","Codice a barre"),("Cloud","Hard disk"),
("USB","HDMI"),("Robot","Drone"),("Stampante 3D","Plotter"),("Password","PIN"),("App","Sito web"),
("GPS","Bussola"),("Fotocamera","Videocamera"),("Router","Modem"),("Auricolari","Cuffie"),("Intelligenza artificiale","Chatbot")
],
"Luoghi Famosi": [
("Roma","Firenze"),("Parigi","Londra"),("New York","Los Angeles"),("Venezia","Verona"),("Torino","Milano"),
("Colosseo","Arena di Verona"),("Torre Eiffel","Big Ben"),("Statua della Libertà","Cristo Redentore"),("Piramidi","Sfinge"),("Machu Picchu","Petra"),
("Sahara","Deserto del Gobi"),("Everest","K2"),("Amazzonia","Congo"),("Grand Canyon","Monument Valley"),("Santorini","Mykonos"),
("Capri","Ischia"),("Sicilia","Sardegna"),("Tokyo","Seoul"),("Madrid","Barcellona"),("Amsterdam","Bruxelles")
],
"Musica": [
("Chitarra","Basso"),("Pianoforte","Tastiera"),("Batteria","Percussioni"),("Violino","Viola"),("Sax","Tromba"),
("Rock","Metal"),("Pop","Dance"),("Rap","Trap"),("Reggae","Ska"),("Jazz","Blues"),
("Opera","Musical"),("DJ","Producer"),("Concerto","Festival"),("Vinile","CD"),("Spotify","YouTube Music"),
("Microfono","Megafono"),("Coro","Orchestra"),("Canzone","Jingle"),("Ritornello","Strofa"),("Sanremo","Eurovision")
],
"Professioni": [
("Medico","Infermiere"),("Avvocato","Notaio"),("Maestro","Professore"),("Cuoco","Pasticcere"),("Architetto","Ingegnere"),
("Giornalista","Scrittore"),("Attore","Regista"),("Cantante","Musicista"),("Pilota","Autista"),("Poliziotto","Carabiniere"),
("Pompiere","Soccorritore"),("Farmacista","Dentista"),("Idraulico","Elettricista"),("Sarto","Stilista"),("Barista","Cameriere"),
("Programmatore","Sistemista"),("Fotografo","Videomaker"),("Commercialista","Consulente"),("Parrucchiere","Estetista"),("Falegname","Muratore")
]
}

lines = []
lines.append("// WORD_BANK - Bastard*! / Bastardo!")
lines.append("// 200 coppie locali, senza API. Struttura: categoria + coppia simile ma distinguibile.")
lines.append("const WORD_BANK = [")
first=True
for cat, pairs in categories.items():
    lines.append(f"\n  // {cat.upper()}")
    for a,b in pairs:
        comma = "," 
        lines.append(f'  {{cat:"{cat}", a:"{a}", b:"{b}"}},')
lines.append("\n];")
lines.append("")
lines.append("// Categorie disponibili derivate dal database")
lines.append("const WORD_CATEGORIES = [...new Set(WORD_BANK.map(x => x.cat))];")
content = "\n".join(lines)

path = Path("/mnt/data/wordbank.js")
path.write_text(content, encoding="utf-8")
print(f"Creato: {path} ({len(content)} caratteri, {sum(len(v) for v in categories.values())} coppie)")
