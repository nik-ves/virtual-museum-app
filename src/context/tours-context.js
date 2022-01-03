import React, { useState } from "react";

export const ToursContext = React.createContext({
  tours: [],
  addExhibit: () => {},
  removeExhibit: () => {},
  makeTour: () => {},
  deleteTour: () => {},
  selectedExhibits: [],
});

const ToursContextProvider = (props) => {
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Mixed history",
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
          price: 10,
          time: 5,
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
          price: 10,
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
          id: 3,
          name: "the-grave-mask-of-king-amenemope",
          description:
            "Usermaatre Amenemope was an ancient Egyptian pharaoh of the 21st Dynasty. During his reign as Pharaoh, Amenemope claimed the title of 'High Priest of Amun in Tanis' as Psusennes also did before him. Amenemope's authority was fully recognized at Thebes – at this time governed by the High Priest of Amun Smendes II and then by his brother Pinedjem II – as his name appears on funerary goods of at least nine Theban burials, among these is the Book of the Dead of the 'Captain of the barque of Amun', Pennestawy, dating to Amenemope's Year 5.",
          image: "../../images/exhibits/pharaohs-of-egypt/amenemope-mask.jpg",
          price: 10,
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
          id: 4,
          name: "statue-of-khafra",
          description:
            "Khafre Enthroned is a funerary statue of the Pharaoh Khafre, who reigned during the Fourth Dynasty of ancient Egypt (c. 2570 BCE). It is now located in the Egyptian Museum in Cairo. The construction is made of anorthosite gneiss (related to diorite), a valuable, extremely hard, and dark stone brought 400 miles down the Nile River from royal quarries. This highlights Khafre's importance and power as a ruler. The statue was carved for the Pharaoh's valley temple near the Great Sphinx, a part of the necropolis (funerary city) used in funeral rituals. This Old Kingdom statue has an important function in Egyptian tombs as substitute abodes for the Pharaoh's ka—the life force that accompanied a person with a kind of other self. After death, the ka leaves the body into the afterlife, but still needs a place to rest: the statue.",
          image: "../../images/exhibits/pharaohs-of-egypt/statue-of-khafra.jpg",
          price: 10,
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
          id: 5,
          name: "statue-of-menkaure",
          description:
            "Menkaure was an ancient Egyptian king (pharaoh) of the fourth dynasty during the Old Kingdom, who is well known under his Hellenized names Mykerinos and Menkheres. According to Manetho, he was the throne successor of king Bikheris, but according to archaeological evidence he was rather the successor of king Khafre. Africanus (from Syncellus) reports as rulers of the fourth dynasty Sôris, Suphis I, Suphis II, Mencherês, Ratoisês, Bicheris, Sebercherês, and Thamphthis in this order. Menkaure became famous for his tomb, the Pyramid of Menkaure, at Giza and his statue triads, showing the king together with his wives Rekhetre and Khamerernebty and with various deities.",
          image:
            "../../images/exhibits/pharaohs-of-egypt/statue-of-menkaure.jpg",
          price: 10,
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
          id: 6,
          name: "merneptah-stele",
          description:
            "The Merneptah Stele – also known as the Israel Stele or the Victory Stele of Merneptah – is an inscription by the ancient Egyptian Pharaoh Merneptah (reign: 1213–1203 BCE) discovered by Flinders Petrie in 1896 at Thebes, and now housed in the Egyptian Museum in Cairo. The text is largely an account of Merneptah's victory over the Libyans and their allies, but the last 3 of the 28 lines deal with a separate campaign in Canaan, then part of Egypt's imperial possessions. The stele is sometimes referred to as the 'Israel Stele' because a majority of scholars translate a set of hieroglyphs in line 27 as 'Israel'. Alternative translations have been advanced but are not widely accepted.",
          image: "../../images/exhibits/pharaohs-of-egypt/merneptah-stele.jpg",
          price: 10,
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
            "The Nefertiti Bust is a painted stucco-coated limestone bust of Nefertiti, the Great Royal Wife of Egyptian pharaoh Akhenaten.[1] The work is believed to have been crafted in 1345 BCE by Thutmose because it was found in his workshop in Amarna, Egypt. It is one of the most-copied works of ancient Egypt. Nefertiti has become one of the most famous women of the ancient world and an icon of feminine beauty.",
          image: "../../images/exhibits/pharaohs-of-egypt/nefertiti-bust.jpg",
          price: 10,
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
          id: 8,
          name: "mummy-mask-of-wendjebauendjed",
          description:
            "Wendjebauendjed was an ancient Egyptian general, high dignitary and high priest during the reign of pharaoh Psusennes I of the 21st Dynasty. He is mainly known for his intact tomb found by Pierre Montet inside the royal necropolis of Tanis (NRT III). Nothing is known about his life other than his occupations: Wendjebauendjed held an impressive list of military, administrative and religious titles, such as Hereditary prince and count, Seal-bearer of the King of Lower Egypt, God's father, General and Army leader, High steward (later High priest) of Khonsu, Priest of 'Osiris lord of Mendes', Superintendent of the Prophets of all the gods and Superintendent of the Sole Friend. The fact that Wendjebauendjed held such important offices granted him the great honor to be buried in the royal necropolis even though he was not a royal personage. According to one of his titles, it is possible that he was a native of Mendes (Djedet).",
          image:
            "../../images/exhibits/pharaohs-of-egypt/mummy-mask-of-wendjebauendjed.jpg",
          price: 10,
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
      ],
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Mixed history 2",
      description: "Mixed history tour 2",
      maker: "stefan@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 2,
          name: "winged-victory-of-samothrace",
          description:
            "The Winged Victory of Samothrace, or the Nike of Samothrace, is a votive monument originally found on the island of Samothrace, north of the Aegean Sea. It is a masterpiece of Greek sculpture from the Hellenistic era, dating from the beginning of the 2nd century BCE. It is composed of a statue representing the goddess Niké, whose head and arms are missing, and its base in the shape of a ship's bow.",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 3,
          name: "riace-bronzes",
          description:
            "The Riace bronzes, also called the Riace Warriors, are two full-size Greek bronzes of naked bearded warriors, cast about 460–450 BC that were found in the sea in 1972 near Riace, Calabria, in southern Italy. The bronzes are now in the Museo Nazionale della Magna Grecia in the nearby city of Reggio Calabria. They are two of the few surviving full-size ancient Greek bronzes (which were usually melted down in later times), and as such demonstrate the superb technical craftsmanship and exquisite artistic features that were achieved at this time.",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 4,
          name: "motya-charioteer",
          description:
            "The Motya (or Mozia) Charioteer is a marble statue dating from the ancient Greek Classical Period. It was found in October 1979 in the ancient city of Motya, originally a Phoenician settlement which occupied the island of San Pantaleo off the coast of Sicily. It is owned by, and on view in, the Museo Giuseppe Whitaker (inv. no. 4310) on the same island.",
          image: "../../images/exhibits/ancient-greece/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 5,
          name: "moschophoros",
          description:
            "Moschophoros is an ancient Greek statue of the Archaic period, also known in English as The Calf Bearer. It was excavated in fragments in the Perserschutt in the Acropolis of Athens in 1864. The statue, dated c. 560 BC and estimated to have originally measured 1.65 meters (5.4 ft) in height, is now in the Acropolis Museum in Athens, Greece.",
          image: "../../images/exhibits/ancient-greece/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
      ],
      status: "Finished",
    },
    {
      id: 3,
      name: "Mixed history 3",
      description: "Mixed history tour 2",
      maker: "nikola@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 2,
          name: "winged-victory-of-samothrace",
          description:
            "The Winged Victory of Samothrace, or the Nike of Samothrace, is a votive monument originally found on the island of Samothrace, north of the Aegean Sea. It is a masterpiece of Greek sculpture from the Hellenistic era, dating from the beginning of the 2nd century BCE. It is composed of a statue representing the goddess Niké, whose head and arms are missing, and its base in the shape of a ship's bow.",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 3,
          name: "riace-bronzes",
          description:
            "The Riace bronzes, also called the Riace Warriors, are two full-size Greek bronzes of naked bearded warriors, cast about 460–450 BC that were found in the sea in 1972 near Riace, Calabria, in southern Italy. The bronzes are now in the Museo Nazionale della Magna Grecia in the nearby city of Reggio Calabria. They are two of the few surviving full-size ancient Greek bronzes (which were usually melted down in later times), and as such demonstrate the superb technical craftsmanship and exquisite artistic features that were achieved at this time.",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 4,
          name: "motya-charioteer",
          description:
            "The Motya (or Mozia) Charioteer is a marble statue dating from the ancient Greek Classical Period. It was found in October 1979 in the ancient city of Motya, originally a Phoenician settlement which occupied the island of San Pantaleo off the coast of Sicily. It is owned by, and on view in, the Museo Giuseppe Whitaker (inv. no. 4310) on the same island.",
          image: "../../images/exhibits/ancient-greece/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 5,
          name: "moschophoros",
          description:
            "Moschophoros is an ancient Greek statue of the Archaic period, also known in English as The Calf Bearer. It was excavated in fragments in the Perserschutt in the Acropolis of Athens in 1864. The statue, dated c. 560 BC and estimated to have originally measured 1.65 meters (5.4 ft) in height, is now in the Acropolis Museum in Athens, Greece.",
          image: "../../images/exhibits/ancient-greece/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
      ],
      status: "Ongoing",
    },
    {
      id: 4,
      name: "Mixed history 4",
      description: "Mixed history tour 4",
      maker: "katarina@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 2,
          name: "winged-victory-of-samothrace",
          description:
            "The Winged Victory of Samothrace, or the Nike of Samothrace, is a votive monument originally found on the island of Samothrace, north of the Aegean Sea. It is a masterpiece of Greek sculpture from the Hellenistic era, dating from the beginning of the 2nd century BCE. It is composed of a statue representing the goddess Niké, whose head and arms are missing, and its base in the shape of a ship's bow.",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 3,
          name: "riace-bronzes",
          description:
            "The Riace bronzes, also called the Riace Warriors, are two full-size Greek bronzes of naked bearded warriors, cast about 460–450 BC that were found in the sea in 1972 near Riace, Calabria, in southern Italy. The bronzes are now in the Museo Nazionale della Magna Grecia in the nearby city of Reggio Calabria. They are two of the few surviving full-size ancient Greek bronzes (which were usually melted down in later times), and as such demonstrate the superb technical craftsmanship and exquisite artistic features that were achieved at this time.",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 4,
          name: "motya-charioteer",
          description:
            "The Motya (or Mozia) Charioteer is a marble statue dating from the ancient Greek Classical Period. It was found in October 1979 in the ancient city of Motya, originally a Phoenician settlement which occupied the island of San Pantaleo off the coast of Sicily. It is owned by, and on view in, the Museo Giuseppe Whitaker (inv. no. 4310) on the same island.",
          image: "../../images/exhibits/ancient-greece/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 5,
          name: "moschophoros",
          description:
            "Moschophoros is an ancient Greek statue of the Archaic period, also known in English as The Calf Bearer. It was excavated in fragments in the Perserschutt in the Acropolis of Athens in 1864. The statue, dated c. 560 BC and estimated to have originally measured 1.65 meters (5.4 ft) in height, is now in the Acropolis Museum in Athens, Greece.",
          image: "../../images/exhibits/ancient-greece/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
      ],
      status: "Finished",
    },
    {
      id: 5,
      name: "Mixed history 5",
      description: "Mixed history tour 5",
      maker: "boban@test.com",
      selectedExhibits: [
        {
          id: 1,
          name: "aphrodite-of-milos",
          description:
            "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. The Venus de Milo has been prominently displayed at the Louvre Museum in Paris since shortly after the statue was rediscovered on the island of Milos, Greece in 1820.",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 2,
          name: "winged-victory-of-samothrace",
          description:
            "The Winged Victory of Samothrace, or the Nike of Samothrace, is a votive monument originally found on the island of Samothrace, north of the Aegean Sea. It is a masterpiece of Greek sculpture from the Hellenistic era, dating from the beginning of the 2nd century BCE. It is composed of a statue representing the goddess Niké, whose head and arms are missing, and its base in the shape of a ship's bow.",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 3,
          name: "riace-bronzes",
          description:
            "The Riace bronzes, also called the Riace Warriors, are two full-size Greek bronzes of naked bearded warriors, cast about 460–450 BC that were found in the sea in 1972 near Riace, Calabria, in southern Italy. The bronzes are now in the Museo Nazionale della Magna Grecia in the nearby city of Reggio Calabria. They are two of the few surviving full-size ancient Greek bronzes (which were usually melted down in later times), and as such demonstrate the superb technical craftsmanship and exquisite artistic features that were achieved at this time.",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 4,
          name: "motya-charioteer",
          description:
            "The Motya (or Mozia) Charioteer is a marble statue dating from the ancient Greek Classical Period. It was found in October 1979 in the ancient city of Motya, originally a Phoenician settlement which occupied the island of San Pantaleo off the coast of Sicily. It is owned by, and on view in, the Museo Giuseppe Whitaker (inv. no. 4310) on the same island.",
          image: "../../images/exhibits/ancient-greece/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 5,
          name: "moschophoros",
          description:
            "Moschophoros is an ancient Greek statue of the Archaic period, also known in English as The Calf Bearer. It was excavated in fragments in the Perserschutt in the Acropolis of Athens in 1864. The statue, dated c. 560 BC and estimated to have originally measured 1.65 meters (5.4 ft) in height, is now in the Acropolis Museum in Athens, Greece.",
          image: "../../images/exhibits/ancient-greece/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
      ],
      status: "Ongoing",
    },
  ]);
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
  };

  const toursValue = {
    tours,
    addExhibit,
    removeExhibit,
    makeTour,
    deleteTour,
    selectedExhibits,
  };

  return (
    <ToursContext.Provider value={toursValue}>
      {props.children}
    </ToursContext.Provider>
  );
};

export default ToursContextProvider;
