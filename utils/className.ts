export function className(...args: any[]): string {
    if (!args.length) return '';
    const result: string[] = [];
    args.filter(Boolean).forEach(arg => {
        if (['string','number'].includes(typeof arg)) {
            result.push(arg);
        }
        else if (Array.isArray(arg)) {
            result.push(className(...arg));
        }
        else if (typeof arg === 'object') {
            const classes = Object.entries(arg).filter(([_, value]) => Boolean(value)).map(([key]) => key);
            result.push(...classes);
        } else {
            console.error('Unsupported type')
        }
    });
    return result.join(' ');
}