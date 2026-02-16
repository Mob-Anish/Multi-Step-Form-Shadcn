import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FormProps } from "@/types/form";

const PreferencesForm = ({ form }: FormProps) => {
  const { formData, setFormData, previousStep, submit, loading } = form;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={formData.receiveNotifications}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({
              ...prev,
              receiveNotifications: !!checked,
            }))
          }
        />
        <Label>Receive notifications</Label>
      </div>
      <div className="space-y-3">
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          value={formData.contactMethod}
          onValueChange={(value: "email" | "none") =>
            setFormData((prev) => ({
              ...prev,
              contactMethod: value,
            }))
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none">None</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={previousStep}>
          Back
        </Button>
        <Button onClick={submit} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default PreferencesForm;
