"use client";

import { useState } from "react"
import { Progress } from "@/components/ui/progress";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";

export default function MultiStepForm() {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        location: "",
        lastName: "",
    });

    const handleNextStep = (data: any) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setCurrentStep(currentStep + 1);
    }

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const progressValue = (currentStep / 3) * 100;
    const stepText = () => {
        switch (currentStep) {
            case 1:
                return "Step 1: Create an account";
            case 2:
                return "Step 2: Skill Level";
            case 3:
                return "Step 3: Create Password";
            default:
                return "";
        }
    };

    return (
        <div className="w-2/3 p-8 flex flex-col">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">{stepText()}</h1>
                <Progress value={progressValue} className="h-2" />
            </div>

            <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
                {
                    currentStep === 1 && (
                        <StepOne onNext={handleNextStep} />
                    )
                }
                {
                    currentStep === 2 && (
                        <StepTwo onNext={handleNextStep} onBack={handlePreviousStep} />
                    )
                }
                {
                    currentStep === 3 && (
                        <StepThree
                            onBack={handlePreviousStep}
                            handleSubmit={finalSubmit}
                            formData={formData}
                        ></StepThree>
                    )
                }
            </div>
        </div>
    )
}