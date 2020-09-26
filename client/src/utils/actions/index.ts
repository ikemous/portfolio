export const updateFilter = (search: string): object => {
    return {
        type: "UPDATE_FILTER",
        payload: search
    }
};

export {};