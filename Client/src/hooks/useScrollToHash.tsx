// import { useEffect } from "react";

// export default function useScrollToHash() {
//   useEffect(() => {
//     if (window.location.hash) {
//       const id = window.location.hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 100); // small delay so DOM is ready
//       }
//     }
//   }, []);
// }
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
}