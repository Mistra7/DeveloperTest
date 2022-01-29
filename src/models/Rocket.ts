interface MAIDistance {
  meters: number;
  feet: number;
}

interface MAIMass {
  kg: number;
  lb: number;
}

interface MAIThrust {
  kN: number;
  lbf: number;
}

interface CompositeFairing {
  height: MAIDistance;
  diameter: MAIDistance;
}

interface Payload {
  composite_fairing: CompositeFairing;
  option_1: string;
}

interface Isp {
  sea_level: number;
  vacuum: number;
}

interface LandingLeg {
  number: number;
  material: string;
}

interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface Stage {
  thrust?: MAIThrust;
  thrust_sea_level?: MAIThrust;
  thrust_vacuum?: MAIThrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sc: number;
  payloads: Payload;
}

interface Engine {
  isp: Isp;
  thrust_sea_level: MAIThrust;
  thrust_vacuum: MAIThrust;
  number: string;
  type: string;
  version: string;
  layout?: string;
  engine_loss_max?: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: string;
}

export interface Rocket {
  height: MAIDistance;
  diameter: MAIDistance;
  mass: MAIMass;
  first_stage: Stage;
  second_stage: Stage;
  engines: Engine;
  landing_legs: LandingLeg;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
