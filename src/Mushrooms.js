const MUSHROOMS = [
    {
        id: 0, 
        genus: "Agaricus",
        specific: "Bisporus",
        image: "./images/agaricus.jpg",
        imageAttr: `Agaricus Bisporus, image created by wikioticsIan & Licensed under Creative Commons
        Attribution-Share Alike 2.0 Generic license.`,
        description: `A commonly found mushroom in grasslands and forests where it grows on the dung of various herbivores such as cows, deer, and elk.
        The size of the cap will vary from about one  inch up to six inches, convex or flat in shape. 
        Color will be white or brown. Gills are free and detached from stem, which is itself about half 
        an inch to an inch thick. Flesh will bruise pink when damaged. Spore print is dark brown. Commonly known
        as the Portobello. In the immature or
        button stage they can be confused with the destroying angel, a deadly mushroom.`,
        common: 'Portobello Mushrooms',
        features: [1, 3, 9],
    },
    {
        id: 1, 
        genus: "Armillaria",
        specific: "Tabescens",
        image: "./images/armillaria.jpg",
        imageAttr: `Armillaria Tabescens, image created by Jon @ Mushroom Observer & Licensed under Creative Commons Attribution-Share Alike 3.0 Unported license.`,
        description: `A relatively common mushroom in forests in North America, the honey mushroom is a parasite of hardwood trees, attacking the roots of the tree and draining nutrients. The cap is 1-2.5 inches across at full size, and convex, possibly flattening out in older mushrooms. Gills are joined to the stem and run down it, and the stem itself can grow as long as 3 inches and will be as thick as half an inch. The flesh is white or tan, and will not bruise. It leaves a white spore print. Look-alike species include the highly toxic Deadly Galerina, the Sulphur Tuft, and the Jack O'Lantern mushroom.`,
        common: 'Honey Mushroom',
        features: [0, 5, 8],
    },
    {
        id: 2,
        genus: "Boletus",
        specific: "Edulis",
        image: "./images/boletus.jpg",
        imageAttr: "Boletus Edulis, image created by Tocekas & Licensed under Creative Commons Attribution-Share Alike 3.0 Unported license.",
        description: "Common to the Northeast but has been found as far south as Florida. This mushroom forms mycorrhizal relationships with the roots of various trees, especially spruces. Cap is roughly 2-4 inches across, initially convex but becoming nearly flat in maturity. Stem is 2-4 inches in length, 1-1.5 inches thick, and is club shaped. Inner flesh is white and doesn't bruise. It's spore print is light brown to olive colored. Sometimes confused with the mildly poisonous Rubroboletus satanas which is also known as Satan's Bolete",
        common: "Bolete/Penny Bun",
        features: [2, 4, 7]
    },
    {
        id: 3,
        genus: "Cantharellus",
        specific: "Lewisii",
        image: "./images/cantharellus.jpg",
        imageAttr: "Cantharellus Lewisii, image created by Ron Pastorino & Licensed under Creative Commons Attribution-Share Alike 3.0 Unported license.",
        description: "A mushroom only found in the southeastern United States, which associates with flood plain hardwood via a mycorrhizal association. The mushroom appears at first glance to have gills, but in fact they're false gills that do not separate from the cap. The cap is roughly 1-4 inches across in maturity. The cap is convex when young, flattening out large, and has an irregular wavy pattern. The stem is roughly an inch in length, and half an inch to three quarters of an inch thick. Its spore print is orange. Sometimes confused with the poisonous Omphalotus olearius, or Jack O'Lantern mushroom.",
        common: "Chanterelle",
        features: [0, 6, 7]
    }
]

export default MUSHROOMS;