const categories = [
    { id: 1, name: "Diapers" },
    { id: 2, name: "Baby Food" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Toys" },
    { id: 5, name: "Nursery" },
    { id: 6, name: "Baby Gear" },
    { id: 7, name: "Feeding Supplies" },
    { id: 8, name: "Health & Safety" },
    { id: 9, name: "Bathing & Skincare" },
    { id: 10, name: "Books & Learning" },
    { id: 11, name: "Travel Accessories" }
];


export const getCategoryNameById = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
};