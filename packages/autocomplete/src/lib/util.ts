// Mark a field as optional in an already defined type
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
