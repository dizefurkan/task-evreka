// validations.ts - Made with ChatGPT
export const validations = {
  required:
    (message = "Bu alan zorunludur.") =>
    (value: string) => ({
      isValid: !!value.trim(),
      message,
    }),

  email:
    (message = "Geçerli bir e-posta girin.") =>
    (value: string) => ({
      isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message,
    }),

  minLength: (min: number, message?: string) => (value: string) => ({
    isValid: value.length >= min,
    message: message || `En az ${min} karakter girin.`,
  }),
};
