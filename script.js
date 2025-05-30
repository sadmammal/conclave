/*
=========================================================================
JavaScript Logic
This section contains the JavaScript code to handle interactivity,
language switching, dark mode toggling, form validation, data
management, rendering lists, and interacting with modal dialogs.
=========================================================================
*/

// Translations object containing text for different languages
const translations = {
  en: {
    pageTitle: "Fantasy Conclave Vote",
    mainTitle: "Fantasy Conclave Vote",
    introText1:
      "Welcome to the Fantasy Conclave Vote! Cast your predictions for the next Pope and their chosen name.",
    introText2:
      "In Round 1, you will select *three* cardinals you believe are most likely to be elected. Your first pick is worth 5 points, your second 3 points, and your third 1 point, *if* that cardinal is eventually elected.",
    introText3:
      "In Round 2, you will select 5 names from a list of historical papal names. If the elected cardinal chooses one of your names, you get 10 points.",
    yourNameLabel: "Your Name:",
    round1Title: "Round 1: Pick Your Papabili (Top 3)",
    round1Instructions:
      "Click on the three cardinals you predict will be elected, in order of likelihood.",
    round1Points1: "1st Pick (first click): 5 points",
    round1Points2: "2nd Pick (second click): 3 points",
    round1Points3: "3rd Pick (third click): 1 point",
    round1Deselect: "Click a selected cardinal again to deselect them.",
    round2Title: "Round 2: Pick Your Papal Names",
    round2Instructions:
      "Select 5 names from the list below. If the eventual Pope chooses one of your names, you get 10 points.",
    round2Note: "Note: It includes Popes and Antipopes names.",
    submitButton: "Submit Your Picks",
    submissionOutputTitle: "Your Submission:",
    footerText: "May your chosen candidate be guided by divine wisdom.",
    confirmModalTitle: "Ready to Submit Your Ballot?",
    confirmModalPicksLabel:
      "You are about to submit the following cardinal picks:",
    confirmModalNamesLabel: "And these chosen papal names:",
    confirmButton: "Yes, Submit!",
    cancelButton: "Hold On, Let Me Check",
    resetButton: "Reset Ballot",
    leaningLabel: "Leaning:",
    keyIssuesLabel: "Key Issues:",
    clickToExpand: "(Click to expand)",
    clickToCollapse: "(Click to collapse)",
    synodalIssue: "Synodal Way:",
    womenIssue: "Women's Role:",
    sameSexIssue: "Same-Sex:",
    humanaeIssue: "Humanae Vitae:",
    marriageIssue: "Marriage:",
    stanceNotAvailable: "(Specific stance not readily available)",
    usedTimes: "Used {count} times",
    playerNameAlert: "Oops! Please enter your name before submitting.",
    round1LimitAlert:
      "Almost there! Please select exactly 3 cardinals for Round 1.",
    round2LimitAlert:
      "Just a few more! Please select exactly 5 papal names for Round 2.",
    submissionSuccessAlert:
      "Success! Your picks have been recorded. Good luck!",
    resetModalTitle: "Confirm Reset",
    resetModalMessage:
      "Are you sure you want to reset your ballot? This will clear all your current selections.",
    resetButtonOK: "Yes, Reset",
    resetButtonCancel: "No, Keep My Picks",
    validationModalTitle: "Just a heads-up!",
    okButton: "Got it!",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  es: {
    pageTitle: "Voto del Cónclave Fantástico",
    mainTitle: "Voto del Cónclave Fantástico",
    introText1:
      "¡Bienvenido al Voto del Cónclave Fantástico! Emite tus predicciones para el próximo Papa y el nombre que elegirá.",
    introText2:
      "En la Ronda 1, seleccionarás *tres* cardenales que crees que tienen más probabilidades de ser elegidos. Tu primera elección vale 5 puntos, la segunda 3 puntos y la tercera 1 punto, *si* ese cardenal es finalmente elegido.",
    introText3:
      "En la Ronda 2, seleccionarás 5 nombres de una lista de nombres papales históricos. Si el cardenal elegido elige uno de tus nombres, obtendrás 10 puntos.",
    yourNameLabel: "Tu nombre:",
    round1Title: "Ronda 1: Elige a tus papables (Top 3)",
    round1Instructions:
      "Haz clic en los tres cardenales que predices que serán elegidos, en orden de probabilidad.",
    round1Points1: "1ª Elección (primer clic): 5 puntos",
    round1Points2: "2ª Elección (segundo clic): 3 puntos",
    round1Points3: "3ª Elección (tercer clic): 1 punto",
    round1Deselect:
      "Haz clic de nuevo en un cardenal seleccionado para deseleccionarlo.",
    round2Title: "Ronda 2: Elige tus nombres papales",
    round2Instructions:
      "Selecciona 5 nombres de la lista a continuación. Si el eventual Papa elige uno de tus nombres, obtendrás 10 puntos.",
    round2Note: "Nota: Están incluidos los nombres de Papas y Antipapas.",
    submitButton: "Enviar mis elecciones",
    submissionOutputTitle: "Tu envío:",
    footerText: "Que tu candidato elegido sea guiado por la sabiduría divina.",
    confirmModalTitle: "¿Listo para enviar tu boleta?",
    confirmModalPicksLabel:
      "Estás a punto de enviar las siguientes elecciones de cardenales:",
    confirmModalNamesLabel: "Y estos nombres papales elegidos:",
    confirmButton: "¡Sí, enviar!",
    cancelButton: "Espera, déjame revisar",
    resetButton: "Reiniciar boleta",
    leaningLabel: "Postura percibida:",
    keyIssuesLabel: "Temas clave:",
    clickToExpand: "(Haz clic para expandir)",
    clickToCollapse: "(Haz clic para contraer)",
    synodalIssue: "Camino Sinodal:",
    womenIssue: "Rol de la Mujer:",
    sameSexIssue: "Relaciones del mismo sexo:",
    humanaeIssue: "Humanae Vitae:",
    marriageIssue: "Divorcio:",
    stanceNotAvailable: "(Postura específica no disponible)",
    usedTimes: "Usado {count} veces",
    playerNameAlert: "¡Uy! Por favor, introduce tu nombre antes de enviar.",
    round1LimitAlert:
      "¡Casi listo! Por favor, selecciona exactamente 3 cardenales para la Ronda 1.",
    round2LimitAlert:
      "¡Solo un poco más! Por favor, selecciona exactamente 5 nombres papales para la Ronda 2.",
    submissionSuccessAlert:
      "¡Éxito! Tus elecciones han sido registradas. ¡Buena suerte!",
    resetModalTitle: "Confirmar reinicio",
    resetModalMessage:
      "¿Estás seguro de que quieres reiniciar tu boleta? Esto borrará todas tus selecciones actuales.",
    resetButtonOK: "Sí, reiniciar",
    resetButtonCancel: "No, mantener mis elecciones",
    validationModalTitle: "¡Solo un aviso!",
    okButton: "¡Entendido!",
    darkMode: "Modo oscuro",
    lightMode: "Modo claro",
  },
};

// Current language state variable
let currentLang = "en"; // Default language

// Data for cardinals and papal names
const cardinals = [
  {
    id: "cardinal_ambongo",
    name: {
      en: "Cardinal Fridolin Ambongo Besungu",
      es: "Cardenal Fridolin Ambongo Besungu",
    },
    flag: "🇨🇩",
    age: 65,
    role: {
      en: "Archbishop of Kinshasa. President of SECAM. Member of the Council of Cardinals.",
      es: "Arzobispo de Kinshasa. Presidente de SECAM. Miembro del Consejo de Cardenales.",
    },
    country: {
      en: "Democratic Republic of Congo",
      es: "República Democrática del Congo",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      sameSex: {
        en: 'Opposes blessings for same-sex marriage, stating they are "contradictory to cultural norms and intrinsically evil".',
        es: 'Se opone a las bendiciones para el matrimonio entre personas del mismo sexo, afirmando que son "contradictorias a las normas culturales e intrínsecamente malas".',
      },
      humanae: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Culturally Conservative.",
      es: "Culturalmente Conservador.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FF5733/ffffff?text=Ambongo", // Different placeholder
  },
  {
    id: "cardinal_arborelius",
    name: {
      en: "Cardinal Anders Arborelius",
      es: "Cardenal Anders Arborelius",
    },
    flag: "🇸🇪",
    age: 75,
    role: {
      en: "Bishop of Stockholm. First Swedish cardinal.",
      es: "Obispo de Estocolmo. Primer cardenal sueco.", // Corrected 'Estocolm' to 'Estocolmo'
    },
    country: {
      en: "Sweden",
      es: "Suecia",
    },
    keyIssues: {
      synodal: {
        en: "Critical of the German Synodal Way.",
        es: "Crítico del Camino Sinodal alemán.",
      },
      women: {
        en: "Opposes women's ordination/deacons.",
        es: "Se opone a la ordenación/diaconado de mujeres.",
      },
      sameSex: {
        en: "Opposes same-sex blessings.",
        es: "Se opone a las bendiciones para personas del mismo sexo.",
      },
      humanae: {
        en: "Orthodox on doctrine (implies upholding).",
        es: "Ortodoxo en doctrina (implica defenderla).",
      },
      marriage: {
        en: "Orthodox on doctrine (implies upholding traditional teaching).",
        es: "Ortodoxo en doctrina (implica defender la enseñanza tradicional).",
      },
    },
    leaning: {
      en: "Orthodox on doctrine, supports Francis on migration/environment.",
      es: "Ortodoxo en doctrina, apoya a Francisco en migración/medio ambiente.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/33FF57/ffffff?text=Arborelius", // Different placeholder
  },
  {
    id: "cardinal_aveline",
    name: {
      en: "Cardinal Jean-Marc Aveline",
      es: "Cardenal Jean-Marc Aveline",
    },
    flag: "🇫🇷",
    age: 66,
    role: {
      en: "Archbishop of Marseille.",
      es: "Arzobispo de Marsella.",
    },
    country: {
      en: "France",
      es: "Francia",
    },
    keyIssues: {
      synodal: {
        en: "Elected member of the Ordinary Council of the General Secretariat of the Synod of Bishops (indicates involvement).",
        es: "Miembro electo del Consejo Ordinario de la Secretaría General del Sínodo de los Obispos (indica participación).",
      },
      women: {
        en: "Openness to women deacons mentioned (requires verification).",
        es: "Mencionada apertura al diaconado femenino (requiere verificación).",
      },
      sameSex: {
        en: "Ambiguous stance on blessing same-sex couples mentioned (requires verification).",
        es: "Mencionada postura ambigua sobre la bendición de parejas del mismo sexo (requiere verificación).",
      },
      humanae: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Seen as liberal/progressive, inclined to consensus, close to Pope Francis.",
      es: "Visto como liberal/progresista, inclinado al consenso, cercano al Papa Francisco.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/5733FF/ffffff?text=Aveline", // Different placeholder
  },
  {
    id: "cardinal_bagnasco",
    name: {
      en: "Cardinal Angelo Bagnasco",
      es: "Cardenal Angelo Bagnasco",
    },
    flag: "🇮🇹",
    age: 82, // Not eligible to vote
    role: {
      en: "Archbishop Emeritus of Genoa. Formerly President of the Italian Episcopal Conference.",
      es: "Arzobispo Emérito de Génova. Anteriormente Presidente de la Conferencia Episcopal Italiana.",
    },
    country: {
      en: "Italy",
      es: "Italia",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "Opposes ordaining women as deacons.",
        es: "Se opone a ordenar mujeres como diáconos.",
      },
      sameSex: {
        en: "Strong opposition to gay rights and same-sex unions.",
        es: "Fuerte oposición a los derechos homosexuales y uniones del mismo sexo.",
      },
      humanae: {
        en: "Strong opposition to abortion (implies upholding).",
        es: "Fuerte oposición al aborto (implica defenderla).",
      },
      marriage: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
    },
    leaning: {
      en: "Conservative.",
      es: "Conservador.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FF33A1/ffffff?text=Bagnasco", // Different placeholder
  },
  {
    id: "cardinal_bo",
    name: {
      en: "Cardinal Charles Maung Bo",
      es: "Cardenal Charles Maung Bo",
    },
    flag: "🇲🇲",
    age: 76,
    role: {
      en: "Archbishop of Yangon. President of FABC.",
      es: "Arzobispo de Yangon. Presidente de FABC.",
    },
    country: {
      en: "Myanmar",
      es: "Myanmar",
    },
    keyIssues: {
      synodal: {
        en: "Endorsed Francis' Synod on Synodality.",
        es: "Respaldó el Sínodo sobre la Sinodalidad de Francisco.",
      },
      women: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      sameSex: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      humanae: {
        en: "Defends the Catholic Church's opposition to abortion and contraception.",
        es: "Defiende la oposición de la Iglesia Católica al aborto y la anticoncepción.",
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Generally aligned with Pope Francis on social justice and dialogue.",
      es: "Generalmente alineado con el Papa Francisco en justicia social y diálogo.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/33A1FF/ffffff?text=Bo", // Different placeholder
  },
  {
    id: "cardinal_brislin",
    name: {
      en: "Cardinal Stephen Brislin",
      es: "Cardenal Stephen Brislin",
    },
    flag: "🇿🇦",
    age: 68,
    role: {
      en: "Archbishop of Johannesburg. Formerly Archbishop of Cape Town.",
      es: "Arzobispo de Johannesburgo. Anteriormente Arzobispo de Ciudad del Cabo.",
    },
    country: {
      en: "South Africa",
      es: "Sudáfrica",
    },
    keyIssues: {
      synodal: {
        en: "Contribution mentioned embracing change while holding tradition.",
        es: "Mencionada contribución que abraza el cambio manteniendo la tradición.",
      },
      women: {
        en: "Reaffirmed prohibition against women's ordination but allowed a dissident group supporting women priests in his diocese.",
        es: "Reafirmó la prohibición contra la ordenación de mujeres pero permitió un grupo disidente que apoya a mujeres sacerdotes en su diócesis.", // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "Supported <em>Fiducia Supplicans</em>, emphasizing the union isn't blessed and chastity.",
        es: "Apoyó <em>Fiducia Supplicans</em>, enfatizando que la unión no es bendecida y la castidad.",
      },
      humanae: {
        en: "(Specific stance not readily available, but addresses social issues with a 'seamless garment' approach).",
        es: "(Postura específica no disponible, pero aborda temas sociales con un enfoque de 'tejido sin costuras').", // Corrected 'but' to 'pero'
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Seen on the classically liberal wing, committed to social issues.",
      es: "Visto en el ala clásicamente liberal, comprometido con los temas sociales.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/AA33FF/ffffff?text=Brislin", // Different placeholder
  },
  {
    id: "cardinal_burke",
    name: {
      en: "Cardinal Raymond Leo Burke",
      es: "Cardenal Raymond Leo Burke",
    },
    flag: "🇺🇸",
    age: 76,
    role: {
      en: "Cardinal Patron Emeritus of the Sovereign Military Order of Malta. Formerly Prefect of the Apostolic Signatura.",
      es: "Cardenal Patrono Emérito de la Soberana Orden Militar de Malta. Anteriormente Prefecto de la Signatura Apostólica.",
    },
    country: {
      en: "USA",
      es: "EE. UU.",
    },
    keyIssues: {
      synodal: {
        en: "Generally critical of perceived deviations from tradition.",
        es: "Generalmente crítico de las desviaciones percibidas de la tradición.",
      },
      women: {
        en: "Hard line against changes to the role of women.",
        es: "Línea dura contra los cambios en el papel de la mujer.",
      },
      sameSex: {
        en: "Hard line against softening policy towards LGBTQ people.",
        es: "Línea dura contra la flexibilización de la política hacia las personas LGBTQ.",
      },
      humanae: {
        en: "Strong defender of traditional doctrine (implies upholding).",
        es: "Firme defensor de la doctrina tradicional (implica defenderla).",
      },
      marriage: {
        en: "Hard line against relaxing attitudes towards divorced and remarried receiving communion.",
        es: "Línea dura contra la relajación de las actitudes hacia los divorciados y vueltos a casar que reciben la comunión.",
      },
    },
    leaning: {
      en: "Highly Conservative/Traditionalist.",
      es: "Altamente Conservador/Tradicionalista.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FF3333/ffffff?text=Burke", // Different placeholder
  },
  {
    id: "cardinal_eijk",
    name: {
      en: "Cardinal Willem Jacobus Eijk",
      es: "Cardenal Willem Jacobus Eijk",
    },
    flag: "🇳🇱",
    age: 71,
    role: {
      en: "Archbishop of Utrecht.",
      es: "Arzobispo de Utrecht.",
    },
    country: {
      en: "Netherlands",
      es: "Países Bajos",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
      women: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
      humanae: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
      marriage: {
        en: "(Specific stance not readily available, but generally conservative).",
        es: "(Postura específica no disponible, pero generalmente conservador).", // Corrected 'but' to 'pero'
      },
    },
    leaning: {
      en: "Conservative.",
      es: "Conservador.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/33FFD1/ffffff?text=Eijk", // Different placeholder
  },
  {
    id: "cardinal_erdo",
    name: {
      en: "Cardinal Péter Erdő",
      es: "Cardenal Péter Erdő",
    },
    flag: "🇭🇺",
    age: 72,
    role: {
      en: "Archbishop of Esztergom-Budapest. Primate of Hungary. Canon lawyer.",
      es: "Arzobispo de Esztergom-Budapest. Primado de Hungría. Canonista.",
    },
    country: {
      en: "Hungary",
      es: "Hungría",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available, but focus on canon law might suggest caution).",
        es: "(Postura específica no disponible, pero el enfoque en el derecho canónico podría sugerir cautela).", // Corrected 'but' to 'pero'
      },
      women: {
        en: "Opposed to ordaining women as deacons.",
        es: "Opuesto a ordenar mujeres como diáconos.",
      },
      sameSex: {
        en: "Firmly against the acceptance of homosexual unions, but favors pastoral support.",
        es: "Firmemente en contra de la aceptación de uniones homosexuales, pero favorece el apoyo pastoral.", // Corrected 'but' to 'pero'
      },
      humanae: {
        en: "Strongly pro-life (implies upholding Humanae Vitae).",
        es: "Fuertemente pro-vida (implica defender Humanae Vitae).",
      },
      marriage: {
        en: "Against divorced Catholics receiving communion, in favor of pastoral accompaniment only if indissolubility is clear.",
        es: "En contra de que los católicos divorciados reciban la comunión, a favor del acompañamiento pastoral solo si la indisolubilidad es clara.",
      },
    },
    leaning: {
      en: "Seen as a staunch conservative, but pragmatic.",
      es: "Visto como un conservador acérrimo, pero pragmático.", // Corrected 'but' to 'pero'
    },
    createdBy: {
      en: "Pope John Paul II",
      es: "Papa Juan Pablo II", // Corrected 'Juan Paul II'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FFC300/ffffff?text=Erdo", // Different placeholder
  },
  {
    id: "cardinal_filoni",
    name: {
      en: "Cardinal Fernando Filoni",
      es: "Cardenal Fernando Filoni",
    },
    flag: "🇮🇹",
    age: 79,
    role: {
      en: "Grand Master of the Equestrian Order of the Holy Sepulchre of Jerusalem. Formerly Prefect of the Congregation for the Evangelization of Peoples.",
      es: "Gran Maestre de la Orden Ecuestre del Santo Sepulcro de Jerusalén. Anteriormente Prefecto de la Congregación para la Evangelización de los Pueblos.",
    },
    country: {
      en: "Italy",
      es: "Italia",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      sameSex: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      humanae: {
        en: "Orthodox understanding of sacraments and Church mission (implies upholding traditional teaching).",
        es: "Comprensión ortodoxa de los sacramentos y la misión de la Iglesia (implica defender la enseñanza tradicional).",
      },
      marriage: {
        en: "Orthodox understanding of sacraments and Church mission (implies upholding traditional teaching).",
        es: "Comprensión ortodoxa de los sacramentos y la misión de la Iglesia (implica defender la enseñanza tradicional).",
      },
    },
    leaning: {
      en: "Generally seen as orthodox, with extensive diplomatic and Curia experience.",
      es: "Generalmente visto como ortodoxo, con amplia experiencia diplomática y en la Curia.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/C70039/ffffff?text=Filoni", // Different placeholder
  },
  {
    id: "cardinal_koch",
    name: {
      en: "Cardinal Kurt Koch",
      es: "Cardenal Kurt Koch",
    },
    flag: "🇨🇭",
    age: 75,
    role: {
      en: "Prefect of the Dicastery for Promoting Christian Unity.",
      es: "Prefecto del Dicasterio para la Promoción de la Unidad de los Cristianos.",
    },
    country: {
      en: "Switzerland",
      es: "Suiza",
    },
    keyIssues: {
      synodal: {
        en: "Sees synodality as having an old tradition, believes primacy must be exercised synodally.",
        es: "Ve la sinodalidad como una tradición antigua, cree que el primado debe ejercerse sinodalmente.",
      },
      women: {
        en: 'Previously said female priesthood is "desirable" but later stated sacramental priesthood is linked to the male sex.',
        es: 'Anteriormente dijo que el sacerdocio femenino es "deseable" pero luego afirmó que el sacerdocio sacramental está ligado al sexo masculino.', // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      humanae: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Diplomatic and pragmatic, with a 'healthy conservatism' in the Curia.",
      es: "Diplomático y pragmático, con un 'sano conservadurismo' en la Curia.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/900C3F/ffffff?text=Koch", // Different placeholder
  },
  {
    id: "cardinal_mendonca",
    name: {
      en: "Cardinal José Tolentino de Mendonça",
      es: "Cardenal José Tolentino de Mendonça",
    },
    flag: "🇵🇹",
    age: 59,
    role: {
      en: "Prefect of the Dicastery for Culture and Education. Archivist and Librarian of the Holy Roman Church.",
      es: "Prefecto del Dicasterio para la Cultura y la Educación. Archivero y Bibliotecario de la Santa Iglesia Romana.",
    },
    country: {
      en: "Portugal",
      es: "Portugal",
    },
    keyIssues: {
      synodal: {
        en: "Views on synodality mentioned, likely supportive.",
        es: "Mencionadas opiniones sobre la sinodalidad, probablemente de apoyo.",
      },
      women: {
        en: "Allying with a feminist sister who promotes women's ordination mentioned (seen as engaging with culture).",
        es: "Mencionada alianza con una hermana feminista que promueve la ordenación de mujeres (visto como compromiso con la cultura).",
      },
      sameSex: {
        en: 'Sympathizing with "tolerant approaches to homosexuality" mentioned, but reportedly not publicly against Church teaching.',
        es: 'Mencionada simpatía con "enfoques tolerantes hacia la homosexualidad", pero según se informa, no públicamente en contra de la enseñanza de la Iglesia.', // Corrected 'but' to 'pero'
      },
      humanae: {
        en: "Allying with a sister who promotes abortion mentioned (seen as engaging with culture).",
        es: "Mencionada alianza con una hermana que promueve el aborto (visto como compromiso con la cultura).",
      },
      marriage: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
    },
    leaning: {
      en: "Progressive, close affinity to Pope Francis, 'significant modernist figure.'",
      es: "Progresista, gran afinidad con el Papa Francisco, 'figura modernista significativa'.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/581845/ffffff?text=Mendonca", // Different placeholder
  },
  {
    id: "cardinal_muller",
    name: {
      en: "Cardinal Gerhard Ludwig Müller",
      es: "Cardenal Gerhard Ludwig Müller",
    },
    flag: "🇩🇪",
    age: 77,
    role: {
      en: "Prefect Emeritus of the Congregation for the Doctrine of the Faith.",
      es: "Prefecto Emérito de la Congregación para la Doctrina de la Fe.",
    },
    country: {
      en: "Germany",
      es: "Alemania",
    },
    keyIssues: {
      synodal: {
        en: "Critical of perceived deviations from tradition.",
        es: "Crítico de las desviaciones percibidas de la tradición.",
      },
      women: {
        en: "Staunchly opposed to a female diaconate.",
        es: "Firmemente opuesto a un diaconado femenino.",
      },
      sameSex: {
        en: "Strong defender of traditional doctrine (implies opposition).",
        es: "Firme defensor de la doctrina tradicional (implica oposición).",
      },
      humanae: {
        en: "Strong defender of traditional doctrine (implies upholding).",
        es: "Firme defensor de la doctrina tradicional (implica defenderla).",
      },
      marriage: {
        en: "Strong defender of traditional doctrine on marriage. Resists changes to priestly celibacy.",
        es: "Firme defensor de la doctrina tradicional sobre el matrimonio. Se resiste a los cambios en el celibato sacerdotal.",
      },
    },
    leaning: {
      en: "Theologically orthodox, strong defender of tradition.",
      es: "Teológicamente ortodoxo, firme defensor de la tradición.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FF0000/ffffff?text=Muller", // Different placeholder
  },
  {
    id: "cardinal_ouellet",
    name: {
      en: "Cardinal Marc Ouellet",
      es: "Cardenal Marc Ouellet",
    },
    flag: "🇨🇦",
    age: 80, // Not eligible to vote
    role: {
      en: "Prefect Emeritus of the Dicastery for Bishops.",
      es: "Prefecto Emérito del Dicasterio para los Obispos.",
    },
    country: {
      en: "Canada",
      es: "Canadá",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available, but traditional background).",
        es: "(Postura específica no disponible, pero antecedentes tradicionales).", // Corrected 'but' to 'pero'
      },
      women: {
        en: "(Specific stance not readily available, but traditional background).",
        es: "(Postura específica no disponible, pero antecedentes tradicionales).", // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "(Specific stance not readily available, but traditional background).",
        es: "(Postura específica no disponible, pero antecedentes tradicionales).", // Corrected 'but' to 'pero'
      },
      humanae: {
        en: "(Specific stance not readily available, but traditional background).",
        es: "(Postura específica no disponible, pero antecedentes tradicionales).", // Corrected 'but' to 'pero'
      },
      marriage: {
        en: "(Specific stance not readily available, but traditional background).",
        es: "(Postura específica no disponible, pero antecedentes tradicionales).", // Corrected 'but' to 'pero'
      },
    },
    leaning: {
      en: "Traditional theological background, extensive Curia experience.",
      es: "Antecedentes teológicos tradicionales, amplia experiencia en la Curia.",
    },
    createdBy: {
      en: "Pope John Paul II",
      es: "Papa Juan Pablo II", // Corrected 'Juan Pablo II'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/00FF00/ffffff?text=Ouellet", // Different placeholder
  },
  {
    id: "cardinal_parolin",
    name: {
      en: "Cardinal Pietro Parolin",
      es: "Cardenal Pietro Parolin",
    },
    flag: "🇮🇹",
    age: 70,
    role: {
      en: "Vatican Secretary of State.",
      es: "Secretario de Estado del Vaticano.",
    },
    country: {
      en: "Italy",
      es: "Italia",
    },
    keyIssues: {
      synodal: {
        en: "(Role implies involvement in implementation, personal stance diplomatic).",
        es: "(El rol implica participación en la implementación, postura personal diplomática).",
      },
      women: {
        en: "(Specific stance not readily available, generally diplomatic).",
        es: "(Postura específica no disponible, generalmente diplomática).",
      },
      sameSex: {
        en: "(Specific stance not readily available, generally diplomatic).",
        es: "(Postura específica no disponible, generalmente diplomática).",
      },
      humanae: {
        en: "(Specific stance not readily available, generally diplomatic).",
        es: "(Postura específica no disponible, generalmente diplomática).",
      },
      marriage: {
        en: "(Specific stance not readily available, generally diplomatic).",
        es: "(Postura específica no disponible, generalmente diplomática).",
      },
    },
    leaning: {
      en: "Moderate, pragmatic, focused on stability and governance.",
      es: "Moderado, pragmático, centrado en la estabilidad y la gobernanza.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/0000FF/ffffff?text=Parolin", // Different placeholder
  },
  {
    id: "cardinal_piacenza",
    name: {
      en: "Cardinal Mauro Piacenza",
      es: "Cardenal Mauro Piacenza",
    },
    flag: "🇮🇹",
    age: 80, // Not eligible to vote
    role: {
      en: "Major Penitentiary Emeritus of the Apostolic Penitentiary.",
      es: "Penitenciario Mayor Emérito de la Penitenciaría Apostólica.",
    },
    country: {
      en: "Italy",
      es: "Italia",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "Firm in opposition to changing the celibacy rule (implies opposition to women's ordination).",
        es: "Firme en oposición a cambiar la regla del celibato (implica oposición a la ordenación de mujeres).",
      },
      sameSex: {
        en: "Holds fast to all doctrines on moral matters (implies opposition).",
        es: "Se mantiene firme en todas las doctrinas sobre asuntos morales (implica oposición).",
      },
      humanae: {
        en: "Holds fast to all doctrines on moral matters (implies upholding).",
        es: "Se mantiene firme en todas las doctrinas sobre asuntos morales (implica defenderla).",
      },
      marriage: {
        en: "Holds fast to all doctrines on moral matters (implies upholding traditional teaching).",
        es: "Se mantiene firme en todas las doctrinas sobre asuntos morales (implica defender la enseñanza tradicional).",
      },
    },
    leaning: {
      en: "Conservative, focused on priestly formation and tradition.",
      es: "Conservador, centrado en la formación sacerdotal y la tradición.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FFFF00/000000?text=Piacenza", // Different placeholder
  },
  {
    id: "cardinal_pizzaballa",
    name: {
      en: "Cardinal Pierbattista Pizzaballa",
      es: "Cardenal Pierbattista Pizzaballa",
    },
    flag: "🇮🇹",
    age: 60,
    role: {
      en: "Latin Patriarch of Jerusalem.",
      es: "Patriarca Latino de Jerusalén.",
    },
    country: {
      en: "Italy (serves in Jerusalem)",
      es: "Italia (sirve en Jerusalén)",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible).", // Added period for consistency
      },
      women: {
        en: "Desires a greater role for women in the Church.",
        es: "Desea un mayor papel para las mujeres en la Iglesia.",
      },
      sameSex: {
        en: "Opposed to the blessing of same-sex couples.",
        es: "Opuesto a la bendición de parejas del mismo sexo.",
      },
      humanae: {
        en: "(Specific stance not readily available).",
        es: "(Postura específica no disponible).",
      },
      marriage: {
        en: "Opposed to the readmission of divorcees to the sacraments.",
        es: "Opuesto a la readmisión de divorciados a los sacramentos.",
      },
    },
    leaning: {
      en: "Orthodox on some moral issues, open to Francis' reform agenda and pastoral approach.",
      es: "Ortodoxo en algunos temas morales, abierto a la agenda de reforma y enfoque pastoral de Francisco.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FF00FF/ffffff?text=Pizzaballa", // Different placeholder
  },
  {
    id: "cardinal_ranjith",
    name: {
      en: "Cardinal Albert Malcolm Ranjith Patabendige Don",
      es: "Cardenal Albert Malcolm Ranjith Patabendige Don",
    },
    flag: "🇱🇰",
    age: 77,
    role: {
      en: "Archbishop of Colombo.",
      es: "Arzobispo de Colombo.",
    },
    country: {
      en: "Sri Lanka",
      es: "Sri Lanka",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "(Specific stance not readily available, but traditional approach to practice).",
        es: "(Postura específica no disponible, pero enfoque tradicional a la práctica).", // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "Takes an uncompromising view, upholding Church teaching.",
        es: "Adopta una visión intransigente, defendiendo la enseñanza de la Iglesia.",
      },
      humanae: {
        en: "Takes an uncompromising view on life issues, firmly upholding.",
        es: "Adopta una visión intransigente sobre los temas de la vida, defendiendo firmemente.",
      },
      marriage: {
        en: "Takes an uncompromising view, upholding Church teaching.",
        es: "Adopta una visión intransigente, defendiendo la enseñanza de la Iglesia.",
      },
    },
    leaning: {
      en: "Liturgical conservative with orthodox views, politically astute.",
      es: "Conservador litúrgico con puntos de vista ortodoxos, políticamente astuto.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/00FFFF/000000?text=Ranjith", // Different placeholder
  },
  {
    id: "cardinal_sarah",
    name: {
      en: "Cardinal Robert Sarah",
      es: "Cardenal Robert Sarah",
    },
    flag: "🇬🇳",
    age: 79, // Turns 80 in June 2025, will lose voting rights
    role: {
      en: "Prefect Emeritus of the Congregation for Divine Worship and the Discipline of the Sacraments.",
      es: "Prefecto Emérito de la Congregación para el Culto Divino y la Disciplina de los Sacramentos.",
    },
    country: {
      en: "Guinea",
      es: "Guinea",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available, but generally critical of perceived deviations).",
        es: "(Postura específica no disponible, pero generalmente crítico de las desviaciones percibidas).", // Corrected 'but' to 'pero'
      },
      women: {
        en: "(Specific stance not readily available, but generally traditionalist).",
        es: "(Postura específica no disponible, pero generalmente tradicionalista).", // Corrected 'but' to 'pero'
      },
      sameSex: {
        en: "Vocal defender of conservative moral teachings (implies opposition).",
        es: "Defensor vocal de las enseñanzas morales conservadoras (implica oposición).",
      },
      humanae: {
        en: "Vocal defender of conservative moral teachings (implies upholding).",
        es: "Defensor vocal de las enseñanzas morales conservadoras (implica defenderla).",
      },
      marriage: {
        en: "Vocal defender of conservative moral teachings (implies upholding traditional teaching).",
        es: "Defensor vocal de las enseñanzas morales conservadoras (implica defender la enseñanza tradicional).",
      },
    },
    leaning: {
      en: "Leading Traditionalist/Conservative.",
      es: "Principal Tradicionalista/Conservador.",
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/800080/ffffff?text=Sarah", // Different placeholder
  },
  {
    id: "cardinal_sturla",
    name: {
      en: "Cardinal Daniel Fernando Sturla Berhouet",
      es: "Cardenal Daniel Fernando Sturla Berhouet",
    },
    flag: "🇺🇾",
    age: 65,
    role: {
      en: "Archbishop of Montevideo. Salesian.",
      es: "Arzobispo de Montevideo. Salesiano.",
    },
    country: {
      en: "Uruguay",
      es: "Uruguay",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      women: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      sameSex: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      humanae: {
        en: "(Specific stance not readily available)",
        es: "(Postura específica no disponible)",
      },
      marriage: {
        en: "Participated in the Synod on the Family (specific stance not detailed).",
        es: "Participó en el Sínodo sobre la Familia (postura específica no detallada).",
      },
    },
    leaning: {
      en: "Salesian background suggests a pastoral focus.",
      es: "Los antecedentes salesianos sugieren un enfoque pastoral.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/FFA500/ffffff?text=Sturla", // Different placeholder
  },
  {
    id: "cardinal_tagle",
    name: {
      en: "Cardinal Luis Antonio Gokim Tagle",
      es: "Cardenal Luis Antonio Gokim Tagle",
    },
    flag: "🇵🇭",
    age: 67,
    role: {
      en: "Pro-Prefect for the Section of First Evangelization of the Dicastery for Evangelization. Former Archbishop of Manila.",
      es: "Pro-Prefecto de la Sección para la Primera Evangelización del Dicasterio para la Evangelización. Ex Arzobispo de Manila.",
    },
    country: {
      en: "Philippines",
      es: "Filipinas",
    },
    keyIssues: {
      synodal: {
        en: "(Specific stance not readily available, but aligns with Francis on evangelization).",
        es: "(Postura específica no disponible, pero se alinea con Francisco en evangelización).", // Corrected 'but' to 'pero'
      },
      women: {
        en: "(Specific stance not readily available).",
        es: "(Postura específica no disponible).",
      },
      sameSex: {
        en: 'Criticized the Church for using "harsh words" to describe LGBTQ people.',
        es: 'Criticó a la Iglesia por usar "palabras duras" para describir a las personas LGBTQ.',
      },
      humanae: {
        en: "Defends the Catholic Church's opposition to abortion and contraception.",
        es: "Defiende la oposición de la Iglesia Católica al aborto y la anticoncepción.",
      },
      marriage: {
        en: "Believes divorced and remarried Catholics should receive communion on a case-by-case basis.",
        es: "Cree que los católicos divorciados y vueltos a casar deberían recibir la comunión caso por caso.",
      },
    },
    leaning: {
      en: '"Asian Francis," progressive on pastoral approach/language, upholds traditional doctrine on core moral issues.',
      es: '"Francisco asiático", progresista en enfoque/lenguaje pastoral, defiende la doctrina tradicional en temas morales centrales.',
    },
    createdBy: {
      en: "Pope Benedict XVI",
      es: "Papa Benedicto XVI", // Corrected 'Benedict XVI'
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/4169E1/ffffff?text=Tagle", // Different placeholder
  },
  {
    id: "cardinal_zuppi",
    name: {
      en: "Cardinal Matteo Maria Zuppi",
      es: "Cardenal Matteo Maria Zuppi",
    },
    flag: "🇮🇹",
    age: 69,
    role: {
      en: "Archbishop of Bologna. President of the Italian Episcopal Conference.",
      es: "Arzobispo de Bolonia. Presidente de la Conferencia Episcopal Italiana.",
    },
    country: {
      en: "Italy",
      es: "Italia",
    },
    keyIssues: {
      synodal: {
        en: "Likely supportive, close to Francis.",
        es: "Probablemente de apoyo, cercano a Francisco.",
      },
      women: {
        en: "Does not exclude optional priestly celibacy (mencionando Eastern Rites).",
        es: "No excluye el celibato sacerdotal opcional (mencionando los Ritos Orientales).",
      },
      sameSex: {
        en: "Supports a new pastoral attitude towards LGBT Catholics.",
        es: "Apoya una nueva actitud pastoral hacia los católicos LGBT.",
      },
      humanae: {
        en: "(Specific stance not readily available, but focus on pastoral care and poor).",
        es: "(Postura específica no disponible, pero enfoque en la atención pastoral y los pobres).", // Corrected 'but' to 'pero'
      },
      marriage: {
        en: "Supports a new pastoral attitude towards divorced and civilly 'remarried.'",
        es: "Apoya una nueva actitud pastoral hacia los divorciados y 'vueltos a casar' civilmente.",
      },
    },
    leaning: {
      en: "Close associate of Pope Francis, progressive, bridge-builder.",
      es: "Estrecho colaborador del Papa Francisco, progresista, constructor de puentes.",
    },
    createdBy: {
      en: "Pope Francis",
      es: "Papa Francisco",
    },
    // Placeholder image URL - replace with actual image
    imageUrl: "https://placehold.co/100x100/D2B48C/ffffff?text=Zuppi", // Different placeholder
  },
];

const papalNames = [
  // Data structure for unique Pope and Antipope names with Spanish translations and counts.
  // Unique Pope Names

  { id: "name_adrian", name: { en: "Adrian", es: "Adrián" }, count: 6 },
  {
    id: "name_agapetus",
    name: { en: "Agapetus", es: "Agapeto" },
    count: 2,
  },
  { id: "name_agatho", name: { en: "Agatho", es: "Agatón" }, count: 1 },
  {
    id: "name_alexander",
    name: { en: "Alexander", es: "Alejandro" },
    count: 8,
  },
  {
    id: "name_anastasius",
    name: { en: "Anastasius", es: "Anastasio" },
    count: 4,
  },
  {
    id: "name_anacletus",
    name: { en: "Anacletus", es: "Anacleto" },
    count: 1,
  },
  {
    id: "name_anicetus",
    name: { en: "Anicetus", es: "Aniceto" },
    count: 1,
  },
  { id: "name_anterus", name: { en: "Anterus", es: "Antero" }, count: 1 },
  {
    id: "name_benedict",
    name: { en: "Benedict", es: "Benedicto" },
    count: 16,
  },
  {
    id: "name_boniface",
    name: { en: "Boniface", es: "Bonifacio" },
    count: 9,
  },
  { id: "name_caius", name: { en: "Caius", es: "Cayo" }, count: 1 },
  {
    id: "name_callistus",
    name: { en: "Callistus", es: "Calixto" },
    count: 3,
  },
  {
    id: "name_celestine",
    name: { en: "Celestine", es: "Celestino" },
    count: 5,
  },
  {
    id: "name_clement",
    name: { en: "Clement", es: "Clemente" },
    count: 14,
  },
  { id: "name_conon", name: { en: "Conon", es: "Conón" }, count: 1 },
  {
    id: "name_constantine",
    name: { en: "Constantine", es: "Constantino" },
    count: 2,
  },
  {
    id: "name_cornelius",
    name: { en: "Cornelius", es: "Cornelio" },
    count: 1,
  },
  { id: "name_damasus", name: { en: "Damasus", es: "Dámaso" }, count: 2 },
  {
    id: "name_deusdedit",
    name: { en: "Deusdedit", es: "Deusdedit or Adeodato" },
    count: 1,
  },
  {
    id: "name_dionysius",
    name: { en: "Dionysius", es: "Dionisio" },
    count: 1,
  },
  { id: "name_donus", name: { en: "Donus", es: "Dono" }, count: 1 },
  { id: "name_eugene", name: { en: "Eugene", es: "Eugenio" }, count: 4 },
  {
    id: "name_eusebius",
    name: { en: "Eusebius", es: "Eusebio" },
    count: 1,
  },
  {
    id: "name_eutychian",
    name: { en: "Eutychian", es: "Eutiquiano" },
    count: 1,
  },
  {
    id: "name_evaristus",
    name: { en: "Evaristus", es: "Evaristo" },
    count: 1,
  },
  { id: "name_fabian", name: { en: "Fabian", es: "Fabián" }, count: 1 },
  { id: "name_felix", name: { en: "Felix", es: "Félix" }, count: 5 },
  {
    id: "name_formosus",
    name: { en: "Formosus", es: "Formoso" },
    count: 1,
  },
  {
    id: "name_francis",
    name: { en: "Francis", es: "Francisco" },
    count: 1,
  },
  {
    id: "name_gelasius",
    name: { en: "Gelasius", es: "Gelasio" },
    count: 2,
  },
  {
    id: "name_gregory",
    name: { en: "Gregory", es: "Gregorio" },
    count: 16,
  },
  {
    id: "name_hadrian",
    name: { en: "Hadrian", es: "Adriano" },
    count: 1,
  }, // Note: This seems to be a variation of Adrian, kept separate as per list
  {
    id: "name_hilarius",
    name: { en: "Hilarius", es: "Hilario" },
    count: 1,
  },
  {
    id: "name_honorius",
    name: { en: "Honorius", es: "Honorio" },
    count: 4,
  },
  {
    id: "name_hormisdas",
    name: { en: "Hormisdas", es: "Hormisdas" },
    count: 1,
  },
  {
    id: "name_innocent",
    name: { en: "Innocent", es: "Inocencio" },
    count: 13,
  },
  { id: "name_john", name: { en: "John", es: "Juan" }, count: 23 },
  {
    id: "name_john_paul",
    name: { en: "John Paul", es: "Juan Pablo" },
    count: 2,
  },
  { id: "name_julius", name: { en: "Julius", es: "Julio" }, count: 3 },
  { id: "name_leo", name: { en: "Leo", es: "León" }, count: 13 },
  {
    id: "name_liberius",
    name: { en: "Liberius", es: "Liberio" },
    count: 1,
  },
  { id: "name_linus", name: { en: "Linus", es: "Lino" }, count: 1 },
  { id: "name_lucius", name: { en: "Lucius", es: "Lucio" }, count: 3 },
  {
    id: "name_marcellinus",
    name: { en: "Marcellinus", es: "Marcelino" },
    count: 1,
  },
  {
    id: "name_marcellus",
    name: { en: "Marcellus", es: "Marcelo" },
    count: 2,
  },
  { id: "name_marinus", name: { en: "Marinus", es: "Marino" }, count: 2 },
  { id: "name_martin", name: { en: "Martin", es: "Martín" }, count: 5 },
  {
    id: "name_maurice",
    name: { en: "Maurice", es: "Mauricio" },
    count: 1,
  },
  {
    id: "name_miltiades",
    name: { en: "Miltiades", es: "Melquíades" },
    count: 1,
  },
  {
    id: "name_nicholas",
    name: { en: "Nicholas", es: "Nicolás" },
    count: 5,
  },
  {
    id: "name_paschal",
    name: { en: "Paschal", es: "Pascual" },
    count: 2,
  },
  { id: "name_paul", name: { en: "Paul", es: "Pablo" }, count: 6 },
  {
    id: "name_pelagius",
    name: { en: "Pelagius", es: "Pelagio" },
    count: 2,
  },
  { id: "name_peter", name: { en: "Peter", es: "Pedro" }, count: 1 },
  { id: "name_pius", name: { en: "Pius", es: "Pío" }, count: 12 },
  {
    id: "name_pontian",
    name: { en: "Pontian", es: "Pontiano" },
    count: 1,
  },
  { id: "name_roman", name: { en: "Roman", es: "Romano" }, count: 1 },
  { id: "name_sergius", name: { en: "Sergius", es: "Sergio" }, count: 4 },
  {
    id: "name_silverius",
    name: { en: "Silverius", es: "Silverio" },
    count: 1,
  },
  { id: "name_sint", name: { en: "Sint", es: "Sint" }, count: 1 }, // Name appears as "Sint" in list, kept as is
  {
    id: "name_siricius",
    name: { en: "Siricius", es: "Siricio" },
    count: 1,
  },
  { id: "name_sixtus", name: { en: "Sixtus", es: "Sixto" }, count: 5 },
  {
    id: "name_stephen",
    name: { en: "Stephen", es: "Esteban" },
    count: 9,
  },
  {
    id: "name_sylvester",
    name: { en: "Sylvester", es: "Silvestre" },
    count: 3,
  },
  {
    id: "name_symphorian",
    name: { en: "Symphorian", es: "Sinforiano" },
    count: 1,
  },
  {
    id: "name_telesphorus",
    name: { en: "Telesphorus", es: "Telesforo" },
    count: 1,
  },
  {
    id: "name_theodore",
    name: { en: "Theodore", es: "Teodoro" },
    count: 2,
  },
  { id: "name_titus", name: { en: "Titus", es: "Tito" }, count: 1 },
  { id: "name_urban", name: { en: "Urban", es: "Urbano" }, count: 8 },
  {
    id: "name_valentine",
    name: { en: "Valentine", es: "Valentín" },
    count: 1,
  },
  { id: "name_victor", name: { en: "Victor", es: "Víctor" }, count: 3 },
  {
    id: "name_vigilius",
    name: { en: "Vigilius", es: "Vigilio" },
    count: 1,
  },
  {
    id: "name_vitalian",
    name: { en: "Vitalian", es: "Vitaliano" },
    count: 1,
  },
  {
    id: "name_zachary",
    name: { en: "Zachary", es: "Zacarías" },
    count: 1,
  },
  {
    id: "name_zephyrinus",
    name: { en: "Zephyrinus", es: "Ceferino" },
    count: 1,
  },
  { id: "name_zosimus", name: { en: "Zosimus", es: "Zósimo" }, count: 1 },
  {
    id: "name_adeodatus",
    name: { en: "Adeodatus", es: "Adeodato" },
    count: 2,
  },

  // Unique Antipope Names (Commented out if name duplicates a Pope name appearing earlier)
  {
    id: "name_adalbert",
    name: { en: "Adalbert", es: "Adalberto" },
    count: 1,
  },
  { id: "name_albert", name: { en: "Albert", es: "Alberto" }, count: 1 },
  // { id: "name_alexander_antipope", name: { en: "Alexander", es: "Alejandro" }, count: 3 }, // Duplicates Pope Alexander
  // { id: "name_anacletus_antipope", name: { en: "Anacletus", es: "Anacleto" }, count: 2 }, // Duplicates Pope Anacletus
  // { id: "name_anastasius_antipope", name: { en: "Anastasius", es: "Anastasio" }, count: 2 }, // Duplicates Pope Anastasius
  // { id: "name_benedict_antipope", name: { en: "Benedict", es: "Benedicto" }, count: 4 }, // Duplicates Pope Benedict
  // { id: "name_boniface_antipope", name: { en: "Boniface", es: "Bonifacio" }, count: 2 }, // Duplicates Pope Boniface
  // { id: "name_callistus_antipope", name: { en: "Callistus", es: "Calixto" }, count: 1 }, // Duplicates Pope Callistus
  // { id: "name: "name_celestine_antipope", name: { en: "Celestine", es: "Celestino" }, count: 2 }, // Duplicates Pope Celestine
  {
    id: "name_christopher",
    name: { en: "Christopher", es: "Cristóbal" },
    count: 1,
  },
  // { id: "name_clement_antipope", name: { en: "Clement", es: "Clemente" }, count: 3 }, // Duplicates Pope Clement
  // { id: "name_constantine_antipope", name: { en: "Constantine", es: "Constantino" }, count: 2 }, // Duplicates Pope Constantine
  {
    id: "name_dioscorus",
    name: { en: "Dioscorus", es: "Dióscoro" },
    count: 1,
  },
  {
    id: "name_eulalius",
    name: { en: "Eulalius", es: "Eulalio" },
    count: 1,
  },
  // { id: "name_felix_antipope", name: { en: "Felix", es: "Félix" }, count: 2 }, // Duplicates Pope Felix
  // { id: "name_gregory_antipope", name: { en: "Gregory", es: "Gregorio" }, count: 4 }, // Duplicates Pope Gregory
  {
    id: "name_heraclius",
    name: { en: "Heraclius", es: "Heraclio" },
    count: 1,
  },
  {
    id: "name_hippolytus",
    name: { en: "Hippolytus", es: "Hipólito" },
    count: 1,
  },
  // { id: "name_honorius_antipope", name: { en: "Honorius", es: "Honorio" }, count: 1 }, // Duplicates Pope Honorius
  // { id: "name_innocent_antipope", name: { en: "Innocent", es: "Inocencio" }, count: 1 }, // Duplicates Pope Innocent
  // { id: "name_john_antipope", name: { en: "John", es: "Juan" }, count: 4 }, // Duplicates Pope John
  {
    id: "name_laurentius",
    name: { en: "Laurentius", es: "Lorenzo" },
    count: 1,
  },
  // { id: "name_leo_antipope", name: { en: "Leo", es: "León" }, count: 1 }, // Duplicates Pope Leo
  // { id: "name_martin_antipope", name: { en: "Martin", es: "Martín" }, count: 1 }, // Duplicates Pope Martin
  // { id: "name_paschal_antipope", name: { en: "Paschal", es: "Pascual" }, count: 1 }, // Duplicates Pope Paschal
  { id: "name_philip", name: { en: "Philip", es: "Felipe" }, count: 1 },
  // { id: "name_sylvester_antipope", name: { en: "Sylvester", es: "Silvestre" }, count: 1 }, // Duplicates Pope Sylvester
  // { id: "name_theodore_antipope", name: { en: "Theodore", es: "Teodoro" }, count: 1 }, // Duplicates Pope Theodore
  // { id: "name_victor_antipope", name: { en: "Victor", es: "Víctor" }, count: 3 }, // Duplicates Pope Victor
  {
    id: "name_ursicinus",
    name: { en: "Ursicinus", es: "Ursicino" },
    count: 1,
  },
  // { id: "name_zephyrinus_antipope", name: { en: "Zephyrinus", es: "Ceferino" }, count: 1 }, // Duplicates Pope Zephyrinus
  {
    id: "name_benedict_xiv",
    name: { en: "Benedict XIV", es: "Benedicto XIV" },
    count: 2,
  },
];

// Arrays to store user's selections
let selectedCardinalPicks = []; // Stores objects like { id: '...', name: '...' }
let selectedPapalNameIds = []; // Stores string IDs like 'name_john'

// Variables to track validation modal state for re-rendering on language change
let currentValidationMessageKey = null;
let isCurrentModalResetConfirmation = false;

// Function to update static text based on current language
function updateStaticLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (
        !element.closest(".modal-content") ||
        element.hasAttribute("data-translate")
      ) {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update language button active state
  document.querySelectorAll(".language-button").forEach((button) => {
    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Update dark mode toggle text
  const darkModeToggleText = document.querySelector(
    "#darkModeToggle span[data-translate]"
  );
  if (darkModeToggleText) {
    const isDarkMode = document.body.classList.contains("dark-mode");
    darkModeToggleText.textContent = isDarkMode
      ? translations[lang].lightMode
      : translations[lang].darkMode;
  }

  // Re-render candidates and papal names to apply language
  renderCardinals(currentLang);
  renderPapalNames(currentLang);

  // Check and update visible modals on language change
  const confirmationModalOverlay = document.getElementById(
    "confirmationModalOverlay"
  );
  const validationModalOverlay = document.getElementById(
    "validationModalOverlay"
  );

  // If confirmation modal is open, re-populate its lists with the new language
  if (
    confirmationModalOverlay &&
    confirmationModalOverlay.classList.contains("visible")
  ) {
    showConfirmationModal(selectedCardinalPicks, selectedPapalNameIds);
  }

  // If validation modal is open, re-display it using the stored state
  if (
    validationModalOverlay &&
    validationModalOverlay.classList.contains("visible")
  ) {
    if (currentValidationMessageKey) {
      showValidationModal(
        currentValidationMessageKey,
        isCurrentModalResetConfirmation
      );
    }
  }
}

// Function to generate HTML for a single cardinal item
function generateCardinalHTML(cardinal, lang) {
  const t = translations[lang];
  const name = cardinal.name[lang] || cardinal.name["en"] || "Unknown Cardinal";
  const leaning =
    cardinal.leaning[lang] || cardinal.leaning["en"] || t.stanceNotAvailable;
  const role =
    cardinal.role[lang] || cardinal.role["en"] || t.stanceNotAvailable;
  const country =
    cardinal.country[lang] || cardinal.country["en"] || t.stanceNotAvailable;

  // Build key issues list dynamically
  let keyIssuesHtml = "";
  const keyIssuesLabels = {
    synodal: t.synodalIssue,
    women: t.womenIssue,
    sameSex: t.sameSexIssue,
    humanae: t.humanaeIssue,
    marriage: t.marriageIssue,
  };

  for (const issueKey in cardinal.keyIssues) {
    if (cardinal.keyIssues.hasOwnProperty(issueKey)) {
      const issueText =
        cardinal.keyIssues[issueKey][lang] ||
        cardinal.keyIssues[issueKey]["en"] ||
        t.stanceNotAvailable;
      const issueLabel = keyIssuesLabels[issueKey] || issueKey;
      keyIssuesHtml += `<li><strong>${issueLabel}</strong> ${issueText}</li>`;
    }
  }

  return `
                <div class="candidate-section" data-cardinal-id="${
                  cardinal.id
                }">
                     <label for="cardinal_${
                       cardinal.id
                     }" class="candidate-label">
                        <div class="rank-indicator"></div> <div class="candidate-info">
                            <h3>
                                ${name} <span class="flag">${
    cardinal.flag
  }</span>
                            </h3>
                            <ul>
                                <li><strong>${
                                  t.leaningLabel
                                }</strong> ${leaning}</li>
                                <li><strong>Role:</strong> ${role}</li>
                                <li><strong>Country:</strong> ${country}</li>
                                <li><strong>Age:</strong> ${
                                  cardinal.age || "N/A"
                                }</li>
                                <li><strong>Created By:</strong> ${
                                  cardinal.createdBy
                                    ? cardinal.createdBy[lang] ||
                                      cardinal.createdBy["en"] ||
                                      "Unknown"
                                    : "Unknown"
                                }</li>
                                <li>
                                    <span class="key-issues-toggle" role="button" aria-expanded="false" aria-controls="${
                                      cardinal.id
                                    }_issues">
                                        <strong>${
                                          t.keyIssuesLabel
                                        }</strong> <span class="toggle-text">${
    t.clickToExpand
  }</span>
                                    </span>
                                    <div class="key-issues-content" id="${
                                      cardinal.id
                                    }_issues" aria-hidden="true">
                                        <ul>
                                            ${keyIssuesHtml}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </label>
                </div>
            `;
}

// Function to render the list of cardinals in the UI
function renderCardinals(lang) {
  const candidateGrid = document.getElementById("candidateGrid");
  if (candidateGrid) {
    candidateGrid.innerHTML = cardinals
      .map((cardinal) => generateCardinalHTML(cardinal, lang))
      .join("");
    attachCardinalClickListeners();
    updateCardinalVisuals();
  }
}

// Function to generate HTML for a single papal name list item
function generatePapalNameHTML(nameData, lang) {
  const t = translations[lang];
  const name = nameData.name[lang] || nameData.name["en"] || "Unknown Name";
  const usedTimesText = t.usedTimes.replace("{count}", nameData.count);
  const isSelected = selectedPapalNameIds.includes(nameData.id);
  return `
                <li class="papal-name-item ${
                  isSelected ? "selected" : ""
                }" data-name-id="${nameData.id}">
                    <input type="checkbox" id="${
                      nameData.id
                    }" name="papalName" value="${name}" class="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500" ${
    isSelected ? "checked" : ""
  }>
                    <label for="${
                      nameData.id
                    }" class="flex items-center w-full cursor-pointer">
                         <span>${name}</span>
                         <span class="name-info">${usedTimesText}</span>
                    </label>
                </li>
            `;
}

// Function to render the list of papal names in the UI
function renderPapalNames(lang) {
  const papalNameListElement = document.getElementById("papalNameList");
  if (papalNameListElement) {
    papalNameListElement.innerHTML = papalNames
      .map((name) => generatePapalNameHTML(name, lang))
      .join("");
    attachPapalNameClickListeners();
  }
}

// Function to update the visual feedback on selected cardinals (adding rank indicators and styles)
function updateCardinalVisuals() {
  document.querySelectorAll(".candidate-label").forEach((label) => {
    label.classList.remove("selected", "rank-1", "rank-2", "rank-3");
    const rankIndicator = label.querySelector(".rank-indicator");
    if (rankIndicator) {
      rankIndicator.textContent = "";
      rankIndicator.style.opacity = 0;
    }
  });

  selectedCardinalPicks.forEach((pick, index) => {
    const label = document.querySelector(
      `.candidate-section[data-cardinal-id="${pick.id}"] .candidate-label`
    );
    if (label) {
      const rank = index + 1;
      label.classList.add("selected", `rank-${rank}`);
      const rankIndicator = label.querySelector(".rank-indicator");
      if (rankIndicator) {
        rankIndicator.textContent = rank;
        rankIndicator.style.opacity = 1;
      }
    }
  });
}

// Function to attach click listeners to cardinal labels for selection logic
function attachCardinalClickListeners() {
  document.querySelectorAll(".candidate-label").forEach((label) => {
    label.addEventListener("click", function (event) {
      if (event.target.closest(".key-issues-toggle")) {
        return;
      }

      const candidateSection = this.closest(".candidate-section");
      const cardinalId = candidateSection.getAttribute("data-cardinal-id");
      const cardinal = cardinals.find((c) => c.id === cardinalId);

      if (!cardinal) return;

      const existingIndex = selectedCardinalPicks.findIndex(
        (pick) => pick.id === cardinalId
      );

      if (existingIndex === -1) {
        if (selectedCardinalPicks.length < 3) {
          selectedCardinalPicks.push({
            id: cardinal.id,
            name: cardinal.name[currentLang] || cardinal.name["en"],
          });
        } else {
          showValidationModal("round1LimitAlert");
          return;
        }
      } else {
        selectedCardinalPicks.splice(existingIndex, 1);
      }

      updateCardinalVisuals();
    });
  });
}

// Function to attach change listeners to papal name checkboxes for selection logic
function attachPapalNameClickListeners() {
  document
    .querySelectorAll('.papal-name-item input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const listItem = this.closest(".papal-name-item");
        const nameId = listItem.getAttribute("data-name-id");
        const nameData = papalNames.find((name) => name.id === nameId);
        const nameInCurrentLang = nameData
          ? nameData.name[currentLang] || nameData.name["en"]
          : nameId;

        if (this.checked) {
          if (selectedPapalNameIds.length < 5) {
            selectedPapalNameIds.push(nameId);
            listItem.classList.add("selected");
            this.value = nameInCurrentLang;
          } else {
            this.checked = false;
            showValidationModal("round2LimitAlert");
          }
        } else {
          const index = selectedPapalNameIds.indexOf(nameId);
          if (index > -1) {
            selectedPapalNameIds.splice(index, 1);
            listItem.classList.remove("selected");
          }
        }
      });
    });
}

// Function to show the confirmation modal with current selections
function showConfirmationModal(cardinalPicks, papalNamePicks) {
  const modalOverlay = document.getElementById("confirmationModalOverlay");
  const modalCardinalPicksList = document.getElementById("modalCardinalPicks");
  const modalPapalNamePicksList = document.getElementById(
    "modalPapalNamePicks"
  );
  const t = translations[currentLang];

  if (modalOverlay && modalCardinalPicksList && modalPapalNamePicksList) {
    modalCardinalPicksList.innerHTML = "";
    modalPapalNamePicksList.innerHTML = "";

    cardinalPicks.forEach((pick, index) => {
      const listItem = document.createElement("li");
      const points = [5, 3, 1][index];
      const rankTranslationKey = `round1Points${index + 1}`;
      const rankText = translations[currentLang][rankTranslationKey]
        ? translations[currentLang][rankTranslationKey].split(" ")[0]
        : `${pick.rank}${
            pick.rank === 1
              ? "st"
              : pick.rank === 2
              ? "nd"
              : pick.rank === 3
              ? "rd"
              : ""
          }`;
      const cardinal = cardinals.find((c) => c.id === pick.id);
      const cardinalNameInCurrentLang = cardinal
        ? cardinal.name[currentLang] || cardinal.name["en"]
        : pick.name;

      listItem.textContent = `${rankText} (${points} pts): ${cardinalNameInCurrentLang}`;
      modalCardinalPicksList.appendChild(listItem);
    });

    papalNamePicks.forEach((nameId) => {
      const nameData = papalNames.find((name) => name.id === nameId);
      const nameInCurrentLang = nameData
        ? nameData.name[currentLang] || nameData.name["en"]
        : nameId;
      const listItem = document.createElement("li");
      listItem.textContent = `- ${nameInCurrentLang}`;
      modalPapalNamePicksList.appendChild(listItem);
    });

    modalOverlay.querySelector("h3[data-translate]").textContent =
      t.confirmModalTitle;
    modalOverlay.querySelector(
      'p[data-translate="confirmModalPicksLabel"]'
    ).textContent = t.confirmModalPicksLabel;
    modalOverlay.querySelector(
      'p[data-translate="confirmModalNamesLabel"]'
    ).textContent = t.confirmModalNamesLabel;
    modalOverlay.querySelector(
      'button[data-translate="confirmButton"]'
    ).textContent = t.confirmButton;
    modalOverlay.querySelector(
      'button[data-translate="cancelButton"]'
    ).textContent = t.cancelButton;

    modalOverlay.classList.add("visible");
  } else {
    console.error("Confirmation modal elements not found!");
  }
}

// Function to hide the confirmation modal
function hideConfirmationModal() {
  const modalOverlay = document.getElementById("confirmationModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("visible");
  }
}

// Function to show the validation or reset confirmation modal
function showValidationModal(messageKey, isResetConfirmation = false) {
  const modalOverlay = document.getElementById("validationModalOverlay");
  const modalTitle = modalOverlay.querySelector("h3");
  const modalMessage = document.getElementById("validationModalMessage");
  const modalButtonsDiv = modalOverlay.querySelector(".modal-buttons");
  const okButton = document.getElementById("validationModalOkButton");
  const t = translations[currentLang];

  if (
    modalOverlay &&
    modalTitle &&
    modalMessage &&
    modalButtonsDiv &&
    okButton
  ) {
    currentValidationMessageKey = messageKey;
    isCurrentModalResetConfirmation = isResetConfirmation;

    modalMessage.innerHTML = "";

    if (isResetConfirmation) {
      modalTitle.textContent = t.resetModalTitle;
      modalMessage.textContent = t.resetModalMessage;
      okButton.textContent = t.resetButtonOK;
    } else {
      modalTitle.textContent = t.validationModalTitle;
      modalMessage.textContent = t[messageKey] || messageKey;
      okButton.textContent = t.okButton;
    }

    modalOverlay.classList.add("visible");
  } else {
    console.error("Validation modal elements not found!");
    alert(translations[currentLang][messageKey] || messageKey);
  }
}

// Function to hide the validation or reset confirmation modal
function hideValidationModal() {
  const modalOverlay = document.getElementById("validationModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("visible");
    currentValidationMessageKey = null;
    isCurrentModalResetConfirmation = false;
  }
}

//
// Event Listeners and Initialization
// This section sets up event listeners for user interactions and
// initializes the page content when the DOM is fully loaded.
//
document.addEventListener("DOMContentLoaded", function () {
  const languageButtons = document.querySelectorAll(".language-button");
  const submitBtn = document.getElementById("submitBtn");
  const playerNameInput = document.getElementById("playerName");
  const submissionOutputDiv = document.getElementById("submissionOutput");
  const outputContentPre = document.getElementById("outputContent");
  const confirmationModalOverlay = document.getElementById(
    "confirmationModalOverlay"
  );
  const confirmSubmitButton = document.getElementById("confirmSubmitButton");
  const cancelSubmitButton = document.getElementById("cancelSubmitButton");
  const resetButton = document.getElementById("resetBallotButton");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleText = darkModeToggle.querySelector(
    "span[data-translate]"
  );
  const darkModeToggleIcon = darkModeToggle.querySelector(".icon");
  const candidateGrid = document.getElementById("candidateGrid");

  const validationModalOverlay = document.getElementById(
    "validationModalOverlay"
  );
  const validationModalOkButton = document.getElementById(
    "validationModalOkButton"
  );

  // Attach event listeners for language toggle buttons
  if (languageButtons.length > 0) {
    languageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang");
        if (lang) {
          updateStaticLanguage(lang);
        }
      });
    });
  }

  // Attach event listener for dark mode toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const isDarkMode = document.body.classList.contains("dark-mode");

      if (darkModeToggleText && darkModeToggleIcon) {
        const t = translations[currentLang];
        if (isDarkMode) {
          darkModeToggleText.textContent = t.lightMode;
          darkModeToggleIcon.textContent = "☀️";
        } else {
          darkModeToggleText.textContent = t.darkMode;
          darkModeToggleIcon.textContent = "🌙";
        }
      }
    });
  }

  // Set default language and render content on page load
  const defaultLang = "en";
  updateStaticLanguage(defaultLang);

  // Use event delegation for key issues toggle clicks within the candidate grid
  if (candidateGrid) {
    candidateGrid.addEventListener("click", function (event) {
      const toggle = event.target.closest(".key-issues-toggle");
      if (toggle) {
        event.stopPropagation();

        const content = toggle.nextElementSibling;
        const toggleTextSpan = toggle.querySelector(".toggle-text");

        if (content && toggleTextSpan) {
          content.classList.toggle("active");
          const isExpanded = content.classList.contains("active");
          toggle.setAttribute("aria-expanded", isExpanded);
          content.setAttribute("aria-hidden", !isExpanded);

          toggleTextSpan.textContent = isExpanded
            ? translations[currentLang].clickToCollapse
            : translations[currentLang].clickToExpand;
        }
      }
    });
  }

  // Attach event listener for the submit button
  submitBtn.addEventListener("click", function () {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
      showValidationModal("playerNameAlert");
      return;
    }

    if (selectedCardinalPicks.length !== 3) {
      showValidationModal("round1LimitAlert");
      return;
    }

    if (selectedPapalNameIds.length !== 5) {
      showValidationModal("round2LimitAlert");
      return;
    }

    showConfirmationModal(selectedCardinalPicks, selectedPapalNameIds);

    confirmSubmitButton.onclick = null;
    confirmSubmitButton.onclick = async function () {
      hideConfirmationModal();
      const t = translations[currentLang];

      // Google Form endpoint URL (replace with your actual URL)
      const googleFormEndpoint =
        "https://docs.google.com/forms/d/e/1FAIpQLSe6Vcxwo_Br9xhnZMTBpdlY6bhFZeDd8p43_Cu1rRyUHqFMkg/formResponse";

      // Prepare data for submission to Google Form
      const formData = new URLSearchParams();

      // Add Player Name (replace with your Google Form field ID)
      formData.append("entry.1785387111", playerName);

      // Add Cardinal Picks (replace with your Google Form field IDs for each pick)
      selectedCardinalPicks.forEach((pick, index) => {
        const cardinal = cardinals.find((c) => c.id === pick.id);
        const cardinalNameInCurrentLang = cardinal
          ? cardinal.name[currentLang] || cardinal.name["en"]
          : pick.name;
        const fieldId = [
          "entry.860598294", // ID for 1st pick
          "entry.1730489960", // ID for 2nd pick
          "entry.1148322132", // ID for 3rd pick
        ][index];

        if (fieldId) {
          formData.append(fieldId, cardinalNameInCurrentLang);
        } else {
          console.error(
            `Missing Google Form field ID for cardinal pick rank ${index + 1}`
          );
        }
      });

      // Add Papal Name Picks (replace with your Google Form field IDs for each name)
      selectedPapalNameIds.forEach((id, index) => {
        const nameData = papalNames.find((name) => name.id === id);
        const nameInCurrentLang = nameData
          ? nameData.name[currentLang] || nameData.name["en"]
          : id;
        const fieldId = [
          "entry.422513893", // ID for name 1
          "entry.655507965", // ID for name 2
          "entry.1292500793", // ID for name 3
          "entry.520868817", // ID for name 4
          "entry.854556271", // ID for name 5
        ][index];

        if (fieldId) {
          formData.append(fieldId, nameInCurrentLang);
        } else {
          console.error(
            `Missing Google Form field ID for papal name pick ${index + 1}`
          );
        }
      });

      console.log("Data to send to Google Form:", formData.toString());

      // Send data to Google Form using fetch API
      try {
        const response = await fetch(googleFormEndpoint, {
          method: "POST",
          mode: "no-cors", // Required for cross-origin requests to Google Forms
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        console.log("Attempted submission to Google Form.");
        showValidationModal("submissionSuccessAlert");
      } catch (error) {
        console.error("Error sending submission to Google Form:", error);
        showValidationModal(`Error sending submission: ${error.message}`);
      }
    };

    // Attach event listener for the cancel button in the confirmation modal
    cancelSubmitButton.onclick = null;
    cancelSubmitButton.onclick = function () {
      hideConfirmationModal();
    };
  });

  // Attach event listener for the reset button
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      showValidationModal("resetModalMessage", true);

      validationModalOkButton.removeEventListener(
        "click",
        handleResetConfirmation
      );
      validationModalOkButton.addEventListener(
        "click",
        handleResetConfirmation,
        { once: true }
      );
    });
  }

  // Function to handle the actual reset logic after confirmation
  function handleResetConfirmation() {
    selectedCardinalPicks = [];
    updateCardinalVisuals();

    selectedPapalNameIds = [];
    document
      .querySelectorAll('.papal-name-item input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = false;
        cb.closest(".papal-name-item").classList.remove("selected");
      });

    playerNameInput.value = "";

    submissionOutputDiv.classList.add("hidden");
    outputContentPre.textContent = "";

    hideValidationModal();
  }

  // Attach default click listener to the validation modal's OK button
  if (validationModalOkButton) {
    validationModalOkButton.addEventListener("click", hideValidationModal);
  }
});
