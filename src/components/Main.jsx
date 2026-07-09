import Smart_Attendance from "../assets/Smart_Attendance.svg";
import wmsu1 from "../assets/UniversityPhoto/wmsu1.jpg";
import wmsu2 from "../assets/UniversityPhoto/wmsu2.jpg";
import wmsu3 from "../assets/UniversityPhoto/wmsu3.jpg";
import wmsu4 from "../assets/UniversityPhoto/wmsu4.jpg";
import wmsu5 from "../assets/UniversityPhoto/wmsu5.jpg";
import wmsu6 from "../assets/UniversityPhoto/wmsu6.jpg";
import aries from "../assets/DevTeamPhoto/aries.jpg";
import jasmir from "../assets/DevTeamPhoto/jasmir.jpg";
import regz from "../assets/DevTeamPhoto/regz.jpg";
import yabs from "../assets/DevTeamPhoto/yabs.jpg";


// Swap these src values for your own campus/event photos when ready.
const galleryImages = [
    { src: wmsu1, alt: "Classroom attendance session" },
    { src: wmsu2, alt: "University seminar attendance" },
    { src: wmsu3, alt: "Organized digital attendance records" },
    { src: wmsu4, alt: "University event attendance" },
    { src: wmsu5, alt: "Organized digital attendance records" },
    { src: wmsu6, alt: "University event attendance" }
];

const contacts = [
  {
    name: "Jasmir Sadalani",
    role: "QA Specialist",
    phone: "+1 (555) 214-7890",
    email: "jasmir24@gmail.com",
    image: jasmir,
  },
  {
    name: "Regan Kalnain",
    role: "Backend Developer",
    phone: "+1 (555) 328-1145",
    email: "regzThegreat@gmail.com",
    image: regz,
  },
  {
    name: "Aries Cabato",
    role: "Marketing",
    phone: "+1 (555) 902-6634",
    email: "aries20@gmail.com",
    image: aries,
  },
  {
    name: "Christopher Yabo",
    role: "Frontend Developer / UI/UX Designer",
    phone: "+1 (555) 471-2298",
    email: "chrisyabo302@gmail.com",
    image: yabs,
  },
];

function Main(){
    return (
        <main className="min-h-screen bg-[oklch(82.7% 0.119 306.383)] pt-20">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* First Div - System Theme */}
                <div className="space-y-6">
                    <span className="inline-block bg-rose-500/10 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold">
                    Smart Attendance System
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Smart Attendance with QR Code
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed">
                    A modern attendance system that allows students to scan their QR
                    code to attend university classes and seminars quickly, securely,
                    and accurately.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                        Get Started
                    </button>

                    <button className="border border-rose-500 text-rose-500 px-6 py-3 rounded-lg font-medium hover:bg-rose-500 hover:text-white transition">
                        Learn More
                    </button>
                    </div>
                </div>

                {/* Second Div - Image Placeholder */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md h-80 rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                    <img src={Smart_Attendance} alt="Smart Attendance" className="w-full h-full object-cover" />
                    </div>
                </div>

                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
                <span className="text-rose-500 font-semibold justify-center flex items-center text-center">
                    About
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4 justify-center flex items-center text-center">
                    A smarter way to manage university attendance
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed justify-center flex items-center text-center">
                    The Smart Attendance System uses QR code technology to make
                    attendance checking easier for university classes and seminars.
                    Instead of using manual attendance sheets, students can simply scan
                    their QR code to record their attendance in a faster and more
                    organized way.
                </p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="text-center mb-10">
                <span className="text-rose-500 font-semibold">
                    Services
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mt-3">
                    What the system provides
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Designed for universities to easily monitor attendance in classes,
                    events, and seminars using QR code scanning.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Service 1 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                    QR
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    QR Code Attendance
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                    Students can scan their personal QR code to attend university
                    classes quickly and accurately.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                    ✓
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Seminar Attendance
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                    The system can also be used for university seminars, orientations,
                    workshops, and school-related events.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                    📊
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Organized Records
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                    Attendance records are easier to manage, monitor, and review
                    compared to traditional manual checking.
                    </p>
                </div>

                </div>
            </section>

            {/* Gallery Section - sliding image marquee */}
            <section className="py-16 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center mb-10">
                    <span className="text-rose-500 font-semibold">
                        Gallery
                    </span>

                    <h2 className="text-3xl font-bold text-gray-900 mt-3">
                        Attendance in action
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        A look at the Smart Attendance System being used across classes,
                        seminars, and campus events.
                    </p>
                </div>

                <div className="group relative w-full overflow-hidden">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-purple-300 to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-r from-purple-300 to-transparent z-10" />

                    <div className="flex w-max gap-6 px-6 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {[...galleryImages, ...galleryImages].map((img, i) => (
                            <div
                                key={i}
                                className="w-72 h-48 shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>
            </section>

            {/* Contact Section */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="text-center mb-10">
                    <span className="text-rose-500 font-semibold">
                        Contact
                    </span>
 
                    <h2 className="text-3xl font-bold text-gray-900 mt-3">
                        Get in touch with the team
                    </h2>
 
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Reach out to the people behind the Smart Attendance System for
                        support, demos, or partnership inquiries.
                    </p>
                </div>
 
                <div className="flex flex-wrap justify-center gap-6">
                    {contacts.map((contact) => (
                        <div
                            key={contact.email}
                            className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl px-6 py-8 w-64 shrink-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="w-24 h-24 rounded-full object-cover ring-4 ring-rose-500/10"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {contact.name}
                            </h3>
                            <p className="text-sm text-rose-500 font-medium">
                                {contact.role}
                            </p>
 
                            <div className="mt-5 w-full border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <phone size={15} className="text-gray-400 shrink-0" />
                                    <span>{contact.phone}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 min-w-0">
                                    <mail size={15} className="text-gray-400 shrink-0" />
                                    <span className="truncate">{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
                
    </main>
    );
}

export default Main;