# Modals, Popups & Alerts

A comprehensive collection of 20+ interactive modal, popup, and alert components built from Figma designs.

## 🎨 Features

- **Alerts**: Success notifications with various actions (close, undo, learn more)
- **Popups**: Confirmation dialogs with password inputs and scrollable content
- **Modals**: Full-featured dialogs with hero images, forms, and checkboxes

## 🚀 Live Demo

Preview: [View Demo](https://ta-01kg9ehzzrrayx11d5n8a0nqee-5173.wo-slp928iezm9rzj4e4e9m2mx78.w.modal.host)

## 📦 Components

### Alerts
- Success with close button
- Success with undo action
- Success with learn more link

### Popups
- Accept changes confirmation
- Identity verification with password input
- Terms and agreements with scrollable content
- Deactivation warning
- Order placed success
- Project success notification

### Modals
- Accept confirmation
- Modal with remember choice checkbox
- Modal with hero image
- Newsletter subscription form

## 🛠️ Built With

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool

## 🎯 Figma Design

Original Figma file: [20 Modals, Popups, Alerts](https://www.figma.com/design/7p0W7KllTYkpKRLDHgqFhD/20-Modals--Popups--Alerts--Community-)

## 📝 Usage

```tsx
import { Alert, Popup, Modal } from './components';

// Alert
<Alert
  icon="✓"
  title="Changes applied successfully!"
  onClose={() => setShowAlert(false)}
  variant="success"
/>

// Popup
<Popup
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  icon="🤔"
  title="Accept changes?"
  description="Your description here"
  primaryAction={{ label: 'Accept', onClick: handleAccept }}
  secondaryAction={{ label: 'Reject', onClick: handleReject }}
/>

// Modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Do you want to accept?"
  description="Accepting it will open a pandora's box."
  showCheckbox
  primaryAction={{ label: 'Accept changes', onClick: handleAccept }}
  secondaryAction={{ label: 'Reject', onClick: handleReject }}
/>
```

## 🏃 Development

```bash
npm install
npm run dev
```

## 📄 License

Free for commercial & personal use. No attribution required.

---

Generated with Claude Code from Figma design.