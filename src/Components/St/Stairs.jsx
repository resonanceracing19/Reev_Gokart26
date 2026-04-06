import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
    const currentPath = useLocation().pathname;
    const stairParentRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                onStart: () => {
                    // 🚫 Disable scroll at start
                    document.body.style.overflow = "hidden";
                },
                onComplete: () => {
                    // ✅ Enable scroll again when animation ends
                    document.body.style.overflow = "auto";
                },
            });

            // Stairs animation
            tl.to(stairParentRef.current, { display: "block" })
                .from(".stair", {
                    height: 0,
                    stagger: { amount: -0.2 },
                })
                .to(".stair", {
                    y: "100%",
                    stagger: { amount: -0.25 },
                })
                .to(stairParentRef.current, { display: "none" })
                .to(".stair", { y: "0%" });

            // Different transition effects
            const animations = [
                { opacity: 0, x: -100, duration: 1, ease: "power3.out" }, // Slide from left
                { opacity: 0, y: 100, duration: 1, ease: "power2.out" }, // Rise from bottom
                { opacity: 0, scale: 1.2, duration: 1, ease: "power2.out" }, // Zoom in
                {
                    opacity: 0,
                    rotateY: 45,
                    transformOrigin: "left center",
                    duration: 0,
                    ease: "back.out(1.7)",
                }, // Flip-in
            ];

            // Pick random animation
            const randomAnim =
                animations[Math.floor(Math.random() * animations.length)];

            gsap.from(pageRef.current, {
                ...randomAnim,
                delay: 0.1,
            });
        },
        [currentPath] // Re-run on route change
    );

    return (
        <div>
            {/* Stairs overlay */}
            <div
                ref={stairParentRef}
                className="h-screen w-full fixed z-20 top-0"
            >
                
            </div>

            {/* Page content */}
            <div ref={pageRef}>{props.children}</div>
        </div>
    );
};

export default Stairs;