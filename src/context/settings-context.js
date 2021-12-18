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
          name: "brooding-soldier",
          description:
            "Tree limbs surround the World War One Canadian Memorial, also known as the 'Brooding Soldier' in St. Julien, Belgium on March 7, 2014. The statue is a memorial to the Canadian troops who died in the first gas attacks of the First World War in 1915.",
          image: "../../images/exhibits/world-war-i/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 2,
          name: "ub148",
          description:
            "The former German submarine UB 148 at sea, after having been surrendered to the Allies. UB-148, a small coastal submarine, was laid down during the winter of 1917 and 1918 at Bremen, Germany, but never commissioned in the Imperial German Navy. She was completing preparations for commissioning when the armistice of November 11 ended hostilities. On November 26, UB-148 was surrendered to the British at Harwich, England. Later, when the United States Navy expressed an interest in acquiring several former U-boats to use in conjunction with a Victory Bond drive, UB-148 was one of the six boats allocated for that purpose.",
          image: "../../images/exhibits/world-war-i/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 3,
          name: "maplewood",
          description:
            "British cargo ship SS Maplewood under attack by German submarine SM U-35 on April 7, 1917, 47 nautical miles/87 km southwest of Sardinia. The U-35 participated in the entire war, becoming the most successful U-boat in WWI, sinking 224 ships, killing thousands.",
          image: "../../images/exhibits/world-war-i/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 4,
          name: "german-trenches",
          description:
            "French soldiers standing in German trenches seized after being shelled on the Somme front, northern France in 1916.",
          image: "../../images/exhibits/world-war-i/4.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 5,
          name: "battle-of-the-somme",
          description:
            "Wounded are dressed in a trench during the Courcelette operation of the Battle of the Somme, France on September 15, 1916. July 1, 2016, marks the 100th anniversary of the first Battle of the Somme -- one of the bloodiest battles in history which claimed 1,250,000 casualties.",
          image: "../../images/exhibits/world-war-i/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
      ],
      exhibitsType: ["Masks"],
      image: "../../images/settings/ww1.jpg",
    },
    {
      id: 4,
      name: "World War II",
      type: "Art",
      params: "world-war-ii",
      shortDescription: "",
      longDescription: {
        1: "World War II or the Second World War, often abbreviated as WWII or WW2, was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis powers. In a total war directly involving more than 100 million personnel from more than 30 countries, the major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. Aircraft played a major role in the conflict, enabling the strategic bombing of population centres and the only two uses of nuclear weapons in war. World War II was by far the deadliest conflict in human history; it resulted in 70 to 85 million fatalities, a majority being civilians. Tens of millions of people died due to genocides (including the Holocaust), starvation, massacres, and disease. In the wake of the Axis defeat, Germany and Japan were occupied, and war crimes tribunals were conducted against German and Japanese leaders.",
        2: "World War II is generally considered to have begun on 1 September 1939, when Nazi Germany, under Adolf Hitler, invaded Poland. The United Kingdom and France subsequently declared war on Germany on 3 September. Under the Molotov–Ribbentrop Pact of August 1939, Germany and the Soviet Union had partitioned Poland and marked out their 'spheres of influence' across Finland, Romania and the Baltic states. From late 1939 to early 1941, in a series of campaigns and treaties, Germany conquered or controlled much of continental Europe, and formed the Axis alliance with Italy and Japan (along with other countries later on). Following the onset of campaigns in North Africa and East Africa, and the fall of France in mid-1940, the war continued primarily between the European Axis powers and the British Empire, with war in the Balkans, the aerial Battle of Britain, the Blitz of the UK, and the Battle of the Atlantic. On 22 June 1941, Germany led the European Axis powers in an invasion of the Soviet Union, opening the Eastern Front, the largest land theatre of war in history.",
        3: "World War II changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became the permanent members of its Security Council. The Soviet Union and the United States emerged as rival superpowers, setting the stage for the nearly half-century-long Cold War. In the wake of European devastation, the influence of its great powers waned, triggering the decolonisation of Africa and Asia. Most countries whose industries had been damaged moved towards economic recovery and expansion. Political integration, especially in Europe, began as an effort to forestall future hostilities, end pre-war enmities and forge a sense of common identity.",
      },
      exhibits: [
        {
          id: 1,
          name: "operation-dynamo",
          description:
            "After German soldiers swept through Belgium and Northern France in a blitzkrieg in May of 1940, all communication and transport between Allied forces were cut, leaving thousands of troops stranded. Operation Dynamo was quickly put in place to evacuate the Allies stuck along the beaches of Dunkirk, France. Soldiers waded through the water hoping to escape by rescue vessels, military ships, or civilian ships. More than 338,000 soldiers were saved during what would be later called, the 'Miracle of Dunkirk.'",
          image: "../../images/exhibits/world-war-ii/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 2,
          name: "d-day",
          description:
            "The Normandy landings were the landing operations and associated airborne operations on Tuesday, 6 June 1944 of the Allied invasion of Normandy in Operation Overlord during World War II. Codenamed Operation Neptune and often referred to as D-Day, it was the largest seaborne invasion in history. The operation began the liberation of France (and later western Europe) and laid the foundations of the Allied victory on the Western Front.'",
          image: "../../images/exhibits/world-war-ii/2.png",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 3,
          name: "german-surrender",
          description:
            "On 8 May 1945, in Berlin, Field Marshal Wilhelm Keitel signs the Act of Unconditional Military Surrender of the German Armed Forces.",
          image: "../../images/exhibits/world-war-ii/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 4,
          name: "auschwitz",
          description:
            "On January 27, 1945, the Soviet army entered Auschwitz and found approximately 7,600 Jewish detainees who had been left behind. Here, a doctor of the 322nd Rifle Division of the Red Army helps take survivors out of Auschwitz. They stand at the entrance, where its iconic sign reads “Arbeit Mecht Frei,” (“Work Brings Freedom”). The Soviet Army also discovered mounds of corpses and hundreds of thousands of personal belongings.",
          image: "../../images/exhibits/world-war-ii/4.jpeg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 5,
          name: "american-victory",
          description:
            "This Pulitzer Prize winning photo has become synonymous with American victory. Taken during the Battle of Iwo Jima by Associated Press photographer Joe Rosenthal, it is one of the most reproduced, and copied, photographs in history. During the battle, marines took an American flag to the highest point on the island: Mount Suribachi. U.S. Marine photographer Louis Lowery captured the original shot but several hours later, more Marines headed to the crest with a larger flag. It was on this second attempt, that the iconic image was snapped. Three of the six soldiers seen raising the flag in the famous Rosenthal photo were killed during the Battle of Iwo Jima.",
          image: "../../images/exhibits/world-war-ii/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 6,
          name: "v-j-day",
          description:
            "Photographer Alfred Eisenstaedt captured this photo in Time Square on Victory against Japan Day (“V-J Day”), August 14, 1945. Sailor George Mendonsa saw dental assistant Greta Zimmer Friedman for the first time among the celebration at V-J Day. He grabbed and kissed her. This photograph would go on to become one of the most well-known in history, while also stirring up controversy. Many women have claimed to be the nurse over the years, some saying it depicts a nonconsensual moment, even sexual harassment.",
          image: "../../images/exhibits/world-war-ii/6.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
      ],
      exhibitsType: ["Masks"],
      image: "../../images/settings/ww2.jpg",
    },
    {
      id: 5,
      name: "Cold War",
      type: "Art",
      params: "cold-war",
      shortDescription: "",
      longDescription: {
        1: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, the Western Bloc and the Eastern Bloc, which began following World War II. Historians do not fully agree on its starting and ending points, but the period is generally considered to span the 1947 Truman Doctrine (12 March 1947) to the 1991 Dissolution of the Soviet Union (26 December 1991). The term cold war is used because there was no large-scale fighting directly between the two superpowers, but they each supported major regional conflicts known as proxy wars. The conflict was based around the ideological and geopolitical struggle for global influence by these two superpowers, following their temporary alliance and victory against Nazi Germany in 1945. Aside from the nuclear arsenal development and conventional military deployment, the struggle for dominance was expressed via indirect means such as psychological warfare, propaganda campaigns, espionage, far-reaching embargoes, rivalry at sports events and technological competitions such as the Space Race.",
        2: "The Western Bloc was led by the United States as well as the other First World nations of the Western Bloc that were generally liberal democratic but tied to a network of the authoritarian states, most of which were their former colonies. The Eastern Bloc was led by the Soviet Union and its Communist Party, which had an influence across the Second World. The US government supported right-wing governments and uprisings across the world, while the Soviet government funded communist parties and revolutions around the world. As nearly all the colonial states achieved independence in the period 1945–1960, they became Third World battlefields in the Cold War.",
        3: "The first phase of the Cold War began shortly after the end of the Second World War in 1945. The United States and its allies created the NATO military alliance in 1949 in the apprehension of a Soviet attack and termed their global policy against Soviet influence containment. The Soviet Union formed the Warsaw Pact in 1955 in response to NATO. Major crises of this phase included the 1948–49 Berlin Blockade, the 1927–1949 Chinese Civil War, the 1950–1953 Korean War, the 1956 Hungarian Revolution, the 1956 Suez Crisis, the Berlin Crisis of 1961 and the 1962 Cuban Missile Crisis. The US and the USSR competed for influence in Latin America, the Middle East, and the decolonizing states of Africa and Asia.",
      },
      exhibits: [
        {
          id: 1,
          name: "ivy-mike",
          description:
            "Ivy Mike was the codename given to the first full-scale test of a thermonuclear device, in which part of the explosive yield comes from nuclear fusion. Ivy Mike was detonated on November 1, 1952, by the United States on the island of Elugelab in Enewetak Atoll, in the now independent island nation of the Marshall Islands, as part of Operation Ivy. It was the first full test of the Teller–Ulam design, a staged fusion device. As a result of the collection of samples from the explosion by U.S. Air Force pilots, scientists found traces of the isotopes plutonium-246 and plutonium-244, and confirmed the existence of the predicted but undiscovered elements einsteinium and fermium.",
          image: "../../images/exhibits/cold-war/1.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 2,
          name: "fall-of-the-berlin-wall",
          description:
            "The fall of the Berlin Wall on 9 November 1989 was a pivotal event in world history which marked the falling of the Iron Curtain and the start of the fall of communism in Eastern and Central Europe. The fall of the inner German border took place shortly afterwards. An end to the Cold War was declared at the Malta Summit three weeks later and the German reunification took place in October the following year.",
          image: "../../images/exhibits/cold-war/2.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 3,
          name: "space-race",
          description:
            "The Space Race was a 20th-century competition between two Cold War adversaries, the Soviet Union (USSR) and the United States of America (USA), to achieve superior spaceflight capability. It had its origins in the ballistic missile-based nuclear arms race between the two nations following World War II. The technological advantage demonstrated by spaceflight achievement was seen as necessary for national security, and became part of the symbolism and ideology of the time. The Space Race brought pioneering launches of artificial satellites, robotic space probes to the Moon, Venus, and Mars, and human spaceflight in low Earth orbit and ultimately to the Moon.",
          image: "../../images/exhibits/cold-war/3.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 4,
          name: "august-coup",
          description:
            "The 1991 Soviet coup d'état attempt, also known as the August Coup, was a failed attempt made by communist hard-liners of the Soviet Union to take control of the country from Mikhail Gorbachev, who was Soviet President and General Secretary of the party. The coup leaders consisted of top military and civilian officials who formed the State Committee on the State of Emergency (GKChP). They were hard-line opponents of Gorbachev's reform program, angry at the loss of control over Eastern European states, and fearful of the new union treaty that was about to be signed. The treaty decentralized much of the central government's power to the 15 republics. The hard-liners were very poorly organized. They met defeat by a short but effective campaign of anticommunist counterrevolutionaries, mainly in Moscow, led by Russian president Boris Yeltsin, who had been both an ally and critic of Gorbachev. The coup collapsed in only two days and Gorbachev returned to office, while all the plotters lost office. Yeltsin became the dominant leader and Gorbachev lost much of his influence. The failed coup led to both the immediate collapse of the Communist Party of the Soviet Union and the dissolution of the USSR four months later.",
          image: "../../images/exhibits/cold-war/4.png",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 5,
          name: "apollo-soyuz",
          description:
            "American astronaut Thomas P. Stafford (right) and Soviet cosmonaut Alexei Leonov (left) shake hands in outer space, 1975. Apollo–Soyuz was the first manned international space mission, carried out jointly by the United States and the Soviet Union in July 1975. Millions of people around the world watched on television as a United States Apollo module docked with a Soviet Union Soyuz capsule. The project, and its memorable handshake in space, was a symbol of détente between the two superpowers during the Cold War, and it is generally considered to mark the end of the Space Race, which had begun in 1957 with the Soviet Union's launch of Sputnik 1.",
          image: "../../images/exhibits/cold-war/5.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
        {
          id: 6,
          name: "cuban-missile-crisis",
          description:
            "The Cuban Missile Crisis, also known as the October Crisis of 1962, the Caribbean Crisis, or the Missile Scare, was a 1-month, 4 day (16 October – 20 November 1962) confrontation between the United States and the Soviet Union which escalated into an international crisis when American deployments of missiles in Italy and Turkey were matched by Soviet deployments of similar ballistic missiles in Cuba. Despite the short time frame, the Cuban Missile Crisis remains a defining moment in U.S. national security and nuclear war preparation. The confrontation is often considered the closest the Cold War came to escalating into a full-scale nuclear war.",
          image: "../../images/exhibits/cold-war/6.jpg",
          price: 33,
          time: 5,
          countryOfOrigin: "Egypt",
          grade: [3, 4, 1, 5, 2],
        },
      ],
      exhibitsType: ["Masks"],
      image: "../../images/settings/cold-war.jpg",
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
