"use client";

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
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    const { accessToken } = await mutateAsync({ email, password });
    logIn(accessToken);
  };

  return (
    <section className="mx-80 mt-40">
      <header className="font-bold text-3xl text-center my-12">회원가입</header>
      <div>
        <h4>이메일</h4>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        />
      </div>
      <div>
        <h4>비밀번호</h4>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          type="password"
        />
      </div>
      <h4>비밀번호 확인</h4>
      <input
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        type="password"
      />
      <div className="border bg-black py-4 px-12 font-semibold text-white border-slate-700 text-center mt-8">
        <button onClick={handleClickSignUp}>회원가입하기</button>
      </div>
    </section>
  );
}

export default SignUpPage;
