/** @type {Array<{id: string, topic: string, category: string, question: string, answer: string, hint?: string}>} */
const CARDS = [
  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 2: Liquidity Ratios
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fa-2-1",
    topic: "Liquidity Ratios",
    category: "Financial Analysis",
    question: "Current Ratio",
    answer: "\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}",
    hint: "Most inclusive liquidity measure"
  },
  {
    id: "fa-2-2",
    topic: "Liquidity Ratios",
    category: "Financial Analysis",
    question: "Quick Ratio",
    answer: "\\frac{\\text{Cash} + \\text{Short-term Investments} + \\text{AR}}{\\text{Current Liabilities}}",
    hint: "Excludes inventory & prepaid"
  },
  {
    id: "fa-2-3",
    topic: "Liquidity Ratios",
    category: "Financial Analysis",
    question: "Cash Ratio",
    answer: "\\frac{\\text{Cash} + \\text{Short-term Investments}}{\\text{Current Liabilities}}",
    hint: "Most conservative — excludes AR, inventory, prepaid"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 3: Leverage Ratios
  // ═══════════════════════════════════════════════════════════════

  // Indebtedness
  {
    id: "fa-3-1",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Total Liabilities to Total Assets",
    answer: "\\frac{\\text{Total Liabilities}}{\\text{Total Assets}}",
    hint: "Indebtedness ratio"
  },
  {
    id: "fa-3-2",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Long-Term Debt to Capital",
    answer: "\\frac{\\text{Long-Term Debt}}{\\text{Long-Term Debt} + \\text{Equity}}",
    hint: "Indebtedness ratio"
  },
  {
    id: "fa-3-3",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Debt to Equity",
    answer: "\\frac{\\text{Total Debt}}{\\text{Total Equity}}",
    hint: "Indebtedness ratio"
  },
  {
    id: "fa-3-4",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Debt to Tangible Net Worth",
    answer: "\\frac{\\text{Total Debt}}{\\text{Total Equity} - \\text{Intangible Assets}}",
    hint: "Indebtedness ratio — strips intangibles from equity"
  },

  // Coverage
  {
    id: "fa-3-5",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Times Interest Earned (TIE)",
    answer: "\\frac{\\text{EBIT}}{\\text{Interest Expense}}",
    hint: "Coverage ratio"
  },
  {
    id: "fa-3-6",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Cash Coverage",
    answer: "\\frac{\\text{EBITDA}}{\\text{Interest Expense}}",
    hint: "Coverage ratio — adds back depreciation"
  },
  {
    id: "fa-3-7",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Fixed-Charge Coverage",
    answer: "\\frac{\\text{EBIT} + \\text{Fixed Charges}}{\\text{Interest Expense} + \\text{Fixed Charges}}",
    hint: "Coverage ratio — includes lease & other fixed obligations"
  },

  // Operating Leverage
  {
    id: "fa-3-8",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Degree of Operating Leverage (DOL)",
    answer: "\\frac{\\%\\Delta\\text{ EBIT}}{\\%\\Delta\\text{ Revenue}}",
    hint: "Sensitivity of EBIT to revenue changes"
  },
  {
    id: "fa-3-9",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Degree of Financial Leverage (DFL)",
    answer: "\\frac{\\%\\Delta\\text{ Net Income}}{\\%\\Delta\\text{ EBIT}}",
    hint: "Sensitivity of net income to EBIT changes"
  },
  {
    id: "fa-3-10",
    topic: "Leverage Ratios",
    category: "Financial Analysis",
    question: "Degree of Total Leverage (DTL)",
    answer: "\\text{DOL} \\times \\text{DFL}",
    hint: "Combined operating + financial leverage"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 4: Activity Ratios
  // ═══════════════════════════════════════════════════════════════

  // Turnover Ratios
  {
    id: "fa-4-1",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Inventory Turnover",
    answer: "\\frac{\\text{Cost of Goods Sold}}{\\text{Average Inventory}}",
    hint: "Uses COGS as numerator"
  },
  {
    id: "fa-4-2",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Accounts Receivable Turnover",
    answer: "\\frac{\\text{Net Credit Sales}}{\\text{Average Accounts Receivable}}",
    hint: "Uses Revenue as numerator"
  },
  {
    id: "fa-4-3",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Accounts Payable Turnover",
    answer: "\\frac{\\text{COGS}}{\\text{Average Accounts Payable}}",
    hint: "Uses COGS as numerator"
  },
  {
    id: "fa-4-4",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Current Asset Turnover",
    answer: "\\frac{\\text{Revenue}}{\\text{Average Current Assets}}",
    hint: "Asset-based turnover uses Revenue"
  },
  {
    id: "fa-4-5",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Fixed Asset Turnover",
    answer: "\\frac{\\text{Revenue}}{\\text{Average Net Fixed Assets}}",
    hint: "Asset-based turnover uses Revenue"
  },
  {
    id: "fa-4-6",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Total Asset Turnover",
    answer: "\\frac{\\text{Revenue}}{\\text{Average Total Assets}}",
    hint: "Asset-based turnover uses Revenue"
  },

  // Days Ratios
  {
    id: "fa-4-7",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Days Inventory (DI)",
    answer: "\\frac{\\text{Average Inventory}}{\\text{COGS}} \\times \\text{Number of Days in Period}",
    hint: "Inverse of inventory turnover × days"
  },
  {
    id: "fa-4-8",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Days Receivables (DR)",
    answer: "\\frac{\\text{Average Accounts Receivable}}{\\text{Net Credit Sales}} \\times \\text{Number of Days in Period}",
    hint: "Inverse of AR turnover × days"
  },
  {
    id: "fa-4-9",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Days Payables (DP)",
    answer: "\\frac{\\text{Average Accounts Payable}}{\\text{COGS}} \\times \\text{Number of Days in Period}",
    hint: "Inverse of AP turnover × days"
  },

  // Derived
  {
    id: "fa-4-10",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Operating Cycle",
    answer: "\\text{Operating Cycle} = \\text{DI} + \\text{DR}",
    hint: "Days to convert inventory to cash"
  },
  {
    id: "fa-4-11",
    topic: "Activity Ratios",
    category: "Financial Analysis",
    question: "Cash Conversion Cycle (CCC)",
    answer: "\\text{CCC} = \\text{DI} + \\text{DR} - \\text{DP}",
    hint: "Operating cycle minus payment deferral"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 5: Profitability Ratios
  // ═══════════════════════════════════════════════════════════════

  // Margins
  {
    id: "fa-5-1",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Gross Profit Margin",
    answer: "\\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}}",
    hint: "Margin ratio"
  },
  {
    id: "fa-5-2",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "EBIT Margin",
    answer: "\\frac{\\text{EBIT}}{\\text{Revenue}}",
    hint: "Margin ratio — operating profitability"
  },
  {
    id: "fa-5-3",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "EBITDA Margin",
    answer: "\\frac{\\text{EBITDA}}{\\text{Revenue}}",
    hint: "Margin ratio — adds back depreciation"
  },
  {
    id: "fa-5-4",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Net Profit Margin",
    answer: "\\frac{\\text{Net Income}}{\\text{Revenue}}",
    hint: "Margin ratio — bottom line"
  },

  // Returns
  {
    id: "fa-5-5",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "ROA — Return on Assets",
    answer: "\\frac{\\text{Net Income}}{\\text{Average Total Assets}}",
    hint: "Return ratio"
  },
  {
    id: "fa-5-6",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "ROE — Return on Equity",
    answer: "\\frac{\\text{Net Income}}{\\text{Average Total Equity}}",
    hint: "Return ratio"
  },
  {
    id: "fa-5-7",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "ROE — DuPont Analysis",
    answer: "\\frac{\\text{Net Income}}{\\text{Revenue}} \\times \\frac{\\text{Revenue}}{\\text{Avg Total Assets}} \\times \\frac{\\text{Avg Total Assets}}{\\text{Avg Equity}}",
    hint: "Profit Margin × Asset Turnover × Equity Multiplier"
  },
  {
    id: "fa-5-8",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "ROIC — Return on Invested Capital",
    answer: "\\frac{\\text{Net Income}}{\\text{Long-term Debt} + \\text{Equity}}",
    hint: "Return ratio — all invested capital"
  },
  {
    id: "fa-5-9",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "ROI — Return on Investment",
    answer: "\\frac{\\text{Gain from Investment} - \\text{Cost of Investment}}{\\text{Cost of Investment}}",
    hint: "Return ratio"
  },
  {
    id: "fa-5-10",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Basic EPS",
    answer: "\\frac{\\text{Net Income} - \\text{Preferred Dividends}}{\\text{Weighted Average Outstanding Shares}}",
    hint: "Earnings per share for common shareholders"
  },
  {
    id: "fa-5-11",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Diluted EPS",
    answer: "\\frac{(\\text{Net Income} - \\text{Pref. Div.}) + \\text{Conv. Pref. Div.} + \\text{Conv. Bond After-Tax Int.}}{\\text{Wtd Avg Common Shares} + \\text{Diluted Shares}}",
    hint: "Assumes all convertible securities are exercised"
  },

  // Performance Measures
  {
    id: "fa-5-12",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Free Cash Flow (FCF)",
    answer: "\\text{Cash Flow from Operating Activities} - \\text{Capital Expenditures}",
    hint: "General cash generation"
  },
  {
    id: "fa-5-13",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Free Cash Flow to the Firm (FCFF)",
    answer: "\\text{OCF} + [\\text{Interest Expense} \\times (1 - \\text{Tax Rate})] - \\text{CapEx}",
    hint: "Enterprise valuation — all capital providers"
  },
  {
    id: "fa-5-14",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Free Cash Flow to Equity (FCFE)",
    answer: "\\text{OCF} - \\text{CapEx} + \\Delta\\text{Debt}",
    hint: "Equity valuation / dividend capacity"
  },
  {
    id: "fa-5-15",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Economic Profit (EVA)",
    answer: "\\text{EBIT} \\times (1 - \\text{Tax Rate}) - (\\text{Avg Capital Employed} \\times \\text{WACC})",
    hint: "Value created above cost of capital"
  },
  {
    id: "fa-5-16",
    topic: "Profitability Ratios",
    category: "Financial Analysis",
    question: "Net PP&E",
    answer: "\\text{Gross Fixed Assets} + \\text{Capital Expenditures} - \\text{Accumulated Depreciation}",
    hint: "Net property, plant & equipment"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 6: Market Ratios
  // ═══════════════════════════════════════════════════════════════

  // Price-Based
  {
    id: "fa-6-1",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Price to Earnings (P/E)",
    answer: "\\frac{\\text{Stock Price per Share}}{\\text{Earnings per Share}}",
    hint: "Universal earnings valuation — cross-industry"
  },
  {
    id: "fa-6-2",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Price to Book (P/B)",
    answer: "\\frac{\\text{Stock Price per Share}}{\\text{Book Value per Share}}",
    hint: "Best for asset-heavy industries (banking, real estate)"
  },
  {
    id: "fa-6-3",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Price to Sales (P/S)",
    answer: "\\frac{\\text{Stock Price per Share}}{\\text{Revenue per Share}}",
    hint: "Good for companies at different growth stages"
  },
  {
    id: "fa-6-4",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Price to EBITDA",
    answer: "\\frac{\\text{Stock Price per Share}}{\\text{EBITDA per Share}}",
    hint: "Capital-intensive industries (telecom, utilities)"
  },
  {
    id: "fa-6-5",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Price to Cash Flow",
    answer: "\\frac{\\text{Stock Price per Share}}{\\text{Operating Cash Flow per Share}}",
    hint: "Cash-heavy operations (oil & gas)"
  },

  // Yield
  {
    id: "fa-6-6",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Earnings Yield",
    answer: "\\frac{\\text{Earnings per Share}}{\\text{Stock Price per Share}}",
    hint: "Inverse of P/E — return per dollar invested"
  },
  {
    id: "fa-6-7",
    topic: "Market Ratios",
    category: "Financial Analysis",
    question: "Dividend Yield",
    answer: "\\frac{\\text{Annual Dividends per Share}}{\\text{Stock Price per Share}}",
    hint: "Income yield — utilities, REITs"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 7: Time Value of Money
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fa-7-1",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "Present Value of a Lump Sum",
    answer: "PV = \\frac{FV}{(1+i)^n}",
    hint: "Discount rate i, periods n"
  },
  {
    id: "fa-7-2",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "Future Value of a Lump Sum",
    answer: "FV = PV(1+i)^n",
    hint: "Compound rate i, periods n"
  },
  {
    id: "fa-7-3",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "PV of Ordinary Annuity",
    answer: "PMT \\times \\frac{1-(1+r)^{-n}}{r}",
    hint: "Payments at end of each period"
  },
  {
    id: "fa-7-4",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "FV of Ordinary Annuity",
    answer: "PMT \\times \\frac{(1+i)^n - 1}{i}",
    hint: "Payments at end of each period"
  },
  {
    id: "fa-7-5",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "FV of Annuity Due",
    answer: "PMT \\times \\frac{(1+i)^n - 1}{i} \\times (1+i)",
    hint: "Payments at beginning — multiply ordinary by (1+i)"
  },
  {
    id: "fa-7-6",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "PV of Perpetuity",
    answer: "PV = \\frac{PMT}{i}",
    hint: "No terminal date — infinite payments"
  },
  {
    id: "fa-7-7",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "PV of Growing Perpetuity",
    answer: "PV = \\frac{PMT_0 \\times (1+g)}{i - g}",
    hint: "Growth rate g must be less than i"
  },
  {
    id: "fa-7-8",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "PV of Growing Annuity",
    answer: "PV = \\frac{C_1}{r - g} \\left[1 - \\left(\\frac{1+g}{1+r}\\right)^n\\right]",
    hint: "Finite growing payments"
  },
  {
    id: "fa-7-9",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "PV of Deferred Cash Flows",
    answer: "PV_0 = \\frac{PV_{\\text{deferred}}}{(1+i)^t}",
    hint: "2-step: PV at annuity start, then discount back t periods"
  },
  {
    id: "fa-7-10",
    topic: "Time Value of Money",
    category: "Financial Analysis",
    question: "Equivalent Annual Annuity (EAA)",
    answer: "EAA = \\frac{NPV}{\\dfrac{1 - \\frac{1}{(1+i)^n}}{i}}",
    hint: "Compare projects with unequal lives"
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCIAL ANALYSIS — Topic 8: Cash Flow Estimation
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fa-8-1",
    topic: "Cash Flow Estimation",
    category: "Financial Analysis",
    question: "Initial Cash Outlay",
    answer: "-(\\text{Purchase Price} + \\text{Shipping \\& Installation Cost} + \\text{EFR})",
    hint: "Always negative — cash going out"
  },

  // ═══════════════════════════════════════════════════════════════
  // ECONOMICS — Topic 1: Microeconomic Analysis
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ec-1-1",
    topic: "Elasticity",
    category: "Economics",
    question: "Price Elasticity of Demand (Point Method)",
    answer: "E_d = \\frac{\\%\\Delta\\text{ Quantity Demanded}}{\\%\\Delta\\text{ Price}}",
    hint: "Percentage change method"
  },
  {
    id: "ec-1-2",
    topic: "Elasticity",
    category: "Economics",
    question: "Price Elasticity of Demand (Arc / Midpoint Method)",
    answer: "E_d = \\frac{\\dfrac{|\\Delta Q|}{(Q_1 + Q_2) / 2}}{\\dfrac{|\\Delta P|}{(P_1 + P_2) / 2}}",
    hint: "Uses averages — consistent regardless of direction"
  },
  {
    id: "ec-1-3",
    topic: "Cost Concepts",
    category: "Economics",
    question: "What is a Sunk Cost?",
    answer: "\\text{Sunk Cost} = \\text{Historical Cost (irrecoverable)}",
    hint: "Irrelevant to future decisions"
  },
  {
    id: "ec-1-4",
    topic: "Cost Concepts",
    category: "Economics",
    question: "Fixed Costs",
    answer: "\\text{Costs that do not vary with output level}",
    hint: "e.g., rent, insurance, salaries"
  },
  {
    id: "ec-1-5",
    topic: "Cost Concepts",
    category: "Economics",
    question: "Variable Costs",
    answer: "\\text{Costs that change with output level}",
    hint: "e.g., raw materials, direct labor"
  },
  {
    id: "ec-1-6",
    topic: "Cost Concepts",
    category: "Economics",
    question: "Average Cost",
    answer: "\\frac{\\text{Total Cost}}{\\text{Units of Output}}",
    hint: "Total cost per unit"
  },
  {
    id: "ec-1-7",
    topic: "Cost Concepts",
    category: "Economics",
    question: "Marginal Cost",
    answer: "\\frac{\\Delta\\text{Total Cost}}{\\Delta\\text{Output}}",
    hint: "Additional cost of one more unit"
  },
  {
    id: "ec-1-8",
    topic: "Cost Concepts",
    category: "Economics",
    question: "Opportunity Cost",
    answer: "\\text{Value of the best alternative forgone}",
    hint: "Not always monetary — implicit cost"
  },

  // ═══════════════════════════════════════════════════════════════
  // ECONOMICS — Topic 2: Macroeconomic Analysis
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ec-2-1",
    topic: "Macroeconomic Analysis",
    category: "Economics",
    question: "Consumer Price Index (CPI)",
    answer: "\\text{CPI} = \\frac{\\text{Updated Cost}}{\\text{Base Cost}} \\times 100",
    hint: "Measures price level relative to base year"
  },
  {
    id: "ec-2-2",
    topic: "Macroeconomic Analysis",
    category: "Economics",
    question: "Inflation Rate",
    answer: "\\text{Inflation Rate} = \\frac{\\text{Current CPI}}{\\text{Previous CPI}}",
    hint: "Rate of change in price level"
  }
];
