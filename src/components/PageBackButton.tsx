"use client";

import { usePathname, useRouter } from "next/navigation";

export function PageBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <div className="page-back-float">
      <button className="button-secondary back-button" onClick={handleBack} type="button">
        返回上一级
      </button>
    </div>
  );
}
