import { Check } from 'lucide-react';
import { plans } from '../data/mockData';

export default function Pricing() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Pricing Plans</h1>
        <p className="text-gray-500 mt-1">Choose the plan that fits your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border-2 p-6 transition-shadow ${
              plan.highlighted
                ? 'border-indigo-500 shadow-lg shadow-indigo-100'
                : 'border-gray-200 hover:shadow-md'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check size={16} className="text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ section */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Can I switch plans at any time?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
            { q: 'Is there a free trial?', a: 'All plans come with a 14-day free trial. No credit card required to get started.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely. No long-term contracts. Cancel your subscription at any time from your account settings.' },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900">{q}</h3>
              <p className="text-sm text-gray-500 mt-1.5">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
