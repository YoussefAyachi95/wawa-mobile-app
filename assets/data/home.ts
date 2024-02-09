export const categories = [
    { name: "Diapers", img: require('@/assets/images/categories/diapers.webp') },
    { name: "Baby Food", img: require('@/assets/images/categories/baby-food.png')},
    { name: "Clothing", img: require('@/assets/images/categories/baby-clothes.jpg')},
    { name: "Toys", img: require('@/assets/images/categories/toys.jpg') },
    { name: "Nursery", img: require('@/assets/images/categories/nursery.jpg') },
    { name: "Baby Gear", img: require('@/assets/images/categories/baby-gear.jpg') },
    { name: "Feeding Supplies", img: require('@/assets/images/categories/feeding-supplies.jpg') },
    { name: "Health & Safety", img: require('@/assets/images/categories/baby-health.jpg') },
    { name: "Bathing & Skincare", img: require('@/assets/images/categories/bathing.jpg') },
    { name: "Books & Learning", img: require('@/assets/images/categories/baby-books.jpg') },
    { name: "Travel Accessories", img: require('@/assets/images/categories/baby-travel.jpg') }
];

export const shops = [
    { 
        name: "Baby One", 
        rating: "4.5 Excellent", 
        ratings: 120, 
        distance: "0.7km away", 
        img: require('@/assets/images/shops/babyone.svg'), 
        tags: ["Diapers", "Baby Gear", "Feeding Supplies"], 
        duration: "30 minutes"
    },
    { 
        name: "Mintaha Baby", 
        rating: "4.3 Great", 
        ratings: 90, 
        distance: "1.2km away", 
        img: require('@/assets/images/shops/mintahababy.png'), 
        tags: ["Clothing", "Toys", "Books & Learning"], 
        duration: "45 minutes"
    },
    { 
        name: "Baby Botosso", 
        rating: "4.7 Excellent", 
        ratings: 150, 
        distance: "0.5km away", 
        img: require('@/assets/images/shops/baby-bottosso.jpg'), 
        tags: ["Clothing", "Nursery", "Bathing & Skincare"], 
        duration: "25 minutes"
    },
    { 
        name: "Mamej", 
        rating: "4.2 Good", 
        ratings: 80, 
        distance: "0.9km away", 
        img: require('@/assets/images/shops/mamej.webp'), 
        tags: ["Baby Food", "Health & Safety", "Travel Accessories"], 
        duration: "35 minutes"
    }
];