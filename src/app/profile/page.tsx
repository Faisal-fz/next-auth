
"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout successful');
            router.push('/login');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            console.log(res.data);
            setData(res.data.data._id);
        } catch (error: any) {
            console.log("Failed to fetch user details", error.message);
            toast.error("Failed to fetch user details");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Profile</h1>
                <p className="text-gray-600 text-center mb-6">Welcome to your profile page</p>

                <h2 className="p-3 rounded-lg bg-green-500 text-white text-center mb-6">
                    {data === 'nothing' ? "No Data Available" : (
                        <Link href={`/profile/${data}`} className="underline hover:text-green-200">
                            View Profile ID: {data}
                        </Link>
                    )}
                </h2>

                <div className="flex flex-col space-y-4">
                    <button
                        onClick={logout}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                        Logout
                    </button>

                    <button
                        onClick={getUserDetails}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                        Get User Details
                    </button>
                </div>
            </div>
        </div>
    );
}