"use client";
import { FaPowerOff } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/Button";

export default function Home() {
  const searchParams = useSearchParams();

  const { back } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <div className="w-[28rem] p-12 bg-white border rounded-lg">
        <h1 className="text-3xl text-center font-semibold select-none">
          Logged in
        </h1>
        <p className="mt-8">
          Hi! You successfully logged in with e-mail{" "}
          <span className="font-semibold">{searchParams.get("email")}</span>
        </p>
        <Button
          type="button"
          title="Logout"
          icon={<FaPowerOff size={16} className="inline-block mr-2" />}
          styles="text-white bg-red-500 hover:bg-red-600 hover:shadow-lg"
          onClick={back}
        />
      </div>
    </div>
  );
}
