import useMultiStepForm from "@/hooks/useMultiStepForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import BasicInfoForm from "./BasicInfoForm";
import PreferencesForm from "./PreferencesForm";
import MessageToast from "@/components/toast";

const MultiStepForm = () => {
  const form = useMultiStepForm();

  if (form.submitted) {
    return (
      <MessageToast
        status="Success"
        message="The form has been submitted successfully."
      />
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>User Setup</CardTitle>
        </CardHeader>
        <CardContent>
          {form.step === 1 && <BasicInfoForm form={form} />}
          {form.step === 2 && <PreferencesForm form={form} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepForm;
