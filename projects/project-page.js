(() => {
    const slug = window.PROJECT_SLUG;
    const catalog = window.projectCatalog;

    if (!slug || !catalog || !catalog.projects[slug]) {
        document.body.innerHTML = '<main class="project-shell"><p>Project not found.</p></main>';
        return;
    }

    const project = catalog.projects[slug];
    const related = catalog.order.filter((entry) => entry !== slug).slice(0, 3).map((entry) => catalog.projects[entry]);
    document.title = `${project.title} — Mostafa Abo Elhareth`;

    const relatedMarkup = related
        .map(
            (item) => `
                <a class="related-card reveal" href="${item.slug}.html">
                    <div class="related-media">
                        <img src="${item.thumb}" alt="${item.title}">
                    </div>
                    <h3 class="related-title">${item.title}</h3>
                    <div class="related-meta">${item.category}</div>
                </a>
            `
        )
        .join("");

    const sourceMarkup = project.sourceUrl
        ? `<a href="${project.sourceUrl}" target="_blank" rel="noreferrer">Open source case study</a>`
        : "Private source material prepared locally";

    const sectionsMarkup = project.sections
        .map((section, sectionIndex) => {
            const cards = section.images
                .map((item, imageIndex) => {
                    const featured = imageIndex === 0 && sectionIndex === 0;
                    return `
                        <article class="gallery-card reveal${featured ? " featured" : ""}">
                            <div class="gallery-media">
                                <img src="${item.src}" alt="${project.title} - ${item.caption}">
                            </div>
                            <div class="gallery-meta">
                                <div>
                                    <div class="gallery-caption">${item.caption}</div>
                                </div>
                                <div class="gallery-index">${project.number} / ${String(sectionIndex + 1).padStart(2, "0")}</div>
                            </div>
                        </article>
                    `;
                })
                .join("");

            return `
                <section class="project-section">
                    <div class="section-heading reveal">
                        <h2>${section.title}</h2>
                        <p>${section.text}</p>
                    </div>
                    <div class="gallery-grid">
                        ${cards}
                    </div>
                </section>
            `;
        })
        .join("");

    document.body.innerHTML = `
        <main class="project-shell">
            <nav class="project-nav reveal">
                <a class="project-nav-brand" href="../index.html">Mostafa Abo Elhareth</a>
                <div class="project-nav-links">
                    <a class="project-nav-link" href="../index.html#work">All Projects</a>
                    <a class="project-nav-link" href="../index.html#about">About</a>
                    <a class="project-nav-link" href="../index.html#resume">Resume</a>
                </div>
            </nav>

            <section class="project-hero">
                <div class="reveal">
                    <div class="eyebrow">${project.number} / 06 · ${project.category}</div>
                    <h1 class="project-title">${project.title}</h1>
                    <p class="project-summary">${project.summary}</p>
                    <div class="project-pills">
                        ${project.tags.map((tag) => `<span class="project-pill">${tag}</span>`).join("")}
                    </div>
                </div>
                <div class="hero-panel reveal">
                    <div class="hero-frame">
                        <img src="${project.hero}" alt="${project.title} hero image">
                    </div>
                </div>
            </section>

            <div class="project-layout">
                <section class="project-section">
                    <div class="section-heading reveal">
                        <h2>Project Notes</h2>
                        <p>${project.context}</p>
                    </div>
                    <div class="detail-grid">
                        <article class="detail-card reveal">
                            <div class="detail-label">Project</div>
                            <div class="detail-value">${project.title}</div>
                        </article>
                        <article class="detail-card reveal">
                            <div class="detail-label">Focus</div>
                            <div class="detail-value">${project.category}</div>
                        </article>
                        <article class="detail-card reveal">
                            <div class="detail-label">Source</div>
                            <div class="detail-value">${sourceMarkup}</div>
                        </article>
                    </div>
                </section>

                ${sectionsMarkup}

                <section class="project-section">
                    <div class="section-heading reveal">
                        <h2>Continue Exploring</h2>
                        <p>Three more project pages from the same portfolio system.</p>
                    </div>
                    <div class="related-grid">
                        ${relatedMarkup}
                    </div>
                </section>
            </div>
        </main>
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
        { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
