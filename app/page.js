'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const MARKUP = `
<a href="#main" class="skip-link">Skip to content</a>

<!-- PAGE LOADER -->
<div id="loader" role="status" aria-live="polite">
  <div class="loader-center">
    <div class="loader-brand"><span class="icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg>
    </span>Philosophical</div>
    <p class="loader-tag">Philosophy begins in wonder.</p>
  </div>
  <div class="loader-progress">
    <div class="loader-track"><div class="loader-fill" id="loader-fill"></div></div>
    <div class="loader-meta"><span>Loading</span><span class="loader-count" id="loader-count">000</span></div>
  </div>
</div>

<!-- HEADER -->
<header id="site-header" class="js-reveal gate-ready" style="transition-delay:150ms">
  <div class="shell header-inner">
    <div class="brand-group">
      <button class="brand-btn hover-spot" data-scroll="home"><span class="hover-scale"><span class="icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg>
      </span>Philosophical</span></button>
      <a href="https://asrarul.com" target="_blank" rel="noopener noreferrer" class="brand-credit">by Asrar ul Haq</a>
    </div>

    <nav class="primary-nav" aria-label="Primary">
      <ul>
        <li><button class="hover-spot" data-scroll="home" aria-current="page"><span class="hover-lift">Home</span></button></li>
        <li><button class="hover-spot" data-scroll="works"><span class="hover-lift">Essays</span></button></li>
        <li><button class="hover-spot" data-scroll="services"><span class="hover-lift">Subjects<span class="caret">▾</span></span></button></li>
        <li><button class="hover-spot" data-scroll="about"><span class="hover-lift">About</span></button></li>
        <li><button class="hover-spot" data-scroll="careers"><span class="hover-lift">Archive</span></button></li>
        <li><button class="hover-spot" data-open-modal><span class="hover-lift">Contact</span></button></li>
      </ul>
    </nav>

    <div class="header-right">
      <button class="theme-toggle" data-theme-toggle aria-label="Switch to dark mode">
        <span class="icon icon-sun" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></span>
        <span class="icon icon-moon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg></span>
      </button>
      <button class="menu-btn hover-spot" data-open-menu>
        <span class="pill-inner hover-scale"><span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </span><span class="label-menu">Menu</span></span>
      </button>
    </div>
  </div>
</header>

<main id="main">

  <!-- HERO -->
  <section id="home">
    <div class="liquid-reveal" id="liquid-reveal">
      <img class="liquid-base" id="liquid-base-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg" alt="Jacques-Louis David, The Death of Socrates" />
      <canvas class="liquid-canvas" id="liquid-canvas" aria-hidden="true"></canvas>
    </div>
    <div class="hero-vignette"></div>

    <h1 class="sr-only">Philosophical — a journal of philosophical ideas</h1>

    <div class="shell hero-grid">
      <div class="hero-minimal">
        <div class="quote-stage js-reveal gate-ready" style="--ty:14px;transition-delay:200ms" aria-hidden="true">
          <div class="quote-cycle" id="quote-cycle">
            <blockquote class="quote-live"><span id="quote-text"></span><span class="quote-cursor"></span></blockquote>
            <cite class="quote-live-author" id="quote-author"></cite>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="shell about-center">
      <p class="about-tagline js-reveal">A distributed circle of writers thinking across every time zone.</p>
      <h2 class="about-h2 js-reveal-words">
        <span class="word-mask"><span class="word-inner" style="transition-delay:0ms">We</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:35ms">publish</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:70ms">clear,</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:105ms">rigorous</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:140ms">essays</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:175ms">on</span></span> <span class="grey"><span class="word-mask"><span class="word-inner" style="transition-delay:210ms">ethics,</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:245ms">logic,</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:280ms">and</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:315ms">the</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:350ms">ideas</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:385ms">that</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:420ms">shape</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:455ms">how</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:490ms">we</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:525ms">think</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:560ms">and</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:595ms">live.</span></span></span>
      </h2>
      <div class="about-footer-row js-reveal" style="transition-delay:200ms">
        <div class="find-us">
          <div class="find-label">Find us online</div>
          <div class="social-row">
            <a href="#twitter" class="social-chip accent hover-spot" aria-label="X / Twitter"><span class="hover-scale-sm icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l16 16M20 4 4 20"/></svg></span></a>
            <a href="#substack" class="social-chip light hover-spot" aria-label="Substack"><span class="hover-scale-sm icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/></svg></span></a>
            <a href="#medium" class="social-chip light hover-spot" aria-label="Medium"><span class="hover-scale-sm icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/></svg></span></a>
          </div>
        </div>
        <span class="pill-btn hover-spot" role="link" tabindex="0" data-scroll="about">
          <span class="pill-inner with-arrow outline hover-scale">About the Journal<span class="pill-badge"><span class="icon pill-arrow-r" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span></span>
        </span>
      </div>
    </div>
  </section>

  <!-- QUOTE BAND -->
  <section class="quote-section">
    <div class="shell quote-band">
      <div class="flourish js-reveal" aria-hidden="true"><span></span><i></i><span></span></div>
      <blockquote class="pull-quote js-reveal-words">
        <span class="word-mask"><span class="word-inner" style="transition-delay:0ms">The</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:35ms">unexamined</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:70ms">life</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:105ms">is</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:140ms">not</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:175ms">worth</span></span> <span class="word-mask"><span class="word-inner" style="transition-delay:210ms">living.</span></span>
      </blockquote>
      <cite class="pull-cite js-reveal" style="transition-delay:250ms">— Socrates, as recorded by Plato</cite>
      <div class="flourish js-reveal" style="transition-delay:100ms" aria-hidden="true"><span></span><i></i><span></span></div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section id="works">
    <div class="shell works-shell">
      <div class="works-head">
        <div class="eyebrow boxed js-reveal">Essays</div>
        <h2 class="works-h2 js-reveal-lines" style="margin:0 auto">
          <span class="line-mask"><span class="line-inner" style="transition-delay:120ms">Featured Essays</span></span>
        </h2>
        <div class="flourish js-reveal" style="transition-delay:180ms" aria-hidden="true"><span></span><i></i><span></span></div>
      </div>

      <ul class="work-cards">
        <li class="work-li js-reveal" style="transition-delay:0ms">
          <a href="#essay-virtue" class="work-card card-lift">
            <div class="work-meta"><span>Ethics — 2025</span><span class="work-badge badge-rot"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span></div>
            <div class="work-emblem" aria-hidden="true">O</div>
            <div class="work-bottom">
              <h3>On Virtue</h3>
              <p>A close reading of Aristotle's account of character and the mean between extremes.</p>
              <div class="work-tags"><span class="tag-chip">Ethics</span><span class="tag-chip">Aristotle</span><span class="tag-chip">Virtue</span></div>
            </div>
          </a>
        </li>
        <li class="work-li js-reveal" style="transition-delay:90ms">
          <a href="#essay-time" class="work-card card-lift">
            <div class="work-meta"><span>Metaphysics — 2024</span><span class="work-badge badge-rot"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span></div>
            <div class="work-emblem" aria-hidden="true">T</div>
            <div class="work-bottom">
              <h3>The Nature of Time</h3>
              <p>Examining how change, memory, and moment shape our sense of what is real.</p>
              <div class="work-tags"><span class="tag-chip">Metaphysics</span><span class="tag-chip">Time</span><span class="tag-chip">Being</span></div>
            </div>
          </a>
        </li>
        <li class="work-li js-reveal" style="transition-delay:180ms">
          <a href="#essay-logic" class="work-card card-lift">
            <div class="work-meta"><span>Logic — 2023</span><span class="work-badge badge-rot"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span></div>
            <div class="work-emblem" aria-hidden="true">F</div>
            <div class="work-bottom">
              <h3>First Principles</h3>
              <p>A guide to reasoning from premises to conclusions without losing the thread.</p>
              <div class="work-tags"><span class="tag-chip">Logic</span><span class="tag-chip">Method</span></div>
            </div>
          </a>
        </li>
        <li class="work-li js-reveal" style="transition-delay:270ms">
          <a href="#essay-good-life" class="work-card card-lift">
            <div class="work-meta"><span>Ethics — 2023</span><span class="work-badge badge-rot"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span></div>
            <div class="work-emblem" aria-hidden="true">T</div>
            <div class="work-bottom">
              <h3>The Good Life</h3>
              <p>What eudaimonia meant to the ancients, and what it might mean now.</p>
              <div class="work-tags"><span class="tag-chip">Eudaimonia</span><span class="tag-chip">Ethics</span><span class="tag-chip">Practice</span></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services">
    <div class="shell services-shell">
      <div class="eyebrow boxed js-reveal">Subjects</div>
      <h2 class="services-h2 js-reveal-lines">
        <span class="line-mask"><span class="line-inner" style="transition-delay:120ms">What we write about</span></span>
      </h2>
      <ul>
        <li class="service-li js-reveal" style="transition-delay:0ms">
          <a href="#ethics" class="row-fill service-row">
            <span class="service-idx">I</span>
            <h3 class="service-title"><span>Ethics &amp; Virtue</span><b class="leader" aria-hidden="true"></b></h3>
            <p class="service-desc">How character is formed, and what it means to live well.</p>
            <span class="service-badge row-arrow"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span>
          </a>
        </li>
        <li class="service-li js-reveal" style="transition-delay:80ms">
          <a href="#logic" class="row-fill service-row">
            <span class="service-idx">II</span>
            <h3 class="service-title"><span>Logic &amp; Method</span><b class="leader" aria-hidden="true"></b></h3>
            <p class="service-desc">Clear reasoning, sound arguments, careful distinctions.</p>
            <span class="service-badge row-arrow"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span>
          </a>
        </li>
        <li class="service-li js-reveal" style="transition-delay:160ms">
          <a href="#metaphysics" class="row-fill service-row">
            <span class="service-idx">III</span>
            <h3 class="service-title"><span>Metaphysics</span><b class="leader" aria-hidden="true"></b></h3>
            <p class="service-desc">Questions about being, causation, and what is real.</p>
            <span class="service-badge row-arrow"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span>
          </a>
        </li>
        <li class="service-li js-reveal" style="transition-delay:240ms">
          <a href="#politics" class="row-fill service-row">
            <span class="service-idx">IV</span>
            <h3 class="service-title"><span>Political Thought</span><b class="leader" aria-hidden="true"></b></h3>
            <p class="service-desc">The individual, the polis, and the good in common.</p>
            <span class="service-badge row-arrow"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- STATS -->
  <section>
    <div class="shell stats-shell">
      <div class="stats-panel js-reveal">
        <div class="eyebrow light">By the numbers</div>
        <h2 class="stats-h2 js-reveal-lines">
          <span class="line-mask"><span class="line-inner" style="transition-delay:120ms">Read closely, cited carefully.</span></span>
        </h2>
        <ul class="stats-grid">
          <li class="stat-li js-reveal" style="transition-delay:0ms"><div class="stat-num"><span class="stat-value" data-target="320">0</span>+</div><div class="stat-label">Essays published</div></li>
          <li class="stat-li js-reveal" style="transition-delay:90ms"><div class="stat-num"><span class="stat-value" data-target="92">0</span>%</div><div class="stat-label">Reader return rate</div></li>
          <li class="stat-li js-reveal" style="transition-delay:180ms"><div class="stat-num"><span class="stat-value" data-target="12">0</span></div><div class="stat-label">Years in print</div></li>
          <li class="stat-li js-reveal" style="transition-delay:270ms"><div class="stat-num"><span class="stat-value" data-target="18">0</span></div><div class="stat-label">Contributing writers</div></li>
        </ul>
      </div>
    </div>
  </section>

</main>

<!-- FOOTER -->
<footer>
  <div class="shell footer-inner">
    <div class="footer-cta">
      <h2 class="footer-h2 js-reveal-lines">
        <span class="line-mask"><span class="line-inner" style="transition-delay:0ms">Have a question worth asking?</span></span>
        <span class="line-mask"><span class="line-inner" style="transition-delay:100ms">Let's think it through.</span></span>
      </h2>
      <span class="pill-btn hover-spot" data-open-modal role="button" tabindex="0">
        <span class="pill-inner with-arrow light hover-scale">Join the Discussion<span class="pill-badge"><span class="icon pill-arrow-ur" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span></span>
      </span>
    </div>

    <div class="footer-cols">
      <div class="foot-col">
        <div class="foot-brand"><span class="icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg></span>Philosophical</div>
        <p class="foot-tagline">An independent journal exploring the ideas that shape how we think, live, and act.</p>
      </div>
      <div class="foot-col">
        <div class="foot-col-title">Journal</div>
        <ul>
          <li><a href="#about" class="animated-link"><span class="al-inner">About</span></a></li>
          <li><a href="#careers" class="animated-link"><span class="al-inner">Archive</span></a></li>
          <li><a href="#partners" class="animated-link"><span class="al-inner">Contributors</span></a></li>
          <li><a href="#contact" class="animated-link" data-open-modal><span class="al-inner">Contact</span></a></li>
        </ul>
      </div>
      <div class="foot-col">
        <div class="foot-col-title">Subjects</div>
        <ul>
          <li><a href="#ethics" class="animated-link"><span class="al-inner">Ethics</span></a></li>
          <li><a href="#logic" class="animated-link"><span class="al-inner">Logic</span></a></li>
          <li><a href="#metaphysics" class="animated-link"><span class="al-inner">Metaphysics</span></a></li>
          <li><a href="#politics" class="animated-link"><span class="al-inner">Political Thought</span></a></li>
        </ul>
      </div>
      <div class="foot-col">
        <div class="foot-col-title">Social</div>
        <ul>
          <li><a href="#twitter" class="animated-link"><span class="al-inner">X / Twitter</span></a></li>
          <li><a href="#substack" class="animated-link"><span class="al-inner">Substack</span></a></li>
          <li><a href="#medium" class="animated-link"><span class="al-inner">Medium</span></a></li>
          <li><a href="#linkedin" class="animated-link"><span class="al-inner">LinkedIn</span></a></li>
        </ul>
      </div>
    </div>

    <div class="legal-bar">
      <span>© 2025 Philosophical by <a href="https://asrarul.com" target="_blank" rel="noopener noreferrer" class="animated-link legal"><span class="al-inner">Asrar ul Haq</span></a>. All rights reserved.</span>
      <div class="legal-links">
        <a href="#privacy" class="animated-link legal"><span class="al-inner">Privacy</span></a>
        <a href="#terms" class="animated-link legal"><span class="al-inner">Terms</span></a>
      </div>
    </div>
  </div>
</footer>

<!-- NAV MENU OVERLAY -->
<div id="nav-menu" role="dialog" aria-modal="true" aria-label="Site navigation">
  <div class="nm-emblem" aria-hidden="true"><svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg></div>
  <div class="shell nm-top">
    <div class="nm-brand"><span class="icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg></span>Philosophical</div>
    <button class="nm-close" data-close-menu><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l16 16M20 4 4 20"/></svg></span>Close</button>
  </div>
  <nav class="nm-nav shell" aria-label="Overlay navigation">
    <ul>
      <li><button class="nm-item" data-scroll="home" style="transition-delay:80ms"><span class="idx">I</span><span class="nm-item-text"><span class="label">Home</span><span class="desc">Return to the beginning</span></span></button></li>
      <li><button class="nm-item" data-scroll="works" style="transition-delay:125ms"><span class="idx">II</span><span class="nm-item-text"><span class="label">Essays</span><span class="desc">Featured writing on ethics &amp; logic</span></span></button></li>
      <li><button class="nm-item" data-scroll="services" style="transition-delay:170ms"><span class="idx">III</span><span class="nm-item-text"><span class="label">Subjects</span><span class="desc">Browse by philosophical theme</span></span></button></li>
      <li><button class="nm-item" data-scroll="about" style="transition-delay:215ms"><span class="idx">IV</span><span class="nm-item-text"><span class="label">About</span><span class="desc">The circle behind the journal</span></span></button></li>
      <li><button class="nm-item" data-scroll="careers" style="transition-delay:260ms"><span class="idx">V</span><span class="nm-item-text"><span class="label">Archive</span><span class="desc">Past essays &amp; contributors</span></span></button></li>
      <li><button class="nm-item" data-open-modal-from-menu style="transition-delay:305ms"><span class="idx">VI</span><span class="nm-item-text"><span class="label">Contact</span><span class="desc">Start a conversation</span></span></button></li>
    </ul>
  </nav>
  <div class="shell nm-bottom">
    <button class="nm-start" data-open-modal-from-menu>Join the Discussion →</button>
  </div>
</div>

<!-- REQUEST MODAL -->
<div id="request-modal" role="dialog" aria-modal="true" aria-label="Join the discussion">
  <div class="modal-panel">
    <button class="modal-close" data-close-modal aria-label="Close"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l16 16M20 4 4 20"/></svg></span></button>

    <div id="modal-form-wrap">
      <div class="modal-head">
        <span class="modal-eyebrow"><span class="dot"></span>Join the discussion</span>
        <h2>Tell us what you're thinking about.</h2>
      </div>
      <form id="request-form">
        <div class="field">
          <label for="rf-name">Name</label>
          <input id="rf-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div class="field">
          <label for="rf-email">Email</label>
          <input id="rf-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div class="field">
          <label for="rf-project">Idea</label>
          <textarea id="rf-project" name="project" rows="4" placeholder="A question, argument, or topic you'd like us to explore." required></textarea>
        </div>
        <p class="form-error" id="rf-error" hidden></p>
        <div class="form-bottom">
          <span class="form-note">We reply within one business day.</span>
          <span class="pill-btn hover-spot">
            <button type="submit" class="pill-inner with-arrow dark hover-scale" id="rf-submit" style="border:none">
              <span id="rf-submit-label">Send</span><span class="pill-badge"><span class="icon pill-arrow-ur" aria-hidden="true"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></span>
            </button>
          </span>
        </div>
      </form>
    </div>

    <div class="modal-success" id="modal-success">
      <div class="success-badge"><span class="icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" fill-rule="evenodd"><path d="M10 3C6 6 4 10 4 16 C4 30 12 45 24 45 C36 45 44 30 44 16 C44 10 42 6 38 3 C35 9 30 14 24 14 C18 14 15 9 10 3 Z M10.5 28A6 6 0 1 0 22.5 28A6 6 0 1 0 10.5 28Z M25.5 28A6 6 0 1 0 37.5 28A6 6 0 1 0 25.5 28Z M24 33 L27.5 39 L20.5 39 Z"/></svg></span></div>
      <h2>Message received</h2>
      <p>Thanks for reaching out — we'll get back to you within one business day.</p>
      <span class="pill-btn hover-spot">
        <button type="button" class="pill-inner no-arrow dark hover-scale" id="modal-success-close">Close</button>
      </span>
    </div>
  </div>
</div>
`;

export default function Page() {
  useEffect(() => {
    const cleanupFns = [];

    /* ================= Theme toggle ================= */
    let onThemeChange = null;
    const themeToggleEl = document.querySelector('[data-theme-toggle]');
    function currentTheme() {
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }
    function setThemeLabel() {
      if (!themeToggleEl) return;
      const isDark = currentTheme() === 'dark';
      themeToggleEl.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try { localStorage.setItem('theme', theme); } catch (e) { /* noop */ }
      setThemeLabel();
      if (onThemeChange) onThemeChange(theme);
    }
    function toggleTheme() {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    }
    setThemeLabel();
    themeToggleEl?.addEventListener('click', toggleTheme);
    cleanupFns.push(() => themeToggleEl?.removeEventListener('click', toggleTheme));

    /* ================= Adaptive grid ================= */
    function applyAdaptiveGrid() {
      const FONT_BASE = 16, baseWidth = 1920, coef = 0.6666;
      const w = window.innerWidth;
      const widthReduction = ((baseWidth - w) / baseWidth) * 100;
      const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100;
      if (size > FONT_BASE) document.documentElement.style.fontSize = size + 'px';
      else document.documentElement.style.removeProperty('font-size');
    }
    applyAdaptiveGrid();
    window.addEventListener('resize', applyAdaptiveGrid);
    cleanupFns.push(() => window.removeEventListener('resize', applyAdaptiveGrid));

    /* ================= Lenis + scroll lock ================= */
    window.scrollTo(0, 0);
    const lenis = new Lenis({ smoothWheel: true });
    let lenisRafId = requestAnimationFrame(raf);
    function raf(t) {
      lenis.raf(t);
      lenisRafId = requestAnimationFrame(raf);
    }
    cleanupFns.push(() => cancelAnimationFrame(lenisRafId));
    cleanupFns.push(() => lenis.destroy());

    /* ================= Fixed header scroll state ================= */
    const siteHeaderEl = document.getElementById('site-header');
    function onHeaderScroll() {
      if (window.scrollY > 40) siteHeaderEl.classList.add('scrolled');
      else siteHeaderEl.classList.remove('scrolled');
    }
    onHeaderScroll();
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    cleanupFns.push(() => window.removeEventListener('scroll', onHeaderScroll));
    lenis.on('scroll', onHeaderScroll);

    let lockCount = 0;
    function stopScroll() {
      lockCount++;
      lenis.stop();
      document.documentElement.style.position = 'relative';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    }
    function startScroll() {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount > 0) return;
      lenis.start();
      document.documentElement.style.removeProperty('position');
      document.documentElement.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('height');
    }

    function scrollToId(id) {
      const el = document.getElementById(id);
      if (!el) return;
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);
    }
    document.querySelectorAll('[data-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-scroll');
        closeMenu();
        scrollToId(id);
      });
    });

    /* ================= Page loader ================= */
    const loaderEl = document.getElementById('loader');
    const loaderFill = document.getElementById('loader-fill');
    const loaderCount = document.getElementById('loader-count');
    let ready = false;

    stopScroll();

    const FILL_MS = 1300;
    function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    const startTime = performance.now();
    let loaderRafId = requestAnimationFrame(loaderTick);
    function loaderTick(now) {
      const t = Math.min(1, (now - startTime) / FILL_MS);
      const progress = Math.round(easeInOutCubic(t) * 100);
      loaderFill.style.width = progress + '%';
      loaderCount.textContent = String(progress).padStart(3, '0');
      if (t < 1) {
        loaderRafId = requestAnimationFrame(loaderTick);
      } else {
        finishLoader();
      }
    }
    cleanupFns.push(() => cancelAnimationFrame(loaderRafId));

    function finishLoader() {
      loaderEl.classList.add('leaving');
      const onEnd = () => {
        loaderEl.removeEventListener('transitionend', onEnd);
        loaderEl.remove();
        ready = true;
        startScroll();
        document.dispatchEvent(new CustomEvent('app:ready'));
      };
      loaderEl.addEventListener('transitionend', onEnd);
      setTimeout(onEnd, 800);
    }

    /* ================= Reveal system ================= */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cleanupFns.push(() => io.disconnect());

    document.querySelectorAll('.js-reveal:not(.gate-ready), .js-reveal-lines:not(.gate-ready), .js-reveal-words:not(.gate-ready)').forEach((el) => io.observe(el));

    function revealGated() {
      document.querySelectorAll('.gate-ready').forEach((el) => io.observe(el));
    }
    if (ready) revealGated();
    document.addEventListener('app:ready', revealGated);
    cleanupFns.push(() => document.removeEventListener('app:ready', revealGated));

    /* ================= Hero quote typewriter ================= */
    const QUOTES = [
      { text: 'The unexamined life is not worth living.', author: 'Socrates' },
      { text: 'Man is by nature a political animal.', author: 'Aristotle' },
      { text: 'I think, therefore I am.', author: 'René Descartes' },
      { text: 'One cannot step twice in the same river.', author: 'Heraclitus' },
      { text: 'He who has a why to live can bear almost any how.', author: 'Friedrich Nietzsche' },
      { text: 'You have power over your mind — not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
      { text: 'Man is condemned to be free.', author: 'Jean-Paul Sartre' },
      { text: 'Whereof one cannot speak, thereof one must be silent.', author: 'Ludwig Wittgenstein' },
      { text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.', author: 'Immanuel Kant' },
      { text: 'The philosophers have only interpreted the world in various ways; the point is to change it.', author: 'Karl Marx' },
      { text: 'One is not born, but rather becomes, a woman.', author: 'Simone de Beauvoir' },
      { text: 'Reason is, and ought only to be, the slave of the passions.', author: 'David Hume' },
      { text: 'The heart has its reasons which reason knows nothing of.', author: 'Blaise Pascal' },
      { text: 'The life of man, solitary, poor, nasty, brutish, and short.', author: 'Thomas Hobbes' },
      { text: 'Better to be Socrates dissatisfied than a fool satisfied.', author: 'John Stuart Mill' },
      { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
      { text: 'Men are disturbed not by things, but by the opinions they hold about them.', author: 'Epictetus' },
      { text: 'Attention is the rarest and purest form of generosity.', author: 'Simone Weil' },
      { text: 'Where there is power, there is resistance.', author: 'Michel Foucault' },
      { text: 'All things excellent are as difficult as they are rare.', author: 'Baruch Spinoza' },
      { text: 'I quote others only to better express myself.', author: 'Michel de Montaigne' },
      { text: 'We suffer more often in imagination than in reality.', author: 'Seneca' },
    ];
    const quoteCycleEl = document.getElementById('quote-cycle');
    const quoteTextEl = document.getElementById('quote-text');
    const quoteAuthorEl = document.getElementById('quote-author');
    const reduceMotionQuotes = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (quoteCycleEl && quoteTextEl && quoteAuthorEl) {
      if (reduceMotionQuotes) {
        quoteTextEl.textContent = QUOTES[0].text;
        quoteAuthorEl.textContent = `— ${QUOTES[0].author}`;
        quoteAuthorEl.classList.add('show');
      } else {
        let qIndex = 0;
        let charIndex = 0;
        let charSpans = [];
        let quoteTimerId = null;

        function buildChars(text) {
          quoteTextEl.innerHTML = '';
          const frag = document.createDocumentFragment();
          const spans = [];
          const words = text.split(' ');
          words.forEach((word, wi) => {
            const wordWrap = document.createElement('span');
            wordWrap.className = 'qword';
            for (const ch of word) {
              const s = document.createElement('span');
              s.className = 'qch';
              s.textContent = ch;
              wordWrap.appendChild(s);
              spans.push(s);
            }
            frag.appendChild(wordWrap);
            if (wi < words.length - 1) {
              const spaceSpan = document.createElement('span');
              spaceSpan.className = 'qch';
              spaceSpan.textContent = ' ';
              frag.appendChild(spaceSpan);
              spans.push(spaceSpan);
            }
          });
          quoteTextEl.appendChild(frag);
          return spans;
        }

        function typeNext() {
          if (charIndex < charSpans.length) {
            const ch = charSpans[charIndex].textContent;
            charSpans[charIndex].classList.add('in');
            charIndex++;
            let delay = 40 + Math.random() * 30;
            if (ch === ' ') delay += 55;
            if (ch === ',' || ch === ';' || ch === '—') delay += 130;
            if (ch === '.') delay += 220;
            quoteTimerId = setTimeout(typeNext, delay);
            return;
          }
          const current = QUOTES[qIndex];
          quoteAuthorEl.textContent = `— ${current.author}`;
          requestAnimationFrame(() => quoteAuthorEl.classList.add('show'));
          const holdMs = Math.min(4400, Math.max(2200, current.text.length * 48));
          quoteTimerId = setTimeout(advanceQuote, holdMs);
        }

        function startQuote(index) {
          qIndex = index;
          charIndex = 0;
          quoteAuthorEl.classList.remove('show');
          charSpans = buildChars(QUOTES[qIndex].text);
          quoteTimerId = setTimeout(typeNext, 140);
        }

        function advanceQuote() {
          quoteCycleEl.classList.add('fade-out');
          quoteTimerId = setTimeout(() => {
            quoteCycleEl.classList.remove('fade-out');
            startQuote((qIndex + 1) % QUOTES.length);
          }, 550);
        }

        function startQuoteCycle() {
          if (quoteTimerId) return;
          quoteTimerId = setTimeout(() => startQuote(0), 500);
        }
        if (ready) startQuoteCycle();
        document.addEventListener('app:ready', startQuoteCycle);
        cleanupFns.push(() => document.removeEventListener('app:ready', startQuoteCycle));
        cleanupFns.push(() => clearTimeout(quoteTimerId));
      }
    }

    /* ================= Stats count-up ================= */
    const statEls = Array.from(document.querySelectorAll('.stat-value'));
    let statsThrottle = 0;
    function updateStats() {
      const now = performance.now();
      if (now - statsThrottle < 30) return;
      statsThrottle = now;
      const vh = window.innerHeight;
      statEls.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const rect = el.getBoundingClientRect();
        const start = vh;
        const end = vh / 2;
        const top = rect.top + rect.height / 2;
        let progress = (start - top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        el.textContent = String(Math.round(progress * target));
      });
    }
    window.addEventListener('scroll', updateStats, { passive: true });
    cleanupFns.push(() => window.removeEventListener('scroll', updateStats));
    lenis.on('scroll', updateStats);
    updateStats();

    /* ================= Nav menu overlay ================= */
    const navMenu = document.getElementById('nav-menu');
    function openMenu() {
      navMenu.classList.add('open');
      stopScroll();
      document.addEventListener('keydown', onMenuKeydown);
    }
    function closeMenu() {
      if (!navMenu.classList.contains('open')) return;
      navMenu.classList.remove('open');
      startScroll();
      document.removeEventListener('keydown', onMenuKeydown);
    }
    function onMenuKeydown(e) { if (e.key === 'Escape') closeMenu(); }
    document.querySelectorAll('[data-open-menu]').forEach((btn) => btn.addEventListener('click', openMenu));
    document.querySelectorAll('[data-close-menu]').forEach((btn) => btn.addEventListener('click', closeMenu));
    document.querySelectorAll('[data-open-modal-from-menu]').forEach((btn) => btn.addEventListener('click', () => {
      closeMenu();
      openModal();
    }));
    cleanupFns.push(() => document.removeEventListener('keydown', onMenuKeydown));

    /* ================= Request modal ================= */
    const modal = document.getElementById('request-modal');
    const modalSuccess = document.getElementById('modal-success');
    const requestForm = document.getElementById('request-form');
    const rfSubmitLabel = document.getElementById('rf-submit-label');

    function openModal() {
      closeMenu();
      modal.classList.add('open');
      stopScroll();
      document.addEventListener('keydown', onModalKeydown);
    }
    function closeModal() {
      if (!modal.classList.contains('open')) return;
      modal.classList.remove('open');
      startScroll();
      document.removeEventListener('keydown', onModalKeydown);
      setTimeout(() => {
        requestForm.reset();
        requestForm.classList.remove('hide');
        modalSuccess.classList.remove('show');
        rfSubmitLabel.textContent = 'Send';
        document.getElementById('rf-error').hidden = true;
      }, 300);
    }
    function onModalKeydown(e) { if (e.key === 'Escape') closeModal(); }

    document.querySelectorAll('[data-open-modal]').forEach((btn) => btn.addEventListener('click', openModal));
    document.querySelectorAll('[data-close-modal]').forEach((btn) => btn.addEventListener('click', closeModal));
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.querySelector('.modal-panel').addEventListener('click', (e) => e.stopPropagation());
    document.getElementById('modal-success-close').addEventListener('click', closeModal);

    const rfError = document.getElementById('rf-error');
    const rfSubmitBtn = document.getElementById('rf-submit');
    requestForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      rfError.hidden = true;
      rfSubmitBtn.disabled = true;
      rfSubmitLabel.textContent = 'Sending…';
      const data = Object.fromEntries(new FormData(requestForm).entries());
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error || 'Something went wrong. Please try again.');
        }
        requestForm.classList.add('hide');
        modalSuccess.classList.add('show');
      } catch (err) {
        rfError.textContent = err.message || 'Something went wrong. Please try again.';
        rfError.hidden = false;
      } finally {
        rfSubmitBtn.disabled = false;
        rfSubmitLabel.textContent = 'Send';
      }
    });
    cleanupFns.push(() => document.removeEventListener('keydown', onModalKeydown));

    /* ================= Liquid reveal hero effect ================= */
    function initLiquidReveal() {
      const container = document.getElementById('liquid-reveal');
      const canvas = document.getElementById('liquid-canvas');
      const baseImgEl = document.getElementById('liquid-base-img');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return () => {};

      const SOCRATES_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg';
      const ATHENS_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg';
      function imagesForTheme(theme) {
        return theme === 'light'
          ? { base: ATHENS_URL, baseAlt: 'Raphael, The School of Athens', reveal: SOCRATES_URL }
          : { base: SOCRATES_URL, baseAlt: 'Jacques-Louis David, The Death of Socrates', reveal: ATHENS_URL };
      }

      const brushRadius = 143, decay = 0.016;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const ctx = canvas.getContext('2d');
      const coverCanvas = document.createElement('canvas');
      const coverCtx = coverCanvas.getContext('2d');
      const brushCanvas = document.createElement('canvas');
      const brushCtx = brushCanvas.getContext('2d');

      let w = 0, h = 0;
      const radius = brushRadius * dpr;
      const diam = Math.ceil(radius * 2);
      brushCanvas.width = diam; brushCanvas.height = diam;

      const afterImg = new Image();
      afterImg.crossOrigin = 'anonymous';
      let imgReady = false;
      afterImg.onload = () => { imgReady = true; drawCover(); };

      function setImagesForTheme(theme) {
        const pics = imagesForTheme(theme);
        if (baseImgEl) {
          baseImgEl.src = pics.base;
          baseImgEl.alt = pics.baseAlt;
        }
        if (afterImg.src !== pics.reveal) {
          imgReady = false;
          afterImg.src = pics.reveal;
        }
      }
      setImagesForTheme(currentTheme());
      onThemeChange = setImagesForTheme;

      function drawCover() {
        if (!imgReady || w === 0) return;
        coverCtx.clearRect(0, 0, w, h);
        const iw = afterImg.naturalWidth, ih = afterImg.naturalHeight;
        if (!iw || !ih) return;
        const scale = Math.max(w / iw, h / ih);
        const dw = iw * scale, dh = ih * scale;
        const dx = (w - dw) / 2, dy = (h - dh) / 2;
        coverCtx.drawImage(afterImg, dx, dy, dw, dh);
      }

      function resize() {
        const rect = container.getBoundingClientRect();
        w = Math.max(1, Math.round(rect.width * dpr));
        h = Math.max(1, Math.round(rect.height * dpr));
        canvas.width = w; canvas.height = h;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        coverCanvas.width = w; coverCanvas.height = h;
        drawCover();
      }
      const ro = new ResizeObserver(resize);
      ro.observe(container);
      resize();

      let points = [];
      let last = null;
      let idle = 0;
      let drawing = false;

      function onPointerMove(e) {
        const rect = container.getBoundingClientRect();
        const px = (e.clientX - rect.left) * dpr;
        const py = (e.clientY - rect.top) * dpr;
        if (px < -radius || px > w + radius || py < -radius || py > h + radius) {
          last = null;
          return;
        }
        if (last) {
          const dx = px - last.x, dy = py - last.y;
          const dist = Math.hypot(dx, dy);
          const step = Math.max(radius * 0.3, 1);
          const n = Math.min(Math.ceil(dist / step), 60);
          for (let i = 1; i <= n; i++) {
            points.push({ x: last.x + dx * (i / n), y: last.y + dy * (i / n) });
          }
        } else {
          points.push({ x: px, y: py });
        }
        last = { x: px, y: py };
      }
      window.addEventListener('pointermove', onPointerMove, { passive: true });

      function stamp(x, y) {
        brushCtx.clearRect(0, 0, diam, diam);
        brushCtx.globalCompositeOperation = 'source-over';
        const grad = brushCtx.createRadialGradient(radius, radius, 0, radius, radius, radius);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.55, 'rgba(255,255,255,0.82)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        brushCtx.fillStyle = grad;
        brushCtx.fillRect(0, 0, diam, diam);
        brushCtx.globalCompositeOperation = 'source-in';
        brushCtx.drawImage(coverCanvas, x - radius, y - radius, diam, diam, 0, 0, diam, diam);
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(brushCanvas, x - radius, y - radius);
      }

      let liquidRafId = requestAnimationFrame(tick);
      function tick() {
        liquidRafId = requestAnimationFrame(tick);
        if (!imgReady || w === 0) return;
        if (points.length) {
          idle = 0; drawing = true;
        } else {
          drawing = false; idle++;
          if (idle > 120) return;
        }
        const fade = drawing ? decay : Math.min(decay + idle * 0.004, 0.5);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `rgba(0,0,0,${fade})`;
        ctx.fillRect(0, 0, w, h);
        if (drawing) {
          for (const p of points) stamp(p.x, p.y);
          points = [];
        }
        if (idle === 120) ctx.clearRect(0, 0, w, h);
      }

      return () => {
        cancelAnimationFrame(liquidRafId);
        ro.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
      };
    }
    const liquidCleanup = initLiquidReveal();
    cleanupFns.push(liquidCleanup);

    return () => {
      cleanupFns.forEach((fn) => { try { fn(); } catch { /* noop */ } });
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
