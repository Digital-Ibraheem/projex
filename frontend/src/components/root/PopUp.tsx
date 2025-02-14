import { useState } from "react";

export default function SignupForm({ setIsPopUpOpen }: { setIsPopUpOpen: (open: boolean) => void }) {
    const [username, setUsername] = useState<string>("");
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] h-[55%] text-black relative">
                {/* Close Button (Top-right) */}
                <button
                    className="absolute top-4 right-4 px-2 py-1 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    onClick={() => setIsPopUpOpen(false)}>
                    ✕
                </button>

                {/* Left side (Text) */}
                <div className="w-4/5 pr-4">
                    <h2 className="text-l font-bold">Sign Up</h2>
                    <p className="mt-2">Join the community and start collaborating on projects.</p>
                    
                {/* Username Section */}
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="text-gray-700 text-sm font-medium block">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username..."
                        className={`w-full border rounded-md p-1 mt-1 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 
                            ${formErrors.includes("username") ? "border-red-500" : "border-gray-300"}`}
                    />
                </div>

                </div>
            </div>
        </div>
    );
}
