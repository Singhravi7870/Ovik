import { Button, ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./Form";

interface IProps {
    formState: IFormState;
    previousStep: () => void;
}

export function ReviewFormValue(props: IProps) {
    const { formState, previousStep } = props;

    const onConfirm = () => {
        console.log('onConfirm', onConfirm);
        // backend api call
        // reset form
    };

    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {formState.name}</ListGroup.Item>
                <ListGroup.Item>Phone Number: {formState.phonenumber}</ListGroup.Item>
                <ListGroup.Item>Pan Info: {formState.paninfo}</ListGroup.Item>
                <ListGroup.Item>Firm name: {formState.firmname}</ListGroup.Item>
                <ListGroup.Item>Gst Number: {formState.gstnumber}</ListGroup.Item>
            </ListGroup>
            <Form>
                <Button className="mr-4 my-4" onClick={previousStep} variant="primary" type="submit">
                    Previous
                </Button>
                <Button onClick={onConfirm} variant="primary" type="submit">
                    Confirm
                </Button>
            </Form>
        </div>
    )
}