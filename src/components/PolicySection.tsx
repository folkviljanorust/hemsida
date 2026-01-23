import React, { useEffect, useRef } from 'react';
import { Scale, BarChart3, Building, PiggyBank, Heart, Cpu, Home, BookOpen } from 'lucide-react';
import AnimatedUnderline from './AnimatedUnderline';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PrincipProgram = () => {
  return (
    <div className="text-folk-dark-purple max-h-[70vh] overflow-y-auto pr-2">
      <h3 className="text-xl font-bold mb-4">Frihet, Stark Ekonomi och Hållbar Tillväxt</h3>
      <p className="mb-4">Vi sträver efter att skapa ett Orust där frihet, stark ekonomi och hållbar tillväxt är grunden för en levande och blomstrande kommun. Vårt mål är att bygga en framtid där både invånare och företagare kan växa och trivas i harmoni med naturen och med minskad byråkrati.</p>
      
      <h3 className="text-xl font-bold mb-4">Personlig Frihet och Ansvar</h3>
      <p className="mb-4">Vi värdesätter individens frihet att forma sitt eget liv och ta ansvar för sina beslut. Orust ska vara en plats där människor kan leva utan onödiga begränsningar. Vi stödjer föreningslivet och ser gärna att lokalsamhällen och fritidsområden växer fram och omhändertas av dem som bor i området eller som delar ett gemensamt intresse.</p>
      
      <h3 className="text-xl font-bold mb-4">Hälsa och Välbefinnande för Alla</h3>
      <p className="mb-4">Vi prioriterar invånarnas hälsa som en grundpelare för en hög livskvalitet. Orust ska vara en plats där alla har tillgång till god vård och friskvård. Vi främjar initiativ som stärker både den fysiska och psykiska hälsan, genom att stödja lokala hälsoinitiativ, tillgång till gröna områden och aktiviteter som skapar gemenskap. Vår vision är en kommun där alla känner sig trygga och har möjlighet att leva ett aktivt och hälsosamt liv.</p>
      
      <h3 className="text-xl font-bold mb-4">Ekonomisk Hållbarhet och Ansvar</h3>
      <p className="mb-4">För oss handlar ekonomi om att ansvarsfullt förvalta resurser och maximera nyttan av de medel vi har. Vi sträver efter att vara varsamma med invånarnas pengar, prioritera bland investeringar och säkerställa att kommunens resurser används effektivt, utan att tumma på kvalitet eller hållbarhet. Ekonomisk tillväxt ska uppnås genom smart resursanvändning, inte genom ökade kostnader.</p>
      
      <h3 className="text-xl font-bold mb-4">Hållbar Utveckling och Tillväxt</h3>
      <p className="mb-4">Vi tror på en hållbar tillväxt som respekterar både människor och miljö. Det handlar om att skapa långsiktigt värde i allt vi gör, med minimal påverkan på vår omgivning. Vi vill att Orust växer på ett sätt som tar hänsyn till kommande generationer, där resurser används ansvarsfullt och miljön beaktas i varje beslut.</p>
      
      <h3 className="text-xl font-bold mb-4">Närhet till Medborgarna och Öppen Dialog</h3>
      <p className="mb-4">Vi vill ha en kommun där medborgarna känner sig hörda och involverade i beslutsprocesserna. Det innebär öppenhet och transparens, samt en nära dialog med medborgarna. Kommunens servicehus ska vara en social mötesplats där politiker träffar invånarna och invånarnas synpunkter aktivt beaktas i utvecklingen av vårt samhälle.</p>
      
      <h3 className="text-xl font-bold mb-4">Minskad Byråkrati och Ökad Effektivitet</h3>
      <p className="mb-4">Vi förespråkar en effektiv kommunal förvaltning som frigör resurser till de områden som är viktigast för invånarna. Genom digitalisering och förenklade processer kan vi minska den administrativa bördan och istället fokusera på mänsklig och personlig kontakt.</p>
      
      <h3 className="text-xl font-bold mb-4">Ansvar för Framtiden</h3>
      <p className="mb-4">Orust ska vara en kommun som tar sig an framtidens utmaningar med framåtanda och innovation. Vi vill se satsningar på hälsa, digitalisering och långsiktigt hållbara lösningar i allt vi gör, för att gynna både invånare och miljö.</p>
      
      <p className="mb-4">Tillsammans skapar vi en kommun där alla kan trivas och växa.</p>
      <p className="font-bold">Folkviljan Orust – Vi är med dig på resan!</p>
    </div>
  );
};

const PolitiskaMalsattningar = () => {
  return (
    <div className="text-folk-dark-purple max-h-[70vh] overflow-y-auto pr-2">
      <h3 className="text-xl font-bold mb-4">Folkviljan Orust – Frihet, Omtanke och Sund Ekonomi</h3>
      <p className="mb-4">
        Vår vision: Skapa ett Orust där frihet, omtanke om varandra och vår omgivning går hand i hand med sund ekonomi. 
        Vi vill bygga en framtid där alla kan trivas och växa – med mindre byråkrati, klokare ekonomiska beslut och en levande miljö för både boende och företagare där beslut grundas i sunt förnuft.
      </p>
      
      <h3 className="text-xl font-bold mb-4">Viktigaste punkterna:</h3>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Sans och balans: Folkviljan Orust är varken höger eller vänster, utan har en balanserad och jordnära inställning som grundar sig i hur verkligheten ser ut.</li>
        <li>Hållbar utveckling: Vi sträver efter att implementera miljövänliga och hållbara lösningar inom alla områden, särskilt inom energi, vattenförsörjning och avfallshantering.</li>
        <li>Ett företagsvänligt klimat: Genom att minska den administrativa bördan, taxor och avgifter samt skapa stöd för entreprenörer ska vi främja innovation och tillväxt.</li>
        <li>Bättre livskvalitet: Vi fokuserar på utbildning, hälsa och trygghet för att säkerställa en hög livskvalitet för alla invånare. Vi tror på valfriheten inom skolan och att elever på såväl kommunala som privata skolor ska ha samma förutsättningar.</li>
        <li>Digitalisering och optimering: Genom att automatisera processer och koordinera kommunala verksamheter samt gå med i AI Sweden och ta kloka beslut baserade på data, vill vi modernisera kommunens arbete genom minskad byråkrati och med snabbare ansökningsprocesser och mer tid till elever och vårdtagare som resultat.</li>
        <li>Stöd till lokalsamhället: Folkviljan Orust prioriterar insatser där kommunen stödjer föreningsliv, kultur och fritidsaktiviteter som kommer från invånarnas egna initiativ.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Ekonomi – Lägre skatter, starkare lokalt näringsliv</h3>
      <p className="mb-4">Vi satsar på en hållbar ekonomisk utveckling som gynnar både invånare och företagare. Genom lägre skattesats och stöd till lokala företag kan vi stärka Orusts ekonomi.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Skattesänkning: Lägre skatt än Göteborg och kranskommunerna. Genom att sänka skattesatsen under framförallt Göteborgs nivå kan vi attrahera fler att skriva sig på Orust, vilket leder till ökade skatteintäkter trots lägre skatt.</li>
        <li>Skuldsättning: Så snart som skattesänkingen är på en nivå där befolkningen ökar så ökar intäkterna för kommunen. Dessa ökade intäkter ska gå till att säkerställa bra skola och omsorg men i övrigt fokuseras på att minska kommunens skuldsättning som nu nått taket.</li>
        <li>Kostnadskontroll: Stoppa otyglade kostnadsökningar. Taxor, avgifter och budgetmedel ska inte öka mer än inflationen om det inte finns extraordinära skäl.</li>
        <li>Smart upphandling: Spara miljön och stötta den lokala ekonomin genom att gynna lokal upphandling, vilket ger färre transporter och fler lokala arbetstillfällen. Minska byråkratin för att göra det enklare för småföretagare att delta i upphandlingar.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Digitalisering och Innovation – Samarbete och optimering av kommunala tjänster</h3>
      <p className="mb-4">Vi sträver efter att göra Orust kommun mer effektiv och samordnad genom att investera i digitala lösningar. Detta inkluderar:</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Automation av kommunala processer: Identifiera och automatisera tidskrävande uppgifter för att frigöra resurser och förbättra servicen till invånarna.</li>
        <li>Samordning mellan verksamheter: Arbeta för att underlätta kommunikationen och samarbetet mellan olika kommunala enheter, vilket leder till mer effektiva och sammanhängande tjänster.</li>
        <li>Digital utveckling: Genom att gå med i initiativ som AI Sweden får kommunen tillgång till expertis och resurser för att utveckla och implementera digitala lösningar som kan förbättra beslutsfattande, minska den administrativa bördan och snabba på ansöknings- och beslutsprocesser.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Hälsa – Ett friskare Orust för alla</h3>
      <p className="mb-4">Folkviljan Orust prioriterar invånarnas hälsa som en grundpelare för ökad livskvalitet och långsiktig hållbarhet. Vi vill skapa en kommun där god hälsa är tillgänglig för alla och där vården är effektiv, mänsklig och personligt anpassad.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Höjt friskvårdsbidrag: Vi vill höja friskvårdsbidraget för att stötta kommunens anställda i att delta i hälsosamma aktiviteter, vilket stärker både hälsan och gemenskapen på Orust.</li>
        <li>Inför naturpromenader i äldreomsorgen: Låt vårdtagare få komma ut mer i naturen om så önskas.</li>
        <li>Friskvårdstimme: Ge våra anställda en friskvårdstimme varje vecka. Genom att ge möjligheten till promenader i naturen eller annan friskvårdsaktivitet under betald arbetstid, kan vi främja en aktiv och hälsosam livsstil. Det skapar inte bara en positiv arbetsmiljö, utan bidrar också till bättre hälsa och ökad trivsel.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Boende & Energi – Tillväxt med kvalitet i fokus</h3>
      <p className="mb-4">Vi vill se ett Orust där fler väljer att bosätta sig omgivna av en levande landsbygd.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Bygglovsprocessen: Snabba och smidiga bygglov ska prioriteras. Orust kommun är tyvärr ökända för att vara svåra med bygglov. Översiktsplan 2040 som fokuserar på och premierar de större tätorterna behöver ses över. Vi behöver undvika en demografisk kris genom att välkomna alla nya, produktiva invånare med öppna armar, oavsett om de vill bosätta sig på landsbygden eller i tätorter.</li>
        <li>Distansarbete: Orust kan locka fler distansarbetare som är en snabbt växande yrkeskategori, bland annat genom att tillhandahålla bostäder med närhet till natur, bra skolor och en levande landsbygd med ett rikt kultur- och fritidsliv.</li>
        <li>Energilösningar: Vi förespråkar hållbara och miljövänliga energikällor. Orust kan bidra till energisäkerheten genom att undersöka möjligheter till en fjärde generationens små modulära reaktorer (SMR) i samarbete med Tjörn och Stenungsund.</li>
        <li>Alternativ till vindkraft: Vi är emot såväl havs- som landbaserad vindkraft på grund av de negativa konsekvenserna för miljön och ekosystemet. Solcellstak över kommunens parkeringar, där det är lämpligt, är vårt förslag till en kortsiktig lösning för ökad självförsörjning.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Vatten, Avlopp & Renhållning- Hållbara och effektiva lösningar för vatten och avlopp</h3>
      <p className="mb-4">Vi förespråkar hållbara och miljövänliga lösningar som fungerar både för miljön och för våra invånare. Genom att satsa på decentraliserade lösningar för avlopp, och samtidigt tillåta effektiva reningsmetoder och låta vattnet stanna på plats, kan vi minska belastningen på både naturen och de kommunala systemen.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Tillåt trekammarbrunnar och liknande lösningar: Inför lättnader i reglerna för trekammarbrunnar och andra lösningar som effektivt renar vattnet innan det återgår till naturen, istället för att enbart tillåta slutna tankar som kräver dyr och onödig transport av vatten på våra vägar.</li>
        <li>Minska behovet av kommunalt avloppssystem: Genom att satsa på lokala avloppslösningar minskar vi kostnaden för både invånare och kommunen. Det ger också invånarna större frihet att bygga där kommunalt avlopp inte är tillgängligt. Låt vatten filtreras på ön i högre grad istället för att avloppsvatten, med alla rester som inte kan renas, skickas ut i havet.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Fritid – Stöd till föreningslivet</h3>
      <p className="mb-4">Vi ser fritiden som en grundsten för gemenskap och välmående på Orust. Ett rikt föreningsliv och meningsfulla aktiviteter gör vår kommun levande och aktiv.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Stöd till föreningslivet: Fortsätt stötta civilsamhället ekonomiskt, då de är en viktig del av samhället. Vi kan öka bidrag till fritidsföreningar samt underlätta genom enklare ansökningsprocesser.</li>
        <li>Upprustning och utveckling: Vi stödjer en upprustning av vandringsleder och mötesplatser samt kulturen genom att stötta lokala initiativ och evenemang.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Företagande – Enkelt att starta och driva företag på Orust</h3>
      <p className="mb-4">Vi vill göra Orust till en företagarvänlig kommun med minimalt krångel och goda etableringsmöjligheter.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Företagsvänlig kommun: Minska den administrativa bördan för företagare genom att automatisera och optimera tillstånds- och ansökningsprocesser. Detta minskar kostnaderna för både företagare och kommunen.</li>
        <li>Snabbare beslut: Kortare handläggningstider för olika företagstillstånd och bygglov skapar ett företagsklimat där det är enklare att starta och utveckla företag.</li>
        <li>Etablering längs huvudvägar: Säkra attraktiva etableringsmöjligheter för företag längs väg 160 och 178 för ökad tillgänglighet och synlighet, vilket också minskar trafiktrycket på mindre vägar.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Skola & Omsorg – Kvalitet och trygghet för alla åldrar</h3>
      <p className="mb-4">Orust ska vara en plats där alla, från barn till äldre, får den bästa möjliga vården och utbildningen.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Ökad lärartäthet och kvalitet: Genom att erbjuda konkurrenskraftiga löner och bättre arbetsmiljö kan vi attrahera bättre lärare och öka lärartätheten. Satsningar på fortbildning för befintliga lärare höjer också skolans kvalitet.</li>
        <li>Extraundervisning: Vi stödjer program för läxhjälp och extraundervisning efter skolan för elever som behöver extra stöd, för att säkerställa att alla når behörighet till gymnasiet.</li>
        <li>Äldreomsorg med mer medbestämmande: Låt personalen vara delaktiga i beslut kring scheman och verksamhetens utformning. Det leder till bättre arbetsmiljö och ökad kvalitet i omsorgen.</li>
        <li>Aktiva pensionärer: Öka antalet utflykter och aktiviteter för pensionärer för att främja välbefinnande och hälsa.</li>
      </ul>
      
      <hr className="my-6 border-folk-purple" />
      
      <h3 className="text-xl font-bold mb-4">Vägar & Transport – Bättre kommunikationer för en levande ö</h3>
      <p className="mb-4">Effektiva och hållbara transportlösningar gör Orust till en mer sammanlänkad och tillgänglig kommun.</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Bro i Svanesund: Vi fortsätter driva frågan om att bygga en bro i Svanesund för att förbättra kommunikationerna med fastlandet och korta restiderna.</li>
        <li>Cykelvägar och gångstråk: Tillämpa sunt förnuft vid etablering där det behövs och är ekonomiskt möjligt. Cykelvägar gynnar turismen och underlättar för kommunens invånare men kan inte byggas till ohållbart höga kostnader.</li>
        <li>Anropsstyrd trafik: Inför anropsstyrd kollektivtrafik för att underlätta för invånarna att resa flexibelt och på tider då ordinarie kollektivtrafik inte är tillgänglig.</li>
        <li>Fler bussar: Öka antalet turer till och från de vanligaste pendlings- och besöksdestinationerna.</li>
        <li>Skolskjuts: Lika rätt till skolskjuts och busskort oavsett om eleven går på en kommunal eller privat skola.</li>
      </ul>
    </div>
  );
};

const policies = [
  {
    title: "Personlig frihet och ansvar",
    description: "Vi värdesätter individens frihet att forma sitt eget liv och ta ansvar för sina beslut. Orust ska vara en plats där människor kan leva utan onödiga begränsningar.",
    icon: Scale,
    delay: 0
  },
  {
    title: "Ekonomisk hållbarhet",
    description: "Vi sträver efter att ansvarsfullt förvalta resurser och maximera nyttan av de medel vi har. Skattesänkning och ansvarsfull investeringsstrategi för en stark kommunekonomi.",
    icon: PiggyBank,
    delay: 150
  },
  {
    title: "Hälsa och välbefinnande",
    description: "Vi prioriterar invånarnas hälsa som en grundpelare för livskvalitet. Genom friskvårdsbidrag, naturpromenader i äldreomsorgen och aktiv livsstil främjar vi hälsa för alla åldrar.",
    icon: Heart,
    delay: 300
  },
  {
    title: "Digitalisering och innovation",
    description: "Genom att automatisera processer och samordna kommunala verksamheter vill vi modernisera kommunens arbete och minska onödig byråkrati.",
    icon: Cpu,
    delay: 450
  },
  {
    title: "Boende",
    description: "Vi vill se ett Orust där fler väljer att bosätta sig genom snabbare bygglovsprocesser och som är mer tillåtande till att bygga utanför tätorterna för att bevara och utveckla en levande landsbygd.",
    icon: Home,
    delay: 0
  },
  {
    title: "Skola och omsorg",
    description: "Vi satsar på ökad lärartäthet och kvalitet i skolan, samt en äldreomsorg där både personal och vårdtagare får större medbestämmande.",
    icon: BookOpen,
    delay: 150
  },
  {
    title: "Företagsvänligt klimat",
    description: "Genom att minska den administrativa bördan och sänka taxor och avgifter stödjer vi företagandet, vi vill helt enkelt göra det enklare och billigare att starta och driva företag på Orust.",
    icon: Building,
    delay: 300
  },
  {
    title: "Datadriven politik",
    description: "Våra beslut grundas i fakta och sunt förnuft, inte enbart i ideologier. Vi använder statistik och utvärdering för att hitta de mest effektiva lösningarna.",
    icon: BarChart3,
    delay: 450
  }
];

const PolicySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observe section for scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach(el => observer.observe(el));

    return () => {
      animElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="policy" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 rounded-full bg-folk-lavender text-folk-dark-purple text-sm font-medium mb-4">
            Vår politik
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">
            Sund politik för ett starkare Orust
          </h2>
          <div className="w-24 mx-auto mb-6">
            <AnimatedUnderline className="bg-folk-purple" />
          </div>
          <p className="text-lg text-folk-purple max-w-3xl mx-auto text-balance mb-8">
            Folkviljan Orust står för ansvarsfull politik som sätter kommunens långsiktiga välstånd i första rummet, med fokus på frihet, stark ekonomi och hållbar tillväxt.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-folk-purple hover:bg-folk-dark-purple text-white transition-colors duration-300">
                  Principprogram
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-folk-dark-purple">Principprogram</DialogTitle>
                </DialogHeader>
                <PrincipProgram />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-transparent text-folk-dark-purple border-folk-dark-purple hover:bg-white hover:text-folk-dark-purple transition-colors duration-300">
                  Politiska målsättningar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-folk-dark-purple">Politiska målsättningar</DialogTitle>
                </DialogHeader>
                <PolitiskaMalsattningar />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.slice(0, 4).map((policy, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-folk-lavender bg-opacity-50 hover:bg-opacity-100 p-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              style={{ transitionDelay: `${policy.delay}ms` }}
            >
              <div className="p-4 bg-white rounded-lg inline-block mb-6">
                <policy.icon className="w-8 h-8 text-folk-purple" />
              </div>
              <h3 className="text-xl font-semibold text-folk-dark-purple mb-3">{policy.title}</h3>
              <p className="text-folk-purple">{policy.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {policies.slice(4, 8).map((policy, index) => (
            <div 
              key={index + 4} 
              className="animate-on-scroll bg-folk-lavender bg-opacity-50 hover:bg-opacity-100 p-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              style={{ transitionDelay: `${policy.delay}ms` }}
            >
              <div className="p-4 bg-white rounded-lg inline-block mb-6">
                <policy.icon className="w-8 h-8 text-folk-purple" />
              </div>
              <h3 className="text-xl font-semibold text-folk-dark-purple mb-3">{policy.title}</h3>
              <p className="text-folk-purple">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
