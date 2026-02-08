declare module 'lucide-svelte' {
  import { SvelteComponentTyped } from 'svelte';

  export interface IconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    class?: string;
  }

  export class Check extends SvelteComponentTyped<IconProps> {}
  export class Lock extends SvelteComponentTyped<IconProps> {}
  export class ChevronLeft extends SvelteComponentTyped<IconProps> {}
  export class ChevronRight extends SvelteComponentTyped<IconProps> {}
  export class Calendar extends SvelteComponentTyped<IconProps> {}
  export class Trophy extends SvelteComponentTyped<IconProps> {}
  export class ArrowLeft extends SvelteComponentTyped<IconProps> {}
  export class Flame extends SvelteComponentTyped<IconProps> {}
  export class Clock extends SvelteComponentTyped<IconProps> {}
  export class Target extends SvelteComponentTyped<IconProps> {}
  export class ChevronDown extends SvelteComponentTyped<IconProps> {}
  export class User extends SvelteComponentTyped<IconProps> {}
  export class Settings extends SvelteComponentTyped<IconProps> {}
  export class BarChart extends SvelteComponentTyped<IconProps> {}
  export class TrendingUp extends SvelteComponentTyped<IconProps> {}
}