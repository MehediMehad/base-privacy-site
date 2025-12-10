import { APP_NAME, APP_SUPPORT_EMAIL } from "@/lib/information";
import Head from "next/head";
import React from "react";

const effectiveDate = "August 12, 2025";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — {APP_NAME}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 md:p-8 prose prose-blue text-gray-800">
        <h1 className="text-3xl font-semibold text-blue-700">Privacy Policy</h1>
        <p>
          <strong>Effective date:</strong> {effectiveDate}
        </p>

        <p>
          Thank you for choosing <strong>{APP_NAME}</strong>. Your privacy is
          important to us. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have. Please read it
          carefully.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">
          1. Information we collect
        </h2>
        <p>
          {APP_NAME} collects the minimum data necessary to provide the service
          and to help you manage and relive your trips:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Account data:</strong> name, email address and password
            (used for authentication only).
          </li>
          <li>
            <strong>Profile data:</strong> optional profile details you add
            (bio, profile photo, basic personal preferences).
          </li>
          <li>
            <strong>Travel &amp; trip data:</strong> trips you create, journal
            entries, visited countries, dates, and any photos you upload to your
            trips.
          </li>
          <li>
            <strong>Usage &amp; diagnostics:</strong> anonymous usage data and
            crash logs (if enabled) to help improve the app.
          </li>
        </ul>

        <h2 className="text-2xl mt-4 text-blue-700">2. How we use your data</h2>
        <ul className="list-disc ml-6">
          <li>To create and manage your account and allow you to sign in.</li>
          <li>
            To store and display your travel entries, trips and visited
            countries on the world map.
          </li>
          <li>To provide customer support and respond to your requests.</li>
          <li>
            To improve the app, fix bugs, and analyse usage (aggregated and
            anonymized where possible).
          </li>
        </ul>

        <h2 className="text-2xl mt-4 text-blue-700">
          3. Sharing &amp; third parties
        </h2>
        <p>
          We do <strong>not</strong> sell or rent your personal data to third
          parties. We may share data in the following limited cases:
        </p>
        <ul className="list-disc ml-6">
          <li>
            With service providers who perform functions on our behalf (e.g.,
            hosting, backup, analytics). These providers only get access to the
            data they need and are contractually prohibited from using it for
            other purposes.
          </li>
          <li>
            To comply with laws, respond to lawful requests (e.g., subpoenas),
            or protect our rights, property or safety and those of our users.
          </li>
        </ul>

        <h2 className="text-2xl mt-4 text-blue-700">
          4. Data storage &amp; security
        </h2>
        <p>
          We store your data on secure servers. We take reasonable technical and
          organizational measures to protect your data in transit (TLS/HTTPS)
          and at rest. However, no system is 100% secure—if you have specific
          security concerns, please contact us.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">5. Photos &amp; media</h2>
        <p>
          Photos or media you upload to trips are stored to support the feature.
          You control these images and may delete them at any time (see "Your
          rights" below).
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">
          6. Account deletion &amp; data removal
        </h2>
        <p>
          You can delete your account from the app (Profile → Delete account).
          When you delete your account we will:
        </p>
        <ul className="list-disc ml-6">
          <li>Remove your personal profile and authentication credentials.</li>
          <li>
            Delete your trips, journal entries and uploaded photos from our
            active database and backups within a reasonable period.
          </li>
        </ul>
        <p>
          If you want immediate manual removal or have questions, contact us
          (contact details below).
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">7. Your rights</h2>
        <p>
          Depending on your jurisdiction you may have rights such as accessing
          your data, correcting it, requesting deletion, or exporting it. To
          exercise any right, please contact us at the address below.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">8. Children</h2>
        <p>
          {APP_NAME} is not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has created an account, please contact us and we will remove the
          data.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">
          9. International transfers
        </h2>
        <p>
          Your data may be stored or processed in different countries. When
          transferring data across borders we follow applicable legal
          requirements and reasonable safeguards to protect your information.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">
          10. Third-party features &amp; links
        </h2>
        <p>
          The app may include links to third-party websites or services (for
          example: map providers). These third parties have their own privacy
          policies — we encourage you to review them. We are not responsible for
          their practices.
        </p>

        <h2 className="text-2xl mt-4 text-blue-700">
          11. Changes to this policy
        </h2>
        <p>
          We may update this policy from time to time. When we make material
          changes we will update the "Effective date" above and, where
          appropriate, notify you within the app.
        </p>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-sm">
          <p className="text-sm font-semibold">Contact</p>
          <p className="text-sm">
            If you have questions or want to request data deletion/export,
            please contact us at:{" "}
            <a
              href={`mailto:${APP_SUPPORT_EMAIL}`}
              className="text-blue-600 underline"
            >
              {APP_SUPPORT_EMAIL}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Replace this email with your support email before publishing.
          </p>
        </div>

        <footer className="mt-8 border-t pt-4 text-gray-500 text-sm">
          <p>
            By using this app, you agree to the practices described in this
            Privacy Policy.
          </p>
          <p>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

export default PrivacyPage;
