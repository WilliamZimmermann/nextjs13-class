import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ReCaptchaProps {
  children: React.ReactNode;
}

export default function ReCaptcha(props: ReCaptchaProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_KEY_HERE">
      {props.children}
    </GoogleReCaptchaProvider>
  );
}
