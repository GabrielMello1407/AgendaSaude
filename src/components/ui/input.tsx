import * as React from "react";

import { cn } from "@/lib/utils";

import { handleKeyup } from "../../hooks/useMask";
import { Label } from "../ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  mask?: "cellphone" | "phone" | "number" | "cnpj" | "cep" | "cpf" | "default";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      mask = "default",
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <fieldset className={className}>
        <Label htmlFor={label} className={labelClassName}>
          {label}
        </Label>
        <input
          onKeyUp={(e) => handleKeyup(e, mask)}
          name={label}
          type={type}
          className={cn(
            className,
            `my-2.5 flex h-11 w-full  rounded-md border border-input bg-background px-3  pl-4 pr-5 text-sm !text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? " border-2 border-red-500   focus-visible:ring-red-500" : ""}`
          )}
          ref={ref}
          {...props}
        />
        <p className="min-h-4 text-sm font-semibold  text-red-500">
          {error ? error : " "}
        </p>
      </fieldset>
    );
  }
);
Input.displayName = "Input";

export { Input };
