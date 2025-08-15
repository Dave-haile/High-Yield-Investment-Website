import BackGround from "/Background/111.jpg";
import BackGround2 from "/Background/3.png";

// export default function IntroductionHero({
//   imageSrc =
//     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
// }) {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BackGround2})`}}>
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
//         <div className="md:col-span-8 flex items-center rounded-l-3xl p-6">
//           <div className="w-full rounded-2xl border-2 border-gray-200/90 p-10 md:p-16 shadow-xl bg-gradient-to-r from-transparent via-black/90 to-black">
//             <h1 className="text-white uppercase font-extrabold text-4xl md:text-6xl tracking-tight mb-10">
//               Introduction
//             </h1>

//             <div className="max-w-2xl mx-auto text-gray-200 leading-relaxed text-lg md:text-xl space-y-6">
//               <p>
//                 We're your dedicated partners in propelling startups toward success. With a
//                 blend of expertise and innovation, we offer comprehensive solutions tailored to
//                 meet the specific needs of each venture we work with.
//               </p>

//               <p>
//                 From strategic guidance to brand development and digital marketing, we're
//                 committed to empowering startups to thrive in competitive markets. Our
//                 collaborative approach ensures that we're not just service providers but
//                 invested advocates for your growth. Let us be the catalyst for your startup's
//                 journey, guiding you towards achieving your goals and beyond.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="md:col-span-4 flex items-stretch">
//           <div className="w-full h-full overflow-hidden rounded-r-3xl">
//             <img src={BackGround} alt="Team working" className="w-[40rem] h-full object-cover grayscale" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function IntroductionHero({
  imageSrc =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BackGround2})`}}>
      {/* Background image */}
      <div className="absolute inset-0 left-[56rem]">
        <img
          src={BackGround}
          alt="Team working"
          className="w-[30rem] h-full object-cover grayscale"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Box Overlay */}
      <div className="relative w-full max-w-5xl">
        <div className="rounded-2xl border-2 border-gray-200/90 p-10 md:p-16 shadow-xl bg-gradient-to-r from-transparent via-black/90 to-black">
          <h1 className="text-white uppercase font-extrabold text-4xl md:text-6xl tracking-tight mb-10">
            Introduction
          </h1>

          <div className="max-w-3xl text-gray-200 leading-relaxed text-lg md:text-xl space-y-6">
            <p>
              We're your dedicated partners in propelling startups toward success. With a
              blend of expertise and innovation, we offer comprehensive solutions tailored to
              meet the specific needs of each venture we work with.
            </p>

            <p>
              From strategic guidance to brand development and digital marketing, we're
              committed to empowering startups to thrive in competitive markets. Our
              collaborative approach ensures that we're not just service providers but
              invested advocates for your growth. Let us be the catalyst for your startup's
              journey, guiding you towards achieving your goals and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
