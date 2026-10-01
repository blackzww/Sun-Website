import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 74, background: "#080a0c", color: "#f6f7f9", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 650, height: 650, borderRadius: 999, right: -250, top: -330, background: "rgba(255,194,28,.16)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#ffc21c", fontSize: 28, fontWeight: 700 }}>SUN · LUAU</div>
      <div style={{ marginTop: 28, display: "flex", fontSize: 78, lineHeight: 1, letterSpacing: -4, fontWeight: 800 }}>Programação, simplificada.</div>
      <div style={{ marginTop: 26, maxWidth: 870, display: "flex", color: "#9aa3ad", fontSize: 30, lineHeight: 1.4 }}>Uma linguagem construída sobre Luau para deixar o código comum mais direto sem esconder o ecossistema original.</div>
    </div>,
    size
  );
}
