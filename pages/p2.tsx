import Link from "next/link";
import React from "react";

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  );
}
