type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: boolean };

export default function clsx(...args: ClassValue[]): string {
  return args
    .map(arg => {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      } else if (typeof arg === 'object' && arg !== null) {
        return Object.keys(arg)
          .filter(key => arg[key])
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}
