import { useEffect, useRef } from "react";

// High-density golden spark particle trail. Renders on a full-screen canvas.
// Disabled on touch devices via CSS (.spark-canvas display:none).
export default function SparkCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, lastX: -9999, lastY: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const m = mouseRef.current;
      const dx = e.clientX - m.lastX;
      const dy = e.clientY - m.lastY;
      const dist = Math.hypot(dx, dy);
      m.x = e.clientX;
      m.y = e.clientY;

      // generate particles based on movement intensity
      if (m.lastX < -1000) {
        m.lastX = m.x;
        m.lastY = m.y;
        return;
      }

      const count = Math.min(8, Math.max(2, Math.floor(dist / 4)));
      for (let i = 0; i < count; i++) {
        // sample along the path
        const t = i / Math.max(1, count - 1);
        const px = m.lastX + dx * t + (Math.random() - 0.5) * 8;
        const py = m.lastY + dy * t + (Math.random() - 0.5) * 8;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.6;
        particlesRef.current.push({
          x: px,
          y: py,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3,
          life: 1,
          decay: 0.012 + Math.random() * 0.018,
          size: 1.4 + Math.random() * 3.2,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.18,
        });
      }
      // clamp particle count for perf
      if (particlesRef.current.length > 600) {
        particlesRef.current.splice(0, particlesRef.current.length - 600);
      }
      m.lastX = m.x;
      m.lastY = m.y;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.025; // gentle gravity
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.rot += p.rotSpeed;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        // glow
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, p.life);
        // outer glow
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 5);
        glow.addColorStop(0, "rgba(244,183,0,0.85)");
        glow.addColorStop(0.4, "rgba(244,183,0,0.35)");
        glow.addColorStop(1, "rgba(244,183,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 5, 0, Math.PI * 2);
        ctx.fill();
        // sparkle core (4-point star)
        ctx.fillStyle = "#fff7d6";
        ctx.beginPath();
        const r = p.size;
        ctx.moveTo(0, -r * 1.6);
        ctx.lineTo(r * 0.4, 0);
        ctx.lineTo(0, r * 1.6);
        ctx.lineTo(-r * 0.4, 0);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#f4b700";
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="spark-canvas" data-testid="spark-cursor-canvas" />;
}
