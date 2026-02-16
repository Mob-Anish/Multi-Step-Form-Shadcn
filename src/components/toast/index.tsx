import type { ToastProps } from "@/types/toast";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MessageToast = ({ status, message }: ToastProps) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-green-600">{status}!</CardTitle>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default MessageToast;
