import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link href="/p2">
        <a>Go to Page 2</a>
      </Link>
    </div>
  );
}
