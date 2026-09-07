import { Product } from '../types';

// Authentic Handcrafted Ethiopian Traditional Attire Images
import imgWedding from '../assets/images/ethiopian_wedding_kemis_1788732209665.jpg';
import imgCouple from '../assets/images/ethiopian_couple_attire_1788732224471.jpg';
import imgMeles from '../assets/images/ethiopian_meles_dress_1788732239682.jpg';
import imgAshenda from '../assets/images/ethiopian_ashenda_dress_1788732253732.jpg';
import imgMens from '../assets/images/ethiopian_mens_attire_1788732266539.jpg';
import imgGondar from '../assets/images/ethiopian_gondar_dress_1788732285990.jpg';
import imgChiffon from '../assets/images/ethiopian_chiffon_kemis_1788732300464.jpg';
import imgRaya from '../assets/images/ethiopian_raya_kemis_1788732912052.jpg';
import imgCoffee from '../assets/images/ethiopian_coffee_kemis_1788732926566.jpg';
import imgAxum from '../assets/images/ethiopian_axum_kemis_1788732944239.jpg';
import imgSaba from '../assets/images/ethiopian_saba_kemis_1788732960404.jpg';

export {
  imgWedding,
  imgCouple,
  imgMeles,
  imgAshenda,
  imgMens,
  imgGondar,
  imgChiffon,
  imgRaya,
  imgCoffee,
  imgAxum,
  imgSaba
};

export const PRODUCTS: Product[] = [
  // 1. #የሰርግ (Wedding)
  {
    id: 'prod-serg-01',
    code: 'AH-SERG-01',
    nameAm: 'ሮያል ወርቃማ ጥልፍ የሰርግ ሓበሻ ቀሚስ',
    nameTi: 'ሮያል ወርቃማ ጥልፊ ናይ መርዓ ሓበሻ ቀሚሽ',
    nameEn: 'Royal Gold Embroidered Habesha Wedding Gown',
    categoryGroup: 'events',
    hashtags: ['#የሰርግ', '#የኣክሱም_ፈትል', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የኣክሱም ፈትል ንጹህ ጥጥ ከነነጠላው',
    fabricTi: 'ናይ ኣኽሱም ፈትሊ ጽሩይ ጡጥ ምስ ነጸላኡ',
    fabricEn: 'Pure Axum Handspun Cotton with Netela',
    priceETB: 34500,
    originalPriceETB: 39000,
    image: imgWedding,
    secondaryImages: [
      imgGondar,
      imgMeles,
    ],
    descriptionAm: 'ለሙሽሪት የተዘጋጀ በወርቃማ የጥልፍ ጥበብ ያሸበረቀ፣ ለዓይን የሚስብ ከነ ሙሉ ነጠላውና ሻሹ የተሟላ የሰርግ አልባሳት። በብዛት ለሚታዘዝ ልዩ ቅናሽ አለው።',
    descriptionTi: 'ንመርዓት ዝተዳለወ ብወርቃማ ጥልፊ ጥበብ ዝተሰለመ፣ ምስ ምሉእ ነጸላኡን ሻሹን ዝተማልአ ናይ መርዓ ክዳን። ብብዝሒ ንዝእዝዝ ፍሉይ ቅናሽ ኣለዎ።',
    descriptionEn: 'Exquisite bridal gown with handcrafted golden tibeb patterns, matching full netela and scarf. Available for immediate dispatch or custom measurements.',
    inStock: true,
    tailoringDays: 5,
    featured: true,
    bestSeller: true,
  },

  // 2. #የመልስ (Meles / Post-Wedding)
  {
    id: 'prod-meles-01',
    code: 'AH-MELES-02',
    nameAm: 'ጥቁር አረንጓዴ እና ወርቅ የመልስ ሓበሻ ቀሚስ',
    nameTi: 'ጸሊም ቀጠልያን ወርቅን ናይ መልሲ ሓበሻ ቀሚሽ',
    nameEn: 'Emerald & Gold Royal Meles Kemis',
    categoryGroup: 'events',
    hashtags: ['#የመልስ', '#የሳባጨርቅ_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የሳባ ጨርቅ ከወርቅ ዘርፍ ጥበብ ጋር',
    fabricTi: 'ናይ ሳባ ጨርቂ ምስ ወርቃዊ ጽምብላሊዕ ጥበብ',
    fabricEn: 'Queen Saba Cotton with Golden Tilet Trims',
    priceETB: 28000,
    originalPriceETB: 32000,
    image: imgMeles,
    secondaryImages: [
      imgWedding,
      imgGondar
    ],
    descriptionAm: 'ለመልስ ዝግጅት ድምቀት የሚሆን በጥቁር አረንጓዴና ጥልቅ ወርቅ ጥልፍ የተሸለመ፣ በወገብና እጅጌው ላይ የደመቀ ባህላዊ ፋሽን።',
    descriptionTi: 'ንመልሲ ድምቀት ዝኸውን ብጸሊም ቀጠልያን ጽሩይ ወርቅ ጥልፍን ዝተሰለመ፣ ኣብ ወገብን ኣእዳውን ዝደምቀ ባህላዊ ፋሽን።',
    descriptionEn: 'Designed for unforgettable Meles celebrations, combining emerald green accents with intricate golden chest and sleeve tibeb.',
    inStock: true,
    tailoringDays: 4,
    featured: true,
  },

  // 3. #የካፕል (Couples)
  {
    id: 'prod-couple-01',
    code: 'AH-CPL-03',
    nameAm: 'ተጣማሪ የጥንዶች (Couple) ሙሉ አልባሳት',
    nameTi: 'ዝተጣመረ ናይ መጻምድቲ (ካፕል) ምሉእ ባህላዊ ክዳውንቲ',
    nameEn: 'Harmonized Royal Couple Traditional Set',
    categoryGroup: 'men_couples',
    hashtags: ['#የካፕል', '#የሰርግ', '#የመልስ', '#የወንድ'],
    fabricAm: 'የኣክሱም ፈትል እና የንክር ጥጥ ጥምረት',
    fabricTi: 'ናይ ኣኽሱም ፈትልን ናይ ንክር ጡጥን ውህደት',
    fabricEn: 'Handspun Axum Fetel & Nkr Cotton Blend',
    priceETB: 42000,
    originalPriceETB: 48000,
    image: imgCouple,
    secondaryImages: [
      imgMens,
      imgWedding
    ],
    descriptionAm: 'ለሙሽሮችና ለፍቅረኛሞች በሚስማማ መልኩ በአንድ አይነት ጥበብ የተሰሩ የሴት ሓበሻ ቀሚስ እና የወንድ ሸሚዝ/ሱፍ ከአንገት ጥልፍ ጋር።',
    descriptionTi: 'ንመርዓዉትን ንመጻምድትን ብሓደ ዓይነት ጥበብ ዝተሰርሑ ናይ ጓል ኣንስተይቲ ሓበሻ ቀሚሽን ናይ ወዲ ተባዕታይ ሸሚዝን ክዳውንቲ።',
    descriptionEn: 'Matching set with unified embroidery motif. Includes elegant Habesha Kemis for her and coordinated traditional tunic and trousers for him.',
    inStock: true,
    tailoringDays: 6,
    featured: true,
    bestSeller: true,
  },

  // 4. #የወንድ (Men's Traditional)
  {
    id: 'prod-men-01',
    code: 'AH-MEN-04',
    nameAm: 'የወንዶች ዘመናዊ ባህላዊ ሸሚዝ እና ጋቢ/ኩታ',
    nameTi: 'ናይ ደቂ ተባዕትዮ ዘመናዊ ባህላዊ ሸሚዝን ኩታን',
    nameEn: "Men's Luxury Traditional Tunic & Kuta",
    categoryGroup: 'men_couples',
    hashtags: ['#የወንድ', '#የኣክሱም_ፈትል', '#የሸምግልና'],
    fabricAm: 'ንጹህ የጎጃም ፈትል ጥጥ',
    fabricTi: 'ጽሩይ ናይ ጎጃም ፈትሊ ጡጥ',
    fabricEn: 'Pure Gojjam Handspun Cotton',
    priceETB: 16500,
    originalPriceETB: 19000,
    image: imgMens,
    secondaryImages: [
      imgCouple
    ],
    descriptionAm: 'ለሰርግ፣ ለሽምግልና እና ለበዓላት የሚሆን የወንድ ኮትና ሸሚዝ ከአንገትና ደረት ጥልፍ ጋር፣ ተስማሚ ኩታን ያካተተ።',
    descriptionTi: 'ንመርዓ፣ ንሽምግልናን ንበዓላትን ዝኸውን ናይ ወዲ ተባዕታይ ኮትን ሸሚዝን ምስ ክሳድን ደረትን ጥልፊ፣ ተሰማማዒ ኩታ ዘጠቓለለ።',
    descriptionEn: "Refined men's cultural suit with collar embroidery and matching pure cotton Kuta, perfect for formal events and elders gatherings.",
    inStock: true,
    tailoringDays: 3,
  },

  // 5. #የራያ_ልብስ (Raya Dress)
  {
    id: 'prod-raya-01',
    code: 'AH-RAYA-05',
    nameAm: 'ታሪካዊ የራያ ባህላዊ ጥልፍ ቀሚስ (Raya Style)',
    nameTi: 'ታሪኻዊ ናይ ራያ ባህላዊ ጥልፊ ቀሚሽ (Raya Style)',
    nameEn: 'Authentic Raya Cultural Embroidered Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የራያ_ልብስ', '#የተለያዩ_የብሔረብሔረሰዎች_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የራያ ባህላዊ ፈትል ከቀይ እና ቢጫ ጥልፍ ጋር',
    fabricTi: 'ናይ ራያ ባህላዊ ፈትሊ ብቀይሕን ብጫን ጥልፊ',
    fabricEn: 'Heritage Raya Woven Fabric with Crimson & Gold Stitch',
    priceETB: 24500,
    originalPriceETB: 27500,
    image: imgRaya,
    secondaryImages: [
      imgGondar,
      imgAshenda
    ],
    descriptionAm: 'የራያ ቆቦን ውብ ባህል የሚያንፀባርቅ፣ በታችኛው ቀሚስ ዙሪያ በደማቅ ቀለም ጥልፍ የተዋበ ልዩ የባህል አልባሳት።',
    descriptionTi: 'ናይ ራያ ቆቦ ባህሊ ዘንጸባርቕ፣ ኣብ ታሕተዋይ ቀሚሽ ብደማቕ ሕብሪ ጥልፊ ዝተሰለመ ፍሉይ ባህላዊ ክዳን።',
    descriptionEn: 'Celebrated Raya Kobbo ethnic dress featuring authentic geometric lower hemlines and vibrant cultural colors.',
    inStock: true,
    tailoringDays: 5,
    featured: true,
  },

  // 6. #የጎንደር_ልብስ (Gondar Dress)
  {
    id: 'prod-gondar-01',
    code: 'AH-GND-06',
    nameAm: 'የፋሲል ግቢ የጎንደር ዘውዳዊ ሓበሻ ቀሚስ',
    nameTi: 'ናይ ፋሲል ግቢ ጎንደር ዘውዳዊ ሓበሻ ቀሚሽ',
    nameEn: 'Imperial Gondar Royal Castle Habesha Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የጎንደር_ልብስ', '#የኣክሱም_ፈትል', '#የሰርግ'],
    fabricAm: 'ንጹህ የፈትል ጥጥ ከከበደ የወርቅ ጥልፍ ጋር',
    fabricTi: 'ጽሩይ ናይ ፈትሊ ጡጥ ብክቡድ ናይ ወርቂ ጥልፊ',
    fabricEn: 'Heavy Handspun Cotton with Royal Gold Wire Thread',
    priceETB: 29500,
    originalPriceETB: 33000,
    image: imgGondar,
    secondaryImages: [
      imgWedding
    ],
    descriptionAm: 'የጎንደርን ጥንታዊ ነገስታት ውበት የተላበሰ፣ በወርቅ ክር የተጠለፈ ሰፊ ጥበብ ያለው የጎንደር ባህላዊ ቀሚስ።',
    descriptionTi: 'ናይ ጎንደር ጥንታዊ ነገስታት ግርማ ዝተላበሰ፣ ብወርቂ ፈትሊ ዝተጠልፈ ሰፊሕ ጥበብ ዘለዎ ናይ ጎንደር ባህላዊ ቀሚሽ።',
    descriptionEn: 'Inspired by the imperial grandeur of Gondar royalty, crafted with thick gold-threaded tibeb and regal drape.',
    inStock: true,
    tailoringDays: 6,
    bestSeller: true,
  },

  // 7. #የወሎ_ልብስ (Wollo Dress)
  {
    id: 'prod-wollo-01',
    code: 'AH-WLL-07',
    nameAm: 'የወሎ ቆንጆ ባህላዊ ቀሚስ ከነአንገት ጥልፉ',
    nameTi: 'ናይ ወሎ ጽብቕቲ ባህላዊት ቀሚሽ ምስ ክሳድ ጥልፊ',
    nameEn: 'Wollo Graceful Traditional Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የወሎ_ልብስ', '#የንክር_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የንክር ጨርቅ በጥቁርና ቀይ የወሎ ባህል ጥበብ',
    fabricTi: 'ናይ ንክር ጨርቂ ብጸሊምን ቀይሕን ናይ ወሎ ጥበብ',
    fabricEn: 'Nkr Quality Cotton with Signature Wollo Trim',
    priceETB: 21500,
    originalPriceETB: 24500,
    image: imgRaya,
    secondaryImages: [
      imgGondar,
      imgChiffon
    ],
    descriptionAm: 'የወሎን ቅልጥፍና እና ደስታ የሚያሳይ፣ በደረቱ እና በወገቡ ዙሪያ ደስ በሚሉ ቀለማት የተጠለፈ ውብ ቀሚስ።',
    descriptionTi: 'ናይ ወሎ ጽባቐን ሓጎስን ዘርኢ፣ ኣብ ደረቱን ወገቡን ባህ ዘብሉ ሕብርታት ዝተጠልፈ ውብ ቀሚሽ።',
    descriptionEn: 'Graceful Wollo regional attire celebrating traditional handiwork with radiant color palettes on natural cotton.',
    inStock: true,
    tailoringDays: 4,
  },

  // 8. #የጎጃም_ልብስ (Gojjam Dress)
  {
    id: 'prod-gojjam-01',
    code: 'AH-GJM-08',
    nameAm: 'የጎጃም ጮቄ ባህላዊ ነጭ የጥጥ ሓበሻ ቀሚስ',
    nameTi: 'ናይ ጎጃም ጮቄ ባህላዊ ጻዕዳ ጡጥ ሓበሻ ቀሚሽ',
    nameEn: 'Gojjam Heritage Pure White Cotton Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የጎጃም_ልብስ', '#የኣክሱም_ፈትል', '#የክርስትና'],
    fabricAm: 'የጎጃም ፈትል ንጹህ ነጭ ጥጥ ከሰማያዊ ጥልፍ ጋር',
    fabricTi: 'ናይ ጎጃም ፈትሊ ጽሩይ ጻዕዳ ጡጥ ምስ ሰማያዊ ጥልፊ',
    fabricEn: 'Fine Gojjam Handspun Cotton with Azure Tilet',
    priceETB: 22000,
    originalPriceETB: 25000,
    image: imgAxum,
    secondaryImages: [
      imgWedding,
      imgChiffon
    ],
    descriptionAm: 'በጎጃም ጥጥ ጥበብ የተሰራ ንጹህና ቀላል፣ ለክርስትናም ሆነ ለዝግጅቶች ተስማሚ የሆነ ውብ ልብስ።',
    descriptionTi: 'ብናይ ጎጃም ጡጥ ጥበብ ዝተሰርሐ ጽሩይን ቀሊልን፣ ንጥምቀትን ንበዓላትን ዝሰማማዕ ውቁብ ክዳን።',
    descriptionEn: 'Made from the renowned cotton of Gojjam, featherlight yet durable with tranquil blue accents.',
    inStock: true,
    tailoringDays: 3,
  },

  // 9. #የኣሸንዳ (Ashenda)
  {
    id: 'prod-ashenda-01',
    code: 'AH-ASH-09',
    nameAm: 'የኣሸንዳ / ሻደይ የበዓል ሙሉ ባህላዊ አልባሳት',
    nameTi: 'ናይ ኣሸንዳ / ሻደይ / ማርያ ናይ በዓል ምሉእ ባህላዊ ክዳውንቲ',
    nameEn: 'Ashenda / Shadey Vibrant Festival Attire',
    categoryGroup: 'events',
    hashtags: ['#የኣሸንዳ', '#የተለያዩ_የብሔረብሔረሰዎች_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የኣክሱም ፈትል ከደማቅ የበዓል ቀለማት ጥልፍ ጋር',
    fabricTi: 'ናይ ኣኽሱም ፈትሊ ምስ ደማቕ ናይ በዓል ሕብርታት ጥልፊ',
    fabricEn: 'Axum Fetel with Radiant Festival Multi-Color Embroidery',
    priceETB: 23500,
    originalPriceETB: 27000,
    image: imgAshenda,
    secondaryImages: [
      imgMeles
    ],
    descriptionAm: 'ለኣሸንዳ፣ ሻደይ እና ሶለል ልጃገረዶችና ወጣት ሴቶች በዓል ልዩ ድምቀት የሚሰጥ፣ በደስታና ዘፈን የሚያንፀባርቅ ሙሉ አልባሳት።',
    descriptionTi: 'ንኣሸንዳ፣ ሻደይን ሶለልን ኣዋልድ ፍሉይ ድምቀት ዝህብ፣ ብሓጎስን ደስታን ዘንጸባርቕ ምሉእ ባህላዊ ክዳን።',
    descriptionEn: 'Created specifically for Ashenda / Shadey celebrations, capturing the joy and energy of youth with festive colors.',
    inStock: true,
    tailoringDays: 4,
    featured: true,
  },

  // 10. #የቻይናጨርቅ_ልብስ (Chiffon / China fabric)
  {
    id: 'prod-chiffon-01',
    code: 'AH-CHF-10',
    nameAm: 'ዘመናዊ የቻይና ጨርቅ (ሽፎን) ሓበሻ ቀሚስ',
    nameTi: 'ዘመናዊ ናይ ቻይና ጨርቂ (ሺፎን) ሓበሻ ቀሚሽ',
    nameEn: 'Modern Flowing Chiffon Habesha Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የቻይናጨርቅ_ልብስ', '#የልደት', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'ቀላልና ለስላሳ የቻይና ጨርቅ (ሽፎን)',
    fabricTi: 'ቀሊልን ልስሉስን ናይ ቻይና ጨርቂ (ሺፎን)',
    fabricEn: 'Delicate Sheer & Flowing Silk-blend Chiffon',
    priceETB: 18500,
    originalPriceETB: 21000,
    image: imgChiffon,
    secondaryImages: [
      imgMeles,
      imgWedding
    ],
    descriptionAm: 'ቀለል ያለ፣ ነፋሻማና ዘመናዊ ቅርጽ ያለው የሽፎን ሓበሻ ቀሚስ። ለልደት፣ ለራት ግብዣና ለቀላል ዝግጅቶች እጅግ ተመራጭ።',
    descriptionTi: 'ቀሊል፣ ንፋሳውን ዘመናውን ቅርጺ ዘለዎ ናይ ሺፎን ሓበሻ ቀሚሽ። ንልደት፣ ንመኣዲ ድራርን ንቐለልቲ በዓላትን እጅግ ዝምረጽ።',
    descriptionEn: 'Feather-light modern chiffon Habesha silhouette with delicate floral or geometric borders, loved for warm weather and dinners.',
    inStock: true,
    tailoringDays: 2,
    bestSeller: true,
  },

  // 11. #የሳባጨርቅ_ልብስ (Saba Fabric)
  {
    id: 'prod-saba-01',
    code: 'AH-SABA-11',
    nameAm: 'የንግሥት ሳባ ፕሪሚየም የጥጥ ሓበሻ ቀሚስ',
    nameTi: 'ናይ ንግስቲ ሳባ ፕሪምየም ጡጥ ሓበሻ ቀሚሽ',
    nameEn: 'Queen of Sheba Premium Saba Cloth Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የሳባጨርቅ_ልብስ', '#የምርቃት', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'ፕሪሚየም የሳባ ጨርቅ ከወርቃማ ሻሽ ጋር',
    fabricTi: 'ፕሪምየም ናይ ሳባ ጨርቂ ምስ ወርቃዊ ሻሽ',
    fabricEn: 'Signature Saba Woven Fabric with Golden Thread Scarf',
    priceETB: 26000,
    originalPriceETB: 30000,
    image: imgSaba,
    secondaryImages: [
      imgWedding,
      imgMeles
    ],
    descriptionAm: 'ለስላሳና ውብ በሆነው የሳባ ጨርቅ በጥንቃቄ የተሰራ፣ ለምርቃትም ሆነ ለልዩ ዝግጅት ውበት የሚጨምር።',
    descriptionTi: 'ልስሉስን ውቁብን ብዝኾነ ናይ ሳባ ጨርቂ ብጥንቃቐ ዝተሰርሐ፣ ንምረቓን ንፍሉይ በዓላትን ጽባቐ ዝውስኽ።',
    descriptionEn: 'Soft woven royal Saba fabric with balanced drape, ideal for graduation ceremonies and distinguished occasions.',
    inStock: true,
    tailoringDays: 4,
  },

  // 12. #የቡና (Coffee Ceremony)
  {
    id: 'prod-coffee-01',
    code: 'AH-COF-12',
    nameAm: 'የኢትዮጵያ የቡና ሥነ-ሥርዓት ባህላዊ ቀሚስ',
    nameTi: 'ናይ ኢትዮጵያ ናይ ቡን ስነ-ስርዓት ባህላዊ ቀሚሽ',
    nameEn: 'Traditional Ethiopian Coffee Ceremony Kemis',
    categoryGroup: 'events',
    hashtags: ['#የቡና', '#የንክር_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የንክር ንጹህ ጥጥ ከነጠላ ጋር',
    fabricTi: 'ናይ ንክር ጽሩይ ጡጥ ምስ ነጸላኡ',
    fabricEn: 'Comfortable Nkr Cotton with Matching Light Netela',
    priceETB: 15500,
    originalPriceETB: 17500,
    image: imgCoffee,
    secondaryImages: [
      imgWedding,
      imgChiffon
    ],
    descriptionAm: 'ለቤት ውስጥ የቡና ቁርስ፣ ለእንግዶች አቀባበል እና ለባህላዊ ስብሰባዎች የሚመች፣ የሚያምር ባህላዊ ቀሚስ።',
    descriptionTi: 'ንናይ ገዛ ውሽጢ ቡን፣ ንኣጋይሽ ኣቀባብላን ንባህላዊ ምእካባትን ዝምቹ፣ ዘደንቕ ባህላዊ ቀሚሽ።',
    descriptionEn: 'Cozy, traditional attire tailored specifically for hosting warm Ethiopian coffee ceremonies in style.',
    inStock: true,
    tailoringDays: 3,
    bestSeller: true,
  },

  // 13. #የክርስትና & #የቁርባን (Baptism & Communion)
  {
    id: 'prod-kristna-01',
    code: 'AH-KRS-13',
    nameAm: 'የክርስትና እና የቁርባን ንጹህ ነጭ ሓበሻ ቀሚስ',
    nameTi: 'ናይ ጥምቀትን ቁርባንን ጽሩይ ጻዕዳ ሓበሻ ቀሚሽ',
    nameEn: 'Pristine White Christening & Holy Communion Kemis',
    categoryGroup: 'events',
    hashtags: ['#የክርስትና', '#የቁርባን', '#የኣክሱም_ፈትል'],
    fabricAm: 'የኣክሱም ነጭ ፈትል ከብር ክር ጥበብ ጋር',
    fabricTi: 'ናይ ኣኽሱም ጻዕዳ ፈትሊ ምስ ብሩር ፈትሊ ጥበብ',
    fabricEn: 'Axum Pure White Fetel with Silver-thread Tilet',
    priceETB: 19800,
    originalPriceETB: 23000,
    image: imgAxum,
    secondaryImages: [
      imgWedding,
      imgChiffon
    ],
    descriptionAm: 'ለንጹህ የክርስትና እና የቁርባን ቀን የሚሆን፣ በብር ክር እና ነጭ ጥልፍ የተሸለመ ሰላማዊ ባህላዊ አልባሳት።',
    descriptionTi: 'ንጽሩይ ናይ ጥምቀትን ናይ ቁርባንን መዓልቲ ዝኸውን፣ ብብሩር ክርን ጻዕዳ ጥልፍን ዝተሰለመ ሰላማዊ ባህላዊ ክዳን።',
    descriptionEn: 'Pure and pristine attire for spiritual baptism and holy communion rites, crafted with blessed silver accents.',
    inStock: true,
    tailoringDays: 3,
  },

  // 14. #የሸምግልና (Shimgilina / Elders)
  {
    id: 'prod-shimgilina-01',
    code: 'AH-SHM-14',
    nameAm: 'የክብር የሽምግልና ባህላዊ አልባሳት (ሴት/ወንድ)',
    nameTi: 'ናይ ክብሪ ሽምግልና ባህላዊ ክዳውንቲ (ጓል/ወዲ)',
    nameEn: 'Prestigious Shimgilina Elder Attire',
    categoryGroup: 'events',
    hashtags: ['#የሸምግልና', '#የወንድ', '#የኣክሱም_ፈትል'],
    fabricAm: 'ከባድ የኣክሱም ፈትል ከክብር ጥበብ ጋር',
    fabricTi: 'ክቡድ ናይ ኣኽሱም ፈትሊ ምስ ክብሪ ጥበብ',
    fabricEn: 'Heavy Traditional Handspun Cotton with Dignified Tibeb',
    priceETB: 27000,
    originalPriceETB: 31000,
    image: imgMens,
    secondaryImages: [
      imgCouple
    ],
    descriptionAm: 'ለሽምግልና እና ለትልልቅ የቤተሰብ ድርድሮች ክብርና ግርማ ሞገስ የሚሰጥ፣ በከበደ ጥልፍ የተሰራ ባህላዊ ልብስ።',
    descriptionTi: 'ንሽምግልናን ንዓበይቲ ናይ ስድራቤት ዘተታትን ክብርን ግርማን ዝህብ፣ ብኸቢድ ጥልፊ ዝተሰርሐ ባህላዊ ክዳን።',
    descriptionEn: 'Dignified and respectful attire for elder delegations, mediation and matrimonial proposals.',
    inStock: true,
    tailoringDays: 5,
  },

  // 15. #የምርቃት (Graduation)
  {
    id: 'prod-graduation-01',
    code: 'AH-GRD-15',
    nameAm: 'የምርቃት ቀን ልዩ ነጭ እና ወርቅ ሓበሻ ቀሚስ',
    nameTi: 'ናይ ምረቓ መዓልቲ ፍሉይ ጻዕዳን ወርቅን ሓበሻ ቀሚሽ',
    nameEn: 'Graduation Celebration Golden Habesha Kemis',
    categoryGroup: 'events',
    hashtags: ['#የምርቃት', '#የሳባጨርቅ_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'የሳባ ጨርቅ ከብሩህ ወርቃማ ጥልፍ ጋር',
    fabricTi: 'ናይ ሳባ ጨርቂ ምስ ብሩህ ወርቃማ ጥልፊ',
    fabricEn: 'Fine Saba Fabric with Golden Graduation Tilet',
    priceETB: 22500,
    originalPriceETB: 26000,
    image: imgSaba,
    secondaryImages: [
      imgMeles,
      imgGondar
    ],
    descriptionAm: 'የትምህርት ፍፃሜ የምርቃት ቀንን በኩራት ለማክበር የተዘጋጀ፣ በፎቶ ላይ እጅግ ደምቆ የሚወጣ ውብ ቀሚስ።',
    descriptionTi: 'ናይ ትምህርቲ ምዝዛም ናይ ምረቓ መዓልቲ ብኩርዓት ንምብዓል ዝተዳለወ፣ ኣብ ስእሊ ኣዝዩ ደሚቑ ዝወጽእ ውቁብ ቀሚሽ።',
    descriptionEn: 'Celebrate your academic milestone in authentic style. Perfectly tailored for graduation portraits and family feasts.',
    inStock: true,
    tailoringDays: 3,
    featured: true,
  },

  // 16. #የኣዲስ_ኣመት (Enkutatash / New Year)
  {
    id: 'prod-newyear-01',
    code: 'AH-NYR-16',
    nameAm: 'የእንቁጣጣሽ አዲስ ዓመት አደይ አበባ ዲዛይን ቀሚስ',
    nameTi: 'ናይ እንቁጣጣሽ ሓዱሽ ዓመት ኣደይ ኣበባ ዲዛይን ቀሚሽ',
    nameEn: 'Enkutatash Ethiopian New Year Adey Abeba Kemis',
    categoryGroup: 'events',
    hashtags: ['#የኣዲስ_ኣመት', '#የልደት', '#የተለያዩ_የብሔረብሔረሰዎች_ልብስ'],
    fabricAm: 'የኣክሱም ፈትል በቢጫ የአደይ አበባ ጥበብ',
    fabricTi: 'ናይ ኣኽሱም ፈትሊ ብብጫ ናይ ኣደይ ኣበባ ጥበብ',
    fabricEn: 'Axum Fetel with Yellow Daisy (Adey Abeba) Tibeb Motifs',
    priceETB: 21000,
    originalPriceETB: 24000,
    image: imgAshenda,
    secondaryImages: [
      imgChiffon,
      imgWedding
    ],
    descriptionAm: 'መስከረምን እና አዲሱን ዓመት ለመቀበል በአደይ አበባ ቢጫ እና አረንጓዴ ጥበብ ያሸበረቀ፣ ለበዓል ልዩ ድምቀት።',
    descriptionTi: 'መስከረምን ሓዱሽ ዓመትን ንምቕባል ብኣደይ ኣበባ ብጫን ቀጠልያን ጥበብ ዝተሰለመ፣ ንበዓል ፍሉይ ድምቀት።',
    descriptionEn: 'Welcome the Ethiopian New Year in spring-inspired Adey Abeba yellow florals and golden thread borders.',
    inStock: true,
    tailoringDays: 4,
  },

  // 17. #የተለያዩ_የብሔረብሔረሰዎች_ልብስ (Nations & Nationalities)
  {
    id: 'prod-nations-01',
    code: 'AH-NAT-17',
    nameAm: 'የኦሮሞ፣ ሲዳማ እና ደቡብ ብሔረሰቦች ባህል አልባሳት',
    nameTi: 'ናይ ኦሮሞ፣ ሲዳማን ደቡብ ብሄረሰባትን ባህላዊ ክዳን',
    nameEn: 'Pan-Ethiopian Heritage Nations Cultural Dress',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የተለያዩ_የብሔረብሔረሰዎች_ልብስ', '#ለተለያዩ_ዝግጅቶች_የሚለበሱ_ልብሶች'],
    fabricAm: 'ባህላዊ ጥጥ ከባለቀለም የሀገር በቀል ጥልፍ ጋር',
    fabricTi: 'ባህላዊ ጡጥ ምስ ሕብራዊ ናይ ሃገር ጥልፊ',
    fabricEn: 'Indigenous Handwoven Cotton with Regional Cultural Beading',
    priceETB: 25000,
    originalPriceETB: 29000,
    image: imgAshenda,
    secondaryImages: [
      imgGondar,
      imgWedding
    ],
    descriptionAm: 'የኢትዮጵያን የተለያዩ ብሔር ብሔረሰቦች ልዩ ልዩ ውበት ያቀፈ፣ በባህል ቀን እና በዓላት የሚለበስ ድንቅ ልብስ።',
    descriptionTi: 'ናይ ዝተፈላለዩ ብሄረ-ብሄረሰባት ፍሉይ ጽባቐ ዘጠቓለለ፣ ኣብ ናይ ባህሊ መዓልትን በዓላትን ዝኽደን ድንቂ ክዳን።',
    descriptionEn: 'Honoring the rich mosaic of Ethiopian traditions with authentic motifs from across Oromia, Sidama, and the South.',
    inStock: true,
    tailoringDays: 5,
  },

  // 18. #የንክር_ልብስ (Nkr Fabric)
  {
    id: 'prod-nkr-01',
    code: 'AH-NKR-18',
    nameAm: 'የተመረጠ የንክር ጨርቅ ቀላል የዕለት ተዕለት ቀሚስ',
    nameTi: 'ዝተመረጸ ናይ ንክር ጨርቂ ቀሊል መዓልታዊ ቀሚሽ',
    nameEn: 'Selected Nkr Light Casual & Festive Kemis',
    categoryGroup: 'heritage_fabrics',
    hashtags: ['#የንክር_ልብስ', '#የልደት', '#የቡና'],
    fabricAm: 'ንጹህ የንክር ጥጥ ጨርቅ',
    fabricTi: 'ጽሩይ ድልዱል ናይ ንክር ጡጥ ጨርቂ',
    fabricEn: 'Pure Durable Nkr Ethiopian Cotton',
    priceETB: 17000,
    originalPriceETB: 19500,
    image: imgCoffee,
    secondaryImages: [
      imgChiffon,
      imgWedding
    ],
    descriptionAm: 'በጥንካሬውና በምቾቱ የሚታወቀው የንክር ጨርቅ፣ ለቀላል ዝግጅቶችና ለቤት ድግስ ፍቱን ምርጫ።',
    descriptionTi: 'ብጥንካሬኡን ብምቹውነቱን ዝፍለጥ ናይ ንክር ጨርቂ፣ ንቐለልቲ በዓላትን ንገዛ ውሽጢ ድግስን ብሉጽ ምርጫ።',
    descriptionEn: 'Famous for longevity and supreme comfort, Nkr cotton is an Ethiopian favorite for everyday grace.',
    inStock: true,
    tailoringDays: 3,
  },
];
