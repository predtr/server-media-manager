import {render, screen} from '@testing-library/react';
import ButtonIcon from "../../Components/ButtonIcon";
import userEvent from "@testing-library/user-event";

test('Text is present in button', () => {
    render(<ButtonIcon text="Test"/>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
});

test('onClick event is called', () => {
    const callback = jest.fn();

    render(<ButtonIcon text="Toto" onClick={callback()}/>);
    userEvent.click(screen.getByTestId('button'));

    expect(callback).toHaveBeenCalled();
    expect(callback).toBeCalledTimes(1);
});

test('Icon is present in button', () => {
    render(<ButtonIcon text="Toto" icon="facebook"/>);
    const linkElement = screen.getByTestId(/icon/i);
    expect(linkElement).toBeInTheDocument();
});

test('Icon is not present in button', () => {
    render(<ButtonIcon text="Toto"/>);
    const linkElement = screen.queryByTestId(/icon/i);
    expect(linkElement).not.toBeInTheDocument();
});