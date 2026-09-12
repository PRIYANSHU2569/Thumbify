import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 12,
        period: "month",
        features: [
            "30 generations/month",
            "Essential templates",
            "HD PNG exports",
            "Basic customization",
            "Community support"
        ],
        mostPopular: false
    },
    {
        name: "Creator",
        price: 29,
        period: "month",
        features: [
            "150 generations/month",
            "Premium templates",
            "HD & 4K PNG exports",
            "Custom brand kit",
            "No Thumbify watermark",
            "Priority support",
            "Saved thumbnail projects"
        ],
        mostPopular: true
    },
    {
        name: "Studio",
        price: 79,
        period: "month",
        features: [
            "Unlimited generations",
            "All Creator features",
            "Multiple brand kits",
            "Team access(up to 5)",
            "Priority queue",
            "Dedicated support"
        ],
        mostPopular: false
    }
];
