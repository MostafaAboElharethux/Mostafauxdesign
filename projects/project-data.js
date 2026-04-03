const frameRange = (basePath, start, end, label) =>
    Array.from({ length: end - start + 1 }, (_, index) => {
        const frame = start + index;
        return {
            src: `${basePath}${String(frame).padStart(2, "0")}.png`,
            caption: `${label} ${String(frame).padStart(2, "0")}`,
        };
    });

window.projectCatalog = {
    order: [
        "travent",
        "cardoo",
        "kfh-homepage-redesign",
        "syft-gg",
        "on-cafee",
        "daycare-saas",
    ],
    projects: {
        travent: {
            slug: "travent",
            number: "01",
            title: "Travent",
            category: "Travel UX / UI",
            summary:
                "Travent is presented here as a travel experience that tries to feel composed from the first second. The goal is not just to show polished screens, but to communicate that sense of anticipation people carry when they are about to go somewhere meaningful.",
            context:
                "What makes travel work feel memorable is rarely the amount of interface on the screen. It is the feeling underneath it: ease, momentum, and quiet confidence. This page is written to keep that feeling alive while walking through the visuals.",
            sourceLabel: "Local portfolio archive",
            sourceUrl: "",
            thumb: "../assets/projects/travent/thambline.png",
            hero: "../assets/projects/travent/COVER INTRO.png",
            tags: ["UX / UI", "Mobile", "Case Study"],
            sections: [
                {
                    title: "Opening The Journey",
                    text:
                        "The beginning matters more than people admit. Before users trust a product with plans, dates, or money, they need to feel that the experience already understands their pace. These opening frames set that emotional temperature and create a first impression that feels smooth rather than salesy.",
                    images: [
                        { src: "../assets/projects/travent/COVER INTRO.png", caption: "Cover Intro" },
                        { src: "../assets/projects/travent/COVER INTRO-1.png", caption: "Opening Frame 01" },
                        { src: "../assets/projects/travent/COVER INTRO-2.png", caption: "Opening Frame 02" },
                        { src: "../assets/projects/travent/COVER INTRO-3.png", caption: "Opening Frame 03" },
                    ],
                },
                {
                    title: "Designing For Movement",
                    text:
                        "Travel products live or die by how naturally they handle movement. A person might be excited, rushed, distracted, or comparing five options at once. That is why the mobile work here needs to feel clear without becoming cold. The flow stays light, but it still carries enough structure to support real decision-making.",
                    images: [
                        { src: "../assets/projects/travent/Mobile Design.png", caption: "Mobile Design 01" },
                        { src: "../assets/projects/travent/Mobile Design-1.png", caption: "Mobile Design 02" },
                        { src: "../assets/projects/travent/UI Design.png", caption: "UI Design" },
                    ],
                },
                {
                    title: "Bringing The Story Together",
                    text:
                        "The final part of the project is where the visual system stops feeling like separate screens and starts feeling like one continuous experience. That is the difference between an interface that is merely attractive and one that people actually remember. The screens below hold that larger rhythm together.",
                    images: [
                        { src: "../assets/projects/travent/COVER INTRO-4.png", caption: "Continuation Frame 04" },
                        { src: "../assets/projects/travent/COVER INTRO-5.png", caption: "Continuation Frame 05" },
                        { src: "../assets/projects/travent/Screens.png", caption: "Screen Collection" },
                    ],
                },
            ],
        },
        cardoo: {
            slug: "cardoo",
            number: "02",
            title: "CardoO",
            category: "Product Audit / UX Improvements",
            summary:
                "CardoO is framed as an honest product conversation. Instead of starting from decoration, the page begins from friction, because the strongest redesign work usually starts by naming what feels heavy, confusing, or unfinished.",
            context:
                "There is something deeply human about critique when it is done with care. The purpose here is not to point at issues for their own sake, but to show how attention, structure, and empathy can turn scattered problems into a cleaner path forward.",
            sourceLabel: "Local portfolio archive",
            sourceUrl: "",
            thumb: "../assets/projects/cardoo/thambline.png",
            hero: "../assets/projects/cardoo/1- Cover.png",
            tags: ["UX Audit", "Product Thinking", "Improvements"],
            sections: [
                {
                    title: "Starting With The Truth",
                    text:
                        "Every useful audit starts with honesty. It asks where users are losing confidence, where the product is asking for too much effort, and where the interface is failing to carry its own meaning. These early frames build that shared understanding before any redesign claim is made.",
                    images: [
                        { src: "../assets/projects/cardoo/1- Cover.png", caption: "Case Study Cover" },
                        { src: "../assets/projects/cardoo/4- Assessment Overview.png", caption: "Assessment Overview" },
                        { src: "../assets/projects/cardoo/6-Key UX Issues Identified.png", caption: "Key UX Issues" },
                    ],
                },
                {
                    title: "Turning Friction Into Direction",
                    text:
                        "Good improvement work does not simply make things prettier. It gives the product a stronger sense of direction. The proposed changes below feel important because they connect design decisions back to the moments where users hesitate, get lost, or lose trust.",
                    images: [
                        { src: "../assets/projects/cardoo/10- Proposed Improvements.png", caption: "Proposed Improvements 01" },
                        { src: "../assets/projects/cardoo/11- Proposed Improvements.png", caption: "Proposed Improvements 02" },
                        { src: "../assets/projects/cardoo/12- Proposed Improvements.png", caption: "Proposed Improvements 03" },
                    ],
                },
                {
                    title: "Ending With Clarity",
                    text:
                        "A strong case study should leave the reader with more than a checklist. It should leave them with conviction. The closing moment matters because it brings the whole argument back into focus and reminds people that design is ultimately a tool for reducing uncertainty.",
                    images: [
                        { src: "../assets/projects/cardoo/17- Closing.png", caption: "Closing" },
                    ],
                },
            ],
        },
        "kfh-homepage-redesign": {
            slug: "kfh-homepage-redesign",
            number: "03",
            title: "KFH Homepage Redesign",
            category: "Banking / Homepage Redesign",
            summary:
                "This project is about first contact. In banking, the homepage is not just an entry point; it is a trust signal. The redesign story here focuses on what happens when a financial experience starts to feel lighter, clearer, and more reassuring from the first glance.",
            context:
                "People do not come to a banking interface looking for surprise. They come looking for confidence. That changes the design tone completely. The storytelling on this page stays grounded in clarity, restraint, and the emotional weight of financial decisions.",
            sourceLabel: "Local portfolio archive",
            sourceUrl: "",
            thumb: "../assets/projects/kfh/THumbnail.png",
            hero: "../assets/projects/kfh/1- Cover.png",
            tags: ["Fintech", "Homepage", "Redesign"],
            sections: [
                {
                    title: "Rebuilding Trust At First Sight",
                    text:
                        "The homepage redesign begins by confronting the first few seconds of the experience. That is where people decide if the product feels modern, dependable, and worth engaging with. These frames establish the problem and create the emotional reason for redesigning the surface.",
                    images: [
                        { src: "../assets/projects/kfh/1- Cover.png", caption: "Case Study Cover" },
                        { src: "../assets/projects/kfh/4- Assessment Overview.png", caption: "Assessment Overview" },
                        { src: "../assets/projects/kfh/6-Key UX Issues Identified.png", caption: "Key UX Issues" },
                    ],
                },
                {
                    title: "Making Banking Feel Lighter",
                    text:
                        "A good financial interface does not remove seriousness, but it does remove unnecessary strain. The redesign work below moves toward cleaner hierarchy, gentler guidance, and a stronger feeling of control. That emotional shift is subtle, but it is exactly what makes the experience easier to trust.",
                    images: [
                        { src: "../assets/projects/kfh/8- Proposed Improvements.png", caption: "Proposed Improvements" },
                        { src: "../assets/projects/kfh/9.1-Before vs After.png", caption: "Before vs After" },
                        { src: "../assets/projects/kfh/11- Redesigned UI (Light + Dark).png", caption: "Redesigned UI" },
                    ],
                },
                {
                    title: "Showing Why The Change Matters",
                    text:
                        "Redesigns become meaningful when they can be felt and explained. The final part of this project connects the visual refinement back to outcomes, alignment, and business reasoning. It gives the work more weight than aesthetics alone ever could.",
                    images: [
                        { src: "../assets/projects/kfh/13- Success Metrics.png", caption: "Success Metrics" },
                        { src: "../assets/projects/kfh/15- Why This Works for KFH.png", caption: "Why This Works" },
                    ],
                },
            ],
        },
        "syft-gg": {
            slug: "syft-gg",
            number: "04",
            title: "Syft.GG",
            category: "Creator Collaboration & Payment SaaS",
            summary:
                "Syft.GG carries a different kind of energy. It is operational, fast-moving, and built for people whose work lives between collaboration and commerce. The page tells that story as a product system trying to create confidence in a space that can easily feel fragmented.",
            context:
                "Creator tools are emotional even when they look technical. They touch money, momentum, trust between collaborators, and the pressure of being visible. The writing here leans into that reality so the visuals feel like part of a living product, not just a gallery of screens.",
            sourceLabel: "Behance case study",
            sourceUrl: "https://www.behance.net/gallery/236861335/Creator-Collaboration-Payment-SaaS-Platform",
            thumb: "../assets/projects/syft-gg/syft-gg-01.png",
            hero: "../assets/projects/syft-gg/syft-gg-01.png",
            tags: ["SaaS", "Payments", "Creator Economy"],
            sections: [
                {
                    title: "A Product For People Building In Public",
                    text:
                        "The opening frames introduce more than a brand aesthetic. They establish tone. In products made for creators, tone matters because people are not only trying to complete tasks; they are trying to move their work, partnerships, and income forward without losing speed or confidence.",
                    images: frameRange("../assets/projects/syft-gg/syft-gg-", 1, 5, "Opening Frame"),
                },
                {
                    title: "Organizing Complexity Without Killing Momentum",
                    text:
                        "Behind every clean SaaS screen is a quiet negotiation between complexity and momentum. The product has to hold payment logic, collaboration structure, and workflow clarity all at once. These frames show how that complexity is given shape without making the user feel slowed down by it.",
                    images: frameRange("../assets/projects/syft-gg/syft-gg-", 6, 10, "Workflow Frame"),
                },
                {
                    title: "Making The System Feel Operational",
                    text:
                        "When a platform starts to feel operational, it means the design is doing more than decorating data. It is helping teams make decisions, understand status, and act with less hesitation. That emotional effect is easy to miss, but it is one of the strongest signals of product maturity.",
                    images: frameRange("../assets/projects/syft-gg/syft-gg-", 11, 15, "System Frame"),
                },
                {
                    title: "Ending With Confidence",
                    text:
                        "The final sequence lands the case study with a sense of completeness. Instead of racing to the end, it lets the product hold its own weight. That is what gives the project its final energy: the feeling that the system is ready to support real work, real money, and real collaboration.",
                    images: frameRange("../assets/projects/syft-gg/syft-gg-", 16, 19, "Closing Frame"),
                },
            ],
        },
        "on-cafee": {
            slug: "on-cafee",
            number: "05",
            title: "On Cafee",
            category: "UX Case Study",
            summary:
                "On Cafee is the warmest project in the set. It has a softer emotional texture, and the writing follows that lead. The intention here is to make the case study feel welcoming and thoughtful, not over-explained, while still giving every group of visuals a clear reason to exist.",
            context:
                "Food-related experiences ask for a different kind of sensitivity. People are not only looking for efficiency; they are looking for ease, appetite, familiarity, and a small sense of delight. That is why this page uses a gentler storytelling rhythm.",
            sourceLabel: "Behance case study",
            sourceUrl: "https://www.behance.net/gallery/113543215/On-Caf-UX-Case-Study",
            thumb: "../assets/projects/on-cafee/on-cafee-01.png",
            hero: "../assets/projects/on-cafee/on-cafee-01.png",
            tags: ["Food Tech", "UX", "Case Study"],
            sections: [
                {
                    title: "Designing Warmth Without Noise",
                    text:
                        "Warmth in product design is easy to fake. Real warmth comes from making choice feel natural and making the interface feel generous rather than loud. The opening sequence sets that tone and gives the project its emotional center.",
                    images: frameRange("../assets/projects/on-cafee/on-cafee-", 1, 4, "Opening Frame"),
                },
                {
                    title: "Helping Choices Feel Easy",
                    text:
                        "Ordering, browsing, and comparing are simple actions on paper, but in practice they can become mentally heavy very quickly. The work in this section matters because it reduces that invisible effort and lets the user stay inside a smoother, more appetizing rhythm.",
                    images: frameRange("../assets/projects/on-cafee/on-cafee-", 5, 8, "Experience Frame"),
                },
                {
                    title: "Holding The Experience Together",
                    text:
                        "A product like this succeeds when the details stop feeling separate. Information, hierarchy, and visual tone need to cooperate so the interface feels continuous. These frames show that quieter layer of design work where coherence becomes the real value.",
                    images: frameRange("../assets/projects/on-cafee/on-cafee-", 9, 11, "Flow Frame"),
                },
                {
                    title: "Leaving The Reader With A Feeling",
                    text:
                        "The strongest case studies do not just inform. They leave a residue. They make the reader remember how the product felt. The closing sequence is written to preserve exactly that: a soft sense of care, appetite, and design maturity.",
                    images: frameRange("../assets/projects/on-cafee/on-cafee-", 12, 14, "Closing Frame"),
                },
            ],
        },
        "daycare-saas": {
            slug: "daycare-saas",
            number: "06",
            title: "Enterprise SaaS Platform",
            category: "Daycare Management",
            summary:
                "This project carries a quieter kind of gravity. Daycare management is operational work, but it is also deeply human work. Behind every screen there are parents, staff, routines, interruptions, and trust. The page is written with that emotional reality in mind.",
            context:
                "Enterprise design often becomes too abstract too quickly. This case study resists that by treating structure as a form of care. When the system becomes clearer, people do not just work faster; they carry less mental weight through the day.",
            sourceLabel: "Behance case study",
            sourceUrl: "https://www.behance.net/gallery/234035963/Enterprise-SaaS-Platform-Daycare-Management",
            thumb: "../assets/projects/daycare-saas/daycare-saas-01.png",
            hero: "../assets/projects/daycare-saas/daycare-saas-01.png",
            tags: ["Enterprise SaaS", "Operations", "Platform Design"],
            sections: [
                {
                    title: "Designing For Responsibility",
                    text:
                        "Products used in care environments need a different emotional contract. They cannot feel careless or overloaded. The opening sequence introduces that seriousness while still giving the experience enough visual grace to feel modern and approachable.",
                    images: frameRange("../assets/projects/daycare-saas/daycare-saas-", 1, 4, "Opening Frame"),
                },
                {
                    title: "Supporting The People Behind The Routine",
                    text:
                        "Operations are made of repeated actions, but the people doing them are not machines. They are switching context, responding to parents, and carrying responsibility in real time. This section matters because it shows how design can reduce daily strain instead of adding to it.",
                    images: frameRange("../assets/projects/daycare-saas/daycare-saas-", 5, 8, "Operations Frame"),
                },
                {
                    title: "Giving The System A Clear Backbone",
                    text:
                        "At a certain point, enterprise design becomes an exercise in backbone. The interface has to hold information steadily, make status legible, and prevent confusion before it starts. These frames show how clarity becomes a structural quality, not just a visual one.",
                    images: frameRange("../assets/projects/daycare-saas/daycare-saas-", 9, 11, "System Frame"),
                },
                {
                    title: "Where Efficiency Starts To Feel Like Relief",
                    text:
                        "The most meaningful enterprise outcomes are often emotional before they are numerical. A cleaner system creates relief. It gives people more headspace. The final sequence is there to leave the reader with that exact understanding of value.",
                    images: frameRange("../assets/projects/daycare-saas/daycare-saas-", 12, 14, "Closing Frame"),
                },
            ],
        },
    },
};
