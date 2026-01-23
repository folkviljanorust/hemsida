
export type NewsItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  link?: string;
};

/**
 * News items for Folkviljan Orust website
 * 
 * HUR MAN LÄGGER TILL NYHETER:
 * 1. Skapa ett nytt objekt längst upp i listan (högst id-nummer)
 * 2. Fyll i:
 *    - title: Nyhetens rubrik
 *    - date: Datum i format "ÅÅÅÅ-MM-DD"
 *    - content: Kort innehåll/ingress för nyheten
 *    - link: Valfritt - du kan skapa en länk till en fördjupad nyhetssida
 * 
 * EXEMPEL:
 * {
 *   id: 4, // Använd alltid ett unikt id, högre än tidigare
 *   title: "Min nya nyhet",
 *   date: "2025-04-10",
 *   content: "Här är min senaste nyhet om Folkviljan Orust.",
 *   link: "/news/min-nya-nyhet" // Valfritt
 * }
 * 
 * OBS: De tre senaste nyheterna (baserat på datum) visas alltid på startsidan.
 * Alla nyheter visas på nyhetssidan.
 */
const newsItems: NewsItem[] = [
  {
    id: 3,
    title: "Orust kommuns framtida utveckling",
    date: "2025-03-15",
    content: "Läs mer om våra planer för kommunens utveckling under de kommande åren. Vi fokuserar på hållbar tillväxt och långsiktig ekonomisk stabilitet för att säkerställa en ljus framtid för alla invånare på Orust."
  },
  {
    id: 2,
    title: "Nya medlemmar välkomnas",
    date: "2025-03-28",
    content: "Förra månaden fick vi 15 nya medlemmar. Vi arrangerar en välkomstträff nästa vecka där vi kommer att presentera vår verksamhet och diskutera hur nya medlemmar kan engagera sig i kommunens utveckling."
  },
  {
    id: 1,
    title: "Årets budgetförslag",
    date: "2025-04-05",
    content: "Vi har nu lagt vårt förslag till budget för kommande år med fokus på hållbar utveckling och förbättrad ekonomi. Förslaget innehåller satsningar på infrastruktur, skola och äldreomsorg samtidigt som vi säkerställer ekonomisk hållbarhet."
  }
];

export default newsItems;
