
export function isObject(target: any): boolean {
  return typeof target === 'object' && !Array.isArray(target) && target !== null;
}

export function setClass<T>(target: T): string | undefined {
  if (Array.isArray(target)) {
    return target.join(' ');
  } else if (isObject(target) && Object.keys(target).length) {
    let string = ''
    for (let i = 0; i < Object.entries(target).length; i++) {
      const [key, value] = Object.entries(target)[i]
      if (value && i !== Object.entries(target).length-1) {
        string += `${key} `;
      } else if (key) {
        string += `${key}`;
      };
      return string;
    }
    return 
  }
  return undefined;
}

export function makeProps() {
  return {}
}
