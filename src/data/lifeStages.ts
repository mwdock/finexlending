export type LifeStage = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  externalUrl?: string;
};

const cdn = (filename: string) => `https://finexlending.ca/wp-content/uploads/elementor/thumbs/${filename}`;

export const lifeStages: LifeStage[] = [
  {
    slug: 'first-time-homebuyer',
    title: 'First-Time Homebuyer',
    summary:
      'You’ve worked hard to reach the milestone of building equity in your own home. We’ll guide you from preapproval through closing day and beyond.',
    image: cdn('first-time-home-buyer-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'new-baby',
    title: 'New Baby',
    summary:
      'Parenthood changes everything. We review your plan with every lifestyle shift and free up cashflow whenever possible to support your growing family.',
    image: cdn('new-baby-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'home-renovation',
    title: 'Renovations',
    summary:
      'Whether you’re purchasing a fixer-upper or refreshing your current space, we unlock financing that keeps improvement projects on budget.',
    image: cdn('renovations-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'buying-your-next-home',
    title: 'Buying Your Next Home',
    summary:
      'Moving up (or down) the property ladder stays exciting every time. We synchronize buying and selling timelines so each transaction stays on track.',
    image: cdn('next-home-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'unexpected-events',
    title: 'Unexpected Events',
    summary:
      'Life happens. We prepare for surprises ahead of time and access multiple options when the unexpected becomes real.',
    image: cdn('unexpected-events-or2mvnl560t3gqdjij2ivaipu33x8rxo9llhuo3yd4.jpg'),
  },
  {
    slug: 'divorce',
    title: 'Divorce',
    summary:
      'Separation is emotionally draining. Whether you sell and split proceeds or refinance to complete a buyout, we coordinate the financing details.',
    image: cdn('divorce-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'job-loss',
    title: 'Job Loss',
    summary:
      'We immediately review your mortgage, assess cashflow, and set a new budget so you can focus on the next career move without losing your footing.',
    image: cdn('job-loss-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'ready-to-retire',
    title: 'Ready to Retire',
    summary:
      'Entering retirement should feel confident. We leverage specialty products that stretch finances and protect monthly cashflow.',
    image: cdn('ready-to-retire-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'taking-care-of-dependents',
    title: 'Taking Care of Dependants',
    summary:
      'Supporting children, parents, or both introduces unique pressures. We align mortgage strategies with caregiving responsibilities.',
    image: cdn('taking-care-of-dependants-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
  {
    slug: 'retired',
    title: 'Retired',
    summary:
      'Enjoy retirement on your terms by simplifying debt, tapping into equity responsibly, and keeping lending flexible as needs evolve.',
    image: cdn('ready-to-retire-or2mvmnaz6rt54ewo0nwasr98p8k12txxgy0de5cjc.jpg'),
  },
];
