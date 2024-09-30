// Import images
import mansionLiving from '../../assets/Images/mansion-living.webp';
import livingResort from '../../assets/Images/Living-Resort.webp';
import lifestyleResort from '../../assets/Images/LifeStyle-Resort.webp';
import modernJungleResort from '../../assets/Images/modern-jungle-resort-bali.webp';
import luxuryBoulevard from '../../assets/Images/luxury-Boulevard-bali-villa.webp';

// Define the Project interface
export interface Project {
    id: number;
    title: string;
    slug: string;
    roi: string;
    location: string;
    details: string[];
    price: string;
    image: string;
    soldOut: boolean;
}

// Projects data array
const projectsData: Project[] = [
    {
        id: 1,
        title: "The Coco Mansion",
        slug: "The-Coco-Mansion",
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
        image: mansionLiving,
    },
    {
        id: 2,
        title: "Coco Residential Living",
        slug: "Coco-Residential-Living",
        roi: "15 - 17%",
        location: "Seseh, Badung, Bali",
        details: [
            "14 apartments",
            "Recovery area",
            "Co-working",
            "Spacious rooftop & Pool",
        ],
        price: "$105,000 USD",
        image: livingResort,
        soldOut: false,
    },
    {
        id: 3,
        title: "Lifestyle Resort",
        slug: "Lifestyle-Resort",
        roi: "17 - 22%",
        location: "Bingin, Uluwatu, Bali",
        details: [
            "56 apartments",
            "Gym and recovery area",
            "Co-working",
            "Restaurant and bar",
        ],
        price: "$125,000 USD",
        image: lifestyleResort,
        soldOut: false,
    },
    {
        id: 4,
        title: "Amazona Jungle Resort",
        slug: "Amazona-Jungle-Resort",
        roi: "15% - 20%",
        location: "Seminyak, Bali",
        details: [
            "4 Bedrooms",
            "Private pool",
            "Beach access",
            "Luxury amenities",
        ],
        price: "$750,000 USD",
        image: modernJungleResort,
        soldOut: false,
    },
    {
        id: 5,
        title: "The Coco Oceanfront",
        slug: "The-Coco-Oceanfront",
        roi: "20%",
        location: "Nusa Dua, Bali",
        details: [
            "3 Bedrooms",
            "Ocean views",
            "Gym & spa",
            "Outdoor lounge",
        ],
        price: "$850,000 USD",
        image: luxuryBoulevard,
        soldOut: false,
    },
];

export default projectsData;
