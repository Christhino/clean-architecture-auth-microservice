export default {
  mongoUrl: process.env.MONGO_URL || '',
  port: process.env.PORT || '',
  jwtSecret:
    process.env.JWT_SECRET ||
    'e9cfc88d48b675ebdb4bdbf7384e5641d78d79f7192bb9823a1fece99b4078ab',
  smtpMail: process.env.SMTP_MAIL || '',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: process.env.SMTP_PORT || 587,
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  salt: 12,
};
