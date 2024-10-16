import { Box, Typography, Grid, Button, Container } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'src/components/CustomInput/InputForm.component';
import toast from 'react-hot-toast';

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

export default function ContactForm() {
  const methods = useForm({
    resolver: yupResolver(contactSchema),
    mode: 'onBlur',
  });

  const {
    reset,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = () => {
    // Simulate sending message with a fake delay
    setTimeout(() => {
      toast.success('Message sent successfully!');
      reset();
    }, 500);
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ContactSupportIcon fontSize="large" sx={{ m: 1 }} />
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions, feel free to reach out to us using the
            form below.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  required
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  type="text"
                  required
                  autoComplete=""
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="message"
                  name="message"
                  label="Message"
                  required
                  autoComplete=""
                  type={'text'}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              disabled={!isValid}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </FormProvider>
  );
}
