export declare const persistance: (parentKey?: string) => {
    set: (key: string, value: any, pkey?: string) => void;
    get: (key: string, pkey?: string) => any;
    getAll: (pkey?: string) => any;
    remove: (key: string, pkey?: string) => void;
    removeAll: (pkey?: string) => void;
    clearAll: () => void;
};
export declare const ls: {
    set: (key: string, value: any, pkey?: string) => void;
    get: (key: string, pkey?: string) => any;
    getAll: (pkey?: string) => any;
    remove: (key: string, pkey?: string) => void;
    removeAll: (pkey?: string) => void;
    clearAll: () => void;
};
