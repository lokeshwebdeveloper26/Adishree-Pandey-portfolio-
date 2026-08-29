import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Adishree Panddey",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Adishree is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "13 years" ,
    dateOfBirth: "29 july 2012",
    height: "5.2 Feet",
    weight: "",
    Bust: "28",
    skinTone: "Fair",
    hairColor: "Brown",
    eyeColor: "Black",
    ShoeSize: "",
    Hips: "",
    Waist: "26",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "MR. Abishek Pandey",
    motherName: "Mrs. Rashmi Pandey",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "its_.adishree",

  ecommerce: [
  /**{
    name: "Flipkart",
    url: "https://www.flipkart.com/",
    description: "Shop featured products and collections.",
  },*/
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Adishree Pandeyfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "Adishree Pandeyfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "Adishree Pandeystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "Adishree Pandeyoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "Adishree Pandeyhero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "Adishree Pandeyprofile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.JPG",
      alt: "Adishree Pandeyfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.JPG",
      alt: "Adishree Pandeyfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.JPG",
      alt: "Adishree Pandeystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-28.JPG",
      alt: "Adishree Pandeyoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-29.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-31.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-32.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-33.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-34.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-35.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-36.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-37.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-38.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-39.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-40.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-41.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-42.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-43.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-44.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-45.JPG",
      alt: "Adishree Pandeyfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-46.JPG",
      alt: "Adishree Pandeyfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-47.JPG",
      alt: "Adishree Pandeystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-48.JPG",
      alt: "Adishree Pandeyoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-49.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-50.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-51.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-52.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-53.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-54.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-55.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-56.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-57.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-58.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-59.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-60.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-61.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-62.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-63.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-64.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-65.JPG",
      alt: "Adishree Pandeyfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-67.JPG",
      alt: "Adishree Pandeystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-68.JPG",
      alt: "Adishree Pandeyoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-69.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-70.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-71.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-72.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-73.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-74.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-75.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-76.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-77.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-78.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-79.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-80.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-81.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-82.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-83.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-84.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-85.JPG",
      alt: "Adishree Pandeyfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-86.JPG",
      alt: "Adishree Pandeyfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-87.JPG",
      alt: "Adishree Pandeystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-88.JPG",
      alt: "Adishree Pandeyoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-89.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-90.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-91.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-92.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-93.JPG",
      alt: "Adishree Pandeyfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-94.JPG",
      alt: "Adishree Pandeycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-95.JPG",
      alt: "Adishree Pandeyeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-96.JPG",
      alt: "Adishree Pandeycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-97.JPG",
      alt: "Adishree Pandeylifestyle portrait",
      category: "Casual",
    },
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  /**{
    title: "Adishree PandeyModel Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name.mp4",
    type: "mp4",
  },
  {
    title: "Adishree PandeyModel Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name-compressed.mp4",
    type: "mp4",
  },*/
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
