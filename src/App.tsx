import { Alert, ProjectAlert, AlertBar, AlertBarUndo, Toast, CheckIcon } from './components/blocks';
import {
  AcceptChangesPopup,
  VerifyIdentityPopup,
  TermsPopup,
} from './components/blocks';
import {
  ConfirmModal,
  SuccessModal,
  SuccessUndoModal,
  AcceptModal,
  AcceptCheckboxModal,
  AcceptCheckboxLeftModal,
  AcceptImageModal,
  NewsletterModal,
  NewsletterImageModal,
} from './components/blocks';

// Emoji icons used in the design
const ThumbsUpIcon = () => <span role="img" aria-label="thumbs up">&#128077;</span>;
const WarningIcon = () => <span role="img" aria-label="warning">&#129320;</span>;
const CelebrationIcon = () => <span role="img" aria-label="celebration">&#127881;</span>;

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-black mb-2">
          20+ Modals, Popups & Alerts
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          A comprehensive collection of modal and alert components for modern UI.
        </p>

        {/* Alerts Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Alerts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Alert
              icon={<ThumbsUpIcon />}
              title="Changes saved successfully"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              onClose={() => console.log('Close alert')}
            />
            <Alert
              icon={<ThumbsUpIcon />}
              title="Changes saved successfully"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              learnMoreHref="#"
              onClose={() => console.log('Close alert')}
            />
          </div>
        </section>

        {/* Project Alerts Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Project Alerts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectAlert
              title="Project success"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              learnMoreHref="#"
              onClose={() => console.log('Close')}
            />
            <ProjectAlert
              title="Project success"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              onClose={() => console.log('Close')}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <AlertBar
              title="Project success"
              onClose={() => console.log('Close')}
            />
            <AlertBarUndo
              title="Project success"
              onUndo={() => console.log('Undo')}
            />
          </div>
        </section>

        {/* Toast Notifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Toast Notifications</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Toast
              icon={<CheckIcon />}
              message="Changes applied successfully!"
            />
            <Toast
              icon={<CheckIcon />}
              message="Changes applied successfully!"
              onUndo={() => console.log('Undo')}
            />
            <Toast
              icon={<CheckIcon />}
              message="Changes applied successfully!"
              onClose={() => console.log('Close')}
            />
          </div>
        </section>

        {/* Popups Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Popups</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <AcceptChangesPopup
              icon={<WarningIcon />}
              title="Accept changes?"
              description="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
            <VerifyIdentityPopup
              title="We need to verify your identity"
              description="We take certain actions for the safety of our users."
              onContinue={(pwd) => console.log('Continue with:', pwd)}
              onClose={() => console.log('Close')}
            />
          </div>
          <div className="mt-8">
            <TermsPopup
              title="Terms and agreements"
              terms={[
                'Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit ultrices enim cursus. Leo sapien, pretium duis est eu volutpat interdum eu non. Odio eget nullam elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque iaculis enim.',
                'Felis eu non in aliquam egestas placerat. Eget maecenas ornare venenatis lacus nunc, sit arcu. Nam pharetra faucibus eget facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam blandit eu ipsum.',
              ]}
              onReject={() => console.log('Nope')}
              onAgree={() => console.log('Agree')}
              onClose={() => console.log('Close')}
              rejectLabel="Nope :("
              agreeLabel="I agree"
            />
          </div>
        </section>

        {/* Modals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Modals</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <ConfirmModal
              icon={<WarningIcon />}
              title="Are you sure you want to deactivate?"
              description="Deactivating is permanent and your account will automatically be deleted after 30 days if you do not log in again."
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
            <SuccessModal
              icon={<CelebrationIcon />}
              title="Your order has been placed!"
              onConfirm={() => console.log('Thanks')}
              onClose={() => console.log('Close')}
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
            <SuccessUndoModal
              icon={<CelebrationIcon />}
              title="Your order has been placed!"
              onUndo={() => console.log('Undo')}
              onConfirm={() => console.log('Thanks')}
              onClose={() => console.log('Close')}
            />
            <AcceptModal
              title="Do you want to accept?"
              description="Accepting it will open a pandora's box."
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
          </div>
        </section>

        {/* Accept Modals with Checkbox */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Accept Modals (with Checkbox)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AcceptCheckboxModal
              title="Do you want to accept?"
              description="Accepting it will open a pandora's box."
              checkboxLabel="Remember my choice"
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
            <AcceptCheckboxLeftModal
              title="Do you want to accept?"
              description="Accepting it will open a pandora's box."
              checkboxLabel="Remember my choice"
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
            <AcceptImageModal
              title="Do you want to accept?"
              description="Accepting it will open a pandora's box."
              imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60"
              onReject={() => console.log('Reject')}
              onAccept={() => console.log('Accept')}
              onClose={() => console.log('Close')}
            />
          </div>
        </section>

        {/* Newsletter Modals */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Newsletter Modals</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <NewsletterModal
              title="Subscribe to our Newsletter"
              description="Join thousands getting emails in their inbox."
              onSubscribe={(email) => console.log('Subscribe:', email)}
              onClose={() => console.log('Close')}
            />
            <NewsletterImageModal
              title="Subscribe to our Newsletter"
              description="Join thousands getting emails in their inbox."
              imageSrc="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60"
              onSubscribe={(email) => console.log('Subscribe:', email)}
              onClose={() => console.log('Close')}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
          <p>License: Free for Commercial & Personal uses. No attribution required.</p>
        </footer>
      </div>
    </div>
  );
}