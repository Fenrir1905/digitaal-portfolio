import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "BUUT Android applicatie",
    description: "Mobiele applicatie ontwikkeld als schoolproject voor een kleine vzw die een gelimiteerd aantal bootjes verhuurt. Gebruikers konden bootjes reserveren via tijdsloten, waarbij rekening werd gehouden met een gelijkmatig gebruik van de bootbatterijen. Administrators hadden toegang tot een overzicht van alle reservaties en konden deze aanpassen. Authenticatie werd voorzien via Auth0.",
    technologies: ["Kotlin", "Retrofit", "MongoDB", "Auth0", "Jira"],
    type: "Schoolproject in een team van 7 plus 4 studenten van de specialisatie netwerken (voor het Ops deel)",
    learnings: "Leren werken met Android development in Kotlin, REST API met Retrofit en het integreren van externe authenticatie via Auth0. Ook moesten we als team volledig scrum werken (met Jira) en elke 2 weken was iemand anders de product owner. Die moest de scrum 'beheren' en bepalen wat er zou gebeuren die sprint.",
    challenges: "Het correct beheren van reservatielogica en batterijgebruik, alsook het implementeren van rolgebaseerde toegang voor administrators. Verder was het voorzien van een offline modus zodat gebruikers hun reservaties kunnen bekijken zonder internetverbinding ook uitdagend. Als laatste was Kotlin grotendeels zelfstudie omdat we voor het project nog nooit met Kotlin gewerkt hadden. We kregen elke week info over wat de juiste manier van werken is en hoe we bepaalde belangrijke zaken moesten implementeren.",
    shortdescription: "Android applicatie voor het reserveren van bootjes met adminfunctionaliteiten."
  },
  {
    id: 2,
    title: "BUUT webapplicatie",
    description: "Fullstack webapplicatie ontwikkeld als schoolproject voor dezelfde vzw als de Android applicatie. Gebruikers konden bootjes reserveren via tijdsloten, terwijl administrators een overzicht hadden van alle reservaties en deze konden beheren. De applicatie werd opgebouwd met een Blazor WASM frontend en een .NET backend, met Auth0 voor authenticatie.",
    technologies: ["C#/.NET", "Blazor WASM", "MongoDB", "Auth0", "Jira"],
    type: "Schoolproject in een team van 7 plus 4 studenten van de specialisatie netwerken (voor het Ops deel)",
    learnings: "Ervaring opgedaan met fullstack development in .NET, Blazor WASM en het beveiligen van een applicatie met Auth0. Ook moesten we als team volledig scrum werken (met Jira) en elke 2 weken was er iemand anders de product owner. Die moest de scrum 'beheren' en bepalen wat er zou gebeuren die sprint.",
    challenges: "Het correct opzetten van authentication en authorization met Auth0. Daarnaast was C# en Blazor grotendeels zelfstudie, we kregen elke week info over wat de juiste manier van werken is en hoe we bepaalde belangrijke zaken moesten implementeren maar voor het project hadden we nog niet met C# en Blazor gewerkt.",
    shortdescription: "Fullstack webapplicatie voor bootreserveringen met adminbeheer."
  },
  {
    id: 3,
    title: "Festival applicatie",
    description: "Fullstack webapplicatie ontwikkeld als schoolproject voor een fictief festival. Gebruikers konden zich registreren, inloggen en tickets aankopen. Administrators hadden toegang tot een overzicht van verkochte tickets en konden deze beheren.",
    technologies: ["Java Spring Boot", "Thymeleaf", "Maven", "Apache Tomcat"],
    type: "Schoolproject (zelfstandig)",
    learnings: "Inzicht gekregen in Java Spring Boot met Thymeleaf en het deployen van applicaties op Apache Tomcat.",
    challenges: "Het correct implementeren van gebruikersauthenticatie en het beheren van ticketstatussen. Persoonlijk was werken in Java Spring Boot uitdagend, ik had tijdens het project wat moeilijkheden met authenticatie en autorisatie.",
    shortdescription: "Webapplicatie voor ticketverkoop met adminoverzicht."
  },
  {
    id: 4,
    title: "Ordermanagement webapplicatie",
    description: "Fullstack webapplicatie ontwikkeld in teamverband (5 personen) als schoolproject. De applicatie liet leveranciers toe om orders met verschillende statussen te beheren, terwijl klanten bestellingen konden plaatsen via een gebruiksvriendelijke interface.",
    technologies: ["Java", "JavaFX", "REST API", "MySQL", "JavaScript", "React", "Bootstrap", "JWT"],
    type: "Schoolproject in een team van 5",
    learnings: "Samenwerken in teamverband, werken met JWT-authenticatie en het ontwikkelen van een REST API gekoppeld aan een moderne frontend. Verder was dit mijn eerste grotere project, waardoor het zoeken was naar een goede projectstructuur en aanpak. Daarnaast hebben ik leren werken met (beperkte) scrum.",
    challenges: "Het afstemmen van frontend en backend binnen een team en de eerste keer (beperkt) werken via scrum.",
    shortdescription: "Ordermanagement applicatie voor leveranciers en klanten."
  },
  {
    id: 5,
    title: "Reservatie webapplicatie",
    description: "Fullstack webapplicatie ontwikkeld als schoolproject voor het beheren van restaurantreservaties. Klanten konden reservaties plaatsen, terwijl beheerders een overzicht hadden van alle boekingen.",
    technologies: ["TypeScript", "React", "Bootstrap", "NodeJS", "Koa", "MySQL", "REST API"],
    type: "Schoolproject (zelfstandig)",
    learnings: "Ervaring opgedaan met TypeScript, NodeJS en het bouwen van REST API’s met Koa. Daarnaast was het ook mijn eerste REST API met een zelfgebouwde frontend.",
    challenges: "Het correct valideren van reservaties en het structureren van een schaalbare backend. Verder was het wat uitzoeken hoe authorisatie en authenticatie correct geïmplementeerd moest worden.",
    shortdescription: "Webapplicatie voor restaurantreservaties."
  },
  {
    id: 6,
    title: "Splendor",
    description: "Digitale versie van het bordspel Splendor, ontwikkeld als schoolproject in teamverband. Het spel werd gebouwd met Java en JavaFX en bevatte een persistente opslag van spelgegevens.",
    technologies: ["Java", "JavaFX", "MySQL"],
    type: "Schoolproject in een team van 4",
    learnings: "Objectgeoriënteerd programmeren toepassen in een project en werken met JavaFX voor desktopapplicaties. Dit was mijn eerste schoolproject en mijn eerste project in teamverband.",
    challenges: "Het correct omzetten van de spelregels naar code en het synchroniseren van spelstatussen.",
    shortdescription: "Digitale versie van het bordspel Splendor."
  }
];
