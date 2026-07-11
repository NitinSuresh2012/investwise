let quoteSnapshot = {
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

let marketCapSnapshotLabel = "CompaniesMarketCap snapshot checked Jun 12, 2026";

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

const talkedAboutWatchlist = [
  ["NVDA", "Core AI watch", "The #1 AI infrastructure play and the benchmark investors use for the whole AI chip sector.", "Watch data center GPU demand, margins, and whether expectations get too high."],
  ["MSFT", "Core AI watch", "Azure, Copilot, and its OpenAI stake make Microsoft one of the clearest AI monetization leaders.", "Watch Azure growth, Copilot adoption, and AI spending discipline."],
  ["META", "Core AI watch", "Meta has strong ad-tech execution and uses AI to improve ranking, targeting, content tools, and efficiency.", "Watch ad growth, AI capex, and whether spending turns into better profits."],
  ["TSLA", "Core AI watch", "Robotics, FSD, EVs, and energy make Tesla a market-moving story whether investors love it or hate it.", "Watch deliveries, margins, autonomy updates, and energy growth."],
  ["TSM", "Core AI watch", "TSMC makes the advanced chips everyone needs, so it is a leading indicator for semiconductors.", "Watch capacity, customer demand, and geopolitical risk."],
  ["PLTR", "Core AI watch", "Palantir is an enterprise AI software bellwether for companies and governments using data platforms.", "Watch commercial customer growth, government contracts, and valuation."],
  ["ORCL", "Core AI watch", "Oracle combines cloud databases with AI infrastructure and large data center contracts.", "Watch cloud backlog, data center capacity, and debt levels."],
  ["QCOM", "Core AI watch", "Qualcomm matters for AI PCs and mobile chips, and it connects to device research like HPQ and HPE.", "Watch phone demand, AI PC adoption, and diversification beyond handsets."],
  ["LRCX", "Core AI watch", "Lam Research sells semiconductor equipment, so it can signal early-cycle chip capital spending.", "Watch foundry and memory capex plans."],
  ["MU", "Core AI watch", "Memory is a bottleneck for AI training and inference, and Micron is very cyclical.", "Watch HBM demand, memory pricing, and cycle risk."],
  ["MRVL", "Core AI watch", "Marvell is a custom AI silicon and networking play growing with hyperscale data center demand.", "Watch custom ASIC wins and data center revenue growth."],
  ["PANW", "Core AI watch", "Palo Alto Networks is a cybersecurity category leader as AI raises security needs.", "Watch platformization progress, billings, and competition."],
  ["ZS", "Core AI watch", "Zscaler is a cloud security leader paired with PANW for cybersecurity context.", "Watch revenue growth, enterprise demand, and margin expansion."],
  ["QQQ", "Core AI watch", "QQQ is the tech-heavy Nasdaq benchmark that frames many AI and growth-stock moves.", "Watch concentration because mega-cap tech can drive much of the ETF."],
  ["SPY", "Core AI watch", "SPY tracks the S&P 500 and gives broad-market context for whether tech is leading or lagging.", "Watch if your watchlist is beating or trailing the broad market."],
  ["SPX", "Core AI watch", "SPX is the S&P 500 index benchmark, useful context for all stock moves.", "Watch index direction before judging one stock in isolation."],
  ["SMH", "Core AI watch", "SMH is a simple way to track the whole semiconductor sector in one ticker.", "Watch whether semis as a group confirm or reject individual chip-stock moves."],
  ["VIX", "Core AI watch", "VIX is the market fear gauge, always useful when volatility changes investor behavior.", "Watch spikes because they can explain why good stocks fall together."],
  ["SNOW", "Strong, pick battles", "Snowflake is a cloud data bellwether, but growth has slowed compared with earlier expectations.", "Watch product adoption, AI data tools, and revenue reacceleration."],
  ["NFLX", "Strong, pick battles", "Netflix has ad-supported streaming and live sports momentum, but it is not a pure AI or semi play.", "Watch ad tier growth, live events, and content spending."],
  ["UBER", "Strong, pick battles", "Uber has autonomy optionality through partnerships such as Waymo, plus a global mobility platform.", "Watch ride demand, delivery margins, and autonomous vehicle risk."],
  ["MSTR", "Strong, pick battles", "Strategy is a Bitcoin proxy, useful if you track crypto correlation with risk assets.", "Watch Bitcoin price, leverage, and premium/discount to holdings."],
  ["SMCI", "Strong, pick battles", "Supermicro has AI server demand upside, but it carries higher accounting and execution risk.", "Watch margins, audits, customer concentration, and server demand."],
  ["INTC", "Strong, pick battles", "Intel is a turnaround story and has lagged badly, but it still matters for chip-sector sentiment.", "Watch foundry progress, product roadmap, cash burn, and execution."],
  ["IBM", "Strong, pick battles", "IBM offers steadier enterprise AI through watsonx, but it is more stable than high-growth.", "Watch consulting demand, software growth, and free cash flow."],
  ["VRT", "Strong, pick battles", "Vertiv provides data center power and cooling, an underrated AI infrastructure layer.", "Watch data center buildout demand and margin durability."],
  ["SOFI", "Strong, pick battles", "SoFi is a fintech growth name, but it is more macro-sensitive than core AI infrastructure.", "Watch loan demand, credit quality, deposits, and interest rates."],
  ["HPE", "Strong, pick battles", "HPE has AI servers and networking exposure, overlapping with HPQ-style hardware research.", "Watch AI server orders, networking demand, and hardware margins."]
];

const lessonDetails = {
  "Needs vs Wants": {
    idea: "Needs are things you must pay for to live safely, like food, housing, basic clothes, transportation, and school supplies. Wants are extras that make life nicer, like games, snacks, subscriptions, and upgraded gadgets.",
    details: ["Ask: would life become unsafe or impossible without this?", "Pay needs first, then savings, then wants.", "A want is not bad, but it should fit inside a plan."],
    takeaway: "Smart spending is not about never having fun. It is about choosing fun after the important stuff is covered."
  },
  "Saving Money": {
    idea: "Saving means keeping money for future goals instead of spending it right away. It gives you choices and keeps small problems from turning into emergencies.",
    details: ["Start with a tiny automatic amount.", "Save before spending, not only whatever is left.", "Give savings a name, like phone fund, car fund, or college fund."],
    takeaway: "The habit matters first. The amount can grow later."
  },
  "Emergency Funds": {
    idea: "An emergency fund is money set aside for surprise problems, like a broken phone, car repair, medical cost, or lost income.",
    details: ["Beginner target: $500 to $1,000.", "Long-term target: 3 to 6 months of expenses.", "Keep it in cash or savings, not risky investments."],
    takeaway: "Emergency money protects your investing money from being sold at the wrong time."
  },
  "Avoiding Debt": {
    idea: "Debt means borrowing money and paying it back later. Some debt can help, but high-interest debt can grow fast and trap your future income.",
    details: ["Credit cards can charge very high interest.", "Only borrow when you understand the full cost.", "Pay bills on time to protect your credit history."],
    takeaway: "If debt grows faster than your savings, it can cancel out your progress."
  },
  "Compound Growth": {
    idea: "Compound growth happens when your gains start earning gains too. Time is the powerful ingredient.",
    details: ["Invested money can grow on top of earlier growth.", "Starting younger gives compounding more years to work.", "Small regular investments can become meaningful over time."],
    takeaway: "You do not need to be rich to start. You need time, consistency, and patience."
  },
  "What is a stock?": {
    idea: "A stock is a small ownership piece of a company. If the company does well, the stock can rise. If the company struggles, the stock can fall.",
    details: ["Stocks can move a lot in the short term.", "A stock price is not the same as business quality.", "Learn how the company makes money before buying."],
    takeaway: "Buying a stock means betting on a business, not just a ticker symbol."
  },
  "What is an ETF?": {
    idea: "An ETF is a basket of investments that trades under one ticker. One ETF can hold dozens, hundreds, or thousands of stocks.",
    details: ["VOO and SPY track the S&P 500.", "VTI tracks a broader total US market basket.", "QQQ focuses more on large Nasdaq growth companies."],
    takeaway: "ETFs are often easier for beginners because they spread risk across many companies."
  },
  "Why ETFs are safer": {
    idea: "ETFs are usually safer than single stocks because one company cannot control the whole result as much.",
    details: ["If one company falls, others may help balance it.", "Broad ETFs reduce company-specific risk.", "ETFs can still lose money when the market falls."],
    takeaway: "Safer does not mean risk-free. It means less dependent on one company."
  },
  "Diversification": {
    idea: "Diversification means spreading money across different companies, sectors, and investment types.",
    details: ["Do not put everything into one stock.", "Mixing ETFs and stocks can reduce concentration risk.", "Too many similar tech stocks may not be truly diversified."],
    takeaway: "A diversified portfolio is built to survive surprises."
  },
  "Risk vs Reward": {
    idea: "Risk is the chance things go badly. Reward is the possible gain you hope to earn for taking that risk.",
    details: ["Higher potential return usually means higher risk.", "A popular stock can still be risky.", "Your time horizon changes how much risk makes sense."],
    takeaway: "Good investors ask what can go wrong before thinking about what can go right."
  },
  "Market Indexes": {
    idea: "A market index tracks a group of stocks to show how part of the market is doing.",
    details: ["The S&P 500 tracks about 500 large US companies.", "The Nasdaq-100 is more growth and technology heavy.", "Indexes make it easier to compare your portfolio."],
    takeaway: "Indexes are like scoreboards for different parts of the stock market."
  }
};

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

let marketCapLeaders = [
  { rank: 1, symbol: "NVDA", marketCap: "$4.962T", sourcePrice: "$204.87", note: "AI chip leader and current largest US public company by market cap" },
  { rank: 2, symbol: "GOOGL", marketCap: "$4.348T", sourcePrice: "$356.56", note: "Google Search, YouTube, cloud, ads, Android, and AI" },
  { rank: 3, symbol: "AAPL", marketCap: "$4.342T", sourcePrice: "$295.63", note: "iPhone ecosystem, services, and consumer hardware" },
  { rank: 4, symbol: "MSFT", marketCap: "$2.899T", sourcePrice: "$390.34", note: "Azure, Office, Windows, gaming, and AI software" },
  { rank: 5, symbol: "AMZN", marketCap: "$2.597T", sourcePrice: "$241.51", note: "E-commerce, AWS cloud, ads, streaming, and logistics" },
  { rank: 6, symbol: "AVGO", marketCap: "$1.834T", sourcePrice: "$385.57", note: "AI networking chips and infrastructure software" },
  { rank: 7, symbol: "TSLA", marketCap: "$1.499T", sourcePrice: "$399.15", note: "Electric vehicles, energy, autonomy, and robotics" },
  { rank: 8, symbol: "META", marketCap: "$1.442T", sourcePrice: "$568.43", note: "Facebook, Instagram, WhatsApp, ads, and AI" },
  { rank: 9, symbol: "MU", marketCap: "$1.123T", sourcePrice: "$995.87", note: "Memory chips used in AI servers, data centers, phones, and PCs" },
  { rank: 10, symbol: "BRK.B", marketCap: "$1.047T", sourcePrice: "$485.79", note: "Insurance, rail, energy, and a major investment portfolio" },
  { rank: 11, symbol: "LLY", marketCap: "$1.035T", sourcePrice: "$1,161", note: "Medicines for diabetes, obesity, cancer, and immunology" }
];

let marketCapRanks = Object.fromEntries(marketCapLeaders.map(item => [item.symbol, item]));

let valuationOverrides = {
  NVDA: ["overvalued", "Very strong AI growth, but expectations are extremely high after a huge market-cap run."],
  GOOGL: ["fair", "Strong profits and AI/search leadership, with regulatory risk and high expectations."],
  AAPL: ["fair", "Premium brand and cash flow, but growth must justify the large valuation."],
  MSFT: ["fair", "Durable software/cloud business, but AI spending and valuation are important to watch."],
  AMZN: ["fair", "AWS and ads support growth, while retail margins and valuation still matter."],
  AVGO: ["fair", "AI infrastructure exposure is strong, but chip cycles and acquisition risk matter."],
  TSLA: ["overvalued", "Investors price in future autonomy and growth, making expectations demanding."],
  META: ["fair", "Large cash-generating ads business, but platform and AI spending risks remain."],
  MU: ["overvalued", "Memory demand can be strong, but memory stocks are cyclical and can swing sharply."],
  "BRK.B": ["undervalued", "Diversified businesses and cash-heavy balance sheet can look steadier than high-growth tech."],
  LLY: ["overvalued", "Major medicine growth is exciting, but the valuation depends on continued execution."]
};

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
  CAT: "caterpillar.com",
  CL: "colgatepalmolive.com",
  CMCSA: "corporate.comcast.com",
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
  MRVL: "marvell.com",
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
  PG: "pginvestor.com",
  PLTR: "palantir.com",
  PM: "pmi.com",
  PANW: "paloaltonetworks.com",
  QCOM: "qualcomm.com",
  RTX: "rtx.com",
  SBUX: "starbucks.com",
  SCHW: "schwab.com",
  SMCI: "supermicro.com",
  SMH: "vaneck.com",
  SNOW: "snowflake.com",
  SO: "southerncompany.com",
  SOFI: "sofi.com",
  SPX: "spglobal.com",
  SPG: "simon.com",
  T: "att.com",
  TMO: "thermofisher.com",
  TMUS: "t-mobile.com",
  TSLA: "tesla.com",
  TSM: "tsmc.com",
  TXN: "ti.com",
  UBER: "uber.com",
  UNH: "unitedhealthgroup.com",
  UNP: "up.com",
  UPS: "ups.com",
  USB: "usbank.com",
  V: "visa.com",
  VIX: "cboe.com",
  VRT: "vertiv.com",
  VZ: "verizon.com",
  WFC: "wellsfargo.com",
  WMT: "corporate.walmart.com",
  XOM: "corporate.exxonmobil.com",
  QQQ: "invesco.com",
  VOO: "vanguard.com",
  VTI: "vanguard.com",
  SPY: "ssga.com",
  ZS: "zscaler.com",
  HPE: "hpe.com",
  HPQ: "hp.com",
  MSTR: "strategy.com"
};

const logoOverrides = {
  COF: "https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg"
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
  AMT: "americantower",
  AMZN: "amazon",
  AVGO: "broadcom",
  AXP: "americanexpress",
  BA: "boeing",
  BAC: "bankofamerica",
  BKNG: "bookingdotcom",
  BLK: "blackrock",
  BMY: "bristolmyerssquibb",
  BNY: "bny",
  "BRK.B": "berkshirehathaway",
  C: "citigroup",
  CAT: "caterpillar",
  CL: "colgate",
  CMCSA: "comcast",
  COP: "conocophillips",
  COST: "costco",
  CRM: "salesforce",
  CSCO: "cisco",
  CVS: "cvshealth",
  CVX: "chevron",
  DE: "johndeere",
  DHR: "danaher",
  DIS: "disney",
  DUK: "dukeenergy",
  EMR: "emerson",
  FDX: "fedex",
  GD: "generaldynamics",
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
  ISRG: "intuitivesurgical",
  JNJ: "johnsonandjohnson",
  JPM: "jpmorgan",
  KO: "cocacola",
  LIN: "linde",
  LLY: "eli-lilly",
  LMT: "lockheedmartin",
  LOW: "lowes",
  LRCX: "lamresearch",
  MA: "mastercard",
  MCD: "mcdonalds",
  MDLZ: "mondelez",
  MDT: "medtronic",
  META: "meta",
  MMM: "3m",
  MO: "altria",
  MRK: "merck",
  MRVL: "marvell",
  MS: "morganstanley",
  MSFT: "microsoft",
  MU: "microntechnology",
  NEE: "nexteraenergy",
  NFLX: "netflix",
  NKE: "nike",
  NOW: "servicenow",
  NVDA: "nvidia",
  ORCL: "oracle",
  PANW: "paloaltonetworks",
  PEP: "pepsi",
  PFE: "pfizer",
  PG: "procterandgamble",
  PLTR: "palantir",
  PM: "philipmorrisinternational",
  QCOM: "qualcomm",
  RTX: "rtx",
  SBUX: "starbucks",
  SCHW: "charlesschwab",
  SMCI: "supermicro",
  SNOW: "snowflake",
  SO: "southerncompany",
  SOFI: "sofi",
  SPG: "simon",
  T: "atandt",
  TMO: "thermofisherscientific",
  TMUS: "tmobile",
  TSLA: "tesla",
  TSM: "tsmc",
  TXN: "texasinstruments",
  UBER: "uber",
  UNH: "unitedhealthgroup",
  UNP: "unionpacific",
  UPS: "ups",
  USB: "usbank",
  V: "visa",
  VRT: "vertiv",
  VZ: "verizon",
  WFC: "wellsfargo",
  WMT: "walmart",
  XOM: "exxonmobil",
  ZS: "zscaler",
  HPE: "hpe",
  MSTR: "microstrategy"
};

const logoBrandColors = {
  NVDA: "76B900",
  AAPL: "111111",
  MSFT: "5E5E5E",
  GOOGL: "4285F4",
  AMZN: "FF9900",
  AVGO: "CC092F",
  META: "0866FF",
  TSLA: "E82127",
  LLY: "D52B1E",
  AMD: "ED1C24",
  ADBE: "FF0000",
  CRM: "00A1E0",
  CSCO: "1BA0D7",
  INTC: "0071C5",
  IBM: "052FAD",
  ISRG: "00A3E0",
  ORCL: "F80000",
  QCOM: "3253DC",
  TXN: "CC0000",
  NFLX: "E50914",
  DIS: "113CCF",
  CMCSA: "00AEEF",
  TMUS: "E20074",
  T: "009FDB",
  VZ: "CD040B",
  V: "1434CB",
  MA: "EB001B",
  JPM: "005EB8",
  BAC: "012169",
  GS: "7399C6",
  AXP: "2E77BC",
  C: "004B8D",
  WFC: "D71E28",
  BLK: "000000",
  SCHW: "0073CF",
  WMT: "0071CE",
  COST: "E31837",
  HD: "F96302",
  DHR: "005EB8",
  LOW: "004990",
  MCD: "FFC72C",
  SBUX: "00754A",
  NKE: "111111",
  KO: "D00013",
  PEP: "2151A1",
  PG: "003DA5",
  CL: "E21B2D",
  MDLZ: "502172",
  XOM: "FF6600",
  CVX: "0066B3",
  COP: "EE3124",
  CAT: "FFCD11",
  BA: "1D439C",
  GE: "0870D8",
  GM: "0170CE",
  FDX: "4D148C",
  UPS: "351C15",
  DE: "367C2B",
  LMT: "005DAA",
  RTX: "CE1126",
  UNP: "003DA5",
  JNJ: "D71920",
  PFE: "0093D0",
  MRK: "00857C",
  ABBV: "071D49",
  ABT: "008FC5",
  AMGN: "005EB8",
  GILD: "C4D600",
  TMO: "E7131A",
  ISRG: "00A3E0",
  CVS: "CC0000",
  MDT: "1010EB",
  UNH: "005DAA",
  LRCX: "00A3E0",
  NOW: "81B5A1",
  PLTR: "111111",
  UBER: "111111",
  LIN: "00A3E0"
};

let cash = 10000;
let holdings = { VOO: 8, QQQ: 6, NVDA: 10, MSFT: 5 };
let budget = { rent: 1400, food: 520, transportation: 240, entertainment: 280, savings: 780, investing: 780 };
let savings = { goal: 1000, current: 250, monthly: 150, apy: 4 };
let portfolioBudget = 25000;
let portfolioCash = 1250;
let portfolioHoldings = { QQQ: 4500, VOO: 6000, GOOGL: 3250, NVDA: 2750, MSFT: 2500, AAPL: 1750, META: 1500, AMZN: 1500 };
let selectedPortfolioSymbol = "NVDA";
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

  document.querySelector(".watch-grid").innerHTML = talkedAboutWatchlist.map(([symbol, theme, insight, watch]) => {
    const asset = assetBySymbol(symbol);
    const stock = topStocks.find(item => item.symbol === symbol);
    const quote = quoteSnapshot?.prices?.[symbol];
    const valuation = stock ? valuationLens(stock) : { status: "fair", label: "Fair" };
    const name = asset?.name || stock?.name || watchlistName(symbol);
    const priceLabel = quote?.current ? watchPriceLabel(symbol, quote.current) : "API pending";
    const sourceLabel = quote?.current
      ? `${quote.label || "API quote"} · updated ${quoteSnapshot.updatedLabel}`
      : "Waiting for the next market-data API update.";
    return `
      <article class="card info watch-card">
        <div class="watch-head">
          ${companyLogoMarkup(symbol, name)}
          <div>
            <h4>${symbol}</h4>
            <p>${name}</p>
          </div>
          <span>${priceLabel}</span>
        </div>
        <div class="watch-tags">
          <span class="${theme.includes("Strong") ? "watch-tier-secondary" : "watch-tier-core"}">${theme}</span>
          <span class="valuation-badge ${valuation.status}">${valuation.label}</span>
        </div>
        <p><b>Why people talk about it</b><br>${insight}</p>
        <p><b>Beginner watch point</b><br>${watch}</p>
        <small>Price source: ${sourceLabel}. Educational purposes only.</small>
      </article>
    `;
  }).join("");
}

function watchlistName(symbol) {
  return {
    MRVL: "Marvell Technology",
    PANW: "Palo Alto Networks",
    ZS: "Zscaler",
    SPX: "S&P 500 Index",
    VIX: "Cboe Volatility Index",
    SMH: "VanEck Semiconductor ETF",
    SNOW: "Snowflake",
    MSTR: "Strategy",
    SMCI: "Super Micro Computer",
    VRT: "Vertiv",
    SOFI: "SoFi Technologies",
    HPE: "Hewlett Packard Enterprise",
    TSM: "Taiwan Semiconductor"
  }[symbol] || symbol;
}

function watchPriceLabel(symbol, value) {
  if (["SPX", "VIX"].includes(symbol)) {
    return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  }
  return moneyExact(value);
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
        ${companyLogoMarkup(asset.symbol, asset.name)}
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

function renderPortfolioBuilder() {
  const budgetInput = document.getElementById("portfolioBudgetInput");
  const amountInput = document.getElementById("portfolioAmount");
  budgetInput.value = portfolioBudget;
  setupPortfolioSearch();
  document.getElementById("portfolioQuickPicks").innerHTML = ["NVDA", "MSFT", "AAPL", "GOOGL", "AMZN", "META", "QQQ", "VOO"].map(symbol => {
    const asset = portfolioAssetBySymbol(symbol);
    return `<button class="quick-pick" data-portfolio-pick="${symbol}">${symbol}<small>${asset.name}</small></button>`;
  }).join("");
  document.querySelectorAll("[data-portfolio-pick]").forEach(button => {
    button.addEventListener("click", () => selectPortfolioAsset(button.dataset.portfolioPick));
  });
  budgetInput.addEventListener("change", () => {
    const nextBudget = Math.max(100, Number(budgetInput.value) || 100);
    const scale = nextBudget / portfolioBudget;
    portfolioBudget = nextBudget;
    portfolioCash = Math.max(0, portfolioCash * scale);
    Object.keys(portfolioHoldings).forEach(symbol => {
      portfolioHoldings[symbol] = portfolioHoldings[symbol] * scale;
    });
    updateResearchPortfolio();
  });
  document.getElementById("portfolioInvestBtn").addEventListener("click", () => {
    const amount = Math.max(25, Number(amountInput.value) || 25);
    const investAmount = Math.min(amount, portfolioCash);
    if (investAmount <= 0) return;
    portfolioHoldings[selectedPortfolioSymbol] = (portfolioHoldings[selectedPortfolioSymbol] || 0) + investAmount;
    portfolioCash = +(portfolioCash - investAmount).toFixed(2);
    updateResearchPortfolio();
  });
  selectPortfolioAsset(selectedPortfolioSymbol);
  updateResearchPortfolio();
}

function setupPortfolioSearch() {
  const input = document.getElementById("portfolioSearch");
  const results = document.getElementById("portfolioResults");
  input.value = selectedPortfolioSymbol;

  function drawResults() {
    const query = input.value.trim().toLowerCase();
    const filtered = simulatorAssets
      .filter(asset => `${asset.symbol} ${asset.name} ${asset.sector}`.toLowerCase().includes(query))
      .slice(0, 24);
    results.innerHTML = filtered.map(asset => `
      <button class="asset-option" data-portfolio-asset="${asset.symbol}" type="button">
        ${companyLogoMarkup(asset.symbol, asset.name)}
        <span><b>${asset.symbol} - ${asset.name}</b>${asset.sector}</span>
        <em>${money(asset.price)}</em>
      </button>
    `).join("");
    results.classList.add("open");
    results.querySelectorAll("[data-portfolio-asset]").forEach(option => {
      option.addEventListener("click", () => selectPortfolioAsset(option.dataset.portfolioAsset));
    });
  }

  input.addEventListener("focus", drawResults);
  input.addEventListener("input", drawResults);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const firstOption = results.querySelector("[data-portfolio-asset]");
      if (firstOption) {
        event.preventDefault();
        selectPortfolioAsset(firstOption.dataset.portfolioAsset);
      }
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest("#portfolio .asset-picker")) results.classList.remove("open");
  });
}

function selectPortfolioAsset(symbol) {
  const asset = portfolioAssetBySymbol(symbol);
  selectedPortfolioSymbol = asset.symbol;
  document.getElementById("portfolioSearch").value = `${asset.symbol} - ${asset.name}`;
  document.getElementById("portfolioResults").classList.remove("open");
  document.getElementById("portfolioSelected").innerHTML = `<b>${asset.symbol}</b> ${asset.name} - ${asset.sector} - ${money(asset.price)}<br>${asset.insight}`;
}

function updateResearchPortfolio() {
  const rows = Object.entries(portfolioHoldings)
    .filter(([, dollars]) => dollars > 1)
    .map(([symbol, dollars]) => {
      const asset = portfolioAssetBySymbol(symbol);
      const shares = dollars / asset.price;
      const allocation = dollars / portfolioBudget;
      return { ...asset, dollars, shares, allocation, day: simulatedReturn(symbol, "day"), month: simulatedReturn(symbol, "month"), year: simulatedReturn(symbol, "year") };
    })
    .sort((a, b) => b.dollars - a.dollars);
  const invested = rows.reduce((sum, row) => sum + row.dollars, 0);
  const cashPct = portfolioCash / portfolioBudget;
  const today = weightedReturn(rows, "day") + cashPct * 0.01;
  const month = weightedReturn(rows, "month");
  const year = weightedReturn(rows, "year");
  const colors = ["#2dd4bf", "#ff7a30", "#1f9d8a", "#7dd3fc", "#f43f5e", "#8b5cf6", "#22c55e", "#f59e0b", "#64748b"];
  let angle = 0;
  const segments = rows.map((row, index) => {
    const start = angle;
    angle += row.allocation * 100;
    return `${colors[index % colors.length]} ${start}% ${angle}%`;
  });
  if (portfolioCash > 1) segments.push(`#d1d5db ${angle}% 100%`);

  document.getElementById("portfolioBudgetLabel").textContent = money(portfolioBudget);
  document.getElementById("portfolioCashLabel").textContent = money(portfolioCash);
  document.getElementById("portfolioStockCount").textContent = rows.length;
  document.getElementById("portfolioInvested").textContent = `${money(invested)} invested`;
  setReturnText("portfolioReturn", today);
  setReturnText("portfolioToday", today);
  setReturnText("portfolioMonth", month);
  setReturnText("portfolioYear", year);
  document.getElementById("portfolioDonut").style.background = `radial-gradient(circle at center, var(--panel) 0 54%, transparent 55%), conic-gradient(${segments.join(", ")})`;
  document.getElementById("portfolioLabels").innerHTML = rows.slice(0, 8).map((row, index) => `
    <span><i style="background:${colors[index % colors.length]}"></i><b>${row.symbol}</b> ${Math.round(row.allocation * 100)}%</span>
  `).join("") + (portfolioCash > 1 ? `<span><i style="background:#d1d5db"></i><b>Cash</b> ${Math.round(cashPct * 100)}%</span>` : "");
  document.getElementById("portfolioTable").innerHTML = `
    <div class="portfolio-table-head"><span>Symbol</span><span>Shares</span><span>Value</span><span>% portfolio</span><span>1D return</span><span></span></div>
    ${rows.map(row => `
      <div class="portfolio-row">
        <span class="portfolio-symbol">${companyLogoMarkup(row.symbol, row.name)}<b>${row.symbol}</b><small>${row.name}</small></span>
        <span>${row.shares.toFixed(2)}</span>
        <span>${money(row.dollars)}</span>
        <span>${Math.round(row.allocation * 100)}%</span>
        <span class="${row.day >= 0 ? "green" : "red"}">${signedPct(row.day)}</span>
        <button data-remove-position="${row.symbol}">Remove</button>
      </div>
    `).join("")}
  `;
  document.querySelectorAll("[data-remove-position]").forEach(button => {
    button.addEventListener("click", () => {
      const symbol = button.dataset.removePosition;
      portfolioCash += portfolioHoldings[symbol] || 0;
      delete portfolioHoldings[symbol];
      updateResearchPortfolio();
    });
  });
}

function portfolioAssetBySymbol(symbol) {
  const asset = simAssetBySymbol(symbol) || assetBySymbol(symbol);
  if (asset) return asset;
  const stock = topStocks.find(item => item.symbol === symbol) || topStocks[0];
  return {
    symbol: stock.symbol,
    name: stock.name,
    type: "stock",
    sector: stock.sector,
    risk: riskForSector(stock.sector),
    price: syntheticPrice(stock.symbol, stock.rank),
    insight: defaultDetail(stock)[0]
  };
}

function weightedReturn(rows, key) {
  return rows.reduce((sum, row) => sum + row[key] * row.allocation, 0);
}

function simulatedReturn(symbol, period) {
  const code = symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const ranges = { day: 7, month: 28, year: 72 };
  const offsets = { day: -2.2, month: -8.5, year: -18 };
  return (((code * (period.length + 3)) % (ranges[period] * 100)) / 100 + offsets[period]) / 100;
}

function signedPct(value) {
  const formatted = (value * 100).toFixed(2);
  return `${value >= 0 ? "+" : ""}${formatted}%`;
}

function setReturnText(id, value) {
  const element = document.getElementById(id);
  element.textContent = signedPct(value);
  element.className = value >= 0 ? "positive" : "negative";
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

function renderSavings() {
  const controls = [
    ["goal", "Savings goal", 500, 10000, 100],
    ["current", "Current savings", 0, 10000, 50],
    ["monthly", "Monthly transfer", 25, 1200, 25],
    ["apy", "Savings APY", 0, 6, 0.25]
  ];
  document.querySelector(".savings-inputs").innerHTML = controls.map(([key, label, min, max, step]) => `
    <div class="budget-control">
      <label><span>${label}</span><b id="${key}SavingOut">${key === "apy" ? `${savings[key]}%` : money(savings[key])}</b></label>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${savings[key]}" data-saving="${key}">
    </div>
  `).join("");

  document.querySelectorAll("[data-saving]").forEach(input => {
    input.addEventListener("input", () => {
      savings[input.dataset.saving] = Number(input.value);
      document.querySelectorAll("[data-goal-preset]").forEach(button => button.classList.toggle("active", Number(button.dataset.goalPreset) === savings.goal));
      updateSavings();
    });
  });

  document.querySelectorAll("[data-goal-preset]").forEach(button => {
    button.addEventListener("click", () => {
      savings.goal = Number(button.dataset.goalPreset);
      const goalInput = document.querySelector('[data-saving="goal"]');
      goalInput.value = savings.goal;
      document.querySelectorAll("[data-goal-preset]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      updateSavings();
    });
  });

  updateSavings();
}

function updateSavings() {
  const monthlyRate = savings.apy / 100 / 12;
  let balance = savings.current;
  let months = 0;
  while (balance < savings.goal && months < 240) {
    balance = balance * (1 + monthlyRate) + savings.monthly;
    months += 1;
  }
  const oneYearBalance = projectSavings(12);
  const progress = Math.min(100, Math.round((savings.current / Math.max(savings.goal, 1)) * 100));
  const emergencyMonths = savings.goal <= 1000 ? "starter emergency fund" : savings.goal <= 3000 ? "basic emergency fund" : "strong safety net";

  document.getElementById("goalSavingOut").textContent = money(savings.goal);
  document.getElementById("currentSavingOut").textContent = money(savings.current);
  document.getElementById("monthlySavingOut").textContent = money(savings.monthly);
  document.getElementById("apySavingOut").textContent = `${savings.apy}%`;
  document.getElementById("savingProgress").textContent = `${progress}%`;
  document.getElementById("savingMonths").textContent = months >= 240 ? "20y+" : `${months}`;
  document.getElementById("savingProjection").textContent = money(oneYearBalance);
  document.getElementById("savingMeter").style.width = `${progress}%`;
  document.getElementById("savingAdvice").textContent = `This plan builds a ${emergencyMonths}. Keep emergency savings in cash or a savings account before taking investing risk.`;

  document.querySelector(".saving-plan").innerHTML = [
    ["Starter goal", `${money(Math.min(savings.goal, 1000))}`, "First target: cover a surprise bill without debt."],
    ["Monthly habit", money(savings.monthly), "Automate this transfer right after money comes in."],
    ["One-year path", money(oneYearBalance), "Projected after 12 months with your current APY setting."]
  ].map(([title, value, text]) => `
    <article class="card score-card saving-step">
      <span>${title}</span>
      <b>${value}</b>
      <p>${text}</p>
    </article>
  `).join("");
}

function projectSavings(monthCount) {
  const monthlyRate = savings.apy / 100 / 12;
  let balance = savings.current;
  for (let month = 0; month < monthCount; month += 1) {
    balance = balance * (1 + monthlyRate) + savings.monthly;
  }
  return balance;
}

function setupCoach() {
  const topics = {
    etf: {
      words: ["etf", "voo", "spy", "vti", "smh", "qqq", "fund", "index fund"],
      label: "ETF basics",
      answer: "An ETF is a basket of investments you buy with one ticker. It can hold many companies at once, which helps beginners avoid depending on only one stock.",
      next: "Compare one ETF, like VOO or VTI, against one single stock and notice how much broader the ETF is.",
      plan: ["Use an ETF as the broad example first.", "Check what companies are inside the ETF.", "Compare the ETF's risk with one single stock."]
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
      words: ["diversification", "diversify", "diversified", "allocation", "allocated", "spread out"],
      label: "Diversification",
      answer: "Diversification means spreading money across different investments. If one company has a bad week, the rest of the portfolio can help balance it out.",
      next: "Check your simulator allocation and see if one stock is too large compared with the rest."
    },
    compound: {
      words: ["compound", "interest", "growth"],
      label: "Compound growth",
      answer: "Compound growth means your gains can start earning gains too. The longer money stays invested, the more time it has to build on itself.",
      next: "Try increasing savings or investing in the budget simulator and watch how net worth growth changes.",
      plan: ["Start with a small monthly amount.", "Keep the money invested for years, not days.", "Use broad ETFs as the simple example."]
    },
    risk: {
      words: ["risk", "safe", "reward", "lose money", "overvalued", "undervalued", "fair value", "valuation"],
      label: "Risk and reward",
      answer: "Risk is the chance an investment loses value or does worse than expected. Reward is the possible gain you hope to earn for taking that risk.",
      next: "Use ETFs for a steadier beginner example, then compare them with a high-growth single stock.",
      plan: ["Avoid putting everything in one stock.", "Compare risk score before buying.", "Keep emergency money out of the market."]
    },
    budget: {
      words: ["budget", "saving", "salary", "spending", "rent", "food", "emergency"],
      label: "Budget planning",
      answer: "A budget is a plan for where money goes before it disappears. A strong beginner budget covers needs first, saves money, invests only after basics are handled, and leaves some room for fun.",
      next: "Use the Budget tab and try to keep savings plus investing near 20% or more if the numbers fit.",
      plan: ["Pay needs first: rent, food, transportation.", "Build a $500-$1,000 starter emergency fund.", "Keep entertainment controlled, but not zero."]
    },
    portfolio: {
      words: ["portfolio", "diversified", "allocation", "holdings", "investing plan"],
      label: "Portfolio planning",
      answer: "A beginner portfolio should avoid depending on one company. Broad ETFs can be the foundation, while individual stocks can be smaller learning positions.",
      next: "In the Simulator tab, compare a one-stock portfolio with a portfolio built around ETFs like VOO, VTI, or QQQ.",
      plan: ["Use ETFs as the core of the portfolio.", "Keep single stocks smaller than the ETF section.", "Check sector exposure so everything is not just tech."]
    },
    stock: {
      words: ["stock", "company", "shares", "ticker", "buy", "sell", "invest"],
      label: "Stock research",
      answer: "A stock is a small ownership piece of one company. Beginners should learn what the business does, how it makes money, what could go wrong, and how expensive expectations already are.",
      next: "Open a stock card, read the plain-English business summary, then compare it with an ETF to see the difference between one company and a basket.",
      plan: ["Understand the business before the price chart.", "List one reason investors like it and one risk.", "Keep single-stock ideas smaller than diversified ETF examples."]
    }
  };
  Object.values(topics).forEach(topic => {
    topic.plan ||= ["Learn the idea first.", "Practice in the simulator.", "Keep decisions simple and diversified."];
  });

  const topicList = Object.values(topics);
  const knownSymbols = new Set([
    ...assets.map(asset => asset.symbol),
    ...topStocks.map(stock => stock.symbol),
    ...talkedAboutWatchlist.map(([symbol]) => symbol),
    "SPX",
    "VIX"
  ]);

  function findTopic(question) {
    const scored = topicList.map(topic => ({
      topic,
      score: topic.words.reduce((total, word) => total + (question.includes(word) ? 1 : 0), 0)
    })).sort((a, b) => b.score - a.score);
    return scored[0].score > 0 ? scored[0].topic : topics.portfolio;
  }

  function extractTickers(rawQuestion) {
    const matches = rawQuestion.toUpperCase().match(/\b[A-Z]{1,5}\b/g) || [];
    return [...new Set(matches.filter(symbol => knownSymbols.has(symbol)))].slice(0, 4);
  }

  function getSymbolName(symbol) {
    return assetBySymbol(symbol)?.name
      || topStocks.find(stock => stock.symbol === symbol)?.name
      || {
        SPX: "S&P 500 Index",
        VIX: "CBOE Volatility Index",
        SMH: "VanEck Semiconductor ETF",
        QQQ: "Invesco QQQ",
        SPY: "SPDR S&P 500 ETF"
      }[symbol]
      || symbol;
  }

  function buildTickerCard(symbol) {
    const watch = talkedAboutWatchlist.find(([watchSymbol]) => watchSymbol === symbol);
    const asset = assetBySymbol(symbol);
    const stock = topStocks.find(item => item.symbol === symbol);
    const quote = quoteSnapshot.prices[symbol];
    const detail = companyDetails[symbol] || (stock ? defaultDetail(stock) : null);
    const name = getSymbolName(symbol);
    const priceText = quote
      ? `${watchPriceLabel(symbol, quote.current)} ${quote.label || "quote"}`
      : (asset?.price ? `${moneyExact(asset.price)} simulator price` : "price snapshot not loaded");
    const insight = watch?.[2] || asset?.insight || detail?.[0] || "Use this ticker as a research example, then compare it with a diversified ETF.";
    const risk = watch?.[3] || detail?.[2] || "Check concentration, valuation, competition, and whether expectations are already high.";

    return `
      <div class="coach-cardlet">
        <strong>${escapeHtml(symbol)} - ${escapeHtml(name)}</strong>
        <small class="price-line">${escapeHtml(priceText)}</small>
        <small>${escapeHtml(insight)}</small>
        <small><b>Risk check:</b> ${escapeHtml(risk)}</small>
      </div>
    `;
  }

  function buildPlan(topic, tickers, question) {
    if (question.includes("budget") || question.includes("saving") || question.includes("salary") || question.includes("spending")) {
      return ["Cover needs first: rent, food, transportation, and basic bills.", "Build a starter emergency fund before taking big investing risk.", "Use the simulator to test saving plus investing at 15%-25% of income."];
    }
    if (tickers.length) {
      return ["Start with what each company or ETF actually does.", "Compare the ticker with SPY or VOO so you have broad-market context.", "Limit single-stock exposure in the simulator and watch how diversification changes the risk score."];
    }
    return topic.plan;
  }

  function buildTryNext(topic, tickers) {
    if (tickers.length) {
      return `Search ${tickers[0]} in the Simulator, add a small practice allocation, then compare it with SPY, QQQ, or VTI.`;
    }
    if (topic === topics.budget) return "Open the Budget tab and move savings/investing up or down to see how the financial score changes.";
    if (topic === topics.portfolio) return "Open the Portfolio tab, enter a practice budget, then build one ETF-heavy portfolio and one stock-heavy portfolio.";
    return topic.next;
  }

  function respond() {
    const rawQuestion = document.getElementById("coachQuestion").value.trim();
    const question = rawQuestion.toLowerCase();
    const topic = findTopic(question);
    const tickers = extractTickers(rawQuestion);
    const plan = buildPlan(topic, tickers, question);
    const tickerCards = tickers.map(buildTickerCard).join("");
    const summary = rawQuestion
      ? `You are asking about: "${rawQuestion}"`
      : "You are asking for a beginner investing explanation and a simple next step.";
    const analysis = tickers.length
      ? `I detected ${tickers.join(", ")} and treated this as a ${topic.label.toLowerCase()} question. I will explain the idea, then connect it to risk and diversification.`
      : `This looks like a ${topic.label.toLowerCase()} question. I will keep it beginner-friendly and focus on learning before any buy/sell decision.`;

    document.getElementById("coachAnswer").innerHTML = `
      <div class="coach-response">
        <div class="coach-agent-head">
          <span class="coach-avatar">AI</span>
          <div><h4>FinCoach</h4><p>I analyzed your question, pulled out the main topic, and built a clear learning plan.</p></div>
        </div>
        <div><b>I understood</b><p>${escapeHtml(summary)}</p></div>
        <div><b>Question analysis</b><p>${escapeHtml(analysis)}</p></div>
        <div><b>Simple answer</b><p>${topic.answer}</p></div>
        ${tickerCards ? `<div><b>Ticker context</b><div class="coach-grid">${tickerCards}</div></div>` : ""}
        <div><b>Ideas and plan</b><div class="coach-plan">${plan.map(step => `<span>${escapeHtml(step)}</span>`).join("")}</div></div>
        <div><b>Try this in Investopedia</b><p>${escapeHtml(buildTryNext(topic, tickers))}</p></div>
        <div><b>Risk reminder</b><p>A strong beginner approach is usually to keep emergency money separate, use diversified ETFs as the core example, and treat single stocks as smaller learning positions in the simulator.</p></div>
        <div><span class="disclaimer">Educational purposes only.</span></div>
      </div>
    `;
  }

  document.getElementById("coachBtn").addEventListener("click", respond);
  document.getElementById("coachQuestion").addEventListener("keydown", event => {
    if (event.key === "Enter") respond();
  });
  document.querySelectorAll("[data-coach-prompt]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("coachQuestion").value = button.dataset.coachPrompt;
      respond();
    });
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
          ${companyLogoMarkup(stock.symbol, stock.name)}
        </div>
        <div class="symbol">${stock.symbol}</div>
        <h4>${stock.name}</h4>
        <p>${stock.sector}</p>
        <span class="valuation-badge ${valuationLens(stock).status}">${valuationLens(stock).label}</span>
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
        ${platformLogoMarkup(platform)}
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

function setupLessons() {
  document.querySelectorAll("#learn li").forEach(item => {
    const title = item.textContent.trim();
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", `Open lesson: ${title}`);
    item.addEventListener("click", () => openLessonDetail(title));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLessonDetail(title);
      }
    });
  });
}

function openLessonDetail(title) {
  const lesson = lessonDetails[title] || defaultLessonDetail(title);
  document.getElementById("stockDetail").innerHTML = `
    <div class="detail-hero">
      <div class="logo-wrap"><span class="logo-fallback" style="display:block">LE</span></div>
      <div>
        <h3>${title}</h3>
        <p>Beginner lesson • Investopedia</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-box"><b>Main idea</b><p>${lesson.idea}</p></div>
      <div class="detail-box"><b>Key details</b><p>${lesson.details.map(detail => `• ${detail}`).join("<br>")}</p></div>
      <div class="detail-box"><b>Beginner takeaway</b><p>${lesson.takeaway}</p></div>
      <div class="detail-box"><b>Try it in the app</b><p>Use the budget simulator or investing simulator to practice this idea without using real money.</p></div>
    </div>
  `;
  const modal = document.getElementById("stockModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function defaultLessonDetail(title) {
  return {
    idea: `${title} is an important beginner investing topic. The goal is to understand the business or concept before making decisions.`,
    details: ["Learn what the term means.", "Look at examples in the simulator.", "Compare risk, reward, and time horizon."],
    takeaway: "Simple understanding beats guessing."
  };
}

function platformLogoMarkup(platform) {
  const logos = {
    fidelity: ["./assets/platforms/fidelity.png", "Fidelity Youth logo"],
    greenlight: ["./assets/platforms/greenlight.svg", "Greenlight logo"],
    robinhood: ["./assets/platforms/robinhood.png", "Robinhood logo"],
    schwab: ["./assets/platforms/schwab.png", "Schwab Teen Investor logo"]
  };
  const logo = logos[platform.logo];
  if (!logo) {
    return `<div class="platform-logo actual"><span class="platform-fallback" style="display:block">${platform.name}</span></div>`;
  }
  return `
    <div class="platform-logo actual ${platform.logo}" aria-label="${logo[1]}">
      <img src="${logo[0]}" alt="${logo[1]}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="platform-fallback">${platform.name}</span>
    </div>
  `;
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
        ${companyLogoMarkup(leader.symbol, name)}
        <span class="leader-rank">Market cap #${leader.rank}</span>
        <h4>${leader.symbol} · ${name}</h4>
        ${quote ? `<div class="leader-price"><b>${moneyExact(quote.current)}</b><span>${change >= 0 ? "+" : ""}${(change * 100).toFixed(2)}%</span></div>` : ""}
        <p>${leader.marketCap} market cap · ${sector}</p>
        <p>Source price: ${leader.sourcePrice} · ${marketCapSnapshotLabel}</p>
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
  const valuation = valuationLens(stock);
  const quote = quoteSnapshot.prices[symbol];
  const quoteBox = quote
    ? `<div class="detail-box"><b>Current price snapshot</b><p>${moneyExact(quote.current)} ${quote.label}, updated ${quoteSnapshot.updatedLabel}. Official close: ${moneyExact(quote.close)} on ${quoteSnapshot.officialCloseDate}.</p></div>`
    : "";
  document.getElementById("stockDetail").innerHTML = `
    <div class="detail-hero">
      ${companyLogoMarkup(stock.symbol, stock.name)}
      <div>
        <h3>${stock.symbol}</h3>
        <p>${stock.name} • ${stock.sector}</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-box"><b>What it does</b><p>${does}</p></div>
      <div class="detail-box"><b>Why investors watch it</b><p>${why}</p></div>
      <div class="detail-box"><b>Main risks</b><p>${risks}</p></div>
      <div class="detail-box"><b>Valuation lens</b><p>${valuation.label}: ${valuation.reason} This is a learning signal, not a buy/sell rating.</p></div>
      ${quoteBox}
      <div class="detail-box"><b>Beginner takeaway</b><p>${capLeader ? `Market cap rank #${capLeader.rank}: ${capLeader.marketCap} market cap in the ${marketCapSnapshotLabel}. ${capLeader.note}. ` : ""}${stockLens(stock)}. Learn what drives the business before comparing price, growth, debt, valuation, and analyst expectations.</p></div>
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

function valuationLens(stock) {
  const override = valuationOverrides[stock.symbol];
  if (override) {
    return {
      status: override[0],
      label: labelForValuation(override[0]),
      reason: override[1]
    };
  }

  const sector = stock.sector;
  if (["Energy", "Financials", "Consumer Staples", "Utilities"].includes(sector)) {
    return {
      status: "undervalued",
      label: "Undervalued",
      reason: "This sector often trades on cash flow, dividends, or steadier earnings instead of high growth hype."
    };
  }
  if (["Information Technology", "Consumer Discretionary", "Communication Services"].includes(sector)) {
    return {
      status: "overvalued",
      label: "Overvalued",
      reason: "Growth sectors can become expensive when investors expect fast future earnings."
    };
  }
  return {
    status: "fair",
    label: "Fair",
    reason: "The business should be compared with earnings growth, debt, margins, competition, and analyst expectations."
  };
}

function labelForValuation(status) {
  return {
    undervalued: "Undervalued",
    fair: "Fair",
    overvalued: "Overvalued"
  }[status] || "Fair";
}

async function hydrateMarketData() {
  try {
    const response = await fetch(`market-data.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    applyMarketData(data);
    renderCards();
    if (document.querySelector(".top-stock-grid")) renderTopStocks();
    if (document.querySelector("#selectedAsset")) selectSimAsset(selectedSimSymbol);
  } catch {
    // Static fallback data keeps the presentation working if the scheduled update is unavailable.
  }
}

function applyMarketData(data) {
  if (data.updatedLabel) quoteSnapshot.updatedLabel = data.updatedLabel;
  if (data.officialCloseDate) quoteSnapshot.officialCloseDate = data.officialCloseDate;
  if (data.marketCapSnapshotLabel) marketCapSnapshotLabel = data.marketCapSnapshotLabel;
  if (data.prices) {
    quoteSnapshot.prices = { ...quoteSnapshot.prices, ...data.prices };
    Object.entries(data.prices).forEach(([symbol, priceData]) => {
      const asset = assets.find(item => item.symbol === symbol);
      if (asset && Number.isFinite(priceData.current)) asset.price = priceData.current;
    });
  }
  if (Array.isArray(data.marketCapLeaders) && data.marketCapLeaders.length) {
    marketCapLeaders = data.marketCapLeaders;
    marketCapRanks = Object.fromEntries(marketCapLeaders.map(item => [item.symbol, item]));
  }
  if (data.valuationOverrides) {
    valuationOverrides = Object.fromEntries(
      Object.entries(data.valuationOverrides).map(([symbol, item]) => [
        symbol,
        [item.status || "fair", item.reason || "Updated valuation signal from the latest data snapshot."]
      ])
    );
  }
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

function companyLogoMarkup(symbol, name) {
  const source = logoUrl(symbol);
  const safeSymbol = symbol.replace(".B", "").slice(0, 5);
  if (!source) {
    const special = specialCompanyLogoMarkup(symbol, name);
    return special || `<div class="logo-wrap ticker-logo" title="${name} logo badge"><span class="logo-fallback visible">${safeSymbol}</span></div>`;
  }
  return `
    <div class="logo-wrap" title="${name} logo">
      <img class="company-logo" src="${source}" alt="${name} logo" loading="lazy" data-logo-index="0" onerror="advanceLogo(this, '${symbol}')">
      <span class="logo-fallback">${safeSymbol}</span>
    </div>
  `;
}

function specialCompanyLogoMarkup(symbol, name) {
  const safeSymbol = symbol.replace(".B", "").slice(0, 5);
  const map = {
    MSFT: `<div class="full-logo msft"><span></span><span></span><span></span><span></span></div>`,
    GOOGL: `<div class="full-logo googl"><span>G</span></div>`,
    AMZN: `<div class="full-logo amzn"><span>amazon</span></div>`,
    NVDA: `<div class="full-logo nvda"><span>NVIDIA</span></div>`,
    META: `<div class="full-logo meta"><span>∞</span></div>`,
    TSLA: `<div class="full-logo tsla"><span>T</span></div>`,
    MA: `<div class="full-logo mastercard"></div>`,
    V: `<div class="full-logo visa"><span>VISA</span></div>`,
    WMT: `<div class="full-logo wmt"><span>Walmart</span></div>`,
    JPM: `<div class="full-logo jpm"><span>JPM</span></div>`,
    KO: `<div class="full-logo ko"><span>Coca-Cola</span></div>`,
    PEP: `<div class="full-logo pep"><span>pepsi</span></div>`
  };
  if (!map[symbol]) return "";
  return `<div class="logo-wrap full-brand" title="${name} logo">${map[symbol]}<span class="logo-fallback">${safeSymbol}</span></div>`;
}

function logoSources(symbol) {
  const sources = [];
  if (logoOverrides[symbol]) {
    sources.push(logoOverrides[symbol]);
  } else if (logoDomains[symbol]) {
    sources.push(`https://cdn.tickerlogos.com/${logoDomains[symbol]}`);
  }
  if (simpleIconSlugs[symbol]) {
    const color = logoBrandColors[symbol];
    sources.push(color ? `https://cdn.simpleicons.org/${simpleIconSlugs[symbol]}/${color}` : `https://cdn.simpleicons.org/${simpleIconSlugs[symbol]}`);
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
  image.parentElement.classList.add("ticker-logo");
  image.nextElementSibling.classList.add("visible");
}

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

setupTabs();
renderCards();
setupLessons();
renderSimulator();
renderPortfolioBuilder();
renderBudget();
renderSavings();
setupCoach();
renderTopStocks();
renderPlatforms();
hydrateMarketData();
