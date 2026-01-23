import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AnimatedUnderline from './AnimatedUnderline';

const newsItems = [
  {
    id: 1,
    date: "2025-03-11",
    title: "STOPPA ORIMLIGA AVGIFTSHÖJNINGAR!",
    content: `Nu vill kommunen höja avgiften för sophämtning – och inte lite heller! 🚨

🏡 +24% för vanliga hushåll
🏢 +130% för företag

Folkviljan Orust, genom @MichaelRelfsson accepterade varken i kommunfullmäktige eller kommunstyrelsen att kommunen chockhöjer avgifterna långt över inflationen.

Vi kräver en tydligt motiverad och dokumenterad förklaring på varför en så stor höjning behövs!

Vi anser att höjningar inte ska överstiga inflationsindex (ca 2%) om det inte finns extremt starka skäl. Orustborna ska inte bli mjölkkossor för kommunens ekonomi! 🛑`
  },
  {
    id: 2,
    date: "2024-11-27",
    title: "Folkviljan slår larm – Orust är i akut behov av sunt förnuft och politiker som representerar folket!",
    content: `Orust står vid ett vägskäl. Under tre decennier har kommunen prioriterat politiken från Stockholm och Bryssel framför verkligheten här hemma...

Resultatet? Stagnerad befolkningstillväxt, en åldrande befolkning och en landsbygd som kvävs. Vi är 15 000 invånare – lika många som på 90-talet – men skillnaden är att vi nu står inför en demografisk kris: allt färre ska försörja allt fler.

Byråkratin har vuxit i snabb takt. Förvaltningen lägger ständigt nya och högre taxor på våra småföretagare och invånare, samtidigt som kommunens skulder nästan har dubblerats på bara några år. Ingen tänker på framtiden, på hur kommande generationer ska hantera det skuldberg som växer år för år. Är detta verkligen den framtid vi vill skapa för kommande generationer?

Det är dags att sätta ner foten. Orust behöver återgå till sunt förnuft och lyssna på invånarnas vilja! Politiken har alltför länge styrts av idéer långt bort från vår verklighet. Nu behövs riktiga förändringar med fokus på vad som är bäst för Orust.

Folkviljan föreslår fem förändringar för att vända trenden:

🚀 Sänk kommunalskatten
Orust har en av landets högsta kommunalskatter. Det gör att många som bor här inte ens är skrivna här. Majoriteten som styr vill sänka skatten men har inte förstått att den måste sänkas under Göteborgs nivå så vi kan locka till oss fler skattebetalare och på så sätt öka skatteintäkterna trots att vi har en lägre skattesats. Att locka fler att skriva sig här är lågt hängande frukt för att få igång tillväxten. Det är hög tid att vi tar vårt förnuft till fånga och plockar den - ju förr desto bättre.

🍀 Stoppa Översiktsplan 2040
Den plan som nu drivs igenom MOT invånarnas vilja riskerar att helt döda vår landsbygd. Familjer flyttar till Orust för naturen, tryggheten och livskvaliteten, inte för att bo i tätorter där efterfrågan är lägst enligt flyttmönsteranalyser. Vi behöver fler bygglov på landsbygden och en politik som lockar distansarbetare och småföretagare som vill bidra till Orusts framtid. Bygglovshandläggare ska skifta fokus från att neka bygglov till att göra sitt yttersta för att hjälpa folk att FÅ bygglov!

🥸 Skydda våra småföretagare från orimlig byråkrati
Våra lokala företag kämpar mot en byråkratisk apparat som debiterar skyhöga avgifter för inspektioner – ofta utan rimliga grunder. Folkviljan föreslår att tillsynsavgifter sänks från 1 370 kr per timme till 800 kr, och att varje timme specificeras och redovisas tydligt. Det är dags att stå upp för våra företagare och deras rättvisa möjligheter att växa. Orust är en av Sveriges sämsta kommuner enligt företagare, det är hög tid att vi ändrar den trenden.

🧑‍🔧 Bättre upphandlingar
Vi behöver sätta stopp för slöseri. Att bygga 450 meter cykelbana för 17 miljoner, eller flera hundra miljoner för att ordna med VA för några tusen hushåll är helt oacceptabelt. Vansinnet måste ta slut och upphandlingar ska överlag förenklas så att fler anbud ges och att fler lokala småföretag kan lägga anbud och gynnas av satsningar vi väljer att göra.

💸 Ansvarsfull ekonomi
Med ovanstående punkter kommer vi att få tillbaka tillväxt av både vår ekonomi och befolkning. Den våg av tillväxt kommer att ge klirr i kommunens kassa som ska användas för att betala av våra skulder så vi får en stark och resilient ekonomi.

Orust behöver krafttag för att vända trenden. Förvaltningen och den politiska majoritetens ovilja att se verkligheten och lyssna på folket riskerar att leda oss rakt in i en byråkratisk misär där kärnuppdrag som skola och omsorg blir lidande. Men det finns en annan väg – en väg av sunt förnuft, lokalt fokus och framtidstro.

Tillsammans kan vi vända utvecklingen. Låt Orust blomstra igen! 🌱`
  }
];

const RecentNews = () => {
  return (
    <div className="bg-folk-gray py-16 md:py-24" id="news">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">Aktuellt</h2>
          <div className="w-24 mx-auto mb-6">
            <AnimatedUnderline className="bg-folk-purple" />
          </div>
          <p className="text-lg text-folk-purple max-w-2xl mx-auto">
            Här hittar du de senaste nyheterna och uppdateringarna från Folkviljan Orust
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {newsItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="px-6 py-6 text-lg text-folk-purple border-folk-purple hover:bg-folk-lavender text-wrap h-auto"
                >
                  {item.title}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-folk-dark-purple">{item.title}</DialogTitle>
                </DialogHeader>
                <div className="text-folk-dark-purple max-h-[70vh] overflow-y-auto pr-2">
                  <p className="text-sm text-folk-purple mb-4">{item.date}</p>
                  <div className="whitespace-pre-line">{item.content}</div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
