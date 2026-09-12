// src/pages/PlaceholderPage.jsx
// Reusable na placeholder page — ginagamit ng About/Skills/Projects/Contact
// pages habang wala pang buong content. Isang beses lang ito ginawa
// (DRY principle) sa halip na magsulat ng magkaparehong code sa bawat page.

import SectionBadge from "../components/common/SectionBadge";

function PlaceholderPage({ label, title }) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <SectionBadge>{label}</SectionBadge>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h1>
      <p className="text-slate-500">The content is in progress.</p>
    </section>
  );
}

export default PlaceholderPage;
