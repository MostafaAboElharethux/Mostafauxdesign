(() => {
    const slug = window.PROJECT_SLUG;
    const catalog = window.projectCatalog;

    if (!slug || !catalog || !catalog.projects[slug]) {
        document.body.innerHTML = '<main class="page"><p>Project not found.</p></main>';
        return;
    }

    const project = catalog.projects[slug];
    const related = catalog.order
        .filter((entry) => entry !== slug)
        .slice(0, 3)
        .map((entry) => catalog.projects[entry]);

    document.title = `${project.title} — Mostafa Abo Elhareth`;

    const sourceMarkup = project.sourceUrl
        ? `<a href="${project.sourceUrl}" target="_blank" rel="noreferrer">${project.sourceLabel}</a>`
        : project.sourceLabel;

    const sectionsMarkup = project.sections
        .map((section, index) => {
            const figures = section.images
                .map(
                    (image) => `
                        <figure class="section-figure reveal">
                            <div class="section-media${image.tall ? " tall" : ""}" data-image-src="${image.src}" data-image-caption="${image.caption || ""}">
                                <img src="${image.src}" alt="${project.title}">
                                <div class="peek-hint">Open frame</div>
                            </div>
                            ${image.caption ? `<figcaption class="figure-caption">${image.caption}</figcaption>` : ""}
                        </figure>
                    `
                )
                .join("");

            return `
                <section class="section">
                    <div class="section-header">
                        <div class="reveal">
                            <div class="section-label">${project.number} / ${String(index + 1).padStart(2, "0")}</div>
                            <h2 class="section-title">${section.title}</h2>
                        </div>
                        <div class="reveal">
                            <p class="section-copy">${section.text}</p>
                            ${section.caption ? `<p class="section-caption">${section.caption}</p>` : ""}
                        </div>
                    </div>
                    <div class="media-grid ${section.layout || "single"}">
                        ${figures}
                    </div>
                </section>
            `;
        })
        .join("");

    const relatedMarkup = related
        .map(
            (item) => `
                <a class="next-card reveal" href="${item.slug}.html">
                    <div class="next-card-media">
                        <img src="${item.thumb}" alt="${item.title}">
                    </div>
                    <h3 class="next-card-title">${item.title}</h3>
                    <div class="next-card-meta">${item.category}</div>
                </a>
            `
        )
        .join("");

    document.body.innerHTML = `
        <main class="page">
            <header class="topbar reveal">
                <a class="topbar-brand" href="../index.html">Mostafa Abo Elhareth</a>
                <nav class="topbar-links">
                    <a class="topbar-link" href="../index.html#work">Work</a>
                    <a class="topbar-link" href="../index.html#about">About</a>
                    <a class="topbar-link" href="../index.html#resume">Resume</a>
                </nav>
            </header>

            <section class="hero">
                <div class="reveal">
                    <div class="eyebrow">${project.number} / 06 · ${project.category}</div>
                    <h1 class="title">${project.title}</h1>
                    <p class="summary">${project.summary}</p>
                </div>
                <div class="meta">
                    <div class="meta-item reveal">
                        <div class="meta-label">Role</div>
                        <div class="meta-value">Senior UX/UI Designer</div>
                    </div>
                    <div class="meta-item reveal">
                        <div class="meta-label">What this project is</div>
                        <div class="meta-value">${project.meta.what}</div>
                    </div>
                    <div class="meta-item reveal">
                        <div class="meta-label">What changed</div>
                        <div class="meta-value">${project.meta.change}</div>
                    </div>
                    <div class="meta-item reveal">
                        <div class="meta-label">Source</div>
                        <div class="meta-value">${sourceMarkup}</div>
                    </div>
                </div>
                <div class="hero-media reveal">
                    <img src="${project.hero}" alt="${project.title} hero image">
                </div>
            </section>

            ${sectionsMarkup}

            <section class="next">
                <div class="next-header">
                    <div class="reveal">
                        <h2 class="next-title">Continue Reading</h2>
                    </div>
                    <p class="next-copy reveal">Three more case studies from the same portfolio, each restructured with the same calmer reading rhythm.</p>
                </div>
                <div class="next-grid">
                    ${relatedMarkup}
                </div>
            </section>
        </main>
        <div class="lightbox" id="lightbox" aria-hidden="true">
            <div class="lightbox-dialog">
                <div class="lightbox-bar">
                    <div class="lightbox-caption" id="lightboxCaption"></div>
                    <div class="lightbox-actions">
                        <button class="lightbox-btn lightbox-download" id="lightboxDownload" type="button">
                            <span class="download-face" aria-hidden="true">
                                <span class="download-eye left"><span class="download-pupil"></span></span>
                                <span class="download-eye right"><span class="download-pupil"></span></span>
                                <span class="download-mouth"></span>
                            </span>
                            <span class="download-copy">
                                <strong id="downloadLabel">Download</strong>
                                <span id="downloadSub">Take this frame with you</span>
                            </span>
                        </button>
                        <button class="lightbox-btn lightbox-close" id="lightboxClose" type="button" aria-label="Close image viewer">×</button>
                    </div>
                </div>
                <figure class="lightbox-figure">
                    <img id="lightboxImage" alt="">
                </figure>
            </div>
        </div>
    `;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxDownload = document.getElementById("lightboxDownload");
    const downloadLabel = document.getElementById("downloadLabel");
    const downloadSub = document.getElementById("downloadSub");
    const pupils = Array.from(document.querySelectorAll(".download-pupil"));
    let activeImageSrc = "";
    let activeImageCaption = "";

    const openLightbox = (src, caption) => {
        activeImageSrc = src;
        activeImageCaption = caption || project.title;
        lightboxImage.src = src;
        lightboxImage.alt = activeImageCaption;
        lightboxCaption.textContent = caption || "";
        downloadLabel.textContent = "Download";
        downloadSub.textContent = "Take this frame with you";
        lightboxDownload.classList.remove("is-happy");
        lightboxDownload.classList.remove("is-success");
        lightboxDownload.classList.remove("is-animating");
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
    };

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    };

    document.querySelectorAll(".section-media").forEach((media) => {
        media.addEventListener("click", () => openLightbox(media.dataset.imageSrc, media.dataset.imageCaption));
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });

    lightboxDownload.addEventListener("click", () => {
        if (!activeImageSrc) return;
        const link = document.createElement("a");
        link.href = activeImageSrc;
        link.download = activeImageSrc.split("/").pop() || `${project.slug}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        lightboxDownload.classList.remove("is-success");
        lightboxDownload.classList.remove("is-animating");
        void lightboxDownload.offsetWidth;
        lightboxDownload.classList.add("is-animating");
        lightboxDownload.classList.add("is-happy");
        lightboxDownload.classList.add("is-success");
        downloadLabel.textContent = "Saved";
        downloadSub.textContent = "That one looked good on you";
        window.setTimeout(() => {
            lightboxDownload.classList.remove("is-animating");
        }, 460);
    });

    lightbox.addEventListener("mousemove", (event) => {
        const rect = lightboxDownload.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;
        const distance = Math.hypot(dx, dy);
        const limit = distance < 220 ? 3.2 : 0;
        const ratio = distance ? Math.min(limit / distance, 1) : 0;
        pupils.forEach((pupil) => {
            pupil.style.transform = `translate(${dx * ratio}px, ${dy * ratio}px)`;
        });
    });

    lightbox.addEventListener("mouseleave", () => {
        pupils.forEach((pupil) => {
            pupil.style.transform = "translate(0, 0)";
        });
    });
})();
