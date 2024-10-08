import { render, screen } from '@utils/tests';
import InputFormPassword from './InputPassword.component';
import { FormProvider, useForm } from 'react-hook-form';
import { ReactElement } from 'react';

describe('InputFormPassword', () => {
  const renderWithFormProvider = (Component: ReactElement) => {
    const FormWrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    return render(<FormWrapper>{Component}</FormWrapper>);
  };
  it('Should render correct text and not be disabled on initial state', () => {
    renderWithFormProvider(
      <InputFormPassword
        label="Test Label"
        name="Password"
        type="password"
        required
      />,
    );

    const inputElement = screen.getByLabelText(/Test Label/i);

    expect(inputElement).toBeInTheDocument;
    expect(inputElement).not.toBeDisabled;
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(inputElement).toHaveAttribute('name', 'Password');
  });
  it('Should be required', () => {
    renderWithFormProvider(
      <InputFormPassword
        label="Test Label"
        name="Password"
        type="password"
        required
      />,
    );

    const inputElement = screen.getByLabelText(/Test Label/i);
    expect(inputElement).toBeRequired;
  });
});
