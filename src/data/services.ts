import type { IconType } from 'react-icons'
import {
  LuCircleDotDashed,
  LuDroplets,
  LuFlame,
  LuSiren,
  LuToilet,
  LuTrash2,
  LuWaves,
  LuWrench,
} from 'react-icons/lu'

import drainImage from '../assets/cartoon-6.webp'
import disposalImage from '../assets/cartoon-2.webp'
import emergencyImage from '../assets/cartoon-4.webp'
import fixtureImage from '../assets/cartoon-3.webp'
import leakImage from '../assets/cartoon-4.webp'
import sewerImage from '../assets/cartoon-1.webp'
import toiletImage from '../assets/cartoon-5.webp'
import waterHeaterImage from '../assets/cartoon-7.webp'

export type Service = {
  slug: string
  name: string
  shortHook: string
  shortDescription: string
  heroHeading: string
  intro: string
  includedServices: string[]
  warningSigns: string[]
  funnyCallout: string
  ctaLabel: string
  icon: IconType
  image: string
  imageAlt: string
  relatedServiceSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortHook: 'Your drain is not “thinking about it.” It is clogged.',
    shortDescription:
      'We clear slow, blocked, and completely defeated drains in kitchens, bathrooms, showers, tubs, laundry rooms, and main lines.',
    heroHeading: 'Drain Cleaning Without the Chemical Witchcraft',
    intro:
      'A slow drain rarely fixes itself. Hair, grease, soap residue, food waste, mineral buildup, and mystery sludge can collect inside your pipes until water stops moving properly. Our drain-cleaning service targets the actual blockage instead of pouring another bottle of neon chemicals into the abyss and hoping for personal growth.',
    includedServices: [
      'Sink, shower, tub, laundry, and floor drain clearing',
      'Kitchen drain cleaning',
      'Main line stoppage diagnosis',
      'Mechanical snaking',
      'Hydro jetting when appropriate',
      'Video camera inspection when necessary',
      'Recurring clog evaluation',
    ],
    warningSigns: [
      'Water pooling around a drain',
      'More than one slow fixture',
      'Gurgling or sewer odors',
      'A clog that keeps coming back',
    ],
    funnyCallout:
      'If three different drain cleaners have failed, the clog is now legally a tenant.',
    ctaLabel: 'Evict the Clog',
    icon: LuCircleDotDashed,
    image: drainImage,
    imageAlt: 'Gary the Clog Goblin wrestling a cartoon drain monster',
    relatedServiceSlugs: ['sewer-lines', 'garbage-disposals', 'emergency-plumbing'],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair',
    shortHook: 'Restore peace to the porcelain throne.',
    shortDescription:
      'We repair clogs, constant running, weak flushing, leaks, broken handles, unstable bases, and toilets that have simply given up.',
    heroHeading: 'Toilet Trouble? Let’s End the Standoff.',
    intro:
      'Your toilet has one job. When it refuses to do that job, life becomes complicated very quickly. We diagnose and repair common toilet problems, replace worn components, reseal leaking bases, and install new toilets when the old one has flushed its final flush.',
    includedServices: [
      'Toilet clog removal',
      'Running toilet and fill valve repair',
      'Flapper, flush valve, handle, and chain replacement',
      'Wax ring and base leak repair',
      'Rocking toilet correction',
      'Toilet installation and replacement',
      'Low-flow and comfort-height installations',
    ],
    warningSigns: [
      'Constant running or phantom flushing',
      'Water around the base',
      'Weak or incomplete flushes',
      'A bowl that rocks when used',
    ],
    funnyCallout: 'A plunger is a tool, not a long-term relationship.',
    ctaLabel: 'Save the Throne',
    icon: LuToilet,
    image: toiletImage,
    imageAlt: 'Gary standing proudly beside a clean cartoon toilet',
    relatedServiceSlugs: ['drain-cleaning', 'leak-repair', 'faucets-fixtures'],
  },
  {
    slug: 'leak-repair',
    name: 'Leak Detection & Repair',
    shortHook: 'That tiny drip is practicing to become a flood.',
    shortDescription:
      'We locate and repair visible and hidden plumbing leaks before they damage walls, cabinets, flooring, and your remaining patience.',
    heroHeading: 'Find the Leak Before the Leak Finds Your Wallet',
    intro:
      'Some leaks announce themselves with a puddle. Others hide behind walls, under sinks, inside cabinets, or beneath fixtures while quietly increasing your water bill. We inspect the problem, identify the source, and recommend a practical repair.',
    includedServices: [
      'Faucet, pipe, fixture, and under-sink leaks',
      'Toilet and appliance supply-line leaks',
      'Wall and ceiling moisture investigation',
      'Water-pressure troubleshooting',
      'Slab leak referral or diagnosis where appropriate',
      'Emergency shutoff assistance',
    ],
    warningSigns: [
      'Unexplained water bill increases',
      'Musty smells or discolored drywall',
      'Cabinet swelling or damp flooring',
      'The unmistakable sound of water when nothing is on',
    ],
    funnyCallout:
      'Water belongs inside the pipe. We remain surprisingly strict about this.',
    ctaLabel: 'Stop the Drip',
    icon: LuDroplets,
    image: leakImage,
    imageAlt: 'Gary tightening a leaking cartoon pipe as water sprays',
    relatedServiceSlugs: ['faucets-fixtures', 'toilet-repair', 'emergency-plumbing'],
  },
  {
    slug: 'water-heaters',
    name: 'Water Heater Services',
    shortHook: 'Cold showers build character. We recommend hot water instead.',
    shortDescription:
      'We diagnose, repair, maintain, and replace traditional and tankless water heaters.',
    heroHeading: 'Hot Water Should Not Be a Luxury Plot Twist',
    intro:
      'If your water takes forever to heat, runs cold halfway through a shower, makes alarming noises, or leaves rusty water behind, your water heater may need professional attention. We evaluate the system and explain whether repair, maintenance, or replacement makes the most sense.',
    includedServices: [
      'No-hot-water and inconsistent-temperature diagnosis',
      'Pilot light, ignition, thermostat, and heating element service',
      'Pressure relief valve service',
      'Sediment flushing and anode rod inspection',
      'Tank leak diagnosis',
      'Traditional and tankless replacement',
      'Preventive maintenance',
    ],
    warningSigns: [
      'Water temperature changes without warning',
      'Rumbling or popping from the tank',
      'Rusty or discolored hot water',
      'Moisture around the unit',
    ],
    funnyCallout:
      'If your shower turns cold every time someone washes a spoon, we should talk.',
    ctaLabel: 'Bring Back the Hot Water',
    icon: LuFlame,
    image: waterHeaterImage,
    imageAlt: 'Gary leaning casually against a cartoon water heater',
    relatedServiceSlugs: ['leak-repair', 'faucets-fixtures', 'emergency-plumbing'],
  },
  {
    slug: 'sewer-lines',
    name: 'Sewer Line Services',
    shortHook: 'When the problem is bigger than one unfortunate toilet.',
    shortDescription:
      'We inspect sewer symptoms, diagnose main-line blockages, and recommend cleaning, repair, or replacement options.',
    heroHeading: 'Sewer Problems: The Final Boss of Household Plumbing',
    intro:
      'Multiple slow drains, sewage odors, gurgling fixtures, wastewater backups, or soggy areas in the yard can point to a sewer-line problem. These issues should be evaluated quickly because sewage is not known for respecting boundaries.',
    includedServices: [
      'Main sewer line clearing',
      'Sewer camera inspection',
      'Root intrusion and recurring backup diagnosis',
      'Sewer odor investigation',
      'Cleanout access',
      'Hydro jetting when appropriate',
      'Spot, trenchless, and replacement recommendations',
    ],
    warningSigns: [
      'Several drains slow at once',
      'Gurgling toilets after other fixtures drain',
      'Sewage odor indoors or outside',
      'Wastewater backing up at the lowest fixture',
    ],
    funnyCallout:
      'When every drain joins the rebellion, the main line may be the ringleader.',
    ctaLabel: 'Investigate the Backup',
    icon: LuWaves,
    image: sewerImage,
    imageAlt: 'Gary holding a plunger and looking back with comic confidence',
    relatedServiceSlugs: ['drain-cleaning', 'toilet-repair', 'emergency-plumbing'],
  },
  {
    slug: 'garbage-disposals',
    name: 'Garbage Disposal Repair',
    shortHook: 'For when the sink starts growling back.',
    shortDescription:
      'We diagnose jammed, leaking, noisy, humming, and completely dead garbage disposals.',
    heroHeading: 'Your Garbage Disposal Is Not a Wood Chipper',
    intro:
      'Garbage disposals are useful, but they are not indestructible. Bones, grease, utensils, fibrous foods, and optimistic decisions can cause jams, leaks, and motor failure. We determine whether the unit can be repaired or should be replaced.',
    includedServices: [
      'Jam clearing and humming disposal diagnosis',
      'Leak and drain connection repair',
      'Electrical reset troubleshooting',
      'Disposal replacement and installation',
      'Dishwasher connection correction',
    ],
    warningSigns: [
      'Humming without grinding',
      'Water under the sink',
      'Metallic noises or sudden silence',
      'A smell that survived multiple cleaning attempts',
    ],
    funnyCallout:
      'If a fork went in, please turn the power off before beginning your rescue mission.',
    ctaLabel: 'Silence the Sink Monster',
    icon: LuTrash2,
    image: disposalImage,
    imageAlt: 'Gary taking a coffee break on his red toolbox',
    relatedServiceSlugs: ['drain-cleaning', 'leak-repair', 'faucets-fixtures'],
  },
  {
    slug: 'faucets-fixtures',
    name: 'Faucets & Fixtures',
    shortHook: 'Upgrade the hardware your hands touch every day.',
    shortDescription:
      'We repair and install faucets, showerheads, sinks, valves, and other common plumbing fixtures.',
    heroHeading: 'Drips, Wobbles, Squeaks, and Sad Old Faucets',
    intro:
      'Fixtures should work smoothly, shut off completely, and look like they belong in your home. We repair worn components and install new fixtures with proper connections, sealing, alignment, and testing.',
    includedServices: [
      'Kitchen and bathroom faucet repair',
      'Faucet and showerhead replacement',
      'Tub and shower trim replacement',
      'Sink installation',
      'Shutoff valve and hose bib repair',
      'Utility sink installation',
      'Fixture leak correction',
    ],
    warningSigns: [
      'Handles that need special choreography',
      'Rust, corrosion, or mineral buildup',
      'Low pressure at one fixture',
      'Drips that keep time all night',
    ],
    funnyCallout:
      'Your faucet should not require a special wrist technique and a prayer.',
    ctaLabel: 'Fix the Fixture',
    icon: LuWrench,
    image: fixtureImage,
    imageAlt: 'Gary giving a thumbs-up while holding a plunger',
    relatedServiceSlugs: ['leak-repair', 'water-heaters', 'toilet-repair'],
  },
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    shortHook: 'Because water never checks your calendar first.',
    shortDescription:
      'For urgent leaks, active flooding, severe backups, failed water heaters, and other plumbing emergencies, call directly.',
    heroHeading: 'Plumbing Emergency? Stop the Water. Then Call for Help.',
    intro:
      'Active plumbing emergencies can cause significant damage in a short amount of time. Shut off the nearest fixture valve or the home’s main water supply when safe to do so, avoid electrical hazards, and call a qualified emergency plumber. The online form is not an emergency-response channel.',
    includedServices: [
      'Burst or severely leaking pipes',
      'Active indoor flooding',
      'Overflowing toilets that will not stop',
      'Sewage backup',
      'Leaking water heater tanks',
      'Broken supply lines',
      'Major fixture failure',
    ],
    warningSigns: [
      'Water moving across floors or ceilings',
      'Sewage entering the home',
      'A pipe or supply line spraying',
      'Water near outlets or electrical equipment',
    ],
    funnyCallout:
      'If your ceiling has become a water feature, this is no longer a “submit the form and wait” situation.',
    ctaLabel: 'Call Emergency Service',
    icon: LuSiren,
    image: emergencyImage,
    imageAlt: 'Gary repairing a cartoon pipe while water sprays',
    relatedServiceSlugs: ['leak-repair', 'sewer-lines', 'water-heaters'],
  },
]

export const getService = (slug?: string) =>
  services.find((service) => service.slug === slug)
