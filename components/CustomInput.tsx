import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, Field, FieldPath } from "react-hook-form";
import { z } from "zod";
import { AuthFormSchema } from "@/lib/utils";

const formSchema = AuthFormSchema("sign-up");
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                type={name === "password" ? "password" : "text"}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
