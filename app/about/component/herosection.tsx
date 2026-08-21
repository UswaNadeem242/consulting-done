export default function AboutHeroSection() {
    return (
        <section
            className="relative w-full min-h-[400px] md:min-h-[300px] flex items-center justify-center overflow-hidden border-b border-consult-blue"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1717653487195-13826a597888?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-consult-blue/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4 w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide text-center">
                    About Us
                </h1>
            </div>
        </section>
    );
}
