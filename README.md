# Opetus
Lähdekoodia ohjelmoinnin opettamiseen

<h2>1. oppitunti</h2>

<h3>Johdanto</h3>

<p>Javascript on ohjelmointikieli, jolla tehtyjä skriptejä, eli ohjelmia voi ajaa www-selaimella. Käytännössä ohjelmakoodi on www-sivujen lähdekoodin seassa, joten Javascript-ohjelmoijan pitää osata myös www-sivujen koodauskieli, eli html.</p>
<p>P5.js on Javascriptin päälle rakennettu laajennusosa, joka tuo ohjelmoijalle helpon mahdollisuuden luoda grafiikkaa ja animaatioita.</p>
<p><a href="https://editor.p5js.org/">P5.js Web Editor</a> on internetissä toimiva sivu, jolla Javascript-ohjelmointia helpotetaan edelleen, koska se etäännyttää ohjelmoijan www-sivujen kanssa toimimisesta. Ohjelman voi kirjoittaa suoraan www-selaimeen, ja tulokset näkee silmänräpäyksessä.</p>
<p>Kotitehtävä: luo itsellesi tili p5.js web editoriin.</p>

<h3>Naiivi Viron lippu</h3>

<p>Ensimmäinen tehtävä on piirtää Viron lippu, joka on vaakasuuntainen trikolori. Värit ylhäältä alaspäin ovat sininen, musta, ja valkoinen.</p>
<p>Ohjelmointiympäristö antaa valmiiksi jonkin verran koodia, johon ei tässä vaiheessa puututa kovinkaan tarkasti. Valmiissa pohjassa on kaksi kaarisulkeilla erotettua ohjelmablokkia, ja oma ohjelmakoodi sijoitetaan blokkien väliin. Ensimmäisen blokin väliin tulee tässä vaiheessa createCanvas-komento, ja toisen blokin väliin kaikki muu.</p>
<p>createCanvas ja background ovat Javascript-komentoja, eli oikealta nimeltään aliohjelma- tai funktiokutsuja. Aliohjelmien pariin syvennytään myöhemmin, ja tässä vaiheessa pitää tietää vain se, että komennon jälkeen tulee suluissa pilkuilla erotettuna numeroarvoja, oikealta nimeltään parametrejä. Numeroarvoja voi olla nolla, jolloin pitää kuitenkin kirjoittaa sulut, tai enemmän, riippuen komennosta.</p>
<p>On hyvä tapa päättää Javascript-komento puolipisteeseen. Sitä ei tarkalleen ottaen vaadita joka paikassa, mutta muissa ohjelmointikielissä se on yleensä pakollinen.</p>

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
 
