// useForm.ts - Made with ChatGPT
import { useRef, useState } from "react";

type ValidationRule = (value: string) => { isValid: boolean; message: string };

type Schema<T> = {
  [K in keyof T]: ValidationRule[];
};

export function useForm<T extends Record<string, any>>(params: {
  startValidation: boolean;
  initialValues: T;
  schema?: Partial<Schema<T>>;
}) {
  const { initialValues, schema } = params;
  const startValidation = useRef(params.startValidation);

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<
    Record<keyof T, { isValid: boolean; message: string }>
  >(
    Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = { isValid: true, message: "" };
      return acc;
    }, {} as Record<keyof T, { isValid: boolean; message: string }>)
  );

  const handleChange = (field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (!startValidation.current) return;

    const fieldRules = schema?.[field] || [];
    for (const rule of fieldRules) {
      const result = rule(value);
      if (!result.isValid) {
        setErrors((prev) => ({ ...prev, [field]: result }));
        return;
      }
    }

    setErrors((prev) => ({ ...prev, [field]: { isValid: true, message: "" } }));
  };

  const validateAll = () => {
    startValidation.current = true;

    const newErrors = { ...errors };
    let hasError = false;

    for (const field in schema) {
      const value = values[field];
      const rules = schema?.[field] || [];

      for (const rule of rules) {
        const result = rule(value);
        if (!result.isValid) {
          newErrors[field] = result;
          hasError = true;
          break;
        } else {
          newErrors[field] = { isValid: true, message: "" };
        }
      }
    }

    setErrors(newErrors);
    return hasError;
  };

  return {
    values,
    errors,
    handleChange,
    validateAll,
    setValues,
    setErrors,
  };
}
