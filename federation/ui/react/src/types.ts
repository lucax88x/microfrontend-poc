// go from Foo[] type to Foo
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
