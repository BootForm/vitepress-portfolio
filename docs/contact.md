---
layout: page
title: Contact
---

<!-- ───── Small hero ─────
     CHANGE ME: your own heading and subtitle. Kept short and low on the page on purpose: this
     page's job is the form below, not another pitch. -->
<div class="bg-brand-500/10 px-6 py-16 text-center">
  <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Let's talk about your project</h1>
  <p class="mx-auto mt-3 max-w-xl opacity-70">
    Tell me what you're working on. I read every message myself and reply within a day or two.
  </p>
</div>

<!-- ───── Info + form ─────
     Two columns on a wide enough screen, stacked on mobile (grid-cols-1 md:grid-cols-2): contact
     details on the left, the actual form on the right. This is the page that's supposed to sell
     the idea of a working contact form, so it gets more care than a bare form on its own would. -->
<div class="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-2">

<div class="flex flex-col gap-6">

<h2 class="text-sm font-semibold uppercase tracking-widest opacity-50">Get in touch directly</h2>

<!-- CHANGE ME: your real address, or delete this whole block if you work fully remote and don't
     want to list one. The link is a plain Google Maps search, not an embedded map: no API key,
     no extra script, and it still gets someone driving directions in one click. -->
<div class="flex items-start gap-3">
  <span class="mt-0.5 text-brand-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  </span>
  <div>
    <p class="font-medium">Based in Portland, OR</p>
    <a href="https://maps.google.com/?q=Portland,OR" target="_blank" rel="noopener" class="text-sm text-brand-500 hover:underline">Get directions ↗</a>
  </div>
</div>

<!-- CHANGE ME: your real phone number. -->
<div class="flex items-start gap-3">
  <span class="mt-0.5 text-brand-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
  </span>
  <div>
    <p class="font-medium">Call or text</p>
    <a href="tel:+15555550123" class="text-sm text-brand-500 hover:underline">+1 (555) 555-0123</a>
  </div>
</div>

<!-- CHANGE ME: your real email. -->
<div class="flex items-start gap-3">
  <span class="mt-0.5 text-brand-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  </span>
  <div>
    <p class="font-medium">Email</p>
    <a href="mailto:hello@example.com" class="text-sm text-brand-500 hover:underline">hello@example.com</a>
  </div>
</div>

<p class="mt-4 text-sm opacity-60">
  Prefer the form? That's what it's there for, and it's the fastest way to reach me: it lands
  straight in my inbox the moment you send it, no account needed on your end.
</p>

</div>

<!-- ───── The form ─────
     Replace __YOUR_FORM_ID__ below with the ID you generate in step 3 of the README. Everything
     else here already works. -->
<div class="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">

<form action="https://f.bootform.com/__YOUR_FORM_ID__" method="POST" class="flex flex-col gap-4">

  <div class="flex flex-col gap-1">
    <label for="name" class="text-sm font-medium">Your name</label>
    <input id="name" name="name" type="text" required
           class="rounded-md border border-black/30 bg-white px-3 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 dark:border-white/30 dark:bg-white/5">
  </div>

  <div class="flex flex-col gap-1">
    <label for="email" class="text-sm font-medium">Your email</label>
    <input id="email" name="email" type="email" required
           class="rounded-md border border-black/30 bg-white px-3 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 dark:border-white/30 dark:bg-white/5">
  </div>

  <div class="flex flex-col gap-1">
    <label for="message" class="text-sm font-medium">What are you working on?</label>
    <textarea id="message" name="message" rows="4" required
              class="rounded-md border border-black/30 bg-white px-3 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 dark:border-white/30 dark:bg-white/5"></textarea>
  </div>

  <!-- A spam trap. Real people never see it, bots fill it in. Leave it alone. -->
  <input type="text" name="_honeypot" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">

  <button type="submit" class="self-start rounded-md bg-brand-500 px-5 py-2 font-medium text-white hover:bg-brand-600">
    Send
  </button>
</form>

</div>

</div>
