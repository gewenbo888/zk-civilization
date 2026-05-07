// ===== ZK Civilization OS — interactions =====
(() => {
  const html = document.documentElement;

  // ---- Bilingual / theme toggles ----
  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    try { localStorage.setItem("zk-lang", lang); } catch(_) {}
  };
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  try { const s = localStorage.getItem("zk-lang"); if (s) setLang(s); } catch(_) {}

  const setTheme = (t) => {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-toggle button").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
    try { localStorage.setItem("zk-theme", t); } catch(_) {}
  };
  document.querySelectorAll(".theme-toggle button").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
  try { const s = localStorage.getItem("zk-theme"); if (s) setTheme(s); } catch(_) {}

  // ===== ZK explainer canvas: prover ↔ verifier diagram with recursion =====
  const zk = document.getElementById("zk-canvas");
  if (zk) {
    const W = 1000, H = 360;
    const tlabel = (en, zh, attrs) =>
      `<text ${attrs} lang="en">${en}</text><text ${attrs} lang="zh">${zh}</text>`;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

    // Background grid
    s += `<defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(150,170,200,0.06)" stroke-width="1"/>
      </pattern>
      <linearGradient id="proofGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#ff3aa3"/>
      </linearGradient>
      <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#grid)"/>`;

    // Witness box
    s += `<g>
      <rect x="40" y="80" width="170" height="200" rx="6" fill="var(--bg-3)" stroke="var(--line-2)" stroke-width="1.4"/>
      ${tlabel("WITNESS w", "见证 w", `x="60" y="110" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--gold)" letter-spacing="2"`)}
      ${tlabel("the secret you know", "你所知的秘密", `x="60" y="135" font-family="Space Grotesk, sans-serif" font-size="13" fill="var(--ink-soft)" font-style="italic"`)}
      <text x="60" y="170" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--cyan)">private key</text>
      <text x="60" y="190" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--cyan)">preimage</text>
      <text x="60" y="210" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--cyan)">balance</text>
      <text x="60" y="230" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--cyan)">credentials</text>
      <text x="60" y="250" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--cyan)">model weights</text>
    </g>`;

    // Prover
    s += `<circle cx="320" cy="180" r="65" fill="url(#nodeGlow)"/>`;
    s += `<g>
      <circle cx="320" cy="180" r="48" fill="var(--bg-2)" stroke="var(--cyan)" stroke-width="2"/>
      ${tlabel("PROVER", "证明者", `x="320" y="170" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--cyan)" letter-spacing="2" font-weight="600"`)}
      ${tlabel("P", "P", `x="320" y="200" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="28" fill="var(--ink)" font-weight="700"`)}
    </g>`;
    s += `<path d="M 215 180 L 270 180" stroke="var(--gold)" stroke-width="2" marker-end="url(#arrowG)"/>`;

    // Verifier
    s += `<g>
      <rect x="600" y="125" width="120" height="110" rx="6" fill="var(--bg-2)" stroke="var(--magenta)" stroke-width="2"/>
      ${tlabel("VERIFIER", "验证者", `x="660" y="155" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--magenta)" letter-spacing="2" font-weight="600"`)}
      ${tlabel("V", "V", `x="660" y="195" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="28" fill="var(--ink)" font-weight="700"`)}
      ${tlabel("ms · KB", "毫秒 · KB级", `x="660" y="220" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)"`)}
    </g>`;

    // Proof π crossing the gap
    s += `<g>
      <path d="M 372 180 Q 480 140 600 180" fill="none" stroke="url(#proofGrad)" stroke-width="2.5" stroke-dasharray="8 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="2.6s" repeatCount="indefinite"/>
      </path>
      ${tlabel("π · proof", "π · 证明", `x="490" y="125" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="var(--cyan)" font-weight="600"`)}
      ${tlabel("succinct · zero-knowledge", "简洁 · 零知识", `x="490" y="142" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)" letter-spacing="1"`)}
    </g>`;

    // Public statement
    s += `<g>
      <rect x="240" y="290" width="500" height="48" rx="6" fill="none" stroke="var(--line-2)" stroke-dasharray="4 4"/>
      ${tlabel("public statement x", "公开命题 x", `x="260" y="312" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--gold)" letter-spacing="1.5"`)}
      ${tlabel("∃ w such that C(x, w) = 1", "存在 w 使得 C(x, w) = 1", `x="490" y="324" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="var(--ink)"`)}
    </g>`;

    // Recursion: a small wrap loop showing π_n verifying π_{n-1}
    s += `<g transform="translate(820, 90)">
      <circle r="42" fill="none" stroke="var(--violet)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle r="22" fill="none" stroke="var(--violet)" stroke-width="2"/>
      ${tlabel("recursion", "递归", `x="0" y="-50" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--violet)" letter-spacing="2"`)}
      ${tlabel("π verifies π", "π 验证 π", `x="0" y="4" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--ink)"`)}
      <path d="M 0 -22 A 22 22 0 0 1 22 0" fill="none" stroke="var(--magenta)" stroke-width="2"/>
      <polygon points="0,-3 6,0 0,3" fill="var(--magenta)" transform="translate(22,0) rotate(0)"/>
    </g>
    <defs>
      <marker id="arrowG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--gold)"/>
      </marker>
    </defs>`;

    s += `</svg>`;
    zk.innerHTML = s;
  }

  // ===== Trust evolution stack =====
  const trustEl = document.getElementById("trust-stack");
  if (trustEl && window.TRUST) {
    trustEl.innerHTML = window.TRUST.map((t, i) => `
      <div class="trust-row${t.id === "crypto" ? " peak" : ""}">
        <div class="trust-meta">
          <div class="name"><span lang="en">${t.en}</span><span lang="zh">${t.zh}</span></div>
          <div class="range"><span lang="en">${t.range}</span><span lang="zh">${t.range_zh}</span></div>
          <div class="scale">∼ ${t.scale}</div>
        </div>
        <div class="trust-body">
          <p lang="en">${t.en_desc}</p>
          <p lang="zh">${t.zh_desc}</p>
          <div class="cost"><span lang="en">${t.en_cost}</span><span lang="zh">${t.zh_cost}</span></div>
        </div>
      </div>
    `).join("");
  }

  // ===== Architecture stack =====
  const stackEl = document.getElementById("stack-wrap");
  if (stackEl && window.STACK) {
    // Render top → bottom of stack (highest layer first), so application sits at top
    const reversed = [...window.STACK].reverse();
    stackEl.innerHTML = reversed.map(layer => `
      <div class="stack-row">
        <div class="layer-name"><span lang="en">${layer.en}</span><span lang="zh">${layer.zh}</span></div>
        <div class="layer-bar" style="background: linear-gradient(90deg, ${layer.color}, transparent)"></div>
        <div class="layer-desc"><span lang="en">${layer.en_desc}</span><span lang="zh">${layer.zh_desc}</span></div>
      </div>
    `).join("");
  }

  // ===== Consensus table =====
  const cBody = document.getElementById("consensus-body");
  if (cBody && window.CONSENSUS) {
    cBody.innerHTML = window.CONSENSUS.map(c => `
      <tr${c.zh_name === "Psy 协议" ? ' class="psy"' : ''}>
        <td><span lang="en">${c.en_name}</span><span lang="zh">${c.zh_name}</span></td>
        <td><span lang="en">${c.en_basis}</span><span lang="zh">${c.zh_basis}</span></td>
        <td><span lang="en">${c.en_finality}</span><span lang="zh">${c.zh_finality}</span></td>
        <td><span lang="en">${c.en_zk}</span><span lang="zh">${c.zh_zk}</span></td>
        <td><span lang="en">${c.en_note}</span><span lang="zh">${c.zh_note}</span></td>
      </tr>
    `).join("");
  }

  // ===== Narratives =====
  const nEl = document.getElementById("narratives");
  if (nEl && window.NARRATIVES) {
    nEl.innerHTML = window.NARRATIVES.map(n => `
      <div class="narrative">
        <div class="glyph">${n.id}</div>
        <h3><span lang="en">${n.en}</span><span lang="zh">${n.zh}</span></h3>
        <p lang="en">${n.en_thesis}</p>
        <p lang="zh">${n.zh_thesis}</p>
        <div class="pioneer"><span lang="en">${n.en_pioneer}</span><span lang="zh">${n.zh_pioneer}</span></div>
      </div>
    `).join("");
  }

  // ===== Risks =====
  const rEl = document.getElementById("risks-grid");
  if (rEl && window.RISKS) {
    rEl.innerHTML = window.RISKS.map(r => `
      <div class="card magenta">
        <div class="meta">▲ Risk</div>
        <h3><span lang="en">${r.en}</span><span lang="zh">${r.zh}</span></h3>
        <p lang="en">${r.en_desc}</p>
        <p lang="zh">${r.zh_desc}</p>
      </div>
    `).join("");
  }

  // ===== AI futures =====
  const fEl = document.getElementById("futures-grid");
  if (fEl && window.FUTURES) {
    fEl.innerHTML = window.FUTURES.map(f => `
      <div class="card violet">
        <div class="meta">▶ Future</div>
        <h3><span lang="en">${f.en}</span><span lang="zh">${f.zh}</span></h3>
        <p lang="en">${f.en_desc}</p>
        <p lang="zh">${f.zh_desc}</p>
      </div>
    `).join("");
  }

  // ===== Simulator =====
  // Inputs (0..100): math, crypto, compute, consensus, coordination, intelligence, verification
  // Outputs: trust capacity, scale, sovereignty, fragility
  const sim = document.getElementById("simulator");
  if (sim) {
    const ctrls = {
      math:          document.getElementById("ctrl-math"),
      crypto:        document.getElementById("ctrl-crypto"),
      compute:       document.getElementById("ctrl-compute"),
      consensus:     document.getElementById("ctrl-consensus"),
      coordination:  document.getElementById("ctrl-coordination"),
      intelligence:  document.getElementById("ctrl-intelligence"),
      verification:  document.getElementById("ctrl-verification")
    };
    const update = () => {
      const v = Object.fromEntries(Object.entries(ctrls).map(([k,c]) => [k, parseFloat(c.value)/100]));
      Object.keys(ctrls).forEach(k => {
        const lbl = document.querySelector(`[data-val="${k}"]`);
        if (lbl) lbl.textContent = ctrls[k].value;
      });

      const trust = clamp01(0.3*v.crypto + 0.25*v.verification + 0.2*v.consensus + 0.15*v.math + 0.1*v.coordination - 0.05);
      const scale = clamp01(0.3*v.compute + 0.25*v.coordination + 0.2*v.consensus + 0.15*v.crypto + 0.1*v.intelligence - 0.05);
      const sovereignty = clamp01(0.35*v.crypto + 0.25*v.verification + 0.2*(1 - v.intelligence*0.4) + 0.2*v.math - 0.1);
      const fragility = clamp01(0.3*Math.abs(v.crypto - v.coordination) + 0.25*Math.abs(v.compute - v.verification) + 0.2*v.intelligence + 0.15*(1 - v.consensus) + 0.1);

      const set = (id, val) => {
        const fill = document.querySelector(`[data-meter="${id}"] .bar-fill`);
        const num  = document.querySelector(`[data-meter="${id}"] .num`);
        if (fill) fill.style.width = (val*100).toFixed(0) + "%";
        if (num)  num.textContent  = (val*100).toFixed(0);
      };
      set("trust", trust);
      set("scale", scale);
      set("sovereignty", sovereignty);
      set("fragility", fragility);

      const summaryEn = document.getElementById("sim-summary-en");
      const summaryZh = document.getElementById("sim-summary-zh");
      let label_en, label_zh;
      if (trust > .75 && scale > .7 && sovereignty > .65 && fragility < .45) {
        label_en = `Mathematical civilization — the eventual Psy Protocol target. Math (${pct(v.math)}), cryptography (${pct(v.crypto)}) and verification (${pct(v.verification)}) compound; verifiable AI (${pct(v.intelligence)}) and decentralised coordination (${pct(v.coordination)}) extend trust beyond any one institution. Sovereignty does not require an army to defend it.`;
        label_zh = `数学文明——Psy 协议的终极目标。数学（${pct(v.math)}）、密码学（${pct(v.crypto)}）与验证（${pct(v.verification)}）相互放大；可验证 AI（${pct(v.intelligence)}）与去中心化协调（${pct(v.coordination)}）将信任延伸至任何机构之外。主权无须军队保卫。`;
      } else if (v.compute > .7 && v.crypto < .35) {
        label_en = `Surveillance state archetype — large compute and large coordination, but cryptography weakened. AI capacity outruns verification capacity. The shape of the 2024-vintage platform empires.`;
        label_zh = `监视国家原型——算力与协调皆强，但密码学被削弱。AI 能力超出验证能力。这是2024 年代平台帝国的形态。`;
      } else if (v.crypto > .7 && v.coordination < .35) {
        label_en = `Fortress-cypherpunk archetype — strong cryptography, no social fabric. Each individual is sovereign and disconnected. Resilient against the state, fragile against everything else.`;
        label_zh = `堡垒型密码朋克——密码学强大，社会织物缺失。每位个人皆主权，但彼此断裂。抗国家而脆弱于其余。`;
      } else if (v.verification > .7 && v.intelligence > .7) {
        label_en = `Verifiable AI civilization — every model output ships with a proof. AI agents transact at machine speed without any owner present. The bottleneck is no longer trust; it is the GPU.`;
        label_zh = `可验证 AI 文明——每个模型输出附带证明。AI 代理以机器速度交易，无须任何主人在场。瓶颈不再是信任，而是 GPU。`;
      } else if (fragility > .7) {
        label_en = `High-fragility configuration — components are mismatched in scale. Cryptographic guarantees outrun the social capacity to use them, or vice versa. Most known historical chain failures sit here.`;
        label_zh = `高脆弱配置——各组件规模不匹配。密码学保证超出社会使用能力，或反之。大多数已知的链失败案例落于此区。`;
      } else {
        label_en = `Mixed profile — adjust the dials to model a trust regime: 1990s internet, 2010s platforms, 2020s ZK rollups, or a hypothetical 2040s civilization-scale ledger.`;
        label_zh = `混合画像——调节旋钮以模拟某种信任体制：1990 年代互联网、2010 年代平台、2020 年代 ZK 汇总，或2040 年代假设的文明级账本。`;
      }
      if (summaryEn) summaryEn.textContent = label_en;
      if (summaryZh) summaryZh.textContent = label_zh;
    };
    Object.values(ctrls).forEach(c => c && c.addEventListener("input", update));
    update();
  }

  function clamp01(x){ return Math.max(0, Math.min(1, x)); }
  function pct(x){ return Math.round(x*100) + "%"; }
})();
