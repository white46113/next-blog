// Polyfill for Promise.withResolvers (Node.js < 22 and older browsers)
if (typeof Promise !== 'undefined' && !Promise.withResolvers) {
    // @ts-ignore
    Promise.withResolvers = function <T>() {
        let resolve!: (value: T | PromiseLike<T>) => void;
        let reject!: (reason?: any) => void;
        const promise = new Promise<T>((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    };
}

export { };
