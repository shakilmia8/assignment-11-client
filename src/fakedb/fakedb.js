const services = [
    {
        id: 101,
        name: 'Dhaka',
        country: 'Bangladesh',
        describe: 'Dhaka (or Dacca) is the capital and largest city of Bangladesh. It is the cultural and economic hub of the country. Having a colossal historical background, the old part of the city, known as Old Dhaka or Old Town, is home to a broad range of architectural heritage starting from the vestiges of the Mughal Empire to the British Colonial buildings. Being the centre of the independence movements of Bangladesh, Dhaka also hosts some significant national monuments and structures. There are a number of annual cultural events held in Dhaka like Pohela Falgun, Pohela Baishakh and Ekushe Book Fair which add a unique flavour to the city.The modernization and development of Dhaka during the last couple of decades and a corrupt governing and middle class has made the development of international five star chain hotels profitable and spurred the building of some of the largest shopping malls in the world. There are some cracking amusement parks and a surplus of cheap labour has meant that international restaurant chains are cheaper here than in the neighbouring countries.',
        img: 'https://media-eng.dhakatribune.com/uploads/2020/04/mahmud-hossain-opu-1585754078405.jpg'
    },
    {
        id: 102,
        name: "Cox's Bazar",
        country: 'Bangladesh',
        describe: "Cox's Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km. For Bangladeshi's it doesn't get much better than Cox's Bazar, the country's most popular beach town than the other one 'Kuakata beach town. It's sort of a Cancun of the east. It's choc-a-bloc with massive well-architectured concrete structures, affluent 5 & 3 star hotels, catering largely to the country's elite and overseas tourists. The beach is only a bit crowded in tourist season, October to March, especially near the hotel-motel zone, but remains virgin during the rest of the year, April to September, when it's better to take a trip there. The part of the 120 km beach is named differently having diversified flora & fauna. It starts with 'Laboni Beach,' Sughandha Beach' within the Cox's Bazar region and 10 km south is known as 'Himchari Beach',30 km fur known as 'Inani Beach' and more 70 km off is the 'Teknaf Beach'. Things should be quieter here, but still expect to draw great attention. The entire 120 km beach can be traveled in one go by motorbike. The more one gets into the south, the more the ocean water becomes blue.",
        img: 'https://cf.bstatic.com/xdata/images/city/375x225/666843.jpg?k=4744586c4a79c997023e878de81730e457af8a28a1178d29f92f7677e658f95a&o='
    },
    {
        id: 103,
        name: "Bandarban",
        country: 'Bangladesh',
        describe: "Bandarban Hill District is the most remote and least populated district in Bangladesh. The lure of the tallest peaks of Bangladesh, treks through virgin forests and chance to meet more than 15 tribes of the region up close is growing both among Bangladeshis and tourists from other countries. Since the insurgency ceased in the Chittagong Hill Tracts (a cluster that includes all three hill districts of Bangladesh) it has opened up for tourists more than a decade back, though some of the western tourist guides may still describe the area as a major security risk.It is governed by a Hill Council under the Bangladesh government, headed by the King of Mong Circle. The current monarch, His Highness King Aung Shue Prue Chowdhury, is the 15th to sit on the throne. The front hall (Raj Durbar) of the Royal Palace is open to visitors, provided that appropriate behavior is maintained. Interestingly the 13th Royal Family claims the current Family to be usurpers to the throne.",
        img: 'http://res.cloudinary.com/dmot3d1ws/image/upload/f_auto/v1597512545/blogger/g4upshzgu1mg5ltazgeo.jpg'
    },
    {
        id: 104,
        name: "Goa",
        country: 'India',
        describe: "Goa, a state on India's West coast, is a former Portuguese colony with a rich history. Spread over 3,700 square kilometres with a population of approximately 1.8 million, Goa is small by Indian standards. It has a unique mix of Indian and Portuguese cultures and architecture that attracts an estimated 2.5 million visitors each year (including about 400,000 foreign tourists). Since the 1960s, Goa has been attracting a steady flow of visitors -- first the hippies and returning expatriate Goans, then the charter tourists (starting with the Germans in 1987), pilgrims visiting Catholic and Hindu shrines, those opting to settle in Goa as their home, people going for medical treatment, and a growing number of those who attend seminars and conferences in Goa.Goa is visibly different from the rest of India, owing to Portuguese rule which isolated it from the rest of India for 451 years. The Goan population is a mixture of Hindus and Roman Catholics, the distribution being approximately 65% Hindu and 24% Christian. There is also a smaller Muslim population. Despite this, communal violence has been virtually non-existent and Goa is regarded as one of the most peaceful states in India.",
        img: 'https://www.planetware.com/wpimages/2020/06/india-goa-best-beaches-vagator-beach.jpg'
    },
    {
        id: 105,
        name: "Bankok",
        country: 'Thailand',
        describe: "Bangkok, official name Krung Thep Maha Nakhon, is the capital of Thailand and, with a population of over eleven million inhabitants, by far its largest city. Its high-rise buildings, heavy traffic congestion, intense heat and naughty nightlife may not immediately give you the best impression — but don't let that mislead you. It is one of Asia's most cosmopolitan cities with magnificent temples and palaces, authentic canals, busy markets and a vibrant nightlife that has something for everyone.For years, it was only a small trading post at the banks of the Chao Phraya River, until King Rama I, the first monarch of the present Chakri dynasty, turned it into the capital of Siam in 1782, after the burning of Ayutthaya by Burmese invaders but they did not take over Ayutthaya. Since then, Bangkok has turned into a national treasure house and functions as Thailand's spiritual, cultural, political, commercial, educational and diplomatic centre. From the moment you arrive, Bangkok is an invigorating assault on the senses. The heat, the noise, and the smells will leave you reeling if you're not used to the insanity of Asia's mega cities. It certainly is not a destination that many people will forget in a hurry.",
        img: 'https://a.cdn-hotels.com/gdcs/production168/d707/c3156d7b-ce5a-4a5c-9a99-002b0ff57fe8.jpg'
    },
    {
        id: 106,
        name: "London",
        country: 'England',
        describe: "London's vast urban area is often described using a set of district names, such as Bloomsbury, Mayfair, Wembley and Whitechapel. These are either informal designations, reflect the names of villages that have been absorbed by sprawl, or are superseded administrative units such as parishes or former boroughs. Such names have remained in use through tradition, each referring to a local area with its own distinctive character, but without official boundaries. Since 1965 Greater London has been divided into 32 London boroughs in addition to the ancient City of London.[204][205] The City of London is the main financial district,[206] and Canary Wharf has recently developed into a new financial and commercial hub in the Docklands to the east. The West End is London's main entertainment and shopping district, attracting tourists.[207] West London includes expensive residential areas where properties can sell for tens of millions of pounds.[208] The average price for properties in Kensington and Chelsea is over £2 million, with a similarly high outlay in most of central London.[209][210] The East End is the area closest to the original Port of London, known for its high immigrant population, as well as for being one of the poorest areas in London.[211] The surrounding East London area saw much of London's early industrial development; now, brownfield sites throughout the area are being redeveloped as part of the Thames Gateway including the London Riverside and Lower Lea Valley, which was developed into the Olympic Park for the 2012 Olympics and Paralympics.",
        img: 'https://www.english-culture.com/wp-content/uploads/2016/01/London-view-Big-Ben-London-Eye.jpg'
    },
]