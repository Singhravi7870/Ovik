import React, { useState } from "react";
import {PanInfo} from "./PanInfo";
import {PersonalInfo} from "./PersonalInfo";
import {GstInfo} from "./GstInfo";
import { ReviewFormValue } from "./ReviewFormValue";


export interface IFormState {
    step: number;
    name: string;
    phonenumber: number | undefined;
    paninfo: string;
    firmname: string;
    gstnumber: string;
}

const defaultValue: IFormState = {
    step: 1,
    name: '',
    phonenumber: undefined,
    paninfo: '',
   firmname: '',
   gstnumber: '',
}

export function Form() {
    const [formState, setFormState] = useState<IFormState>(defaultValue);

    const handleFieldUpdate = (value: string, fieldName: string) => {
        setFormState({
            ...formState,
            [fieldName]: value
        });
    }

    const handleNextStep = () => {
        setFormState({
            ...formState,
            step: formState.step + 1
        });
    }

    const handlePreviousStep = () => {
        setFormState({
            ...formState,
            step: formState.step - 1
        });
    }

    const renderForms = () => {
        if (formState.step === 1) {
            return <PersonalInfo nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 2) {
            return <PanInfo previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 3) {
            return <GstInfo previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 4) {
            return <ReviewFormValue previousStep={handlePreviousStep} formState={formState} />
        }
        return <></>;
    }
    return (
        <div>{renderForms()}</div>
    )
}