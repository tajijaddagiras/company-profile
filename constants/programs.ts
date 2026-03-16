export interface Program {
    id: string;
    title: string;
    age: string;
    desc: string;
    color: string;
    textColor: string;
    titleColor?: string;
    coverImage: string;
    bookUrl: string;
}

export const programs: Program[] = [
    {
        id: "drawing",
        title: "Drawing",
        age: "Seni Lukis",
        desc: "Dirancang untuk mengembangkan kreativitas dan kemampuan anak serta remaja dalam dunia mengambar. Disetiap level, siswa akan mempelajari berbagai aspek penting dalam seni mengambar, mulai dari pengenalan bentuk, garis, dan teknik dasar, hingga penciptaan karya ilustrasi yang lebih kompleks dan ekspresif.",
        color: "#4D96AD",
        textColor: "text-white",
        coverImage: "/images/cardbukudrawing.png",
        bookUrl: "https://drive.google.com/drive/folders/1JDpbg6z8i5fMC7IItOEns2CFAoKBZQWY?hl=ID"
    },
    {
        id: "digital-design",
        title: "Digital Desain",
        age: "Desain Grafis",
        desc: "Dirancang khusus untuk anak-anak dan remaja yang ingin mengembangkan keterampilan di bidang desain digital dan branding modern. Kursus ini tidak hanya mengajarkan cara mengunakan software profesional seperti Adobe Photoshop, Ilustrator, After Efects, dan Premiere Pro, tetapi juga membentuk pemahaman mendalam mengenai estetika visual, komunikasi desain, dan kreatifitas digital yang aplikatif di dunia nyata.",
        color: "#FFD9E8",
        textColor: "text-[#4D96AD]",
        titleColor: "#4D96AD",
        coverImage: "/images/cardbukudesain.png",
        bookUrl: "https://drive.google.com/drive/folders/1tZSDN4qxoFrv6Tv3ea5argX19ioaUD2z?hl=ID"
    },
    {
        id: "3d-animation",
        title: "3D Animation With Blender",
        age: "Animasi 3D",
        desc: "Dirancang khusus untuk anak-anak dan remaja yang ingin menjelajahi dunia animasi 3D dengan pendekatan yang menyenangkan, terstruktur, dan progresif. Dengan menggunakan software open-source populer, Blender, siswa akan belajar dari dasar hingga mampu menciptakan karakter, environment, dan animasi sinematik mereka sendiri.",
        color: "#D5EED1",
        textColor: "text-[#4D96AD]",
        titleColor: "#FFFFFF",
        coverImage: "/images/coverbuku3d.png",
        bookUrl: "https://drive.google.com/drive/folders/1eszIpxPXpE-bz8uxkVq6EarIEroQL8kN?hl=ID"
    },
];
