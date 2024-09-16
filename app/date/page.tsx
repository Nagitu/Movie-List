'use client'

import { useState } from "react";
import ProfileCard from "../components/dating/ProfileCard";

const profiles = [
    {
        id: "1",
        name: "Jane Doe",
        age: 28,
        bio: "Love hiking and outdoor adventures.",
        photo: "/next.svg",
    },
    {
        id: "2",
        name: "John Smith",
        age: 32,
        bio: "Avid reader and coffee enthusiast.",
        photo: "/vercel.svg",
    },
    // Tambahkan profil lainnya di sini
];

const DatingApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeRight = () => {
        console.log("Liked!");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    };

    const handleSwipeLeft = () => {
        console.log("Rejected!");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    };

    return (
        <div className="h-screen flex items-center justify-center">
            {profiles.length > 0 && (
                <ProfileCard
                    profile={profiles[currentIndex]}
                    onSwipeRight={handleSwipeRight}
                    onSwipeLeft={handleSwipeLeft}
                />
            )}
        </div>
    );
};

export default DatingApp;
