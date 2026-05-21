import { useState } from "react";
import Navbar from "@/components/Navbar";
import thumb1 from "@/assets/testimonial-thumb-1.jpeg";
import thumb2 from "@/assets/testimonial-thumb-2.jpeg";
import thumb3 from "@/assets/testimonial-thumb-3.jpeg";
import thumb4 from "@/assets/testimonial-thumb-4.png";
import thumb5 from "@/assets/testimonial-thumb-5.png";

const CTA_URL = "https://go.libertyfunding.us/capital";

// Color palette from Liberty Funding
const C = {
  bg: "#070f1d",
  bgSection: "#0a1628",
  text: "#e2e8f0",
  textMuted: "#94a3b8",
  red: "#CE0D34",
  redBg: "rgba(206,13,52,0.08)",
  redBorder: "rgba(206,13,52,0.3)",
  lime: "#A4E633",
  limeBg: "rgba(164,230,51,0.08)",
  limeBorder: "rgba(164,230,51,0.3)",
  calloutBg: "rgba(164,230,51,0.06)",
  calloutBorder: "rgba(164,230,51,0.25)",
  divider: "rgba(255,255,255,0.08)",
  videoBg: "rgba(255,255,255,0.04)",
  videoBorder: "rgba(255,255,255,0.08)",
};

const VideoPlaceholder = ({ height = 220 }: { height?: number }) => (
  <div style={{
    width: "100%",
    height,
    background: C.videoBg,
    border: `1px solid ${C.videoBorder}`,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.textMuted,
    fontSize: 13,
    letterSpacing: "0.1em",
    fontWeight: 500,
  }}>
    VIDEO
  </div>
);

const Vid = ({ src }: { src: string }) => (
  <video
    src={src}
    controls
    playsInline
    preload="metadata"
    style={{
      width: "100%",
      borderRadius: 8,
      border: `1px solid ${C.videoBorder}`,
      background: "#000",
      display: "block",
    }}
  />
);

const PhotoPlaceholder = () => (
  <div style={{
    width: "100%",
    height: 280,
    background: C.videoBg,
    border: `1px solid ${C.videoBorder}`,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.textMuted,
    fontSize: 13,
    letterSpacing: "0.1em",
    fontWeight: 500,
    marginBottom: 32,
  }}>
    PHOTO
  </div>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: C.calloutBg,
    border: `1px solid ${C.calloutBorder}`,
    borderRadius: 8,
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 28,
    fontSize: 16,
    color: C.text,
    fontWeight: 500,
  }}>
    <span style={{ fontSize: 18 }}>⚡</span>
    {children}
  </div>
);

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "36px 0",
  }}>
    <div style={{ flex: 1, height: 1, background: C.divider }} />
    <span style={{ color: C.textMuted, fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
    <div style={{ flex: 1, height: 1, background: C.divider }} />
  </div>
);

const TwoCol = ({ left, right, gap = 20 }: { left: React.ReactNode; right: React.ReactNode; gap?: number }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap, marginBottom: 28 }}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

const ColLabel = ({ children, color }: { children: React.ReactNode; color?: string }) => (
  <p style={{ fontSize: 15, fontWeight: 600, color: color || C.text, marginBottom: 12 }}>{children}</p>
);

const BulletX = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
    <span style={{ color: C.red, fontSize: 14, lineHeight: "22px", flexShrink: 0 }}>✗</span>
    <span style={{ fontSize: 14, color: C.textMuted, lineHeight: "22px" }}>{children}</span>
  </div>
);

const BulletCheck = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
    <span style={{ color: C.lime, fontSize: 14, lineHeight: "22px", flexShrink: 0 }}>✓</span>
    <span style={{ fontSize: 14, color: C.textMuted, lineHeight: "22px" }}>{children}</span>
  </div>
);

const ProblemGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div style={{ marginBottom: 20 }}>
    <p style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Problem — {title}</p>
    {items.map(i => <BulletX key={i}>{i}</BulletX>)}
  </div>
);

const SolutionGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div style={{ marginBottom: 20 }}>
    <p style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Solution → {title}</p>
    {items.map(i => <BulletCheck key={i}>{i}</BulletCheck>)}
  </div>
);

const TESTIMONIALS = [
  { thumb: thumb1, embedUrl: "https://drive.google.com/file/d/1wWYnmoPTppZ_3N1NT0QdUiEm95hDxDJ7/preview" },
  { thumb: thumb2, embedUrl: "https://drive.google.com/file/d/1cbAHhjm1W7a6eZh0dE408lfarYbeiaul/preview" },
  { thumb: thumb3, embedUrl: "https://drive.google.com/file/d/1mftAsJg4LbhxVuiEuKi0_lHnoctHQxMc/preview" },
  { thumb: thumb4, embedUrl: "https://drive.google.com/file/d/11qpTECfZcja0kMwR_NkS62bpZ9L87_iH/preview" },
  { thumb: thumb5, embedUrl: "https://drive.google.com/file/d/1aNSIIWXbnYXJNXSlmNaoxWHBySRRD71w/preview" },
];

export default function Accelerator() {
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: C.text }}>
      <Navbar />

      {/* Page content — centered document layout */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>

        {/* ── PAGE TITLE ───────────────────────────────────────────────── */}
        <h1 style={{ fontSize: 40, fontWeight: 700, color: C.text, marginBottom: 8, lineHeight: 1.2 }}>
          Invite: Business Funding Accelerator
        </h1>
        <p style={{ fontSize: 16, color: C.lime, marginBottom: 24 }}>
          For Business Owners who need capital FAST…
        </p>

        {/* ── MAIN HEADLINE ────────────────────────────────────────────── */}
        <p style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 28, lineHeight: 1.4 }}>
          We Help You Qualify For{" "}
          <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Up To <span style={{ color: C.lime }}>$300k</span></span>{" "}
          Of Business Funding{" "}
          <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Within 90 Days Or Less</span>
        </p>

        {/* ── INTRO + FIRST VIDEO ──────────────────────────────────────── */}
        <TwoCol
          left={
            <div>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7 }}>
                Firstly, if you don't know much about{" "}
                <span style={{ color: C.lime, cursor: "pointer" }}>me, my business, or why you'd want to work together</span>,
                watch this
              </p>
            </div>
          }
          right={
            <div>
              <Vid src="/videos/funding-acquisition.mp4" height={160} />
              <p style={{ fontSize: 13, fontWeight: 600, color: C.text, marginTop: 10, textAlign: "center" }}>
                We Will Help You Qualify For Up To <span style={{ color: C.red }}>$300k</span> Of Business Funding In 90 Days Or Less
              </p>
              <p style={{ fontSize: 12, color: C.textMuted, textAlign: "center", marginTop: 4 }}>
                Through <strong style={{ color: C.text }}>Strategic Corporate Acquisition</strong>
              </p>
            </div>
          }
        />

        <div style={{ height: 1, background: C.divider, marginBottom: 36 }} />

        {/* ── WHAT HAPPENS WHEN YOU FIRST JOIN ─────────────────────────── */}
        <Callout>What Happens When You First Join?</Callout>

        <TwoCol
          left={
            <div>
              <ColLabel>The Onboarding Process</ColLabel>
              <Vid src="/videos/onboarding-process.mp4" />
            </div>
          }
          right={
            <div>
              <ColLabel>The Client Portal</ColLabel>
              <Vid src="/videos/client-portal.mp4" />
            </div>
          }
        />

        {/* ── WHAT IS THE TRANSFORMATION ───────────────────────────────── */}
        <Callout>What Is The Transformation?</Callout>

        <TwoCol
          left={
            <div>
              <ColLabel>Our Funding Process</ColLabel>
              <Vid src="/videos/funding-process.mp4" />
            </div>
          }
          right={
            <div>
              <ColLabel>Our Unique Strategies</ColLabel>
              <Vid src="/videos/unique-strategies.mp4" />
            </div>
          }
        />

        {/* ── OLD WAY vs NEW ERA ───────────────────────────────────────── */}
        <TwoCol
          gap={16}
          left={
            <div style={{ background: C.redBg, border: `1px solid ${C.redBorder}`, borderRadius: 8, overflow: "hidden" }}>
              <div style={{ background: "rgba(206,13,52,0.15)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>⚡</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.05em" }}>OLD WAY</span>
              </div>
              <div style={{ padding: "16px", borderTop: `1px solid ${C.redBorder}` }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: C.red, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                  (FRUSTRATING FUNDING)
                </p>
                <ProblemGroup
                  title="Not Knowing How To Prepare"
                  items={[
                    "no idea what a good borrower looks like",
                    "the entire process is dragging out",
                    '"guessing" through the process',
                  ]}
                />
                <ProblemGroup
                  title="Hurting Credit"
                  items={[
                    "good credit but bad results",
                    "applications are hurting your score",
                    "no/little funding and worse credit",
                  ]}
                />
                <ProblemGroup
                  title="No Insights"
                  items={[
                    "no idea what to say on the applications",
                    "no banker contacts to help",
                    "results in denials or small limit approvals",
                  ]}
                />
              </div>
            </div>
          }
          right={
            <div style={{ background: C.limeBg, border: `1px solid ${C.limeBorder}`, borderRadius: 8, overflow: "hidden" }}>
              <div style={{ background: "rgba(164,230,51,0.12)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>⚡</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.lime, textTransform: "uppercase", letterSpacing: "0.05em" }}>NEW ERA MODEL</span>
              </div>
              <div style={{ padding: "16px", borderTop: `1px solid ${C.limeBorder}` }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: C.lime, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                  (BUSINESS FUNDING ACCELERATOR)
                </p>
                <SolutionGroup
                  title="Cinderella Profile"
                  items={[
                    'turn you into "dream borrower" for the banks',
                    "reverse engineer what you need to do",
                    "ensure you are fully optimized for best results",
                  ]}
                />
                <SolutionGroup
                  title="Business-In-A-Box"
                  items={[
                    "company dashboard, client portal, SOPs",
                    "better, smooth, more professional",
                    "full systems install in 7 DAYS!",
                  ]}
                />
                <SolutionGroup
                  title="Fulfillment Team"
                  items={[
                    "trained funding specialists",
                    "full client results without you",
                    "company operating on its own",
                  ]}
                />
              </div>
            </div>
          }
        />

        {/* ── HOW WE STAND OUT ─────────────────────────────────────────── */}
        <SectionDivider label="How We Stand Out?" />

        <p style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 20 }}>
          We Help You Get <span style={{ color: C.lime }}>BETTER</span> Funding Results
        </p>

        <TwoCol
          left={
            <div>
              <ColLabel>The Updated Datapoints</ColLabel>
              <Vid src="/videos/updated-datapoints.mp4" />
            </div>
          }
          right={
            <div>
              <ColLabel>The Funding Trainings</ColLabel>
              <Vid src="/videos/funding-trainings.mp4" />
            </div>
          }
        />

        {/* ── WORKING TOGETHER ─────────────────────────────────────────── */}
        <p style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 20 }}>
          So what does{" "}
          <span style={{ color: C.lime, fontStyle: "italic" }}>working together</span>{" "}
          look like?
        </p>

        <Callout>Offer: Business Funding Accelerator</Callout>

        <TwoCol
          left={
            <div>
              <ColLabel color={C.lime}>Coaching</ColLabel>
              <Vid src="/videos/coaching.mp4" />
            </div>
          }
          right={
            <div>
              <ColLabel color={C.lime}>Network & Contacts</ColLabel>
              <Vid src="/videos/network-contacts.mp4" />
            </div>
          }
        />

        {/* ── CLIENT TESTIMONIALS ──────────────────────────────────────── */}
        <p style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 20 }}>
          What do{" "}
          <span style={{ color: C.lime, fontStyle: "italic" }}>our clients</span>{" "}
          have to say?
        </p>

        <Callout>Client Case Studies</Callout>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
          {TESTIMONIALS.slice(0, 4).map((t, i) => (
            <div
              key={i}
              onClick={() => setModalUrl(t.embedUrl)}
              style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", border: `1px solid ${C.videoBorder}`, position: "relative" }}
            >
              <img src={t.thumb} alt={`Client Testimonial ${i + 1}`} style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div
            onClick={() => setModalUrl(TESTIMONIALS[4].embedUrl)}
            style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", border: `1px solid ${C.videoBorder}`, position: "relative", width: "calc(50% - 10px)" }}
          >
            <img src={TESTIMONIALS[4].thumb} alt="Client Testimonial 5" style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
              </div>
            </div>
          </div>
        </div>

        {modalUrl && (
          <div
            onClick={() => setModalUrl(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          >
            <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: 900, aspectRatio: "16/9" }}>
              <button
                onClick={() => setModalUrl(null)}
                style={{ position: "absolute", top: -36, right: 0, background: "none", border: "none", color: "white", fontSize: 24, cursor: "pointer" }}
              >✕</button>
              <iframe src={modalUrl} style={{ width: "100%", height: "100%", borderRadius: 8, border: "none" }} allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        )}

        {/* ── QUICK RECAP ──────────────────────────────────────────────── */}
        <p style={{ fontSize: 20, fontWeight: 700, color: C.lime, marginBottom: 16 }}>
          Quick recap:
        </p>

        <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: 32 }}>
          {[
            <>Custom funding solution helping you become the <strong>Perfect Borrower</strong>, <strong>Maximize Funding Approvals</strong>, And <span style={{ textDecoration: "underline" }}>Do it FAST &amp; EASY</span>.</>,
            "1on1 direct support with a dedicated funding expert.",
            "All the most up-to-date funding strategies and banker contacts.",
            "A high-impact curriculum so you can learn the funding process yourself.",
            "Easy to use tools to make this an amazing experience for you (client portal, funding tracker, trainings, etc.)",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, fontSize: 15, color: C.text, lineHeight: 1.6 }}>
              <span style={{ color: C.lime, fontSize: 16, flexShrink: 0, marginTop: 2 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", paddingTop: 16 }}>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #CE0D34, #e8204a)",
              color: "white",
              padding: "14px 36px",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(206,13,52,0.3)",
            }}
          >
            Apply For Funding →
          </a>
        </div>

      </div>
    </div>
  );
}
