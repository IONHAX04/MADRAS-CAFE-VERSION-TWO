import { useState } from "react";
import { Check } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

export default function Franchise() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    inquiry: "Franchise",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageWrapper testid="franchise-page">
      {/* HEADER */}
      <section className="pt-44 md:pt-56 pb-12 px-6 md:px-12 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5"
          data-aos="fade-up"
        >
          Franchise · Press · Anything quiet
        </p>
        <h1
          className="font-display text-forest leading-[0.92] mx-auto max-w-5xl"
          style={{ fontSize: "clamp(3.6rem, 11vw, 9rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get in <span className="font-italic-accent italic font-medium text-gold">touch</span>.
        </h1>
        <p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-forest/80 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We open one new outlet every two years. If you would like to bring
          Madras Cafe to your city — or just write a note — we read every
          message and reply within a day.
        </p>
      </section>

      {/* FORM */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white border-[3px] border-forest shadow-[16px_16px_0_#1a5e3a] p-8 md:p-14">
          {!sent ? (
            <form
              onSubmit={submit}
              data-testid="franchise-form"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Field label="Full Name" name="name" type="text" value={form.name} onChange={handle} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handle} required />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handle} />
              <Field label="City" name="city" type="text" value={form.city} onChange={handle} required />

              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold tracking-[0.35em] uppercase text-forest/70 mb-2">
                  Inquiry Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Franchise", "Press", "Private Event", "Other"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      data-testid={`inquiry-${t.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setForm((s) => ({ ...s, inquiry: t }))}
                      className={`tag-pill ${form.inquiry === t ? "active" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold tracking-[0.35em] uppercase text-forest/70 mb-2">
                  Your Note
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  required
                  data-testid="franchise-message"
                  className="w-full bg-white border-[3px] border-forest p-4 text-forest placeholder:text-forest/40 focus:border-gold outline-none transition-colors"
                  placeholder="Tell us about your city, the space you have in mind, or what you would like to ask…"
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-5 pt-2">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-forest/60">
                  We reply within 24 hours.
                </p>
                <button
                  type="submit"
                  data-testid="franchise-submit"
                  className="btn-sweep btn-sweep-gold px-10 py-4 text-[12px]"
                >
                  Send the Note
                </button>
              </div>
            </form>
          ) : (
            <div data-testid="franchise-success" className="text-center py-6">
              <div className="mx-auto h-16 w-16 bg-forest text-gold flex items-center justify-center mb-7 border-[3px] border-forest">
                <Check size={26} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-forest leading-[0.95]">
                Thank you, {form.name || "friend"}.
              </h3>
              <p className="font-italic-accent italic text-2xl text-forest/80 mt-4 max-w-md mx-auto">
                Your note from {form.city || "your city"} has landed in our
                inbox. We will write back within a day.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    inquiry: "Franchise",
                    message: "",
                  });
                }}
                data-testid="franchise-reset"
                className="btn-sweep mt-10 px-7 py-3 text-[12px]"
              >
                Send another
              </button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}

function Field({ label, name, ...rest }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] font-bold tracking-[0.35em] uppercase text-forest/70 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        data-testid={`franchise-${name}`}
        className="w-full bg-white border-[3px] border-forest p-4 text-forest placeholder:text-forest/40 focus:border-gold outline-none transition-colors"
        {...rest}
      />
    </div>
  );
}
