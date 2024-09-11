"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";

type StepOneProps = {
    onNext: (values: z.infer<typeof firstStepSchema>) => void;
};

export const firstStepSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    location: z.string(),
})

const StepOne = ({ onNext }: StepOneProps) => {

    const form = useForm<z.infer<typeof firstStepSchema>>({
        resolver: zodResolver(firstStepSchema),
    });

    const onSubmit = (values: z.infer<typeof firstStepSchema>) => {
        onNext(values);
    };

    return (
        <div>
            <h3 className="text-3xl font-bold">Register for an account</h3>
            <p className="text-gray-500 text-sm mt-3">👏🏻 Let&apos;s start with a little bit of information</p>

            <div className="mt-10">
                <FormProvider>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className="grid grid-cols-2 gap-10 mb-5">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter first name"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter last name"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-5">
                                        <FormLabel>Email Address:</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your email"
                                                type="email"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location:</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your location"
                                                type="text"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="mt-5 w-full"
                                type="submit"
                            >Continue</Button>
                        </form>
                    </Form>
                </FormProvider>
            </div>
        </div>
    )
}

export default StepOne;