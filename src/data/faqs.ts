export type Faq = {
  question: string
  answer: string
  serviceSlugs?: string[]
}

export const faqs: Faq[] = [
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. You can request an estimate through the website or contact the company directly. Some plumbing problems require an in-person diagnostic visit before an accurate estimate can be provided.',
  },
  {
    question: 'Is the estimate form for emergencies?',
    answer:
      'No. Active flooding, burst pipes, severe leaks, sewage backups, and other urgent situations should be handled by calling the emergency phone number.',
    serviceSlugs: ['emergency-plumbing'],
  },
  {
    question: 'Can I use chemical drain cleaner before you arrive?',
    answer:
      'Avoid mixing or repeatedly using chemical drain cleaners. They can damage certain piping and make professional drain work more dangerous. Tell the technician if chemical products have already been used.',
    serviceSlugs: ['drain-cleaning'],
  },
  {
    question: 'Why does my toilet keep running?',
    answer:
      'Common causes include a worn flapper, incorrect chain length, a failing fill valve, an improperly adjusted float, or a leaking flush valve. A running toilet can waste a significant amount of water.',
    serviceSlugs: ['toilet-repair'],
  },
  {
    question: 'Why does my drain keep clogging?',
    answer:
      'Recurring clogs may be caused by buildup, grease, hair, foreign objects, root intrusion, damaged piping, poor drainage design, or a blockage farther down the line.',
    serviceSlugs: ['drain-cleaning', 'sewer-lines'],
  },
  {
    question: 'Should I repair or replace my water heater?',
    answer:
      'The right choice depends on the unit’s age, condition, efficiency, tank integrity, repair history, and repair cost. A technician should explain both options when replacement is not clearly necessary.',
    serviceSlugs: ['water-heaters'],
  },
  {
    question: 'Can I provide my own faucet or fixture?',
    answer:
      'Yes, but it should be compatible with the existing installation and include all required components. The product should be inspected before installation.',
    serviceSlugs: ['faucets-fixtures'],
  },
  {
    question: 'Why is there water around the base of my toilet?',
    answer:
      'Possible causes include condensation, a loose supply connection, a failed wax ring, a cracked toilet, or water escaping from another nearby source. Avoid using it if wastewater may be leaking from the base.',
    serviceSlugs: ['toilet-repair', 'leak-repair'],
  },
  {
    question: 'What should I do during a major leak?',
    answer:
      'If it is safe, shut off the nearest fixture valve or the main water supply. Move valuables away from the water, avoid electrical hazards, and call for professional service.',
    serviceSlugs: ['leak-repair', 'emergency-plumbing'],
  },
  {
    question: 'Do you clean up after the repair?',
    answer:
      'Yes. The work area should be left orderly, and service-related debris should be removed unless otherwise discussed.',
  },
  {
    question: 'Are the jokes included in the estimate?',
    answer: 'Yes. Unfortunately, they cannot be removed from the invoice.',
  },
]

