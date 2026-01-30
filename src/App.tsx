import { useState } from 'react';
import { Modal } from './components/ui/Modal';
import { Alert } from './components/ui/Alert';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';

type ModalType =
  | 'accept-changes'
  | 'verify-identity'
  | 'terms'
  | 'deactivate'
  | 'order-placed'
  | 'do-you-want-accept-1'
  | 'do-you-want-accept-2'
  | 'do-you-want-accept-3'
  | 'do-you-want-accept-image'
  | 'newsletter'
  | 'newsletter-image'
  | 'order-placed-button'
  | null;

export default function App() {
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const [alerts, setAlerts] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberChoice, setRememberChoice] = useState(false);

  const showAlert = (id: number) => {
    setAlerts([...alerts, id]);
    setTimeout(() => {
      setAlerts(alerts.filter(alertId => alertId !== id));
    }, 5000);
  };

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alertId => alertId !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Modals, Popups & Alerts</h1>
          <p className="text-xl text-gray-600">A comprehensive collection of UI components</p>
        </header>

        {/* Alerts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={() => showAlert(1)}>Show Success Alert with Icon</Button>
            <Button onClick={() => showAlert(2)}>Show Alert with Description</Button>
            <Button onClick={() => showAlert(3)}>Show Project Access Alert</Button>
            <Button onClick={() => showAlert(4)}>Show Simple Alert</Button>
            <Button onClick={() => showAlert(5)}>Show Alert with Undo</Button>
            <Button onClick={() => showAlert(6)}>Show Alert with Undo & Close</Button>
            <Button onClick={() => showAlert(7)}>Show Success Green Alert</Button>
            <Button onClick={() => showAlert(8)}>Show Alert with Undo Button</Button>
            <Button onClick={() => showAlert(9)}>Show Alert with Close Icon</Button>
          </div>
        </section>

        {/* Popups Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Popups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={() => setOpenModal('accept-changes')}>Accept Changes?</Button>
            <Button onClick={() => setOpenModal('verify-identity')}>Verify Identity</Button>
            <Button onClick={() => setOpenModal('terms')}>Terms and Agreements</Button>
          </div>
        </section>

        {/* Modals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Modals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={() => setOpenModal('deactivate')}>Deactivate Confirmation</Button>
            <Button onClick={() => setOpenModal('order-placed')}>Order Placed</Button>
            <Button onClick={() => setOpenModal('do-you-want-accept-1')}>Accept Modal</Button>
            <Button onClick={() => setOpenModal('do-you-want-accept-2')}>Accept with Checkbox</Button>
            <Button onClick={() => setOpenModal('do-you-want-accept-3')}>Accept with Checkbox Alt</Button>
            <Button onClick={() => setOpenModal('do-you-want-accept-image')}>Accept with Image</Button>
            <Button onClick={() => setOpenModal('newsletter')}>Newsletter Subscribe</Button>
            <Button onClick={() => setOpenModal('newsletter-image')}>Newsletter with Image</Button>
            <Button onClick={() => setOpenModal('order-placed-button')}>Order Placed with Button</Button>
          </div>
        </section>

        {/* Alert Notifications */}
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md">
          {alerts.includes(1) && (
            <Alert
              variant="success"
              icon="👍"
              title="Changes saved successfully"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              onClose={() => removeAlert(1)}
            />
          )}
          {alerts.includes(2) && (
            <Alert
              variant="warning"
              icon="👍"
              title="Changes saved successfully"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
            />
          )}
          {alerts.includes(3) && (
            <Alert
              variant="warning"
              icon="📝"
              title="Project access"
              description="You must enable project access for the user's profile. Id etiam nibh suscipit aliquam dolor."
            />
          )}
          {alerts.includes(4) && (
            <Alert
              variant="warning"
              icon="📝"
              title="Project access"
            />
          )}
          {alerts.includes(5) && (
            <Alert
              variant="warning"
              title="Project access"
              showUndo
              onUndo={() => removeAlert(5)}
            />
          )}
          {alerts.includes(6) && (
            <Alert
              variant="warning"
              title="Project access"
              showUndo
              onUndo={() => removeAlert(6)}
              onClose={() => removeAlert(6)}
            />
          )}
          {alerts.includes(7) && (
            <Alert
              variant="success"
              icon="✓"
              title="Changes applied successfully!"
            />
          )}
          {alerts.includes(8) && (
            <Alert
              variant="success"
              icon="✓"
              title="Changes applied successfully!"
              showUndo
              onUndo={() => removeAlert(8)}
            />
          )}
          {alerts.includes(9) && (
            <Alert
              variant="success"
              icon="✓"
              title="Changes applied successfully!"
              showUndo
              onUndo={() => removeAlert(9)}
              onClose={() => removeAlert(9)}
            />
          )}
        </div>

        {/* Accept Changes Modal */}
        <Modal isOpen={openModal === 'accept-changes'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-4xl flex-shrink-0">
                🤔
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-2">Accept changes?</h2>
                <p className="text-gray-600">
                  Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <Button variant="secondary" fullWidth onClick={() => setOpenModal(null)}>
                Reject
              </Button>
              <Button fullWidth onClick={() => { showAlert(1); setOpenModal(null); }}>
                Accept
              </Button>
            </div>
          </div>
        </Modal>

        {/* Verify Identity Modal */}
        <Modal isOpen={openModal === 'verify-identity'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">We need to verify your identity</h2>
              <p className="text-gray-600">
                We take certain actions for the safety of our users.
              </p>
            </div>
            <Input
              label="Your password"
              type="password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
            />
            <Button fullWidth onClick={() => { setPassword(''); setOpenModal(null); }}>
              Continue
            </Button>
          </div>
        </Modal>

        {/* Terms and Agreements Modal */}
        <Modal isOpen={openModal === 'terms'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Terms and agreements</h2>
              <div className="text-gray-600 space-y-4 max-h-60 overflow-y-auto">
                <p>
                  Convallis eget sit pellentesque dapibus neque vitae. At facilisis sit cras pretium eget sollicitudin massa. Nulla sollicitudin accumsan, massa gravida tincidunt mattis.
                </p>
                <p>
                  Fames ac at ultrices aliquet metus dolor ornare. Cum diam aliquet cras odui morbi mauris. Quam varius magna elementum enim. Quam faucibus pulvinar non pellentesque. Tincidunt pulvinar blandit nec lorem aliquam justo et. Vitae massa congue purus lorem vitae accumsan cursus morbi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" fullWidth onClick={() => setOpenModal(null)}>
                Keep it
              </Button>
              <Button fullWidth onClick={() => setOpenModal(null)}>
                I Agree
              </Button>
            </div>
          </div>
        </Modal>

        {/* Deactivate Confirmation Modal */}
        <Modal isOpen={openModal === 'deactivate'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-4xl flex-shrink-0">
                🤔
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-2">Are you sure you want to deactivate?</h2>
                <p className="text-gray-600">
                  Deactivating is permanent and your account will automatically be deleted after 30 days if you do not log in again.
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <Button variant="secondary" fullWidth onClick={() => setOpenModal(null)}>
                Reject
              </Button>
              <Button fullWidth onClick={() => setOpenModal(null)}>
                Accept
              </Button>
            </div>
          </div>
        </Modal>

        {/* Order Placed Modal */}
        <Modal isOpen={openModal === 'order-placed'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="w-40 h-40 rounded-full bg-yellow-100 flex items-center justify-center text-7xl">
              🎉
            </div>
            <h2 className="text-3xl font-bold">Your order has been placed!</h2>
            <Button fullWidth onClick={() => setOpenModal(null)}>
              Thanks!
            </Button>
          </div>
        </Modal>

        {/* Do You Want to Accept Modal 1 */}
        <Modal isOpen={openModal === 'do-you-want-accept-1'} onClose={() => setOpenModal(null)} maxWidth="sm">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold">Do you want to accept?</h2>
            <p className="text-gray-600">
              Remember me when you make a selection box.
            </p>
            <div className="flex gap-4 w-full">
              <Button variant="secondary" fullWidth onClick={() => setOpenModal(null)}>
                Reject
              </Button>
              <Button fullWidth onClick={() => setOpenModal(null)}>
                Accept changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Do You Want to Accept Modal 2 */}
        <Modal isOpen={openModal === 'do-you-want-accept-2'} onClose={() => setOpenModal(null)} maxWidth="sm">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold">Do you want to accept?</h2>
            <p className="text-gray-600">
              Remember me when you make a selection box.
            </p>
            <Checkbox
              label="Remember my choice"
              checked={rememberChoice}
              onChange={(e) => setRememberChoice(e.target.checked)}
            />
            <div className="flex gap-4 w-full">
              <Button variant="secondary" fullWidth onClick={() => { setRememberChoice(false); setOpenModal(null); }}>
                Reject
              </Button>
              <Button fullWidth onClick={() => { setRememberChoice(false); setOpenModal(null); }}>
                Accept changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Do You Want to Accept Modal 3 */}
        <Modal isOpen={openModal === 'do-you-want-accept-3'} onClose={() => setOpenModal(null)} maxWidth="sm">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Do you want to accept?</h2>
              <p className="text-gray-600">
                Remember me when you make a selection box.
              </p>
            </div>
            <Checkbox
              label="Remember my choice"
              checked={rememberChoice}
              onChange={(e) => setRememberChoice(e.target.checked)}
            />
            <div className="flex gap-4">
              <Button variant="secondary" fullWidth onClick={() => { setRememberChoice(false); setOpenModal(null); }}>
                Reject
              </Button>
              <Button fullWidth onClick={() => { setRememberChoice(false); setOpenModal(null); }}>
                Accept changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Do You Want to Accept with Image Modal */}
        <Modal isOpen={openModal === 'do-you-want-accept-image'} onClose={() => setOpenModal(null)} maxWidth="sm">
          <div className="flex flex-col gap-8">
            <img
              src="./assets/images/flowers.png"
              alt="Flowers"
              className="w-full h-40 object-cover rounded-xl"
              loading="lazy"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Do you want to accept?</h2>
              <p className="text-gray-600">
                Accepting it will open a pandora's box.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" fullWidth onClick={() => setOpenModal(null)}>
                Reject
              </Button>
              <Button fullWidth onClick={() => setOpenModal(null)}>
                Accept changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Newsletter Subscribe Modal */}
        <Modal isOpen={openModal === 'newsletter'} onClose={() => setOpenModal(null)} maxWidth="lg">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-gray-600">
              Join thousands getting emails in their inbox.
            </p>
            <Input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button fullWidth onClick={() => { setEmail(''); setOpenModal(null); }}>
              Subscribe
            </Button>
          </div>
        </Modal>

        {/* Newsletter Subscribe with Image Modal */}
        <Modal isOpen={openModal === 'newsletter-image'} onClose={() => setOpenModal(null)} maxWidth="lg">
          <div className="flex flex-col items-center gap-8 text-center">
            <img
              src="./assets/images/email-notification.png"
              alt="Email notification"
              className="w-full h-48 object-contain rounded-xl"
              loading="lazy"
            />
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-gray-600">
              Join thousands getting emails in their inbox.
            </p>
            <Input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button fullWidth onClick={() => { setEmail(''); setOpenModal(null); }}>
              Subscribe
            </Button>
          </div>
        </Modal>

        {/* Order Placed with Button Modal */}
        <Modal isOpen={openModal === 'order-placed-button'} onClose={() => setOpenModal(null)} maxWidth="md">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="w-40 h-40 rounded-full bg-yellow-100 flex items-center justify-center text-7xl">
              🎉
            </div>
            <h2 className="text-3xl font-bold">Your order has been placed!</h2>
            <Button fullWidth onClick={() => setOpenModal(null)}>
              Thanks!
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
