import React, { useEffect, useRef } from "react";
import "./HeroBanner.css";
import BannerContent from "./BannerContent";

const rand = (a, b) => a + Math.random() * (b - a);

// Helper: convert lat/lon (in radians) to 2D orthographic projection on circle
function projectLatLon(lat, lon, cx, cy, r, rotation) {
  // rotation: how much to rotate longitude (radians)
  const lonR = lon + rotation;
  // orthographic projection (no perspective)
  const x = cx + r * Math.cos(lat) * Math.sin(lonR);
  const y = cy - r * Math.sin(lat);
  // z value approximate for depth-sorting (cos lat * cos lonR)
  const z = Math.cos(lat) * Math.cos(lonR);
  return { x, y, z };
}

const HeroBanner = () => {
  const canvasRef = useRef(null);
  const networkRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const netCanvas = networkRef.current;
    const nctx = netCanvas.getContext("2d");

    let w = (canvas.width = netCanvas.width = window.innerWidth);
    let h = (canvas.height = netCanvas.height = window.innerHeight);

    // stars
    const stars = [];
    const numStars = 180;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.2,
        a: Math.random() * 0.9 + 0.1,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
      });
    }

    // network nodes and connections (lat/lon in radians)
    const nodes = [];
    const connections = [];
    const numNodes = 18;

    // generate nodes randomly across globe's visible hemisphere
    for (let i = 0; i < numNodes; i++) {
      // lat: -60deg..60deg, lon: -180..180
      const lat = rand(-Math.PI / 2.6, Math.PI / 2.6);
      const lon = rand(-Math.PI, Math.PI);
      nodes.push({ lat, lon });
    }

    // create connections between random pairs
    for (let i = 0; i < 28; i++) {
      const a = Math.floor(Math.random() * numNodes);
      let b = Math.floor(Math.random() * numNodes);
      if (b === a) b = (b + 1) % numNodes;
      const speed = rand(0.0025, 0.007); // dot speed
      const offset = Math.random() * Math.PI * 2;
      connections.push({ a, b, speed, t: Math.random(), offset });
    }

    // rotation state
    let rotation = 0; // in radians
    const rotationSpeed = 0.0025; // positive rotates east->west

    // resizing
const resize = () => {
  const dpr = window.devicePixelRatio || 1;
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = netCanvas.width = w * dpr;
  canvas.height = netCanvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  nctx.scale(dpr, dpr);
};

    window.addEventListener("resize", resize);

    const drawStars = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const drawNetwork = () => {
      nctx.clearRect(0, 0, w, h);

      // globe visual reference (center & radius should match CSS globe position)
      // compute globe center & radius based on .earth element geometry if available
      let globeRect = null;
      if (globeRef.current)
        globeRect = globeRef.current.getBoundingClientRect();

      // scrollY যোগ করা হয়েছে যাতে স্ক্রলে অবস্থান না বদলায়
      const scrollY = window.scrollY || window.pageYOffset;
      const cx = globeRect ? globeRect.left + globeRect.width / 2 : w / 2;
      const cy = globeRect
        ? globeRect.top + scrollY + globeRect.height / 2
        : h + 200;

      const r = globeRect ? globeRect.width / 2 : Math.max(w, h) * 0.55;

      // draw faint grid lines on globe (optional subtle)
      nctx.save();
      nctx.globalCompositeOperation = "lighter";
      nctx.lineWidth = 0.6;
      nctx.strokeStyle = "rgba(140,170,255,0.02)";

      // optional faint great-circle lines for subtle depth
      for (let g = 0; g < 6; g++) {
        nctx.beginPath();
        const latg = (g / 6 - 0.5) * Math.PI;
        for (let i = 0; i <= 120; i++) {
          const lonp = (i / 120) * Math.PI * 2 - Math.PI;
          const p = projectLatLon(latg, lonp, cx, cy, r, rotation);
          if (i === 0) nctx.moveTo(p.x, p.y);
          else nctx.lineTo(p.x, p.y);
        }
        nctx.stroke();
      }
      nctx.restore();

      // compute projected node positions and depth
      const projected = nodes.map((n) =>
        projectLatLon(n.lat, n.lon, cx, cy, r, rotation)
      );

      // draw connections (sorted by depth average to create overlap)
      const connWithDepth = connections.map((c) => {
        const p1 = projected[c.a];
        const p2 = projected[c.b];
        const depth = (p1.z + p2.z) / 2; // larger z -> closer
        return { ...c, p1, p2, depth };
      });
      connWithDepth.sort((a, b) => a.depth - b.depth); // draw far ones first

      for (const conn of connWithDepth) {
        const { p1, p2 } = conn;

        // skip connections that are completely on the far side (z < 0) to keep believable
        if (p1.z < -0.05 && p2.z < -0.05) continue;

        // gradient line
        const grad = nctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        grad.addColorStop(0, "rgba(100,220,255,0.05)");
        grad.addColorStop(0.5, "rgba(80,200,255,0.12)");
        grad.addColorStop(1, "rgba(0,255,200,0.05)");

        nctx.strokeStyle = grad;
        // thickness depends on depth (closer lines thicker)
        const width = 0.6 + Math.max(0, conn.depth) * 2.6;
        nctx.lineWidth = width;

        // draw a curved arc (quadratic) outward from globe center to simulate arc
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        const vx = mx - cx;
        const vy = my - cy;
        const dist = Math.sqrt(vx * vx + vy * vy);
        const outward = Math.min(160, r * 0.25);
        const factor = 1 + (1 - conn.depth) * 0.6; // make far arcs a bit higher
        const cxp = mx + (vx / (dist || 1)) * outward * factor;
        const cyp = my + (vy / (dist || 1)) * outward * factor;

        nctx.beginPath();
        nctx.moveTo(p1.x, p1.y);
        nctx.quadraticCurveTo(cxp, cyp, p2.x, p2.y);
        nctx.stroke();

        // animate small pulsing dot moving along curve
        conn.t = (conn.t + conn.speed) % 1;
        // compute position on quadratic curve at t using param t
        const t = (Math.sin(conn.t * Math.PI * 2 + conn.offset) + 1) / 2; // 0..1 oscillating
        // Quadratic interpolation: B(t) = (1-t)^2 P0 + 2(1-t)t C + t^2 P1
        const x =
          (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * cxp + t * t * p2.x;
        const y =
          (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cyp + t * t * p2.y;
        // dot size based on depth (closer -> larger)
        const dotSize = 1.8 + Math.max(0, conn.depth) * 3.5;
        nctx.beginPath();
        nctx.fillStyle = `rgba(140,230,255,${
          0.9 * (0.3 + Math.abs(Math.sin(conn.t * 6)))
        })`;
        nctx.shadowColor = "rgba(80,200,255,0.9)";
        nctx.shadowBlur = 8;
        nctx.arc(x, y, dotSize, 0, Math.PI * 2);
        nctx.fill();
        nctx.shadowBlur = 0;
      }

      // draw nodes as glowing points (draw closer nodes last)
      const projSorted = projected
        .map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.z - b.p.z);
      for (const { p, i } of projSorted) {
        // only draw nodes that are at least partially visible (z > -0.1)
        if (p.z < -0.2) continue;
        const size = 2 + Math.max(0, p.z) * 4;
        // glow
        nctx.beginPath();
        nctx.fillStyle = `rgba(110,210,255,${0.12 + 0.6 * Math.max(0, p.z)})`;
        nctx.shadowColor = "rgba(80,200,255,0.9)";
        nctx.shadowBlur = 16 * Math.max(0, p.z) + 2;
        nctx.arc(p.x, p.y, size * 2.2, 0, Math.PI * 2);
        nctx.fill();
        // core
        nctx.shadowBlur = 0;
        nctx.beginPath();
        nctx.fillStyle = `rgba(180,240,255,${0.8})`;
        nctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        nctx.fill();
      }
    };

    // animation loop
    let rafId = 0;
    const loop = () => {
      rotation += rotationSpeed;
      drawStars();
      drawNetwork();
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hero-banner">
      {/* background stars canvas */}
      <canvas ref={canvasRef} className="stars" />

      {/* network + dots canvas (on top of stars, under content) */}
      <canvas ref={networkRef} className="network" />

      {/* CSS globe (visual) */}
      <div className="earth-wrapper">
        <div className="earth" ref={globeRef} />
        <div className="earth-top-light" />
        <div className="earth-glow" />
      </div>

      {/* content */}
      <BannerContent />

      {/* <section>
  <div class='wave wave1'></div>
  <div class='wave wave2'></div>
  <div class='wave wave3'></div>
  <div class='wave wave4'></div>
</section> */}
 
      
    </div>
    
  );
};

export default HeroBanner;
