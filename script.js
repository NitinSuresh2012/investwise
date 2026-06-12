const quoteSnapshot = {
  updatedLabel: "Jun 11, 2026 11:39 PM ET",
  officialCloseDate: "Jun 11, 2026",
  prices: {
    NVDA: { current: 205.62, close: 204.87, label: "extended-hours" },
    GOOGL: { current: 360.93, close: 357.77, label: "extended-hours" },
    AAPL: { current: 295.53, close: 295.63, label: "extended-hours" },
    MSFT: { current: 392.69, close: 390.34, label: "extended-hours" },
    AMZN: { current: 241.93, close: 241.51, label: "extended-hours" },
    AVGO: { current: 386.81, close: 385.57, label: "extended-hours" },
    META: { current: 572.31, close: 568.43, label: "extended-hours" },
    TSLA: { current: 399.23, close: 399.15, label: "extended-hours" },
    LLY: { current: 1161.42, close: 1160.95, label: "extended-hours" }
  }
};

const assets = [
  ["NVDA", "Nvidia", "stock", 145.88, "Nvidia designs chips used for AI training, gaming, and data centers.", 82],
  ["MSFT", "Microsoft", "stock", 468.35, "Microsoft earns money from software, cloud computing, gaming, and AI tools.", 48],
  ["AAPL", "Apple", "stock", 202.82, "Apple sells iPhones, Macs, services, and wearables with a loyal customer base.", 52],
  ["AVGO", "Broadcom", "stock", 238.2, "Broadcom makes networking chips and infrastructure software used by large companies.", 68],
  ["TSM", "Taiwan Semiconductor", "stock", 171.75, "TSMC manufactures advanced chips for many of the largest technology companies.", 64],
  ["MU", "Micron", "stock", 124.1, "Micron makes memory chips used in AI servers and data centers.", 76],
  ["QQQ", "Invesco QQQ", "etf", 532.4, "QQQ spreads money across many large Nasdaq growth companies.", 55],
  ["VOO", "Vanguard S&P 500", "etf", 551.2, "VOO tracks about 500 large US companies.", 38],
  ["SPY", "SPDR S&P 500", "etf", 596.4, "SPY is a popular ETF that follows the S&P 500.", 39],
  ["VTI", "Vanguard Total Market", "etf", 302.65, "VTI includes thousands of US stocks for broad diversification.", 35]
].map(([symbol, name, type, price, insight, risk]) => {
  const snapshot = quoteSnapshot?.prices?.[symbol];
  return { symbol, name, type, price: snapshot?.current || price, insight, risk, sector: coreAssetSector(symbol, type) };
});

function coreAssetSector(symbol, type) {
  if (type === "etf") {
    return {
      QQQ: "Growth ETF",
      VOO: "US Market ETF",
      SPY: "US Market ETF",
      VTI: "Total Market ETF"
    }[symbol] || "ETF";
  }
  return {
    NVDA: "Information Technology",
    MSFT: "Information Technology",
    AAPL: "Information Technology",
    AVGO: "Information Technology",
    TSM: "Information Technology",
    MU: "Information Technology"
  }[symbol] || "Stock";
}

const stockCards = [
  ["NVDA", "Nvidia", "$3T+", "AI chips and graphics processors", "Designs powerful chips for graphics, games, and AI models.", "AI data center growth and strong profit margins.", "High expectations, competition, and chip demand cycles."],
  ["MSFT", "Microsoft", "$3T+", "Software and cloud", "Sells Windows, Office, Azure, Xbox, and AI productivity tools.", "Many business lines and recurring cloud revenue.", "Cloud growth could slow, and large tech companies face regulation."],
  ["AAPL", "Apple", "$3T+", "Consumer technology", "Makes iPhones, Macs, iPads, watches, headphones, and services.", "Strong brand, loyal customers, and services revenue.", "Depends heavily on iPhone demand and supply chains."],
  ["AVGO", "Broadcom", "$1T+", "Semiconductors and software", "Makes networking chips plus software for large companies.", "Benefits from AI networking demand.", "Chip cycles and acquisition integration risk."],
  ["TSM", "Taiwan Semiconductor", "$900B+", "Chip manufacturing", "Builds chips for companies that design their own processors.", "Key manufacturer for AI, phones, and high-performance computing.", "Geopolitical risk and heavy factory spending."],
  ["MU", "Micron", "$130B+", "Memory chips", "Makes memory and storage chips for phones, PCs, cars, and AI servers.", "AI memory demand and data center upgrades.", "Memory prices can rise and fall quickly."]
];

const etfs = [
  ["QQQ", "Medium", "Microsoft, Nvidia, Apple, Amazon", "Large growth companies, especially technology and communication names."],
  ["VOO", "Low-Medium", "Apple, Microsoft, Nvidia, Amazon", "A broad basket of large US companies across many sectors."],
  ["SPY", "Low-Medium", "Microsoft, Apple, Nvidia, Berkshire", "Popular ETF that follows the S&P 500 index."],
  ["VTI", "Low-Medium", "Apple, Microsoft, Nvidia, thousands more", "Includes large, medium, and small US companies."]
];

const platforms = [
  {
    name: "Fidelity Youth",
    tag: "Teen-owned",
    logo: "fidelity",
    url: "https://www.fidelity.com/go/youth-account/overview",
    bestFor: "Teens ages 13-17 who want a real brokerage account with parent visibility and built-in education.",
    facts: [
      "Ages 13-17",
      "Parent/guardian opens it",
      "Teen owns the account",
      "Most US stocks and some ETFs",
      "No options, margin, short selling, crypto, or penny stocks"
    ],
    note: "Fidelity says parents can monitor activity, while the teen controls investment decisions."
  },
  {
    name: "Greenlight",
    tag: "Parent-approved",
    logo: "greenlight",
    url: "https://greenlight.com/investing-for-kids",
    bestFor: "Families that want chores, allowance, spending, saving, and investing lessons in one parent-supervised app.",
    facts: [
      "Built for kids and teens",
      "Parent approves trades",
      "Good for allowance-to-investing practice",
      "Subscription-style family app",
      "Great stepping stone before teen autonomy"
    ],
    note: "Recent reporting describes Greenlight as a parent-approved model where children can research investments and request trades."
  },
  {
    name: "Robinhood",
    tag: "Beginner-friendly",
    logo: "robinhood",
    url: "https://robinhood.com/us/en/support/articles/open-my-account/",
    bestFor: "Adults or parent-managed/custodial setups who want a simple trading interface and broad product menu.",
    facts: [
      "Individual, joint, IRA, managed, and custodial account options",
      "Custodial account is adult-managed for a minor",
      "Very simple app experience",
      "All investing involves risk",
      "Review account type before using"
    ],
    note: "Robinhood's support page describes custodial accounts as opened and managed by an adult for a minor."
  },
  {
    name: "Schwab Teen Investor",
    tag: "Teen autonomy",
    logo: "schwab",
    url: "https://www.schwab.com/",
    bestFor: "Teens ages 13-17 who are ready for more independence with parent or guardian involvement.",
    facts: [
      "Ages 13-17",
      "Joint teen/parent structure",
      "Stocks, ETFs, mutual funds, bonds",
      "Fractional shares",
      "Designed with education and guardrails"
    ],
    note: "Recent coverage reports Schwab launched a teen account for ages 13-17 with parent or guardian support."
  }
];

const rawTopStocks = [
  ["AAPL", "Apple Inc.", "Information Technology"],
  ["ABBV", "AbbVie", "Health Care"],
  ["ABT", "Abbott Laboratories", "Health Care"],
  ["ACN", "Accenture", "Information Technology"],
  ["ADBE", "Adobe", "Information Technology"],
  ["AMAT", "Applied Materials", "Information Technology"],
  ["AMD", "Advanced Micro Devices", "Information Technology"],
  ["AMGN", "Amgen", "Health Care"],
  ["AMT", "American Tower", "Real Estate"],
  ["AMZN", "Amazon", "Consumer Discretionary"],
  ["AVGO", "Broadcom", "Information Technology"],
  ["AXP", "American Express", "Financials"],
  ["BA", "Boeing", "Industrials"],
  ["BAC", "Bank of America", "Financials"],
  ["BKNG", "Booking Holdings", "Consumer Discretionary"],
  ["BLK", "BlackRock", "Financials"],
  ["BMY", "Bristol Myers Squibb", "Health Care"],
  ["BNY", "BNY Mellon", "Financials"],
  ["BRK.B", "Berkshire Hathaway Class B", "Financials"],
  ["C", "Citigroup", "Financials"],
  ["CAT", "Caterpillar", "Industrials"],
  ["CL", "Colgate-Palmolive", "Consumer Staples"],
  ["CMCSA", "Comcast", "Communication Services"],
  ["COF", "Capital One", "Financials"],
  ["COP", "ConocoPhillips", "Energy"],
  ["COST", "Costco", "Consumer Staples"],
  ["CRM", "Salesforce", "Information Technology"],
  ["CSCO", "Cisco", "Information Technology"],
  ["CVS", "CVS Health", "Health Care"],
  ["CVX", "Chevron", "Energy"],
  ["DE", "Deere & Company", "Industrials"],
  ["DHR", "Danaher", "Health Care"],
  ["DIS", "The Walt Disney Company", "Communication Services"],
  ["DUK", "Duke Energy", "Utilities"],
  ["EMR", "Emerson Electric", "Industrials"],
  ["FDX", "FedEx", "Industrials"],
  ["GD", "General Dynamics", "Industrials"],
  ["GE", "GE Aerospace", "Industrials"],
  ["GEV", "GE Vernova", "Industrials"],
  ["GILD", "Gilead Sciences", "Health Care"],
  ["GM", "General Motors", "Consumer Discretionary"],
  ["GOOGL", "Alphabet Class A", "Communication Services"],
  ["GS", "Goldman Sachs", "Financials"],
  ["HD", "Home Depot", "Consumer Discretionary"],
  ["HON", "Honeywell", "Industrials"],
  ["IBM", "IBM", "Information Technology"],
  ["INTC", "Intel", "Information Technology"],
  ["INTU", "Intuit", "Information Technology"],
  ["ISRG", "Intuitive Surgical", "Health Care"],
  ["JNJ", "Johnson & Johnson", "Health Care"],
  ["JPM", "JPMorgan Chase", "Financials"],
  ["KO", "Coca-Cola", "Consumer Staples"],
  ["LIN", "Linde", "Materials"],
  ["LLY", "Eli Lilly", "Health Care"],
  ["LMT", "Lockheed Martin", "Industrials"],
  ["LOW", "Lowe's", "Consumer Discretionary"],
  ["LRCX", "Lam Research", "Information Technology"],
  ["MA", "Mastercard", "Financials"],
  ["MCD", "McDonald's", "Consumer Discretionary"],
  ["MDLZ", "Mondelez International", "Consumer Staples"],
  ["MDT", "Medtronic", "Health Care"],
  ["META", "Meta Platforms", "Communication Services"],
  ["MMM", "3M", "Industrials"],
  ["MO", "Altria", "Consumer Staples"],
  ["MRK", "Merck & Co.", "Health Care"],
  ["MS", "Morgan Stanley", "Financials"],
  ["MSFT", "Microsoft", "Information Technology"],
  ["MU", "Micron Technology", "Information Technology"],
  ["NEE", "NextEra Energy", "Utilities"],
  ["NFLX", "Netflix", "Communication Services"],
  ["NKE", "Nike", "Consumer Discretionary"],
  ["NOW", "ServiceNow", "Information Technology"],
  ["NVDA", "Nvidia", "Information Technology"],
  ["ORCL", "Oracle", "Information Technology"],
  ["PEP", "PepsiCo", "Consumer Staples"],
  ["PFE", "Pfizer", "Health Care"],
  ["PG", "Procter & Gamble", "Consumer Staples"],
  ["PLTR", "Palantir Technologies", "Information Technology"],
  ["PM", "Philip Morris International", "Consumer Staples"],
  ["QCOM", "Qualcomm", "Information Technology"],
  ["RTX", "RTX Corporation", "Industrials"],
  ["SBUX", "Starbucks", "Consumer Discretionary"],
  ["SCHW", "Charles Schwab", "Financials"],
  ["SO", "Southern Company", "Utilities"],
  ["SPG", "Simon Property Group", "Real Estate"],
  ["T", "AT&T", "Communication Services"],
  ["TMO", "Thermo Fisher Scientific", "Health Care"],
  ["TMUS", "T-Mobile US", "Communication Services"],
  ["TSLA", "Tesla", "Consumer Discretionary"],
  ["TXN", "Texas Instruments", "Information Technology"],
  ["UBER", "Uber", "Industrials"],
  ["UNH", "UnitedHealth Group", "Health Care"],
  ["UNP", "Union Pacific", "Industrials"],
  ["UPS", "United Parcel Service", "Industrials"],
  ["USB", "U.S. Bancorp", "Financials"],
  ["V", "Visa", "Financials"],
  ["VZ", "Verizon", "Communication Services"],
  ["WFC", "Wells Fargo", "Financials"],
  ["WMT", "Walmart", "Consumer Staples"],
  ["XOM", "ExxonMobil", "Energy"]
];

const topStocks = Array.from(
  new Map(rawTopStocks.map(([symbol, name, sector]) => [symbol, { symbol, name, sector }])).values()
).map((stock, index) => ({ ...stock, rank: index + 1 }));

const marketCapLeaders = [
  { rank: 1, symbol: "NVDA", marketCap: "$5T area", note: "AI chip leader and current mega-cap heavyweight" },
  { rank: 2, symbol: "GOOGL", marketCap: "$3T+ area", note: "Google Search, YouTube, cloud, and AI" },
  { rank: 3, symbol: "AAPL", marketCap: "$3T+ area", note: "iPhone ecosystem, services, and consumer hardware" },
  { rank: 4, symbol: "MSFT", marketCap: "$3T+ area", note: "Azure, Office, Windows, gaming, and AI software" },
  { rank: 5, symbol: "AMZN", marketCap: "$2T+ area", note: "E-commerce, AWS cloud, ads, and logistics" },
  { rank: 6, symbol: "AVGO", marketCap: "$1T+ area", note: "AI networking chips and infrastructure software" },
  { rank: 7, symbol: "META", marketCap: "$1T+ area", note: "Facebook, Instagram, WhatsApp, ads, and AI" },
  { rank: 8, symbol: "TSLA", marketCap: "$1T+ area", note: "Electric vehicles, energy, autonomy, and robotics" },
  { rank: 9, symbol: "BRK.B", marketCap: "$1T area", note: "Berkshire's insurance, rail, energy, and investment portfolio" },
  { rank: 10, symbol: "LLY", marketCap: "$1T area", note: "Medicines for diabetes, obesity, cancer, and immunology" }
];

const marketCapRanks = Object.fromEntries(marketCapLeaders.map(item => [item.symbol, item]));

const logoDomains = {
  AAPL: "apple.com",
  ABBV: "abbvie.com",
  ABT: "abbott.com",
  ACN: "accenture.com",
  ADBE: "adobe.com",
  AMAT: "appliedmaterials.com",
  AMD: "amd.com",
  AMGN: "amgen.com",
  AMT: "americantower.com",
  AMZN: "amazon.com",
  AVGO: "broadcom.com",
  AXP: "americanexpress.com",
  BA: "boeing.com",
  BAC: "bankofamerica.com",
  BKNG: "bookingholdings.com",
  BLK: "blackrock.com",
  BMY: "bms.com",
  BNY: "bnymellon.com",
  "BRK.B": "berkshirehathaway.com",
  C: "citigroup.com",
  CAT: "cat.com",
  CL: "colgatepalmolive.com",
  CMCSA: "comcast.com",
  COF: "capitalone.com",
  COP: "conocophillips.com",
  COST: "costco.com",
  CRM: "salesforce.com",
  CSCO: "cisco.com",
  CVS: "cvshealth.com",
  CVX: "chevron.com",
  DE: "deere.com",
  DHR: "danaher.com",
  DIS: "thewaltdisneycompany.com",
  DUK: "duke-energy.com",
  EMR: "emerson.com",
  FDX: "fedex.com",
  GD: "gd.com",
  GE: "ge.com",
  GEV: "gevernova.com",
  GILD: "gilead.com",
  GM: "gm.com",
  GOOGL: "abc.xyz",
  GS: "goldmansachs.com",
  HD: "homedepot.com",
  HON: "honeywell.com",
  IBM: "ibm.com",
  INTC: "intel.com",
  INTU: "intuit.com",
  ISRG: "intuitive.com",
  JNJ: "jnj.com",
  JPM: "jpmorganchase.com",
  KO: "coca-colacompany.com",
  LIN: "linde.com",
  LLY: "lilly.com",
  LMT: "lockheedmartin.com",
  LOW: "lowes.com",
  LRCX: "lamresearch.com",
  MA: "mastercard.com",
  MCD: "mcdonalds.com",
  MDLZ: "mondelezinternational.com",
  MDT: "medtronic.com",
  META: "meta.com",
  MMM: "3m.com",
  MO: "altria.com",
  MRK: "merck.com",
  MS: "morganstanley.com",
  MSFT: "microsoft.com",
  MU: "micron.com",
  NEE: "nexteraenergy.com",
  NFLX: "netflix.com",
  NKE: "nike.com",
  NOW: "servicenow.com",
  NVDA: "nvidia.com",
  ORCL: "oracle.com",
  PEP: "pepsico.com",
  PFE: "pfizer.com",
  PG: "pg.com",
  PLTR: "palantir.com",
  PM: "pmi.com",
  QCOM: "qualcomm.com",
  RTX: "rtx.com",
  SBUX: "starbucks.com",
  SCHW: "schwab.com",
  SO: "southerncompany.com",
  SPG: "simon.com",
  T: "att.com",
  TMO: "thermofisher.com",
  TMUS: "t-mobile.com",
  TSLA: "tesla.com",
  TXN: "ti.com",
  UBER: "uber.com",
  UNH: "unitedhealthgroup.com",
  UNP: "up.com",
  UPS: "ups.com",
  USB: "usbank.com",
  V: "visa.com",
  VZ: "verizon.com",
  WFC: "wellsfargo.com",
  WMT: "walmart.com",
  XOM: "exxonmobil.com"
};

const simpleIconSlugs = {
  AAPL: "apple",
  ABBV: "abbvie",
  ABT: "abbott",
  ACN: "accenture",
  ADBE: "adobe",
  AMAT: "appliedmaterials",
  AMD: "amd",
  AMGN: "amgen",
  AMZN: "amazon",
  AVGO: "broadcom",
  AXP: "americanexpress",
  BA: "boeing",
  BAC: "bankofamerica",
  BKNG: "bookingdotcom",
  BLK: "blackrock",
  BMY: "bristolmyerssquibb",
  BNY: "bny",
  C: "citigroup",
  CAT: "caterpillar",
  CL: "colgate",
  CMCSA: "comcast",
  COF: "capitalone",
  COP: "conocophillips",
  COST: "costco",
  CRM: "salesforce",
  CSCO: "cisco",
  CVS: "cvshealth",
  CVX: "chevron",
  DE: "johndeere",
  DIS: "disney",
  DUK: "dukeenergy",
  EMR: "emerson",
  FDX: "fedex",
  GE: "generalelectric",
  GEV: "gevernova",
  GILD: "gileadsciences",
  GM: "generalmotors",
  GOOGL: "google",
  GS: "goldmansachs",
  HD: "homedepot",
  HON: "honeywell",
  IBM: "ibm",
  INTC: "intel",
  INTU: "intuit",
  JNJ: "johnsonandjohnson",
  JPM: "jpmorgan",
  KO: "cocacola",
  LIN: "linde",
  LLY: "eli-lilly",
  LMT: "lockheedmartin",
  LOW: "lowes",
  MA: "mastercard",
  MCD: "mcdonalds",
  MDLZ: "mondelez",
  MDT: "medtronic",
  META: "meta",
  MMM: "3m",
  MRK: "merck",
  MS: "morganstanley",
  MSFT: "microsoft",
  MU: "microntechnology",
  NFLX: "netflix",
  NKE: "nike",
  NOW: "servicenow",
  NVDA: "nvidia",
  ORCL: "oracle",
  PEP: "pepsi",
  PFE: "pfizer",
  PG: "procterandgamble",
  PLTR: "palantir",
  PM: "philipmorrisinternational",
  QCOM: "qualcomm",
  RTX: "rtx",
  SBUX: "starbucks",
  SCHW: "charlesschwab",
  SO: "southerncompany",
  SPG: "simon",
  T: "atandt",
  TMUS: "tmobile",
  TSLA: "tesla",
  TXN: "texasinstruments",
  UBER: "uber",
  UNH: "unitedhealthgroup",
  UNP: "unionpacific",
  UPS: "ups",
  USB: "usbank",
  V: "visa",
  VZ: "verizon",
  WFC: "wellsfargo",
  WMT: "walmart",
  XOM: "exxonmobil"
};

let cash = 10000;
let holdings = { VOO: 8, QQQ: 6, NVDA: 10, MSFT: 5 };
let budget = { rent: 1400, food: 520, transportation: 240, entertainment: 280, savings: 780, investing: 780 };
let selectedSimSymbol = "VTI";

const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
const moneyExact = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const pct = value => new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 0 }).format(value);
const assetBySymbol = symbol => assets.find(asset => asset.symbol === symbol);
const simAssetBySymbol = symbol => simulatorAssets.find(asset => asset.symbol === symbol);

function setupTabs() {
  document.querySelectorAll(".tabs button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tabs button").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(panel => panel.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
}

function renderCards() {
  document.querySelector(".stocks").innerHTML = stockCards.map(([symbol, name, cap, industry, what, why, risks]) => `
    <article class="card info">
      <div class="card-head"><h4>${name} (${symbol})</h4><span>${cap}</span></div>
      <p><b>Industry</b><br>${industry}</p>
      <p><b>What it does</b><br>${what}</p>
      <p><b>Why investors like it</b><br>${why}</p>
      <p><b>Risks</b><br>${risks}</p>
    </article>
  `).join("");

  document.querySelector(".etf-grid").innerHTML = etfs.map(([symbol, risk, holdings, why]) => `
    <article class="card info">
      <div class="card-head"><h4>${symbol}</h4><span>${risk}</span></div>
      <p>${why}</p>
      <p><b>Holdings</b><br>${holdings}</p>
      <div class="spark"></div>
    </article>
  `).join("");

  document.querySelector(".watch-grid").innerHTML = ["MU", "QQQ", "AAPL"].map(symbol => {
    const asset = assetBySymbol(symbol);
    return `
      <article class="card info">
        <div class="card-head"><h4>${asset.symbol}</h4><span>${money(asset.price)}</span></div>
        <p>${asset.name}</p>
        <p><b>AI Insight</b><br>${asset.insight}</p>
      </article>
    `;
  }).join("");
}

function renderSimulator() {
  buildSimulatorUniverse();
  setupAssetSearch();
  document.getElementById("buyBtn").addEventListener("click", () => {
    const asset = simAssetBySymbol(selectedSimSymbol);
    if (cash < asset.price) return;
    cash = +(cash - asset.price).toFixed(2);
    holdings[asset.symbol] = (holdings[asset.symbol] || 0) + 1;
    updatePortfolio();
  });
  updatePortfolio();
}

function updatePortfolio() {
  const rows = Object.entries(holdings).map(([symbol, quantity]) => {
    const asset = simAssetBySymbol(symbol) || assetBySymbol(symbol);
    return { ...asset, quantity, value: asset.price * quantity };
  });
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const etfValue = rows.filter(row => row.type === "etf").reduce((sum, row) => sum + row.value, 0);
  const score = Math.min(100, Math.round(rows.length * 13 + etfValue / Math.max(total, 1) * 40));
  const risk = Math.max(1, Math.round(rows.reduce((sum, row) => sum + row.risk * (row.value / total), 0) - score * 0.14));
  document.getElementById("totalValue").textContent = money(total + cash);
  document.getElementById("cashValue").textContent = money(cash);
  document.getElementById("divScore").textContent = `${score}/100`;
  document.getElementById("riskScore").textContent = risk;
  document.getElementById("etfPct").textContent = pct(etfValue / total);
  document.getElementById("holdings").innerHTML = rows.map(row => `
    <div class="holding">
      <div><b>${row.symbol}</b><br><small>${row.quantity} shares/contracts</small></div>
      <b>${money(row.value)}</b>
      <button data-sell="${row.symbol}">Sell</button>
    </div>
  `).join("");
  document.querySelectorAll("[data-sell]").forEach(button => {
    button.addEventListener("click", () => {
      const symbol = button.dataset.sell;
      const asset = assetBySymbol(symbol);
      cash = +(cash + asset.price).toFixed(2);
      holdings[symbol] -= 1;
      if (holdings[symbol] <= 0) delete holdings[symbol];
      updatePortfolio();
    });
  });
}

let simulatorAssets = [];

function buildSimulatorUniverse() {
  const base = [
    ...assets,
    ...topStocks
      .filter(stock => !assets.some(asset => asset.symbol === stock.symbol))
      .map(stock => ({
        symbol: stock.symbol,
        name: stock.name,
        type: "stock",
        sector: stock.sector,
        risk: riskForSector(stock.sector),
        price: syntheticPrice(stock.symbol, stock.rank),
        insight: defaultDetail(stock)[0]
      }))
  ];
  const sectors = ["Information Technology", "Health Care", "Financials", "Industrials", "Consumer Discretionary", "Consumer Staples", "Communication Services", "Energy", "Utilities", "Real Estate", "Materials"];
  const extras = [];
  let rank = base.length + 1;
  while (base.length + extras.length < 300) {
    const sector = sectors[(rank + extras.length) % sectors.length];
    const symbol = `US${String(rank).padStart(3, "0")}`;
    extras.push({
      symbol,
      name: `${sector.split(" ")[0]} Leaders ${rank}`,
      type: "stock",
      sector,
      risk: riskForSector(sector),
      price: syntheticPrice(symbol, rank),
      insight: `A sample ${sector.toLowerCase()} company used to make the simulator universe broad enough for practice.`
    });
    rank += 1;
  }
  simulatorAssets = [...base, ...extras].slice(0, 300);
}

function setupAssetSearch() {
  const input = document.getElementById("assetSearch");
  const results = document.getElementById("assetResults");
  input.value = selectedSimSymbol;

  function drawResults() {
    const query = input.value.trim().toLowerCase();
    const filtered = simulatorAssets.filter(asset => `${asset.symbol} ${asset.name} ${asset.sector}`.toLowerCase().includes(query)).slice(0, 30);
    results.innerHTML = filtered.map(asset => `
      <button class="asset-option" data-asset="${asset.symbol}" type="button">
        <div class="logo-wrap">
          <img class="company-logo" src="${logoUrl(asset.symbol)}" alt="${asset.name} logo" loading="lazy" data-logo-index="0" onerror="advanceLogo(this, '${asset.symbol}')">
          <span class="logo-fallback">${asset.symbol.slice(0, 4)}</span>
        </div>
        <span><b>${asset.symbol} · ${asset.name}</b>${asset.sector}</span>
        <em>${money(asset.price)}</em>
      </button>
    `).join("");
    results.classList.add("open");
    results.querySelectorAll(".asset-option").forEach(option => {
      option.addEventListener("click", () => selectSimAsset(option.dataset.asset));
    });
  }

  input.addEventListener("focus", drawResults);
  input.addEventListener("input", drawResults);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const firstOption = results.querySelector(".asset-option");
      if (firstOption) {
        event.preventDefault();
        selectSimAsset(firstOption.dataset.asset);
      }
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".asset-picker")) results.classList.remove("open");
  });
  selectSimAsset(selectedSimSymbol);
}

function selectSimAsset(symbol) {
  const asset = simAssetBySymbol(symbol) || simulatorAssets[0];
  selectedSimSymbol = asset.symbol;
  document.getElementById("assetSearch").value = `${asset.symbol} - ${asset.name}`;
  document.getElementById("assetResults").classList.remove("open");
  document.getElementById("selectedAsset").innerHTML = `<b>${asset.symbol}</b> ${asset.name} · ${asset.sector} · ${money(asset.price)}<br>${asset.insight}`;
}

function syntheticPrice(symbol, rank) {
  const code = symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Number((35 + ((code * 17 + rank * 13) % 560) + ((code % 91) / 100)).toFixed(2));
}

function riskForSector(sector) {
  return {
    "Information Technology": 64,
    "Health Care": 46,
    "Financials": 52,
    "Industrials": 50,
    "Consumer Discretionary": 58,
    "Consumer Staples": 35,
    "Communication Services": 57,
    "Energy": 61,
    "Utilities": 28,
    "Real Estate": 49,
    "Materials": 54
  }[sector] || 55;
}

function renderBudget() {
  const labels = Object.keys(budget);
  const container = document.querySelector(".budget-controls");
  container.innerHTML = labels.map(key => `
    <div class="budget-control">
      <label><span>${key}</span><b id="${key}Out">${money(budget[key])}</b></label>
      <input type="range" min="0" max="1800" step="20" value="${budget[key]}" data-budget="${key}">
    </div>
  `).join("");
  document.querySelectorAll("[data-budget]").forEach(input => {
    input.addEventListener("input", () => {
      budget[input.dataset.budget] = Number(input.value);
      updateBudget();
    });
  });
  updateBudget();
}

function updateBudget() {
  Object.entries(budget).forEach(([key, value]) => document.getElementById(`${key}Out`).textContent = money(value));
  const wealth = budget.savings + budget.investing;
  const spent = Object.values(budget).reduce((sum, value) => sum + value, 0);
  const wantsPenalty = Math.max(0, budget.entertainment / 4000 - 0.2);
  const overspend = Math.max(0, spent - 4000) / 4000;
  const score = Math.max(0, Math.min(100, Math.round(55 + (wealth / 4000) * 120 - wantsPenalty * 80 - overspend * 100)));
  document.getElementById("saveRate").textContent = pct(wealth / 4000);
  document.getElementById("growth").textContent = money(wealth);
  document.getElementById("financeScore").textContent = `${score}/100`;
}

function setupCoach() {
  const topics = {
    etf: {
      words: ["etf", "voo", "spy", "vti"],
      label: "ETF basics",
      answer: "An ETF is a basket of investments you buy with one ticker. It can hold many companies at once, which helps beginners avoid depending on only one stock.",
      next: "Compare one ETF, like VOO or VTI, against one single stock and notice how much broader the ETF is."
    },
    qqq: {
      words: ["qqq", "nasdaq"],
      label: "QQQ and growth stocks",
      answer: "QQQ is an ETF focused on many large Nasdaq companies. It has a lot of technology and growth exposure, so it can rise fast but also move around more.",
      next: "Look at QQQ's top holdings and ask whether you are comfortable with a tech-heavy basket."
    },
    micron: {
      words: ["micron", "mu", "memory"],
      label: "Micron and semiconductors",
      answer: "Micron makes memory and storage chips used in AI servers, phones, PCs, cars, and data centers. Its business can be cyclical because memory prices move up and down.",
      next: "Compare Micron with Nvidia: both are chip companies, but they make different parts of the AI hardware stack."
    },
    diversification: {
      words: ["diversification", "diversify", "diversified"],
      label: "Diversification",
      answer: "Diversification means spreading money across different investments. If one company has a bad week, the rest of the portfolio can help balance it out.",
      next: "Check your simulator allocation and see if one stock is too large compared with the rest."
    },
    compound: {
      words: ["compound", "interest", "growth"],
      label: "Compound growth",
      answer: "Compound growth means your gains can start earning gains too. The longer money stays invested, the more time it has to build on itself.",
      next: "Try increasing savings or investing in the budget simulator and watch how net worth growth changes."
    },
    risk: {
      words: ["risk", "safe", "reward", "lose money"],
      label: "Risk and reward",
      answer: "Risk is the chance an investment loses value or does worse than expected. Reward is the possible gain you hope to earn for taking that risk.",
      next: "Use ETFs for a steadier beginner example, then compare them with a high-growth single stock."
    }
  };

  function respond() {
    const rawQuestion = document.getElementById("coachQuestion").value.trim();
    const question = rawQuestion.toLowerCase();
    const topic = Object.values(topics).find(item => item.words.some(word => question.includes(word))) || topics.etf;
    const summary = rawQuestion
      ? `You are asking about: "${rawQuestion}"`
      : "You are asking for a beginner investing explanation.";

    document.getElementById("coachAnswer").innerHTML = `
      <div class="coach-response">
        <div><b>Summary</b><p>${escapeHtml(summary)}</p></div>
        <div><b>Question analysis</b><p>This looks like a ${topic.label.toLowerCase()} question. The main idea is to understand the concept before deciding what to buy.</p></div>
        <div><b>Simple answer</b><p>${topic.answer}</p></div>
        <div><b>Next thing to check</b><p>${topic.next}</p></div>
        <div><span class="disclaimer">Educational purposes only.</span></div>
      </div>
    `;
  }

  document.getElementById("coachBtn").addEventListener("click", respond);
  document.getElementById("coachQuestion").addEventListener("keydown", event => {
    if (event.key === "Enter") respond();
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function renderTopStocks() {
  const sectorFilter = document.getElementById("sectorFilter");
  const search = document.getElementById("stockSearch");
  const sectors = ["All sectors", ...Array.from(new Set(topStocks.map(stock => stock.sector))).sort()];
  sectorFilter.innerHTML = sectors.map(sector => `<option value="${sector}">${sector}</option>`).join("");
  renderMarketCapLeaders();

  function draw() {
    const query = search.value.trim().toLowerCase();
    const sector = sectorFilter.value;
    const filtered = topStocks.filter(stock => {
      const matchesQuery = !query || `${stock.symbol} ${stock.name} ${stock.sector}`.toLowerCase().includes(query);
      const matchesSector = sector === "All sectors" || stock.sector === sector;
      return matchesQuery && matchesSector;
    }).sort((a, b) => (marketCapRanks[a.symbol]?.rank || 999) - (marketCapRanks[b.symbol]?.rank || 999) || a.rank - b.rank);

    document.querySelector(".top-stock-grid").innerHTML = filtered.map(stock => `
      <article class="stock-tile" data-symbol="${stock.symbol}" tabindex="0" role="button" aria-label="Open ${stock.name} details">
        <div class="stock-top">
          <span class="${marketCapRanks[stock.symbol] ? "cap-rank" : "rank"}">${marketCapRanks[stock.symbol] ? `Market cap #${marketCapRanks[stock.symbol].rank}` : `#${String(stock.rank).padStart(3, "0")}`}</span>
          <div class="logo-wrap" title="${stock.name} logo">
            <img class="company-logo" src="${logoUrl(stock.symbol)}" alt="${stock.name} logo" loading="lazy" data-logo-index="0" onerror="advanceLogo(this, '${stock.symbol}')">
            <span class="logo-fallback">${stock.symbol.replace(".B", "")}</span>
          </div>
        </div>
        <div class="symbol">${stock.symbol}</div>
        <h4>${stock.name}</h4>
        <p>${stock.sector}</p>
        <div class="stock-meta">
          <span>${stockLens(stock)}</span>
          <span>${stock.sector.includes("Technology") ? "Growth watch" : "Quality watch"}</span>
        </div>
        <div class="stock-links">
          <a href="${nasdaqUrl(stock.symbol)}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Analysts</a>
          <a href="${marketCapUrl(stock.symbol)}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Market cap</a>
        </div>
      </article>
    `).join("");

    document.querySelectorAll(".stock-tile").forEach(tile => {
      tile.addEventListener("click", () => openStockDetail(tile.dataset.symbol));
      tile.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openStockDetail(tile.dataset.symbol);
        }
      });
    });
  }

  search.addEventListener("input", draw);
  sectorFilter.addEventListener("change", draw);
  draw();
}

function renderPlatforms() {
  document.querySelector(".platform-grid").innerHTML = platforms.map(platform => `
    <article class="platform-card">
      <div class="platform-head">
        <div>
          <h4>${platform.name}</h4>
          <span class="tag">${platform.tag}</span>
        </div>
        <div class="platform-logo">
          <img src="${platformLogoUrl(platform.logo)}" alt="${platform.name} logo" loading="lazy" data-platform-logo-index="0" onerror="advancePlatformLogo(this, '${platform.logo}')">
          <span>${platform.name.split(" ").map(word => word[0]).join("").slice(0, 3)}</span>
        </div>
      </div>
      <p>${platform.bestFor}</p>
      <div class="platform-facts">
        ${platform.facts.map(fact => `<span>${fact}</span>`).join("")}
      </div>
      <p>${platform.note}</p>
      <div class="platform-links">
        <a href="${platform.url}" target="_blank" rel="noreferrer">Official info</a>
      </div>
    </article>
  `).join("");
}

function platformLogoUrl(slug) {
  return platformLogoSources(slug)[0];
}

function platformLogoSources(slug) {
  return {
    fidelity: [
      "https://cdn.simpleicons.org/fidelityinvestments",
      "https://logo.clearbit.com/fidelity.com",
      "https://www.google.com/s2/favicons?domain=fidelity.com&sz=128"
    ],
    greenlight: [
      "https://logo.clearbit.com/greenlight.com",
      "https://www.google.com/s2/favicons?domain=greenlight.com&sz=128"
    ],
    robinhood: [
      "https://cdn.simpleicons.org/robinhood",
      "https://logo.clearbit.com/robinhood.com",
      "https://www.google.com/s2/favicons?domain=robinhood.com&sz=128"
    ],
    schwab: [
      "https://logo.clearbit.com/schwab.com",
      "https://www.google.com/s2/favicons?domain=schwab.com&sz=128"
    ]
  }[slug] || [];
}

function advancePlatformLogo(image, slug) {
  const sources = platformLogoSources(slug);
  const nextIndex = Number(image.dataset.platformLogoIndex || 0) + 1;
  if (sources[nextIndex]) {
    image.dataset.platformLogoIndex = String(nextIndex);
    image.src = sources[nextIndex];
    return;
  }
  image.style.display = "none";
  image.nextElementSibling.style.display = "block";
}

function renderMarketCapLeaders() {
  document.querySelector(".market-cap-leaders").innerHTML = marketCapLeaders.map(leader => {
    const stock = topStocks.find(item => item.symbol === leader.symbol);
    const name = stock?.name || leader.symbol;
    const sector = stock?.sector || "Mega cap";
    const quote = quoteSnapshot.prices[leader.symbol];
    const change = quote ? (quote.current - quote.close) / quote.close : null;
    return `
      <article class="leader-card" data-leader="${leader.symbol}" tabindex="0" role="button" aria-label="Open ${name} details">
        <div class="logo-wrap">
          <img class="company-logo" src="${logoUrl(leader.symbol)}" alt="${name} logo" loading="lazy" data-logo-index="0" onerror="advanceLogo(this, '${leader.symbol}')">
          <span class="logo-fallback">${leader.symbol.replace(".B", "")}</span>
        </div>
        <span class="leader-rank">Market cap #${leader.rank}</span>
        <h4>${leader.symbol} · ${name}</h4>
        ${quote ? `<div class="leader-price"><b>${moneyExact(quote.current)}</b><span>${change >= 0 ? "+" : ""}${(change * 100).toFixed(2)}%</span></div>` : ""}
        <p>${leader.marketCap} · ${sector}</p>
        <p>${leader.note}</p>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".leader-card").forEach(card => {
    card.addEventListener("click", () => openStockDetail(card.dataset.leader));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openStockDetail(card.dataset.leader);
      }
    });
  });
}

const companyDetails = {
  AAPL: ["Apple designs and sells iPhones, Macs, iPads, watches, earbuds, and paid services like iCloud and Apple Music.", "Investors watch Apple because it has a powerful brand, loyal customers, huge cash flow, and a growing services business.", "Apple depends heavily on iPhone demand and must keep creating products people want to upgrade to."],
  MSFT: ["Microsoft sells Windows, Office, Azure cloud services, Xbox, LinkedIn, and AI productivity tools.", "Investors watch Microsoft because many businesses pay for its software every year, and Azure is a major cloud platform.", "Cloud competition, AI spending, and regulation can affect future growth."],
  NVDA: ["Nvidia designs advanced chips and software used for AI servers, gaming, robotics, and data centers.", "Investors watch Nvidia because AI systems need powerful chips, and Nvidia is a leader in that market.", "The stock can swing a lot if AI demand slows, competitors catch up, or customers reduce chip spending."],
  AMZN: ["Amazon runs online shopping, Prime, advertising, streaming, logistics, and Amazon Web Services cloud computing.", "Investors watch Amazon because AWS is highly profitable and its retail network is hard to copy.", "Retail margins can be thin, cloud growth can slow, and regulators monitor large platforms."],
  GOOGL: ["Alphabet owns Google Search, YouTube, Android, Google Cloud, and AI products.", "Investors watch Alphabet because search ads and YouTube generate major cash flow, while AI and cloud add growth potential.", "Advertising cycles, AI competition, and antitrust cases are important risks."],
  META: ["Meta owns Facebook, Instagram, WhatsApp, Threads, and invests heavily in AI and virtual reality.", "Investors watch Meta because its apps reach billions of people and its ads business can be very profitable.", "Ad demand, privacy rules, platform competition, and heavy spending can affect results."],
  TSLA: ["Tesla makes electric vehicles, batteries, charging products, solar products, and autonomous-driving software.", "Investors watch Tesla because it is a major EV brand with software and energy ambitions.", "Vehicle pricing, competition, production execution, and expectations around autonomy are key risks."],
  AVGO: ["Broadcom makes semiconductor chips for networking, broadband, wireless, and AI infrastructure, plus enterprise software.", "Investors watch Broadcom because AI networking and infrastructure software can create durable cash flow.", "Chip cycles, customer concentration, and acquisition integration are risks."],
  MU: ["Micron makes memory and storage chips used in phones, PCs, cars, AI servers, and data centers.", "Investors watch Micron because AI servers need high-performance memory, and memory pricing can improve quickly in strong cycles.", "Memory is cyclical, so profits can rise and fall sharply when supply or demand changes."],
  JPM: ["JPMorgan Chase is a large bank that offers consumer banking, credit cards, investment banking, trading, and asset management.", "Investors watch JPMorgan because it is one of the strongest and most diversified US banks.", "Loan losses, interest-rate changes, regulation, and recessions can hurt bank results."],
  V: ["Visa runs a global payments network that helps cards and digital payments move between banks, merchants, and consumers.", "Investors watch Visa because it benefits when more spending moves from cash to cards and digital payments.", "Payment regulation, competition, and slower consumer spending are risks."],
  WMT: ["Walmart operates stores, grocery, e-commerce, pharmacies, and membership programs.", "Investors watch Walmart because it is a defensive retailer with huge scale and everyday demand.", "Retail competition, wage costs, and thin margins can pressure profits."],
  XOM: ["ExxonMobil explores, produces, refines, and sells oil, natural gas, chemicals, and energy products.", "Investors watch Exxon because it is one of the largest energy companies and can generate strong cash flow when oil prices are high.", "Oil prices, energy transition policies, and project execution are key risks."]
};

function openStockDetail(symbol) {
  const stock = topStocks.find(item => item.symbol === symbol);
  if (!stock) return;
  const [does, why, risks] = companyDetails[symbol] || defaultDetail(stock);
  const capLeader = marketCapRanks[symbol];
  const quote = quoteSnapshot.prices[symbol];
  const quoteBox = quote
    ? `<div class="detail-box"><b>Current price snapshot</b><p>${moneyExact(quote.current)} ${quote.label}, updated ${quoteSnapshot.updatedLabel}. Official close: ${moneyExact(quote.close)} on ${quoteSnapshot.officialCloseDate}.</p></div>`
    : "";
  document.getElementById("stockDetail").innerHTML = `
    <div class="detail-hero">
      <div class="logo-wrap">
        <img class="company-logo" src="${logoUrl(stock.symbol)}" alt="${stock.name} logo" data-logo-index="0" onerror="advanceLogo(this, '${stock.symbol}')">
        <span class="logo-fallback">${stock.symbol.replace(".B", "")}</span>
      </div>
      <div>
        <h3>${stock.symbol}</h3>
        <p>${stock.name} • ${stock.sector}</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-box"><b>What it does</b><p>${does}</p></div>
      <div class="detail-box"><b>Why investors watch it</b><p>${why}</p></div>
      <div class="detail-box"><b>Main risks</b><p>${risks}</p></div>
      ${quoteBox}
      <div class="detail-box"><b>Beginner takeaway</b><p>${capLeader ? `Market cap rank #${capLeader.rank}: ${capLeader.note}. ` : ""}${stockLens(stock)}. Learn what drives the business before comparing price, growth, debt, valuation, and analyst expectations.</p></div>
    </div>
    <div class="detail-links">
      <a href="${nasdaqUrl(stock.symbol)}" target="_blank" rel="noreferrer">Analyst research</a>
      <a href="${marketCapUrl(stock.symbol)}" target="_blank" rel="noreferrer">Market cap data</a>
    </div>
  `;
  const modal = document.getElementById("stockModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function defaultDetail(stock) {
  const sector = stock.sector;
  const doesBySector = {
    "Information Technology": `${stock.name} provides technology products, software, chips, platforms, or services used by consumers and businesses.`,
    "Health Care": `${stock.name} provides medicines, medical devices, health services, diagnostics, or research tools used in the health care system.`,
    "Financials": `${stock.name} provides financial services such as banking, payments, investing, insurance, or asset management.`,
    "Industrials": `${stock.name} provides industrial products or services such as aerospace, machinery, logistics, defense, or infrastructure equipment.`,
    "Consumer Discretionary": `${stock.name} sells products or services people often buy when they have extra spending power, such as retail, travel, restaurants, cars, or entertainment.`,
    "Consumer Staples": `${stock.name} sells everyday essentials like food, beverages, household products, tobacco, or basic retail goods.`,
    "Communication Services": `${stock.name} provides media, telecom, entertainment, internet, advertising, or communication platforms.`,
    "Energy": `${stock.name} produces, transports, refines, or sells energy products such as oil, natural gas, or related services.`,
    "Utilities": `${stock.name} provides essential services such as electricity, gas, or regulated energy infrastructure.`,
    "Real Estate": `${stock.name} owns, operates, or finances real estate assets such as towers, malls, offices, or infrastructure.`,
    "Materials": `${stock.name} produces materials, chemicals, gases, or industrial inputs used by other businesses.`
  };
  return [
    doesBySector[sector] || `${stock.name} is a large US-listed company in the ${sector} sector.`,
    `Investors watch it because large ${sector.toLowerCase()} companies can influence major indexes and show how that part of the economy is doing.`,
    `Risks include competition, valuation, economic slowdowns, regulation, and company-specific execution problems.`
  ];
}

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", () => {
    const modal = document.getElementById("stockModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const modal = document.getElementById("stockModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});

function stockLens(stock) {
  if (["NVDA", "MSFT", "AAPL", "AMZN", "GOOGL", "META", "AVGO", "TSLA"].includes(stock.symbol)) return "Mega-cap leader";
  if (["LLY", "UNH", "JNJ", "ABBV", "ABT", "TMO"].includes(stock.symbol)) return "Health care bellwether";
  if (["JPM", "V", "MA", "BRK.B", "BAC"].includes(stock.symbol)) return "Financial core";
  if (["XOM", "CVX", "COP"].includes(stock.symbol)) return "Energy major";
  return "Large-cap watch";
}

function nasdaqUrl(symbol) {
  return `https://www.nasdaq.com/market-activity/stocks/${symbol.replace(".", "-").toLowerCase()}/analyst-research`;
}

function marketCapUrl(symbol) {
  return `https://companiesmarketcap.com/search/?q=${encodeURIComponent(symbol)}`;
}

function logoUrl(symbol) {
  return logoSources(symbol)[0] || "";
}

function logoSources(symbol) {
  const sources = [];
  if (simpleIconSlugs[symbol]) sources.push(`https://cdn.simpleicons.org/${simpleIconSlugs[symbol]}`);
  const domain = logoDomains[symbol];
  if (domain) {
    sources.push(`https://logo.clearbit.com/${domain}`);
    sources.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
  }
  return sources;
}

function advanceLogo(image, symbol) {
  const sources = logoSources(symbol);
  const nextIndex = Number(image.dataset.logoIndex || 0) + 1;
  if (sources[nextIndex]) {
    image.dataset.logoIndex = String(nextIndex);
    image.src = sources[nextIndex];
    return;
  }
  image.style.display = "none";
  image.nextElementSibling.style.display = "block";
}

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

setupTabs();
renderCards();
renderSimulator();
renderBudget();
setupCoach();
renderTopStocks();
renderPlatforms();
