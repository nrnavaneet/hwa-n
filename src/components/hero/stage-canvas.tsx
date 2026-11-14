"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type StageCanvasProps = {
  onReady: () => void;
  onFail: () => void;
};

function makeGlowTexture(inner: string, outer: string): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, inner);
    gradient.addColorStop(0.35, outer);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeFlameTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const glow = ctx.createRadialGradient(64, 170, 6, 64, 160, 110);
    glow.addColorStop(0, "rgba(255,255,240,1)");
    glow.addColorStop(0.25, "rgba(255,220,150,0.95)");
    glow.addColorStop(0.55, "rgba(255,160,64,0.55)");
    glow.addColorStop(1, "rgba(255,120,40,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.moveTo(64, 10);
    ctx.bezierCurveTo(96, 82, 116, 150, 92, 198);
    ctx.bezierCurveTo(82, 219, 46, 219, 36, 198);
    ctx.bezierCurveTo(12, 150, 32, 82, 64, 10);
    ctx.fill();
    const core = ctx.createRadialGradient(64, 178, 2, 64, 174, 54);
    core.addColorStop(0, "rgba(255,255,255,1)");
    core.addColorStop(0.6, "rgba(255,241,190,0.85)");
    core.addColorStop(1, "rgba(255,205,120,0)");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.ellipse(64, 176, 26, 48, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeScreenTexture(): THREE.CanvasTexture {
  const width = 1024;
  const height = 640;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(410, 310, 30, 470, 320, 680);
    gradient.addColorStop(0, "#ffecc9");
    gradient.addColorStop(0.22, "#f5d8a6");
    gradient.addColorStop(0.5, "#d99a5c");
    gradient.addColorStop(0.78, "#7c4526");
    gradient.addColorStop(1, "#1c0d09");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 220; i += 1) {
      const x = Math.random() * width;
      const alpha = 0.015 + Math.random() * 0.03;
      ctx.strokeStyle = `rgba(40, 16, 8, ${alpha})`;
      ctx.lineWidth = Math.random() < 0.85 ? 1 : 2;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (Math.random() - 0.5) * 30, height);
      ctx.stroke();
    }
    for (let i = 0; i < 40; i += 1) {
      const y = Math.random() * height;
      ctx.strokeStyle = `rgba(255, 233, 195, ${0.02 + Math.random() * 0.025})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y + (Math.random() - 0.5) * 12);
      ctx.stroke();
    }

    const vignette = ctx.createRadialGradient(470, 320, 240, 470, 320, 760);
    vignette.addColorStop(0, "rgba(20,8,5,0)");
    vignette.addColorStop(0.7, "rgba(20,8,5,0.35)");
    vignette.addColorStop(1, "rgba(10,4,3,0.9)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeFloorTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(256, 256, 10, 256, 256, 256);
    gradient.addColorStop(0, "rgba(239, 178, 95, 0.32)");
    gradient.addColorStop(0.4, "rgba(150, 85, 40, 0.18)");
    gradient.addColorStop(1, "rgba(15, 8, 8, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

async function makeSilhouetteTexture(): Promise<THREE.CanvasTexture> {
  const image = new Image();
  image.src = "/art/dancer.svg";
  await image.decode();
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 750;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.filter = "blur(7px)";
    ctx.drawImage(image, 0, 0, 600, 750);
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 600, 750);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function StageCanvas({ onReady, onFail }: StageCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      onFail();
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x09070a, 0.035);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    camera.position.set(0, 0.18, 8.4);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.opacity = "0";
    renderer.domElement.style.transition = "opacity 1.2s ease";
    host.appendChild(renderer.domElement);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];
    const trackTexture = <T extends THREE.Texture>(texture: T): T => {
      textures.push(texture);
      return texture;
    };
    const trackMaterial = <T extends THREE.Material>(material: T): T => {
      materials.push(material);
      return material;
    };

    const screenTexture = trackTexture(makeScreenTexture());
    const screenGeometry = new THREE.PlaneGeometry(9.4, 5.8);
    geometries.push(screenGeometry);
    const screenMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false }),
    );
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.1, -2.5);
    scene.add(screen);

    const frameMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0x583522,
        roughness: 0.52,
        metalness: 0.28,
        emissive: 0x1a0d06,
        emissiveIntensity: 0.9,
      }),
    );
    const framePieces: Array<[number, number, number, number, number, number]> = [
      [9.8, 0.18, 0.3, 0, 3.0, -2.48],
      [9.8, 0.18, 0.3, 0, -2.8, -2.48],
      [0.18, 5.8, 0.3, -4.8, 0.1, -2.48],
      [0.18, 5.8, 0.3, 4.8, 0.1, -2.48],
    ];
    framePieces.forEach(([w, h, d, x, y, z]) => {
      const geometry = new THREE.BoxGeometry(w, h, d);
      geometries.push(geometry);
      const mesh = new THREE.Mesh(geometry, frameMaterial);
      mesh.position.set(x, y, z);
      scene.add(mesh);
    });

    const trimMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0xa87538,
        roughness: 0.34,
        metalness: 0.62,
        emissive: 0x2a1608,
        emissiveIntensity: 0.7,
      }),
    );
    const trimPieces: Array<[number, number, number, number, number, number]> = [
      [9.44, 0.035, 0.035, 0, 2.985, -2.44],
      [9.44, 0.035, 0.035, 0, -2.885, -2.44],
      [0.035, 5.87, 0.035, -4.69, 0.1, -2.44],
      [0.035, 5.87, 0.035, 4.69, 0.1, -2.44],
    ];
    trimPieces.forEach(([w, h, d, x, y, z]) => {
      const geometry = new THREE.BoxGeometry(w, h, d);
      geometries.push(geometry);
      const mesh = new THREE.Mesh(geometry, trimMaterial);
      mesh.position.set(x, y, z);
      scene.add(mesh);
    });

    const floorTexture = trackTexture(makeFloorTexture());
    const floorGeometry = new THREE.CircleGeometry(5.2, 64);
    geometries.push(floorGeometry);
    const floorMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({
        map: floorTexture,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(1.7, -2.05, 0.5);
    scene.add(floor);

    const ambient = new THREE.HemisphereLight(0xffd9a4, 0x120a12, 0.55);
    scene.add(ambient);
    const rim = new THREE.DirectionalLight(0x41588e, 0.8);
    rim.position.set(5, 2, 3);
    scene.add(rim);

    const puppetMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        toneMapped: false,
        depthWrite: false,
      }),
    );
    const puppetGeometry = new THREE.PlaneGeometry(3.78, 4.725);
    geometries.push(puppetGeometry);
    const puppet = new THREE.Mesh(puppetGeometry, puppetMaterial);
    puppet.position.set(0.65, -0.18, 0.2);
    puppet.rotation.y = -0.07;
    puppet.renderOrder = 3;
    scene.add(puppet);

    const shadowMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
        color: 0x120805,
      }),
    );
    const shadowGeometry = new THREE.PlaneGeometry(4.05, 5.06);
    geometries.push(shadowGeometry);
    const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadow.position.set(-0.12, -0.36, -2.4);
    shadow.renderOrder = 2;
    scene.add(shadow);

    const screenGlowTexture = trackTexture(
      makeGlowTexture("rgba(255,213,144,0.55)", "rgba(255,154,70,0.25)"),
    );
    const screenGlowMaterial = trackMaterial(
      new THREE.SpriteMaterial({
        map: screenGlowTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
      }),
    );
    const screenGlow = new THREE.Sprite(screenGlowMaterial);
    screenGlow.position.set(0.35, -0.1, -2.35);
    screenGlow.scale.set(6.4, 5.2, 1);
    scene.add(screenGlow);

    const lampGroup = new THREE.Group();
    lampGroup.position.set(2.55, -2.02, 1.45);
    lampGroup.scale.setScalar(1.08);
    lampGroup.rotation.y = -0.18;
    scene.add(lampGroup);

    const brassMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0xb67d36,
        metalness: 0.82,
        roughness: 0.32,
        side: THREE.DoubleSide,
      }),
    );
    const lampProfile = [
      new THREE.Vector2(0.001, 0.02),
      new THREE.Vector2(0.07, 0.02),
      new THREE.Vector2(0.14, 0.035),
      new THREE.Vector2(0.21, 0.07),
      new THREE.Vector2(0.26, 0.12),
      new THREE.Vector2(0.27, 0.15),
      new THREE.Vector2(0.255, 0.155),
      new THREE.Vector2(0.24, 0.14),
      new THREE.Vector2(0.22, 0.11),
      new THREE.Vector2(0.17, 0.08),
      new THREE.Vector2(0.1, 0.065),
      new THREE.Vector2(0.001, 0.06),
    ];
    const bowlGeometry = new THREE.LatheGeometry(lampProfile, 48);
    geometries.push(bowlGeometry);
    const bowl = new THREE.Mesh(bowlGeometry, brassMaterial);
    lampGroup.add(bowl);

    const baseGeometry = new THREE.CylinderGeometry(0.07, 0.11, 0.07, 32);
    geometries.push(baseGeometry);
    const base = new THREE.Mesh(baseGeometry, brassMaterial);
    base.position.y = -0.015;
    lampGroup.add(base);

    const wickGeometry = new THREE.CylinderGeometry(0.011, 0.016, 0.12, 8);
    geometries.push(wickGeometry);
    const wickMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({ color: 0x2a150a, roughness: 0.9 }),
    );
    const wick = new THREE.Mesh(wickGeometry, wickMaterial);
    wick.position.set(0.225, 0.19, 0);
    wick.rotation.z = -0.22;
    lampGroup.add(wick);

    const flameTexture = trackTexture(makeFlameTexture());
    const flameMaterial = trackMaterial(
      new THREE.SpriteMaterial({
        map: flameTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        opacity: 0.98,
      }),
    );
    const flame = new THREE.Sprite(flameMaterial);
    flame.position.set(0.235, 0.33, 0.02);
    flame.scale.set(0.31, 0.52, 1);
    lampGroup.add(flame);

    const glowTexture = trackTexture(
      makeGlowTexture("rgba(255,222,160,0.65)", "rgba(255,140,60,0.28)"),
    );
    const lampGlowMaterial = trackMaterial(
      new THREE.SpriteMaterial({
        map: glowTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      }),
    );
    const lampGlow = new THREE.Sprite(lampGlowMaterial);
    lampGlow.position.set(0.235, 0.3, 0);
    lampGlow.scale.set(2.9, 2.9, 1);
    lampGroup.add(lampGlow);

    const lampLight = new THREE.PointLight(0xffb062, 24, 18, 2);
    lampLight.position.set(0.235, 0.34, 0.05);
    lampGroup.add(lampLight);
    const fillLight = new THREE.PointLight(0xff9b4d, 9, 12, 2);
    fillLight.position.set(-3.4, 0.5, 3);
    scene.add(fillLight);

    const dustTexture = trackTexture(
      makeGlowTexture("rgba(255,238,206,0.85)", "rgba(255,190,110,0.22)"),
    );
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 170;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustPhases = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i += 1) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 10;
      dustPositions[i * 3 + 1] = (Math.random() - 0.35) * 7;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      dustPhases[i] = Math.random() * Math.PI * 2;
    }
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    geometries.push(dustGeometry);
    const dustMaterial = trackMaterial(
      new THREE.PointsMaterial({
        map: dustTexture,
        size: 0.055,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0xffd49a,
      }),
    );
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    const emberTexture = trackTexture(
      makeGlowTexture("rgba(255,226,160,1)", "rgba(255,120,40,0.35)"),
    );
    const emberGeometry = new THREE.BufferGeometry();
    const emberCount = 26;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberPhases = new Float32Array(emberCount);
    for (let i = 0; i < emberCount; i += 1) {
      emberPositions[i * 3] = 2.55 + (Math.random() - 0.5) * 0.5;
      emberPositions[i * 3 + 1] = -1.8 + Math.random() * 0.8;
      emberPositions[i * 3 + 2] = 1.45 + (Math.random() - 0.5) * 0.4;
      emberPhases[i] = Math.random() * Math.PI * 2;
    }
    emberGeometry.setAttribute("position", new THREE.BufferAttribute(emberPositions, 3));
    geometries.push(emberGeometry);
    const emberMaterial = trackMaterial(
      new THREE.PointsMaterial({
        map: emberTexture,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0xffb066,
      }),
    );
    const embers = new THREE.Points(emberGeometry, emberMaterial);
    scene.add(embers);

    let puppetLoaded = false;
    let disposed = false;

    const loader = new THREE.TextureLoader();
    loader.load(
      "/art/dancer.svg",
      (texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        trackTexture(texture);
        puppetMaterial.map = texture;
        puppetMaterial.opacity = 0.99;
        puppetMaterial.needsUpdate = true;
        puppetLoaded = true;
        renderer.domElement.style.opacity = "1";
        onReady();
      },
      undefined,
      () => {
        if (!disposed) onFail();
      },
    );

    makeSilhouetteTexture()
      .then((texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        trackTexture(texture);
        shadowMaterial.map = texture;
        shadowMaterial.opacity = 0.5;
        shadowMaterial.needsUpdate = true;
      })
      .catch(() => {
        /* the shadow is a bonus */
      });

    const cameraBase = new THREE.Vector3(0, 0.18, 8.4);
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const onPointerLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.02 },
    );
    observer.observe(host);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width / height < 0.9 ? 10.6 : 8.4;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let elapsed = 0;
    let frame = 0;
    let previousTime = performance.now();
    const dustAttribute = dustGeometry.getAttribute("position") as THREE.BufferAttribute;
    const emberAttribute = emberGeometry.getAttribute("position") as THREE.BufferAttribute;

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      if (document.hidden || !visible) {
        previousTime = performance.now();
        return;
      }
      const now = performance.now();
      const delta = Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;
      elapsed += delta;
      pointer.x += (pointerTarget.x - pointer.x) * 0.045;
      pointer.y += (pointerTarget.y - pointer.y) * 0.045;

      const flicker =
        0.92 + Math.sin(elapsed * 10.7) * 0.045 + Math.sin(elapsed * 21.3 + 1.2) * 0.025;
      flame.scale.set(0.31 * (0.94 + Math.sin(elapsed * 13) * 0.03), 0.52 * flicker, 1);
      flame.material.rotation = Math.sin(elapsed * 5.3) * 0.035;
      lampLight.intensity = 22 + flicker * 5;
      lampGlowMaterial.opacity = 0.34 + flicker * 0.08;
      screenGlowMaterial.opacity = 0.18 + flicker * 0.04;

      if (!reduced) {
        puppet.rotation.y = -0.07 + Math.sin(elapsed * 0.34) * 0.016 + pointer.x * 0.05;
        puppet.rotation.z = Math.sin(elapsed * 0.47) * 0.006;
        puppet.position.y = -0.18 + Math.sin(elapsed * 0.6) * 0.025;
        shadow.position.x = -0.12 - pointer.x * 0.22 + Math.sin(elapsed * 0.34) * 0.03;
        shadow.position.y = -0.36 - Math.sin(elapsed * 0.6) * 0.03;

        const dustPositionsRef = dustAttribute.array as Float32Array;
        for (let i = 0; i < dustCount; i += 1) {
          dustPositionsRef[i * 3] += Math.sin(elapsed * 0.32 + dustPhases[i]) * 0.0007;
          dustPositionsRef[i * 3 + 1] += 0.0016 + (i % 5) * 0.0002;
          if (dustPositionsRef[i * 3 + 1] > 3.6) dustPositionsRef[i * 3 + 1] = -3.6;
        }
        dustAttribute.needsUpdate = true;

        const emberPositionsRef = emberAttribute.array as Float32Array;
        for (let i = 0; i < emberCount; i += 1) {
          emberPositionsRef[i * 3] += Math.sin(elapsed * 0.9 + emberPhases[i]) * 0.0009;
          emberPositionsRef[i * 3 + 1] += 0.004 + (i % 4) * 0.0006;
          if (emberPositionsRef[i * 3 + 1] > 1.1) {
            emberPositionsRef[i * 3 + 1] = -1.72;
            emberPositionsRef[i * 3] = 2.55 + (Math.random() - 0.5) * 0.5;
          }
        }
        emberAttribute.needsUpdate = true;
      }

      camera.position.x += (cameraBase.x + pointer.x * 0.32 - camera.position.x) * 0.035;
      camera.position.y += (cameraBase.y - pointer.y * 0.16 - camera.position.y) * 0.035;
      camera.lookAt(0, -0.06, 0);

      renderer.render(scene, camera);
    };

    resize();
    renderer.render(scene, camera);
    animate();
    if (!puppetLoaded && !reduced) {
      renderer.render(scene, camera);
    }

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      observer.disconnect();
      resizeObserver.disconnect();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onReady, onFail]);

  return <div ref={hostRef} className="hero-stage__canvas" />;
}
