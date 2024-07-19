import { render, screen } from '@utils/tests';
import { Input } from './InputForm.component';
import { FormProvider, useForm } from 'react-hook-form';

describe('InputForm component', () => {
  const renderWithFormProvider = (Component: any) => {
    const FormWrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    return render(<FormWrapper>{Component}</FormWrapper>);
  };

  it('should contain correct text and be not disabled on initial state', () => {
    renderWithFormProvider(
      <Input
        id="test-input"
        name="testName"
        label="Test Label"
        type="text"
        autoComplete="off"
      />,
    );

    const inputElement = screen.getByLabelText(/Test Label/i);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('id', 'test-input');
    expect(inputElement).toHaveAttribute('autocomplete', 'off');
  });
});
