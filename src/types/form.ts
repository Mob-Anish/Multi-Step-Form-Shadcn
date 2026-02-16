import type useMultiStepForm from "@/hooks/useMultiStepForm";

export type MultiFormData = {
  name: string;
  email: string;
  receiveNotifications: boolean;
  contactMethod: "email" | "none";
};

export type FormProps = {
  form: ReturnType<typeof useMultiStepForm>;
};
