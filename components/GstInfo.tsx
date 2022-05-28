import { isEmpty, isEqual } from "lodash";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./Form";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
    previousStep: () => void;
}

export function GstInfo(props: IProps) {
    const { nextStep, formState, handleChange, previousStep } = props;

  

    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>firm Name</Form.Label>
                    <Form.Control
                        value={formState.firmname}
                        onChange={(event) => handleChange(event.target.value, 'firmname')}
                        type="text"
                    />
                </Form.Group>
              
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>GSTIN Number</Form.Label>
                    <Form.Control
                        value={formState.gstnumber}
                        onChange={(event) => handleChange(event.target.value, 'gstnumber')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group>
                    <Button onClick={previousStep} type="submit">Previous</Button>
                </Form.Group>
                <Form.Group>
                    <Button onClick={nextStep} type="submit">Continue</Button>
                </Form.Group>
            </Form>
        </div>
    )
}