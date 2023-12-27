import { createEffect, createEvent, createStore, sample } from "effector";

export const $isOpen = createStore<boolean>(false);

export const Open = createEvent<void>();
export const Close = createEvent<void>();

$isOpen.on(Open, (_, __) => true).on(Close, (_, __) => false);
