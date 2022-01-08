import React, { useState } from "react";

export const ToursContext = React.createContext({
  tours: [],
  addExhibit: () => {},
  removeExhibit: () => {},
  makeTour: () => {},
  deleteTour: () => {},
  filterTours: () => {},
  filteredTours: [],
  selectedExhibits: [],
});

const ToursContextProvider = (props) => {
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Pharaohs and Greeks",
      description: "Mixed history tour 1",
      maker: "nikola@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "mask-of-tutankhamun",
          description:
            "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 in the Valley of the Kings, and is now housed in the Egyptian Museum in Cairo The mask is one of the best-known works of art in the world and a prominent symbol of ancient Egypt.",
          image:
            "../../images/exhibits/pharaohs-of-egypt/mask-of-tutankhamun.jpg",
          price: 27,
          time: 6,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          name: "narmer-palette",
          description:
            "The Narmer Palette, also known as the Great Hierakonpolis Palette or the Palette of Narmer, is a significant Egyptian archeological find, dating from about the 31st century BC, belonging, at least nominally, to the category of cosmetic palettes. It contains some of the earliest hieroglyphic inscriptions ever found. The tablet is thought by some to depict the unification of Upper and Lower Egypt under the king Narmer. On one side, the king is depicted with the bulbed White Crown of Upper (southern) Egypt, and the other side depicts the king wearing the level Red Crown of Lower (northern) Egypt. Along with the Scorpion Macehead and the Narmer Maceheads, also found together in the main deposit at Nekhen, the Narmer Palette provides one of the earliest known depictions of an Egyptian king. The Palette shows many of the classic conventions of Ancient Egyptian art, which must already have been formalized by the time of the Palette's creation.[1] The Egyptologist Bob Brier has referred to the Narmer Palette as 'the first historical document in the world'.",
          image: "../../images/exhibits/pharaohs-of-egypt/narmer-palette.jpg",
          price: 19,
          time: 8,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Nije lose",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Moze i bolje",
              rating: 2,
            },
          ],
        },
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 19,
          time: 7,
          countryOfOrigin: "Greece",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          name: "winged-victory-of-samothrace",
          description:
            "The Winged Victory of Samothrace, or the Nike of Samothrace, is a votive monument originally found on the island of Samothrace, north of the Aegean Sea. It is a masterpiece of Greek sculpture from the Hellenistic era, dating from the beginning of the 2nd century BCE. It is composed of a statue representing the goddess Niké, whose head and arms are missing, and its base in the shape of a ship's bow.",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 30,
          time: 5,
          countryOfOrigin: "Greece",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 3,
          name: "riace-bronzes",
          description:
            "The Riace bronzes, also called the Riace Warriors, are two full-size Greek bronzes of naked bearded warriors, cast about 460–450 BC that were found in the sea in 1972 near Riace, Calabria, in southern Italy. The bronzes are now in the Museo Nazionale della Magna Grecia in the nearby city of Reggio Calabria. They are two of the few surviving full-size ancient Greek bronzes (which were usually melted down in later times), and as such demonstrate the superb technical craftsmanship and exquisite artistic features that were achieved at this time.",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 27,
          time: 5,
          countryOfOrigin: "Greece",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
      ],
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Mix of World Wars",
      description: "Mixed history tour 2",
      maker: "stefan@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "brooding-soldier",
          description:
            "Tree limbs surround the World War One Canadian Memorial, also known as the 'Brooding Soldier' in St. Julien, Belgium on March 7, 2014. The statue is a memorial to the Canadian troops who died in the first gas attacks of the First World War in 1915.",
          image: "../../images/exhibits/world-war-i/1.jpg",
          price: 29,
          time: 7,
          countryOfOrigin: "Belgium",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          name: "ub148",
          description:
            "The former German submarine UB 148 at sea, after having been surrendered to the Allies. UB-148, a small coastal submarine, was laid down during the winter of 1917 and 1918 at Bremen, Germany, but never commissioned in the Imperial German Navy. She was completing preparations for commissioning when the armistice of November 11 ended hostilities. On November 26, UB-148 was surrendered to the British at Harwich, England. Later, when the United States Navy expressed an interest in acquiring several former U-boats to use in conjunction with a Victory Bond drive, UB-148 was one of the six boats allocated for that purpose.",
          image: "../../images/exhibits/world-war-i/2.jpg",
          price: 15,
          time: 7,
          countryOfOrigin: "Germany",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 3,
          name: "maplewood",
          description:
            "British cargo ship SS Maplewood under attack by German submarine SM U-35 on April 7, 1917, 47 nautical miles/87 km southwest of Sardinia. The U-35 participated in the entire war, becoming the most successful U-boat in WWI, sinking 224 ships, killing thousands.",
          image: "../../images/exhibits/world-war-i/3.jpg",
          price: 30,
          time: 7,
          countryOfOrigin: "England",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "operation-dynamo",
          description:
            "After German soldiers swept through Belgium and Northern France in a blitzkrieg in May of 1940, all communication and transport between Allied forces were cut, leaving thousands of troops stranded. Operation Dynamo was quickly put in place to evacuate the Allies stuck along the beaches of Dunkirk, France. Soldiers waded through the water hoping to escape by rescue vessels, military ships, or civilian ships. More than 338,000 soldiers were saved during what would be later called, the 'Miracle of Dunkirk.'",
          image: "../../images/exhibits/world-war-ii/1.jpg",
          price: 21,
          time: 5,
          countryOfOrigin: "France",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          name: "d-day",
          description:
            "The Normandy landings were the landing operations and associated airborne operations on Tuesday, 6 June 1944 of the Allied invasion of Normandy in Operation Overlord during World War II. Codenamed Operation Neptune and often referred to as D-Day, it was the largest seaborne invasion in history. The operation began the liberation of France (and later western Europe) and laid the foundations of the Allied victory on the Western Front.'",
          image: "../../images/exhibits/world-war-ii/2.png",
          price: 29,
          time: 5,
          countryOfOrigin: "France ",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 3,
          name: "german-surrender",
          description:
            "On 8 May 1945, in Berlin, Field Marshal Wilhelm Keitel signs the Act of Unconditional Military Surrender of the German Armed Forces.",
          image: "../../images/exhibits/world-war-ii/3.jpg",
          price: 13,
          time: 9,
          countryOfOrigin: "Germany",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 4,
          name: "auschwitz",
          description:
            "On January 27, 1945, the Soviet army entered Auschwitz and found approximately 7,600 Jewish detainees who had been left behind. Here, a doctor of the 322nd Rifle Division of the Red Army helps take survivors out of Auschwitz. They stand at the entrance, where its iconic sign reads “Arbeit Mecht Frei,” (“Work Brings Freedom”). The Soviet Army also discovered mounds of corpses and hundreds of thousands of personal belongings.",
          image: "../../images/exhibits/world-war-ii/4.jpeg",
          price: 22,
          time: 9,
          countryOfOrigin: "Poland",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
      ],
      status: "Finished",
    },
    {
      id: 3,
      name: "Shortened Cold War",
      description: "Mixed history tour 2",
      maker: "boban@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "ivy-mike",
          description:
            "Ivy Mike was the codename given to the first full-scale test of a thermonuclear device, in which part of the explosive yield comes from nuclear fusion. Ivy Mike was detonated on November 1, 1952, by the United States on the island of Elugelab in Enewetak Atoll, in the now independent island nation of the Marshall Islands, as part of Operation Ivy. It was the first full test of the Teller–Ulam design, a staged fusion device. As a result of the collection of samples from the explosion by U.S. Air Force pilots, scientists found traces of the isotopes plutonium-246 and plutonium-244, and confirmed the existence of the predicted but undiscovered elements einsteinium and fermium.",
          image: "../../images/exhibits/cold-war/1.jpg",
          price: 15,
          time: 6,
          countryOfOrigin: "Marshall Islands",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          name: "fall-of-the-berlin-wall",
          description:
            "The fall of the Berlin Wall on 9 November 1989 was a pivotal event in world history which marked the falling of the Iron Curtain and the start of the fall of communism in Eastern and Central Europe. The fall of the inner German border took place shortly afterwards. An end to the Cold War was declared at the Malta Summit three weeks later and the German reunification took place in October the following year.",
          image: "../../images/exhibits/cold-war/2.jpg",
          price: 30,
          time: 8,
          countryOfOrigin: "Germany",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 3,
          name: "space-race",
          description:
            "The Space Race was a 20th-century competition between two Cold War adversaries, the Soviet Union (USSR) and the United States of America (USA), to achieve superior spaceflight capability. It had its origins in the ballistic missile-based nuclear arms race between the two nations following World War II. The technological advantage demonstrated by spaceflight achievement was seen as necessary for national security, and became part of the symbolism and ideology of the time. The Space Race brought pioneering launches of artificial satellites, robotic space probes to the Moon, Venus, and Mars, and human spaceflight in low Earth orbit and ultimately to the Moon.",
          image: "../../images/exhibits/cold-war/3.jpg",
          price: 26,
          time: 7,
          countryOfOrigin: "USA",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 4,
          name: "august-coup",
          description:
            "The 1991 Soviet coup d'état attempt, also known as the August Coup, was a failed attempt made by communist hard-liners of the Soviet Union to take control of the country from Mikhail Gorbachev, who was Soviet President and General Secretary of the party. The coup leaders consisted of top military and civilian officials who formed the State Committee on the State of Emergency (GKChP). They were hard-line opponents of Gorbachev's reform program, angry at the loss of control over Eastern European states, and fearful of the new union treaty that was about to be signed. The treaty decentralized much of the central government's power to the 15 republics. The hard-liners were very poorly organized. They met defeat by a short but effective campaign of anticommunist counterrevolutionaries, mainly in Moscow, led by Russian president Boris Yeltsin, who had been both an ally and critic of Gorbachev. The coup collapsed in only two days and Gorbachev returned to office, while all the plotters lost office. Yeltsin became the dominant leader and Gorbachev lost much of his influence. The failed coup led to both the immediate collapse of the Communist Party of the Soviet Union and the dissolution of the USSR four months later.",
          image: "../../images/exhibits/cold-war/4.png",
          price: 25,
          time: 5,
          countryOfOrigin: "Russia",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
      ],
      status: "Canceled",
    },
    {
      id: 4,
      name: "Mix of all settings",
      description: "Mixed history tour 4",
      maker: "katarina@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "mask-of-tutankhamun",
          description:
            "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 in the Valley of the Kings, and is now housed in the Egyptian Museum in Cairo The mask is one of the best-known works of art in the world and a prominent symbol of ancient Egypt.",
          image:
            "../../images/exhibits/pharaohs-of-egypt/mask-of-tutankhamun.jpg",
          price: 27,
          time: 6,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 19,
          time: 7,
          countryOfOrigin: "Greece",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "brooding-soldier",
          description:
            "Tree limbs surround the World War One Canadian Memorial, also known as the 'Brooding Soldier' in St. Julien, Belgium on March 7, 2014. The statue is a memorial to the Canadian troops who died in the first gas attacks of the First World War in 1915.",
          image: "../../images/exhibits/world-war-i/1.jpg",
          price: 29,
          time: 7,
          countryOfOrigin: "Belgium",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "operation-dynamo",
          description:
            "After German soldiers swept through Belgium and Northern France in a blitzkrieg in May of 1940, all communication and transport between Allied forces were cut, leaving thousands of troops stranded. Operation Dynamo was quickly put in place to evacuate the Allies stuck along the beaches of Dunkirk, France. Soldiers waded through the water hoping to escape by rescue vessels, military ships, or civilian ships. More than 338,000 soldiers were saved during what would be later called, the 'Miracle of Dunkirk.'",
          image: "../../images/exhibits/world-war-ii/1.jpg",
          price: 21,
          time: 5,
          countryOfOrigin: "France",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "sistine-chapel-ceiling",
          description:
            "The Sistine Chapel ceiling, painted by Michelangelo between 1508 and 1512, is a cornerstone work of High Renaissance art. The ceiling is that of the Sistine Chapel, the large papal chapel built within the Vatican between 1477 and 1480 by Pope Sixtus IV, for whom the chapel is named. It was painted at the commission of Pope Julius II. The chapel is the location for papal conclaves and many other important services. The ceiling's various painted elements form part of a larger scheme of decoration within the Chapel, which includes the large fresco The Last Judgement on the sanctuary wall, also by Michelangelo, wall paintings by several leading painters of the late 15th century including Sandro Botticelli, Domenico Ghirlandaio and Pietro Perugino, and a set of large tapestries by Raphael, the whole illustrating much of the doctrine of the Catholic Church.",
          image: "../../images/exhibits/renaissance/1.jpg",
          price: 25,
          time: 9,
          countryOfOrigin: "Italy",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "ivy-mike",
          description:
            "Ivy Mike was the codename given to the first full-scale test of a thermonuclear device, in which part of the explosive yield comes from nuclear fusion. Ivy Mike was detonated on November 1, 1952, by the United States on the island of Elugelab in Enewetak Atoll, in the now independent island nation of the Marshall Islands, as part of Operation Ivy. It was the first full test of the Teller–Ulam design, a staged fusion device. As a result of the collection of samples from the explosion by U.S. Air Force pilots, scientists found traces of the isotopes plutonium-246 and plutonium-244, and confirmed the existence of the predicted but undiscovered elements einsteinium and fermium.",
          image: "../../images/exhibits/cold-war/1.jpg",
          price: 15,
          time: 6,
          countryOfOrigin: "Marshall Islands",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "romulus-and-remus",
          description:
            "Romulus and Remus are twin brothers whose story tells the events that led to the founding of the city of Rome and the Roman Kingdom by Romulus. The killing of Remus by his twin, along with other tales from their story, have inspired artists throughout the ages. Since ancient times, the image of a she-wolf suckling the twins has been a symbol of the city of Rome and the ancient Romans. Although the tale takes place before the founding of Rome around 750 BC, the earliest known written account of the myth is from the late 3rd century BC. Possible historical basis for the story, as well as whether the twins' myth was an original part of Roman myth or a later development, is a subject of ongoing debate.",
          image: "../../images/exhibits/roman-empire/1.png",
          price: 23,
          time: 5,
          countryOfOrigin: "Italy",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
      ],
      status: "Ongoing",
    },
    {
      id: 5,
      name: "Pharaohs Masks",
      description: "Mixed history tour 5",
      maker: "nikola@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "mask-of-tutankhamun",
          description:
            "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 in the Valley of the Kings, and is now housed in the Egyptian Museum in Cairo The mask is one of the best-known works of art in the world and a prominent symbol of ancient Egypt.",
          image:
            "../../images/exhibits/pharaohs-of-egypt/mask-of-tutankhamun.jpg",
          price: 27,
          time: 6,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Hahahahahaha",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Nije neki eksponat",
              rating: 2,
            },
            {
              id: 3,
              from: "ana@test.com",
              message: "Ne svidja mi se",
              rating: 4,
            },
          ],
        },
        {
          id: 3,
          name: "the-grave-mask-of-king-amenemope",
          description:
            "Usermaatre Amenemope was an ancient Egyptian pharaoh of the 21st Dynasty. During his reign as Pharaoh, Amenemope claimed the title of 'High Priest of Amun in Tanis' as Psusennes also did before him. Amenemope's authority was fully recognized at Thebes – at this time governed by the High Priest of Amun Smendes II and then by his brother Pinedjem II – as his name appears on funerary goods of at least nine Theban burials, among these is the Book of the Dead of the 'Captain of the barque of Amun', Pennestawy, dating to Amenemope's Year 5.",
          image: "../../images/exhibits/pharaohs-of-egypt/amenemope-mask.jpg",
          price: 21,
          time: 5,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Nije lose",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Moze i bolje",
              rating: 2,
            },
          ],
        },
        {
          id: 7,
          name: "nefertiti-bust",
          description:
            "The Nefertiti Bust is a painted stucco-coated limestone bust of Nefertiti, the Great Royal Wife of Egyptian pharaoh Akhenaten. The work is believed to have been crafted in 1345 BCE by Thutmose because it was found in his workshop in Amarna, Egypt. It is one of the most-copied works of ancient Egypt. Nefertiti has become one of the most famous women of the ancient world and an icon of feminine beauty.",
          image: "../../images/exhibits/pharaohs-of-egypt/nefertiti-bust.jpg",
          price: 29,
          time: 6,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Nije lose",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Moze i bolje",
              rating: 2,
            },
          ],
        },
        {
          id: 8,
          name: "mummy-mask-of-wendjebauendjed",
          description:
            "Wendjebauendjed was an ancient Egyptian general, high dignitary and high priest during the reign of pharaoh Psusennes I of the 21st Dynasty. He is mainly known for his intact tomb found by Pierre Montet inside the royal necropolis of Tanis (NRT III). Nothing is known about his life other than his occupations: Wendjebauendjed held an impressive list of military, administrative and religious titles, such as Hereditary prince and count, Seal-bearer of the King of Lower Egypt, God's father, General and Army leader, High steward (later High priest) of Khonsu, Priest of 'Osiris lord of Mendes', Superintendent of the Prophets of all the gods and Superintendent of the Sole Friend. The fact that Wendjebauendjed held such important offices granted him the great honor to be buried in the royal necropolis even though he was not a royal personage. According to one of his titles, it is possible that he was a native of Mendes (Djedet).",
          image:
            "../../images/exhibits/pharaohs-of-egypt/mummy-mask-of-wendjebauendjed.jpg",
          price: 11,
          time: 7,
          countryOfOrigin: "Egypt",
          comments: [
            {
              id: 1,
              from: "stefan@test.com",
              message: "Nije lose",
              rating: 4,
            },
            {
              id: 2,
              from: "marko@test.com",
              message: "Moze i bolje",
              rating: 2,
            },
          ],
        },
      ],
      status: "Finished",
    },
  ]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [selectedExhibits, setSelectedExhibits] = useState([]);

  const addExhibit = (exhibit) => {
    setSelectedExhibits((prevState) => {
      return [...prevState, exhibit];
    });
  };

  const removeExhibit = (clickedExhibit) => {
    setSelectedExhibits(
      selectedExhibits.filter((exhibit) => {
        return exhibit.name !== clickedExhibit.name;
      })
    );
  };

  const makeTour = (name, description, currentUser) => {
    setTours((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          name,
          description,
          maker: currentUser,
          selectedExhibits,
          status: "Ongoing",
        },
      ];
    });

    setSelectedExhibits([]);
  };

  const deleteTour = (tourName) => {
    setTours(
      tours.filter((tour) => {
        return tour.name !== tourName;
      })
    );

    setFilteredTours(
      filteredTours.filter((tour) => {
        return tour.name !== tourName;
      })
    );
  };

  const filterTours = (priceFrom, priceTo, lengthInMins, status) => {
    return setFilteredTours(
      tours.filter((tour) => {
        const tourTime = tour.selectedExhibits
          .map((tour) => {
            return tour.time;
          })
          .reduce((prev, cur) => {
            return prev + cur;
          });

        const tourPrice = tour.selectedExhibits
          .map((tour) => {
            return tour.price;
          })
          .reduce((prev, cur) => {
            return prev + cur;
          });

        return (
          tourPrice >= priceFrom &&
          tourPrice <= priceTo &&
          tourTime <= lengthInMins &&
          tour.status === status
        );
      })
    );
  };

  const toursValue = {
    tours,
    addExhibit,
    removeExhibit,
    makeTour,
    deleteTour,
    filterTours,
    filteredTours,
    selectedExhibits,
  };

  return (
    <ToursContext.Provider value={toursValue}>
      {props.children}
    </ToursContext.Provider>
  );
};

export default ToursContextProvider;
