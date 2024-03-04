export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://mintsaniainachristhino:bggrKtKDBWHFyXsN@auth.ehi6d6x.mongodb.net/?retryWrites=true&w=majority&appName=Auth',
  port: process.env.PORT || '5050',
  jwtSecret:
    process.env.JWT_SECRET ||
    'e9cfc88d48b675ebdb4bdbf7384e5641d78d79f7192bb9823a1fece99b4078ab',
  smtpMail: process.env.SMTP_MAIL || 'mintsaniaina.christhino@gmail.com',
  smtpHost: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  smtpPort: process.env.SMTP_PORT || 587,
  smtpUser: process.env.SMTP_USER || 'mintsaniaina.christhino@gmail.com',
  smtpPass: process.env.SMTP_PASS || 'dGLRmFCO3kvbU24I',
  salt: 12,
};
