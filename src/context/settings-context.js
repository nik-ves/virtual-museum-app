import React, { useState } from "react";

export const SettingsContext = React.createContext({
  settingsList: [],
  filteredSettings: [],
  filterSettings: () => {},
});

const SettingsContextProvider = (props) => {
  const [settingsList] = useState([
    {
      id: 1,
      name: "Pharaohs of Egypt",
      type: "Art",
      params: "pharaohs-of-egypt",
      shortDescription:
        "The Pharaoh in ancient Egypt was the political and religious leader of the people and held the titles 'Lord of the Two Lands' and 'High Priest of Every Temple'. The word 'pharaoh' is the Greek form of the Egyptian pero or per-a-a, which was the designation for the royal residence and means `Great House'.",
      longDescription: {
        1: 'Pharaoh is the common title now used for the monarchs of ancient Egypt from the First Dynasty until the annexation of Egypt by the Roman Empire in 30 BCE, although the term "pharaoh" was not used contemporaneously for a ruler until Merneptah, during the Nineteenth dynasty, "king" being the term used most frequently until the middle of the Eighteenth Dynasty. In the early dynasties, ancient Egyptian kings used to have up to three titles: the Horus, the Sedge and Bee, and the Two Ladies or Nebty name. The Golden Horus as well as the nomen and prenomen titles were added later.',
        2: "In Egyptian society, religion was central to everyday life. One of the roles of the pharaoh was as an intermediary between the deities and the people. The pharaoh thus deputised for the deities in a role that was both as civil and religious administrator. The pharaoh owned all of the land in Egypt, enacted laws, collected taxes, and defended Egypt from invaders as the commander-in-chief of the army. Religiously, the pharaoh officiated over religious ceremonies and chose the sites of new temples. The pharaoh was responsible for maintaining Maat, or cosmic order, balance, and justice, and part of this included going to war when necessary to defend the country or attacking others when it was believed that this would contribute to Maat, such as to obtain resources.",
        3: 'During the early days prior to the unification of Upper and Lower Egypt, the Deshret or the "Red Crown", was a representation of the kingdom of Lower Egypt, while the Hedjet, the "White Crown", was worn by the kings of the kingdom of Upper Egypt. After the unification of both kingdoms into one united Egypt, the Pschent, the combination of both the red and white crowns was the official crown of kings. With time new headdresses were introduced during different dynasties such as the Khat, Nemes, Atef, Hemhem crown, and Khepresh. At times, it was depicted that a combination of these headdresses or crowns would be worn together.',
      },
      exhibits: [
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
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
          grade: [1, 2, 3],
        },
      ],
      exhibitsType: ["Masks", "Vases"],
      image: "../../images/settings/pharaohs-of-egypt.jpeg",
    },
    {
      id: 2,
      name: "Ancient Greece",
      type: "Art",
      params: "ancient-greece",
      shortDescription:
        "Ancient Greece was a civilization that dominated much of the Mediterranean thousands of years ago. Ancient Greece formed the foundation of much of Western culture today. Everything from government, philosophy, science, mathematics, art, literature, and even sports was impacted by the ancient Greeks.",
      longDescription: {
        1: "Ancient Greece was a northeastern Mediterranean civilization, existing from the Greek Dark Ages of the 12th–9th centuries BC to the end of classical antiquity, that comprised a loose collection of culturally and linguistically related city-states and other territories—unified only once, for 13 years, under Alexander the Great's empire. In Western history, the era of classical antiquity was immediately followed by the Early Middle Ages and the Byzantine period.",
        2: "Roughly three centuries after the Late Bronze Age collapse of Mycenaean Greece, Greek urban poleis began to form in the 8th century BC, ushering in the Archaic period and colonization of the Mediterranean Basin. This was followed by the age of Classical Greece, from the Greco-Persian Wars to the 5th to 4th centuries BC. The conquests of Alexander the Great of Macedon spread Hellenistic civilization from the western Mediterranean to Central Asia. The Hellenistic period ended with the conquest of the eastern Mediterranean world by the Roman Republic, and the annexation of the Roman province of Macedonia in Roman Greece, and later the province of Achaea during the Roman Empire.",
        3: "Classical Greek culture, especially philosophy, had a powerful influence on ancient Rome, which carried a version of it throughout the Mediterranean and much of Europe. For this reason, Classical Greece is generally considered the cradle of Western civilization, the seminal culture from which the modern West derives many of its founding archetypes and ideas in politics, philosophy, science, and art.",
      },
      exhibits: [
        {
          id: 1,
          name: "Aphrodite of Milos",
          description: "",
          image: "../../images/exhibits/ancient-greece/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 2,
          name: "Winged Victory of Samothrace",
          description: "",
          image: "../../images/exhibits/ancient-greece/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 3,
          name: "Riace bronzes",
          description: "",
          image: "../../images/exhibits/ancient-greece/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 4,
          name: "The Siren vase",
          description: "",
          image: "../../images/exhibits/ancient-greece/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
        {
          id: 5,
          name: "Motya Charioteer",
          description: "",
          image: "../../images/exhibits/ancient-greece/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2, 3],
        },
      ],
      exhibitsType: ["Vases"],
      image: "../../images/settings/ancient-greece.jpeg",
    },
    {
      id: 3,
      name: "World War I",
      type: "Art",
      params: "world-war-i",
      shortDescription:
        "One of the deadliest conflicts in history, an estimated 9 million were killed in combat, while over 5 million civilians died from occupation, bombardment, hunger or disease.",
      longDescription: {
        1: "World War I, often abbreviated as WWI or WW1, also known as the First World War or the Great War, was a global war that began on 28 July 1914 and ended on 11 November 1918. It involved much of Europe, as well as Russia, the United States and Turkey, and was also fought in the Middle East, Africa and parts of Asia. One of the deadliest conflicts in history, an estimated 9 million were killed in combat, while over 5 million civilians died from occupation, bombardment, hunger or disease. Genocides and the 1918 Spanish flu pandemic spread by the movement of combatants during the war caused many millions of additional deaths worldwide.",
        2: "In 1914, the Great Powers were divided into two opposing alliances, the Triple Entente, consisting of France, Russia, and Britain, and the Triple Alliance, made up of Germany, Austria-Hungary, and Italy. Tensions in the Balkans came to a head on 28 June 1914 following the assassination of Archduke Franz Ferdinand, the Austro-Hungarian heir, by Gavrilo Princip, a Bosnian Serb. Austria-Hungary blamed Serbia and the interlocking alliances involved the Powers in a series of diplomatic exchanges known as the July Crisis. On 28 July, Austria-Hungary declared war on Serbia; Russia came to Serbia's defence and by 4 August, the conflict had expanded to include Germany, France and Britain, along with their respective colonial empires. In November, the Ottoman Empire, Germany and Austria formed the Central Powers, while in April 1915, Italy joined Britain, France, Russia and Serbia as the Allied Powers.",
        3: "Facing a war on two fronts, German strategy in 1914 was to defeat France, then shift its forces to the East and knock out Russia, commonly known as the Schlieffen Plan This failed when their advance into France was halted at the Marne; by the end of 1914, the two sides faced each other along the Western Front, a continuous series of trench lines stretching from the Channel to Switzerland that changed little until 1917. By contrast, the Eastern Front was far more fluid, with Austria-Hungary and Russia gaining, then losing large swathes of territory. Other significant theatres included the Middle East, the Alpine Front and the Balkans, bringing Bulgaria, Romania and Greece into the war.",
        4: "Shortages caused by the Allied naval blockade led Germany to initiate unrestricted submarine warfare in early 1917, bringing the previously neutral United States into the war on 6 April 1917. In Russia, the Bolsheviks seized power in the 1917 October Revolution and made peace in the March 1918 Treaty of Brest-Litovsk, freeing up large numbers of German troops. By transferring these to the Western Front, the German General Staff hoped to win a decisive victory before American reinforcements could impact the war, and launched the March 1918 German Spring Offensive. Despite initial success, it was soon halted by heavy casualties and ferocious defence; in August, the Allies launched the Hundred Days Offensive and although the German army continued to fight hard, it could no longer halt their advance.",
        5: "The Central Powers began to collapse; Bulgaria signed an Armistice on 29 September, followed by the Ottomans on 31 October, then Austria-Hungary on 3 November. Isolated, facing revolution at home and an army on the verge of mutiny, Kaiser Wilhelm abdicated on 9 November and the new German government signed the Armistice of 11 November 1918, bringing the fighting to a close. The 1919 Paris Peace Conference imposed various settlements on the defeated powers, the best known being the Treaty of Versailles. The dissolution of the Russian, German, Ottoman and Austro-Hungarian empires led to numerous uprisings and the creation of independent states, including Poland, Czechoslovakia and Yugoslavia. For reasons that are still debated, failure to manage the instability that resulted from this upheaval during the Interwar period ended with the outbreak of World War II in 1939.",
      },
      exhibits: [
        {
          id: 1,
          name: "mask-of-tutankhamun",
          description:
            "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 in the Valley of the Kings, and is now housed in the Egyptian Museum in Cairo The mask is one of the best-known works of art in the world and a prominent symbol of ancient Egypt.",
          image: "../../images/exhibits/pharaohs-of-egypt/mask1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 2,
          name: "mask-of-tutankhamun",
          description:
            "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 in the Valley of the Kings, and is now housed in the Egyptian Museum in Cairo The mask is one of the best-known works of art in the world and a prominent symbol of ancient Egypt.",
          image: "../../images/exhibits/pharaohs-of-egypt/mask1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [1, 2],
        },
      ],
      exhibitsType: ["Masks"],
      image: "../../images/settings/ww1.jpg",
    },
  ]);
  const [filteredSettings, setFilteredSettings] = useState([]);

  const filterSettings = (
    settingType,
    exhibitType,
    exhibitNumber,
    priceFrom,
    priceTo,
    averageTime,
    grade
  ) => {
    if ((settingType, exhibitType, exhibitNumber)) {
      return setFilteredSettings(
        settingsList.filter((setting) => {
          return (
            setting.type.toLowerCase() === settingType &&
            setting.exhibitsType.includes(exhibitType) &&
            setting.exhibits.length <= exhibitNumber
          );
        })
      );
    } else {
      return setFilteredSettings(
        settingsList.filter((setting) => {
          const settingPrice = setting.exhibits
            .map((exhibit) => {
              return exhibit.price;
            })
            .reduce((prev, cur) => {
              return prev + cur;
            });

          const settingTime = setting.exhibits
            .map((exhibit) => {
              return exhibit.time;
            })
            .reduce((prev, cur) => {
              return prev + cur;
            });

          let average = [];

          setting.exhibits.forEach((exhibit) => {
            let test =
              exhibit.grade.reduce((prev, cur) => {
                return prev + cur;
              }) / exhibit.grade.length;

            average.push(test);
          });

          const averageGradeOfSetting =
            average.reduce((prev, cur) => {
              return prev + cur;
            }) / average.length;

          return (
            setting.type.toLowerCase() === settingType &&
            setting.exhibitsType.includes(exhibitType) &&
            setting.exhibits.length <= exhibitNumber &&
            settingPrice >= priceFrom &&
            settingPrice <= priceTo &&
            settingTime <= averageTime &&
            averageGradeOfSetting <= grade
          );
        })
      );
    }
  };

  const settingValue = {
    settingsList,
    filteredSettings,
    filterSettings,
  };

  return (
    <SettingsContext.Provider value={settingValue}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
