export type MortgageService = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  externalUrl?: string;
};

const cdn = (filename: string) => `https://finexlending.ca/wp-content/uploads/elementor/thumbs/${filename}`;

export const mortgageServices: MortgageService[] = [
  {
    slug: 'mortgage-calculator',
    title: 'Mortgage Calculator',
    summary:
      'Estimate payments, amortization schedules, and affordability scenarios before you make an offer. Our calculator helps you stress-test every variable.',
    image: 'https://finexlending.ca/wp-content/uploads/2020/04/FINEX-2.png',
  },
  {
    slug: 'pre-approval',
    title: 'Pre-Approval',
    summary:
      'Secure conditional financing so you know exactly how much you can comfortably afford before you begin house hunting.',
    image: cdn('pre-approval-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'purchase',
    title: 'Purchase',
    summary:
      'Whether you’re buying your first home, upgrading, or downsizing, we guide you from preapproval through closing day and beyond.',
    image: cdn('purchase-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'purchase-plus-improvements',
    title: 'Purchase Plus Improvements',
    summary:
      'Bundle qualified renovation costs into one mortgage payment so you can personalize your new home immediately.',
    image: cdn('purchase-plus-imporvement-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'mortgage-refinance',
    title: 'Mortgage Refinance',
    summary:
      'Leverage hard-earned equity to consolidate debt, renovate, invest, or free up monthly cashflow with a refreshed mortgage.',
    image: cdn('refinance-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'mortgage-renewal-transfer-switch',
    title: 'Mortgage Renewal, Transfer & Switch',
    summary:
      'At renewal we renegotiate everything: term, rate, amortization, and lender incentives—so you never leave money on the table.',
    image: cdn('mortgage-renewal-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'vacation-homes-cottages',
    title: 'Vacation Homes & Cottages',
    summary:
      'From waterfront retreats to mountain cabins, we arrange seasonal or year-round financing for second homes across Canada.',
    image: cdn('vacation-home-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'investment-properties',
    title: 'Investment Properties',
    summary:
      'We map out down payment strategies, rental offsets, and portfolio growth so every property purchase becomes a smart long-term play.',
    image: cdn('Investment-Properties-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'new-construction',
    title: 'New Construction',
    summary:
      'Building from the ground up? We coordinate builder draws, completion financing, and contingency plans to keep your project moving.',
    image: cdn('construction-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'new-to-canada',
    title: 'New To Canada',
    summary:
      'Establishing roots is easier when you know the mortgage rules. We outline documentation, credit alternatives, and lender options for newcomers.',
    image: cdn('new-to-canada-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'cash-back-options',
    title: 'Cash Back',
    summary:
      'Select lenders return cash at closing—perfect for furnishing, upgrades, or covering closing costs. We’ll show you when these products make sense.',
    image: cdn('cash-back-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'self-employed',
    title: 'Self Employed',
    summary:
      'Business owners deserve flexible underwriting. We work with lenders who understand retained earnings, add-backs, and non-traditional income.',
    image: cdn('self-employed-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'bruised-credit',
    title: 'Bruised Credit',
    summary:
      'Life happens. Our roster of alternative and private lenders ensures you still have access to competitive mortgage options while you rebuild.',
    image: cdn('bruised-credit-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'reverse-mortgage',
    title: 'Reverse Mortgage',
    summary:
      'Unlock tax-free equity without selling your home. Reverse mortgages can supplement retirement income or fund major expenses responsibly.',
    image: cdn('ready-to-retire-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
];
