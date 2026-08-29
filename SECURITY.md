# Security Policy

## 🔒 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

---

## 🛡️ Reporting a Vulnerability

If you discover a security issue or vulnerability within the **Secure System Solution** repository:

1. **Do not create a public issue.**
2. Send an email directly to `info@securesystemsolution.in` or repository maintainers with:
   - Detailed description of the vulnerability.
   - Steps to reproduce or proof-of-concept.
   - Potential impact and affected files/components.
3. The maintenance team will review the disclosure, acknowledge receipt within 48 hours, and provide an expected remediation timeline.

---

## 🔐 Security Best Practices in Codebase

- **No Stored Secrets**: Never commit API keys, database credentials, or sensitive tokens in the repository.
- **Client Security**: Sanitize and escape all dynamically rendered content to prevent Cross-Site Scripting (XSS).
- **Dependency Auditing**: Regularly run `npm audit` to check for known vulnerabilities in upstream packages.
