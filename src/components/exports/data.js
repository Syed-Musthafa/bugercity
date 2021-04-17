 // Dummy Datas

 import { COLORS, FONTS, SIZES, icons, images, data } from '../exports'



// price rating
export const affordable = 1
export const fairPrice = 2
export const expensive = 3

export default  [
    {
        id: 1,
        name: "Loetje",
        rating: 4.8,
        categories: [5, 7],
        priceRating: affordable,
        photo: images.restaurent1,
        location: "N2, Nirmala building left annexe,  India"
         
    },
    {
        id: 2,
        name: "Kasthuri ",
        rating: 4.8,
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: images.restaurent2,
        
        location: "Heber Road, India"
       
        
    },
    {
        id: 3,
        name: "Barbacoa ",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: images.restaurent3,
        
        location: "99, Salai Rd, near rukmani theatre,  India"
       
    },
    {
        id: 4,
        name: "Bismi ",
        rating: 4.8,
        categories: [8],
        priceRating: expensive,
        photo: images.restaurent4,
        
        location: "51-A/16-A, Hidayath Nagar,  India"
        
    },
    {
        id: 5,
        name: "Al-Qareeb",
        rating: 4.8,
        categories: [1, 2],
        priceRating: affordable,
        photo: images.restaurent5,
        
        location: " 73A, Salai Rd, Thillai Nagar,  India"
        
    },
    {

        id: 6,
        name: "Arabian ",
        rating: 4.9,
        categories: [9, 10],
        priceRating: affordable,
        photo: images.restaurent6,
        
        location: "1st Cross Rd, Opposite Arun Hospital,  India"
        

    },
    {

        id: 7,
        name: "Jamle's",
        rating: 4.9,
        categories: [9, 10],
        priceRating: affordable,
        photo: images.restaurent7,
        
        location: "1st Cross Rd, Opposite Arun Hospital,  India"
        

    }


]