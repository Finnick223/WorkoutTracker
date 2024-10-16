import { Container, Typography, Box } from '@mui/material';

function Terms() {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our workout tracker app. By using our service, you agree to
          the following terms and conditions. Please read them carefully. If you
          do not agree to these terms, please discontinue using our app.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          By using the app, you are responsible for ensuring that all
          information you provide is accurate and up-to-date. You agree not to
          misuse our app for any unauthorized or unlawful purposes.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Personal Data
        </Typography>
        <Typography variant="body1" paragraph>
          We collect and use your personal data in accordance with our Privacy
          Policy. By using the app, you consent to the collection and use of
          your data as outlined in the Privacy Policy. This includes information
          like your name, email, workout history, and body measurements, which
          are used to personalize your experience.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content and materials available on this app, including but not
          limited to text, graphics, logos, and software, are the property of
          the app and are protected by applicable intellectual property laws.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          We are not responsible for any injury, health issues, or damages
          arising from the use of our app. You acknowledge that your use of the
          app is at your own risk, and you are responsible for consulting a
          health professional before starting any fitness program.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Changes to the Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to update these terms and conditions at any time.
          Any changes will be effective immediately upon posting, and continued
          use of the app after such changes signifies your agreement to the
          updated terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Termination
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to terminate or suspend your access to the app at
          any time if you violate these terms or engage in any activity that we
          deem harmful to our service or other users.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography variant="body1" paragraph mb={8}>
          If you have any questions about this Privacy Policy, please contact us
          at contact page.
        </Typography>
      </Box>
    </Container>
  );
}

export default Terms;
