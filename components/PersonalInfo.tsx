import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./Form";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
}

export function PersonalInfo(props: IProps) {
    const { nextStep, formState, handleChange } = props;
    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={formState.name}
                        onChange={(event) => handleChange(event.target.value, 'name')}
                        type="text"
                    />
                </Form.Group> 
               
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        value={formState.phonenumber}
                        onChange={(event) => handleChange(event.target.value, 'phonenumber')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group>
                    <Button onClick={nextStep} type="submit">Continue</Button>
                </Form.Group>
            </Form>
        </div>
    )
}