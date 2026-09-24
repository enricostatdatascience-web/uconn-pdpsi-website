/* ==========================================================================
   Site behaviour — nav, footer, scroll reveal, counters, and the
   interactive roster / board / chapters / FAQ modules.

   Every page loads this file. Each module checks whether its target element
   exists before running, so one script safely serves the whole site.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Tiny helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  const COMBINING = /[\u0300-\u036f]/g;
  const norm = (str) =>
    String(str).toLowerCase().normalize("NFKD").replace(COMBINING, "");

  /** Wrap the matched part of `text` in <mark> — escaped, safe to inject. */
  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const i = norm(safe).indexOf(norm(query));
    if (i === -1) return safe;
    return (
      safe.slice(0, i) + "<mark>" + safe.slice(i, i + query.length) + "</mark>" + safe.slice(i + query.length)
    );
  }

  /* ======================================================================
     CREST ICONS
     The four symbols lifted from the chapter crest (scroll, tree, scales,
     handshake), recoloured to the chapter red. Files live in assets/img/.
     Referenced by name from the PILLARS list in data.js.
     ====================================================================== */
  const ICON_LABELS = {
    scroll: "Scroll",
    tree: "Tree",
    scales: "Scales of justice",
    handshake: "Clasped hands"
  };

  /** <img> for one of the crest symbols. */
  function icon(name) {
    if (!ICON_LABELS[name]) return "";
    return `<img class="card__icon" src="assets/img/pillar-${name}.png"
                 alt="${ICON_LABELS[name]}" width="256" height="256" loading="lazy">`;
  }

  /* ======================================================================
     NAVIGATION + FOOTER
     Rendered from one place so a link change touches a single file.
     ====================================================================== */
  const NAV_LINKS = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["history.html", "History"],
    ["chapters.html", "Chapters"],
    ["rush.html", "Rush"],
    ["roster.html", "Roster"],
    ["board.html", "Board"]
  ];

  const SOCIALS = {
    instagram: "https://www.instagram.com/uconnpdpsi/",
    facebook: "https://www.facebook.com/UConnPiDeltaPsi/",
    national: "https://www.pideltapsi.com/"
  };

  function currentPage() {
    const file = window.location.pathname.split("/").pop();
    return !file || file === "" ? "index.html" : file;
  }

  function buildNav() {
    const host = $("#site-nav");
    if (!host) return;
    const here = currentPage();

    host.className = "nav";
    host.innerHTML = `
      <div class="nav__inner">
        <a class="brand" href="index.html" aria-label="Pi Delta Psi, Omega Chapter — home">
          <img class="brand__crest" src="assets/img/crest.png" alt="" width="606" height="720">
          <span class="brand__text">
            <span class="brand__name">Pi Delta Psi</span>
            <span class="brand__sub">Omega &middot; UConn</span>
          </span>
        </a>
        <button class="nav__toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">
          <span></span>
        </button>
        <div class="nav__links" id="nav-links">
          ${NAV_LINKS.map(
            ([href, label]) =>
              `<a class="nav__link${href === here ? " is-active" : ""}" href="${href}"${
                href === here ? ' aria-current="page"' : ""
              }>${label}</a>`
          ).join("")}
        </div>
      </div>`;

    const toggle = $("#nav-toggle");
    const links = $("#nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav__link", links).forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const onScroll = () => host.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function buildFooter() {
    const host = $("#site-footer");
    if (!host) return;
    const year = new Date().getFullYear();

    host.className = "footer";
    host.innerHTML = `
      <div class="wrap">
        <div class="footer__top">
          <div class="footer__brand">
            <a class="brand" href="index.html">
              <img class="brand__crest" src="assets/img/crest.png" alt="" width="606" height="720">
                  <span class="brand__text">
                <span class="brand__name">Pi Delta Psi</span>
                <span class="brand__sub">Omega &middot; UConn</span>
              </span>
            </a>
            <p>Pi Delta Psi Fraternity, Inc. &mdash; Omega Chapter at the University of Connecticut. Chartered April 12, 2008. Excellence Through Brotherhood.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              ${NAV_LINKS.slice(1).map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="${SOCIALS.instagram}" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="${SOCIALS.facebook}" target="_blank" rel="noopener">Facebook</a></li>
              <li><a href="${SOCIALS.national}" target="_blank" rel="noopener">National Website</a></li>
              <li><a href="https://uconn.edu" target="_blank" rel="noopener">University of Connecticut</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span>&copy; ${year} Pi Delta Psi Fraternity, Inc. &mdash; Omega Chapter. All rights reserved.</span>
          <div class="footer__social">
            <a href="${SOCIALS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58Zm8.4-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z"/></svg>
            </a>
            <a href="${SOCIALS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>
            </a>
          </div>
        </div>
      </div>`;
  }

  /* ======================================================================
     SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ======================================================================
     COUNT-UP NUMBERS
     ====================================================================== */
  function initCounters() {
    const nums = $$("[data-count]");
    if (!nums.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      if (reduce || !Number.isFinite(target)) {
        el.textContent = target + suffix;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      nums.forEach(run);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* ======================================================================
     BACK TO TOP
     ====================================================================== */
  function initToTop() {
    const btn = $("#to-top");
    if (!btn) return;
    const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ======================================================================
     ACCORDION (Rush FAQ)
     ====================================================================== */
  function initAccordion() {
    $$(".acc-item__head").forEach((head) => {
      head.setAttribute("aria-expanded", "false");
      head.addEventListener("click", () => {
        const item = head.closest(".acc-item");
        const open = item.classList.toggle("is-open");
        head.setAttribute("aria-expanded", String(open));
      });
    });
    // Open the first one by default
    const first = $(".acc-item");
    if (first) {
      first.classList.add("is-open");
      const h = $(".acc-item__head", first);
      if (h) h.setAttribute("aria-expanded", "true");
    }
  }

  /* ======================================================================
     ROSTER — search, filter, expand/collapse
     ====================================================================== */
  function initRoster() {
    const host = $("#roster");
    if (!host || typeof PLEDGE_CLASSES === "undefined") return;

    const input = $("#roster-search");
    const clearBtn = $("#roster-clear");
    const chipRow = $("#roster-chips");
    const countEl = $("#roster-count");

    let query = "";
    let era = "all"; // all | 2008-2013 | 2014-2019 | 2020-now

    const ERAS = [
      ["all", "All Classes"],
      ["early", "2008–2013"],
      ["mid", "2014–2019"],
      ["recent", "2020–Present"]
    ];

    function eraOf(term) {
      const year = parseInt(term.replace(/\D/g, ""), 10);
      if (year <= 2013) return "early";
      if (year <= 2019) return "mid";
      return "recent";
    }

    function matches(b) {
      if (!query) return true;
      const q = norm(query);
      return norm(b[1]).includes(q) || norm(b[2]).includes(q) || String(b[0]) === query.trim();
    }

    function render() {
      const q = query.trim();
      let shown = 0;

      const html = PLEDGE_CLASSES.map((cls) => {
        if (era !== "all" && eraOf(cls.term) !== era) return "";

        const hits = cls.brothers.filter(matches);
        if (!hits.length) return "";
        shown += hits.length;

        const eds = [];
        if (cls.educator) eds.push(`<span><b>Pledge Educator</b> — ${esc(cls.educator)}</span>`);
        if (cls.assistant) eds.push(`<span><b>Pledge Assistant</b> — ${esc(cls.assistant)}</span>`);

        return `
          <section class="classblock" data-class="${esc(cls.name)}">
            <header class="classblock__head">
              <span class="classblock__greek" aria-hidden="true">${cls.greek}</span>
              <span class="classblock__meta">
                <h3 class="classblock__name">${esc(cls.name)} Class${
                  cls.note ? ` <span style="font-weight:400;color:var(--text-dim);font-size:.85rem">(${esc(cls.note)})</span>` : ""
                }</h3>
                <span class="classblock__term">${esc(cls.term)}</span>
              </span>
              <span class="classblock__count">${hits.length} ${hits.length === 1 ? "brother" : "brothers"}</span>
            </header>
            <div class="classblock__body">
              ${eds.length ? `<div class="educators">${eds.join("")}</div>` : ""}
              <div class="brothers">
                ${hits
                  .map(
                    (b) => `
                  <div class="brother">
                    <span class="brother__num">#${b[0]}</span>
                    <span class="brother__name">${highlight(b[1], q)}
                      <span class="brother__line">&ldquo;${highlight(b[2], q)}&rdquo;</span>
                    </span>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
          </section>`;
      }).join("");

      host.innerHTML =
        html ||
        `<div class="empty"><strong>No brothers found</strong>Try a different name, line name, or line number.</div>`;

      if (countEl) {
        countEl.innerHTML = q || era !== "all"
          ? `Showing <b>${shown}</b> of ${TOTAL_BROTHERS} brothers`
          : `<b>${TOTAL_BROTHERS}</b> brothers initiated since 2008`;
      }

    }

    // Filter chips
    if (chipRow) {
      chipRow.innerHTML = ERAS.map(
        ([val, label]) =>
          `<button class="chip${val === "all" ? " is-active" : ""}" data-era="${val}" type="button">${label}</button>`
      ).join("");
      chipRow.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        era = chip.dataset.era;
        $$(".chip", chipRow).forEach((c) => c.classList.toggle("is-active", c === chip));
        render();
      });
    }

    if (input) {
      input.addEventListener("input", () => {
        query = input.value;
        if (clearBtn) clearBtn.classList.toggle("is-visible", query.length > 0);
        render();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        query = "";
        input.value = "";
        clearBtn.classList.remove("is-visible");
        input.focus();
        render();
      });
    }
    render();
  }

  /* ======================================================================
     CHAPTERS — searchable national directory
     ====================================================================== */
  function initChapters() {
    const activeHost = $("#chapters-active");
    if (!activeHost || typeof ACTIVE_CHAPTERS === "undefined") return;

    const assocHost = $("#chapters-associate");
    const input = $("#chapters-search");
    const clearBtn = $("#chapters-clear");
    const countEl = $("#chapters-count");

    function render() {
      const q = input ? input.value.trim() : "";
      const nq = norm(q);

      const active = ACTIVE_CHAPTERS.filter(
        ([greek, school]) => !nq || norm(greek).includes(nq) || norm(school).includes(nq)
      );
      const assoc = ASSOCIATE_CHAPTERS.filter((school) => !nq || norm(school).includes(nq));

      activeHost.innerHTML = active.length
        ? active
            .map(
              ([greek, school]) => `
          <div class="chapter${school.includes("Connecticut") ? " is-home" : ""}">
            <span class="chapter__greek">${highlight(greek, q)}</span>
            <span class="chapter__school">${highlight(school, q)}${
                school.includes("Connecticut") ? '<span class="chapter__badge">Our Chapter</span>' : ""
              }</span>
          </div>`
            )
            .join("")
        : `<div class="empty" style="grid-column:1/-1"><strong>No chapters found</strong>Try a school name or Greek letter.</div>`;

      if (assocHost) {
        assocHost.innerHTML = assoc.length
          ? assoc
              .map(
                (school) => `
          <div class="chapter">
            <span class="chapter__greek">&mdash;</span>
            <span class="chapter__school">${highlight(school, q)}</span>
          </div>`
              )
              .join("")
          : "";
        const assocSection = $("#associate-section");
        if (assocSection) assocSection.style.display = assoc.length ? "" : "none";
      }

      if (countEl) {
        countEl.innerHTML = q
          ? `Showing <b>${active.length + assoc.length}</b> of ${ACTIVE_CHAPTERS.length + ASSOCIATE_CHAPTERS.length} chapters`
          : `<b>${ACTIVE_CHAPTERS.length}</b> active chapters &middot; <b>${ASSOCIATE_CHAPTERS.length}</b> associate chapters`;
      }
    }

    if (input) {
      input.addEventListener("input", () => {
        if (clearBtn) clearBtn.classList.toggle("is-visible", input.value.length > 0);
        render();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.classList.remove("is-visible");
        input.focus();
        render();
      });
    }

    render();
  }

  /* ======================================================================
     BOARD — exec board, committees, active house
     ====================================================================== */
  function initBoard() {
    const execHost = $("#exec-board");
    if (!execHost || typeof EXEC_BOARD === "undefined") return;

    execHost.innerHTML = EXEC_BOARD.map(
      (m, i) => `
      <div class="exec__card reveal" data-delay="${i % 4}">
        <div class="exec__role">${esc(m.role)}</div>
        <div class="exec__name">${esc(m.name)}</div>
        <div class="exec__line">&ldquo;${esc(m.line)}&rdquo;</div>
      </div>`
    ).join("");

    const commHost = $("#committees");
    if (commHost) {
      commHost.innerHTML = COMMITTEES.map(
        (c) => `
        <div class="committee reveal">
          <h3>${esc(c.name)}</h3>
          <ul>
            ${c.members
              .map(([name, line]) => `<li>${esc(name)}<span>&ldquo;${esc(line)}&rdquo;</span></li>`)
              .join("")}
          </ul>
        </div>`
      ).join("");
    }

    const houseHost = $("#active-house");
    if (houseHost) {
      const byNum = new Map(ALL_BROTHERS.map((b) => [b.num, b]));
      const house = ACTIVE_HOUSE.map((n) => byNum.get(n)).filter(Boolean);
      houseHost.innerHTML = house
        .map(
          (b) => `
        <div class="brother">
          <span class="brother__num">#${b.num}</span>
          <span class="brother__name">${esc(b.name)}
            <span class="brother__line">&ldquo;${esc(b.line)}&rdquo;</span>
          </span>
        </div>`
        )
        .join("");
      const c = $("#house-count");
      if (c) c.innerHTML = `<b>${house.length}</b> active brothers on campus`;
    }
  }

  /* ======================================================================
     PAST PRESIDENTS TIMELINE
     ====================================================================== */
  function initPresidents() {
    const host = $("#presidents");
    if (!host || typeof PAST_PRESIDENTS === "undefined") return;
    host.innerHTML = PAST_PRESIDENTS.slice()
      .reverse()
      .map(
        (p) => `
      <div class="tl-item">
        <div class="tl-item__term">${esc(p.term)}</div>
        <div class="tl-item__name">${esc(p.name)} <span style="font-weight:400;font-style:italic;color:var(--red-300)">&ldquo;${esc(p.line)}&rdquo;</span></div>
        <div class="tl-item__class">${esc(p.class)}</div>
      </div>`
      )
      .join("");
  }

  /* ======================================================================
     FOUNDING FATHERS
     ====================================================================== */
  function initFounders() {
    const host = $("#founders");
    if (!host || typeof FOUNDING_FATHERS === "undefined") return;
    host.innerHTML = FOUNDING_FATHERS.map(
      (n) => `<li>${esc(n)}</li>`
    ).join("");
  }

  /* ======================================================================
     PILLARS
     ====================================================================== */
  function initPillars() {
    const host = $("#pillars");
    if (!host || typeof PILLARS === "undefined") return;
    host.innerHTML = PILLARS.map(
      (p, i) => `
      <div class="card reveal" data-delay="${i % 4}">
        <span class="card__iconwrap">${icon(p.icon)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.body)}</p>
      </div>`
    ).join("");
  }

  /* ======================================================================
     BOOT
     ====================================================================== */
  function boot() {
    buildNav();
    buildFooter();
    initPillars();
    initRoster();
    initChapters();
    initBoard();
    initPresidents();
    initFounders();
    initAccordion();
    initToTop();
    // Reveal + counters run last so dynamically inserted nodes are included.
    initReveal();
    initCounters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
