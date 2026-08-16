# Contact Form Setup

The public enquiry form uses the existing MongoDB Atlas and SMTP implementation. Each valid submission is validated on the server, saved to the `Enquiry` collection, and then sent to the company mailbox. The MongoDB record stores `emailStatus` as `pending`, `sent`, or `failed`, along with an error message when SMTP delivery fails.

## Required deployment variables

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB Atlas connection string for the enquiry database. |
| `SMTP_HOST` | SMTP hostname for the company mailbox provider. |
| `SMTP_PORT` | SMTP port, normally `587` for STARTTLS or `465` for implicit TLS. |
| `SMTP_USER` | Authenticated SMTP mailbox username. |
| `SMTP_PASS` | SMTP password or provider-issued app password. |
| `SMTP_FROM` | Optional sender address. Defaults to `SMTP_USER`. |
| `DESTINATION_EMAIL` | Optional notification destination. Defaults to `contact@bhardwajinnovations.com`. |

Copy `.env.example` into the hosting environment and replace every placeholder with the real values. Do not commit `.env`, `.env.local`, SMTP passwords, or MongoDB credentials.

## Delivery behavior

A successful response is shown only after the enquiry is saved and the SMTP notification is accepted by the configured mail server. If MongoDB fails, the visitor receives a save-failure message. If MongoDB succeeds but SMTP fails, the visitor is told that the enquiry was saved but the notification could not be delivered, and the MongoDB record is marked `emailStatus: "failed"` for follow-up.

The notification uses the configured company mailbox as the sender, sends to `DESTINATION_EMAIL`, and sets the visitor's email as `Reply-To` so the company can respond directly.
