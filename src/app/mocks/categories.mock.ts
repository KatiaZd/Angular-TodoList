export type CategoriesType = "🛍️" | "💊️" | "💼" | "💸" | "🧼" | "🤷‍♀️";

export interface ITodo {
    id: number;
    content: string;
    category: CategoriesType;
    isUrgent: boolean;
    doneDate: Date;
}