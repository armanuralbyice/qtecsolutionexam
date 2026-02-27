import { RiInstagramFill } from "react-icons/ri";
import { Mail } from 'lucide-react';


export const footerData = {
    companyInfo: {
        description:
            "ListMyCity does not charge booking fees or service fees. All property information is submitted directly by hosts or obtained through public channels. All transactions are handled independently between guest and host.",
        socialLinks: [
            { icon: RiInstagramFill, text: "@listmycity" },
            { icon: Mail, text: "inquiries@listmycity.us" },
        ],
    },
    navigationSections: [
        {
            title: "Quick Menu",
            links: [
                { text: "Home", href: "/" },
                { text: "Explore Stays", href: "/explore-stays" },
                // { text: "Refer & Earn", href: "/refer-earn" },
                { text: "List Your Property", href: "/property-list" },
                { text: "Help and Support", href: "/support" },
                // { text: "Messaging", href: "/messaging" },
                // { text: "Notification", href: "/notification" },
                // { text: "FAQs", href: "/faq" },
            ],
        },
        {
            title: "Information",
            links: [
                { text: "My Account", href: "/account" },
                { text: "Login", href: "/login" },
                { text: "My Properties", href: "/properties" },
                { text: "Save", href: "/saved" },
            ],
        },
        {
            title: "Service",
            links: [
                { text: "Basic Plan", href: "/pricing" },
                { text: "Standard Plan", href: "/pricing" },
                { text: "Premium Plan", href: "/pricing" },
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Terms & Conditions", href: "/terms" },
            ],
        },
    ],
    subscribe: {
        title: "Subscribe",
        description: "Enter your email below to be the first to know about new collections.",
    },
    copyright: "",
}