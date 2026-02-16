import type { MultiFormData } from "@/types/form";
import { useState } from "react";

const useMultiStepForm = () => {
  // local states
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<MultiFormData>({
    name: "",
    email: "",
    receiveNotifications: false,
    contactMethod: "none",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ---- Validation ----
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isNameValid = formData.name.trim() !== "";
  const isValidEmail = isEmailValid(formData.email);

  const errors = {
    name: !isNameValid ? "Name is required" : "",
    email:
      formData.email.length > 0 && !isValidEmail ? "Enter a valid email" : "",
  };

  const isStepOneValid = isNameValid && isValidEmail;

  // ---- Navigation ----
  const nextStep = () => {
    if (isStepOneValid) {
      setStep(2);
    }
  };

  const previousStep = () => {
    setStep(1);
  };

  // ---- Submission ----
  const submit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return {
    step,
    formData,
    setFormData,
    errors,
    loading,
    submitted,
    nextStep,
    previousStep,
    submit,
  };
};

export default useMultiStepForm;
