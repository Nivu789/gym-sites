"use client";

import { useState, type FormEvent } from "react";
import { siteNameOf, type SiteConfig } from "@/config/site";

export default function TrialForm({ siteConfig }: { siteConfig: SiteConfig }) {
  const siteName = siteNameOf(siteConfig);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const time = String(data.get("time") ?? "");
    const goal = String(data.get("goal") ?? "");

    if (!name) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid phone number.");

    setError("");
    const text = `Hi, I'd like to book a free trial at ${siteName}.\nName: ${name}\nPhone: ${phone}\nPreferred time: ${time}\nGoal: ${goal}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section className="trial" id="trial">
      <div className="container trial__inner">
        <div className="trial__copy">
          <div className="eyebrow" style={{ color: "inherit" }}>
            Free trial
          </div>
          <h2 className="trial__title">Your first class is on us</h2>
          <p className="trial__text">
            Tell us a little about yourself and we will message you on WhatsApp to confirm your session.
          </p>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
            </div>
          </div>
          <div className="form__row">
            <div className="field">
              <label htmlFor="time">Preferred time</label>
              <select id="time" name="time">
                {siteConfig.trialTimes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="goal">Your goal</label>
              <select id="goal" name="goal">
                {siteConfig.trialGoals.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          {error && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn--solid btn--block">
            Book my free trial
          </button>
        </form>
      </div>
    </section>
  );
}
