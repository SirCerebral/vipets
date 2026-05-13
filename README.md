<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>V.I. Pets — West Michigan's locally owned pet store since 1988</title>
  <meta name="description" content="Family-owned pet store in Holland, Michigan since 1988. Quality dog & cat food, tropical and saltwater fish, reptiles, small animals, plus the Holland puppy nursery. Shop online for in-store pickup or shipping." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

<!-- Demo banner -->
<div class="demo-banner" role="note">
  <span><strong>Concept preview</strong> — this is a working mockup of a redesigned V.I. Pets. Give us domain access and the word, and we'll take it live.</span>
</div>

<!-- Header -->
<header class="site-header">
  <div class="site-header-inner">
    <a class="brand" href="index.html" aria-label="V.I. Pets home">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
          <path d="M12 24c2-3 4-5 8-5s6 2 8 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="15" cy="16" r="1.8" fill="currentColor"/>
          <circle cx="25" cy="16" r="1.8" fill="currentColor"/>
          <circle cx="11" cy="19" r="1.4" fill="currentColor"/>
          <circle cx="29" cy="19" r="1.4" fill="currentColor"/>
        </svg>
      </span>
      <span class="brand-text">
        <span class="brand-name">V.I. Pets</span>
        <span class="brand-sub">Holland · Plainfield · Cutlerville</span>
      </span>
    </a>

    <nav class="nav" aria-label="Primary">
      <a href="shop.html">Shop</a>
      <a href="shop.html#nursery">Puppy Nursery</a>
      <a href="about.html">Our Story</a>
      <a href="index.html#locations">Locations</a>
      <a href="index.html#vip">VIP Card</a>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" type="button" id="theme-toggle" aria-label="Toggle dark mode">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button class="icon-btn" type="button" id="cart-toggle" aria-label="Open cart">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span class="cart-count" id="cart-count" data-empty="true">0</span>
      </button>
    </div>
  </div>
</header>

<main>

<!-- Hero -->
<section class="hero">
  <div class="container-wide hero-grid">
    <div>
      <div class="hero-eyebrow">Locally owned · Since 1988</div>
      <h1>The pet store West Michigan grew up with.</h1>
      <p class="hero-lead">Three family stores. Thirty-seven years of fishkeepers, dog families, reptile fans and the occasional bearded dragon birthday. Shop online for in-store pickup or shipping — or come say hi.</p>
      <div class="hero-actions">
        <a href="shop.html" class="btn btn-primary btn-lg">Shop now</a>
        <a href="shop.html#nursery" class="btn btn-ghost btn-lg">Visit the puppy nursery</a>
      </div>
      <div class="hero-badge" aria-label="Trust signals">
        <div>
          <div class="hero-badge-num">37</div>
          <div class="hero-badge-label">Years in business</div>
        </div>
        <div>
          <div class="hero-badge-num">3</div>
          <div class="hero-badge-label">West MI stores</div>
        </div>
        <div>
          <div class="hero-badge-num">4.3★</div>
          <div class="hero-badge-label">Holland rating</div>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img src="images/hero-storefront.png" alt="A family looking at the tropical fish wall at V.I. Pets Holland" loading="eager" />
    </div>
  </div>
</section>

<!-- Info strip -->
<section class="info-strip">
  <div class="container-wide info-strip-inner">
    <div class="info-item">
      <div class="info-label">In-store pickup</div>
      <div class="info-value">Ready in 2 hours</div>
    </div>
    <div class="info-item">
      <div class="info-label">Ship anywhere</div>
      <div class="info-value">Dry goods · flat $7.99</div>
    </div>
    <div class="info-item">
      <div class="info-label">Free over $75</div>
      <div class="info-value">Lower 48 · dry goods</div>
    </div>
    <div class="info-item">
      <div class="info-label">VIP Card</div>
      <div class="info-value">10% off · free water tests</div>
    </div>
  </div>
</section>

<!-- Shop categories -->
<section class="shop-section">
  <div class="container-wide">
    <div class="section-head">
      <div class="section-eyebrow">Shop by department</div>
      <h2>Everything for the pets you live with.</h2>
    </div>

    <div class="shop-grid">
      <a class="shop-card" href="shop.html#dogs" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.65) 100%), url('images/puppy-nursery.png')">
        <div class="shop-card-content">
          <h3>Dogs</h3>
          <p>Food, treats, toys, the leashes that actually last.</p>
          <span class="shop-card-cta">Shop dogs →</span>
        </div>
      </a>

      <a class="shop-card" href="shop.html#cats" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%), url('images/cat.png')">
        <div class="shop-card-content">
          <h3>Cats</h3>
          <p>Wet, dry, raw and treats from brands we'd feed our own.</p>
          <span class="shop-card-cta">Shop cats →</span>
        </div>
      </a>

      <a class="shop-card" href="shop.html#aquatics" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%), url('images/aquarium.png')">
        <div class="shop-card-content">
          <h3>Aquatics</h3>
          <p>Tropical, saltwater, plants and a free water-test bench.</p>
          <span class="shop-card-cta">Shop aquatics →</span>
        </div>
      </a>

      <a class="shop-card" href="shop.html#reptiles" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%), url('images/reptile.png')">
        <div class="shop-card-content">
          <h3>Reptiles</h3>
          <p>Beardies, leos, ball pythons, and everything they eat.</p>
          <span class="shop-card-cta">Shop reptiles →</span>
        </div>
      </a>

      <a class="shop-card" href="shop.html#small-animals" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%), url('images/small-animal.png')">
        <div class="shop-card-content">
          <h3>Small animals</h3>
          <p>Rabbits, guinea pigs, hamsters — hay, habitats, the lot.</p>
          <span class="shop-card-cta">Shop small animals →</span>
        </div>
      </a>

      <a class="shop-card" href="shop.html#sale" style="background-image:linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(196,94,26,0.55) 60%, rgba(120,55,12,0.85) 100%), url('images/deals.png')">
        <div class="shop-card-content">
          <h3>This week's deals</h3>
          <p>Members-only pricing, BOGO treats, manager's specials.</p>
          <span class="shop-card-cta">See deals →</span>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Locations -->
<section id="locations" class="shop-section" style="background:var(--color-surface-offset)">
  <div class="container-wide">
    <div class="section-head">
      <div class="section-eyebrow">Three stores · One family</div>
      <h2>Find your V.I. Pets.</h2>
    </div>

    <div class="locations-grid">

      <article class="loc-card">
        <div class="loc-card-head">
          <span class="loc-status">Open today · 10–8</span>
          <h3>Holland</h3>
          <p class="loc-meta">11975 E Lakewood Blvd<br/>Holland, MI 49424</p>
        </div>
        <div class="loc-tags">
          <span class="loc-tag">Puppy nursery</span>
          <span class="loc-tag">Grooming next door</span>
          <span class="loc-tag">Fish room</span>
        </div>
        <div class="loc-card-foot">
          <a href="tel:+16163940003" class="btn btn-secondary">Call · 616.394.0003</a>
          <a href="https://maps.google.com/?q=11975+E+Lakewood+Blvd+Holland+MI" class="btn btn-ghost" target="_blank" rel="noopener">Directions</a>
        </div>
      </article>

      <article class="loc-card">
        <div class="loc-card-head">
          <span class="loc-status">Open today · 10–8</span>
          <h3>Plainfield</h3>
          <p class="loc-meta">4191 Plainfield Ave NE<br/>Grand Rapids, MI</p>
        </div>
        <div class="loc-tags">
          <span class="loc-tag">Tropical & saltwater</span>
          <span class="loc-tag">Coral frags</span>
          <span class="loc-tag">Exotic reptiles</span>
        </div>
        <div class="loc-card-foot">
          <a href="tel:+16163011483" class="btn btn-secondary">Call · 616.301.1483</a>
          <a href="https://maps.google.com/?q=4191+Plainfield+Ave+NE+Grand+Rapids+MI" class="btn btn-ghost" target="_blank" rel="noopener">Directions</a>
        </div>
      </article>

      <article class="loc-card">
        <div class="loc-card-head">
          <span class="loc-status">Open today · 10–8</span>
          <h3>Cutlerville</h3>
          <p class="loc-meta">6701 S Division Ave<br/>Grand Rapids, MI 49548</p>
        </div>
        <div class="loc-tags">
          <span class="loc-tag">Big fish room</span>
          <span class="loc-tag">Dog & cat food</span>
          <span class="loc-tag">Small animals</span>
        </div>
        <div class="loc-card-foot">
          <a href="tel:+16162813900" class="btn btn-secondary">Call · 616.281.3900</a>
          <a href="https://maps.google.com/?q=6701+S+Division+Ave+Grand+Rapids+MI" class="btn btn-ghost" target="_blank" rel="noopener">Directions</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- Puppy Nursery teaser -->
<section class="nursery-section">
  <div class="container-wide">
    <div class="section-head">
      <div class="section-eyebrow">Holland location</div>
      <h2>The Puppy Nursery.</h2>
      <p class="text-muted" style="max-width:60ch">Hand-picked from small, vetted breeders. Every puppy comes home with a starter pack, our 14-day health guarantee, and lifetime advice from our team.</p>
    </div>

    <div class="nursery-grid">
      <article class="nursery-card">
        <div class="nursery-card-image"><img src="images/puppy-nursery.png" alt="Cavapoo puppy" loading="lazy" /></div>
        <div class="nursery-card-body">
          <h3>Cavapoo</h3>
          <p class="text-muted">Female · 9 weeks · vet-checked, dewormed, first shots.</p>
          <div class="product-foot">
            <span class="product-price">$1,895</span>
            <a class="btn btn-primary" href="shop.html#nursery">Reserve →</a>
          </div>
        </div>
      </article>

      <article class="nursery-card">
        <div class="nursery-card-image"><img src="images/puppy-goldendoodle.png" alt="Mini Goldendoodle puppy" loading="lazy" /></div>
        <div class="nursery-card-body">
          <h3>Mini Goldendoodle</h3>
          <p class="text-muted">Male · 10 weeks · F1B, low-shed, family raised.</p>
          <div class="product-foot">
            <span class="product-price">$2,150</span>
            <a class="btn btn-primary" href="shop.html#nursery">Reserve →</a>
          </div>
        </div>
      </article>

      <article class="nursery-card">
        <div class="nursery-card-image"><img src="images/puppy-bernedoodle.png" alt="Bernedoodle puppy" loading="lazy" /></div>
        <div class="nursery-card-body">
          <h3>Bernedoodle</h3>
          <p class="text-muted">Female · 8 weeks · tri-color, parents on site to view.</p>
          <div class="product-foot">
            <span class="product-price">$2,450</span>
            <a class="btn btn-primary" href="shop.html#nursery">Reserve →</a>
          </div>
        </div>
      </article>
    </div>

    <div style="text-align:center;margin-top:var(--space-12)">
      <a href="shop.html#nursery" class="btn btn-secondary btn-lg">See all available puppies</a>
    </div>
  </div>
</section>

<!-- Story teaser -->
<section class="story">
  <div class="container-wide story-grid">
    <div class="story-image">
      <img src="images/story-1988.png" alt="The Van Iwaarden family in front of the original V.I. Pets storefront, 1988" loading="lazy" />
    </div>
    <div class="story-body">
      <div class="section-eyebrow">Our story</div>
      <h2>One family. Three stores. One promise that hasn't changed.</h2>
      <p>V.I. Pets opened in the West Shore Mall in August 1988 — two siblings, a single tropical fish wall, and a hand-painted sign. Thirty-seven years later, you can still walk in and find a Van Iwaarden behind the counter at the Holland store.</p>
      <blockquote class="pull-quote">
        "We were the pet store that took ten minutes to set up your tank. We still are. Just now you can pay online."
        <cite class="story-cite">— John Van Iwaarden, Owner</cite>
      </blockquote>
      <a href="about.html" class="btn btn-secondary">Read the full story →</a>
    </div>
  </div>
</section>

<!-- VIP Card -->
<section id="vip" class="vip">
  <div class="container-wide vip-grid">
    <div>
      <div class="section-eyebrow" style="color:var(--color-text-inverse);opacity:0.8">No app · No expiration</div>
      <h2 style="color:var(--color-text-inverse)">The VIP Card.</h2>
      <p class="vip-lead">Free to join. 10% off pet items and dog & cat food. Free aquarium water testing. Members-only weekend pricing. Show your card or just give us your phone number at checkout.</p>
      <ul class="vip-benefits">
        <li class="vip-benefit">10% off most pet supplies and dog & cat food, every day</li>
        <li class="vip-benefit">Free aquarium water testing at all three stores</li>
        <li class="vip-benefit">Members-only weekend pricing and BOGO events</li>
        <li class="vip-benefit">Card never expires — birthday treat on file</li>
      </ul>
      <div class="hero-actions">
        <a href="shop.html#vip-signup" class="btn btn-accent btn-lg">Join free</a>
        <span class="vip-savings-pill">Average member saves $312/yr</span>
      </div>
    </div>

    <div class="vip-card-mock" aria-hidden="true">
      <div>
        <div style="font-family:var(--font-display);font-weight:600;letter-spacing:0.04em">V.I. PETS</div>
        <div style="opacity:0.8;font-size:var(--text-sm);margin-top:var(--space-1)">VIP Member</div>
      </div>
      <div class="vip-card-mock-bot">
        <div>
          <div class="vip-card-mock-sub">Member since</div>
          <div class="vip-card-mock-name">2014</div>
        </div>
        <div style="text-align:right">
          <div class="vip-card-mock-sub">Number</div>
          <div class="vip-card-mock-name">**** 8421</div>
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<!-- Footer -->
<footer class="site-footer">
  <div class="container-wide">
    <div class="footer-grid">
      <div class="footer-col">
        <a class="brand" href="index.html">
          <span class="brand-text">
            <span class="brand-name">V.I. Pets</span>
            <span class="brand-sub">Since 1988 · West Michigan</span>
          </span>
        </a>
        <p class="text-muted" style="margin-top:var(--space-4);max-width:32ch">Your trusted, locally owned pet store. Three locations in West Michigan.</p>
        <div class="social">
          <a href="https://www.facebook.com/VIPetsHolland" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
          <a href="https://www.tiktok.com/@v.i.pets4" target="_blank" rel="noopener" aria-label="TikTok">TT</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Shop</h4>
        <a href="shop.html#dogs">Dogs</a>
        <a href="shop.html#cats">Cats</a>
        <a href="shop.html#aquatics">Aquatics</a>
        <a href="shop.html#reptiles">Reptiles</a>
        <a href="shop.html#small-animals">Small animals</a>
        <a href="shop.html#nursery">Puppy nursery</a>
      </div>

      <div class="footer-col">
        <h4>Visit</h4>
        <a href="#locations">Holland</a>
        <a href="#locations">Plainfield</a>
        <a href="#locations">Cutlerville</a>
        <a href="about.html">Our story</a>
        <a href="#vip">VIP Card</a>
      </div>

      <div class="footer-col">
        <h4>Help</h4>
        <a href="mailto:VIPETS01@gmail.com">Contact</a>
        <a href="shop.html#policies">Shipping & returns</a>
        <a href="shop.html#policies">Live animal policy</a>
        <a href="shop.html#policies">Warranty</a>
        <a href="shop.html#policies">Privacy</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 1988–2026 V.I. Pets · Family-owned in West Michigan</span>
      <span class="text-muted">Concept site by the family for the family.</span>
    </div>
  </div>
</footer>

<!-- Cart drawer -->
<div class="cart-backdrop" id="cart-backdrop" hidden></div>
<aside class="cart-drawer" id="cart-drawer" aria-hidden="true" aria-label="Shopping cart">
  <div class="cart-head">
    <h3>Your cart</h3>
    <button class="icon-btn" id="cart-close" aria-label="Close cart">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <div class="cart-body" id="cart-body">
    <div class="cart-empty">
      <p>Your cart is empty.</p>
      <a href="shop.html" class="btn btn-secondary">Start shopping</a>
    </div>
  </div>
  <div class="cart-foot" id="cart-foot" hidden>
    <div class="cart-totals">
      <div class="summary-line"><span>Subtotal</span><span id="cart-subtotal">$0.00</span></div>
      <div class="summary-line discount-line"><span>VIP member 10%</span><span id="cart-vip">−$0.00</span></div>
      <div class="summary-line summary-totals"><span>Total</span><span id="cart-total">$0.00</span></div>
    </div>
    <button class="btn btn-primary btn-lg" id="checkout-btn" style="width:100%">Checkout</button>
  </div>
</aside>

<!-- Checkout modal -->
<div class="checkout-modal" id="checkout-modal" aria-hidden="true">
  <div class="checkout-step">
    <div class="checkout-head">
      <div class="checkout-head-inner">
        <h2>Checkout</h2>
        <button class="icon-btn" id="checkout-close" aria-label="Close checkout">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <div class="checkout-grid">
      <form class="checkout-form" onsubmit="event.preventDefault(); document.getElementById('checkout-complete').showModal();">

        <div class="co-section">
          <div class="co-section-head">
            <span class="co-step">1</span>
            <h3>How would you like to get it?</h3>
          </div>
          <div class="fulfillment-pick">
            <label class="checkout-fulfillment-pick">
              <input type="radio" name="fulfillment" value="pickup" checked />
              <div>
                <strong>In-store pickup</strong>
                <div class="text-muted">Free · ready in 2 hours at Holland</div>
              </div>
            </label>
            <label class="checkout-fulfillment-pick">
              <input type="radio" name="fulfillment" value="ship" />
              <div>
                <strong>Ship to me</strong>
                <div class="text-muted">$7.99 flat · dry goods only · 3–5 business days</div>
              </div>
            </label>
          </div>
        </div>

        <div class="co-section">
          <div class="co-section-head">
            <span class="co-step">2</span>
            <h3>Contact</h3>
          </div>
          <div class="field-grid">
            <div class="field">
              <label for="co-email">Email</label>
              <input id="co-email" type="email" required placeholder="you@example.com" />
            </div>
            <div class="field">
              <label for="co-phone">Phone</label>
              <input id="co-phone" type="tel" required placeholder="(616) 555-0188" />
            </div>
          </div>
        </div>

        <div class="co-section">
          <div class="co-section-head">
            <span class="co-step">3</span>
            <h3>Address</h3>
          </div>
          <div class="field-grid">
            <div class="field" style="grid-column:1 / -1">
              <label for="co-name">Full name</label>
              <input id="co-name" type="text" required />
            </div>
            <div class="field" style="grid-column:1 / -1">
              <label for="co-addr">Street address</label>
              <input id="co-addr" type="text" required />
            </div>
            <div class="field">
              <label for="co-city">City</label>
              <input id="co-city" type="text" required value="Holland" />
            </div>
            <div class="field">
              <label for="co-zip">ZIP</label>
              <input id="co-zip" type="text" required pattern="[0-9]{5}" placeholder="49424" />
            </div>
          </div>
        </div>

        <div class="co-section">
          <div class="co-section-head">
            <span class="co-step">4</span>
            <h3>Payment</h3>
          </div>
          <div class="pay-buttons">
            <button type="button" class="pay-btn pay-apple" aria-label="Pay with Apple Pay">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.5 12.5c0-2 1.6-2.9 1.7-3-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.2 1 8.3.7 1 1.6 2.1 2.7 2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 1.9-1 2.6-2 .9-1.1 1.2-2.3 1.3-2.4-.1 0-2.5-1-2.7-3.4zM15.3 6.6c.6-.7 1-1.7.9-2.7-.8 0-1.9.5-2.5 1.3-.5.6-1 1.7-.9 2.6.9.1 1.8-.5 2.5-1.2z"/></svg>
              <span>Pay</span>
            </button>
            <button type="button" class="pay-btn pay-google" aria-label="Pay with Google Pay">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#4285F4" d="M21.3 12.2c0-.7-.1-1.3-.2-1.9h-9v3.7h5.1c-.2 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.8-1.7 2.9-4.2 2.9-7.1z"/><path fill="#34A853" d="M12.1 21.5c2.6 0 4.8-.9 6.4-2.3l-3.1-2.4c-.9.6-2 .9-3.3.9-2.5 0-4.6-1.7-5.4-4H3.5v2.5c1.6 3.2 4.9 5.3 8.6 5.3z"/><path fill="#FBBC04" d="M6.7 13.7c-.2-.6-.3-1.2-.3-1.9 0-.7.1-1.3.3-1.9V7.4H3.5c-.7 1.4-1.1 2.9-1.1 4.4 0 1.5.4 3 1.1 4.4l3.2-2.5z"/><path fill="#EA4335" d="M12.1 6c1.4 0 2.7.5 3.7 1.4l2.8-2.8C16.9 3.1 14.7 2.2 12.1 2.2 8.4 2.2 5.1 4.3 3.5 7.4l3.2 2.5c.8-2.3 2.9-3.9 5.4-3.9z"/></svg>
              <span>Pay</span>
            </button>
            <button type="button" class="pay-btn pay-shop" aria-label="Pay with Shop Pay">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.7 9.2h-2.4v4.4c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-4.4H8.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.2V7c0-.5.4-.9.9-.9s.9.4.9.9v2.4h2.4c.5 0 .9.4.9.9s-.4.9-.9.9z"/></svg>
              <span>Shop Pay</span>
            </button>
          </div>
          <div class="pay-row"><span>or pay by card</span></div>
          <div class="field-grid">
            <div class="field" style="grid-column:1 / -1">
              <label for="co-card">Card number</label>
              <input id="co-card" type="text" inputmode="numeric" placeholder="1234 5678 9012 3456" required autocomplete="cc-number" />
            </div>
            <div class="field">
              <label for="co-exp">Expiration</label>
              <input id="co-exp" type="text" placeholder="MM / YY" required autocomplete="cc-exp" />
            </div>
            <div class="field">
              <label for="co-cvc">CVC</label>
              <input id="co-cvc" type="text" inputmode="numeric" placeholder="123" required autocomplete="cc-csc" />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Place order</button>
      </form>

      <aside class="order-summary">
        <h4>Order summary</h4>
        <div id="checkout-lines"></div>
        <div class="summary-line"><span>Subtotal</span><span id="co-subtotal">$0.00</span></div>
        <div class="summary-line discount-line"><span>VIP member 10%</span><span id="co-vip">−$0.00</span></div>
        <div class="summary-line"><span>Pickup</span><span>Free</span></div>
        <div class="summary-line summary-totals"><span>Total</span><span id="co-total">$0.00</span></div>
        <p class="text-muted" style="font-size:var(--text-xs);margin-top:var(--space-4)">This is a concept preview. No card will be charged.</p>
      </aside>
    </div>
  </div>
</div>

<dialog id="checkout-complete" style="border:0;border-radius:var(--radius-xl);padding:var(--space-12);max-width:480px;background:var(--color-surface);color:var(--color-text)">
  <h2 style="font-family:var(--font-display);margin-top:0">Order placed.</h2>
  <p>This is a concept preview — no charge was made. In the live store this would trigger Shopify, send a confirmation email, and notify the Holland team.</p>
  <button class="btn btn-primary" onclick="this.closest('dialog').close(); document.getElementById('checkout-modal').setAttribute('aria-hidden','true');">Got it</button>
</dialog>

<div class="toast" id="toast" role="status"></div>

<script src="script.js"></script>
<script data-pplx-inline-edit>
(function () {
  if (window === window.top) return;

  const allowedParentOrigins = ["https://www.perplexity.ai","https://perplexity.ai","https://testing.perplexity.ai","https://staging.perplexity.ai","https://*.preview.i.perplexity.ai","http://localhost:3000","http://127.0.0.1:3000","http://localhost:5173","http://127.0.0.1:5173"];
  const MAX_FONT_BYTES = 500 * 1024;
  const MAX_TOTAL_FONT_BYTES = 2 * 1024 * 1024;
  let scrollForwarding = false;
  let scrollRaf = 0;
  let trustedTopOrigin = null;

  // Allow entries like "https://*.preview.i.perplexity.ai" — the wildcard
  // matches a single DNS label (no dots), so "https://*.foo" cannot stretch
  // across multiple labels.
  function matchesAllowedOrigin(origin) {
    if (!origin) return false;
    for (const entry of allowedParentOrigins) {
      if (!entry.includes("*")) {
        if (entry === origin) return true;
        continue;
      }
      const pattern = new RegExp(
        "^" +
          entry.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^.]+") +
          "$",
      );
      if (pattern.test(origin)) return true;
    }
    return false;
  }

  // Trust decision: when the sender is same-origin-visible (event.origin is a
  // real origin like https://www.perplexity.ai) we trust event.origin directly.
  // When event.origin is "null" (opaque broker srcdoc), we fall back to the
  // broker's stamped `parentOrigin` to identify the top window. The fallback
  // is claim-only — we rely on the browser's native `targetOrigin` enforcement
  // on the response path (see postToTrustedTop) to ensure replies can't be
  // delivered to anyone but the actual top window of that claimed origin.
  function getTrustedParentOrigin(event) {
    const forwardedParentOrigin =
      typeof event.data.parentOrigin === "string" ? event.data.parentOrigin : null;
    const parentOrigin = event.origin === "null" ? forwardedParentOrigin : event.origin;
    return matchesAllowedOrigin(parentOrigin) ? parentOrigin : null;
  }

  // All responses go to window.top with targetOrigin = the allowlisted origin.
  // An attacker that iframes us inside their own null-origin broker can claim
  // any parentOrigin they like, but the browser will drop the reply whenever
  // the real top's origin doesn't match — so the screenshot never leaves.
  function postToTrustedTop(message) {
    if (!trustedTopOrigin) return;
    try {
      window.top.postMessage(message, trustedTopOrigin);
    } catch (_error) {}
  }

  function inlineAll(original, clone) {
    if (original.nodeType !== 1 || clone.nodeType !== 1) return;

    try {
      const computedStyle = getComputedStyle(original);
      // cssText on a computed style is the serialized declaration in modern
      // Chromium/Safari — a single read beats enumerating ~400 longhand
      // properties. Firefox returns "" here, so we fall back on empty.
      const serialized = computedStyle.cssText;
      if (serialized) {
        clone.style.cssText = serialized;
      } else {
        const parts = new Array(computedStyle.length);
        for (let index = 0; index < computedStyle.length; index += 1) {
          const property = computedStyle[index];
          parts[index] = `${property}:${computedStyle.getPropertyValue(property)};`;
        }
        clone.style.cssText = parts.join("");
      }
    } catch (_error) {}

    const originalChildren = original.children;
    const clonedChildren = clone.children;
    for (
      let index = 0;
      index < originalChildren.length && index < clonedChildren.length;
      index += 1
    ) {
      inlineAll(originalChildren[index], clonedChildren[index]);
    }
  }

  function extractFontUrl(srcValue) {
    const matches = [
      ...srcValue.matchAll(
        /url\(["']?([^"')]+)["']?\)(?:\s*format\(["']?([^"')]+)["']?\))?/gi,
      ),
    ];
    if (matches.length === 0) return null;
    const woff2 = matches.find((m) => m[2] && m[2].toLowerCase().includes("woff2"));
    if (woff2) return woff2[1];
    const woff = matches.find((m) => m[2] && m[2].toLowerCase().includes("woff"));
    if (woff) return woff[1];
    return matches[0][1];
  }

  // Cache resolved font URL -> data URI across captures. Fonts on a page
  // essentially never change, and a batch run emits multiple captures back to
  // back — without this we'd refetch + re-base64 every time.
  const fontDataUriCache = new Map();
  const SRC_DECLARATION_RE = /src\s*:\s*[^;}]+/i;

  async function fetchAsDataUri(url) {
    if (fontDataUriCache.has(url)) return fontDataUriCache.get(url);
    let dataUri = null;
    try {
      const response = await fetch(url, { mode: "cors", credentials: "omit" });
      if (response.ok) {
        const blob = await response.blob();
        if (blob.size <= MAX_FONT_BYTES) {
          dataUri = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () =>
              resolve(typeof reader.result === "string" ? reader.result : null);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(blob);
          });
        }
      }
    } catch (_error) {
      dataUri = null;
    }
    fontDataUriCache.set(url, dataUri);
    return dataUri;
  }

  function collectFontFaceRuleTexts() {
    const rules = [];
    for (const sheet of document.styleSheets) {
      let cssRules;
      try {
        cssRules = sheet.cssRules;
      } catch (_error) {
        continue;
      }
      if (!cssRules) continue;
      for (const rule of cssRules) {
        const cssText = rule.cssText || "";
        if (cssText.startsWith("@font-face")) rules.push(cssText);
      }
    }
    return rules;
  }

  async function buildInlinedFontCss() {
    const ruleTexts = collectFontFaceRuleTexts();
    if (ruleTexts.length === 0) return null;

    const resolved = ruleTexts.map((cssText) => {
      if (!SRC_DECLARATION_RE.test(cssText)) return null;
      const srcMatch = cssText.match(/src\s*:\s*([^;}]+)[;}]/i);
      if (!srcMatch) return null;
      const url = extractFontUrl(srcMatch[1]);
      if (!url) return null;
      try {
        return { cssText, url: new URL(url, document.baseURI).href };
      } catch (_error) {
        return null;
      }
    });

    const dataUris = await Promise.all(
      resolved.map((entry) => (entry ? fetchAsDataUri(entry.url) : Promise.resolve(null))),
    );

    const inlined = [];
    let totalBytes = 0;
    for (let index = 0; index < resolved.length; index += 1) {
      const entry = resolved[index];
      const dataUri = dataUris[index];
      if (!entry || !dataUri) continue;
      const approxBytes = dataUri.length * 0.75;
      if (totalBytes + approxBytes > MAX_TOTAL_FONT_BYTES) break;
      totalBytes += approxBytes;
      inlined.push(entry.cssText.replace(SRC_DECLARATION_RE, `src: url("${dataUri}")`));
    }
    return inlined.length > 0 ? inlined.join("\n") : null;
  }

  function stripExternal(clone) {
    const images = clone.querySelectorAll("img");
    for (let index = 0; index < images.length; index += 1) {
      const src = images[index].getAttribute("src");
      if (src && !src.startsWith("data:")) images[index].removeAttribute("src");
    }

    const elements = clone.querySelectorAll("*");
    for (let index = 0; index < elements.length; index += 1) {
      const style = elements[index].style.cssText;
      if (style && style.includes("url(")) {
        elements[index].style.cssText = style.replace(
          /url\(["']?(?!data:)[^)"']*["']?\)/gi,
          "none",
        );
      }
    }
  }

  function emitScroll() {
    scrollRaf = 0;
    if (!scrollForwarding) return;
    postToTrustedTop({
      type: "INLINE_EDIT_SCROLL",
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!scrollForwarding || scrollRaf) return;
      scrollRaf = requestAnimationFrame(emitScroll);
    },
    { passive: true, capture: true },
  );

  async function handleCaptureRequest(event) {
    const requestId = event.data.requestId;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    function postResult(dataUrl) {
      postToTrustedTop({
        type: "INLINE_EDIT_SCREENSHOT_RESULT",
        requestId,
        dataUrl,
        scrollX,
        scrollY,
      });
    }

    try {
      // Wait for any pending web fonts to resolve so both inline metrics and
      // the @font-face inlining below see the same loaded faces.
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch (_error) {}
      }

      const clone = document.documentElement.cloneNode(true);
      inlineAll(document.documentElement, clone);

      const removedNodes = clone.querySelectorAll("script,link[rel=\"stylesheet\"],style");
      for (let index = 0; index < removedNodes.length; index += 1) {
        removedNodes[index].remove();
      }

      stripExternal(clone);

      // Re-embed web fonts as data-URI @font-face rules so the SVG rasterizer
      // can resolve them — external font URLs aren't fetched during
      // foreignObject rendering, which would otherwise force a fallback face
      // and change text metrics.
      const inlinedFontCss = await buildInlinedFontCss();
      if (inlinedFontCss) {
        const styleEl = document.createElement("style");
        styleEl.textContent = inlinedFontCss;
        const head = clone.querySelector("head");
        if (head) head.appendChild(styleEl);
        else clone.insertBefore(styleEl, clone.firstChild);
      }

      const html = new XMLSerializer().serializeToString(clone);
      const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
        '<foreignObject width="100%" height="100%">' +
        `<div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;overflow:hidden">` +
        `<div style="transform:translate(-${scrollX}px,-${scrollY}px);transform-origin:top left">` +
        html +
        "</div></div></foreignObject></svg>";
      const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
      const image = new Image();
      image.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(image, 0, 0);
        postResult(canvas.toDataURL("image/png"));
      };
      image.onerror = function () {
        postResult(null);
      };
      image.src = svgUrl;
    } catch (_error) {
      postResult(null);
    }
  }

  window.addEventListener("message", function (event) {
    if (!event.data) return;
    // Only accept messages from the direct parent frame. Blocks sibling /
    // unrelated-window postMessage senders that could otherwise reach us.
    if (event.source !== window.parent) return;

    const trustedParentOrigin = getTrustedParentOrigin(event);
    if (!trustedParentOrigin) return;
    trustedTopOrigin = trustedParentOrigin;

    if (event.data.type === "INLINE_EDIT_SCROLL_START") {
      scrollForwarding = true;
      emitScroll();
      return;
    }

    if (event.data.type === "INLINE_EDIT_SCROLL_STOP") {
      scrollForwarding = false;
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      scrollRaf = 0;
      return;
    }

    if (event.data.type !== "INLINE_EDIT_CAPTURE_REQUEST") return;

    handleCaptureRequest(event);
  });
})();


</script></body>
</html>

