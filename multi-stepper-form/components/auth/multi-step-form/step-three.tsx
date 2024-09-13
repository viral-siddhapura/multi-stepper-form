"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const thirdStepSchema = z.object({
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The passwords did not match",
            path: ["confirmPassword"],
        });
    }
});

interface StepThreeProps {
    onBack: () => void;
    handleSubmit: (values: z.infer<typeof RegisterSchema>) => void;
    formData: any;
}

const StepThree = ({
    onBack,
    handleSubmit,
    formData,
}: StepThreeProps) => {

    const [passwordStrength, setPasswordStrength] = useState("");
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: formData,
    });

    const checkPasswordStrength = (password: string) => {
        const strongRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

        const mediumRegex =
            /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (strongRegex.test(password)) {
            setPasswordStrength("strong");
        } else if (mediumRegex.test(password)) {
            setPasswordStrength("medium");
        } else {
            setPasswordStrength("weak");
        }
    }

    const onSubmit = (
        values: z.infer<typeof RegisterSchema>
    ) => {
        if (values.password !== values.confirmPassword) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
            handleSubmit(values);
        }
    };

    return (
        <div>
            <h3 className="text-3xl font-bold">
                Choose a password
            </h3>
            <p className="text-gray-500 text-sm mt-3">
                🥷 Make sure you choose a strong one
            </p>
        </div>
    );
};

export default StepThree;