# API & Integration Reference

> Documentation of current endpoints and communication protocols in **Secure System Solution**.

---

## 📡 1. REST Endpoints

### 1.1 Health Check

Returns the operational status of the Node.js Express server.

- **URL**: `/api/health`
- **Method**: `GET`
- **Authentication**: None (Public)
- **Response Headers**: `Content-Type: application/json`

#### Successful Response (200 OK)
```json
{
  "status": "ok"
}
```

---

## 🔗 2. Client Protocol Handlers

### 2.1 Contact Form Mail Delivery Protocol
- **Trigger**: Submission of `#contactForm` in `index.html`.
- **Handler**: `script.js` line 131.
- **Protocol**: `mailto:`
- **Destination**: `info@securesystemsolution.in`
- **Parameters**:
  - `subject`: `Enterprise Request from {name}`
  - `body`: Preformatted message including selected service and sender name.

### 2.2 Direct UPI Payment Protocol
- **Trigger**: Click on "Pay Directly via Phone App" in `contact.html`.
- **Protocol**: `upi://pay`
- **Parameters**:
  - `pa`: `8297477082@upi` (Payee VPA)
  - `pn`: `Secure System Solution` (Payee Name)
  - `cu`: `INR` (Currency)

### 2.3 WhatsApp Floating Quick Action
- **Trigger**: Click on fixed WhatsApp button in `index.html`.
- **URL**: `https://wa.me/918797477082?text=I%20am%20interested%20in%20Secure%20System%20Solution%20Architecture`
- **Destination Number**: `+91-8797477082`
