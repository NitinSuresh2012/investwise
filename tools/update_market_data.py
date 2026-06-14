import json
import math
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

SYMBOLS = [
    "AAPL", "ABBV", "ABT", "ACN", "ADBE", "AMAT", "AMD", "AMGN", "AMT", "AMZN",
    "AVGO", "AXP", "BA", "BAC", "BKNG", "BLK", "BMY", "BNY", "BRK-B", "C",
    "CAT", "CL", "CMCSA", "COF", "COP", "COST", "CRM", "CSCO", "CVS", "CVX",
    "DE", "DHR", "DIS", "DUK", "EMR", "FDX", "GD", "GE", "GEV", "GILD",
    "GM", "GOOGL", "GS", "HD", "HON", "IBM", "INTC", "INTU", "ISRG", "JNJ",
    "JPM", "KO", "LIN", "LLY", "LMT", "LOW", "LRCX", "MA", "MCD", "MDLZ",
    "MDT", "META", "MMM", "MO", "MRK", "MS", "MSFT", "MU", "NEE", "NFLX",
    "NKE", "NOW", "NVDA", "ORCL", "PEP", "PFE", "PG", "PLTR", "PM", "QCOM",
    "RTX", "SBUX", "SCHW", "SO", "SPG", "T", "TMO", "TMUS", "TSLA", "TXN",
    "UBER", "UNH", "UNP", "UPS", "USB", "V", "VZ", "WFC", "WMT", "XOM"
]

NOTES = {
    "NVDA": "AI chip leader and current mega-cap heavyweight",
    "GOOGL": "Google Search, YouTube, cloud, ads, Android, and AI",
    "AAPL": "iPhone ecosystem, services, and consumer hardware",
    "MSFT": "Azure, Office, Windows, gaming, and AI software",
    "AMZN": "E-commerce, AWS cloud, ads, streaming, and logistics",
    "AVGO": "AI networking chips and infrastructure software",
    "META": "Facebook, Instagram, WhatsApp, ads, and AI",
    "TSLA": "Electric vehicles, energy, autonomy, and robotics",
    "BRK.B": "Insurance, rail, energy, and a major investment portfolio",
    "LLY": "Medicines for diabetes, obesity, cancer, and immunology"
}


def yahoo_symbol(symbol):
    return symbol.replace(".", "-")


def display_symbol(symbol):
    return symbol.replace("-", ".")


def money(value):
    if value is None or not math.isfinite(value):
        return "n/a"
    return f"${value:,.2f}"


def compact_market_cap(value):
    if value is None or not math.isfinite(value):
        return "n/a"
    if value >= 1_000_000_000_000:
        return f"${value / 1_000_000_000_000:.3f}T"
    if value >= 1_000_000_000:
        return f"${value / 1_000_000_000:.1f}B"
    return f"${value:,.0f}"


def fetch_quotes(symbols):
    results = []
    for start in range(0, len(symbols), 40):
        batch = symbols[start:start + 40]
        query = urllib.parse.urlencode({"symbols": ",".join(batch)})
        url = f"https://query1.finance.yahoo.com/v7/finance/quote?{query}"
        request = urllib.request.Request(
            url,
            headers={"User-Agent": "Investopedia education site data updater"}
        )
        with urllib.request.urlopen(request, timeout=25) as response:
            payload = json.loads(response.read().decode("utf-8"))
        results.extend(payload.get("quoteResponse", {}).get("result", []))
        time.sleep(0.4)
    return results


def valuation_status(quote):
    pe = quote.get("trailingPE") or quote.get("forwardPE")
    market_cap = quote.get("marketCap")
    growth_sector = quote.get("sector") in {"Technology", "Communication Services", "Consumer Cyclical"}
    if pe and pe > 45:
        return "overvalued", f"P/E around {pe:.1f}; investors are paying a high price for expected growth."
    if pe and pe < 18 and market_cap and market_cap > 50_000_000_000:
        return "undervalued", f"P/E around {pe:.1f}; the stock may look cheaper than many large-cap peers."
    if growth_sector and pe and pe > 30:
        return "overvalued", f"Growth stock with P/E around {pe:.1f}; expectations may be high."
    return "fair", "Valuation looks like a watchlist case; compare earnings growth, margins, debt, and competition."


def main():
    quotes = fetch_quotes(SYMBOLS)
    quotes_by_symbol = {display_symbol(item["symbol"]): item for item in quotes if item.get("symbol")}
    now = datetime.now(timezone.utc)
    prices = {}
    valuation = {}
    ranked = []

    for symbol, quote in quotes_by_symbol.items():
        current = quote.get("regularMarketPrice")
        close = quote.get("regularMarketPreviousClose") or quote.get("regularMarketPrice")
        if current:
            prices[symbol] = {
                "current": round(float(current), 2),
                "close": round(float(close), 2) if close else round(float(current), 2),
                "label": "delayed quote"
            }
        status, reason = valuation_status(quote)
        valuation[symbol] = {"status": status, "reason": reason}
        cap = quote.get("marketCap")
        if cap:
            ranked.append((float(cap), symbol, quote))

    ranked.sort(reverse=True, key=lambda row: row[0])
    leaders = []
    for rank, (cap, symbol, quote) in enumerate(ranked[:11], start=1):
        leaders.append({
            "rank": rank,
            "symbol": symbol,
            "marketCap": compact_market_cap(cap),
            "sourcePrice": money(quote.get("regularMarketPrice")),
            "note": NOTES.get(symbol, quote.get("shortName") or quote.get("longName") or "Large US public company")
        })

    output = {
        "updatedLabel": now.strftime("%b %d, %Y %I:%M %p UTC"),
        "officialCloseDate": now.strftime("%b %d, %Y"),
        "marketCapSnapshotLabel": f"Yahoo Finance quote snapshot generated {now.strftime('%b %d, %Y %I:%M %p UTC')}",
        "prices": prices,
        "marketCapLeaders": leaders,
        "valuationOverrides": valuation
    }

    Path("market-data.json").write_text(json.dumps(output, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
