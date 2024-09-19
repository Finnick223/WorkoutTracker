import { Container } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';
import LoginForm from 'src/modules/Auth/LoginForm.component';

export default function LoginPage() {
  return (
    <AnimatePage>
      <Container component="main" maxWidth="xs">
        <LoginForm />
      </Container>
    </AnimatePage>
  );
}
