import { GoBackButton } from "atoms/AuthButtons";
import { AuthLogo } from "atoms/Logo";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import SignupForm from "./SignupForm";
import SignupOption from "./SignupOption";

export default function SignupBody() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const signupWithEmail = () => {
    setShowForm(true);
  };

  const handleBackButtonClick = () => {
    if (showForm) {
      setShowForm(false);
      return;
    }
    router.back();
  };

  return (
    <>
      <GoBackButton onClick={() => handleBackButtonClick()} />
      <AuthLogo>μStock</AuthLogo>
      <SignupText>회원가입</SignupText>
      {showForm ? (
        <SignupForm />
      ) : (
        <SignupOption signupWithEmail={signupWithEmail} />
      )}
    </>
  );
}

const SignupText = styled.h2`
  ${fonts.big}
  margin: 0;
  margin-top: 42px;
  text-align: center;
`;
