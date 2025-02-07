import Button from "../ui/Button";

export default function Hero() {
    return (
        <section
            className="relative h-[80vh] flex flex-col items-center justify-center text-center px-10 text-white bg-cover bg-bottom bg-scroll md:bg-fixed bg-[url('/images/hero-bg.webp')]"
        >
            {/* Dark Overlay & Fade Effect */}
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent"></div>

            {/* Content (must be above overlay) */}
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-6xl font-semibold">Build Projects. Showcase Your Skills.</h1>
                <p className="text-gray-400 mt-4 text-sm sm:text-base font-inter">Find students with real ideas to collaborate with, or bring your own ideas to the table.</p>
                <div className="flex justify-center items-center mt-4">
                    <Button className="">Start your journey</Button>
                </div>
            </div>
        </section>
    );
}
