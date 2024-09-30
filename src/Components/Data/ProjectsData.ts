// ProjectsData.ts

export interface Project {
    id: number;
    title: string;
    roi: string;
    location: string;
    details: string[];
    price: string;
    image: string;
    soldOut: boolean; // Changed type to boolean for better clarity
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "The Coco Mansion",
        roi: "16.9%",
        location: "Seseh, Badung, Bali",
        details: [
            "3 Bedrooms",
            "315 m²",
            "Spacious Rooftop",
            "Ready June, 2024",
        ],
        price: "$495,000 USD",
        soldOut: true,
        image: "src/assets/Images/Mansion-Living.webp", // Update the path to your image
    },
    {
        id: 2,
        title: "Coco Residential Living",
        roi: "15 - 17%",
        location: "Seseh, Badung, Bali",
        details: [
            "14 apartments",
            "Recovery area",
            "Co-working",
            "Spacious rooftop & Pool",
        ],
        price: "$105,000 USD",
        image: "src/assets/Images/Living-Resort.webp", // Update the path to your image
        soldOut: false,
    },
    {
        id: 3,
        title: "Lifestyle Resort",
        roi: "17 - 22%",
        location: "Bingin, Uluwatu, Bali",
        details: [
            "56 apartments",
            "Gym and recovery area",
            "Co-working",
            "Restaurant and bar",
        ],
        price: "$125,000 USD",
        image: "src/assets/Images/LifeStyle-Resort.webp", // Update the path to your image
        soldOut: false,
    },
    {
        id: 4, // New ID for the next project
        title: "Amazona Jungle Resort",
        roi: "15% - 20%",
        location: "Seminyak, Bali",
        details: [
            "4 Bedrooms",
            "Private pool",
            "Beach access",
            "Luxury amenities",
        ],
        price: "$750,000 USD",
        image: "src/assets/Images/modern-jungle-resort-bali.webp", // Update the path to your image
        soldOut: false,
    },
    {
        id: 5, // New ID for the next project
        title: "The Coco Oceanfront",
        roi: "20%",
        location: "Nusa Dua, Bali",
        details: [
            "3 Bedrooms",
            "Ocean views",
            "Gym & spa",
            "Outdoor lounge",
        ],
        price: "$850,000 USD",
        image: "src/assets/Images/luxury-Boulevard-bali-villa.webp", // Update the path to your image
        soldOut: false,
    },
];

export default projectsData;
