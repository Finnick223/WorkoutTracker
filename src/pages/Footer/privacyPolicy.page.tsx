import { Container, Typography, Box } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. This privacy policy explains what
          personal data we collect from you, how we use it, and your rights
          concerning this data.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          Our workout tracker app collects only the essential information
          required to provide our services:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>
            <strong>Account Information:</strong> We collect your name, email
            address, and password when you create an account. This information
            is necessary to authenticate and personalize your experience.
          </li>
          <li>
            <strong>Workout Data:</strong> We collect the data you enter about
            your exercises, sets, weights, and repetitions. This information
            helps track your workout progress.
          </li>
          <li>
            <strong>Measurement Data:</strong> We store body measurements like
            weight, arms, chest, belly, and legs, which you provide to track
            your fitness progress.
          </li>
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use your data solely for the purpose of providing you with a
          personalized workout tracking experience. Specifically, we use your
          data to:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>Authenticate and manage your account.</li>
          <li>Track and display your workout and measurement history.</li>
          <li>Provide personalized recommendations based on your activity.</li>
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Data Sharing and Disclosure
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell, rent, or share your personal data with third parties,
          except in the following cases:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>With your explicit consent.</li>
          <li>
            As required by law, such as to comply with a subpoena or legal
            process.
          </li>
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We take reasonable measures to protect the security of your data. Your
          account is protected by a password, and we encourage you to choose a
          strong and unique password.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to access, correct, or delete your personal
          information. You can update your information through your account
          settings or contact us for assistance.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Changes to This Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this privacy policy from time to time. If we make
          changes, we will notify you by updating the date at the top of this
          page.
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

export default PrivacyPolicy;
