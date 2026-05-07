// ===== Trust evolution layers =====
window.TRUST = [
  {
    id: "kin", en: "Kinship", zh: "血缘",
    range: "−10000 — −3000",
    range_zh: "公元前一万年—前三千年",
    scale: "30 — 150",
    en_desc: "You trust those who share your gene pool. Hunter-gatherer bands, lineage segments. Trust radius is bounded by Dunbar's number.",
    zh_desc: "你信任与你共享基因池的人。狩猎采集小群、宗族分支。信任半径受邓巴数限制。",
    en_cost: "Cannot scale beyond a band; scales out by intermarriage and feud.",
    zh_cost: "无法超越部族；通过通婚与世仇向外扩展。"
  },
  {
    id: "religion", en: "Religion", zh: "宗教",
    range: "−3000 — 1500",
    range_zh: "公元前三千年—公元1500年",
    scale: "10⁶ — 10⁸",
    en_desc: "You trust strangers who share your god, your law, your eschatology. Brahmins, churches, mosques, sangha. The first technology that lets a million people cooperate without meeting.",
    zh_desc: "你信任与你共享神祇、律法、末世论的陌生人。婆罗门、教会、清真寺、僧团。这是第一项让百万人在素未谋面的情况下协作的技术。",
    en_cost: "Schism, heresy, holy war. The cost of expanding the trust set is purifying it.",
    zh_cost: "分裂、异端、圣战。扩展信任集合的代价是净化它。"
  },
  {
    id: "empire", en: "Empire", zh: "帝国",
    range: "−500 — 1900",
    range_zh: "公元前500年—公元1900年",
    scale: "10⁷",
    en_desc: "Standing armies, written law, taxation, public roads. The Persian, Roman, Han, Mauryan and Tang empires built the first scalable bureaucracies — extending kinship logic to people whose names you'll never know.",
    zh_desc: "常备军、成文法、税收、官道。波斯、罗马、汉、孔雀、唐五大帝国建立了首批可扩展的官僚体系——将血缘逻辑延伸至你永远不会认识的人。",
    en_cost: "Coercion, surveillance, slavery. Trust by hierarchy is trust at swordpoint.",
    zh_cost: "强制、监视、奴役。等级制下的信任，是刀尖下的信任。"
  },
  {
    id: "bureaucracy", en: "Modern Bureaucracy", zh: "现代官僚",
    range: "1500 — present",
    range_zh: "1500年至今",
    scale: "10⁸",
    en_desc: "Weberian impersonal rule. Birth certificates, passports, land registries, tax IDs. The state becomes a database, and you become a row.",
    zh_desc: "韦伯式的非人格化统治。出生证、护照、地籍、税号。国家成为数据库，你成为其中一行。",
    en_cost: "Files lose people. Stateless persons exist in the gaps. The system you trust has limited error-correction.",
    zh_cost: "档案使人消失。无国籍者存在于罅隙之中。你所信任的系统，纠错能力有限。"
  },
  {
    id: "bank", en: "Bank & Corporation", zh: "银行与公司",
    range: "1600 — present",
    range_zh: "1600年至今",
    scale: "10⁹",
    en_desc: "Joint-stock equity, deposit insurance, double-entry accounting, audited financial statements. Capital flows across continents because you trust the auditor, not the captain of the ship.",
    zh_desc: "股份制、存款保险、复式记账、审计财报。资本得以横跨大洋流动，因为你信任的是审计师，而不是船长。",
    en_cost: "Audits are gameable; banks fail; private institutional trust is opaque.",
    zh_cost: "审计可被操弄、银行会倒闭、私人机构的信任是不透明的。"
  },
  {
    id: "platform", en: "Digital Platforms", zh: "数字平台",
    range: "1995 — present",
    range_zh: "1995年至今",
    scale: "10⁹+",
    en_desc: "You trust eBay's reputation graph, Airbnb's reviews, Stripe's API, Uber's ratings. The platform replaces the bureau as the trust referee — and extracts a 30% rent for the service.",
    zh_desc: "你信任的是 eBay 的声誉图谱、Airbnb 的评论、Stripe 的 API、Uber 的评分。平台替代官僚成为信任的仲裁者——并以三成抽成作为代价。",
    en_cost: "Platform capture, deplatforming, opaque algorithmic moderation. The new bureaucracy doesn't even acknowledge it is one.",
    zh_cost: "平台俘获、封号、不透明的算法治理。新官僚甚至不承认自己是官僚。"
  },
  {
    id: "crypto", en: "Cryptographic", zh: "密码学",
    range: "2009 — emerging",
    range_zh: "2009年起，仍在涌现",
    scale: "10¹⁰",
    en_desc: "You trust the math, not the institution. Bitcoin verifies a payment; Ethereum verifies a contract; a zk-rollup verifies a million transactions in one proof. The trust referee is now a polynomial.",
    zh_desc: "你信任的是数学，不是机构。比特币验证一笔支付，以太坊验证一个合约，zk-rollup 用一个证明验证百万笔交易。信任的仲裁者，是一个多项式。",
    en_cost: "Proving stacks centralise; key management is brutal; the math is correct but the social layer is not.",
    zh_cost: "证明栈趋于集中、密钥管理极为残酷；数学无误，但社会层未必。"
  }
];

// ===== Psy Protocol architecture layers (bottom → top) =====
window.STACK = [
  {
    id: "field", en: "Field & Curve Layer", zh: "有限域与曲线层",
    en_desc: "Goldilocks-64 prime field, BN254 / BLS12-381 curves. The arithmetic substrate every proof is built on.",
    zh_desc: "Goldilocks-64 素域、BN254 / BLS12-381 椭圆曲线。每个证明都建造其上的算术基质。",
    color: "#ff3aa3"
  },
  {
    id: "hash", en: "Hash & Commitment Layer", zh: "哈希与承诺层",
    en_desc: "Poseidon, Rescue, Reinforced Concrete. Field-native hashes that are 50–100× cheaper inside a circuit than SHA-256.",
    zh_desc: "Poseidon、Rescue、Reinforced Concrete 等域原生哈希。在电路内比 SHA-256 便宜 50—100 倍。",
    color: "#fbc94e"
  },
  {
    id: "circuit", en: "Circuit & IR Layer", zh: "电路与中间表示层",
    en_desc: "R1CS, Plonk gates, AIR, custom gates. The intermediate representation that your high-level program is compiled into.",
    zh_desc: "R1CS、Plonk 门、AIR、自定义门。高级程序被编译成的中间表示。",
    color: "#00d4ff"
  },
  {
    id: "prover", en: "Prover Layer", zh: "证明生成层",
    en_desc: "Plonky2, Plonky3, Halo2, RISC Zero, SP1. The CPU-or-GPU machinery that turns a witness + circuit into a constant-size proof.",
    zh_desc: "Plonky2、Plonky3、Halo2、RISC Zero、SP1。把见证+电路转化为常数大小证明的 CPU/GPU 引擎。",
    color: "#7eaad6"
  },
  {
    id: "recursion", en: "Recursion Layer", zh: "递归层",
    en_desc: "A proof that verifies another proof. Lets you compress an unbounded computation into one final π. The technical heart of Psy Protocol.",
    zh_desc: "用一个证明来验证另一个证明。可将无界计算压缩为单一的最终 π。这是 Psy 协议的技术核心。",
    color: "#ff7a3a"
  },
  {
    id: "consensus", en: "Consensus & Settlement Layer", zh: "共识与结算层",
    en_desc: "Where the final π is anchored — Ethereum L1, a sovereign rollup, a sovereign chain. The social layer that gives the math civic force.",
    zh_desc: "最终 π 落锚之处——以太坊 L1、主权汇总链、主权链。是赋予数学公民效力的社会层。",
    color: "#5cb1b1"
  },
  {
    id: "app", en: "Application Layer", zh: "应用层",
    en_desc: "Private payments, ZK identity, ZK-rollup execution, AI inference proofs, governance, voting, attestations. What civilization actually uses.",
    zh_desc: "私密支付、ZK 身份、ZK 汇总执行、AI 推理证明、治理、投票、属性证明。文明真正使用的东西。",
    color: "#a07ad6"
  }
];

// ===== Consensus models =====
window.CONSENSUS = [
  {
    en_name: "Bitcoin · Nakamoto PoW", zh_name: "比特币 · 中本聪 PoW",
    en_basis: "Energy → block proposal", zh_basis: "能量换出块权",
    en_finality: "Probabilistic, ~1 hour", zh_finality: "概率性，~1 小时",
    en_zk: "—", zh_zk: "—",
    en_note: "First scalable Sybil-resistant system. Trust is anchored in physical electricity.",
    zh_note: "首个可扩展的抗女巫系统。信任锚定在物理电力。"
  },
  {
    en_name: "Ethereum · PoS + LMD-GHOST", zh_name: "以太坊 · PoS + LMD-GHOST",
    en_basis: "ETH stake + slashing", zh_basis: "ETH 质押与惩罚",
    en_finality: "Deterministic, 12.8 min", zh_finality: "确定性，12.8 分钟",
    en_zk: "ZK-EVM, validity rollups", zh_zk: "ZK-EVM、有效性汇总",
    en_note: "Scaled by treating execution as someone else's problem; settlement is the only thing the L1 sells.",
    zh_note: "以'把执行交给别人'实现扩展；L1 只出售结算。"
  },
  {
    en_name: "Optimistic Rollups", zh_name: "乐观汇总",
    en_basis: "Fault proofs, 7-day delay", zh_basis: "欺诈证明，七日延期",
    en_finality: "Effective: 7 days", zh_finality: "有效性确认：7 日",
    en_zk: "Indirect — trust via challenge",
    zh_zk: "间接——通过挑战机制",
    en_note: "Cheap for the prover, expensive for the user who wants to exit.",
    zh_note: "对证明者便宜，对急于退出的用户昂贵。"
  },
  {
    en_name: "ZK Rollups (Validity)", zh_name: "ZK 汇总（有效性证明）",
    en_basis: "Succinct proof per batch", zh_basis: "每批一个简洁证明",
    en_finality: "L1 inclusion + verify", zh_finality: "L1 入块 + 验证",
    en_zk: "Native — every state delta is proven",
    zh_zk: "原生——每个状态变更都被证明",
    en_note: "Optimal in the long run: the verifier doesn't have to trust anyone, including the prover.",
    zh_note: "长期最优：验证者无需信任任何人，包括证明者本人。"
  },
  {
    en_name: "Psy Protocol", zh_name: "Psy 协议",
    en_basis: "Recursive proofs, decentralised provers", zh_basis: "递归证明、去中心化证明者",
    en_finality: "Single proof at L1", zh_finality: "L1 单一证明",
    en_zk: "Civilization-scale recursion", zh_zk: "文明级递归",
    en_note: "A coordination fabric: any computation, any chain, any AI inference — collapsed into one π and settled once.",
    zh_note: "一种协调织物：任意计算、任意链、任意 AI 推理——皆可坍缩为单一 π，仅需一次结算。"
  }
];

// ===== Seven ZK narratives =====
window.NARRATIVES = [
  {
    id: "A", en: "Privacy as freedom", zh: "隐私即自由",
    en_thesis: "Surveillance is the prerequisite of authoritarianism. ZK gives you a payments and identity system that is verifiable but unobservable.",
    zh_thesis: "监视是威权的前提。ZK 给你一个可验证但不可被观察的支付与身份系统。",
    en_pioneer: "Cypherpunks, Zcash, Tornado Cash, Aztec",
    zh_pioneer: "密码朋克、Zcash、Tornado Cash、Aztec"
  },
  {
    id: "B", en: "Trustless coordination", zh: "无信任协调",
    en_thesis: "If counterparties cannot defect (because the rules are enforced by math), they cooperate at a scale impossible for institutions.",
    zh_thesis: "若交易对手无法违约（规则由数学强制执行），其协作规模可超越任何机构。",
    en_pioneer: "Bitcoin whitepaper, Ethereum smart contracts",
    zh_pioneer: "《比特币白皮书》、以太坊智能合约"
  },
  {
    id: "C", en: "Programmable truth", zh: "可编程真理",
    en_thesis: "Truth becomes a public good with a market. Any claim — including AI outputs — becomes accompanied by a proof of how it was produced.",
    zh_thesis: "真理变为带市场的公共品。任何主张——包括 AI 输出——都附带一份关于其生成方式的证明。",
    en_pioneer: "ZK-ML, attestation protocols, verifiable AI",
    zh_pioneer: "ZK-ML、证明协议、可验证 AI"
  },
  {
    id: "D", en: "Math replacing institutions", zh: "数学取代机构",
    en_thesis: "Banks, central registries, courts and notaries are replaced by short programs whose outputs are proofs.",
    zh_thesis: "银行、中央登记处、法院与公证由短程序替代，其输出即为证明。",
    en_pioneer: "DeFi summer 2020, on-chain identity protocols",
    zh_pioneer: "2020 年 DeFi 之夏、链上身份协议"
  },
  {
    id: "E", en: "Network civilization", zh: "网络文明",
    en_thesis: "A polity is a graph of cryptographically verified relationships, not a contiguous territory. The nation is reorganised around protocol membership.",
    zh_thesis: "政体是一张密码学验证关系的图，而非连续的领土。国族被重组为'协议成员'。",
    en_pioneer: "Network state thesis (Srinivasan), DAOs, Proof of Humanity",
    zh_pioneer: "网络国家论（Srinivasan）、DAO、Proof of Humanity"
  },
  {
    id: "F", en: "Cryptographic sovereignty", zh: "密码学主权",
    en_thesis: "Self-custody of keys is the new self-custody of arms — the irreducible unit of a free person.",
    zh_thesis: "自我托管密钥，是新的'自我持有武器'——自由之人不可再分的单位。",
    en_pioneer: "Hardware wallets, social recovery, sovereign rollups",
    zh_pioneer: "硬件钱包、社交恢复、主权汇总"
  },
  {
    id: "G", en: "Civilization-scale computation", zh: "文明级计算",
    en_thesis: "Every meaningful global computation eventually folds into a single recursive proof anchored on a public ledger. Civilization itself becomes a witness.",
    zh_thesis: "每一项有意义的全球计算最终折叠为锚于公链的单一递归证明。文明本身成为见证。",
    en_pioneer: "Psy Protocol, recursive zkVMs, proof aggregation networks",
    zh_pioneer: "Psy 协议、递归 zkVM、证明聚合网络"
  }
];

// ===== Risks =====
window.RISKS = [
  {
    en: "Proving monopolies", zh: "证明垄断",
    en_desc: "Generating a 1-billion-gate proof requires GPU clusters that few can afford. Decentralised networks risk centralising at the prover layer.",
    zh_desc: "生成十亿门级证明需要少数人才能负担的 GPU 集群。去中心化网络可能在证明者层重新集中。"
  },
  {
    en: "Surveillance paradox", zh: "监视悖论",
    en_desc: "Selective disclosure (\"prove you're over 18\") sounds liberating; in practice, governments may mandate proofs of so many properties that ZK becomes the perfect compliance system.",
    zh_desc: "选择性披露（'证明你已成年'）听来解放；实务上，政府可能要求证明的属性如此之多，以致 ZK 成为完美的合规系统。"
  },
  {
    en: "Governance capture", zh: "治理俘获",
    en_desc: "Token-weighted DAO governance recapitulates plutocracy. \"Trustless\" code requires maintainers, who become a new priesthood.",
    zh_desc: "代币加权 DAO 治理重演金权政治。'无信任'代码需要维护者，他们成为新的祭司团。"
  },
  {
    en: "Cryptographic opacity", zh: "密码学不透明",
    en_desc: "The proof is verifiable; what it proves is encoded in a circuit almost no one reads. The audit set for civilization-grade systems may be ~50 people.",
    zh_desc: "证明可被验证；其所证明的内容编码于电路中，几乎无人通读。文明级系统的审计圈，或仅约 50 人。"
  },
  {
    en: "Quantum break", zh: "量子破解",
    en_desc: "BLS / BN curves are not post-quantum. Hash-based systems (STARKs, Plonky2) are. A premature win for non-PQ systems would be a long-tail civilization risk.",
    zh_desc: "BLS / BN 曲线非抗量子。基于哈希的系统（STARK、Plonky2）则抗量子。非抗量子系统过早胜出，将构成长尾级文明风险。"
  },
  {
    en: "Social-layer drift", zh: "社会层漂移",
    en_desc: "The math is sound. The communities, foundations and CEXs that surround it can capture, rugpull, or simply disappear. The math doesn't save you from the people.",
    zh_desc: "数学无误。围绕它的社区、基金会与中心化交易所，仍可俘获、Rug、或干脆消失。数学救不了你免于他人。"
  }
];

// ===== AI + ZK futures =====
window.FUTURES = [
  {
    en: "Verifiable inference", zh: "可验证推理",
    en_desc: "Every LLM output ships with a proof: this token sequence was produced by model M, with weights hash H, on input I, without any post-hoc edit.",
    zh_desc: "每条 LLM 输出附带证明：此 token 序列由权重哈希为 H 的模型 M、在输入 I 上生成，且无任何事后修改。"
  },
  {
    en: "Cryptographic personhood", zh: "密码学人格",
    en_desc: "Proof of unique humanity (iris-hash, biometric ZK, social-graph attestation) replaces the passport as the foundation of digital identity.",
    zh_desc: "唯一人类证明（虹膜哈希、生物特征 ZK、社交图证明）取代护照，成为数字身份的根基。"
  },
  {
    en: "Programmable jurisdictions", zh: "可编程辖区",
    en_desc: "Smart contracts that execute legal rules — taxes, inheritance, corporate governance — and present a proof to the relevant state. Code-as-law without the rhetoric.",
    zh_desc: "执行法律规则的智能合约——税务、继承、公司治理——并向相关国家出示证明。'代码即法'，无须口号。"
  },
  {
    en: "Agent-to-agent commerce", zh: "代理之间的商务",
    en_desc: "AI agents transacting at machine speed need cryptographic receipts, not Stripe. Recursive proofs let two strangers' agents settle without either of their owners present.",
    zh_desc: "以机器速度交易的 AI 代理需要的是密码学收据，而非 Stripe。递归证明使两位陌生人的代理在双方主人皆缺席时完成清算。"
  },
  {
    en: "Civilizational ledger", zh: "文明账本",
    en_desc: "One recursive proof per epoch summarising the entire planet's verifiable computation. A meta-system that even non-cryptographic civilizations can audit.",
    zh_desc: "每一纪元一份递归证明，概括整个行星的可验证计算。是一种连非密码学文明也能审计的元系统。"
  }
];
