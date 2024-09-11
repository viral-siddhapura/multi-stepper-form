import MultiStepForm from "@/components/auth/multi-step-form/multi-step-form";

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="sticky top-0 h-screen w-1/3 bg-formImage bg-cover"></div>
            <MultiStepForm />
        </div>
    )
}

export default RegisterPage;