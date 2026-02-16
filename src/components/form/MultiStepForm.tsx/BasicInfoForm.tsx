import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormProps } from "@/types/form";

const BasicInfoForm = ({ form }: FormProps) => {
  const { formData, setFormData, errors, isStepOneValid, nextStep } =
    form;

  console.log(errors);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <Button variant={"outline"} disabled={!isStepOneValid} onClick={nextStep}>
        Next
      </Button>
    </div>
  );
};

export default BasicInfoForm;
