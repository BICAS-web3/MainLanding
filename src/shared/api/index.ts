import { createEffect } from "effector";

export const BaseApiUrl = "https://game.greekkeepers.io/api";
export const BaseStaticUrl = "https://game.greekkeepers.io/static";

export type T_SubmitQuestion = {
  name: string;
  email: string;
  message: string;
};
export const submitQuestion = createEffect<T_SubmitQuestion, string>(
  async (form) => {
    return fetch(`${BaseApiUrl}/partner/question`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
      .then(async (res) => await res.json())
      .catch((e) => e);
  }
);
