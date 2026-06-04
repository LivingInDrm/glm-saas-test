export const weeklyData = [
  { day: 'Mon', inquiries: 12, resolved: 8, revenue: 2400 },
  { day: 'Tue', inquiries: 19, resolved: 14, revenue: 3100 },
  { day: 'Wed', inquiries: 15, resolved: 11, revenue: 2800 },
  { day: 'Thu', inquiries: 22, resolved: 18, revenue: 4200 },
  { day: 'Fri', inquiries: 18, resolved: 15, revenue: 3600 },
  { day: 'Sat', inquiries: 8, resolved: 6, revenue: 1800 },
  { day: 'Sun', inquiries: 5, resolved: 4, revenue: 1200 },
];

export const inquiries = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', subject: 'Pricing question', status: 'new' as const, date: '2026-06-03' },
  { id: 2, name: 'Mike Chen', email: 'mike@startup.io', subject: 'Feature request: API access', status: 'in-progress' as const, date: '2026-06-03' },
  { id: 3, name: 'Emily Davis', email: 'emily@corp.com', subject: 'Account setup help', status: 'resolved' as const, date: '2026-06-02' },
  { id: 4, name: 'James Wilson', email: 'james@biz.net', subject: 'Billing discrepancy', status: 'new' as const, date: '2026-06-02' },
  { id: 5, name: 'Lisa Park', email: 'lisa@design.co', subject: 'Integration with Slack', status: 'in-progress' as const, date: '2026-06-01' },
  { id: 6, name: 'Robert Kim', email: 'robert@tech.dev', subject: 'Data export request', status: 'resolved' as const, date: '2026-06-01' },
  { id: 7, name: 'Anna Martinez', email: 'anna@shop.com', subject: 'Custom report needed', status: 'new' as const, date: '2026-05-31' },
  { id: 8, name: 'David Brown', email: 'david@inc.org', subject: 'Upgrade plan inquiry', status: 'resolved' as const, date: '2026-05-31' },
];

export const tasks = [
  { id: 1, title: 'Follow up with Sarah Johnson', priority: 'high' as const, status: 'todo' as const, dueDate: '2026-06-04' },
  { id: 2, title: 'Prepare weekly performance report', priority: 'medium' as const, status: 'in-progress' as const, dueDate: '2026-06-05' },
  { id: 3, title: 'Review billing discrepancy case', priority: 'high' as const, status: 'todo' as const, dueDate: '2026-06-04' },
  { id: 4, title: 'Update pricing page copy', priority: 'low' as const, status: 'todo' as const, dueDate: '2026-06-06' },
  { id: 5, title: 'Onboard Emily Davis account', priority: 'medium' as const, status: 'completed' as const, dueDate: '2026-06-03' },
  { id: 6, title: 'Slack integration research', priority: 'medium' as const, status: 'in-progress' as const, dueDate: '2026-06-07' },
  { id: 7, title: 'Send invoice to James Wilson', priority: 'high' as const, status: 'todo' as const, dueDate: '2026-06-04' },
  { id: 8, title: 'Create API documentation draft', priority: 'low' as const, status: 'todo' as const, dueDate: '2026-06-08' },
];

export const plans = [
  {
    name: 'Starter',
    price: 19,
    period: '/month',
    description: 'Perfect for solo entrepreneurs getting started',
    features: [
      'Up to 50 customer inquiries/mo',
      'Task management',
      'Basic performance charts',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 49,
    period: '/month',
    description: 'For growing teams that need more power',
    features: [
      'Unlimited customer inquiries',
      'Advanced task management',
      'Weekly & monthly reports',
      'Priority email & chat support',
      'Team collaboration (up to 5)',
      'Integrations (Slack, Zapier)',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: '/month',
    description: 'For established businesses with custom needs',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Custom integrations & API',
      'Dedicated account manager',
      'SLA & uptime guarantee',
      'Advanced analytics',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];
