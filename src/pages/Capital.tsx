import { useEffect } from "react";

export default function Capital() {
  useEffect(() => {
    // Load Wistia player script
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/s3lyyxcte1.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>

        {/* Heading */}
        <p style={{ fontSize: 16, fontWeight: 600, color: "#333", marginBottom: 8 }}>
          Entrepreneurs &amp; Business Owners...
        </p>
        <h1 style={{
          fontSize: "clamp(22px, 4vw, 34px)",
          fontWeight: 900,
          color: "#000",
          lineHeight: 1.25,
          marginBottom: 24,
          border: "3px solid #000",
          padding: "16px 20px",
          display: "inline-block",
        }}>
          Want Us To Secure You $50K-$250k of Business Funding at 0% Interest?
        </h1>

        {/* Step label */}
        <p style={{ fontSize: 15, fontWeight: 700, color: "#333", marginBottom: 16, marginTop: 8 }}>
          Step #1: Watch The Video Below:
        </p>

        {/* Wistia video */}
        <div style={{ position: "relative", marginBottom: 32 }}>
          <wistia-player
            media-id="s3lyyxcte1"
            aspect="16/9"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* CTA Button */}
        <a
          href="https://libertyfunding.us/survey-split"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #f97316, #ea580c)",
            color: "#fff",
            fontWeight: 800,
            fontSize: 18,
            padding: "18px 40px",
            borderRadius: 4,
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(249,115,22,0.4)",
            marginBottom: 8,
          }}
        >
          Apply For Funding
        </a>
        <p style={{ fontSize: 13, color: "#666", marginTop: 6 }}>
          Click Here To Get Started
        </p>

        {/* Footer */}
        <div style={{ marginTop: 60, borderTop: "1px solid #eee", paddingTop: 20 }}>
          <p style={{ fontSize: 12, color: "#999", marginBottom: 6 }}>
            <a href="#" style={{ color: "#999" }}>Terms Of Service</a>
            {" | "}
            <a href="#" style={{ color: "#999" }}>Privacy Policy</a>
          </p>
          <p style={{ fontSize: 11, color: "#bbb", marginBottom: 4 }}>
            © {new Date().getFullYear()} Liberty Funding. All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "#bbb", marginBottom: 4 }}>
            support@libertyfunding.us
          </p>
          <p style={{ fontSize: 10, color: "#ccc", maxWidth: 500, margin: "0 auto" }}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

// Tell TypeScript about the wistia-player custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        "media-id"?: string;
        aspect?: string;
      }, HTMLElement>;
    }
  }
}
