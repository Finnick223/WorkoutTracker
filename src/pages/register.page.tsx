import { Container } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';
import RegisterForm from 'src/modules/Auth/RegisterForm.component';

export default function Register() {
  return (
    <>
      <AnimatePage>
        <Container component="main" maxWidth="xs">
          <RegisterForm />
        </Container>
      </AnimatePage>
    </>
  );
}
