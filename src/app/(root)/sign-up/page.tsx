"use client";

import Page from "@/Page";
import API from "@/api/index.api";
import { useAuth } from "@/context/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    if (!email || !password || !passwordConfirm)
      return alert("모든 값을 입력해 주세요");

    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");

    const { accessToken } = await mutateAsync({ email, password });
    logIn(accessToken);
  };

  return (
    <Page>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ID"
      />
      <div>
        <h4>비밀번호</h4>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="qlk"
          type="password"
        />
      </div>
      <input
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="PW2"
        type="password"
      />

      <button onClick={handleClickSignUp}>회원가입하기</button>
    </Page>
  );
}

export default SignUpPage;
