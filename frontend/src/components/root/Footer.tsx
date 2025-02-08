import Button from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer
            className="relative flex flex-col items-center justify-center text-center text-white bg-black pt-20 pb-10 bg-cover bg-scroll md:bg-fixed bg-[url('/images/campus.webp')]"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            
            {/* Open Beta Announcement */}
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-6xl font-semibold px-10">We&apos;re in Open Beta!</h1>
                <p className="text-gray-400 mt-6 text-sm sm:text-base font-inter px-10">
                    Now&apos;s your chance to get in early. Connect with other students, build real projects, and help shape the future of this platform. Let&apos;s make something awesome together.
                </p>
                <div className="flex justify-center items-center mt-6">
                    <Button className="">Join the Community →</Button>
                </div>
            </div>
            
            {/* Footer Nav Section */}
            <div className="relative w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 sm:px-8 md:px-16 z-10 mt-10">
                {/* Faded Border at Top */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/90 to-transparent pointer-events-none"></div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1296px] py-6 gap-4 md:gap-0">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-white rounded-full"></div> {/* Placeholder for logo */}
                        <span className="text-white text-lg font-medium">Projects</span>
                    </div>
                    
                    {/* Privacy & Terms */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">Terms of Use</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="relative z-10 mt-4 text-center text-gray-500 text-sm w-full">
                &copy; 2025 Projex. All rights reserved.
            </div>
        </footer>
    );
}
