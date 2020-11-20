# Opetus
Lähdekoodia ohjelmoinnin opettamiseen

<h2>1. oppitunti</h2>

<h3>Johdanto</h3>

<p>Javascript on ohjelmointikieli, jolla tehtyjä skriptejä, eli ohjelmia voi ajaa www-selaimella. Käytännössä ohjelmakoodi on www-sivujen lähdekoodin seassa, joten Javascript-ohjelmoijan pitää osata myös www-sivujen koodauskieli, eli html.</p>
<p>P5.js on Javascriptin päälle rakennettu laajennusosa, joka tuo ohjelmoijalle helpon mahdollisuuden luoda grafiikkaa ja animaatioita.</p>
<p><a href="https://editor.p5js.org/">P5.js Web Editor</a> on internetissä toimiva sivu, jolla Javascript-ohjelmointia helpotetaan edelleen, koska se etäännyttää ohjelmoijan www-sivujen kanssa toimimisesta. Ohjelman voi kirjoittaa suoraan www-selaimeen, ja tulokset näkee silmänräpäyksessä.</p>
<p>Kotitehtävä: luo itsellesi tili p5.js web editoriin.</p>

<h3>Naiivi Viron lippu</h3>

<h4>Tehtävänanto</h4>
<p>Ensimmäinen tehtävä on piirtää Viron lippu, joka on vaakasuuntainen trikolori. Värit ylhäältä alaspäin ovat sininen, musta, ja valkoinen.</p>

<h4>Ensimmäistä kartaa p5.js web editorissa</h4>
<p>Kun p5.js web editorin avaa, esille tulee valmis pohja. Vasemmalla puolella on ohjelman koodi, ja oikealle puolelle tulee ohjelman tekemä animaatio (tai piirros), kun painaa oikealle osoittavaa kolmiota ("play"). Animaation saa pysäytettyä painamalla neliötä ("stop").</p>
<p>P5.js web editorin koodi-ikkunassa on valmis ohjelma, jonka voi käynnistää, mutta tässä vaiheessa se ei tee vielä mitään erikoista, vaan oikealle puolelle ilmestyy vain harmaa tausta, joka p5-kielenkäytössä tunnetaan nimellä kangas (canvas).</p>
<p>Valmiiksi pohjaan annettu ohjelma jakautuu kahteen eri osaan, jotka ovat oikealta nimeltään aliohjelmia tai funktioita. Ensimmäisellä rivillä on aliohjelman nimi, tässä tapauksessa ne ovat setup ja draw. Varsinainen ohjelma kirjoitetaan aliohjelman nimen perässä olevien aaltosulkeiden väliin. Tässä tapuksessa varsinainen ohjelma koostuu kahdesta rivistä: createCanvas ja background. Tässä vaiheessa vain createCanvas sijoitetaan ensimmäiseen osaan (setup), ja kaikki muut rivit tulevat toiseen osaan (draw).</p>
<p>CreateCanvas ja background ovat p5-komentoja, tarkemmin sanoen aliohjelmien kutsuja. Aliohjelmien pariin syvennytään myöhemmin, ja tässä vaiheessa pitää tietää vain se, että komennon jälkeen tulee suluissa pilkuilla erotettuna numeroarvoja, oikealta nimeltään parametrejä. Numeroarvoja voi olla nolla, jolloin pitää kuitenkin kirjoittaa sulut, tai enemmän, riippuen komennosta.</p>
<p>On hyvä tapa päättää Javascript-komento puolipisteeseen. Sitä ei tarkalleen ottaen vaadita joka paikassa, mutta muissa ohjelmointikielissä se on yleensä pakollinen.</p>
<p>CreateCanvas-komennon numeroarvot kertovat piirustuskankaan koon kuvapisteinä. Ensin on x-akselin eli vaaka-akselin suuntainen koko, ja toisena y- eli pystyakselin suuntainen koko.</p>
<p>Background-komennon yksi numeroarvo kertoo, mikä on kankaan eli taustan väri. Yhdellä numerolla valitaan jokin harmaasävy niin, että 0 on täysin musta ja 255 täysin valkoinen. Background-komennolla voi olla myös kolme numeroarvoa, jolloin ne kertovat punaisen, vihreän ja sinisen osavärin osuuden lopullisessa taustavärissä. Esimerkiksi 255,0,0 tarkoittaa kirkkaanpunaista ja 0,0,255 kirkkaansinistä. Värejä voi myös yhdistää: 255,0,255 tuottaa purppuraa ja 200,255,200 vaaleanvihreää.</p>
<p>Kokeile muuttaa kankaan kokoa ja sen taustaväriä. Muista painaa play-nappulaa, niin näet tekemiesi muutosten vaikutuksen.</p>

<h4>Lipun piirtäminen</h4>
<p>Esimerkkiratkaisussa kankaan leveydeksi on valittu 500 kuvapistettä ja korkeudeksi 400 kuvapistettä. Muun piirtämisen tulisi pysyä näiden arvojen alapuolella, jotta koko lippu mahtuu näkyviin.</p>
<p>NoStroke-komento käskee, että kuvioille ei piirretä ääriviivoja. Se ei ota yhtään numeroa parametrinään, mutta sulut pitää muistaa kirjoittaa siitä huolimatta.</p>
<p>Fill-komento käskee, että piirrettävät kuviot pitää täyttää valitulla värillä. Fill ottaa parametreikseen yhden tai kolme numeroa, kuten background-komentokin: yhdellä numerolla saadaan harmaasävy, kolmella numerolla punaisen, vihreän ja sinisen osavärin osuudet (red, green, blue, eli ns. RGB-tyyppinen väri). Kaikki fill-komennon jälkeen tulevat kuviot piirretään samalla värillä, kunnes annetaan uusi fill-komento.</p>
<p>Rect-komento piirtää suorakaiteen. Kaksi ensimmäistä parametriä ovat suorakaiteen vasemman yläkulman koordinaatit: 0,0 on vasen yläkulma, ja tässä tapauksessa 500,400 olisi kankaan oikea alakulma. Kaksi viimeistä parametriä ovat suorakaiteen koko kuvapisteinä: 100,100 olisi neliön muotoinen suorakaide, jonka sivu olisi 100 kuvapistettä pitkä.</p>





<ul>
  
  <li>Naiivi Viron lippu</li>
  <ul>
    <li>Mitat ja värit heitetty lonkalta.</li>
    <li>Javascript-komento eli oikealta nimeltään aliohjelma- tai funktiokutsu. Komento ja parametrit sulkeissa.</li>
    <li>createCanvas: tässä vaiheessa vielä ylhäältä annettu.</li>
    <li>noStroke: käskee, ettei ääriviivaa piirretä.</li>
    <li>fill: käskee, että piirrettävä kuvio täytetään jollakin värillä.</li>
    <ul>
      <li>Yksi parametri: harmaasävy, 0 on täysin musta, 255 on täysin valkoinen.</li>
      <li>Kolme parametriä: RGB, eli punaisen, vihreän ja sinisen värin osuus, väliltä 0-255.</li>
    </ul>
    <li>rect: piirtää suorakaiteen.</li>
    <ul>
      <li>Neljä parametriä: suorakaiteen vasemman yläkulman x- ja y-koordinaatit sekä suorakaiteen leveys ja korkeus.</li>
    </ul>
  </ul>
  
  <li>Oikea Saksan lippu</li>
  <ul>
    <li>https://en.wikipedia.org/wiki/Flag_of_Germany#Design</li>
    <li>Ohjelmakoodin kommentointi parantaa luettavuutta. Koodia voi joutua lukemaan joku muukin, tai koodaaja itse 10 vuoden päästä.</li>
    <li>Lausekkeen käsite. Jotakin, jonka tietokone laskee automaattisesti yhdeksi numeroarvoksi.</li>
    <li>Helppoja kotitehtäviä: Puolan, Liettuan, Latvian, Mauritiuksen liput.
    <li>Vaikeampia kotitehtäviä: Ranskan, Nigerian, Irlannin liput.
    <li>Extra-kotitehtävä: Yhdistyneiden arabiemiraattien ja Madagaskarin lippu.
  </ul>
  
  <li>Japanin lippu</li>
  <ul>
    <li>Ympyrän ja soikion käsite ja komento: ellipse.</li>
    <li>Taustaväri: background.</li>
    <li>Muuttujan käsite: jokin, joka voi muuttua ohjelman suorituksen aikana.</li>
    <li>Vakion käsite: jokin, joka pysyy samana koko ohjelman suorituksen ajan.</li>
  </ul>
  
  <li>Sudanin lippu</li>
  <ul>
  <li>Kolmio</li>
  <li>Päälle piirtäminen.</li>
  </ul>
  
</ul>
 
